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

const navigation=[['home','WORKSPACE'],['lab','TECH LAB'],['projects','PROJECTS'],['library','KNOWLEDGE'],['list','LOGS'],['career','RESUME']];
const routes=['lab'];
const vocab=[['C++','C++ 객체지향','포인터, 참조, 상속과 스마트 포인터를 실제 코드와 함께 학습했습니다.','cpp'],['UNREAL','엔진 구조','AIController, Component, DataTable, 이동 컴포넌트 책임을 구분합니다.','unreal'],['NETWORK','멀티플레이','GameMode, RPC, Replication 실행 조건을 숫자 야구에 연결했습니다.','networking'],['DEBUG','오류 분석','Collision·Anim Notify와 이동 입력의 재현 조건을 분석했습니다.','debugging']];
const lab=()=>'<div class="ex-site ex-devlab"><div class="ex-shell-header"><span>workspace / technical-lab</span><span>INDEXED REFERENCES</span></div><header class="ex-lab-heading"><span>&gt; open ./technical-lab</span><h1>기술 실험실</h1><p>기술 개념 → 적용한 프로젝트 → 원본 학습 기록 순으로 살펴볼 수 있습니다.</p></header><div class="ex-lab-grid">'+vocab.map(([key,title,description,id],i)=>'<article class="ex-lab-module"><span>MODULE 0'+(i+1)+' / '+key+'</span><h2>'+title+'</h2><p>'+description+'</p><a href="#career='+id+'">기술 노트 열기 ↗</a></article>').join('')+'</div><section class="ex-lab-flow"><h2>실제 구현과 연결</h2>'+examples.map(c=>'<a href="'+caseUrl(c)+'"><code>./projects/'+esc(c.id)+'</code><span>'+esc(c.lead)+'</span><b>↗</b></a>').join('')+'</section>'+sourceNote+'</div>';
const home=()=>'<div class="ex-site ex-devlab"><div class="ex-shell-header"><span>~/portfolio</span><span>READ ONLY · PUBLIC</span></div><section class="ex-devlab-hero"><span class="ex-prompt">&gt; cat about.md</span><h1>게임을 만드는 과정에서<br><em>코드가 실행되는 이유</em>를 탐구합니다.</h1><p>C++ / Unreal Engine의 게임플레이와 네트워크를 학습하며, 동작 경로와 원인을 기록합니다.</p><div class="ex-command-row"><a href="#lab">./open-tech-lab ↗</a><a href="#projects">./projects ↗</a><a href="#list">./daily-logs ↗</a></div></section><div class="ex-terminal-cols"><section><h2>$ ls ./projects</h2>'+examples.map(c=>'<a class="ex-code-row" href="'+caseUrl(c)+'"><span>'+esc(c.id)+'</span><strong>'+esc(c.title)+'</strong><small>'+esc(c.role)+'</small></a>').join('')+'</section><aside><h2>$ cat ./skills</h2>'+vocab.map(v=>'<a href="#career='+v[3]+'"><strong>'+v[0]+'</strong><span>'+v[1]+'</span></a>').join('')+'</aside></div><section class="ex-lab-banner"><h2>기술을 어떻게 이해하고 사용하는가?</h2><p>답은 기술 실험실의 개념 설명과 프로젝트별 검증 기록에 나눠 두었습니다.</p><a href="#lab">TECH LAB 열기 ↗</a></section>'+contact+sourceNote+'</div>';
const projectIndex=()=>'<div class="ex-site ex-devlab"><div class="ex-shell-header"><span>~/portfolio/projects</span><span>ALL WORK</span></div><header class="ex-lab-heading"><span>&gt; ls -la ./projects</span><h1>프로젝트 인덱스</h1><p>선별 프로젝트와 전체 실습을 분리해 기록합니다.</p></header><section class="ex-lab-flow"><h2>대표 사례</h2>'+examples.map(c=>'<a href="'+caseUrl(c)+'"><code>'+esc(c.index)+'.'+esc(c.title)+'</code><span>'+esc(c.role)+'</span><b>↗</b></a>').join('')+'</section><section class="ex-archive"><h2>전체 기록 목록</h2>'+allProjects()+'</section>'+sourceNote+'</div>';
const render=type=>type==='lab'?lab():'';
const menuFor=r=>r.type==='lab'?'lab':r.type==='project'?'projects':null;
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

const careerIndex=()=>'<div class="ex-site ex-devlab"><div class="ex-shell-header"><span>~/portfolio/docs</span><span>MARKDOWN / PRINT</span></div><header class="ex-lab-heading"><span>&gt; find ./docs -type f</span><h1>문서 저장소</h1><p>기술 노트와 지원 자료를 분야별로 정리했습니다.</p></header>'+documentIndex()+sourceNote+'</div>';
const caseDetail=id=>{const c=selected(id);if(!c)return window.TIL_SHOWCASE.detail(id);return '<div class="ex-site ex-devlab ex-debug-case"><div class="ex-shell-header"><span>./project/'+esc(c.id)+'</span><span>TRACE · PUBLIC</span></div><header class="ex-lab-heading"><span>&gt; cat ./project/summary.md</span><h1>'+esc(c.title)+'</h1><p>'+esc(c.lead)+'</p><a href="#projects">← projects</a></header><div class="ex-debug-meta">'+caseFacts(c).map(([k,v])=>'<div><span>'+k+'</span><strong>'+esc(v)+'</strong></div>').join('')+'</div><section class="ex-debug-ownership"><h2>$ ls ./contribution</h2>'+c.own.map((v,i)=>'<p><span>0'+(i+1)+'</span> '+esc(v)+'</p>').join('')+'</section><section class="ex-debug-timeline"><h2>$ cat ./debug_trace</h2>'+caseParts(c).map(([k,v],i)=>'<article><span>STEP '+String(i+1).padStart(2,'0')+' / '+k+'</span><p>'+esc(v)+'</p></article>').join('')+'</section><footer><span>근거 · '+esc(c.evidence)+'</span><a href="#record='+esc(c.record)+'">원본 기록 열기 ↗</a></footer></div>';};

window.TIL_EXPERIENCE={brand:"DEV / LAB",tagline:"C++ · Unreal 기술 실험실",kind:'terminal',navigation,routes,home,projectIndex,render,menuFor,attach,careerIndex,caseDetail};
})();
