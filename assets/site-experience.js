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

const navigation=[['home','상영관'],['projects','전체 작품'],['screen','작품 전시'],['career','기술 문서'],['list','개발일지']];
const routes=['screen'];
const reel=()=>'<section class="ex-cinema-reel"><div class="ex-cinema-head"><span>PROJECT FILMOGRAPHY</span><h1>프로젝트의 장면에서<br>구현의 과정으로.</h1><p>실제 플레이 화면과 맡은 기술 작업을 함께 전시합니다. 영상은 기존에 공개한 자료만 사용합니다.</p></div><div class="ex-reel-grid">'+examples.map((c,i)=>{const p=projects.find(x=>x.title===c.projectName)||projects.find(x=>x.title===c.title);return '<a href="'+caseUrl(c)+'" class="ex-reel-panel"><div class="ex-reel-image">'+img(p)+'</div><div class="ex-reel-copy"><small>SCENE '+String(i+1).padStart(2,'0')+' · '+esc(c.kind)+'</small><h2>'+esc(c.title)+'</h2><p>'+esc(c.lead)+'</p><strong>'+esc(c.role)+'</strong><span>개발 과정 살펴보기 ↗</span></div></a>'}).join('')+'</div></section>';
const films=()=>'<section class="ex-cinema-film"><div class="ex-kicker">FEATURED SCREENPLAY / 01</div><div class="ex-film-layout"><div class="ex-film-visual">'+img(projects.find(p=>p.title==='Project Priest'))+'</div><div><h1>게임이 움직이는<br>순간의 기록.</h1><p>Unreal Engine의 적 AI, 공격 판정, 캐릭터 이동, 멀티플레이 구조에서 직접 맡은 구현을 다룹니다.</p><a class="ex-action" href="#screen">작품 전시관 입장 ↗</a><a class="ex-text-link" href="#career=portfolio">문서 포트폴리오</a></div></div><div class="ex-film-credit"><span>C++ / UNREAL ENGINE</span><span>SELECTED PROJECTS · 04</span><span>WORK LOG · 2026</span></div></section>';
const home=()=>'<div class="ex-site ex-cinema">'+films()+reel()+'<section class="ex-cinema-bottom"><h2>게임의 결과만이 아니라<br>그 뒤의 구현을 보여줍니다.</h2><p>프로젝트 내부에서 조사한 문제와 최종 검증되지 않은 부분까지 구분해 정리했습니다.</p><a href="#projects">전체 작업 아카이브 ↗</a>'+contact+'</section>'+sourceNote+'</div>';
const projectIndex=()=>'<div class="ex-site ex-cinema ex-cinema-list"><header><span>FULL FILMOGRAPHY</span><h1>작품 목록</h1><p>대표 사례뿐 아니라 개인 실습과 팀 프로젝트의 원래 기록까지 탐색할 수 있습니다.</p></header>'+reel()+'<section class="ex-archive"><h2>전체 프로젝트와 실습</h2>'+allProjects()+'</section>'+sourceNote+'</div>';
const render=(type)=>type==='screen'?'<div class="ex-site ex-cinema ex-screen">'+reel()+'<div class="ex-screen-note"><h2>장면을 선택하면 문제 분석과 코드 작업 과정을 볼 수 있습니다.</h2><a href="#projects">전체 아카이브 ↗</a></div></div>':'';
const menuFor=r=>['screen'].includes(r.type)?'screen':r.type==='project'?'projects':null;
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

const careerIndex=()=>'<div class="ex-site ex-cinema ex-exhibition-library"><header><span>ARCHIVE / PRINT & READ</span><h1>제작 기록 아카이브</h1><p>게임 장면을 만드는 데 사용한 기술과 프로젝트 문서를 모았습니다.</p></header>'+documentIndex()+sourceNote+'</div>';
const caseDetail=id=>{const c=selected(id);if(!c)return window.TIL_SHOWCASE.detail(id);const p=projects.find(x=>x.title===c.projectName)||projects.find(x=>x.title===c.title);return '<div class="ex-site ex-cinema ex-exhibit"><nav><a href="#screen">← 작품 전시관</a><span>PROJECT '+esc(c.index)+' / '+esc(c.status)+'</span></nav><div class="ex-exhibit-hero"><div>'+img(p)+'</div><section><small>TECHNICAL SHOWCASE / '+esc(c.period)+'</small><h1>'+esc(c.title)+'</h1><p>'+esc(c.lead)+'</p><dl>'+caseFacts(c).map(([k,v])=>'<div><dt>'+k+'</dt><dd>'+esc(v)+'</dd></div>').join('')+'</dl></section></div><section class="ex-exhibit-role"><h2>구현에 기여한 부분</h2><ul>'+c.own.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></section><div class="ex-exhibit-story">'+caseParts(c).map(([k,v],i)=>'<section><span>SCENE '+String(i+1).padStart(2,'0')+'</span><div><h2>'+k+'</h2><p>'+esc(v)+'</p></div></section>').join('')+'</div><footer><span>근거: '+esc(c.evidence)+'</span><a href="#record='+esc(c.record)+'">관련 작업 기록 ↗</a></footer></div>';};

window.TIL_EXPERIENCE={brand:"GAME / SHOWCASE",tagline:"게임 장면과 구현",kind:'cinematic',navigation,routes,home,projectIndex,render,menuFor,attach,careerIndex,caseDetail};
})();
