(() => {
  'use strict';
  const materials = window.TIL_LIBRARY_INDEX || [];
  const $ = s => document.querySelector(s);
  const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const kinds = {file:'문서 원본',velog:'Velog 원본',note:'메모 원본'};
  const topics = {cpp:'C / C++',unreal:'Unreal',ds:'자료구조',stl:'STL',oop:'객체지향 · 설계',memory:'포인터 · 메모리'};
  const storageKey='til-library-preferences';
  let preferences={};
  try {preferences=JSON.parse(localStorage.getItem(storageKey)||'{}')||{};} catch {}
  const pins=new Set((Array.isArray(preferences.pins)?preferences.pins:[]).filter(id=>materials.some(r=>r.id===id)));
  const state = {kind:'all',fields:[],publication:'all',query:'',tags:[],sort:'topic',subject:preferences.subject||'unreal',page:0};
  function savePreferences(){try{localStorage.setItem(storageKey,JSON.stringify({pins:[...pins],subject:state.subject}));}catch{}}
  const fields = r => r.topics || [r.topic];
  const classification = r => fields(r).map(id=>topics[id]||id).join(' · ');
  const pending=new Map(); let token = 0, requestedSection = null;
  $('aside .brand').insertAdjacentHTML('afterend', `<div class="side-title">보기 방식</div><div id="archiveModes" class="project-list"><a class="project" href="#list">날짜별 기록</a><a class="project" href="#library">정리 자료</a></div>`);
  $('#sidebarFilters > summary').insertAdjacentHTML('afterend', `<div id="libraryNav" hidden><div class="side-title">원본 종류</div><div id="materialKinds" class="project-list"></div><div class="side-title">학습 분야</div><div id="materialTopics" class="project-list"></div><div id="materialOutline" hidden><div class="side-title">자료 목차</div><div id="materialSections" class="project-list"></div><div class="side-title">같은 분야 자료</div><div id="materialRelated" class="project-list"></div></div></div>`);
  $('main').insertAdjacentHTML('beforeend', '<div id="libraryPage" hidden></div>');
  $('#materialTopics').insertAdjacentHTML('beforebegin','<p class="library-notice">복수 선택 가능 · 선택한 분야에 모두 해당하는 자료</p>');
  $('#materialKinds').insertAdjacentHTML('afterend','<div class="side-title">글 상태</div><div id="publicationFilters" class="project-list"></div>');
  const style = document.createElement('style');
  style.textContent = '#archiveModes a {display:block;text-decoration:none} #archiveModes a[aria-current="page"] {background:var(--soft);color:var(--blue);font-weight:800} #libraryPage {max-width:920px} .library-search {width:min(100%,480px);padding:10px 12px;border:1px solid var(--line);border-radius:8px;font:inherit;margin:20px 0 5px} .library-grid {display:grid;grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr));gap:15px;margin-top:22px} .library-grid .record {margin:0} .library-grid .record:before {display:none} .material-section {margin-top:30px;scroll-margin-top:24px} .material-section h2 {font-size:1.3rem} .material-section h3 {font-size:1rem} .material-section pre {overflow:auto;padding:16px;background:#edf2f8;border-radius:8px;white-space:pre;font-family:Consolas,monospace;font-size:.87rem} .material-section code {font-family:Consolas,monospace;background:#edf2f8} .material-section table {display:block;overflow:auto;max-width:100%;border-collapse:collapse;font-size:.88rem} .material-section td,.material-section th {border:1px solid var(--line);padding:8px 10px;text-align:left} .material-section blockquote {border-left:3px solid var(--blue);padding:10px 16px;margin:16px 0;background:var(--soft)} .library-notice {color:var(--muted);font-size:.86rem} .material-links {display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:18px}';
  document.head.append(style);
  function active() { return location.hash === '#library' || location.hash.startsWith('#material='); }
  function controls() {
    $('#materialKinds').innerHTML = [['all','모든 자료'],...Object.entries(kinds)].map(([id,label])=>`<button type="button" class="project" data-kind="${id}" aria-pressed="${state.kind===id}">${label}<span class="tab-count">${materials.filter(r=>id==='all'||r.kind===id).length}</span></button>`).join('');
    $('#materialTopics').innerHTML = [['all','모든 분야'],...Object.entries(topics).filter(([id])=>materials.some(r=>fields(r).includes(id)))].map(([id,label])=>`<button type="button" class="project" data-field="${id}" aria-pressed="${id==='all'?state.fields.length===0:state.fields.includes(id)}">${label}</button>`).join('');
    $('#publicationFilters').innerHTML=[['all','모든 상태'],['reference','기존 정리'],['draft','게시 준비 초안']].map(([id,label])=>`<button type="button" class="project" data-publication="${id}" aria-pressed="${state.publication===id}">${label}</button>`).join('');
  }
  const queryTerms = query => query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const contains = (text, query) => queryTerms(query).every(term => String(text).toLocaleLowerCase().includes(term));
  const matchesQuery = (r, query) => contains([r.title,r.summary,classification(r),...(r.outline||[]).map(s=>s.text)].join(' '), query);
  const subjectGroups = window.TIL_LIBRARY_NAVIGATION || [];
  if(!subjectGroups.some(g=>g.id===state.subject)&&!['all','pinned','unfiled'].includes(state.subject))state.subject='all';
  const groupIds=g=>g.topics.flatMap(t=>t.documents);
  const indexed=new Set(subjectGroups.flatMap(groupIds));
  function groupedSections(r) {
    const sections=(r.outline||[]).map((s,index)=>({...s,index}));
    const groups=(r.toc_groups||[]).map(g=>({...g,index:sections.findIndex(s=>s.title===g.start)})).filter(g=>g.index>=0).sort((a,b)=>a.index-b.index);
    if(!groups.length)return [{title:'',sections}];
    const result=groups.map((g,i)=>({title:g.title,sections:sections.slice(g.index,groups[i+1]?.index??sections.length)}));
    if(groups[0].index)result.unshift({title:'',sections:sections.slice(0,groups[0].index)});
    return result;
  }
  const relevance = (r, query) => !query ? 0 : contains(r.title,query) ? 3 : (r.outline||[]).some(s=>contains(s.title,query)) ? 2 : contains(r.summary,query) ? 1 : 0;
  function results() {
    const query = state.query.trim().toLocaleLowerCase();
    return materials.filter(r=>(!window.TIL_FILTERS||window.TIL_FILTERS.matches(r,state,'material'))&&(state.kind==='all'||r.kind===state.kind)&&state.fields.every(id=>fields(r).includes(id))&&(state.publication==='all'||r.publication===state.publication)&&matchesQuery(r,query)).sort((a,b)=>{const ranked=query&&['topic','relevance'].includes(state.sort);return (ranked?relevance(b,query)-relevance(a,query):0)||(state.sort==='desc'?-1:1)*a.title.localeCompare(b.title,'ko');});
  }
  function list() {
    controls(); $('#materialOutline').hidden = true;
    $('#libraryPage').innerHTML = `<header><h1>자료실</h1><label for="librarySearch">자료 검색</label><input id="librarySearch" class="library-search" type="search" value="${esc(state.query)}"></header><div class="library-explorer"><nav id="librarySubjects" aria-label="자료실 분야"></nav><div class="library-results"><p id="libraryCount" class="count" role="status"></p><div id="libraryCards" class="library-index"></div><div id="libraryPagination" class="library-pagination"></div></div></div>`;
    cards();
    $('#librarySearch').addEventListener('input',e=>{state.query=e.target.value;state.page=0;cards();});
  }
  function materialRow(r) {
    const matches = state.query.trim() ? (r.outline||[]).map((s,index)=>({...s,index})).filter(s=>contains(s.text,state.query)) : [];
    const jump=s=>`<button type="button" data-material="${esc(r.id)}" data-open-section="${s.index}">${esc(s.title)} →</button>`;
    const shortTitle=s=>s.title.split(' — ')[0];
    const shortcuts=(r.quick_links||[]).map(link=>({title:link.label,index:(r.outline||[]).findIndex(s=>s.title===link.section)})).filter(s=>s.index>=0);
    if(!shortcuts.length)shortcuts.push(...(r.outline||[]).slice(0,2).map((s,index)=>({...s,index})));
    return `<article class="material-row"><button type="button" class="material-pin" data-pin="${esc(r.id)}" aria-pressed="${pins.has(r.id)}" aria-label="${esc(r.title)} ${pins.has(r.id)?'고정 해제':'고정'}">${pins.has(r.id)?'★':'☆'}</button><button type="button" class="material-open" data-material="${esc(r.id)}"><strong>${esc(r.title)}</strong>${r.publication==='draft'?'<small class="topic-badge">초안</small>':''}</button><div class="material-jumps" aria-label="${esc(r.title)} 바로 이동">${shortcuts.map(s=>`<button type="button" data-material="${esc(r.id)}" data-open-section="${s.index}" aria-label="${esc(s.title)}로 이동">${esc(shortTitle(s))}</button>`).join('')}</div><button type="button" class="material-toc-toggle" data-row-toc="${esc(r.id)}" aria-expanded="false" aria-controls="outline-${esc(r.id)}">목차 ▾</button><div class="material-row-outline" id="outline-${esc(r.id)}" hidden>${groupedSections(r).map(g=>g.title?`<details><summary>${esc(g.title)}</summary><div class="material-contents">${g.sections.map(jump).join('')}</div></details>`:`<div class="material-contents">${g.sections.map(jump).join('')}</div>`).join('')}</div>${matches.length?`<div class="material-matches">${jump(matches[0])}${matches.length>1?`<details><summary>다른 일치 항목 ${matches.length-1}개</summary><div class="material-contents">${matches.slice(1).map(jump).join('')}</div></details>`:''}</div>`:''}</article>`;
  }
  function cards() {
    const found=results(),searching=Boolean(state.query.trim());
    const options=[{id:'all',title:'전체',ids:materials.map(r=>r.id)},...subjectGroups.map(g=>({...g,ids:groupIds(g)})),{id:'pinned',title:'고정',ids:[...pins]}];
    if(materials.some(r=>!indexed.has(r.id)))options.push({id:'unfiled',title:'기타 자료',ids:materials.filter(r=>!indexed.has(r.id)).map(r=>r.id)});
    const selected=options.find(g=>g.id===state.subject)||options[0];
    const shown=searching?found:found.filter(r=>selected.ids.includes(r.id));
    const pages=Math.max(1,Math.ceil(shown.length/12));state.page=Math.min(state.page,pages-1);
    $('#librarySubjects').innerHTML=options.map(g=>`<button type="button" data-subject="${g.id}" aria-pressed="${!searching&&selected.id===g.id}">${esc(g.title)}<span>${found.filter(r=>g.ids.includes(r.id)).length}</span></button>`).join('')+'<p class="library-pin-note">고정은 이 브라우저에 저장됩니다.</p>';
    $('#libraryCount').textContent=`${searching?'전체 분야 검색':selected.title} · ${shown.length}개 자료`;
    $('#libraryCards').innerHTML=shown.slice(state.page*12,state.page*12+12).map(materialRow).join('')||'<div class="empty">조건에 맞는 자료가 없습니다. 검색어나 선택한 조건을 줄여보세요.</div>';
    $('#libraryPagination').innerHTML=pages>1?`<button type="button" data-library-page="${state.page-1}" ${state.page===0?'disabled':''}>이전</button><span>${state.page+1} / ${pages}</span><button type="button" data-library-page="${state.page+1}" ${state.page===pages-1?'disabled':''}>다음</button>`:'';
  }
  window.TIL_MATERIAL_VIEW={state,records:materials,results,matchesQuery,groupedSections,update(patch){Object.assign(state,patch,{page:0});controls();cards();}};
  function load(file) {
    if(!/^data\/materials\/[a-zA-Z0-9_-]+\.js$/.test(file))return Promise.reject(new Error('잘못된 자료 경로입니다.'));
    if(window.TIL_FILES?.[file]) return Promise.resolve(window.TIL_FILES[file]);
    if(!pending.has(file))pending.set(file,new Promise((resolve,reject)=>{
      const s=document.createElement('script');s.src=file;
      const fail=()=>{pending.delete(file);s.remove();reject(new Error('자료를 열지 못했습니다.'));};
      s.onload=()=>window.TIL_FILES?.[file]?resolve(window.TIL_FILES[file]):fail();s.onerror=fail;document.head.append(s);
    }));
    return pending.get(file);
  }
  function referenceGroups(r) {
    const internal=[], external=[], seen=new Set();
    if(r.kind==='file' && r.source_url==='data/guides/stl-reference.html') external.push('<a class="source" href="data/guides/stl-reference.html">원본 자료구조 문서 보기 →</a>');
    const refs=[...(r.references||[]),...(r.kind==='velog'?[{label:'Velog 원문 보기',url:r.source_url}]:[])];
    for(const ref of refs) {
      if(!ref.url) continue;
      const target=window.TIL_LINKS.resolve(ref.url);
      if(!target || seen.has(target.href)) continue;
      seen.add(target.href);
      // Learning records already have their own group below.
      if(target.internal && (r.related_ids||[]).some(id=>target.href==='#record='+id)) continue;
      if(target.internal) internal.push(`<a class="related-button" href="${esc(target.href)}">${esc(ref.label)}</a>`);
      else external.push(`<a class="source" href="${esc(target.href)}" target="_blank" rel="noopener noreferrer">${esc(ref.label)} ↗</a>`);
    }
    return (internal.length ? `<section class="related"><h3>관련 문서</h3><div class="related-list">${internal.join('')}</div></section>` : '')
      + `<section class="material-section"><h2>원본과 외부 참고 자료</h2><p class="library-notice">원본: ${esc(r.source_name)}</p>${r.notice?`<p class="library-notice">덧붙임<br>${esc(r.notice)}</p>`:''}${external.length?`<div class="material-links">${external.join('')}</div>`:''}</section>`;
  }
  async function open(id) {
    // Keep old links to the question-only note useful after moving it to learning records.
    if(id==='file-note-tem-014'){location.hash='record=note-tem-014';return;}
    const legacy=materials.find(r=>Object.hasOwn(r.legacy_sections||{},id));
    if(legacy) {
      const heading=legacy.legacy_sections[id];
      id=legacy.id;
      requestedSection={id,index:legacy.outline.findIndex(s=>s.title===heading)};
    }
    const stamp=++token; const meta=materials.find(r=>r.id===id);
    if(!meta) {location.hash='library';return;}
    controls();$('#materialOutline').hidden=false;
    $('#materialSections').innerHTML='';
    $('#materialRelated').innerHTML=materials.filter(r=>r.id!==id&&fields(r).some(id=>fields(meta).includes(id))).sort((a,b)=>fields(b).filter(id=>fields(meta).includes(id)).length-fields(a).filter(id=>fields(meta).includes(id)).length).slice(0,6).map(r=>`<button type="button" class="project" data-material="${esc(r.id)}">${esc(r.title)}</button>`).join('');
    $('#libraryPage').innerHTML='<p>정리 자료를 여는 중…</p>';
    try {
      const r=(await load(meta.file)).find(r=>r.id===id);if(stamp!==token||!active())return;if(!r)throw new Error('자료를 찾을 수 없습니다.');
      $('#libraryPage').innerHTML=`<button type="button" class="related-button" data-library-back>← 자료 목록으로</button><header><div class="record-meta">${esc(classification(r))}</div><h1 id="materialTitle" style="font-size:clamp(1.7rem,4vw,2.8rem);line-height:1.3">${esc(r.title)}</h1><p class="intro">${esc(r.summary)}</p></header>${r.sections.map((s,i)=>`<section id="material-section-${i}" class="material-section"><h2>${esc(s.title)}</h2>${s.html||''}${s.text?`<p style="white-space:pre-line">${esc(s.text)}</p>`:''}${s.code?`<pre><code>${esc(s.code)}</code></pre>`:''}${s.items?`<ul>${s.items.map(v=>`<li>${esc(v)}</li>`).join('')}</ul>`:''}</section>`).join('')}${referenceGroups(r)}<section class="related"><h3>관련 학습 기록</h3><div class="related-list">${(r.related_ids||[]).map(id=>window.TIL_INDEX.records.find(x=>x.id===id)).filter(Boolean).slice(0,6).map(x=>`<a class="related-button" href="#record=${encodeURIComponent(x.id)}">${esc(x.title)}</a>`).join('')}</div></section>`;
      $('#materialSections').innerHTML=r.sections.map((s,i)=>`<button type="button" class="project" data-material-section="material-section-${i}">${esc(s.title)}</button>`).join('');
      window.TIL_SITE?.articleReady(); window.scrollTo({top:0});$('#materialTitle').setAttribute('tabindex','-1');$('#materialTitle').focus();
      const destination=requestedSection; requestedSection=null;
      if(destination?.id===id) queueMicrotask(()=>{const section=document.getElementById('material-section-'+destination.index);if(section){section.setAttribute('tabindex','-1');section.scrollIntoView();section.focus({preventScroll:true});}});
    } catch(error) {
      if(stamp!==token||!active())return;
      $('#libraryPage').innerHTML=`<p>${esc(error.message)}</p><button type="button" class="related-button" data-material="${esc(id)}">다시 열기</button><button type="button" class="related-button" data-library-back>목록으로</button>`;
    }
  }
  function route() {
    const library=active(), algorithms=location.hash==='#algorithms'||location.hash.startsWith('#algorithm=');$('#libraryPage').hidden=!library;$('#libraryNav').hidden=!library;
    for(const selector of ['#tabs','#projects','#activities']) {$(selector).hidden=library||algorithms;$(selector).previousElementSibling.hidden=library||algorithms;}
    $('#sidebarFilters > summary').textContent = library ? '자료 필터·목차' : algorithms ? '문제 필터·목차' : location.hash.startsWith('#record=') ? '주제·프로젝트 필터·목차' : '주제·프로젝트 필터';
    for(const a of $('#archiveModes').querySelectorAll('a')) {const selected=library?'#library':algorithms?'#algorithms':'#list';if(a.getAttribute('href')===selected)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');}
    if(!library) {++token;return;}
    $('#listPage').hidden=true;$('#articlePage').hidden=true;$('#subnav').hidden=true;$('#articleNav').hidden=true;
    if(location.hash.startsWith('#material=')) {try {open(decodeURIComponent(location.hash.slice(10)));}catch {location.hash='library';}}
    else {++token;list();}
  }
  function choose(id) {const hash='#material='+encodeURIComponent(id);if(location.hash===hash)open(id);else location.hash=hash;}
  $('#libraryPage').addEventListener('click',e=>{
    const subject=e.target.closest('[data-subject]'),pin=e.target.closest('[data-pin]'),toc=e.target.closest('[data-row-toc]'),page=e.target.closest('[data-library-page]');
    if(subject){state.subject=subject.dataset.subject;state.query='';state.page=0;const query=$('#siteQuery');if(query)query.value='';savePreferences();cards();}
    if(pin){const id=pin.dataset.pin;if(pins.has(id))pins.delete(id);else pins.add(id);savePreferences();cards();}
    if(toc){const target=document.getElementById('outline-'+toc.dataset.rowToc);target.hidden=!target.hidden;toc.setAttribute('aria-expanded',String(!target.hidden));toc.textContent=target.hidden?'목차 ▾':'접기 ▴';}
    if(page){state.page=Number(page.dataset.libraryPage);cards();$('#libraryCount').scrollIntoView({block:'nearest'});}
  });
  $('#libraryNav').addEventListener('click',e=>{
    const kind=e.target.closest('[data-kind]'),topic=e.target.closest('[data-field]'),item=e.target.closest('[data-material]'),section=e.target.closest('[data-material-section]');
    const publication=e.target.closest('[data-publication]');
    if(kind||topic||publication) {
      if(kind)state.kind=kind.dataset.kind;
      if(publication)state.publication=publication.dataset.publication;
      if(topic) {const id=topic.dataset.field;if(id==='all')state.fields=[];else state.fields=state.fields.includes(id)?state.fields.filter(x=>x!==id):[...state.fields,id];}
      if(location.hash==='#library')list();else location.hash='library';
    }
    if(item)choose(item.dataset.material);
    if(section)document.getElementById(section.dataset.materialSection)?.scrollIntoView({behavior:'smooth'});
  });
  $('#libraryPage').addEventListener('click',e=>{const b=e.target.closest('[data-material]');if(b){requestedSection=b.dataset.openSection!==undefined?{id:b.dataset.material,index:Number(b.dataset.openSection)}:null;choose(b.dataset.material);}if(e.target.closest('[data-library-back]'))location.hash='library';});
  window.addEventListener('hashchange',route);route();
})();
