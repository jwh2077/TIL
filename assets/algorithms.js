(() => {
  'use strict';
  const records = window.TIL_ALGORITHMS || [];
  const $ = selector => document.querySelector(selector);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const groups = {array:'배열 · 좌표 변환',tree:'트리 · 경로 탐색',queue:'큐 · 우선순위',string:'문자열 · 빈도',simulation:'상태 · 시뮬레이션',math:'수학 · 완전 탐색',greedy:'가격 · 역방향 탐색',dp:'동적 계획법'};
  const state = {group:'all', status:'all', query:''};
  const style = document.createElement('style');
  style.textContent = '#algorithmCards .record{overflow:hidden;transition:border-color .15s ease,background .15s ease,box-shadow .15s ease} #algorithmCards .record-button{border-radius:0}';
  document.head.append(style);
  $('#archiveModes').insertAdjacentHTML('beforeend','<a class="project" href="#algorithms">알고리즘 · 코드카타</a>');
  $('#sidebarFilters').insertAdjacentHTML('beforeend','<div id="algorithmNav" hidden><div class="side-title">문제 유형</div><div id="algorithmGroups" class="project-list"></div><div class="side-title">풀이 상태</div><div id="algorithmStatuses" class="project-list"></div><div id="algorithmOutline" hidden><div class="side-title">이 글의 목차</div><div id="algorithmSections" class="project-list"></div></div></div>');
  $('main').insertAdjacentHTML('beforeend','<div id="algorithmPage" hidden style="max-width:920px"></div>');
  const active = () => location.hash === '#algorithms' || location.hash.startsWith('#algorithm=');
  const link = r => `<a class="source" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">문제 원문 ↗</a>`;
  function controls() {
    $('#algorithmGroups').innerHTML = [['all','모든 유형'],...Object.entries(groups)].map(([id,label])=>`<button type="button" class="project" data-algorithm-group="${id}" aria-pressed="${state.group===id}">${label}<span class="tab-count">${records.filter(r=>id==='all'||r.group===id).length}</span></button>`).join('');
    $('#algorithmStatuses').innerHTML = ['all',...new Set(records.map(r=>r.status))].map(id=>`<button type="button" class="project" data-algorithm-status="${esc(id)}" aria-pressed="${state.status===id}">${id==='all'?'모든 상태':esc(id)}</button>`).join('');
  }
  function results() {
    const q=state.query.trim().toLocaleLowerCase();
    return records.filter(r=>(state.group==='all'||r.group===state.group)&&(state.status==='all'||r.status===state.status)&&[r.title,r.summary,r.problem,r.question,r.attempt,r.turning,...(r.learned||[]),groups[r.group]].join(' ').toLocaleLowerCase().includes(q));
  }
  function cards() {
    const shown=results();$('#algorithmCount').textContent=`${shown.length}개 문제`;
    $('#algorithmCards').innerHTML=shown.map(r=>`<article class="record"><button type="button" class="record-button" data-algorithm="${esc(r.id)}"><div class="record-meta"><span class="topic-badge">${esc(groups[r.group])}</span><span>${esc(r.status)}</span></div><h3>${esc(r.title)}</h3><p class="summary">${esc(r.summary)}</p><span class="more">풀이 보기 →</span></button><div class="material-links" style="margin:0;padding:0 23px 20px">${link(r)}</div></article>`).join('')||'<p class="empty">조건에 맞는 문제가 없습니다.</p>';
  }
  function list() {
    $('#algorithmOutline').hidden=true;
    $('#algorithmPage').innerHTML=`<header><div class="eyebrow">CODE KATA</div><h1>알고리즘 · 코드카타</h1><p class="intro">제출한 코드와 막혔던 부분을 적었습니다. 못 끝낸 문제도 함께 남겨뒀습니다.</p><div class="stats"><span class="stat">풀이 <strong>${records.length}</strong>개</span></div><label for="algorithmSearch" class="side-title" style="display:block;margin-left:0">문제 검색</label><input id="algorithmSearch" class="library-search" type="search" placeholder="예: 행렬, 재귀, 소수" value="${esc(state.query)}"></header><p id="algorithmCount" class="count"></p><div id="algorithmCards" class="library-grid"></div>`;
    cards();$('#algorithmSearch').addEventListener('input',e=>{state.query=e.target.value;cards();});
  }
  function open(id) {
    const r=records.find(r=>r.id===id);if(!r){$('#algorithmPage').innerHTML='<p class="empty">문제를 찾을 수 없습니다.</p><a class="related-button" href="#algorithms">문제 목록으로</a>';$('#algorithmOutline').hidden=true;return;}
    $('#algorithmOutline').hidden=false;
    const sections=[
      ['problem','문제',`<p>${esc(r.problem)}</p>`],
      ['story',r.question ? '풀이 과정' : '코드 설명',[r.question,r.attempt,r.turning].filter(Boolean).map(text=>`<p>${esc(text)}</p>`).join('')],
      ['code',r.code_title,`<pre><code>${esc(r.solution_code)}</code></pre>`],
      ['learned','메모',`<ul>${r.learned.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>`]
    ];
    const submission=r.submission_url ? `<a class="source" href="${esc(r.submission_url)}" target="_blank" rel="noopener noreferrer">제출 내역 ↗</a>` : '';
    const evidence=r.verification?`<p class="library-notice">${esc(r.verification)}</p>`:'';
    $('#algorithmPage').innerHTML=`<a class="related-button" href="#algorithms">← 문제 목록으로</a><header><div class="record-meta">${esc(r.date)} · ${esc(groups[r.group])} · ${esc(r.status)}</div><h1 id="algorithmTitle" style="font-size:clamp(1.7rem,4vw,2.8rem);line-height:1.3">${esc(r.title)}</h1>${evidence}<div class="material-links">${link(r)}${submission}</div></header>${sections.map(([id,title,body])=>`<section id="algorithm-${id}" class="material-section"><h2>${esc(title)}</h2>${body}</section>`).join('')}<section class="related"><h3>비슷한 문제</h3><div class="related-list">${records.filter(x=>x.id!==id&&x.group===r.group).map(x=>`<a class="related-button" href="#algorithm=${encodeURIComponent(x.id)}">${esc(x.title)}</a>`).join('')}</div><p><a class="source" href="#library">정리 자료 →</a></p></section>`;
    $('#algorithmSections').innerHTML=sections.map(([id,title])=>`<button type="button" class="project" data-algorithm-section="algorithm-${id}">${title}</button>`).join('');
    window.scrollTo({top:0});$('#algorithmTitle').setAttribute('tabindex','-1');$('#algorithmTitle').focus();
  }
  function route() {
    const enabled=active();$('#algorithmPage').hidden=!enabled;$('#algorithmNav').hidden=!enabled;
    if(!enabled)return;
    for(const selector of ['#listPage','#articlePage','#libraryPage','#libraryNav','#subnav','#articleNav'])$(selector).hidden=true;
    for(const a of $('#archiveModes').querySelectorAll('a')){if(a.getAttribute('href')==='#algorithms')a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');}
    controls();
    if(location.hash.startsWith('#algorithm=')){try{open(decodeURIComponent(location.hash.slice(11)));}catch{location.hash='algorithms';}}else list();
  }
  $('#algorithmNav').addEventListener('click',e=>{
    const group=e.target.closest('[data-algorithm-group]'),status=e.target.closest('[data-algorithm-status]'),section=e.target.closest('[data-algorithm-section]');
    if(group||status){if(group)state.group=group.dataset.algorithmGroup;if(status)state.status=status.dataset.algorithmStatus;if(location.hash==='#algorithms'){controls();list();}else location.hash='algorithms';}
    if(section)document.getElementById(section.dataset.algorithmSection)?.scrollIntoView({behavior:'smooth'});
  });
  $('#algorithmPage').addEventListener('click',e=>{const item=e.target.closest('[data-algorithm]');if(item)location.hash='algorithm='+encodeURIComponent(item.dataset.algorithm);});
  window.addEventListener('hashchange',route);route();
})();
