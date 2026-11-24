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

const projectFor=item=>current.find(p=>p.title===item?.projectName);
const featured=projects.find(p=>p.id==='case-priest')||projects[0];
const others=projects.filter(p=>p!==featured);
const href=item=>'#career='+encodeURIComponent(item.id);
const cover=item=>projectFor(item)?.cover;
const actualImage=(asset,eager=false)=>asset?.src?'<img '+(eager?'fetchpriority="high"':'loading="lazy"')+' src="'+esc(asset.src)+'" alt="'+esc(asset.alt||'프로젝트 화면')+'">':'';
const facts=item=>'<p class="pf-meta">'+esc(item.kind)+' · '+esc(item.period)+' · '+esc(item.status)+'</p>';
const role=item=>'<p class="pf-role">'+esc(item.role)+'</p>';
const tech=item=>'<p class="pf-tech">'+esc(item.tags.join(' · '))+'</p>';
const card=(item,mode)=>{
  const picture=actualImage(cover(item));
  return '<a class="pf-project pf-project-'+mode+(picture?'':' pf-project-text')+'" href="'+href(item)+'">'+
    (picture&&mode!=='terminal'&&mode!=='dashboard'?'<div class="pf-project-visual">'+picture+'</div>':'')+
    '<div class="pf-project-information">'+facts(item)+'<h3>'+esc(item.title)+'</h3>'+role(item)+'<p class="pf-lead">'+esc(item.lead)+'</p>'+tech(item)+'</div><span class="pf-row-arrow" aria-hidden="true">→</span></a>';
};
const cards=(items,mode)=>items.map(item=>card(item,mode)).join('');
const search=()=>'<form id="globalSearch"><label class="sr-only" for="globalQuery">전체 자료 검색</label><input id="globalQuery" type="search" placeholder="프로젝트, 글 제목, 태그로 찾기" required><button class="button">검색</button></form>';
const docCards=()=>'<div class="pf-doclinks">'+[['portfolio','문서형 포트폴리오','프로젝트와 역할 전체 요약'],['resume','기술 이력서','기술·역할을 한눈에'],['projects','프로젝트별 기술 경험','구현 결정과 테스트 결과'],['ai-workflow','AI와 함께 개선한 사이트','요구사항 · 구현 위임 · 직접 검토']].map(([id,name,subtitle])=>'<a href="#career='+id+'"><div><strong>'+name+'</strong><small>'+subtitle+'</small></div><span aria-hidden="true">→</span></a>').join('')+'</div>';
const docs=()=>'<details class="pf-documents"><summary>포트폴리오 · 이력서 · 기술 문서</summary>'+docCards()+'</details>';
const learning=()=>'<section class="pf-learning" id="pf-learning"><div class="pf-section-head"><h2>학습 자료</h2></div><div class="pf-learning-links"><a href="#list"><strong>학습 기록</strong><span>날짜별 작업과 오류 분석</span><b aria-hidden="true">→</b></a><a href="#library"><strong>기술 자료실</strong><span>C++ · Unreal 기술 노트</span><b aria-hidden="true">→</b></a><a href="#algorithms"><strong>알고리즘</strong><span>풀이와 시행착오</span><b aria-hidden="true">→</b></a></div></section>';
const title=()=>'<header class="pf-home-title"><h1>C++ · Unreal Engine 게임 개발</h1><p>프로젝트에서 맡은 기능과 구현 과정, 학습 기록</p><a class="pf-text-link" href="#career=portfolio">포트폴리오 문서 · PDF →</a></header>';
const work=(items,mode,label='프로젝트')=>'<section class="pf-work" id="pf-work"><div class="pf-section-head"><h2>'+label+'</h2><a class="pf-text-link" href="#projects">전체 프로젝트 →</a></div><div class="pf-project-grid">'+cards(items,mode)+'</div></section>';
const caseEvidence=()=>{
  const task=projectFor(featured)?.work?.find(w=>w.figures?.some(f=>f.src==='assets/images/priest-melee-10fps.png'));
  if(!task)return '';
  const figures=task.figures.slice(0,2);
  return '<section class="pf-evidence" aria-labelledby="pf-evidence-title"><div class="pf-evidence-copy"><p class="pf-meta">'+esc(featured.title)+' · 구현 기록</p><h2 id="pf-evidence-title">'+esc(task.title)+'</h2><p>'+esc(task.text)+'</p><a class="pf-text-link" href="'+href(featured)+'">문제와 해결 과정 →</a></div><div class="pf-evidence-figures">'+figures.map(f=>'<figure><a href="'+href(featured)+'">'+actualImage(f)+'</a><figcaption>'+esc(f.caption)+'</figcaption></figure>').join('')+'</div></section>';
};
function editorial(){
  const hero=featured?'<section class="pf-feature" aria-label="대표 프로젝트">'+
    (cover(featured)?.src?'<a class="pf-feature-photo" href="'+href(featured)+'">'+actualImage(cover(featured),true)+'</a>':'')+
    '<div class="pf-feature-copy">'+facts(featured)+'<h2><a href="'+href(featured)+'">'+esc(featured.title)+'</a></h2>'+role(featured)+'<p class="pf-lead">'+esc(featured.lead)+'</p>'+tech(featured)+'<a class="pf-text-link" href="'+href(featured)+'">'+esc(featured.title)+' 작업 사례 →</a></div></section>':'';
  return '<div class="pf-site pf-editorial">'+title()+hero+caseEvidence()+search()+work(others,'editorial','다른 프로젝트')+docs()+learning()+footer()+'</div>';
}
function cinematic(){
  const hero=featured?'<section class="pf-reel"><div class="pf-reel-image">'+actualImage(cover(featured),true)+'</div><div class="pf-reel-copy">'+facts(featured)+'<h2>'+esc(featured.title)+'</h2>'+role(featured)+'<p>'+esc(featured.lead)+'</p><a class="pf-text-link" href="'+href(featured)+'">작업 사례 →</a></div></section>':'';
  return '<div class="pf-site pf-cinematic">'+title()+hero+search()+work(others,'cinema','다른 프로젝트')+caseEvidence()+docs()+learning()+footer()+'</div>';
}
function terminal(){
  return '<div class="pf-site pf-terminal">'+title()+search()+work(projects,'terminal')+docs()+learning()+footer()+'</div>';
}
function dashboard(){
  return '<div class="pf-site pf-dashboard">'+title()+search()+
    '<div class="pf-dashboard-layout"><div>'+work(projects,'dashboard')+'</div><aside class="pf-dashboard-panel"><h2>문서 열람</h2>'+docCards()+'</aside></div>'+learning()+footer()+'</div>';
}
const footer=()=>'<footer class="pf-footer"><div><strong>개발·학습 기록</strong><span>C++ / Unreal Engine · Portfolio</span><a class="pf-contact" href="mailto:jwh2077@gmail.com">연락처 · jwh2077@gmail.com</a></div><div class="pf-footer-notes"><p>화면 구성과 글 정리에 AI의 도움을 받았으며, 내용과 코드는 제 실제 학습·작업 기록을 바탕으로 했습니다.</p></div></footer>';

const modes={editorial,cinematic,terminal,dashboard};
const home=()=>modes[theme]?.()||editorial();
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