(() => {
  'use strict';
  const records = window.TIL_ALGORITHMS || [];
  const $ = selector => document.querySelector(selector);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const groups = {array:'배열 · 좌표 변환',tree:'트리 · 경로 탐색',queue:'큐 · 우선순위',string:'문자열 · 빈도',simulation:'상태 · 시뮬레이션',math:'수학 · 완전 탐색',greedy:'가격 · 역방향 탐색',dp:'동적 계획법'};
  const state = {group:'all', status:'all', query:''};
  $('#archiveModes').insertAdjacentHTML('beforeend','<a class="project" href="#algorithms">알고리즘 · 코드카타</a>');
  $('aside').insertAdjacentHTML('beforeend','<div id="algorithmNav" hidden><div class="side-title">문제 유형</div><div id="algorithmGroups" class="project-list"></div><div class="side-title">풀이 상태</div><div id="algorithmStatuses" class="project-list"></div><div id="algorithmOutline" hidden><div class="side-title">이 글의 목차</div><div id="algorithmSections" class="project-list"></div></div></div>');
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
    $('#algorithmCards').innerHTML=shown.map(r=>`<article class="record"><button type="button" class="record-button" data-algorithm="${esc(r.id)}"><div class="record-meta"><span class="topic-badge">${esc(groups[r.group])}</span><span>${esc(r.status)}</span></div><h3>${esc(r.title)}</h3><p class="summary">${esc(r.summary)}</p><span class="more">풀이 글 읽기 →</span></button><div class="material-links" style="margin:0;padding:0 23px 20px">${link(r)}</div></article>`).join('')||'<p class="empty">조건에 맞는 문제가 없습니다.</p>';
  }
  function list() {
    $('#algorithmOutline').hidden=true;
    $('#algorithmPage').innerHTML=`<header><div class="eyebrow">Algorithm Practice</div><h1>알고리즘 ·<br>코드카타</h1><p class="intro">문제를 풀며 세운 생각, 막힌 지점, 코드를 바꾼 이유와 배운 내용을 글로 남겼습니다.</p><div class="stats"><span class="stat">작성한 풀이 <strong>${records.length}</strong>개</span></div><p class="library-notice">기존 대화에서 직접 작성한 코드와 질문을 바탕으로 다시 쓴 학습 기록입니다. 완료하지 못한 문제는 당시 도달한 지점과 다음 단계까지 구분해 적었습니다.</p><label for="algorithmSearch" class="side-title" style="display:block;margin-left:0">문제 검색</label><input id="algorithmSearch" class="library-search" type="search" placeholder="예: 행렬, 재귀, 소수" value="${esc(state.query)}"></header><p id="algorithmCount" class="count"></p><div id="algorithmCards" class="library-grid"></div>`;
    cards();$('#algorithmSearch').addEventListener('input',e=>{state.query=e.target.value;cards();});
  }
  function open(id) {
    const r=records.find(r=>r.id===id);if(!r){$('#algorithmPage').innerHTML='<p class="empty">문제를 찾을 수 없습니다.</p><a class="related-button" href="#algorithms">문제 목록으로</a>';$('#algorithmOutline').hidden=true;return;}
    $('#algorithmOutline').hidden=false;
    const sections=[
      ['problem','문제에서 확인한 것',`<p>${esc(r.problem)}</p>${link(r)}`],
      ['question','처음 막힌 지점',`<p>${esc(r.question)}</p>`],
      ['attempt','내가 시도한 접근',`<p>${esc(r.attempt)}</p>`],
      ['turning','코드를 바꾼 이유',`<p>${esc(r.turning)}</p>`],
      ['code',r.code_title,`<pre><code>${esc(r.solution_code)}</code></pre>`],
      ['learned','이번 풀이에서 남긴 것',`<ul>${r.learned.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>`]
    ];
    $('#algorithmPage').innerHTML=`<a class="related-button" href="#algorithms">← 문제 목록으로</a><header><div class="record-meta">${esc(groups[r.group])} · ${esc(r.status)}</div><h1 id="algorithmTitle" style="font-size:clamp(1.7rem,4vw,2.8rem);line-height:1.3">${esc(r.title)}</h1><p class="intro">${esc(r.summary)}</p><p class="library-notice">작성 기준일: ${esc(r.date)} · 기존 대화와 직접 작성한 코드를 바탕으로 재구성한 학습 기록</p>${link(r)}</header>${sections.map(([id,title,body])=>`<section id="algorithm-${id}" class="material-section"><h2>${esc(title)}</h2>${body}</section>`).join('')}<section class="related"><h3>같은 유형의 다른 문제</h3><div class="related-list">${records.filter(x=>x.id!==id&&x.group===r.group).map(x=>`<a class="related-button" href="#algorithm=${encodeURIComponent(x.id)}">${esc(x.title)}</a>`).join('')}</div><p><a class="source" href="#library">개념 정리 자료실 →</a></p></section>`;
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
