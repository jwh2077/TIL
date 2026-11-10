(() => {
'use strict';
const availableThemes=['editorial','cinematic','terminal','dashboard'];
const storageKey='til-portfolio-theme';
let theme=availableThemes.includes(window.TIL_PORTFOLIO_THEME)?window.TIL_PORTFOLIO_THEME:'editorial';
try{
  const saved=window.localStorage.getItem(storageKey);
  if(availableThemes.includes(saved))theme=saved;
  else if(saved)window.localStorage.setItem(storageKey,theme);
}catch{ /* file:// or privacy settings may disable storage */ }
const projects=window.TIL_SHOWCASE?.cases||[];
const current=(window.TIL_PROJECTS||[]);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const links={career:'#career',projects:'#projects',study:'#list',library:'#library',algorithms:'#algorithms'};
const showcaseProject=item=>current.find(p=>p.title===item.projectName);
const asset=item=>showcaseProject(item)?.cover;
const image=item=>{const cover=asset(item);return cover?.src?'<img loading="lazy" src="'+esc(cover.src)+'" alt="'+esc(cover.alt||item.title+' 플레이 화면')+'">':'<span class="pf-abstract" aria-hidden="true"><small>'+esc(item.engine)+'</small><strong>'+esc(item.title)+'</strong></span>';};
const chipList=item=>'<div class="pf-chips">'+item.tags.map(t=>'<span>'+esc(t)+'</span>').join('')+'</div>';
const cards=(type='grid')=>projects.map((p,i)=>'<a class="pf-project pf-project-'+type+'" href="#career='+esc(p.id)+'"><div class="pf-project-visual">'+image(p)+'</div><div class="pf-project-information"><div class="pf-overline"><span>'+esc(p.index)+' / '+esc(p.kind)+'</span><span>'+esc(p.status)+'</span></div><h3>'+esc(p.title)+'</h3><p>'+esc(p.lead)+'</p><dl><dt>담당</dt><dd>'+esc(p.role)+'</dd></dl>'+chipList(p)+'<span class="pf-next">기술 사례 읽기 <span aria-hidden="true">↗</span></span></div></a>').join('');
const keyFacts=()=>'<div class="pf-facts">'+[['핵심 언어','C++'],['개발 환경','Unreal Engine 5'],['작업 분야','AI · Gameplay · Networking']].map(([k,v])=>'<div><small>'+k+'</small><strong>'+v+'</strong></div>').join('')+'</div>';
const docCards=()=>'<div class="pf-doclinks">'+[['portfolio','문서형 포트폴리오','프로젝트와 역할 전체 요약'],['resume','기술 이력서','개인정보 없는 개발 경험'],['projects','프로젝트별 기술 경험','문제 분석과 검증 범위'],['interview','기술 면접 노트','C++ · Unreal · RPC']].map(([id,name,subtitle],i)=>'<a href="#career='+id+'"><span>0'+(i+1)+'</span><div><strong>'+name+'</strong><small>'+subtitle+'</small></div><span>↗</span></a>').join('')+'</div>';
const learning=()=>'<section class="pf-learning" id="pf-learning"><div class="pf-heading"><small>RESEARCH & LEARNING</small><h2>기술을 배우고 기록하는 과정</h2><p>구현뿐 아니라 문제를 찾고 수정한 과정도 남깁니다. 날짜별 작업 기록과 개념별 정리 노트로 이어집니다.</p></div><div class="pf-learning-links"><a href="#list"><span>학습 기록</span><strong>날짜별 작업과 오류 분석</strong><b>↗</b></a><a href="#library"><span>기술 자료실</span><strong>C++ · Unreal 기술 노트</strong><b>↗</b></a><a href="#algorithms"><span>알고리즘</span><strong>풀이와 시행착오</strong><b>↗</b></a></div></section>';
const footer=()=>'<footer class="pf-footer"><div><strong>개발·학습 기록</strong><span>C++ / Unreal Engine · Portfolio</span><a class="pf-contact" href="mailto:jwh2077@gmail.com">연락처 · jwh2077@gmail.com</a></div><div class="pf-footer-notes"><p>화면 구성과 글 정리에 AI의 도움을 받았으며, 내용과 코드는 제 실제 학습·작업 기록을 바탕으로 했습니다.</p></div></footer>';
const navHero=()=>'<div class="pf-topline"><span>C++ / UNREAL ENGINE</span><span>PORTFOLIO · 2026</span></div>';
function editorial(){
return '<div class="pf-site pf-editorial">'+navHero()+
'<section class="pf-hero"><div class="pf-hero-copy"><p class="pf-kicker">GAME CLIENT DEVELOPMENT / SELECTED WORK</p><h1>코드를 작성하고,<br><em>움직임을 만들고,</em><br>문제를 해결합니다.</h1><p class="pf-intro">C++과 Unreal Engine으로 적 AI, 캐릭터 이동, 네트워크 게임 규칙을 구현했습니다. 구현 과정에서 맡은 역할과 판단을 사례로 정리했습니다.</p><div class="pf-actions"><a class="pf-primary" href="#career=case-priest">대표 프로젝트 보기 <span>↗</span></a><a class="pf-secondary" href="#career=portfolio">포트폴리오 문서</a></div></div><div class="pf-hero-art"><div class="pf-hero-photo">'+image(projects[0])+'</div><div class="pf-image-caption"><span>01 / PROJECT PRIEST</span><span>AI · COMBAT</span></div></div></section>'+
keyFacts()+'<section class="pf-work" id="pf-work"><div class="pf-heading"><small>01 / SELECTED WORK</small><h2>주요 프로젝트</h2><p>단순 기능 나열보다 실제 담당한 부분과 기술적 문제 해결을 중심으로 정리했습니다.</p></div><div class="pf-project-grid">'+cards()+'</div></section>'+
'<details class="pf-documents"><summary>문서로 보기</summary><div class="pf-heading"><small>02 / DOCUMENTS</small><h2>포트폴리오와 지원 문서</h2><p>문서를 사이트 안에서 읽거나 PDF로 출력할 수 있습니다.</p></div>'+docCards()+'</details>'+learning()+footer()+'</div>';
}
function cinematic(){
return '<div class="pf-site pf-cinematic"><section class="pf-cinema-hero"><div class="pf-cinema-image">'+image(projects[0])+'</div><div class="pf-cinema-overlay"><p class="pf-kicker">INTERACTIVE EXPERIENCES / GAME CLIENT ENGINEERING</p><h1>게임의 순간을<br>코드로 연결하다.</h1><p>C++ · Unreal Engine 게임 개발 작업과 문제 해결 사례</p><a href="#career=case-priest" class="pf-primary">대표 사례 탐색 <span>↗</span></a></div><div class="pf-cinema-index">FEATURED WORK / 01 — 04</div></section>'+
'<section class="pf-work" id="pf-work"><div class="pf-heading"><small>THE PROJECT REEL</small><h2>Selected projects.</h2><p>프로젝트별 기술, 담당 역할, 구현 과정으로 이어집니다.</p></div><div class="pf-project-grid">'+cards('cinema')+'</div></section>'+
'<div class="pf-cinema-statement"><span>THE PROCESS</span><strong>움직임 · 전투 · 동기화<br>눈에 보이는 결과 뒤의 구조를 탐색합니다.</strong></div>'+
'<details class="pf-documents"><summary>문서로 보기</summary><div class="pf-heading"><small>DOCUMENT LIBRARY</small><h2>Technical documents.</h2></div>'+docCards()+'</details>'+learning()+footer()+'</div>';
}
function terminal(){
return '<div class="pf-site pf-terminal"><section class="pf-terminal-window"><div class="pf-terminal-bar"><span class="pf-lights">● ● ●</span><span>portfolio / overview</span><span>READ ONLY</span></div><div class="pf-terminal-output"><p class="pf-prompt">$ cat profile.txt</p><h1>게임을 만드는<br>개발 과정의 기록<span class="pf-cursor">_</span></h1><p class="pf-terminal-comment">// Unreal Engine 5 · C++ · Gameplay Programming</p><p>적 AI의 행동 전환, 이동 속도와 방어구 무게, RPC를 통한 메시지 전달을 실제 작업 기록 중심으로 정리했습니다.</p><div class="pf-terminal-command"><a href="#career=case-priest">[01] 프로젝트 탐색 ↗</a><a href="#career=portfolio">[02] 기술 문서 ↗</a><a href="#list">[03] 학습 로그 ↗</a></div></div></section>'+
'<section class="pf-work" id="pf-work"><div class="pf-heading"><small>./projects --list --details</small><h2>project_index</h2><p>코드와 작업 로그에 연결되는 주요 프로젝트 4건입니다.</p></div><div class="pf-project-grid">'+cards('terminal')+'</div></section>'+
'<details class="pf-documents"><summary>문서로 보기</summary><div class="pf-heading"><small>./documents --read</small><h2>기술 문서</h2></div>'+docCards()+'</details>'+learning()+footer()+'</div>';
}
function dashboard(){
return '<div class="pf-site pf-dashboard"><div class="pf-dashboard-top"><div><span>OVERVIEW / GAME CLIENT</span><h1>Development Portfolio</h1><p>C++ · Unreal Engine · 프로젝트 중심 기술 이력</p></div><a href="#career=resume" class="pf-primary">기술 이력서 보기 ↗</a></div>'+
'<div class="pf-dashboard-metrics"><div><small>대표 작업</small><strong>04</strong><span>프로젝트 사례</span></div><div><small>핵심 분야</small><strong>03</strong><span>AI · 이동 · 네트워크</span></div><div><small>기록 구분</small><strong>확인</strong><span>구현·검증 범위 표시</span></div></div>'+
'<div class="pf-dashboard-layout"><div><section class="pf-work" id="pf-work"><div class="pf-heading"><small>PROJECT DATABASE</small><h2>대표 프로젝트</h2></div><div class="pf-project-grid">'+cards('dashboard')+'</div></section></div>'+
'<aside class="pf-dashboard-panel"><h2>기술 집중 분야</h2><div><span>01</span><strong>AI · Combat</strong><small>Behavior Tree / Blackboard</small></div><div><span>02</span><strong>Gameplay · Movement</strong><small>CharacterMovement / Enhanced Input</small></div><div><span>03</span><strong>Multiplayer</strong><small>RPC / Replication / GameMode</small></div><h2>문서 열람</h2>'+docCards()+'</aside></div>'+learning()+footer()+'</div>';
}
const modes={editorial,cinematic,terminal,dashboard};
const home=()=>{
  const content=modes[theme]?.()||editorial();
  const search='<form id="globalSearch"><label class="sr-only" for="globalQuery">전체 자료 검색</label><input id="globalQuery" type="search" placeholder="프로젝트, 글 제목, 태그로 찾기" required><button class="button">검색</button></form>';
  return content.replace('<section class="pf-work"',search+'<section class="pf-work"');
};
const hub=()=>home();
function setTheme(next){
  if(!availableThemes.includes(next))return false;
  theme=next;
  window.TIL_PORTFOLIO_THEME=next;
  document.body.dataset.portfolioTheme=next;
  window.TIL_PORTFOLIO.theme=next;
  try{window.localStorage.setItem(storageKey,next);}catch{/* storage unavailable */}
  return true;
}
window.TIL_PORTFOLIO={theme,availableThemes,home,hub,setTheme,detail:id=>window.TIL_SHOWCASE.detail(id)};
})();