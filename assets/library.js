(() => {
  'use strict';
  const materials = window.TIL_LIBRARY_INDEX || [];
  const $ = s => document.querySelector(s);
  const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const kinds = {file:'정리 문서',velog:'Velog 정리',note:'정리 중인 노트'};
  const topics = {cpp:'C / C++',unreal:'Unreal',ds:'자료구조',stl:'STL',oop:'객체지향 · 설계',memory:'포인터 · 메모리'};
  const state = {kind:'all',fields:[],publication:'all',query:''};
  const fields = r => r.topics || [r.topic];
  const classification = r => fields(r).map(id=>topics[id]||id).join(' · ');
  let pending; let token = 0;
  $('aside .brand').insertAdjacentHTML('afterend', `<div class="side-title">보기 방식</div><div id="archiveModes" class="project-list"><a class="project" href="#list">날짜별 기록</a><a class="project" href="#library">정리 자료</a></div>`);
  $('#sidebarFilters > summary').insertAdjacentHTML('afterend', `<div id="libraryNav" hidden><div class="side-title">자료 종류</div><div id="materialKinds" class="project-list"></div><div class="side-title">학습 분야</div><div id="materialTopics" class="project-list"></div><div id="materialOutline" hidden><div class="side-title">자료 목차</div><div id="materialSections" class="project-list"></div><div class="side-title">같은 분야 자료</div><div id="materialRelated" class="project-list"></div></div></div>`);
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
  function results() {
    const query = state.query.trim().toLocaleLowerCase();
    return materials.filter(r=>(state.kind==='all'||r.kind===state.kind)&&state.fields.every(id=>fields(r).includes(id))&&(state.publication==='all'||r.publication===state.publication)&&[r.title,r.summary,r.source_name,classification(r)].join(' ').toLocaleLowerCase().includes(query));
  }
  function list() {
    controls(); $('#materialOutline').hidden = true;
    $('#libraryPage').innerHTML = `<header><div class="eyebrow">NOTES</div><h1>정리 자료</h1><p class="intro">수업과 Velog에 적어둔 개념, 코드 예제를 모았습니다.</p><div class="stats">${Object.entries(kinds).map(([id,label])=>`<span class="stat">${label} <strong>${materials.filter(r=>r.kind===id).length}</strong>개</span>`).join('')}</div><label for="librarySearch" class="side-title" style="display:block;margin-left:0">자료 검색</label><input id="librarySearch" class="library-search" type="search" placeholder="예: 배열, Big-O, 매크로" value="${esc(state.query)}"></header><p id="libraryCount" class="count"></p><div id="libraryCards" class="library-grid"></div>`;
    cards();
    $('#librarySearch').addEventListener('input',e=>{state.query=e.target.value;cards();});
  }
  function cards() {
    const shown=results(); $('#libraryCount').textContent=`${shown.length}개 자료`;
    $('#libraryCards').innerHTML=shown.map(r=>`<article class="record"><button type="button" class="record-button" data-material="${esc(r.id)}"><div class="record-meta"><span class="topic-badge">${esc(kinds[r.kind])}</span><span>${esc(classification(r))}</span></div><h3>${esc(r.title)}</h3><p class="summary">${esc(r.summary)}</p><span class="more">열기 →</span></button></article>`).join('')||'<div class="empty">조건에 맞는 자료가 없습니다.</div>';
  }
  function load() {
    if(window.TIL_LIBRARY) return Promise.resolve(window.TIL_LIBRARY);
    if(!pending) pending=new Promise((resolve,reject)=>{
      const s=document.createElement('script');s.src='data/materials/library.js';
      const fail=()=>{pending=null;s.remove();reject(new Error('자료 파일을 읽지 못했습니다.'));};
      s.onload=()=>window.TIL_LIBRARY?resolve(window.TIL_LIBRARY):fail();s.onerror=fail;document.head.append(s);
    });
    return pending;
  }
  function sourceLink(r) {
    const links=[];
    if(r.kind==='file' && r.source_url==='data/guides/stl-reference.html') links.push(`<a class="source" href="${r.source_url}">원본 자료구조 문서 보기 →</a>`);
    for(const ref of [...(r.references||[]),...(r.kind==='velog'?[{label:'Velog 원문 보기',url:r.source_url}]:[])]) {
      try {const u=new URL(ref.url);if(u.protocol==='https:'&&['velog.io','dev.epicgames.com'].includes(u.hostname))links.push(`<a class="source" href="${esc(u.href)}" target="_blank" rel="noopener noreferrer">${esc(ref.label)} ↗</a>`);}catch{}
    }
    return links.join('');
  }
  async function open(id) {
    const stamp=++token; const meta=materials.find(r=>r.id===id);
    if(!meta) {location.hash='library';return;}
    controls();$('#materialOutline').hidden=false;
    $('#materialSections').innerHTML='';
    $('#materialRelated').innerHTML=materials.filter(r=>r.id!==id&&fields(r).some(id=>fields(meta).includes(id))).sort((a,b)=>fields(b).filter(id=>fields(meta).includes(id)).length-fields(a).filter(id=>fields(meta).includes(id)).length).slice(0,6).map(r=>`<button type="button" class="project" data-material="${esc(r.id)}">${esc(r.title)}</button>`).join('');
    $('#libraryPage').innerHTML='<p>정리 자료를 여는 중…</p>';
    try {
      const r=(await load()).find(r=>r.id===id);if(stamp!==token||!active())return;if(!r)throw new Error('자료를 찾을 수 없습니다.');
      $('#libraryPage').innerHTML=`<button type="button" class="related-button" data-library-back>← 자료 목록으로</button><header><div class="record-meta">${esc(kinds[r.kind])} · ${esc(classification(r))}</div><h1 id="materialTitle" style="font-size:clamp(1.7rem,4vw,2.8rem);line-height:1.3">${esc(r.title)}</h1><p class="intro">${esc(r.summary)}</p><p class="library-notice">원본: ${esc(r.source_name)}</p>${r.notice?`<p class="core library-notice">${esc(r.notice)}</p>`:''}<div class="material-links">${sourceLink(r)}</div></header>${r.sections.map((s,i)=>`<section id="material-section-${i}" class="material-section"><h2>${esc(s.title)}</h2>${s.html||''}${s.text?`<p style="white-space:pre-line">${esc(s.text)}</p>`:''}${s.code?`<pre><code>${esc(s.code)}</code></pre>`:''}${s.items?`<ul>${s.items.map(v=>`<li>${esc(v)}</li>`).join('')}</ul>`:''}</section>`).join('')}<section class="related"><h3>관련 실습</h3><div class="related-list">${(r.related_ids||[]).map(id=>window.TIL_INDEX.records.find(x=>x.id===id)).filter(Boolean).slice(0,6).map(x=>`<a class="related-button" href="#record=${encodeURIComponent(x.id)}">${esc(x.title)}</a>`).join('')}</div></section>`;
      $('#materialSections').innerHTML=r.sections.map((s,i)=>`<button type="button" class="project" data-material-section="material-section-${i}">${esc(s.title)}</button>`).join('');
      window.scrollTo({top:0});$('#materialTitle').setAttribute('tabindex','-1');$('#materialTitle').focus();
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
  $('#libraryPage').addEventListener('click',e=>{const b=e.target.closest('[data-material]');if(b)choose(b.dataset.material);if(e.target.closest('[data-library-back]'))location.hash='library';});
  window.addEventListener('hashchange',route);route();
})();
