/* Inline learning examples. Original references remain in data/guides/. */
(() => {
  let cleanups=[];
  const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
  function mountOne(section,definition,id){
    const heading=section.querySelector('h2'),header=el('div','vector-demo-heading'),toggle=el('button','vector-demo-toggle','동작 보기');
    const panel=el('div','vector-demo learning-demo');panel.id='learning-demo-'+id;panel.hidden=true;toggle.type='button';toggle.setAttribute('aria-controls',panel.id);toggle.setAttribute('aria-expanded','false');
    heading.before(header);header.append(heading,toggle);header.after(panel);
    panel.innerHTML='<div class="vector-demo-body"><div class="binary-demo-toolbar"><div class="vector-demo-operations" role="group" aria-label="동작 선택"></div></div><div class="binary-demo-layout"><div><div class="learning-demo-picture"></div><p class="vector-demo-step" role="status" aria-live="polite"></p><div class="vector-demo-controls"><button type="button" data-step="prev">이전</button><button type="button" data-step="next">다음</button><button type="button" data-step="play">재생</button><button type="button" data-step="reset">처음으로</button><span class="vector-demo-count"></span></div></div><div><p class="binary-demo-code-label">C++ 참고 예제 · 강조한 줄의 동작</p><pre class="binary-demo-code"><code></code></pre><div class="learning-demo-state-rows"></div></div></div><div class="vector-demo-cost" role="note"><strong></strong><p></p></div><p class="vector-demo-note"></p></div>';
    let own=false,op=0,frames=[],index=0,timer=null,current;
    const button=k=>panel.querySelector('[data-step="'+k+'"]'),stop=()=>{clearInterval(timer);timer=null;button('play').textContent='재생';};
    const code=panel.querySelector('code'),picture=panel.querySelector('.learning-demo-picture');
    if(definition.own){const sw=el('button','binary-demo-switch');sw.type='button';sw.setAttribute('role','switch');sw.setAttribute('aria-label','내 풀이 방식');sw.setAttribute('aria-checked','false');sw.title='켜면 내 풀이 방식, 끄면 기본 방식';const track=el('span','binary-demo-switch-track');track.setAttribute('aria-hidden','true');sw.append(track,el('span',null,'내 풀이'));panel.querySelector('.binary-demo-toolbar').append(sw);sw.addEventListener('click',()=>{own=!own;sw.setAttribute('aria-checked',String(own));op=0;setup();});}
    function render(){
      const f=frames[index];picture.replaceChildren();const stateRows=panel.querySelector('.learning-demo-state-rows');stateRows.replaceChildren();
      if(f.nodes){
        const ns='http://www.w3.org/2000/svg',make=(tag,attrs,text)=>{const e=document.createElementNS(ns,tag);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,v);if(text!==undefined)e.textContent=text;return e;};
        const svg=make('svg',{viewBox:f.viewBox||'0 0 360 180',role:'img','aria-label':f.diagramLabel||'노드와 연결 관계'});
        if(f.traversal||f.treeWalk){svg.classList.add('learning-demo-traversal');const legend=el('div','learning-demo-legend');for(const [cls,label] of [['is-current','▶ 현재'],['is-pending','○ 대기'],['is-finished','✓ 처리 끝']])legend.append(el('span',cls,label));picture.append(legend);
          const defs=make('defs',{}),marker=make('marker',{id:panel.id+'-arrow',markerWidth:7,markerHeight:7,refX:6,refY:3.5,orient:'auto'});marker.append(make('path',{d:'M0,0 L7,3.5 L0,7 Z',fill:'context-stroke'}));defs.append(marker);svg.append(defs);
          if(f.levels)for(let depth=0;depth<4;depth++){const y=28+depth*66;svg.append(make('line',{x1:28,y1:y,x2:410,y2:y,class:'learning-demo-level'}),make('text',{x:14,y:y+4,class:'learning-demo-depth'},String(depth)));}
        }
        const nodeMap=new Map(f.nodes.map(n=>[n.id,n]));
        for(const [a,b] of f.edges||[]){const x=nodeMap.get(a),y=nodeMap.get(b);if(!x||!y)continue;svg.append(make('line',{x1:x.x,y1:x.y,x2:y.x,y2:y.y}));}
        if(f.edge){const a=nodeMap.get(f.edge[0]),b=nodeMap.get(f.edge[1]),dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy);svg.append(make('line',{x1:a.x+dx/len*20,y1:a.y+dy/len*20,x2:b.x-dx/len*23,y2:b.y-dy/len*23,class:f.back?'learning-demo-return':'learning-demo-edge','marker-end':'url(#'+panel.id+'-arrow)'}));}
        for(const n of f.nodes){
          const active=(f.active||[]).includes(n.id),pending=(f.pending||[]).includes(n.id),finished=(f.finished||[]).includes(n.id);
          const g=make('g',{class:active?'is-current':finished?'is-finished':pending?'is-pending':''});g.append(make('circle',{cx:n.x,cy:n.y,r:f.traversal||f.treeWalk?20:17}),make('text',{x:n.x,y:n.y+(f.traversal||f.treeWalk?-1:5)},String(n.value)));
          if(f.traversal||f.treeWalk){const d=f.treeWalk?(f.order.indexOf(n.id)+1||undefined):f.depths[n.id];g.append(make('text',{x:n.x,y:n.y+13,class:'learning-demo-node-detail'},f.treeWalk?(d===undefined?'미출력':'출력 '+d):(d===undefined?'미방문':'d='+d)));if(active||finished)g.append(make('text',{x:n.x+23,y:n.y-12,class:'learning-demo-node-mark'},active?'▶':'✓'));}
          svg.append(g);
        }picture.append(svg);
        if(f.traversal||f.treeWalk)picture.append(el('p','learning-demo-diagram-note',f.back?'점선 화살표: 재귀 호출이 끝나 부모로 복귀':f.edge?'화살표: 지금 확인 중인 연결':f.treeWalk?'노드 아래 숫자: 값을 출력한 순서':'d: 시작점에서 발견한 경로의 깊이'));
      }
      for(const row of f.rows||[]){const wrap=el('div','learning-demo-row'+(row.grid?' learning-demo-board-row':''));wrap.append(el('div','learning-demo-row-label',row.label));const cells=el('div','learning-demo-values'+(row.linked?' is-linked':''));(row.values.length?row.values:['비어 있음']).forEach((v,i)=>{const cell=el('span','learning-demo-value'+((row.active||[]).includes(i)?' is-active':''),String(v));cells.append(cell);if(row.linked&&i<row.values.length-1)cells.append(el('span','learning-demo-arrow',row.linked===2?'⇄':'→'));});if(!row.values.length)cells.firstChild.textContent='비어 있음';wrap.append(cells);(f.traversal||f.treeWalk?stateRows:picture).append(wrap);}
      panel.querySelector('.vector-demo-step').textContent=f.message;
      [...code.children].forEach((e,i)=>{e.classList.toggle('is-current',i===f.line);if(i===f.line)e.setAttribute('aria-current','step');else e.removeAttribute('aria-current');});
      const line=code.children[f.line],pre=code.parentElement;if(line){const y=line.offsetTop-code.offsetTop;if(y<pre.scrollTop||y+line.offsetHeight>pre.scrollTop+pre.clientHeight)pre.scrollTop=Math.max(0,y-pre.clientHeight/2);}
      panel.querySelector('.vector-demo-count').textContent=`${index+1} / ${frames.length}`;button('prev').disabled=index===0;button('next').disabled=index===frames.length-1;if(index===frames.length-1)stop();
    }
    function setup(){stop();index=0;const d=own?definition.own:definition;current=d.operations[op];frames=current.frames();const bar=panel.querySelector('.vector-demo-operations');bar.replaceChildren();d.operations.forEach((o,i)=>{const b=el('button',null,o.label);b.type='button';b.setAttribute('aria-pressed',String(i===op));b.addEventListener('click',()=>{op=i;setup();});bar.append(b);});code.replaceChildren();current.code.split('\n').forEach((text,i)=>{const line=el('span','binary-demo-line'),num=el('span','binary-demo-line-number',String(i+1).padStart(2,' '));num.setAttribute('aria-hidden','true');line.append(num,document.createTextNode(text));code.append(line);});panel.querySelector('.binary-demo-code-label').textContent=own?'내 풀이의 핵심 로직 · 강조한 줄의 동작':'C++ 참고 예제 · 강조한 줄의 동작';panel.querySelector('.vector-demo-cost strong').textContent=current.cost;panel.querySelector('.vector-demo-cost p').textContent=current.reason;const note=panel.querySelector('.vector-demo-note');note.textContent=current.note||d.note||'동작 이해를 위한 고정 입력 예제다. 실제 제출 코드는 변경하지 않는다.';if(d.link){const a=el('a',null,' 원본 풀이와 시행착오 →');a.href=d.link;note.append(a);}render();}
    panel.addEventListener('click',e=>{const action=e.target.closest('[data-step]')?.dataset.step;if(!action)return;if(action==='play'){if(timer){stop();return;}if(index===frames.length-1)index=0;render();button('play').textContent='일시정지';timer=setInterval(()=>{if(panel.hidden||!panel.isConnected){stop();return;}index++;render();},900);}else{stop();index=action==='reset'?0:Math.max(0,Math.min(frames.length-1,index+(action==='next'?1:-1)));render();}});
    toggle.addEventListener('click',()=>{panel.hidden=!panel.hidden;toggle.setAttribute('aria-expanded',String(!panel.hidden));toggle.textContent=panel.hidden?'동작 보기':'접기';if(panel.hidden)stop();});setup();return stop;
  }
  const stopAll=()=>cleanups.forEach(fn=>fn());window.addEventListener('hashchange',stopAll);
  window.TIL_LEARNING_DEMOS={mount(record){stopAll();cleanups=[];for(const [i,s] of record.sections.entries()){const d=window.TIL_DEMO_CATALOG?.[record.id]?.[s.title];if(d)cleanups.push(mountOne(document.getElementById('material-section-'+i),d,record.id+'-'+i));}}};
})();
