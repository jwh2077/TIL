(() => {
  'use strict';
  const materials = window.TIL_LIBRARY_INDEX || [];
  const $ = s => document.querySelector(s);
  const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const kinds = {file:'문서 원본',velog:'Velog 원본',note:'메모 원본'};
  const topics = {cpp:'C / C++',unreal:'Unreal',ds:'자료구조',stl:'STL',oop:'객체지향 · 설계',memory:'포인터 · 메모리'};
  const state = {kind:'all',fields:[],publication:'all',query:'',tags:[],sort:'topic'};
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
  const expandedSubjects = new Set();
  const relevance = (r, query) => !query ? 0 : contains(r.title,query) ? 3 : (r.outline||[]).some(s=>contains(s.title,query)) ? 2 : contains(r.summary,query) ? 1 : 0;
  function results() {
    const query = state.query.trim().toLocaleLowerCase();
    return materials.filter(r=>(!window.TIL_FILTERS||window.TIL_FILTERS.matches(r,state,'material'))&&(state.kind==='all'||r.kind===state.kind)&&state.fields.every(id=>fields(r).includes(id))&&(state.publication==='all'||r.publication===state.publication)&&matchesQuery(r,query)).sort((a,b)=>{const ranked=query&&['topic','relevance'].includes(state.sort);return (ranked?relevance(b,query)-relevance(a,query):0)||(state.sort==='desc'?-1:1)*a.title.localeCompare(b.title,'ko');});
  }
  function list() {
    controls(); $('#materialOutline').hidden = true;
    $('#libraryPage').innerHTML = `<header><div class="eyebrow">NOTES</div><h1>자료실</h1><p class="intro">필요한 개념과 사용법, 코드 예제를 주제별로 찾아보세요. 관련 내용은 기존 문서에 보강하고, 이어 볼 자료는 서로 연결합니다.</p><label for="librarySearch" class="side-title" style="display:block;margin-left:0">자료 검색</label><input id="librarySearch" class="library-search" type="search" placeholder="예: push_back, GameMode, 헤더 경로" value="${esc(state.query)}"></header><p id="libraryCount" class="count"></p><div id="libraryCards" class="library-index"></div>`;
    cards();
    $('#librarySearch').addEventListener('input',e=>{state.query=e.target.value;cards();});
  }
  function materialRow(r) {
    const matches = state.query.trim() ? (r.outline||[]).map((s,index)=>({...s,index})).filter(s=>contains(s.text,state.query)) : [];
    return `<article class="material-row"><button type="button" class="material-open" data-material="${esc(r.id)}"><span><strong>${esc(r.title)}</strong>${r.publication==='draft'?'<small class="topic-badge">초안</small>':''}<span class="material-summary">${esc(r.summary)}</span></span><span aria-hidden="true">→</span></button>${matches.length?`<details class="material-matches"><summary>검색어가 있는 항목 ${matches.length}개</summary><div class="material-contents">${matches.map(s=>`<button type="button" data-material="${esc(r.id)}" data-open-section="${s.index}">${esc(s.title)} →</button>`).join('')}</div></details>`:''}</article>`;
  }
  function cards() {
    const shown=results(); $('#libraryCount').textContent=`${shown.length}개 자료`;
    const grouped=state.sort==='topic'&&!state.query.trim();
    const shownIds=new Set(shown.map(r=>r.id));
    const topicRows = topic => topic.documents.map(id=>shown.find(r=>r.id===id)).filter(Boolean);
    const disclosure=(id,label,body,count,hint='')=>`<details class="material-subject" data-subject="${id}" ${expandedSubjects.has(id)?'open':''}><summary><span><strong>${esc(label)}</strong>${hint?`<small>${esc(hint)}</small>`:''}</span><span class="subject-count">${count}개 문서</span></summary><div>${body}</div></details>`;
    const indexed = new Set(subjectGroups.flatMap(group=>group.topics.flatMap(topic=>topic.documents)));
    const groups=subjectGroups.map(group=>{
      const topics=group.topics.filter(topic=>topicRows(topic).length);
      if(!topics.length)return '';
      const ids=new Set(topics.flatMap(topic=>topic.documents).filter(id=>shownIds.has(id)));
      const body=topics.map(topic=>{
        const rows=topicRows(topic);
        const shortcuts=(topic.shortcuts||[]).filter(([,id])=>shownIds.has(id)).map(([label,id,heading])=>{
          const index=materials.find(r=>r.id===id)?.outline?.findIndex(s=>s.title===heading);
          return index>=0?`<button class="material-open" type="button" data-material="${esc(id)}" data-open-section="${index}"><strong>${esc(label)}</strong><span aria-hidden="true">→</span></button>`:'';
        }).join('');
        return disclosure(group.id+'-'+topic.id,topic.title,shortcuts+(shortcuts?'<p class="material-whole-label">문서 전체 보기</p>':'')+rows.map(materialRow).join(''),rows.length);
      }).join('');
      return disclosure(group.id,group.title,body,ids.size,group.hint);
    }).join('');
    const remaining=shown.filter(r=>!indexed.has(r.id));
    $('#libraryCards').innerHTML=(grouped?groups+(remaining.length?disclosure('unfiled','기타 자료',remaining.map(materialRow).join(''),remaining.length):''):shown.map(materialRow).join(''))||'<div class="empty">조건에 맞는 자료가 없습니다. 검색어나 선택한 조건을 줄여보세요.</div>';
    $('#libraryCards').querySelectorAll('[data-subject]').forEach(group=>group.addEventListener('toggle',()=>{if(!group.isConnected)return;if(group.open)expandedSubjects.add(group.dataset.subject);else expandedSubjects.delete(group.dataset.subject);}));
  }
  window.TIL_MATERIAL_VIEW={state,records:materials,results,matchesQuery,update(patch){Object.assign(state,patch);controls();cards();}};
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
