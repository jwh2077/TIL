(() => {
'use strict';
const projects=(window.TIL_PROJECTS||[]);
const evidence=window.TIL_PORTFOLIO_EVIDENCE;
if(!evidence||!Array.isArray(evidence.cases))throw Error('Portfolio evidence data is missing');
const examples=evidence.cases.map(c=>({...c,lead:c.focus,summary:c.intro,status:c.state,engine:c.stack.join(' · '),projectName:projects.find(p=>p.id===c.sourceProject)?.title,own:c.contributions,record:c.records.at(-1)?.id,evidence:c.records.map(r=>r.date+' '+r.label).join(' / ')}));
const docs=(window.TIL_CAREER_DOCUMENTS||[]).filter(d=>evidence.publicDocs.includes(d.id));
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const caseByTitle=name=>examples.find(x=>x.title===name);
const img=p=>p?.cover?.src?'<img loading="lazy" src="'+esc(p.cover.src)+'" alt="'+esc(p.cover.alt||p.title)+'">':'<div class="ex-noimage" aria-label="프로젝트 이미지 미등록">'+esc(p?.title||'PROJECT')+'</div>';
const projectUrl=p=>'#project='+encodeURIComponent(p.id);
const caseUrl=c=>'#career='+encodeURIComponent(c.id);
const library=()=>'<div class="ex-doc-index">'+docs.map((d,i)=>'<a href="#career='+esc(d.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><strong>'+esc(d.title)+'</strong><small>'+esc(d.category)+'</small></a>').join('')+'</div>';
const allProjects=()=>evidence.other.map((item,i)=>'<a class="ex-archive-row" href="#record='+encodeURIComponent(item.records[0])+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><strong>'+esc(item.title)+'</strong><small>'+esc(item.role)+' · '+esc(item.note)+'</small></div><span>'+esc(item.state)+'</span><b>↗</b></a>').join('');
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


const allCases=examples;
const selected=id=>allCases.find(x=>x.id===id);
const caseParts=c=>[
['문제 상황',c.challenge],
['확인·분석',c.diagnosis],
['실제로 한 작업',c.action],
['확인된 결과',c.observed],
['추가 검증',c.limits]
];
const caseFacts=c=>[['기록 범위',c.period],['구분',c.kind],['핵심 기술',c.stack.slice(0,3).join(' · ')],['담당',c.role]];
const documentIndex=()=>'<section class="ex-document-index"><h2>지원 문서 · 기술 노트</h2><p>개인정보 없는 문서를 사이트에서 읽고, 각 문서의 PDF 버튼으로 출력할 수 있습니다.</p>'+library()+'</section>';

const careerIndex=()=>'<div class="ex-site ex-assessment"><header class="ex-assessment-header"><div><span>APPLICATION DOCUMENTS</span><h1>기술 이력 · 문서 검토</h1><p>개인정보 없이 작성한 기술 근거와 지원 자료를 모았습니다.</p></div><a href="#career=resume" class="ex-action">기술 이력서 ↗</a></header>'+documentIndex()+sourceNote+'</div>';
const caseDetail=id=>{const c=selected(id);if(!c)return window.TIL_SHOWCASE.detail(id);return '<div class="ex-site ex-assessment ex-evidence-case"><nav><a href="#projects">← 프로젝트 검토표</a><span>'+esc(c.status)+'</span></nav><header class="ex-assessment-header"><div><span>PROJECT EVIDENCE / '+esc(c.index)+'</span><h1>'+esc(c.title)+'</h1><p>'+esc(c.lead)+'</p></div></header><div class="ex-evidence-facts">'+caseFacts(c).map(([k,v])=>'<div><span>'+k+'</span><strong>'+esc(v)+'</strong></div>').join('')+'</div><section class="ex-evidence-roles"><h2>직접 기여한 범위</h2><ul>'+c.own.map(v=>'<li>'+esc(v)+'</li>').join('')+'</ul></section><section class="ex-evidence-grid">'+caseParts(c).map(([k,v],i)=>'<article><span>0'+(i+1)+' / '+k+'</span><p>'+esc(v)+'</p></article>').join('')+'</section><footer><span>작업 근거: '+esc(c.evidence)+'</span><a href="#record='+esc(c.record)+'">관련 기록 ↗</a></footer></div>';};

window.TIL_EXPERIENCE={brand:"DEV / EVIDENCE",tagline:"프로젝트 근거 검토",kind:'dashboard',navigation,routes,home,projectIndex,render,menuFor,attach,careerIndex,caseDetail};
})();
