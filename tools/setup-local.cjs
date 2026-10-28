'use strict';
// Public bootstrap only. No private repository address, token, or rules copy is stored here.
const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');
const readline = require('node:readline/promises');

function run(command, args, options = {}) {
  const result = cp.spawnSync(command, args, {
    encoding: 'utf8', windowsHide: true, timeout: 120000, maxBuffer: 4 * 1024 * 1024,
    ...options, env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GCM_INTERACTIVE: 'Never', ...options.env }
  });
  if (result.error || result.status !== 0) {
    // Credential helper output can contain secrets; never include it in diagnostics.
    const detail = args[0] === 'credential' ? '' : (result.stderr || result.stdout || '').trim();
    throw Error(`${command} ${args[0] || ''} 실패 (종료 코드 ${result.status ?? '없음'})\n${detail || result.error?.code || '인증·설치 상태를 확인하세요.'}`);
  }
  return (result.stdout || '').trim();
}
function repoName(value) {
  if (!/^[A-Za-z0-9][A-Za-z0-9_.-]*\/[A-Za-z0-9][A-Za-z0-9_.-]*$/.test(value || '')) throw Error('비공개 저장소를 소유자/저장소명 형식으로 입력하세요.');
  return value;
}
function originName(value) {
  const match = value.match(/^(?:https:\/\/github\.com\/|git@github\.com:|ssh:\/\/git@github\.com\/)([^/]+\/[^/]+?)\/?$/i);
  if (!match) throw Error('GitHub의 일반 HTTPS 또는 SSH origin인지 확인하세요. 원격 설정은 변경하지 않았습니다.');
  return repoName(match[1].replace(/\.git$/i, ''));
}
function plainPath(file) {
  let stat;
  try { stat = fs.lstatSync(file); } catch (error) { if (error.code === 'ENOENT') return; throw error; }
  if (stat.isSymbolicLink()) throw Error('연결된 폴더·파일은 자동으로 준비하지 않습니다: ' + path.basename(file));
}
function samePath(a, b) {
  const normalize = value => process.platform === 'win32' ? value.toLowerCase() : value;
  return normalize(fs.realpathSync(a)) === normalize(fs.realpathSync(b));
}
async function verifyPrivate(repo, root, command = run, request = fetch) {
  let credential;
  try {
    credential = command('git', ['credential', 'fill'], {
      cwd: root, input: `protocol=https\nhost=github.com\npath=${repo}.git\n\n`
    });
  } catch { throw Error('PC의 Git 인증을 사용할 수 없습니다. GitHub 접근 권한을 설정한 뒤 다시 실행하세요. 웹사이트 로그인만으로는 연결되지 않습니다. README의 수동 연결 방법도 사용할 수 있습니다.'); }
  const token = credential.split(/\r?\n/).find(line => line.startsWith('password='))?.slice(9);
  if (!token) throw Error('Git에서 GitHub 인증 정보를 받지 못했습니다. 토큰을 이 파일에 적지 말고 Git 로그인 상태를 확인하세요.');
  let response;
  try {
    response = await request(`https://api.github.com/repos/${repo}`, {
      headers: { Authorization: 'Bearer ' + token, 'User-Agent': 'TIL-local-setup', Accept: 'application/vnd.github+json' },
      signal: AbortSignal.timeout(15000), redirect: 'error'
    });
  } catch { throw Error('GitHub 접근 권한을 확인하지 못했습니다. 네트워크 연결을 확인하세요.'); }
  if (!response.ok) throw Error(`비공개 저장소 접근 확인 실패 (HTTP ${response.status}). 저장소 이름과 Git 계정 권한을 확인하세요.`);
  const data = await response.json();
  if (data.private !== true || data.full_name?.toLowerCase() !== repo.toLowerCase()) throw Error('요청한 비공개 저장소가 아닙니다. 복제·실행하지 않았습니다.');
}
function argumentsFor(args) {
  const options = { check: false, repo: undefined };
  const seen = new Set();
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (seen.has(arg)) throw Error('중복 옵션입니다: ' + arg);
    seen.add(arg);
    if (arg === '--check') options.check = true;
    else if (arg === '--repo') options.repo = repoName(args[++i]);
    else throw Error('사용법: 작업 환경 준비.cmd [--repo 소유자/저장소명] [--check]');
  }
  return options;
}
async function promptRepo() {
  if (!process.stdin.isTTY) throw Error('새 환경은 --repo 소유자/저장소명을 지정하세요.');
  const prompt = readline.createInterface({ input: process.stdin, output: process.stdout });
  try { return repoName((await prompt.question('기존 비공개 저장소 이름 (소유자/저장소명): ')).trim()); }
  finally { prompt.close(); }
}
async function setup(options = {}, dependencies = {}) {
  const command = dependencies.run || run, log = dependencies.log || console.log;
  const root = fs.realpathSync(options.root || path.resolve(__dirname, '..'));
  const local = path.join(root, 'local'), entry = path.join(root, '00 시작하기');
  const git = (args, cwd = root, extra = {}) => command('git', args, { cwd, ...extra });
  if (Number(process.versions.node.split('.')[0]) < 22) throw Error('Node.js 22 이상을 설치하세요.');
  command('git', ['--version'], { cwd: root });
  if (!samePath(git(['rev-parse', '--show-toplevel']), root)) throw Error('공개 TIL의 최상위 폴더에서 실행하세요.');
  if (originName(git(['remote', 'get-url', 'origin'])).toLowerCase() !== 'jwh2077/til') throw Error('공개 TIL 저장소가 아닙니다. origin을 자동으로 바꾸지 않습니다.');
  for (const file of ['index.html', 'AGENTS.md', 'data/manifest.js']) if (!fs.existsSync(path.join(root, file))) throw Error('공개 TIL 파일이 없습니다: ' + file);
  if (git(['ls-files', '--', 'local', '00 시작하기'])) throw Error('비공개 경로가 공개 Git에서 추적되고 있습니다. 먼저 제외 상태를 확인하세요.');
  // Check separately: Git's combined exit status only requires one ignored path.
  git(['check-ignore', '-q', '--', 'local/manage/server.cjs']);
  git(['check-ignore', '-q', '--', '00 시작하기/확인.lnk']);
  for (const file of [local, entry]) plainPath(file);
  const exists = fs.existsSync(local);
  let repo = options.repo && repoName(options.repo);
  if (exists) {
    if (!fs.statSync(local).isDirectory() || !fs.existsSync(path.join(local, '.git'))) throw Error('local이 있지만 독립 Git 저장소가 아닙니다. 기존 파일은 그대로 두었습니다.');
    plainPath(path.join(local, '.git'));
    if (!samePath(git(['rev-parse', '--show-toplevel'], local), local)) throw Error('local의 Git 루트가 다릅니다. 기존 폴더는 변경하지 않았습니다.');
    const current = originName(git(['remote', 'get-url', 'origin'], local));
    if (repo && repo.toLowerCase() !== current.toLowerCase()) throw Error('요청한 저장소와 기존 local의 origin이 다릅니다. 연결을 바꾸지 않았습니다.');
    repo = current;
  }
  if (git(['status', '--porcelain=v1', '--untracked-files=all'])) throw Error('공개 TIL에 미커밋 변경이 있습니다. 기존 작업을 정리한 뒤 다시 실행하세요. 자동 커밋은 하지 않습니다.');
  if (exists && git(['status', '--porcelain=v1', '--untracked-files=all'], local)) throw Error('local에 미커밋·미추적 파일이 있습니다. 기존 작업을 보존하고 준비를 멈췄습니다.');
  git(['lfs', 'version']);
  repo ||= await (dependencies.promptRepo || promptRepo)();
  await (dependencies.verifyPrivate || verifyPrivate)(repo, root, command);
  log('Git·Node.js·Git LFS와 비공개 저장소 접근 권한을 확인했습니다.');
  if (!exists) {
    if (options.check) { log('검사 완료: local이 없어 준비 실행 시 복제합니다. 관리 도구는 아직 검사하지 않았습니다.'); return { cloned: false, checked: true, localMissing: true }; }
    log('기존 비공개 저장소를 local에 받습니다. 영상·발표 원본 다운로드에는 시간이 걸릴 수 있습니다.');
    try {
      git(['clone', '--config', 'core.hooksPath=.git/hooks', '--config', 'filter.lfs.process=git-lfs filter-process', '--config', 'filter.lfs.required=true',
        '--config', 'filter.lfs.clean=git-lfs clean -- %f', '--config', 'filter.lfs.smudge=git-lfs smudge -- %f',
        '--', `https://github.com/${repo}.git`, local], root, { timeout: 600000, env: { GIT_LFS_SKIP_SMUDGE: '1' } });
    } catch (error) { throw Error(error.message + '\n복제가 중단됐습니다. 남은 local은 삭제하거나 덮어쓰지 않습니다. 상태를 확인하세요.'); }
    if (!samePath(git(['rev-parse', '--show-toplevel'], local), local) || originName(git(['remote', 'get-url', 'origin'], local)).toLowerCase() !== repo.toLowerCase()) throw Error('복제 결과의 경로·origin이 다릅니다. 자동으로 고치지 않습니다.');
    try { git(['lfs', 'install', '--local'], local); git(['lfs', 'pull'], local, { timeout: 600000 }); }
    catch (error) { throw Error(error.message + '\n원본 다운로드가 끝나지 않았습니다. local에서 git lfs pull을 다시 실행한 뒤 준비 도구를 다시 실행하세요.'); }
  }
  for (const file of ['manage/server.cjs', 'manage/core.cjs', 'manage/start.cmd', 'tools/create-shortcuts.ps1', 'AGENTS.md']) {
    let target = local;
    for (const segment of file.split('/')) { target = path.join(target, segment); plainPath(target); }
    if (!fs.existsSync(target) || !fs.statSync(target).isFile()) throw Error('관리 환경 파일이 없습니다: ' + file);
  }
  if (git(['status', '--porcelain=v1', '--untracked-files=all'], local)) throw Error('local에 변경이 있어 실행 준비를 멈췄습니다. 기존 파일을 확인하세요.');
  // Even `git lfs ls-files` may write repository settings. Read pointer files instead.
  const tracked = git(['ls-files', '--stage', '-z'], local).split('\0').filter(Boolean);
  for (const row of tracked) {
    const match = row.match(/^100\d{3} [a-f0-9]+ \d\t([\s\S]+)$/);
    if (!match) continue;
    const file = path.resolve(local, match[1]);
    if (!file.startsWith(local + path.sep) || !fs.realpathSync(file).startsWith(local + path.sep)) throw Error('저장소 밖을 가리키는 파일이 있습니다. 자동 준비를 멈춥니다.');
    if (fs.statSync(file).size > 1024) continue;
    if (fs.readFileSync(file, 'utf8').startsWith('version https://git-lfs.github.com/spec/v1')) throw Error('받지 못한 LFS 원본이 있습니다. local에서 git lfs pull을 실행한 뒤 다시 확인하세요. 기존 파일을 자동 교체하지 않았습니다.');
  }
  for (const file of ['manage/server.cjs', 'manage/core.cjs']) command(process.execPath, ['--check', path.join(local, file)], { cwd: root });
  if (options.check) { log('검사 완료: 연결·원본 다운로드·관리 도구 문법 확인. 파일은 변경하지 않았습니다.'); return { cloned: false, checked: true }; }
  if (fs.existsSync(entry)) log('기존 00 시작하기 폴더를 보존했습니다. 바로가기는 자동 재생성하지 않았습니다.');
  else {
    command('powershell.exe', ['-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', '-File', path.join(local, 'tools/create-shortcuts.ps1')], { cwd: root });
    log('00 시작하기 바로가기를 만들었습니다.');
  }
  log('준비 완료. local/manage/start.cmd 또는 00 시작하기의 관리 바로가기로 실행하세요.');
  log('규칙 파일 이동·복사, Git pull·commit·push는 수행하지 않았습니다.');
  return { cloned: !exists, checked: false };
}
if (require.main === module) {
  (async () => {
    if (process.platform !== 'win32') throw Error('이 준비 도구는 Windows용입니다.');
    await setup(argumentsFor(process.argv.slice(2)));
  })().catch(error => { console.error('\n준비를 마치지 못했습니다.\n' + error.message); process.exitCode = 1; });
}
module.exports = { setup, argumentsFor, originName, verifyPrivate };
