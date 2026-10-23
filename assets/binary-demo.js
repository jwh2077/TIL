(() => {
  const values = [3, 8, 12, 19, 23, 27, 35];
  const source = ['int low = 0, high = nums.size();','while (low < high) {','    int mid = low + (high - low) / 2;','    if (nums[mid] < target) {','        low = mid + 1;','    } else {','        high = mid;','    }','}','return low; // target 이상인 첫 위치'];
  let dispose = () => {};
  // 제출 원본은 문제 기록에 보존하고, 여기서는 같은 분기와 반환을 펼쳐 보여준다.
  const ownSource = ['int u = nums.size() - 1;', 'int d = 0;', 'if(nums[u] < target)', '    return nums.size();', 'if(nums[0] > target)', '    return 0;', 'while(true) {', '    if(nums[u] == target || nums[d] == target || u == d + 1) {', '        if(nums[d] == target)', '            return d;', '        return u;', '    }', '    if(nums[(u + d) / 2] > target)', '        u = (u + d) / 2;', '    else', '        d = (u + d) / 2;', '}'];
  function ownTrace(target) {
    let low=0,high=values.length-1,mid=null,comparisons=0;
    const steps=[],sizes=[values.length];
    const add=(line,message,answer=null)=>steps.push({low,high,mid,comparisons,line,message,answer,done:answer!==null,sizes:[...sizes]});
    add(1,'d는 첫 인덱스, u는 마지막 인덱스다. 두 경계를 모두 포함한다.');
    comparisons++;add(2,`${values[high]} < ${target} → ${values[high]<target?'참':'거짓'}`);
    if(values[high]<target){add(3,'최댓값보다 크므로 배열 끝 7을 반환한다.',7);return steps;}
    comparisons++;add(4,`${values[0]} > ${target} → ${values[0]>target?'참':'거짓'}`);
    if(values[0]>target){add(5,'최솟값보다 작으므로 0을 반환한다.',0);return steps;}
    while(true){
      mid=null;
      const upper=values[high]===target;comparisons++;
      const lower=!upper&&values[low]===target;if(!upper)comparisons++;
      const end=upper||lower||high===low+1;
      add(7,end?'경계에서 목표값을 찾았거나 두 경계가 붙었다. 반환 위치를 고른다.':'경계의 값이 목표와 다르고, 아직 두 경계가 떨어져 있다.');
      if(end){comparisons++;add(8,`nums[d] == target → ${values[low]===target?'참':'거짓'}`);const answer=values[low]===target?low:high;add(answer===low?9:10,`반환 ${answer}: ${values[answer]===target?'목표값을 찾았다.':'목표값은 없고, 이 위치 앞에 삽입한다.'}`,answer);return steps;}
      mid=Math.floor((low+high)/2);comparisons++;add(12,`(u + d) / 2 = ${mid}. ${values[mid]} > ${target} → ${values[mid]>target?'참':'거짓'}`);
      if(values[mid]>target){high=mid;sizes.push(high-low+1);add(13,'u를 중간 인덱스로 옮긴다. 중간 위치를 경계에 남긴다.');}
      else{low=mid;sizes.push(high-low+1);add(15,'d를 중간 인덱스로 옮긴다. 다음 반복에서 종료 조건을 다시 확인한다.');}
    }
  }
  function trace(target) {
    let low=0, high=values.length, mid=null, comparisons=0;
    const steps=[], sizes=[high];
    const add=(line,message,done=false)=>steps.push({low,high,mid,comparisons,line,message,done,sizes:[...sizes]});
    add(0,'정렬된 배열에서 [low, high) 범위를 잡는다. high는 범위에 포함하지 않는다.');
    while(low<high) {
      mid=null; add(1,`low ${low} < high ${high}: 아직 확인할 범위가 남아 있다.`);
      mid=low+Math.floor((high-low)/2); add(2,`중간 인덱스 mid = ${mid}, 값은 ${values[mid]}이다.`);
      comparisons++; add(3,`${values[mid]} < ${target} → ${values[mid]<target?'참':'거짓'}`);
      if(values[mid]<target) {low=mid+1;sizes.push(high-low);add(4,'중간값까지는 목표보다 작다. low를 mid + 1로 옮긴다.');}
      else {high=mid;sizes.push(high-low);add(6,'중간값이 목표 이상이다. 이 위치도 답 후보이므로 high를 mid로 옮긴다.');}
    }
    mid=null;add(1,`low == high == ${low}: 반복을 끝낸다.`);
    add(9,low===values.length?`반환 ${low}: 모든 값이 목표보다 작아 배열 끝이 삽입 위치다.`:values[low]===target?`반환 ${low}: 목표값 ${target}을 찾았다.`:`반환 ${low}: 목표값은 없고, ${values[low]} 앞이 삽입 위치다.`,true);
    return steps;
  }
  window.TIL_BINARY_DEMO={mount(section){
    dispose();if(!section)return;
    const heading=section.querySelector('h2'),header=document.createElement('div'),toggle=document.createElement('button'),panel=document.createElement('div');
    header.className='vector-demo-heading';toggle.className='vector-demo-toggle';toggle.type='button';toggle.textContent='동작 보기';toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-controls','binary-demo-panel');
    panel.id='binary-demo-panel';panel.className='vector-demo binary-demo';panel.hidden=true;
    panel.innerHTML=`<div class="vector-demo-body"><div class="binary-demo-toolbar"><button type="button" class="binary-demo-switch" role="switch" aria-checked="false" aria-label="내 풀이 방식" title="켜면 내 풀이 방식, 끄면 기본 방식"><span class="binary-demo-switch-track" aria-hidden="true"></span><span>내 풀이</span></button><div class="vector-demo-operations" role="group" aria-label="이진 탐색 목표값"><button type="button" data-target="19" aria-pressed="true">19 찾기</button><button type="button" data-target="20" aria-pressed="false">20 삽입 위치</button><button type="button" data-target="40" aria-pressed="false">40 배열 끝</button></div></div><div class="binary-demo-layout"><div><p class="binary-demo-state"></p><div class="binary-demo-cells" aria-label="탐색 범위와 포인터"></div><p class="vector-demo-step" role="status" aria-live="polite"></p><div class="vector-demo-controls"><button type="button" data-step="prev">이전</button><button type="button" data-step="next">다음</button><button type="button" data-step="play">재생</button><button type="button" data-step="reset">처음으로</button><span class="vector-demo-count"></span></div></div><div><p class="binary-demo-code-label">C++ 참고 예제 · 강조된 줄을 실행한 뒤의 상태</p><pre class="binary-demo-code" aria-label="실행 위치를 표시한 C++ 예제"><code></code></pre></div></div><div class="vector-demo-cost" role="note" aria-label="이진 탐색 비용과 이유"><strong>시간 O(log n) · 추가 공간 O(1)</strong><p class="binary-demo-cost-detail"></p><small>정렬된 입력 기준이다. 현재 범위의 절반가량을 매번 제외하므로 n → n/2 → n/4로 줄어든다. 포인터 몇 개만 사용하며, 이 화면의 재생 기록은 알고리즘의 추가 공간에 포함하지 않는다.</small></div><p class="vector-demo-note">밝은 칸은 남은 범위, 흐린 칸은 제외한 범위다. high는 제외 경계이며 n은 배열 끝이다. mid는 마지막으로 비교한 위치를 가리킨다. 실제 제출 코드와 구분한 lower_bound 참고 예제다.</p></div>`;
    heading.before(header);header.append(heading,toggle);header.after(panel);
    let mode='basic',target=19,steps=trace(target),index=0,timer=null;
    const button=id=>panel.querySelector(`[data-step="${id}"]`);
    const stop=()=>{clearInterval(timer);timer=null;button('play').textContent='재생';};
    const code=panel.querySelector('code');
    const renderCode=()=>{code.replaceChildren();(mode==='own'?ownSource:source).forEach((text,i)=>{const line=document.createElement('span');line.className='binary-demo-line';const num=document.createElement('span');num.className='binary-demo-line-number';num.textContent=String(i+1).padStart(2,' ');num.setAttribute('aria-hidden','true');line.append(num,document.createTextNode(text));code.append(line);});};
    renderCode();
    const render=()=>{
      const f=steps[index],own=mode==='own',lower=own?'d':'low',upper=own?'u':'high';
      panel.querySelector('.binary-demo-code-label').textContent=own?'내 제출 풀이 · 같은 로직을 줄 단위로 펼친 표시용 코드':'C++ 참고 예제 · 강조된 줄을 실행한 뒤의 상태';
      panel.querySelector('.vector-demo-note').innerHTML=own?'d와 u는 모두 범위에 포함된다. 중간 위치를 경계에 남기고, 경계 값이 target과 같거나 u == d + 1이면 반환한다. mid 표시는 (u + d) / 2의 계산 결과이며 제출 코드의 변수는 아니다. 서로 다른 값이 정렬된 비어 있지 않은 배열 기준이다. <a href="#algorithm=lc-35">두 제출 코드와 풀이 과정 →</a>':'밝은 칸은 남은 범위, 흐린 칸은 제외한 범위다. high는 제외 경계이며 n은 배열 끝이다. mid는 마지막으로 계산한 위치다. 실제 제출 코드와 구분한 lower_bound 참고 예제다.';
      panel.querySelector('.binary-demo-state').textContent=`target ${target} · ${lower} ${f.low} · mid ${f.mid??'—'} · ${upper} ${f.high}`;
      panel.querySelector('.binary-demo-cells').replaceChildren(...[...values,null].map((v,i)=>{
        const cell=document.createElement('div');cell.className='vector-demo-cell'+(i<f.low||(own?i>f.high:i>=f.high)?' is-outside':'')+(i===f.mid?' is-mid':'')+(f.done&&i===(own?f.answer:f.low)?' is-answer':'');
        const value=document.createElement('strong');value.textContent=v??'끝';const label=document.createElement('small');label.textContent=i===values.length?'[n]':`[${i}]`;const pointers=document.createElement('span');pointers.className='binary-demo-pointers';pointers.textContent=[i===f.low?lower:'',i===f.mid?'mid':'',i===f.high?upper:''].filter(Boolean).join(' / ');cell.append(value,label,pointers);return cell;
      }));
      [...code.children].forEach((line,i)=>{line.classList.toggle('is-current',i===f.line);if(i===f.line)line.setAttribute('aria-current','step');else line.removeAttribute('aria-current');});
      const current=code.children[f.line],pre=code.parentElement;
      if(current){const y=current.offsetTop-code.offsetTop;if(y<pre.scrollTop||y+current.offsetHeight>pre.scrollTop+pre.clientHeight)pre.scrollTop=Math.max(0,y-pre.clientHeight/2);}
      panel.querySelector('.vector-demo-step').textContent=f.message;
      panel.querySelector('.vector-demo-count').textContent=`${index+1} / ${steps.length}`;
      panel.querySelector('.binary-demo-cost-detail').textContent=`범위 안 원소 수: ${f.sizes.join(' → ')} · 값 비교 ${f.comparisons}회. 7개를 차례로 모두 확인하는 대신 탐색 범위를 줄인다.`;
      button('prev').disabled=index===0;button('next').disabled=index===steps.length-1;if(f.done)stop();
    };
    panel.addEventListener('click',e=>{
      const selection=e.target.closest('.binary-demo-switch');if(selection){stop();mode=mode==='own'?'basic':'own';selection.setAttribute('aria-checked',String(mode==='own'));steps=(mode==='own'?ownTrace:trace)(target);index=0;renderCode();render();return;}
      const option=e.target.closest('[data-target]');if(option){stop();target=Number(option.dataset.target);steps=(mode==='own'?ownTrace:trace)(target);index=0;panel.querySelectorAll('[data-target]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.target)===target)));render();return;}
      const action=e.target.closest('[data-step]')?.dataset.step;if(!action)return;
      if(action==='play'){if(timer){stop();return;}if(index===steps.length-1)index=0;render();button('play').textContent='일시정지';timer=setInterval(()=>{if(!panel.isConnected||panel.hidden){stop();return;}index++;render();},900);}
      else {stop();index=action==='reset'?0:Math.max(0,Math.min(steps.length-1,index+(action==='next'?1:-1)));render();}
    });
    toggle.addEventListener('click',()=>{panel.hidden=!panel.hidden;toggle.textContent=panel.hidden?'동작 보기':'접기';toggle.setAttribute('aria-expanded',String(!panel.hidden));if(panel.hidden)stop();});
    window.addEventListener('hashchange',stop);dispose=()=>{stop();window.removeEventListener('hashchange',stop);};render();
  }};
})();
