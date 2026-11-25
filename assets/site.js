(() => {
  'use strict';
  const $=s=>document.querySelector(s), esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const records=window.TIL_INDEX.records, materials=window.TIL_LIBRARY_INDEX, algorithms=window.TIL_ALGORITHMS, curated=window.TIL_PROJECTS;
  const recordURL=id=>'#record='+encodeURIComponent(id);
  const projectNames=p=>p.record_projects||[p.record_project];
  const projectRecords=p=>records.filter(r=>projectNames(p).includes(r.project));
  const groups=[...new Set(records.filter(r=>['team','personal'].includes(r.activity)&&r.project).map(r=>r.project))];
  const projects=[...curated.map(p=>{if(!p.archive||p.period)return p;const rows=projectRecords(p),dates=rows.map(r=>r.date).filter(Boolean).sort(),ends=rows.map(r=>r.date_end||r.date).filter(Boolean).sort();return {...p,period:dates[0]+'–'+ends.at(-1),period_note:'남아 있는 기록의 범위이며 프로젝트의 정확한 시작·종료일은 아닙니다.'};}),...groups.filter(name=>!curated.some(p=>projectNames(p).includes(name))).map((name,i)=>{
    const rows=records.filter(r=>r.project===name), dates=rows.filter(r=>r.date).map(r=>r.date).sort(), ends=rows.filter(r=>r.date).map(r=>r.date_end||r.date).sort();
    return {id:'archive-'+Array.from(name).map(c=>c.codePointAt(0).toString(16)).join('-'),record_project:name,title:name,summary:'기존 작업 기록을 모았습니다.',period:dates[0]+'–'+ends.at(-1),period_note:'남아 있는 기록의 범위이며 프로젝트의 정확한 시작·종료일은 아닙니다.',tags:[],archive:true,activity:rows[0].activity};
  })];
  const featured=projects.find(p=>p.featured)||projects[0];
  let currentKind='', tocObserver, projectFilter={query:'',tags:[],from:'',to:'',sort:'asc'}, lastProject='';
  const views={record:window.TIL_RECORD_VIEW,material:window.TIL_MATERIAL_VIEW,algorithm:window.TIL_ALGORITHM_VIEW};
  const route=()=>{const hash=location.hash.slice(1);if(!hash||hash==='home'||hash==='top')return {type:'home'};if(hash==='career')return {type:'documents'};const at=hash.indexOf('=');return at<0?{type:hash}:{type:hash.slice(0,at),id:decodeURIComponent(hash.slice(at+1))};};
  const page=$('main');
  $('body').insertAdjacentHTML('afterbegin','<a class="skip-link" href="#top">본문으로 바로가기</a><div class="site-header"><a class="site-brand" href="#home">개발·학습 기록 <span>C++ · Unreal Engine</span></a><nav aria-label="주 메뉴">'+[['home','홈'],['projects','프로젝트'],['list','학습 기록'],['library','자료실'],['algorithms','알고리즘'],['documents','문서']].map(([id,label])=>`<a href="#${id}" data-menu="${id}">${label}</a>`).join('')+'</nav></div>');
  const themeLabels={editorial:'포트폴리오',cinematic:'시네마틱',terminal:'터미널',dashboard:'대시보드'};
  const themeMenu=document.createElement('details');
  themeMenu.className='pf-settings';
  themeMenu.innerHTML='<summary aria-label="사이트 디자인 설정">디자인 <span class="pf-theme-current"></span><span aria-hidden="true">▾</span></summary><div class="pf-settings-panel" role="group" aria-label="사이트 디자인 선택"><p>디자인 스타일</p>'+Object.entries(themeLabels).map(([id,name])=>'<button type="button" data-theme-option="'+id+'" aria-pressed="false">'+name+'</button>').join('')+'<small>선택한 디자인은 이 브라우저에 저장됩니다.</small></div>';
  document.querySelector('.site-header').append(themeMenu);
  const syncThemeMenu=()=>{const current=window.TIL_PORTFOLIO?.theme||'editorial';themeMenu.querySelector('.pf-theme-current').textContent=themeLabels[current]||themeLabels.editorial;themeMenu.querySelectorAll('[data-theme-option]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.themeOption===current)));};
  syncThemeMenu();
  themeMenu.addEventListener('click',e=>{const button=e.target.closest('[data-theme-option]');if(!button)return;const theme=button.dataset.themeOption;if(!window.TIL_PORTFOLIO?.setTheme(theme))return;syncThemeMenu();themeMenu.open=false;themeMenu.querySelector('summary').focus();const routeNow=route();if(routeNow.type==='home'){const target=$('#sitePages');target.innerHTML=home();}});
  document.addEventListener('click',e=>{if(themeMenu.open&&!themeMenu.contains(e.target))themeMenu.open=false;});
  themeMenu.addEventListener('keydown',e=>{if(e.key==='Escape'){themeMenu.open=false;themeMenu.querySelector('summary').focus();}});
  page.insertAdjacentHTML('afterbegin','<div id="sitePages" hidden></div><header id="listIntro" hidden></header><div id="siteFilters" hidden></div>');
  page.insertAdjacentHTML('beforeend','<details id="readingToc" hidden><summary>이 글의 목차</summary><nav aria-label="본문 목차"></nav></details>');
  const dateBox=$('.date-range'), dateParking=$('aside');
  $('.skip-link').addEventListener('click',e=>{e.preventDefault();page.setAttribute('tabindex','-1');page.focus();page.scrollIntoView();});
  $('#resetDates').addEventListener('click',()=>queueMicrotask(selectionSummary));
  const links=refs=>refs.map(r=>`<a class="source" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.label)} ↗</a>`).join('');
  const row=r=>`<a class="study-row" href="${recordURL(r.id)}"><small>${esc(r.date_label||r.date||'날짜 미확인')}</small><div><h3>${esc(r.title)}</h3><p>${esc(r.project||'개인 공부')}</p></div><span aria-hidden="true">→</span></a>`;
  function projectCover(p){
    return p.cover ? '<img class="project-cover" src="'+esc(p.cover.src)+'" alt="'+esc(p.cover.alt)+'" width="960" height="540">' : '';
  }
  function home(){return window.TIL_PORTFOLIO.home();}

  function projectList(){
    const isTeam=p=>p.activity==='team'||Boolean(p.team);
    const entries=projects.map(p=>{
      const rows=projectRecords(p),dates=rows.map(r=>r.date).filter(Boolean).sort(),ends=rows.map(r=>r.date_end||r.date).filter(Boolean).sort();
      return {p,count:rows.length,from:dates[0],to:p.period_end||ends.at(-1)};
    }).sort((a,b)=>(b.to||'').localeCompare(a.to||'')||a.p.title.localeCompare(b.p.title,'ko'));
    const team=entries.filter(x=>isTeam(x.p)&&x.p!==featured);
    const personal=entries.filter(x=>!isTeam(x.p));
    const caseFor=p=>window.TIL_SHOWCASE?.cases.find(c=>c.projectName===p.title);
    const detailLink=p=>'#project='+encodeURIComponent(p.id);
    const media=p=>p.cover?'<div class="project-index-image">'+projectCover(p)+'</div>':'';
    const row=({p,count},representative=false)=>{
      const item=caseFor(p);
      const title='<h3><a href="'+detailLink(p)+'">'+esc(p.title)+'</a></h3>';
      const info='<div class="project-index-info">'+(representative?'<p class="project-index-label">대표 프로젝트</p>':'')+title+
        '<p class="project-index-meta">'+[p.period,p.team,p.technology].filter(Boolean).map(esc).join(' · ')+'</p>'+
        (p.role_summary?'<p class="project-index-role">담당 · '+esc(p.role_summary)+'</p>':'')+
        '<p class="project-index-description">'+esc(p.summary)+'</p>'+
        '<div class="project-index-actions"><a href="'+detailLink(p)+'">프로젝트 상세 →</a>'+
        (item?'<a href="#career='+esc(item.id)+'">기술 사례 →</a>':'')+
        mediaLink(p.media)+'<span class="caption">'+count+'개 작업 기록</span></div></div>';
      return '<article class="project-index-row'+(representative?' project-index-feature':'')+(p.cover?' has-cover':'')+'">'+media(p)+info+'</article>';
    };
    const featuredEntry=entries.find(x=>x.p===featured&&isTeam(x.p));
    const teamRows=(featuredEntry?row(featuredEntry,true):'')+team.map(x=>row(x)).join('');
    const personalRows=personal.map(({p,count})=>'<li><a href="'+detailLink(p)+'"><strong>'+esc(p.title)+'</strong><span>'+esc(p.period||'날짜 미확인')+' · '+count+'개 기록</span><span aria-hidden="true">→</span></a></li>').join('');
    return '<header class="project-index-header"><h1>프로젝트</h1><p class="intro">팀 프로젝트에서 맡은 기능과 결과물, 개인 실습 기록을 함께 정리했습니다.</p></header>'+
      '<section class="project-index-team" aria-labelledby="team-projects-title"><h2 id="team-projects-title">팀 프로젝트</h2>'+teamRows+'</section>'+
      '<section class="project-index-personal" aria-labelledby="personal-projects-title"><h2 id="personal-projects-title">개인 프로젝트 · 실습</h2><ul>'+personalRows+'</ul></section>';
  }
  const section=(id,title,body)=>`<section id="${id}" class="project-section"><h2>${esc(title)}</h2>${body}</section>`;
  // Only explicitly configured public videos are shown. Local originals stay private.
  const mediaLink=media=>media?.url&&/^https:\/\/(youtu\.be\/|www\.youtube\.com\/watch\?v=)/.test(media.url)?`<a class="project-video" href="${esc(media.url)}" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">▶</span> ${esc(media.label||'플레이 영상 보기')} ↗</a>`:'';
  const relatedRecords=ids=>ids.map(id=>records.find(r=>r.id===id)).filter(Boolean).map(r=>`<a class="related-button" href="${recordURL(r.id)}">${esc(r.title)} →</a>`).join('');
  function projectWork(items = []){
    if(!items.length)return '';
    const figures=work=>window.TIL_SHOWCASE.workFigures(work.figures);
    const description=work=>`<p>${esc(work.text)}</p>${work.note?`<p class="caption">덧붙임<br>${esc(work.note)}</p>`:''}`;
    const journals=work=>`<div class="related-list">${relatedRecords(work.ids)}</div>`;
    if(!items.every(work=>work.topic)){
      return section('project-work','작업 과정',items.map((work,i)=>`<div class="work-block" id="project-work-${i}"><h3>${esc(work.title)}</h3>${description(work)}${figures(work)}${journals(work)}</div>`).join(''));
    }
    const topics=[...new Set(items.map(work=>work.topic))];
    return section('project-work','작업 과정',topics.map(topic=>{
      const group=items.filter(work=>work.topic===topic);
      const preview=window.TIL_SHOWCASE.workFigures(group.flatMap(work=>work.figures||[]));
      const rows=group.map(work=>`<details class="work-entry"><summary>${esc(work.title)}</summary><div class="work-entry-body">${description(work)}${journals(work)}</div></details>`).join('');
      return `<div class="work-topic"><div class="work-topic-intro"><h3>${esc(topic)}</h3>${preview}</div><div class="work-topic-entries">${rows}</div></div>`;
    }).join(''));
  }

  function teamProjectPage(p){
    const technicalCase=window.TIL_SHOWCASE?.cases.find(c=>c.projectName===p.title);
    const caseLink=technicalCase?'<a class="source" href="#career='+encodeURIComponent(technicalCase.id)+'">기술 사례 →</a>':'';
    const facts=[['기간',p.period],['팀',p.team],['기술',p.technology]].filter(([,v])=>v);
    const intro='<a class="source" href="#projects">← 프로젝트 목록</a><header class="project-intro team-detail-intro"><p class="team-detail-kind">팀 프로젝트'+(p.featured?' · 대표 프로젝트':'')+'</p><h1>'+esc(p.title)+'</h1><p class="intro">'+esc(p.summary)+'</p><dl class="team-detail-facts">'+facts.map(([label,value])=>'<div><dt>'+label+'</dt><dd>'+esc(value)+'</dd></div>').join('')+'</dl></header>';
    const roles=section('project-role','내가 맡은 부분','<ul class="team-detail-roles">'+p.roles.map(r=>'<li>'+esc(r)+'</li>').join('')+'</ul>');
    const media=mediaLink(p.media), refs=p.links?.length?links(p.links):'';
    const visual=p.cover?'<figure class="team-detail-cover"><img src="'+esc(p.cover.src)+'" alt="'+esc(p.cover.alt)+'" loading="lazy"><figcaption>'+esc(p.cover.alt)+'</figcaption></figure>':'';
    const result=section('project-result','결과물','<div class="team-detail-result">'+visual+'<div><p>'+esc(p.result)+'</p>'+(media||refs||caseLink?'<div class="team-detail-links">'+caseLink+media+refs+'</div>':'')+(p.result_note?'<p class="caption">'+esc(p.result_note)+'</p>':'')+(p.period_note?'<p class="caption">'+esc(p.period_note)+'</p>':'')+'</div></div>');
    const topics=[...new Set(p.work.map(w=>w.topic))];
    const work=section('project-work','작업 과정',topics.map((topic,groupIndex)=>{
      const group=p.work.filter(w=>w.topic===topic);
      return '<div class="team-work-group"><h3 class="team-work-heading" id="team-work-topic-'+groupIndex+'">'+esc(topic)+'</h3><div class="team-work-entries">'+group.map(w=>{
        const index=p.work.indexOf(w);
        const figures=window.TIL_SHOWCASE.workFigures(w.figures);
        const recordsMarkup=relatedRecords(w.ids);
        const relatedMaterials=materials.filter(m=>m.publication!=='draft'&&(m.related_ids||[]).some(id=>w.ids.includes(id))).map(m=>'<a class="related-button" href="#material='+encodeURIComponent(m.id)+'">'+esc(m.title)+' →</a>').join('');
        return '<details class="work-entry team-work-entry" id="project-work-'+index+'"><summary>'+esc(w.title)+'</summary><div class="work-entry-body"><p>'+esc(w.text)+'</p>'+figures+(w.note?'<p class="caption">덧붙임<br>'+esc(w.note)+'</p>':'')+(recordsMarkup?'<div class="team-work-records"><h4>관련 작업 기록</h4><div class="related-list">'+recordsMarkup+'</div></div>':'')+(relatedMaterials?'<div class="team-work-records"><h4>관련 자료실</h4><div class="related-list">'+relatedMaterials+'</div></div>':'')+'</div></details>';
      }).join('')+'</div></div>';
    }).join(''));
    const review=p.reflection?section('project-reflection','프로젝트 돌아보기','<p>'+esc(p.reflection.summary)+'</p><a class="source" href="#reflection='+esc(p.id)+'">돌아보기 읽기 →</a>'):'';
    const history=section('project-history','전체 작업 기록','<div id="projectFilterSlot"></div><div id="projectRows"></div>');
    return '<div class="team-detail">'+intro+'<div id="projectTocSlot"></div>'+roles+result+work+review+history+'</div>';
  }
  function projectPage(p){
    if(p.activity==='team'&&p.roles?.length&&p.work?.length)return teamProjectPage(p);
    const title=`<a class="source" href="#projects">← 프로젝트 목록</a><header class="project-intro"><div class="eyebrow">${p.archive?(p.activity==='team'?'팀 프로젝트':'개인 프로젝트·실습'):'팀 프로젝트'}</div><h1>${esc(p.title)}</h1><p class="intro">${esc(p.summary)}</p>${mediaLink(p.media)}<div class="project-facts">${[p.team,p.technology,p.role_summary&&'담당 · '+p.role_summary,p.period].filter(Boolean).map(v=>`<span>${esc(v)}</span>`).join('')}</div></header>`;
    const shortcuts=p.highlights?.length?`<nav class="project-shortcuts" aria-label="대표 작업">${p.highlights.map(h=>`<button type="button" data-scroll="project-work-${h.work}"><strong>${esc(h.label)} <span aria-hidden="true">↓</span></strong><span>${esc(h.summary)}</span></button>`).join('')}</nav>`:'';
    const parts=p.parts?.length?section('project-parts','영상과 연결된 작업 기록',`<div class="project-parts">${p.parts.map(part=>`<div class="project-part"><h3>${esc(part.title)}</h3>${mediaLink({url:part.video})}<div class="related-list">${relatedRecords(part.ids)}</div></div>`).join('')}</div>`):'';
    const history=section('project-history','전체 작업 기록','<div id="projectFilterSlot"></div><div id="projectRows"></div>');
    const work=projectWork(p.work);
    const projectLinks=p.links?.length?`<div class="material-links">${links(p.links)}</div>`:'';
    const captions=[p.result_note,p.period_note].filter(Boolean).map(note=>`<p class="caption">${esc(note)}</p>`).join('');
    const roles=p.roles?.length?section('project-role','내가 맡은 부분',`<ul>${p.roles.map(r=>`<li>${esc(r)}</li>`).join('')}</ul>`):'';
    const result=p.result?section('project-result','결과물',`<p>${esc(p.result)}</p>`+projectLinks+captions):projectLinks+captions;
    const review=p.reflection?section('project-reflection','프로젝트 돌아보기',`<p>${esc(p.reflection.summary)}</p><a class="button" href="#reflection=${p.id}">돌아보기 읽기 →</a>`):'';
    return title+roles+result+shortcuts+(work?'<div id="projectTocSlot"></div>':'')+work+review+parts+history;
  }
  function reflection(p){const r=p.reflection;return `<a class="source" href="#project=${p.id}">← ${esc(p.title)} 상세로</a><header><div class="eyebrow">프로젝트 돌아보기</div><h1>${esc(r.title)}</h1><p class="intro">${esc(r.summary)}</p></header>${r.sections.map((s,i)=>section('reflection-'+i,s.title,`<p>${esc(s.text)}</p>`)).join('')}<section class="project-section"><h2>덧붙임과 참고 자료</h2><p class="caption">${esc(r.notice)}</p><ul>${r.sources.map(s=>`<li>${esc(s)}</li>`).join('')}</ul><div class="material-links">${links(p.links||[])}${r.record?`<a class="source" href="${recordURL(r.record)}">원본 회고 일지 →</a>`:''}</div></section>`;}
  let tocOwner=null,tocHash='',tocTargets=new Map();
  function clearToc(){
    tocObserver?.disconnect();tocObserver=null;tocOwner=null;tocHash='';tocTargets.clear();
    const toc=$('#readingToc');toc.hidden=true;toc.open=false;toc.querySelector('nav').replaceChildren();
  }
  function buildToc(expectedHash=location.hash){
    if(expectedHash!==location.hash)return;
    clearToc();const toc=$('#readingToc');
    if(!document.body.classList.contains('reading'))return;
    const type=route().type;
    const selector={record:'#articlePage',material:'#libraryPage',algorithm:'#algorithmPage',project:'#sitePages',reflection:'#sitePages',career:'#sitePages'}[type];
    const content=selector&&$(selector);
    if(!content||content.hidden)return;
    const slot=type==='project'&&content.querySelector('#projectTocSlot');
    (slot||page).append(toc);
    const pageTitle=content.querySelector('h1,#detailTitle');if(pageTitle)document.title=pageTitle.textContent+' · 개발·학습 기록';
    const headings=[...content.querySelectorAll('.project-section>h2,.work-block>h3,.team-work-heading,.material-section>h2,.material-section>.vector-demo-heading>h2,.material-section>h3,.note-body>h3,.section>h3,.related>h3')];
    if(headings.length<(content.id==='libraryPage'?2:3))return;
    toc.hidden=false;toc.open=!matchMedia('(max-width:800px)').matches&&!content.querySelector('.work-topic,.team-work-group');
    const targets=headings.map((h,i)=>{if(!h.id)h.id=content.id+'-heading-'+i;return h;});
    tocOwner=content;tocHash=expectedHash;tocTargets=new Map(targets.map(h=>[h.id,h]));
    const tocButton=h=>`<button type="button" ${h.matches('.material-section>h3,.team-work-heading')?'class="toc-child" ':''}data-scroll="${h.id}">${esc(h.textContent)}</button>`;
    const material=content.id==='libraryPage'&&window.TIL_LIBRARY_INDEX.find(r=>r.title===pageTitle?.textContent);
    function sectionToc(items,expanded=true) {
      let html='';
      for(let i=0;i<items.length;i++){
        const heading=items[i];
        const section=heading.closest('.material-section');
        if(heading.tagName==='H2'&&items[i+1]?.matches('.material-section>h3')&&items[i+1].closest('.material-section')===section){
          let children='';
          while(items[i+1]?.matches('.material-section>h3')&&items[i+1].closest('.material-section')===section)children+=tocButton(items[++i]);
          html+=`<details ${expanded?'open':''}><summary>${tocButton(heading)}</summary>${children}</details>`;
        }else html+=tocButton(heading);
      }
      return html;
    }
    if(material?.toc_groups?.length){
      const groups=window.TIL_MATERIAL_VIEW.groupedSections(material);
      const sections=[...content.querySelectorAll('.material-section')].slice(0,material.outline.length);
      const sectionTargets=sections.map(section=>targets.filter(h=>section.contains(h)));
      toc.querySelector('nav').innerHTML=groups.map((g,i)=>`<details ${i===0?'open':''}><summary>${esc(g.title||'목차')}</summary>${g.sections.map(s=>sectionToc(sectionTargets[s.index]||[],false)).join('')}</details>`).join('')+targets.filter(h=>!sections.includes(h.closest('.material-section'))).map(tocButton).join('');
    }else toc.querySelector('nav').innerHTML=material?sectionToc(targets):targets.map(tocButton).join('');
    tocObserver=new IntersectionObserver(entries=>{if(tocOwner!==content||tocHash!==expectedHash||location.hash!==expectedHash)return;for(const e of entries)if(e.isIntersecting){toc.querySelectorAll('button').forEach(b=>{if(b.dataset.scroll===e.target.id){b.setAttribute('aria-current','location');let group=b.closest('nav details');while(group){group.open=true;group=group.parentElement.closest('nav details');}}else b.removeAttribute('aria-current');});}},{rootMargin:'-12% 0px -65% 0px'});
    targets.forEach(h=>tocObserver.observe(h));
  }
  $('#readingToc').addEventListener('click',e=>{const b=e.target.closest('[data-scroll]');if(b){e.preventDefault();const target=tocTargets.get(b.dataset.scroll);if(tocHash!==location.hash||!tocOwner||tocOwner.hidden||!target?.isConnected||!tocOwner.contains(target))return;target.setAttribute('tabindex','-1');target.scrollIntoView();target.focus({preventScroll:true});}});
  $('#sitePages').addEventListener('click',e=>{const b=e.target.closest('[data-scroll]');if(!b)return;const target=document.getElementById(b.dataset.scroll);if(target?.matches('details'))target.open=true;target?.setAttribute('tabindex','-1');target?.scrollIntoView();target?.focus({preventScroll:true});});
  window.TIL_SITE={articleLoading:clearToc,articleReady(){const hash=location.hash;queueMicrotask(()=>buildToc(hash));}};
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
    const chosen=[];if(from||to)chosen.push({key:'dates',label:`${from||'처음부터'} ~ ${to||'마지막까지'}`});for(const t of state.tags||[])chosen.push({key:'tag',value:t,label:currentKind==='algorithm'?window.TIL_FILTERS.algorithmTagLabel(t):t});
    for(const key of ['category','project','activity','topic','sub','dateKind','group','status'])if(state[key]&&state[key]!=='all')chosen.push({key,label:$('#filterHost [data-field="'+key+'"]')?.selectedOptions?.[0]?.textContent||state[key]});
    if(currentKind==='material' && state.publication!==views.material.defaultPublication)chosen.push({key:'publication',label:$('#filterHost [data-field="publication"]').selectedOptions[0].textContent});
    if(state.fields?.length)chosen.push({key:'fields',label:state.fields.map(t=>window.TIL_FILTERS.labels[t]||t).join(' · ')});
    $('#activeFilters').innerHTML=chosen.map(c=>`<button type="button" data-clear="${c.key}" data-value="${esc(c.value||'')}" aria-label="${esc(c.label)} 조건 해제">${esc(c.label)} ×</button>`).join('')+(chosen.length?'<button type="button" data-clear="all">조건 초기화</button>':'');
    $('#filterError').textContent=from&&to&&from>to?'시작일을 종료일보다 앞선 날짜로 골라주세요.':'';
  }
  function filters(kind,parent){
    if(dateBox.parentElement!==dateParking)dateParking.append(dateBox);
    $('#filterHost')?.remove();currentKind=kind;const s=filterState(), rows=filterRows();
    if(kind==='algorithm')s.tags=[...new Set((s.tags||[]).map(window.TIL_FILTERS.normalizeAlgorithmTag))];
    const select=(key,label,entries)=>`<label>${label}<select data-field="${key}">${entries.map(([value,text])=>`<option value="${esc(value)}" ${s[key]===value?'selected':''}>${esc(text)}</option>`).join('')}</select></label>`;
    let extra='';
    if(kind==='record')extra=select('project','프로젝트',[['all','전체 프로젝트'],...[...new Set(records.map(r=>r.project).filter(Boolean))].map(p=>[p,p])])+select('activity','활동 구분',[['all','전체 활동'],['study','기초 학습'],['personal','개인 프로젝트'],['team','팀 프로젝트']])+select('topic','학습 주제',[['all','전체 주제'],...[...Object.entries(window.TIL_FILTERS.labels),['project','프로젝트·협업']].filter(([k])=>records.some(r=>r.primary_topic===k))])+select('sub','세부 분류',[['all','전체 분류'],...Object.values(views.record.subdivisions).flat().map(([id,label])=>[id,label])])+select('dateKind','날짜 구분',[['all','전체 기록'],['project-period','기간으로 묶은 기록']]);
    if(kind==='material')extra=select('publication','글 상태',[['reference','정리 자료만'],['all','초안 포함'],['draft','초안만']]);
    if(kind==='algorithm')extra=select('status','풀이 상태',[['all','전체 상태'],...[...new Set(algorithms.map(r=>r.status))].map(v=>[v,v])]);
    const date=kind==='material'?'':`<details class="filter-option"><summary id="filterDateSummary">날짜: 전체</summary><div class="filter-popover" id="dateSlot">${kind==='record'?'':`<label>시작일<input type="date" data-field="from" value="${esc(s.from||'')}"></label><label>종료일<input type="date" data-field="to" value="${esc(s.to||'')}"></label><p class="caption">기록 날짜 기준으로 찾습니다. 날짜 미확인 기록은 기간 선택 시 제외됩니다.</p>`}</div></details>`;
    const scopedRows=rows.filter(r=>!s.category||s.category==='all'||window.TIL_FILTERS.categoriesOf(r,kind==='project'?'record':kind).includes(s.category));
    const categoryOptions=Object.entries(window.TIL_FILTERS.categories).filter(([key])=>rows.some(r=>window.TIL_FILTERS.categoriesOf(r,kind==='project'?'record':kind).includes(key)));
    const categorySelect=kind!=='material'&&categoryOptions.length>1?`<select data-field="category" aria-label="큰 주제"><option value="all">모든 주제</option>${categoryOptions.map(([key,label])=>`<option value="${key}" ${s.category===key?'selected':''}>${label}</option>`).join('')}</select>`:'';
    const tagSet=[...new Set([...(s.tags||[]),...scopedRows.flatMap(r=>window.TIL_FILTERS.tags(r,kind==='project'?'record':kind))])].sort((a,b)=>a.localeCompare(b,'ko'));
    const tagLabel=t=>kind==='algorithm'?window.TIL_FILTERS.algorithmTagLabel(t):t;
    const tagOption=t=>`<label data-tag-label="${esc(tagLabel(t))}"><input type="checkbox" data-tag="${esc(t)}" ${s.tags?.includes(t)?'checked':''}> ${esc(tagLabel(t))}</label>`;
    const tagMarkup=kind==='algorithm'?window.TIL_FILTERS.algorithmTagGroups(tagSet).map(g=>{
      const options=`<div class="tag-options">${g.tags.map(tagOption).join('')}</div>`;
      return g.expanded?`<section class="algorithm-tag-group"><h3>${g.title}</h3>${options}</section>`:`<details class="algorithm-tag-group" ${g.tags.some(t=>s.tags?.includes(t))?'open':''}><summary>${g.title} <span>${g.tags.length}</span></summary>${options}</details>`;
    }).join(''):`<div class="tag-options">${tagSet.map(tagOption).join('')}</div>`;
    parent.insertAdjacentHTML('beforeend',`<div id="filterHost"><div class="filter-bar"><label class="sr-only" for="siteQuery">${kind==='material'?'자료 본문·함수·개념 검색':'제목·주제 검색'}</label><input id="siteQuery" type="search" placeholder="${kind==='project'?'프로젝트 안에서 검색':kind==='material'?'본문·함수·개념 검색':'제목·주제 검색'}" value="${esc(s.query||'')}">${categorySelect}${date}<details class="filter-option"><summary id="filterTagSummary">태그: 전체</summary><div class="filter-popover ${kind==='algorithm'?'algorithm-tag-popover':''}"><label class="sr-only" for="tagQuery">태그 찾기</label><input id="tagQuery" type="search" placeholder="태그 찾기"><p class="caption">복수 선택 · 선택한 태그를 모두 포함</p>${tagMarkup}</div></details><select aria-label="정렬" data-field="sort">${kind==='material'?`<option value="topic" ${s.sort==='topic'?'selected':''}>제목순 · 검색 관련도순</option><option value="relevance" ${s.sort==='relevance'?'selected':''}>검색 관련도순</option>`:''}<option value="desc" ${(s.sort||'desc')==='desc'?'selected':''}>${kind==='material'?'제목 역순':'최신순'}</option><option value="asc" ${s.sort==='asc'?'selected':''}>${kind==='material'?'제목순':'과거순'}</option></select>${extra?`<details class="filter-option"><summary>추가 조건</summary><div class="filter-popover">${extra}</div></details>`:''}</div><div id="activeFilters" class="active-filters"></div><p id="filterError" role="status"></p><p id="siteResultCount" class="count" role="status"></p></div>`);
    if(kind==='record')$('#dateSlot').append(dateBox);
    const host=$('#filterHost');host.addEventListener('input',e=>{if(e.target.id==='siteQuery')apply({query:e.target.value});if(e.target.id==='tagQuery'){
      const q=e.target.value.trim().toLocaleLowerCase();
      host.querySelectorAll('[data-tag-label]').forEach(label=>label.hidden=!label.dataset.tagLabel.toLocaleLowerCase().includes(q));
      host.querySelectorAll('.algorithm-tag-group').forEach(group=>{group.hidden=![...group.querySelectorAll('[data-tag-label]')].some(label=>!label.hidden);if(group.tagName==='DETAILS')group.open=Boolean(q)||Boolean(group.querySelector('[data-tag]:checked'));});
    }});
    host.addEventListener('change',e=>{if(e.target.matches('[data-tag]'))apply({tags:[...host.querySelectorAll('[data-tag]:checked')].map(el=>el.dataset.tag)});if(e.target.dataset.field){const patch={[e.target.dataset.field]:e.target.value};if(e.target.dataset.field==='topic')patch.sub='all';if(e.target.dataset.field==='sub'&&e.target.value!=='all')patch.topic=Object.entries(views.record.subdivisions).find(([,groups])=>groups.some(g=>g[0]===e.target.value))?.[0]||'all';apply(patch);for(const [key,value] of Object.entries(patch)){const el=host.querySelector(`[data-field="${key}"]`);if(el)el.value=value;}if(e.target.dataset.field==='publication'){const menu=e.target.closest('details');menu.open=false;menu.querySelector('summary').focus();}if(e.target.dataset.field==='category'){filters(kind,host.parentElement);return;}}selectionSummary();});
    host.addEventListener('click',e=>{const b=e.target.closest('[data-clear]');if(!b)return;const key=b.dataset.clear;const patch=key==='dates'?{from:'',to:''}:key==='tag'?{tags:s.tags.filter(t=>t!==b.dataset.value)}:key==='fields'?{fields:[]}:key==='all'?{from:'',to:'',tags:[],project:'all',activity:'all',topic:'all',sub:'all',dateKind:'all',publication:views.material.defaultPublication,group:'all',status:'all',category:'all',fields:[]}:key==='publication'?{publication:views.material.defaultPublication}:{[key]:'all'};apply(patch);const container=host.parentElement;filters(kind,container);});
    host.querySelectorAll('.filter-option').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)host.querySelectorAll('.filter-option').forEach(other=>{if(other!==d)other.open=false;});}));
    host.addEventListener('keydown',e=>{if(e.key==='Escape'){const d=e.target.closest('details');if(d){d.open=false;d.querySelector('summary').focus();}}});
    selectionSummary();
  }
  function searchPage(query){const q=query.trim().toLocaleLowerCase();let output=`<header><h1>전체 검색</h1><p class="intro">“${esc(query)}” 검색 결과</p></header><form id="globalSearch"><label class="sr-only" for="globalQuery">전체 자료 검색</label><input id="globalQuery" type="search" required value="${esc(query)}"><button class="button">검색</button></form>`;
    for(const [title,items,kind,url] of [['프로젝트',projects,'project',r=>'#project='+r.id],['학습 기록',records,'record',r=>recordURL(r.id)],['알고리즘',algorithms,'algorithm',r=>'#algorithm='+r.id],['자료실',materials,'material',r=>'#material='+r.id]]){const found=items.filter(r=>kind==='material'?(views.material.matchesPublication(r)&&views.material.matchesQuery(r,q)):[r.title,r.summary,r.project,...window.TIL_FILTERS.tags(r,kind)].join(' ').toLocaleLowerCase().includes(q));output+=section('search-'+kind,`${title} · ${found.length}개`,found.map(r=>`<a class="search-result" href="${url(r)}">${esc(r.title)} →</a>`).join('')||'<p class="caption">검색 결과가 없습니다.</p>');}const docs=window.TIL_CAREER.matchingDocuments(q);output+=section('search-documents',`문서 · ${docs.length}개`,docs.map(d=>`<a class="search-result" href="#career=${encodeURIComponent(d.id)}">${esc(d.title)} →</a>`).join('')||'<p class="caption">검색 결과가 없습니다.</p>');return output;}
  $('#sitePages').addEventListener('submit',e=>{if(e.target.id==='globalSearch'){e.preventDefault();const q=$('#globalQuery').value.trim();if(q)location.hash='search='+encodeURIComponent(q);}});
  function navigate(){
    let r;try{r=route();}catch{r={type:'home'};}
    const alias=projects.find(p=>p.aliases?.includes(r.id));if(r.type==='project'&&alias){r.id=alias.id;history.replaceState(null,'','#project='+alias.id);}
    clearToc();page.append($('#readingToc'));
    if(dateBox.parentElement!==dateParking)dateParking.append(dateBox);
    $('#siteFilters').innerHTML='';$('#siteFilters').hidden=true;$('#sitePages').hidden=true;$('#sitePages').replaceChildren();$('#listIntro').hidden=true;currentKind='';
    document.body.dataset.portfolioTheme=window.TIL_PORTFOLIO?.theme||'editorial';
    const custom=['home','projects','project','reflection','search','career','documents'].includes(r.type);
    const reading=['record','material','algorithm','project','reflection'].includes(r.type)||(r.type==='career'&&Boolean(r.id));
    document.body.classList.toggle('reading',reading);document.body.classList.toggle('listing',!reading&&!custom);
    const menu=r.type==='documents'?'documents':r.type==='career'?(window.TIL_SHOWCASE?.has(r.id)?'projects':'documents'):r.type==='home'||r.type==='search'?'home':['project','projects','reflection'].includes(r.type)?'projects':['library','material'].includes(r.type)?'library':['algorithms','algorithm'].includes(r.type)?'algorithms':'list';
    document.querySelectorAll('[data-menu]').forEach(a=>{if(a.dataset.menu===menu)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    if(custom){for(const id of ['listPage','articlePage','libraryPage','algorithmPage'])$('#'+id).hidden=true;const target=$('#sitePages');target.hidden=false;
      if(r.type==='home')target.innerHTML=home();else if(r.type==='projects')target.innerHTML=projectList();else if(r.type==='search')target.innerHTML=searchPage(r.id||'');else if(r.type==='career'||r.type==='documents'){target.innerHTML=window.TIL_CAREER.render(r.type==='career'?r.id||'':'');window.TIL_CAREER.attach(target);}else{const p=projects.find(p=>p.id===r.id);if(!p||(r.type==='reflection'&&!p.reflection))target.innerHTML='<h1>글을 찾을 수 없습니다</h1><a href="#projects">프로젝트 목록으로</a>';else{target.innerHTML=r.type==='reflection'?reflection(p):projectPage(p);if(r.type==='project'){if(lastProject!==p.id)projectFilter={query:'',tags:[],from:'',to:'',sort:'asc'};lastProject=p.id;filters('project',$('#projectFilterSlot'));apply({});}}}
    }else if(!reading){const kind=menu==='library'?'material':menu==='algorithms'?'algorithm':'record';$('#listIntro').hidden=false;$('#listIntro').innerHTML=`<h1>${kind==='record'?'학습 기록':kind==='material'?'자료실':'알고리즘'}</h1><p class="intro">${kind==='record'?'프로젝트 작업과 공부한 과정을 날짜별로 모았습니다.':kind==='material'?'분야를 선택하거나 함수·개념 이름으로 검색하세요.':'풀이 과정과 제출 결과를 남긴 기록입니다. 미완성 문제도 함께 표시합니다.'}</p>`;$('#siteFilters').hidden=false;filters(kind,$('#siteFilters'));}
    // Asynchronous readers build the outline when the current article is ready.
    if(reading&&custom)buildToc();
    const recordMeta=r.type==='record'?records.find(x=>x.id===r.id):null;const p=recordMeta&&projects.find(p=>projectNames(p).includes(recordMeta.project));if(p&&!$('#articlePage .project-return'))$('#backToList').insertAdjacentHTML('afterend',`<a class="source project-return" href="#project=${p.id}">${esc(p.title)}로 →</a>`);else if(!p)$('#articlePage .project-return')?.remove();else if(p){const a=$('#articlePage .project-return');a.href='#project='+p.id;a.textContent=p.title+'로 →';}
    document.title=(r.type==='project'||r.type==='reflection'?(r.type==='reflection'?projects.find(p=>p.id===r.id)?.reflection?.title:projects.find(p=>p.id===r.id)?.title)||'프로젝트':{home:'홈',projects:'프로젝트',list:'학습 기록',library:'자료실',algorithms:'알고리즘',career:window.TIL_CAREER_DOCUMENTS?.find(d=>d.id===r.id)?.title||window.TIL_SHOWCASE?.cases.find(c=>c.id===r.id)?.title||'문서',documents:'문서',search:'전체 검색'}[r.type]||'학습 기록')+' · 개발·학습 기록';
    window.scrollTo({top:0,behavior:'instant'});
  }
  document.addEventListener('click',e=>{document.querySelectorAll('.filter-option[open]').forEach(d=>{if(!d.contains(e.target))d.open=false;});});
  window.addEventListener('hashchange',navigate);navigate();
})();
