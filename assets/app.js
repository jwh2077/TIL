(() => {
  'use strict';
  const records = window.TIL_INDEX?.records || [];
  const topics = [
    ['all', '전체 기록', '기초 학습부터 프로젝트까지, 시간과 주제를 따라 연결되는 기록입니다.'],
    ['cpp', 'C++ 기초', '문법과 작은 실습으로 프로그래밍의 기본 흐름을 익힌 기록입니다.'],
    ['unreal', 'Unreal · Blueprint', '엔진 사용부터 게임플레이와 Unreal C++ 구현까지 모았습니다.'],
    ['oop', '객체지향 · 게임 구조', '객체의 역할과 관계를 이해하고 게임 구조에 적용한 기록입니다.'],
    ['memory', '포인터 · 메모리', '주소, 참조, 배열과 메모리를 다룬 학습 흐름입니다.'],
    ['stl', 'STL · 자료구조', '컨테이너와 자료 저장 방식을 선택하고 적용한 기록입니다.'],
    ['project', '프로젝트 · 협업', '기능 구현, Git과 팀 협업에서 배운 내용을 모았습니다.']
  ];
  const state = { topic: 'all', project: 'all', month: 'all', sub: 'all', activity:'all' };
  const subdivisions = {
    unreal: [['ai','AI · 행동 흐름',/AI|몬스터|순찰|시야|추적|Behavior|비헤이비어/i], ['combat','전투 · 스탯',/공격|피해|사망|스탯|DataTable/i], ['parts','아이템 · 파츠',/파츠|아이템|Item|Part/i], ['engine','엔진 · 게임플레이',/.*/]],
    cpp: [['flow','문법 · 제어 흐름',/조건|반복|변수|연산|입출력/], ['function','함수 · 문제 풀이',/함수|문제|알고리즘/], ['practice','기초 실습',/.*/]],
    oop: [['class','클래스 · 객체 관계',/클래스|상속|다형|객체/], ['design','설계 · 책임 분리',/.*/]],
    memory: [['pointer','포인터 · 참조',/포인터|참조/], ['storage','배열 · 메모리 관리',/.*/]],
    stl: [['container','컨테이너 활용',/vector|map|STL|컨테이너/i], ['structure','자료구조 · 알고리즘',/.*/]],
    project: [['shop','상점 · 아이템',/상점|판매|구매|아이템/], ['collaboration','Git · 협업',/Git|협업|회고|팀/i], ['implementation','구현 · 구조 개선',/.*/]]
  };
  const subOf = r => (subdivisions[r.primary_topic] || []).find(s => s[2].test([r.title, ...(r.tags || [])].join(' ')))?.[0];
  const $ = s => document.querySelector(s);
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const personal = value => String(value ?? '')
    .replaceAll('학습하면서', '직접 해보면서')
    .replaceAll('학습하고', '공부하고')
    .replaceAll('학습했다', '공부했다')
    .replaceAll('접했다', '처음 써봤다')
    .replaceAll('따라 구현했다', '따라 만들어봤다')
    .replaceAll('구현해보았다', '직접 만들어봤다')
    .replaceAll('구현했다', '직접 만들었다')
    .replaceAll('확인했다', '확인해봤다')
    .replaceAll('검토했다', '비교해봤다')
    .replaceAll('정리했다', '정리해봤다')
    .replaceAll('적용했다', '적용해봤다')
    .replaceAll('정확히 이해하지 못했다', '이 부분은 아직 정확히 이해가 안 됐다')
    .replaceAll('명확하게 이해하지 못했다', '이 부분은 아직 확실하게 이해가 안 됐다');
  const name = id => topics.find(t => t[0] === id)?.[1] || '기타';
  const page = $('#articlePage');
  $('#projects').previousElementSibling.insertAdjacentHTML('beforebegin','<div class="side-title">활동 구분</div><div id="activities" class="project-list"></div>');
  const activities={study:'기초 학습',personal:'개인 프로젝트',team:'팀 프로젝트'};
  const projects=[...new Set(records.map(r=>r.project).filter(Boolean))].sort((a,b)=>{
    const start=p=>records.filter(r=>r.project===p&&r.date).map(r=>r.date).sort()[0]||'9999';
    return start(a).localeCompare(start(b))||a.localeCompare(b);
  });
  const cache = new Map();
  let request = 0;
  function visible() {
    return records.filter(r => (state.activity==='all'||r.activity===state.activity) && (state.topic === 'all' || r.primary_topic === state.topic) &&
      (state.project === 'all' || r.project === state.project) && (state.month === 'all' || r.month === state.month) && (state.sub === 'all' || subOf(r) === state.sub))
      .sort((a, b) => !a.date && b.date ? 1 : a.date && !b.date ? -1 :
        ($('#sort').value === 'asc' ? 1 : -1) * String(a.date || '').localeCompare(String(b.date || '')) || a.id.localeCompare(b.id));
  }
  function controls() {
    $('#tabs').innerHTML = topics.map(([id, label]) => `<button class="tab" type="button" data-topic="${id}" role="tab" aria-selected="${state.topic === id}">${label}<span class="tab-count">${records.filter(r => id === 'all' || r.primary_topic === id).length}</span></button>`).join('');
    $('#activities').innerHTML=[['all','전체 활동'],...Object.entries(activities)].map(([id,label])=>`<button class="project" type="button" data-activity="${id}" aria-pressed="${state.activity===id}">${label}</button>`).join('');
    $('#projects').innerHTML = ['all', ...projects.filter(p=>state.activity==='all'||records.some(r=>r.project===p&&r.activity===state.activity))].map(p => `<button class="project" type="button" data-project="${esc(p)}" aria-pressed="${state.project === p}">${esc(p === 'all' ? '모든 프로젝트 · 시작순' : p)}</button>`).join('');
    $('#months').innerHTML = ['all', ...new Set(records.map(r => r.month).sort())].map(m => `<button class="project" type="button" data-month="${esc(m)}" aria-pressed="${state.month === m}">${m === 'all' ? '모든 기간' : m === 'undated' ? '날짜 미확인 메모' : m === 'project-period' ? '프로젝트 전체 작업' : esc(m.replace('-', '년 ') + '월')}</button>`).join('');
  }
  function render() {
    controls();
    sidebar();
    const topic = topics.find(t => t[0] === state.topic);
    $('#topicTitle').textContent = topic[1]; $('#topicDescription').textContent = topic[2];
    const shown = visible(); $('#count').textContent = `${shown.length}개 기록`;
    $('#records').innerHTML = shown.map(r => `<article class="record"><button class="record-button" type="button" data-record-id="${esc(r.id)}"><div class="record-meta"><span>${esc(r.date_label)}</span><span class="topic-badge">${esc(name(r.primary_topic))}</span></div><h3>${esc(r.title)}</h3><p class="summary">${esc(personal(r.summary))}</p><span class="more">기록 열기 →</span></button></article>`).join('') || '<div class="empty">선택한 조건에 맞는 기록이 없습니다.</div>';
  }
  function load(file) {
    if (!/^data\/(?:\d{4}\/\d{2}|undated|project-period)\/[\w-]+\.js$/.test(file)) return Promise.reject(new Error('잘못된 기록 경로'));
    if (window.TIL_FILES?.[file]) return Promise.resolve(window.TIL_FILES[file]);
    if (!cache.has(file)) cache.set(file, new Promise((resolve, reject) => {
      const script = document.createElement('script'); script.src = file;
      const fail = () => { cache.delete(file); script.remove(); reject(new Error('기록 파일을 열 수 없습니다.')); };
      script.onload = () => window.TIL_FILES?.[file] ? resolve(window.TIL_FILES[file]) : fail();
      script.onerror = fail; document.head.append(script);
    }));
    return cache.get(file);
  }
  const block = (label, value) => value ? `<section class="section"><h3>${label}</h3><p>${esc(personal(value))}</p></section>` : '';
  const list = (label, values) => Array.isArray(values) && values.length ? `<section class="section"><h3>${label}</h3><ul>${values.map(v => `<li>${esc(personal(v))}</li>`).join('')}</ul></section>` : '';
  function gallery(images) {
    if (!Array.isArray(images) || !images.length) return '';
    const items = images.map(item => {
      try {
        const url = new URL(item.url);
        if (url.protocol !== 'https:' || url.hostname !== 'velog.velcdn.com') return '';
        return `<figure class="til-shot"><a href="${esc(url.href)}" target="_blank" rel="noopener noreferrer"><img src="${esc(url.href)}" alt="${esc(item.alt || item.caption || '작업 화면')}" loading="lazy"></a>${item.caption ? `<figcaption>${esc(item.caption)}</figcaption>` : ''}</figure>`;
      } catch { return ''; }
    }).join('');
    return items ? `<section class="section"><h3>직접 만든 화면</h3><div class="til-gallery">${items}</div></section>` : '';
  }
  function link(label, url) {
    try { const u = new URL(url); return ['https:', 'http:'].includes(u.protocol) ? `<a class="source" href="${esc(u.href)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>` : ''; } catch { return ''; }
  }
  const button = (r, label) => r ? `<button class="related-button" type="button" data-record-id="${esc(r.id)}">${esc(label || r.title)}</button>` : '';
  function navigate(id) {
    const hash = '#record=' + encodeURIComponent(id);
    if (location.hash === hash) open(id); else location.hash = hash;
  }
  function sidebar(meta) {
    const topic = meta?.primary_topic || state.topic;
    $('#subnav').hidden = topic === 'all';
    const selected = meta ? subOf(meta) : state.sub;
    const groups = (subdivisions[topic] || []).filter(s => records.some(r => r.primary_topic === topic && subOf(r) === s[0]));
    $('#subtopics').innerHTML = [['all','주제 전체'], ...groups].map(([id,label]) => `<button type="button" class="project" data-sub="${id}" data-parent="${topic}" aria-pressed="${selected === id}">${label}</button>`).join('');
    if (!meta) return;
    $('#articleNav').hidden = false;
    $('#sections').innerHTML = '';
    $('#nearby').innerHTML = records.filter(r => r.primary_topic === topic && subOf(r) === selected).map(r => `<button type="button" class="project" data-record-id="${esc(r.id)}" ${r.id === meta.id ? 'aria-current="page"' : ''}>${esc(r.title)}</button>`).join('');
  }
  function buildSections() {
    const sections = [...$('#detailContent').querySelectorAll('.core,.section,.extra,.related')].filter(s => !s.closest('.extra-body'));
    $('#sections').innerHTML = sections.map((s,i) => {
      s.id = 'article-section-' + i;
      return `<button type="button" class="project" data-section="${s.id}">${esc(s.querySelector('h3,summary')?.textContent || '참고 자료')}</button>`;
    }).join('');
  }
  async function open(id) {
    const meta = records.find(r => r.id === id); if (!meta) return;
    const token = ++request;
    $('#detailContent').innerHTML = `<div class="detail-top"><h2 id="detailTitle">기록을 여는 중…</h2></div>`;
    $('#listPage').hidden = true; page.hidden = false; sidebar(meta);
    
    try {
      const r = (await load(meta.file)).find(x => x.id === id);
      if (!r) throw new Error('기록을 찾을 수 없습니다.');
      if (token !== request || page.hidden) return;
      let sequence = visible(); if (!sequence.some(x => x.id === id)) sequence = records;
      const at = sequence.findIndex(x => x.id === id);
      const related = records.filter(x => x.id !== id && x.primary_topic === meta.primary_topic)
        .sort((a,b) => Math.abs(Date.parse(a.date) - Date.parse(meta.date)) - Math.abs(Date.parse(b.date) - Date.parse(meta.date))).slice(0,3);
      const sources = (r.references || []).map(x => link(x.label || x.title || '참고 기록', x.url)).join('<br>');
      $('#detailContent').innerHTML = `<div class="detail-top"><div><div class="record-meta">${esc(meta.date_label)} · ${esc(name(meta.primary_topic))}</div><h2 id="detailTitle" class="detail-title">${esc(r.title)}</h2></div></div><p class="detail-label">${esc(r.project || '개인 학습')} · ${esc(r.understanding || r.phase || '')}${r.date_basis ? '<br>날짜 기준: ' + esc(r.date_basis) : ''}</p><section class="core"><h3>이날 한 것</h3><p>${esc(personal(r.study_content))}</p></section>${block('작업하면서 해본 것', r.learning_process)}${gallery(r.images)}${block('직접 적용한 부분', r.application)}${block('결과', r.result)}<details class="extra"><summary>막힌 부분과 참고한 것</summary><div class="extra-body">${list('그때 궁금했던 것', r.questions)}${list('헷갈리거나 막힌 부분', r.mistakes_or_difficulties)}${block('나중에 다시 연결된 부분', r.later_connection)}${block('다음에 이어서 볼 것', r.next_learning)}${sources}${link('Velog 원문', r.velog)}</div></details><section class="related"><h3>앞뒤 기록</h3><div class="related-list">${button(sequence[at-1], '← 이전 기록')}${button(sequence[at+1], '다음 기록 →')}</div></section><section class="related"><h3>비슷한 내용</h3><div class="related-list">${related.map(x => button(x)).join('')}</div></section>`;
      buildSections(); window.scrollTo({ top: 0 }); $('#detailTitle').setAttribute('tabindex', '-1'); $('#detailTitle').focus();
    } catch (error) {
      if (token !== request || page.hidden) return;
      $('#detailContent').innerHTML = `<div class="detail-top"><h2 id="detailTitle">기록을 열지 못했습니다</h2></div><p>${esc(error.message)}</p>${button(meta, '다시 열기')}`;
    }
  }
  for (const [selector, key] of [['#tabs','topic'], ['#projects','project'], ['#months','month'],['#activities','activity']]) {
    $(selector).addEventListener('click', e => { const b = e.target.closest(`[data-${key}]`); if (b) { state[key] = b.dataset[key]; if (key === 'topic') state.sub = 'all'; if(key==='activity')state.project='all'; location.hash = 'list'; fromHash(); } });
  }
  $('#subtopics').addEventListener('click', e => { const b = e.target.closest('[data-sub]'); if (b) { state.topic = b.dataset.parent; state.sub = b.dataset.sub; location.hash = 'list'; fromHash(); } });
  $('#nearby').addEventListener('click', e => { const b = e.target.closest('[data-record-id]'); if (b) navigate(b.dataset.recordId); });
  $('#sections').addEventListener('click', e => { const b = e.target.closest('[data-section]'); if (b) document.getElementById(b.dataset.section)?.scrollIntoView({ behavior: 'smooth' }); });
  $('#sort').addEventListener('change', render);
  $('#records').addEventListener('click', e => { const b = e.target.closest('[data-record-id]'); if (b) navigate(b.dataset.recordId); });
  $('#detailContent').addEventListener('click', e => { const b = e.target.closest('[data-record-id]'); if (b) navigate(b.dataset.recordId); });
  $('#backToList').addEventListener('click', () => { location.hash = 'list'; });
  function fromHash() {
    if (location.hash === '#library' || location.hash.startsWith('#material=') || location.hash === '#algorithms' || location.hash.startsWith('#algorithm=')) {
      ++request; page.hidden = true; $('#listPage').hidden = true;
      $('#articleNav').hidden = true; $('#subnav').hidden = true; return;
    }
    if (location.hash.startsWith('#record=')) {
      try { const id = decodeURIComponent(location.hash.slice(8)); if (records.some(r => r.id === id)) { open(id); return; } } catch {}
    }
    ++request; page.hidden = true; $('#listPage').hidden = false; $('#articleNav').hidden = true; render();
  }
  window.addEventListener('hashchange', fromHash);
  $('#total').textContent = records.length; $('#topicTotal').textContent = topics.length - 1;
  const dates = records.filter(r => r.date).flatMap(r => [r.date, r.date_end || r.date]).sort();
  $('#period').textContent = `${dates[0] || '—'} ~ ${dates.at(-1) || '—'}`;
  render(); fromHash();
})();
