(() => {
  'use strict';
  const validDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value || '') && !Number.isNaN(Date.parse(value+'T00:00:00Z')) && new Date(value+'T00:00:00Z').toISOString().slice(0,10) === value;
  function collect(records, algorithms, today) {
    const days=new Map(), seen=new Set(); let excluded=0;
    for(const [kind,rows] of [['record',records],['algorithm',algorithms]])for(const r of rows){
      const key=kind+':'+r.id;if(seen.has(key))continue;seen.add(key);
      if(!validDate(r.date) || r.date>today || (r.date_end && r.date_end!==r.date) || r.month==='project-period'){excluded++;continue;}
      if(!days.has(r.date))days.set(r.date,[]);
      days.get(r.date).push({id:r.id,title:r.title,date:r.date,kind,status:r.status});
    }
    return {days,excluded};
  }
  function calendar(year) {
    const start=new Date(Date.UTC(year,0,1)),end=new Date(Date.UTC(year+1,0,1)),cells=[];
    for(let i=0;i<start.getUTCDay();i++)cells.push(null);
    for(let d=start;d<end;d=new Date(d.getTime()+86400000))cells.push(d.toISOString().slice(0,10));
    while(cells.length%7)cells.push(null);
    return cells;
  }
  window.TIL_ACTIVITY={collect,calendar};
  if(typeof document==='undefined')return;
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const today=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Seoul'}).format(new Date());
  const currentYear=Number(today.slice(0,4));
  const {days,excluded}=collect(window.TIL_INDEX.records,window.TIL_ALGORITHMS,today);
  const years=[...new Set([currentYear,...[...days.keys()].map(d=>Number(d.slice(0,4)))])].sort((a,b)=>b-a);
  let year=currentYear,selected='',expanded=false;
  const host=document.createElement('section');host.id='learningActivity';host.className='learning-activity';host.hidden=true;
  document.getElementById('listIntro').insertAdjacentElement('afterend',host);
  function selection(){
    host.querySelectorAll('[data-day]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.day===selected)));
    const panel=host.querySelector('.activity-day');panel.hidden=!selected;
    if(!selected){panel.innerHTML='';return;}
    const entries=days.get(selected)||[];
    panel.innerHTML=`<div class="activity-day-head"><h3>${esc(selected)}</h3><button type="button" class="related-button" data-clear-day>선택 해제</button></div>${entries.length?entries.map(r=>`<a class="activity-entry" href="#${r.kind}=${encodeURIComponent(r.id)}"><span class="topic-badge">${r.kind==='record'?'학습 기록':'알고리즘'}</span><strong>${esc(r.title)}</strong>${r.kind==='algorithm'?`<small>${esc(r.status)}</small>`:''}<span aria-hidden="true">→</span></a>`).join(''):'<p class="caption">이 날짜에 등록된 학습·알고리즘 기록이 없습니다.</p>'}`;
  }
  function render(){
    const cells=calendar(year),weeks=cells.length/7;
    const active=[...days.entries()].filter(([date])=>date.startsWith(year+'-'));
    const entries=active.flatMap(([,r])=>r),recordCount=entries.filter(r=>r.kind==='record').length;
    const focusDay=selected||(year===currentYear?today:active.map(([d])=>d).sort().at(-1)||`${year}-01-01`);
    const months=Array.from({length:12},(_,i)=>{const date=`${year}-${String(i+1).padStart(2,'0')}-01`;return `<span style="grid-column:${Math.floor(cells.indexOf(date)/7)+1}">${i+1}월</span>`;}).join('');
    host.innerHTML=`<div class="activity-summary"><p class="activity-stats">${year}년 · <strong>${active.length}일의 기록</strong></p><button type="button" class="related-button" data-toggle-activity aria-expanded="${expanded}" aria-controls="activityContent">${expanded?'달력 접기':'달력 펼치기'}</button></div><div id="activityContent" ${expanded?'':'hidden'}><div class="activity-head"><div><p class="caption">학습 ${recordCount}개 · 알고리즘 ${entries.length-recordCount}개</p><p class="caption">학습 기록과 알고리즘을 함께 모았어요. 날짜를 누르면 그날의 기록을 볼 수 있어요.</p></div><label>연도 <select aria-label="학습 달력 연도">${years.map(y=>`<option ${year===y?'selected':''}>${y}</option>`).join('')}</select></label></div><div class="activity-scroll" role="group" aria-label="${year}년 학습 달력"><div class="activity-calendar" style="--weeks:${weeks}"><div class="activity-months">${months}</div><div class="activity-weekdays" aria-hidden="true"><span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span></div><div class="activity-grid">${cells.map(date=>{if(!date)return '<span class="activity-blank"></span>';const count=days.get(date)?.length||0,level=Math.min(count,4),future=date>today;return `<button type="button" class="activity-cell level-${level}" data-day="${date}" ${future?'disabled':''} tabindex="${date===focusDay?0:-1}" aria-label="${date}, ${future?'미래 날짜':count+'개 기록'}" aria-pressed="${date===selected}" title="${date} · ${count}개 기록"></button>`;}).join('')}</div></div></div><div class="activity-key"><span>기록 없음</span>${[0,1,2,3,4].map(n=>`<span class="activity-cell level-${n}" aria-label="${n===4?'4개 이상':n+'개'}"></span>`).join('')}<span>4개 이상</span></div><p class="caption">기록 수 기준이며 풀이 성공 횟수가 아닙니다. 기간·날짜 미확인 기록은 달력에서 제외합니다.${excluded?' ('+excluded+'개)':''} 빈칸은 공부하지 않았다는 뜻이 아닙니다.</p><div class="activity-day" aria-live="polite" hidden></div></div>`;
    selection();
    const cell=host.querySelector(`[data-day="${focusDay}"]`),scroll=host.querySelector('.activity-scroll');
    if(cell)scroll.scrollLeft=Math.max(0,cell.offsetLeft-scroll.clientWidth/2);
  }
  host.addEventListener('change',e=>{if(e.target.matches('select')){year=Number(e.target.value);selected='';render();}});
  host.addEventListener('click',e=>{
    if(e.target.closest('[data-toggle-activity]')){expanded=!expanded;render();host.querySelector('[data-toggle-activity]').focus();return;}
    const b=e.target.closest('[data-day]');if(b){selected=b.dataset.day;host.querySelectorAll('[data-day]').forEach(x=>x.tabIndex=x===b?0:-1);selection();}
    if(e.target.closest('[data-clear-day]')){selected='';selection();host.querySelector('[data-day][tabindex="0"]')?.focus();}
  });
  host.addEventListener('keydown',e=>{
    const b=e.target.closest('[data-day]');if(!b)return;
    const delta={ArrowLeft:-7,ArrowRight:7,ArrowUp:-1,ArrowDown:1}[e.key];
    if(delta===undefined)return;e.preventDefault();const date=new Date(b.dataset.day+'T00:00:00Z');date.setUTCDate(date.getUTCDate()+delta);
    const next=host.querySelector(`[data-day="${date.toISOString().slice(0,10)}"]`);if(next&&!next.disabled){b.tabIndex=-1;next.tabIndex=0;next.focus();}
  });
  function route(){host.hidden=location.hash!=='#list';if(!host.hidden)render();}
  window.addEventListener('hashchange',route);route();
})();
