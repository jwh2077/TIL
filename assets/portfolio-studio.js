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


const records=window.TIL_INDEX?.records||[];
const materials=window.TIL_LIBRARY_INDEX||[];
const algorithms=window.TIL_ALGORITHMS||[];
const route=(kind,id)=>'#'+kind+'='+encodeURIComponent(id);
const projectFor=item=>current.find(p=>p.title===item.projectName);
const featured=projects.find(p=>p.id==='case-priest')||projects[0];
const dateSort=(a,b)=>b.date.localeCompare(a.date);
const dated=items=>items.filter(x=>x.date).slice().sort(dateSort);
const recent=dated(records).slice(0,3);
const problems=dated(algorithms).slice(0,2);
const references=['stl-foundation','unreal-multiplayer-basics','cpp-smart-pointers']
  .map(id=>materials.find(m=>m.id===id&&m.publication==='reference')).filter(Boolean);
const documents=[['portfolio','문서형 포트폴리오'],['resume','기술 이력서'],['projects','프로젝트별 기술 경험'],['ai-workflow','AI와 함께 개선한 사이트']];
const link=(url,label,cls='')=>'<a'+(cls?' class="'+cls+'"':'')+' href="'+url+'">'+esc(label)+'</a>';
const photo=(asset)=>asset?.src?'<img src="'+esc(asset.src)+'" alt="'+esc(asset.alt||'프로젝트 화면')+'" loading="lazy">':'';
const section=(id,title,all,rows)=>'<section class="pf-index-section" aria-labelledby="pf-'+id+'"><div class="pf-index-heading"><h2 id="pf-'+id+'">'+title+'</h2>'+link(all,'전체 보기 →','pf-index-all')+'</div>'+rows+'</section>';
const search=()=>'<form id="globalSearch"><label class="sr-only" for="globalQuery">전체 자료 검색</label><input id="globalQuery" type="search" placeholder="프로젝트, 글 제목, 태그로 찾기" required><button class="button">검색</button></form>';
const masthead=()=>'<header class="pf-index-masthead"><div><h1>게임 개발 포트폴리오</h1><p>C++ · Unreal Engine / 프로젝트와 개발 기록</p></div>'+search()+'</header>';
const jump=()=>'<nav class="pf-index-nav" aria-label="홈 콘텐츠 바로가기">'+
  [['#career=portfolio','포트폴리오 · PDF'],['#career=resume','기술 이력서'],['#projects','프로젝트'],['#list','학습 기록'],['#library','자료실'],['#algorithms','알고리즘']].map(([u,t])=>link(u,t)).join('')+'</nav>';
const projectRow=(item,mode)=>{
  const asset=projectFor(item)?.cover;
  const visual=(mode==='editorial'||mode==='cinematic')&&asset?.src?'<span class="pf-index-thumb">'+photo(asset)+'</span>':'';
  return '<li><a class="pf-index-project'+(visual?' has-thumb':'')+'" href="'+route('career',item.id)+'">'+visual+'<span class="pf-index-project-text"><strong>'+esc(item.title)+'</strong><span>'+esc(item.role)+'</span><small>'+esc(item.period)+' · '+esc(item.kind)+'</small></span><span class="pf-index-arrow" aria-hidden="true">→</span></a></li>';
};
const projectList=mode=>section('projects','프로젝트','#projects','<ul class="pf-index-projects">'+projects.map(item=>projectRow(item,mode)).join('')+'</ul>');
const recordList=()=>section('recent','최근 학습 기록','#list','<ul class="pf-index-entries">'+recent.map((r,i)=>'<li><a href="'+route('record',r.id)+'"><time datetime="'+esc(r.date)+'">'+esc(r.date_label||r.date)+'</time><strong>'+esc(r.title)+'</strong>'+(i===0&&r.summary?'<span>'+esc(r.summary)+'</span>':'')+'</a></li>').join('')+'</ul>');
const libraryList=()=>section('library','자료실','#library','<ul class="pf-index-simple">'+references.map(r=>'<li>'+link(route('material',r.id),r.title)+'</li>').join('')+'</ul>');
const algorithmList=()=>section('algorithms','알고리즘','#algorithms','<ul class="pf-index-simple">'+problems.map(r=>'<li><a href="'+route('algorithm',r.id)+'"><strong>'+esc(r.title)+'</strong><small>'+esc(r.date)+' · '+esc(r.status)+'</small></a></li>').join('')+'</ul>');
const docList=()=>'<section class="pf-index-section pf-index-documents" aria-labelledby="pf-documents-title"><div class="pf-index-heading"><h2 id="pf-documents-title">포트폴리오 문서</h2></div><ul class="pf-index-simple">'+documents.map(([id,title])=>'<li>'+link(route('career',id),title)+'</li>').join('')+'</ul></section>';
const caseEvidence=()=>{
  const task=featured&&projectFor(featured)?.work?.find(w=>w.figures?.some(f=>f.src==='assets/images/priest-melee-10fps.png'));
  if(!task)return '';
  return '<section class="pf-index-evidence"><div><p class="pf-index-subtitle">'+esc(featured.title)+' · 구현 기록</p><h2>'+esc(task.title)+'</h2><p>'+esc(task.text)+'</p>'+link(route('career',featured.id),'문제와 해결 과정 →','pf-index-all')+'</div><div class="pf-index-figures">'+task.figures.slice(0,2).map(f=>'<figure><a href="'+route('career',featured.id)+'">'+photo(f)+'</a><figcaption>'+esc(f.caption)+'</figcaption></figure>').join('')+'</div></section>';
};
function home(){
  // Every theme exposes the same five kinds of content without opening a detail panel.
  // Images and extended technical examples belong below the index, not in a full-screen hero.
  return '<div class="pf-site pf-'+theme+' pf-index">'+masthead()+jump()+
    '<div class="pf-index-main">'+projectList(theme)+recordList()+'</div>'+
    '<div class="pf-index-resources">'+docList()+libraryList()+algorithmList()+'</div>'+
    (theme==='terminal'?'':caseEvidence())+footer()+'</div>';
}
const footer=()=>'<footer class="pf-footer"><div><strong>개발·학습 기록</strong><span>C++ / Unreal Engine · Portfolio</span><a class="pf-contact" href="mailto:jwh2077@gmail.com">연락처 · jwh2077@gmail.com</a></div><div class="pf-footer-notes"><p>화면 구성과 글 정리에 AI의 도움을 받았으며, 내용과 코드는 제 실제 학습·작업 기록을 바탕으로 했습니다.</p></div></footer>';

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