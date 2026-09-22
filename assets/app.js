(() => {
  'use strict';
  const records = window.TIL_INDEX?.records || [];
  const topics = [
    ['all', '전체 기록', '수업 메모, 직접 만든 기능과 막혔던 부분을 모았습니다.'],
    ['cpp', 'C++ 기초', '변수와 조건문부터 직접 써본 C++ 코드입니다.'],
    ['unreal', 'Unreal · Blueprint', '엔진 사용부터 게임플레이와 Unreal C++ 구현까지 모았습니다.'],
    ['oop', '객체지향 · 게임 구조', '클래스를 만들고 기능을 어디에 나눌지 고민한 기록입니다.'],
    ['memory', '포인터 · 메모리', '주소와 참조, 배열, 메모리 할당을 다룬 메모입니다.'],
    ['stl', 'STL · 자료구조', '컨테이너와 자료 저장 방식을 선택하고 적용한 기록입니다.'],
    ['project', '프로젝트 · 협업', '기능 구현, Git과 팀 협업에서 배운 내용을 모았습니다.']
  ];
  const state = { topic: 'all', project: 'all', from: '', to: '', dateKind: 'all', sub: 'all', activity:'all' };
  const subdivisions = {
    unreal: [['ai','AI · 행동 흐름',/AI|몬스터|순찰|시야|추적|Behavior|비헤이비어/i], ['combat','전투 · 스탯',/공격|피해|사망|스탯|DataTable/i], ['parts','아이템 · 파츠',/파츠|아이템|Item|Part/i], ['engine','엔진 · 게임플레이',/.*/]],
    cpp: [['flow','문법 · 제어 흐름',/조건|반복|변수|연산|입출력/], ['function','함수 · 문제 풀이',/함수|문제|알고리즘/], ['practice','기초 실습',/.*/]],
    oop: [['class','클래스 · 객체 관계',/클래스|상속|다형|객체/], ['design','설계 · 책임 분리',/.*/]],
    memory: [['pointer','포인터 · 참조',/포인터|참조/], ['storage','배열 · 메모리 관리',/.*/]],
    stl: [['container','컨테이너 활용',/vector|map|STL|컨테이너/i], ['structure','자료구조 · 알고리즘',/.*/]],
    project: [['shop','상점 · 아이템',/상점|판매|구매|아이템/], ['collaboration','Git · 협업',/Git|협업|회고|팀/i], ['implementation','구현 · 구조 개선',/.*/]]
  };
  const subOf = r => (subdivisions[r.primary_topic] || []).find(s => s[2].test([r.title, ...(r.tags || [])].join(' ')))?.[0];
  const $ = s => document.querySelector(s);
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const name = id => topics.find(t => t[0] === id)?.[1] || '기타';
  const page = $('#articlePage');
  $('#projects').previousElementSibling.insertAdjacentHTML('beforebegin','<div class="side-title">활동 구분</div><div id="activities" class="project-list"></div>');
  const activities={study:'기초 학습',personal:'개인 프로젝트',team:'팀 프로젝트'};
  const projects=[...new Set(records.map(r=>r.project).filter(Boolean))].sort((a,b)=>{
    const start=p=>records.filter(r=>r.project===p&&r.date).map(r=>r.date).sort()[0]||'9999';
    return start(a).localeCompare(start(b))||a.localeCompare(b);
  });
  const cache = new Map();
  let request = 0;
  function matchesDate(r) {
    if (state.dateKind !== 'all' && r.month !== state.dateKind) return false;
    if (!state.from && !state.to) return true;
    if (!r.date) return false;
    return (!state.from || (r.date_end || r.date) >= state.from) && (!state.to || r.date <= state.to);
  }
  function visible() {
    if (state.from && state.to && state.from > state.to) return [];
    return records.filter(r => (state.activity==='all'||r.activity===state.activity) && (state.topic === 'all' || r.primary_topic === state.topic) &&
      (state.project === 'all' || r.project === state.project) && matchesDate(r) && (state.sub === 'all' || subOf(r) === state.sub))
      .sort((a, b) => !a.date && b.date ? 1 : a.date && !b.date ? -1 :
        ($('#sort').value === 'asc' ? 1 : -1) * String(a.date || '').localeCompare(String(b.date || '')) || a.id.localeCompare(b.id));
  }
  function controls() {
    $('#tabs').innerHTML = topics.map(([id, label]) => `<button class="tab" type="button" data-topic="${id}" role="tab" aria-selected="${state.topic === id}">${label}<span class="tab-count">${records.filter(r => id === 'all' || r.primary_topic === id).length}</span></button>`).join('');
    $('#activities').innerHTML=[['all','전체 활동'],...Object.entries(activities)].map(([id,label])=>`<button class="project" type="button" data-activity="${id}" aria-pressed="${state.activity===id}">${label}</button>`).join('');
    $('#projects').innerHTML = ['all', ...projects.filter(p=>state.activity==='all'||records.some(r=>r.project===p&&r.activity===state.activity))].map(p => `<button class="project" type="button" data-project="${esc(p)}" aria-pressed="${state.project === p}">${esc(p === 'all' ? '모든 프로젝트 · 시작순' : p)}</button>`).join('');
  }
  function render() {
    controls();
    sidebar();
    const topic = topics.find(t => t[0] === state.topic);
    $('#topicTitle').textContent = topic[1]; $('#topicDescription').textContent = topic[2];
    const shown = visible(); $('#count').textContent = `${shown.length}개 기록`;
    $('#records').innerHTML = shown.map(r => `<article class="record"><button class="record-button" type="button" data-record-id="${esc(r.id)}"><div class="record-meta"><span>${esc(r.date_label)}</span><span class="topic-badge">${esc(name(r.primary_topic))}</span></div><h3>${esc(r.title)}</h3>${r.project ? `<p class="summary">${esc(r.project)}</p>` : ''}<span class="more">열기 →</span></button></article>`).join('') || '<div class="empty">선택한 조건에 맞는 기록이 없습니다.</div>';
  }
  function load(file) {
    if (!/^data\/(?:\d{4}\/\d{2}|undated|project-period)\/[\w-]+\.js$/.test(file)) return Promise.reject(new Error('잘못된 기록 경로'));
    if (window.TIL_FILES?.[file]) return Promise.resolve(window.TIL_FILES[file]);
    if (!cache.has(file)) cache.set(file, new Promise((resolve, reject) => {
      const script = document.createElement('script'); script.src = file;
      const fail = () => { cache.delete(file); script.remove(); reject(new Error('기록 파일을 열 수 없습니다.')); };
      script.onload = () => window.TIL_FILES?.[file] ? resolve(window.TIL_FILES[file]) : fail();
      script.onerror = fail; document.head.append(script);
    }));
    return cache.get(file);
  }
  const list = (label, values) => Array.isArray(values) && values.length ? `<section class="section"><h3>${label}</h3><ul>${values.map(v => `<li>${esc(v)}</li>`).join('')}</ul></section>` : '';
  function noteBody(r) {
    const paragraphs = [r.study_content, r.learning_process].filter(Boolean);
    return `<section class="note-body">${paragraphs.map(value => `<p>${esc(value)}</p>`).join('')}</section>`;
  }
  function gallery(images) {
    if (!Array.isArray(images) || !images.length) return '';
    const items = images.map(item => {
      try {
        const url = new URL(item.url);
        if (url.protocol !== 'https:' || url.hostname !== 'velog.velcdn.com') return '';
        return `<figure class="til-shot"><a href="${esc(url.href)}" target="_blank" rel="noopener noreferrer"><img src="${esc(url.href)}" alt="${esc(item.alt || item.caption || '작업 화면')}" loading="lazy"></a>${item.caption ? `<figcaption>${esc(item.caption)}</figcaption>` : ''}</figure>`;
      } catch { return ''; }
    }).join('');
    return items ? `<section class="section"><h3>작업 화면</h3><div class="til-gallery">${items}</div></section>` : '';
  }
  function link(label, url) {
    try { const u = new URL(url); return ['https:', 'http:'].includes(u.protocol) ? `<a class="source" href="${esc(u.href)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>` : ''; } catch { return ''; }
  }
  const button = (r, label) => r ? `<button class="related-button" type="button" data-record-id="${esc(r.id)}">${esc(label || r.title)}</button>` : '';
  function navigate(id) {
    const hash = '#record=' + encodeURIComponent(id);
    if (location.hash === hash) open(id); else location.hash = hash;
  }
  function sidebar(meta) {
    const topic = meta?.primary_topic || state.topic;
    $('#subnav').hidden = topic === 'all';
    const selected = meta ? subOf(meta) : state.sub;
    const groups = (subdivisions[topic] || []).filter(s => records.some(r => r.primary_topic === topic && subOf(r) === s[0]));
    $('#subtopics').innerHTML = [['all','주제 전체'], ...groups].map(([id,label]) => `<button type="button" class="project" data-sub="${id}" data-parent="${topic}" aria-pressed="${selected === id}">${label}</button>`).join('');
    if (!meta) return;
    $('#articleNav').hidden = false;
    $('#sections').innerHTML = '';
    $('#nearby').innerHTML = records.filter(r => r.primary_topic === topic && subOf(r) === selected).map(r => `<button type="button" class="project" data-record-id="${esc(r.id)}" ${r.id === meta.id ? 'aria-current="page"' : ''}>${esc(r.title)}</button>`).join('');
  }
  function buildSections() {
    const sections = [...$('#detailContent').querySelectorAll('.core,.section,.extra,.related')].filter(s => !s.closest('.extra-body'));
    $('#sections').innerHTML = sections.map((s,i) => {
      s.id = 'article-section-' + i;
      return `<button type="button" class="project" data-section="${s.id}">${esc(s.querySelector('h3,summary')?.textContent || '참고 자료')}</button>`;
    }).join('');
  }
  async function open(id) {
    const meta = records.find(r => r.id === id); if (!meta) return;
    const token = ++request;
    $('#detailContent').innerHTML = `<div class="detail-top"><h2 id="detailTitle">기록을 여는 중…</h2></div>`;
    $('#listPage').hidden = true; page.hidden = false; sidebar(meta);
    
    try {
      const r = (await load(meta.file)).find(x => x.id === id);
      if (!r) throw new Error('기록을 찾을 수 없습니다.');
      if (token !== request || page.hidden) return;
      let sequence = visible(); if (!sequence.some(x => x.id === id)) sequence = records;
      const at = sequence.findIndex(x => x.id === id);
      const related = records.filter(x => x.id !== id && x.primary_topic === meta.primary_topic)
        .sort((a,b) => Math.abs(Date.parse(a.date) - Date.parse(meta.date)) - Math.abs(Date.parse(b.date) - Date.parse(meta.date))).slice(0,3);
      const sources = [{label: 'Velog 원문', url: r.velog}, {label: '프로젝트 저장소', url: r.repository}, ...(r.references || [])];
      const seenSources = new Set();
      const sourceLinks = sources.filter(x => {
        if (!x.url || seenSources.has(x.url)) return false;
        seenSources.add(x.url);
        return true;
      }).map(x => link(x.label || x.title || '참고 기록', x.url)).join('');
      const hasNotes = (r.questions || []).length || (r.mistakes_or_difficulties || []).length;
      $('#detailContent').innerHTML = `<div class="detail-top"><div><div class="record-meta">${esc(meta.date_label)} · ${esc(name(meta.primary_topic))}</div><h2 id="detailTitle" class="detail-title">${esc(r.title)}</h2></div></div><p class="detail-label">${esc(r.project || '개인 공부')}</p>${noteBody(r)}${gallery(r.images)}${hasNotes ? `<details class="extra"><summary>막힌 부분과 남은 질문</summary><div class="extra-body">${list('궁금했던 것', r.questions)}${list('남은 부분', r.mistakes_or_difficulties)}</div></details>` : ''}${r.notice ? `<p class="article-notice">${esc(r.notice)}</p>` : ''}${sourceLinks ? `<section class="note-sources" aria-label="원본과 참고 링크">${sourceLinks}</section>` : ''}<section class="related"><h3>앞뒤 기록</h3><div class="related-list">${button(sequence[at-1], '← 이전 기록')}${button(sequence[at+1], '다음 기록 →')}</div></section><section class="related"><h3>비슷한 내용</h3><div class="related-list">${related.map(x => button(x)).join('')}</div></section>`;
      buildSections(); window.scrollTo({ top: 0 }); $('#detailTitle').setAttribute('tabindex', '-1'); $('#detailTitle').focus();
    } catch (error) {
      if (token !== request || page.hidden) return;
      $('#detailContent').innerHTML = `<div class="detail-top"><h2 id="detailTitle">기록을 열지 못했습니다</h2></div><p>${esc(error.message)}</p>${button(meta, '다시 열기')}`;
    }
  }
  for (const [selector, key] of [['#tabs','topic'], ['#projects','project'],['#activities','activity']]) {
    $(selector).addEventListener('click', e => { const b = e.target.closest(`[data-${key}]`); if (b) { state[key] = b.dataset[key]; if (key === 'topic') state.sub = 'all'; if(key==='activity')state.project='all'; location.hash = 'list'; fromHash(); } });
  }
  function dateChange() {
    state.from = $('#dateFrom').value;
    state.to = $('#dateTo').value;
    state.dateKind = $('#dateKind').value;
    const withoutDates = state.dateKind !== 'all';
    $('#dateFrom').disabled = $('#dateTo').disabled = withoutDates;
    if (withoutDates) { state.from = state.to = ''; $('#dateFrom').value = $('#dateTo').value = ''; }
    const invalid = state.from && state.to && state.from > state.to;
    $('#dateMessage').textContent = invalid ? '시작일을 종료일보다 앞선 날짜로 골라주세요.' : state.from || state.to ? '선택한 기간과 겹치는 기록입니다. 날짜가 없는 메모는 제외됩니다.' : '';
    $('#dateFrom').setAttribute('aria-invalid', String(Boolean(invalid)));
    render();
  }
  for (const selector of ['#dateFrom', '#dateTo', '#dateKind']) $(selector).addEventListener('change', dateChange);
  $('#resetDates').addEventListener('click', () => {
    $('#dateFrom').value = ''; $('#dateTo').value = ''; $('#dateKind').value = 'all'; dateChange();
  });
  $('#subtopics').addEventListener('click', e => { const b = e.target.closest('[data-sub]'); if (b) { state.topic = b.dataset.parent; state.sub = b.dataset.sub; location.hash = 'list'; fromHash(); } });
  $('#nearby').addEventListener('click', e => { const b = e.target.closest('[data-record-id]'); if (b) navigate(b.dataset.recordId); });
  $('#sections').addEventListener('click', e => { const b = e.target.closest('[data-section]'); if (b) document.getElementById(b.dataset.section)?.scrollIntoView({ behavior: 'smooth' }); });
  $('#sort').addEventListener('change', render);
  $('#records').addEventListener('click', e => { const b = e.target.closest('[data-record-id]'); if (b) navigate(b.dataset.recordId); });
  $('#detailContent').addEventListener('click', e => { const b = e.target.closest('[data-record-id]'); if (b) navigate(b.dataset.recordId); });
  $('#backToList').addEventListener('click', () => { location.hash = 'list'; });
  function fromHash() {
    if (location.hash === '#library' || location.hash.startsWith('#material=') || location.hash === '#algorithms' || location.hash.startsWith('#algorithm=')) {
      ++request; page.hidden = true; $('#listPage').hidden = true;
      $('#articleNav').hidden = true; $('#subnav').hidden = true; return;
    }
    if (location.hash.startsWith('#record=')) {
      try { const id = decodeURIComponent(location.hash.slice(8)); if (records.some(r => r.id === id)) { open(id); return; } } catch {}
    }
    ++request; page.hidden = true; $('#listPage').hidden = false; $('#articleNav').hidden = true; render();
  }
  window.addEventListener('hashchange', fromHash);
  $('#total').textContent = records.length; $('#topicTotal').textContent = topics.length - 1;
  const dates = records.filter(r => r.date).flatMap(r => [r.date, r.date_end || r.date]).sort();
  $('#dateFrom').min = $('#dateTo').min = dates[0] || '';
  $('#dateFrom').max = $('#dateTo').max = dates.at(-1) || '';
  $('#dateCoverage').textContent = `기록이 있는 기간 ${dates[0] || '—'} ~ ${dates.at(-1) || '—'}`;
  if (window.matchMedia) {
    const compact = window.matchMedia('(max-width:850px)');
    const resize = () => { $('#sidebarFilters').open = !compact.matches; };
    resize(); compact.addEventListener('change', resize);
    window.addEventListener('hashchange', () => {
      if (compact.matches && /^(#record=|#material=|#algorithm=)/.test(location.hash)) $('#sidebarFilters').open = false;
    });
  }
  render(); fromHash();
})();
