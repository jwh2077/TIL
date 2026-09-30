(() => {
  'use strict';
  const $=s=>document.querySelector(s), esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const records=window.TIL_INDEX.records, materials=window.TIL_LIBRARY_INDEX, algorithms=window.TIL_ALGORITHMS, curated=window.TIL_PROJECTS;
  const recordURL=id=>'#record='+encodeURIComponent(id);
  const projectRecords=p=>records.filter(r=>r.project===p.record_project);
  const groups=[...new Set(records.filter(r=>['team','personal'].includes(r.activity)&&r.project).map(r=>r.project))];
  const projects=[...curated,...groups.filter(name=>!curated.some(p=>p.record_project===name)).map((name,i)=>{
    const rows=records.filter(r=>r.project===name), dates=rows.filter(r=>r.date).map(r=>r.date).sort(), ends=rows.filter(r=>r.date).map(r=>r.date_end||r.date).sort();
    return {id:'archive-'+Array.from(name).map(c=>c.codePointAt(0).toString(16)).join('-'),record_project:name,title:name,summary:'기존 작업 기록을 모았습니다.',period:dates[0]+'–'+ends.at(-1),period_note:'남아 있는 기록의 범위이며 프로젝트의 정확한 시작·종료일은 아닙니다.',tags:[],archive:true,activity:rows[0].activity};
  })];
  const featured=projects.find(p=>p.featured)||projects[0];
  let currentKind='', tocObserver, projectFilter={query:'',tags:[],from:'',to:'',sort:'asc'}, lastProject='';
  const views={record:window.TIL_RECORD_VIEW,material:window.TIL_MATERIAL_VIEW,algorithm:window.TIL_ALGORITHM_VIEW};
  const route=()=>{const hash=location.hash.slice(1);if(!hash||hash==='home'||hash==='top')return {type:'home'};const at=hash.indexOf('=');return at<0?{type:hash}:{type:hash.slice(0,at),id:decodeURIComponent(hash.slice(at+1))};};
  const page=$('main');
  $('body').insertAdjacentHTML('afterbegin','<a class="skip-link" href="#top">본문으로 바로가기</a><div class="site-header"><a class="site-brand" href="#home">TIL <span>만들고, 공부한 기록</span></a><nav aria-label="주 메뉴">'+[['home','홈'],['projects','프로젝트'],['list','학습 기록'],['algorithms','알고리즘'],['library','자료실']].map(([id,label])=>`<a href="#${id}" data-menu="${id}">${label}</a>`).join('')+'</nav></div>');
  page.insertAdjacentHTML('afterbegin','<div id="sitePages" hidden></div><header id="listIntro" hidden></header><div id="siteFilters" hidden></div>');
  page.insertAdjacentHTML('beforeend','<details id="readingToc" hidden><summary>이 글의 목차</summary><nav aria-label="본문 목차"></nav></details>');
  const dateBox=$('.date-range'), dateParking=$('aside');
  $('.skip-link').addEventListener('click',e=>{e.preventDefault();page.setAttribute('tabindex','-1');page.focus();page.scrollIntoView();});
  $('#resetDates').addEventListener('click',()=>queueMicrotask(selectionSummary));
  const links=refs=>refs.map(r=>`<a class="source" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.label)} ↗</a>`).join('');
  const row=r=>`<a class="study-row" href="${recordURL(r.id)}"><small>${esc(r.date_label||r.date||'날짜 미확인')}</small><div><h3>${esc(r.title)}</h3><p>${esc(r.project||'개인 공부')}</p></div><span aria-hidden="true">→</span></a>`;
  const chips=tags=>`<div class="pills">${tags.map(t=>`<span class="pill">${esc(t)}</span>`).join('')}</div>`;
  function feature(p){return `<div class="featured"><div class="feature-art"><div class="eyebrow">팀 프로젝트 · Unreal Engine 5</div><strong>${esc(p.title)}</strong><p>${esc(p.team)}</p></div><div class="feature-copy"><div class="meta">${esc(p.period)} · 기획부터 발표까지</div><h2>${esc(p.subtitle)}</h2><p>${esc(p.summary)}</p><p class="role-summary">담당 · 적 AI, 무기 파츠, UI 데이터 연결</p>${chips(p.tags)}<a class="button" href="#project=${p.id}">프로젝트 살펴보기 →</a></div></div>`;}
  function home(){return `<header><div class="eyebrow">C++ · UNREAL ENGINE</div><h1>만든 프로젝트와<br>그 과정에서 공부한 것들</h1><p class="intro">팀 프로젝트의 작업 과정부터 작은 기능 연습, 알고리즘 풀이까지 남겨두고 있습니다.</p></header><form id="globalSearch"><label class="sr-only" for="globalQuery">전체 자료 검색</label><input id="globalQuery" type="search" placeholder="프로젝트, 글 제목, 태그로 찾기" required><button class="button">검색</button></form><div class="section-head"><h2>프로젝트</h2><a href="#projects" class="source">전체 프로젝트 →</a></div>${feature(featured)}<div class="section-head"><h2>다른 공부 기록도 찾아보기</h2></div><div class="areas">${[['list','학습 기록','날짜별 작업과 작은 기능 연습, C++와 Unreal을 공부한 과정.',records.length],['algorithms','알고리즘','문제를 풀 때의 접근과 시행착오, 제출 코드와 풀이 기록.',algorithms.length],['library','자료실','다시 찾아볼 개념과 정리 자료, 관련 원문과 참고 링크.',materials.length]].map(([id,title,text,n])=>`<a class="area" href="#${id}"><span class="meta">${n}개 기록</span><h3>${title}</h3><p>${text}</p><span class="source">찾아보기 →</span></a>`).join('')}</div><div class="section-head"><h2>최근 학습 기록</h2><a class="source" href="#list">전체 보기 →</a></div>${[...records].filter(r=>r.date).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,4).map(row).join('')}<p class="caption">학습 날짜 기준입니다. 자료를 추가하거나 수정한 날짜와는 다를 수 있습니다.</p>`;}
  function projectList(){return `<header><h1>프로젝트</h1><p class="intro">만든 결과물과 내가 맡은 작업, 그 과정의 기록입니다.</p></header>${feature(featured)}<div class="section-head"><h2>다른 프로젝트 기록</h2></div><div class="areas">${projects.filter(p=>p!==featured).map(p=>`<a class="area" href="#project=${p.id}"><div class="meta">${p.activity==='team'?'팀 프로젝트':'개인 프로젝트·실습'}</div><h3>${esc(p.title)}</h3><p>${projectRecords(p).length}개 작업 기록</p><span class="source">기록 보기 →</span></a>`).join('')}</div>`;}
  const section=(id,title,body)=>`<section id="${id}" class="project-section"><h2>${esc(title)}</h2>${body}</section>`;
  function projectPage(p){
    const title=`<a class="source" href="#projects">← 프로젝트 목록</a><header><div class="eyebrow">${p.archive?'프로젝트 기록':'팀 프로젝트 · '+esc(p.team)}</div><h1>${esc(p.title)}</h1><p class="intro">${esc(p.summary)}</p><p class="meta">${esc(p.period)}</p><p class="caption">${esc(p.period_note)}</p></header>`;
    if(p.archive)return title+section('project-history','전체 작업 기록','<div id="projectFilterSlot"></div><div id="projectRows"></div>');
    return title+section('project-role','내가 맡은 부분',`<ul>${p.roles.map(r=>`<li>${esc(r)}</li>`).join('')}</ul>`)+section('project-result','결과물',`<p>${esc(p.result)}</p><div class="material-links">${links(p.links)}</div><p class="caption">${esc(p.result_note)}</p>`)+section('project-work','작업 과정',p.work.map((w,i)=>`<div class="work-block"><div class="eyebrow">${String(i+1).padStart(2,'0')}</div><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p>${w.note?`<p class="caption">${esc(w.note)}</p>`:''}<div class="related-list">${w.ids.map(id=>records.find(r=>r.id===id)).filter(Boolean).map(r=>`<a class="related-button" href="${recordURL(r.id)}">${esc(r.title)} →</a>`).join('')}</div></div>`).join(''))+(p.reflection?section('project-reflection','프로젝트 돌아보기',`<p>${esc(p.reflection.summary)}</p><a class="button" href="#reflection=${p.id}">돌아보기 읽기 →</a>`):'')+section('project-history','전체 작업 기록','<div id="projectFilterSlot"></div><div id="projectRows"></div>');
  }
  function reflection(p){const r=p.reflection;return `<a class="source" href="#project=${p.id}">← ${esc(p.title)} 상세로</a><header><div class="eyebrow">프로젝트 돌아보기</div><h1>${esc(r.title)}</h1><p class="intro">${esc(r.summary)}</p></header>${r.sections.map((s,i)=>section('reflection-'+i,s.title,`<p>${esc(s.text)}</p>`)).join('')}<section class="project-section"><h2>원본과 확인 범위</h2><p class="caption">${esc(r.notice)}</p><ul>${r.sources.map(s=>`<li>${esc(s)}</li>`).join('')}</ul><div class="material-links">${links(p.links)}</div></section>`;}
  function buildToc(){
    tocObserver?.disconnect(); const toc=$('#readingToc');toc.hidden=true;
    if(!document.body.classList.contains('reading'))return;
    const content=['#sitePages','#articlePage','#libraryPage','#algorithmPage'].map($).find(el=>!el.hidden);
    if(!content)return;
    const pageTitle=content.querySelector('h1,#detailTitle');if(pageTitle)document.title=pageTitle.textContent+' · TIL';
    const headings=[...content.querySelectorAll('.project-section>h2,.material-section>h2,.section>h3,.related>h3')];
    if(headings.length<3)return;
    toc.hidden=false;toc.open=!matchMedia('(max-width:800px)').matches;
    const targets=headings.map((h,i)=>{h.id=content.id+'-heading-'+i;return h;});
    toc.querySelector('nav').innerHTML=targets.map(h=>`<button type="button" data-scroll="${h.id}">${esc(h.textContent)}</button>`).join('');
    tocObserver=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){toc.querySelectorAll('button').forEach(b=>{if(b.dataset.scroll===e.target.id)b.setAttribute('aria-current','location');else b.removeAttribute('aria-current');});}},{rootMargin:'-12% 0px -65% 0px'});
    targets.forEach(h=>tocObserver.observe(h));
  }
  $('#readingToc').addEventListener('click',e=>{const b=e.target.closest('[data-scroll]');if(b){const target=document.getElementById(b.dataset.scroll);target?.scrollIntoView();target?.setAttribute('tabindex','-1');target?.focus({preventScroll:true});}});
  window.TIL_SITE={articleReady(){queueMicrotask(buildToc);}};
  function filterState(){return currentKind==='project'?projectFilter:views[currentKind]?.state;}
  function filterRows(){return currentKind==='project'?projectRecords(projects.find(p=>p.id===lastProject)):views[currentKind].records;}
  function apply(patch){
    const state=filterState();Object.assign(state,patch);
    if(currentKind==='project'){
      const shown=filterRows().filter(r=>window.TIL_FILTERS.matches(r,state,'record')).sort((a,b)=>window.TIL_FILTERS.compare(a,b,state.sort));
      $('#projectRows').innerHTML=`<p class="count" role="status">${shown.length}개 기록</p>`+(shown.map(row).join('')||'<p class="empty">조건에 맞는 기록이 없습니다.</p>');
    }else {
      if(currentKind==='record'){$('#dateKind').value=state.dateKind;$('#sort').value=state.sort||'desc';}
      views[currentKind].update(patch);
    }
    selectionSummary();
  }
  function selectionSummary(){const state=filterState();if(!state)return;
    const from=state.from,to=state.to;
    if($('#siteResultCount'))$('#siteResultCount').textContent=currentKind==='record'?`${views.record.visible().length}개 기록`:'';$('#filterDateSummary')?.replaceChildren(document.createTextNode(from||to?'날짜: 선택됨':'날짜: 전체'));
    $('#filterTagSummary').textContent=state.tags?.length?`태그: ${state.tags.length}개`:'태그: 전체';
    const chosen=[];if(from||to)chosen.push({key:'dates',label:`${from||'처음부터'} ~ ${to||'마지막까지'}`});for(const t of state.tags||[])chosen.push({key:'tag',value:t,label:t});
    for(const key of ['category','project','activity','topic','sub','dateKind','kind','publication','group','status'])if(state[key]&&state[key]!=='all')chosen.push({key,label:$('#filterHost [data-field="'+key+'"]')?.selectedOptions?.[0]?.textContent||state[key]});
    if(state.fields?.length)chosen.push({key:'fields',label:state.fields.map(t=>window.TIL_FILTERS.labels[t]||t).join(' · ')});
    $('#activeFilters').innerHTML=chosen.map(c=>`<button type="button" data-clear="${c.key}" data-value="${esc(c.value||'')}" aria-label="${esc(c.label)} 조건 해제">${esc(c.label)} ×</button>`).join('')+(chosen.length?'<button type="button" data-clear="all">조건 초기화</button>':'');
    $('#filterError').textContent=from&&to&&from>to?'시작일을 종료일보다 앞선 날짜로 골라주세요.':'';
  }
  function filters(kind,parent){
    if(dateBox.parentElement!==dateParking)dateParking.append(dateBox);
    $('#filterHost')?.remove();currentKind=kind;const s=filterState(), rows=filterRows();
    const select=(key,label,entries)=>`<label>${label}<select data-field="${key}">${entries.map(([value,text])=>`<option value="${esc(value)}" ${s[key]===value?'selected':''}>${esc(text)}</option>`).join('')}</select></label>`;
    let extra='';
    if(kind==='record')extra=select('project','프로젝트',[['all','전체 프로젝트'],...[...new Set(records.map(r=>r.project).filter(Boolean))].map(p=>[p,p])])+select('activity','활동 구분',[['all','전체 활동'],['study','기초 학습'],['personal','개인 프로젝트'],['team','팀 프로젝트']])+select('topic','학습 주제',[['all','전체 주제'],...[...Object.entries(window.TIL_FILTERS.labels),['project','프로젝트·협업']].filter(([k])=>records.some(r=>r.primary_topic===k))])+select('sub','세부 분류',[['all','전체 분류'],...Object.values(views.record.subdivisions).flat().map(([id,label])=>[id,label])])+select('dateKind','날짜 구분',[['all','전체 기록'],['project-period','기간으로 묶은 기록']]);
    if(kind==='material')extra=select('kind','자료 종류',[['all','전체 자료'],['file','정리 문서'],['velog','Velog 정리'],['note','정리 중인 노트']])+select('publication','글 상태',[['all','전체 상태'],['reference','기존 정리'],['draft','게시 준비 초안']]);
    if(kind==='algorithm')extra=select('group','문제 유형',[['all','전체 유형'],...[...new Set(algorithms.map(r=>r.group))].map(g=>[g,window.TIL_FILTERS.labels[g]||g])])+select('status','풀이 상태',[['all','전체 상태'],...[...new Set(algorithms.map(r=>r.status))].map(v=>[v,v])]);
    const date=kind==='material'?'':`<details class="filter-option"><summary id="filterDateSummary">날짜: 전체</summary><div class="filter-popover" id="dateSlot">${kind==='record'?'':`<label>시작일<input type="date" data-field="from" value="${esc(s.from||'')}"></label><label>종료일<input type="date" data-field="to" value="${esc(s.to||'')}"></label><p class="caption">기록 날짜 기준으로 찾습니다. 날짜 미확인 기록은 기간 선택 시 제외됩니다.</p>`}</div></details>`;
    const scopedRows=rows.filter(r=>!s.category||s.category==='all'||window.TIL_FILTERS.categoriesOf(r,kind==='project'?'record':kind).includes(s.category));
    const categoryOptions=Object.entries(window.TIL_FILTERS.categories).filter(([key])=>rows.some(r=>window.TIL_FILTERS.categoriesOf(r,kind==='project'?'record':kind).includes(key)));
    const categorySelect=categoryOptions.length>1?`<select data-field="category" aria-label="큰 주제"><option value="all">모든 주제</option>${categoryOptions.map(([key,label])=>`<option value="${key}" ${s.category===key?'selected':''}>${label}</option>`).join('')}</select>`:'';
    const tagSet=[...new Set([...(s.tags||[]),...scopedRows.flatMap(r=>window.TIL_FILTERS.tags(r,kind==='project'?'record':kind))])].sort((a,b)=>a.localeCompare(b,'ko'));
    parent.insertAdjacentHTML('beforeend',`<div id="filterHost"><div class="filter-bar"><label class="sr-only" for="siteQuery">제목·주제 검색</label><input id="siteQuery" type="search" placeholder="${kind==='project'?'프로젝트 안에서 검색':'제목·주제 검색'}" value="${esc(s.query||'')}">${categorySelect}${date}<details class="filter-option"><summary id="filterTagSummary">태그: 전체</summary><div class="filter-popover"><label class="sr-only" for="tagQuery">태그 찾기</label><input id="tagQuery" type="search" placeholder="태그 찾기"><p class="caption">복수 선택 · 선택한 태그를 모두 포함</p><div class="tag-options">${tagSet.map(t=>`<label data-tag-label="${esc(t)}"><input type="checkbox" data-tag="${esc(t)}" ${s.tags?.includes(t)?'checked':''}> ${esc(t)}</label>`).join('')}</div></div></details><select aria-label="정렬" data-field="sort"><option value="desc" ${(s.sort||'desc')==='desc'?'selected':''}>${kind==='material'?'제목 역순':'최신순'}</option><option value="asc" ${s.sort==='asc'?'selected':''}>${kind==='material'?'제목순':'과거순'}</option></select>${extra?`<details class="filter-option"><summary>추가 조건</summary><div class="filter-popover">${extra}</div></details>`:''}</div><div id="activeFilters" class="active-filters"></div><p id="filterError" role="status"></p><p id="siteResultCount" class="count" role="status"></p></div>`);
    if(kind==='record')$('#dateSlot').append(dateBox);
    const host=$('#filterHost');host.addEventListener('input',e=>{if(e.target.id==='siteQuery')apply({query:e.target.value});if(e.target.id==='tagQuery')host.querySelectorAll('[data-tag-label]').forEach(label=>label.hidden=!label.dataset.tagLabel.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));});
    host.addEventListener('change',e=>{if(e.target.matches('[data-tag]'))apply({tags:[...host.querySelectorAll('[data-tag]:checked')].map(el=>el.dataset.tag)});if(e.target.dataset.field){const patch={[e.target.dataset.field]:e.target.value};if(e.target.dataset.field==='topic')patch.sub='all';if(e.target.dataset.field==='sub'&&e.target.value!=='all')patch.topic=Object.entries(views.record.subdivisions).find(([,groups])=>groups.some(g=>g[0]===e.target.value))?.[0]||'all';apply(patch);for(const [key,value] of Object.entries(patch)){const el=host.querySelector(`[data-field="${key}"]`);if(el)el.value=value;}if(e.target.dataset.field==='category'){filters(kind,host.parentElement);return;}}selectionSummary();});
    host.addEventListener('click',e=>{const b=e.target.closest('[data-clear]');if(!b)return;const key=b.dataset.clear;const patch=key==='dates'?{from:'',to:''}:key==='tag'?{tags:s.tags.filter(t=>t!==b.dataset.value)}:key==='fields'?{fields:[]}:key==='all'?{from:'',to:'',tags:[],project:'all',activity:'all',topic:'all',sub:'all',dateKind:'all',kind:'all',publication:'all',group:'all',status:'all',category:'all',fields:[]}:{[key]:'all'};apply(patch);const container=host.parentElement;filters(kind,container);});
    host.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)host.querySelectorAll('details').forEach(other=>{if(other!==d)other.open=false;});}));
    host.addEventListener('keydown',e=>{if(e.key==='Escape'){const d=e.target.closest('details');if(d){d.open=false;d.querySelector('summary').focus();}}});
    selectionSummary();
  }
  function searchPage(query){const q=query.trim().toLocaleLowerCase();let output=`<header><h1>전체 검색</h1><p class="intro">“${esc(query)}” 검색 결과</p></header><form id="globalSearch"><label class="sr-only" for="globalQuery">전체 자료 검색</label><input id="globalQuery" type="search" required value="${esc(query)}"><button class="button">검색</button></form>`;
    for(const [title,items,kind,url] of [['프로젝트',projects,'project',r=>'#project='+r.id],['학습 기록',records,'record',r=>recordURL(r.id)],['알고리즘',algorithms,'algorithm',r=>'#algorithm='+r.id],['자료실',materials,'material',r=>'#material='+r.id]]){const found=items.filter(r=>[r.title,r.summary,r.project,...window.TIL_FILTERS.tags(r,kind)].join(' ').toLocaleLowerCase().includes(q));output+=section('search-'+kind,`${title} · ${found.length}개`,found.map(r=>`<a class="search-result" href="${url(r)}">${esc(r.title)} →</a>`).join('')||'<p class="caption">검색 결과가 없습니다.</p>');}return output;}
  $('#sitePages').addEventListener('submit',e=>{if(e.target.id==='globalSearch'){e.preventDefault();const q=$('#globalQuery').value.trim();if(q)location.hash='search='+encodeURIComponent(q);}});
  function navigate(){
    let r;try{r=route();}catch{r={type:'home'};}
    tocObserver?.disconnect();$('#readingToc').hidden=true;
    if(dateBox.parentElement!==dateParking)dateParking.append(dateBox);
    $('#siteFilters').innerHTML='';$('#siteFilters').hidden=true;$('#sitePages').hidden=true;$('#listIntro').hidden=true;currentKind='';
    const custom=['home','projects','project','reflection','search'].includes(r.type);
    const reading=['record','material','algorithm','project','reflection'].includes(r.type);
    document.body.classList.toggle('reading',reading);document.body.classList.toggle('listing',!reading&&!custom);
    const menu=r.type==='home'||r.type==='search'?'home':['project','projects','reflection'].includes(r.type)?'projects':['library','material'].includes(r.type)?'library':['algorithms','algorithm'].includes(r.type)?'algorithms':'list';
    document.querySelectorAll('[data-menu]').forEach(a=>{if(a.dataset.menu===menu)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    if(custom){for(const id of ['listPage','articlePage','libraryPage','algorithmPage'])$('#'+id).hidden=true;const target=$('#sitePages');target.hidden=false;
      if(r.type==='home')target.innerHTML=home();else if(r.type==='projects')target.innerHTML=projectList();else if(r.type==='search')target.innerHTML=searchPage(r.id||'');else{const p=projects.find(p=>p.id===r.id);if(!p||(r.type==='reflection'&&!p.reflection))target.innerHTML='<h1>글을 찾을 수 없습니다</h1><a href="#projects">프로젝트 목록으로</a>';else{target.innerHTML=r.type==='reflection'?reflection(p):projectPage(p);if(r.type==='project'){if(lastProject!==p.id)projectFilter={query:'',tags:[],from:'',to:'',sort:'asc'};lastProject=p.id;filters('project',$('#projectFilterSlot'));apply({});}}}
    }else if(!reading){const kind=menu==='library'?'material':menu==='algorithms'?'algorithm':'record';$('#listIntro').hidden=false;$('#listIntro').innerHTML=`<h1>${kind==='record'?'학습 기록':kind==='material'?'자료실':'알고리즘'}</h1><p class="intro">${kind==='record'?'날짜별 작업과 작은 기능 연습을 찾아봅니다.':kind==='material'?'개념과 정리 자료, 관련 원문을 모았습니다.':'풀이 과정과 제출 결과를 남긴 기록입니다. 미완성 문제도 함께 표시합니다.'}</p>`;$('#siteFilters').hidden=false;filters(kind,$('#siteFilters'));}
    if(reading)buildToc();
    const recordMeta=r.type==='record'?records.find(x=>x.id===r.id):null;const p=recordMeta&&projects.find(p=>p.record_project===recordMeta.project);if(p&&!$('#articlePage .project-return'))$('#backToList').insertAdjacentHTML('afterend',`<a class="source project-return" href="#project=${p.id}">${esc(p.title)} 프로젝트로 →</a>`);else if(!p)$('#articlePage .project-return')?.remove();else if(p){const a=$('#articlePage .project-return');a.href='#project='+p.id;a.textContent=p.title+' 프로젝트로 →';}
    document.title=(r.type==='project'||r.type==='reflection'?(r.type==='reflection'?projects.find(p=>p.id===r.id)?.reflection?.title:projects.find(p=>p.id===r.id)?.title)||'프로젝트':{home:'홈',projects:'프로젝트',list:'학습 기록',library:'자료실',algorithms:'알고리즘',search:'전체 검색'}[r.type]||'학습 기록')+' · TIL';
    window.scrollTo({top:0,behavior:'instant'});
  }
  document.addEventListener('click',e=>{document.querySelectorAll('.filter-option[open]').forEach(d=>{if(!d.contains(e.target))d.open=false;});});
  window.addEventListener('hashchange',navigate);navigate();
})();
