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

const navigation=[['home','개요'],['review','기술 역량'],['projects','프로젝트'],['career','지원 문서'],['list','작업 기록'],['library','지식 자료']];
const routes=['review'];
const skillGroups=[
 {key:'AI',title:'AI · Combat',desc:'AI의 순찰·감지·공격 전환과 충돌 판정 점검',projects:['Project Priest'],docs:['unreal','debugging']},
 {key:'Movement',title:'Gameplay · Movement',desc:'방어구 무게·속도·입력 누적 시간과 이동 설정',projects:['Don’t Drop'],docs:['unreal','debugging']},
 {key:'Network',title:'Multiplayer · RPC',desc:'GameMode 규칙 검증과 Controller RPC·PlayerState 동기화',projects:['ChatX · 숫자 야구'],docs:['networking','cpp']},
 {key:'C++',title:'C++ · Ownership',desc:'Shop/Item 책임 분리와 unique_ptr 기반 소유권',projects:['팀 TextRPG'],docs:['cpp','debugging']}
];
const skillCards=()=>skillGroups.map((s,i)=>'<article class="ex-skill-card"><span>0'+(i+1)+' / '+esc(s.key)+'</span><h3>'+esc(s.title)+'</h3><p>'+esc(s.desc)+'</p><div><strong>근거 프로젝트</strong>'+s.projects.map(n=>{const c=examples.find(x=>x.title===n);return c?'<a href="'+caseUrl(c)+'">'+esc(n)+' ↗</a>':'<span>'+esc(n)+'</span>'}).join('')+'</div></article>').join('');
const home=()=>'<div class="ex-site ex-assessment"><div class="ex-assessment-header"><div><span>GAME CLIENT / EVIDENCE-BASED PROFILE</span><h1>개발 포트폴리오<br><em>검토 요약</em></h1><p>담당 역할, 사용 기술, 문제 해결의 근거를 빠르게 확인할 수 있도록 구성했습니다.</p></div><a class="ex-action" href="#career=resume">기술 이력서 열기 ↗</a></div><div class="ex-metrics"><div><small>대표 사례</small><strong>04</strong><span>직접 참여한 프로젝트 중심</span></div><div><small>핵심 분야</small><strong>04</strong><span>AI · Gameplay · Network · C++</span></div><div><small>문서</small><strong>'+docs.length+'</strong><span>기술·지원 자료</span></div></div><div class="ex-assessment-columns"><section><header><h2>기술 역량 증거</h2><a href="#review">상세 확인 ↗</a></header><div class="ex-skill-grid">'+skillCards()+'</div></section><aside><h2>바로 확인</h2>'+[['portfolio','포트폴리오'],['resume','기술 이력서'],['projects','프로젝트 기술 경험'],['checklist','지원 자료 점검표']].map(([id,title])=>'<a href="#career='+id+'">'+title+' <span>↗</span></a>').join('')+'<p>문서는 개인정보 없이 작성됐으며 A4/PDF 출력이 가능합니다.</p></aside></div>'+sourceNote+'</div>';
const projectIndex=()=>'<div class="ex-site ex-assessment"><header class="ex-assessment-header"><div><span>PROJECT REVIEW</span><h1>프로젝트 검토표</h1><p>작업의 형태와 역할, 진행 상태를 구분합니다.</p></div></header><section class="ex-review-table"><div class="ex-review-head"><span>프로젝트</span><span>담당 기능</span><span>상태</span></div>'+examples.map(c=>'<a class="ex-review-row" href="'+caseUrl(c)+'"><strong>'+esc(c.title)+'</strong><span>'+esc(c.role)+'</span><small>'+esc(c.status)+'</small></a>').join('')+'</section><section class="ex-archive"><h2>전체 실습·작업 기록</h2>'+allProjects()+'</section>'+sourceNote+'</div>';
const render=type=>type==='review'?'<div class="ex-site ex-assessment"><header class="ex-assessment-header"><div><span>SKILL / EVIDENCE MATRIX</span><h1>기술 역량과 근거</h1><p>프로젝트 수행 내역을 기준으로 확인 가능한 경험을 정리했습니다.</p></div></header><div class="ex-skill-grid">'+skillCards()+'</div><section class="ex-assessment-docs"><h2>개념별 기술 문서</h2>'+library()+'</section>'+sourceNote+'</div>':'';
const menuFor=r=>r.type==='review'?'review':r.type==='project'?'projects':null;
const attach=()=>{};

window.TIL_EXPERIENCE={kind:'dashboard',navigation,routes,home,projectIndex,render,menuFor,attach};
})();
