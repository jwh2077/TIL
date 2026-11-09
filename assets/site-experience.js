(() => {
'use strict';
const projects=(window.TIL_PROJECTS||[]);
const examples=window.TIL_SHOWCASE?.cases||[];
const docs=window.TIL_CAREER_DOCUMENTS||[];
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const caseByTitle=name=>examples.find(x=>x.title===name);
const img=p=>p?.cover?.src?'<img loading="lazy" src="'+esc(p.cover.src)+'" alt="'+esc(p.cover.alt||p.title)+'">':'<div class="ex-noimage" aria-label="프로젝트 이미지 미등록">'+esc(p?.title||'PROJECT')+'</div>';
const projectUrl=p=>'#project='+encodeURIComponent(p.id);
const caseUrl=c=>'#career='+encodeURIComponent(c.id);
const library=()=>'<div class="ex-doc-index">'+docs.map((d,i)=>'<a href="#career='+esc(d.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><strong>'+esc(d.title)+'</strong><small>'+esc(d.category)+'</small></a>').join('')+'</div>';
const allProjects=()=>projects.map((p,i)=>'<a class="ex-archive-row" href="'+projectUrl(p)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><strong>'+esc(p.title)+'</strong><small>'+esc(p.summary)+'</small></div><span>'+esc(p.period||'기록 기간 미확인')+'</span><b>↗</b></a>').join('');
const sourceNote='<p class="ex-source-note">기록 기반 공개 포트폴리오입니다. 확인되지 않은 성과나 완료 여부는 표기하지 않았습니다. 화면 구성에 AI의 도움을 받았으며 실제 프로젝트 기록과 구분했습니다.</p>';
const contact='<a class="ex-contact" href="mailto:jwh2077@gmail.com">연락처 · jwh2077@gmail.com</a>';

const navigation=[['home','표지'],['print','책자 목차'],['projects','프로젝트'],['career','문서'],['list','연구 기록'],['library','기술 자료']];
const routes=['print'];
const chapters=()=>examples.map((c,i)=>'<a class="ex-chapter" href="'+caseUrl(c)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(c.kind)+' · '+esc(c.period)+'</small><h2>'+esc(c.title)+'</h2><p>'+esc(c.lead)+'</p></div><b>읽기 ↗</b></a>').join('');
const home=()=>'<div class="ex-site ex-book"><section class="ex-book-cover"><div class="ex-book-top"><span>PORTFOLIO</span><span>2026 / C++ · UNREAL ENGINE</span></div><div class="ex-book-cover-title"><p>GAME CLIENT DEVELOPMENT</p><h1>만들고,<br>확인하고,<br><em>기록합니다.</em></h1><p>C++과 Unreal Engine을 이용한 프로젝트의 담당 역할과 문제 해결 경험을 정리했습니다.</p></div><div class="ex-book-bottom"><span>TECHNICAL PORTFOLIO</span><a href="#print">책자 읽기 ↗</a></div></section><section class="ex-book-preface"><span>FOREWORD</span><h2>프로젝트의 완성 여부와<br>기술적 시도를 구분합니다.</h2><p>게임플레이 구현을 학습하며 확인한 문제와 해결 과정을 포트폴리오의 주된 내용으로 삼았습니다.</p></section><section class="ex-book-chapters"><h2>Contents.</h2>'+chapters()+'</section><section class="ex-book-publications"><h2>문서와 기술 기록</h2>'+library()+'</section>'+contact+sourceNote+'</div>';
const projectIndex=()=>'<div class="ex-site ex-book ex-book-archive"><header><span>CHAPTER INDEX</span><h1>프로젝트 기록</h1><p>대표 사례를 먼저 읽고, 이후 원래 프로젝트 기록으로 이동할 수 있습니다.</p></header>'+chapters()+'<section class="ex-archive"><h2>부록 · 전체 프로젝트</h2>'+allProjects()+'</section>'+sourceNote+'</div>';
const render=type=>type==='print'?'<div class="ex-site ex-book ex-book-print"><div class="ex-print-tools"><a href="#home">← 표지</a><button type="button" data-print-book>이 책자 인쇄 · PDF 저장</button></div><div class="ex-print-paper"><div class="ex-book-top"><span>TECHNICAL PORTFOLIO</span><span>C++ / UNREAL ENGINE</span></div><header><h1>프로젝트 기술 사례집</h1><p>담당 역할과 문제 해결 과정 · 공개용 문서</p></header>'+examples.map((c,i)=>'<section class="ex-print-chapter"><small>CASE STUDY / '+String(i+1).padStart(2,'0')+'</small><h2>'+esc(c.title)+'</h2><p><strong>기간</strong> '+esc(c.period)+'　<strong>담당</strong> '+esc(c.role)+'</p><p>'+esc(c.lead)+'</p><h3>주요 작업</h3><p>'+esc(c.summary)+'</p><h3>개발 중 문제</h3><p>'+esc(c.status)+' · 상세 프로젝트 사례 화면에서 작업 과정과 검증 범위를 확인할 수 있습니다.</p><p class="ex-case-ref">상세 보기: '+esc(c.title)+' / '+esc(c.id)+'</p></section>').join('')+'<footer>이 자료는 원본 기록을 토대로 작성했으며 확인되지 않은 성과는 포함하지 않았습니다.</footer></div></div>':'';
const menuFor=r=>r.type==='print'?'print':r.type==='project'?'projects':null;
const attach=root=>{const button=root.querySelector('[data-print-book]');if(button)button.addEventListener('click',()=>window.print());};

window.TIL_EXPERIENCE={kind:'minimal',navigation,routes,home,projectIndex,render,menuFor,attach};
})();
