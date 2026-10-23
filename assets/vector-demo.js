/* One inline example. Source: data/guides/structures-stl-lab.html. */
(() => {
  let dispose = () => {};
  const initial = [4, 8, 12, 16];
  function frames(op) {
    const a = [...initial], result = [];
    const add = (message, code, active = []) => result.push({ values: [...a], message, code, active });
    add('원소 4개와 여유 공간 2칸으로 시작한다.', 'vector<int> v{4, 8, 12, 16};');
    if (op === 'push') {
      a.push(7); add('여유 공간이 있으므로 맨 뒤에 7을 추가한다.', 'v.push_back(7);', [4]);
    } else if (op === 'insert') {
      add('인덱스 1에 7을 넣기 위해 뒤쪽부터 한 칸씩 옮긴다.', 'v.insert(v.begin() + 1, 7);', [1]);
      for (let i = a.length; i > 1; i--) { a[i] = a[i - 1]; add(`${i - 1}번 값을 ${i}번 칸으로 옮긴다. 아직 삽입 중이다.`, 'v.insert(v.begin() + 1, 7);', [i - 1, i]); }
      a[1] = 7; add('비워 둔 인덱스 1에 7을 넣으면 삽입이 끝난다.', 'v.insert(v.begin() + 1, 7);', [1]);
    } else {
      add('인덱스 1의 8을 삭제한다. 뒤의 값들을 앞으로 옮겨야 한다.', 'v.erase(v.begin() + 1);', [1]);
      for (let i = 1; i < a.length - 1; i++) { a[i] = a[i + 1]; add(`${i + 1}번 값을 ${i}번 칸으로 옮긴다. 아직 삭제 중이다.`, 'v.erase(v.begin() + 1);', [i, i + 1]); }
      a.pop(); add('마지막 원소 자리까지 정리하면 삭제가 끝난다.', 'v.erase(v.begin() + 1);');
    }
    return result;
  }
  window.TIL_VECTOR_DEMO = {
    mount(section) {
      dispose();
      if (!section) return;
      const panel = document.createElement('div');
      panel.className = 'vector-demo';
      panel.id = 'vector-demo-panel'; panel.hidden = true;
      panel.innerHTML = `<div class="vector-demo-body"><div class="vector-demo-operations" role="group" aria-label="vector 연산"><button type="button" data-operation="push" aria-pressed="true">뒤에 추가 <small>push_back</small></button><button type="button" data-operation="insert" aria-pressed="false">중간 삽입 <small>insert</small></button><button type="button" data-operation="erase" aria-pressed="false">중간 삭제 <small>erase</small></button></div><div class="vector-demo-cells" aria-label="vector 저장 공간"></div><p class="vector-demo-step" role="status" aria-live="polite"></p><pre aria-label="C++ 사용 예제"><code></code></pre><div class="vector-demo-controls"><button type="button" data-action="prev">이전</button><button type="button" data-action="next">다음</button><button type="button" data-action="play">재생</button><button type="button" data-action="reset">처음으로</button><span class="vector-demo-count"></span></div><p class="vector-demo-note">저장 공간은 6칸으로 가정한 예시다. reserve(6)은 최소 6칸을 확보하며 실제 capacity는 다를 수 있다. 이동 중 겹쳐 보이는 값은 내부 이동을 설명하기 위한 표현이다.</p></div>`;
      const heading = section.querySelector('h2'), header = document.createElement('div'), toggle = document.createElement('button');
      header.className = 'vector-demo-heading'; toggle.className = 'vector-demo-toggle'; toggle.type = 'button';
      toggle.textContent = '동작 보기'; toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-controls',panel.id);
      heading.before(header); header.append(heading,toggle); header.after(panel);
      const cost = document.createElement('div');
      cost.className = 'vector-demo-cost'; cost.setAttribute('role','note'); cost.setAttribute('aria-label','연산 비용과 이유');
      cost.innerHTML = '<strong></strong><p></p><small>n은 연산 전 원소 수다. 준비 코드와 재생 단계 수가 아닌, 선택한 연산의 시간 복잡도를 나타낸다.</small>';
      panel.querySelector('.vector-demo-step').after(cost);
      let operation = 'push', steps = frames(operation), index = 0, timer = null;
      const button = name => panel.querySelector(`[data-action="${name}"]`);
      const stop = () => { clearInterval(timer); timer = null; button('play').textContent = '재생'; };
      const render = () => {
        const f = steps[index], cells = panel.querySelector('.vector-demo-cells');
        cells.replaceChildren(...Array.from({length:6}, (_, i) => {
          const cell = document.createElement('div'); cell.className = 'vector-demo-cell' + (f.active.includes(i) ? ' is-active' : '') + (i >= f.values.length ? ' is-empty' : '');
          const value = document.createElement('strong'); value.textContent = f.values[i] ?? '빈칸';
          const label = document.createElement('small'); label.textContent = `[${i}]`;
          cell.append(value,label); return cell;
        }));
        panel.querySelector('.vector-demo-step').textContent = f.message;
        const complexity = {
          push: ['push_back · 분할 상환 O(1)', '지금은 여유 공간이 있어 기존 원소 이동 없이 7 하나만 뒤에 넣는다: O(1). 공간이 부족한 호출에서는 새 공간으로 기존 n개를 옮겨 O(n)이 든다. 여러 번 추가하는 전체 비용을 호출당 나누면 O(1)이다.'],
          insert: ['중간 insert · O(n)', '지금은 인덱스 1에 넣기 위해 8·12·16, 총 3개를 오른쪽으로 옮긴다. 앞쪽에 삽입할수록 옮길 원소가 늘고, 최악에는 기존 n개를 모두 옮기므로 O(n)이다. 여유 공간이 있어도 이 이동은 필요하다.'],
          erase: ['중간 erase · O(n)', '지금은 8을 지운 자리를 채우려고 12·16, 총 2개를 왼쪽으로 옮긴다. 앞쪽에서 지울수록 뒤따르는 원소가 많아져 최악 O(n)이다. 마지막 원소만 지우는 경우에는 뒤에서 당겨 올 값이 없어 O(1)이다.']
        }[operation];
        cost.querySelector('strong').textContent = complexity[0];
        cost.querySelector('p').textContent = complexity[1];
        const command = {push:'v.push_back(7);',insert:'v.insert(v.begin() + 1, 7);',erase:'v.erase(v.begin() + 1);'}[operation];
        const result = {push:'4, 8, 12, 16, 7',insert:'4, 7, 8, 12, 16',erase:'4, 12, 16'}[operation];
        panel.querySelector('code').textContent = `std::vector<int> v{4, 8, 12, 16};\nv.reserve(6); // 여유 공간 확보\n\n${command}\n// 연산 후: ${result}`;
        panel.querySelector('.vector-demo-count').textContent = `${index + 1} / ${steps.length}`;
        button('prev').disabled = index === 0; button('next').disabled = index === steps.length - 1;
        if (index === steps.length - 1) stop();
      };
      panel.addEventListener('click', e => {
        const selected = e.target.closest('[data-operation]')?.dataset.operation;
        if (selected) {
          stop(); operation = selected; steps = frames(operation); index = 0;
          panel.querySelectorAll('[data-operation]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.operation===operation)));
          render(); return;
        }
        const action = e.target.closest('[data-action]')?.dataset.action;
        if (!action) return;
        if (action === 'play') {
          if (timer) { stop(); return; }
          if (index === steps.length - 1) index = 0;
          render(); button('play').textContent = '일시정지';
          timer = setInterval(() => { if (!panel.isConnected || panel.hidden) { stop(); return; } index++; render(); }, 1000);
        } else { stop(); index = action === 'reset' ? 0 : Math.max(0, Math.min(steps.length - 1, index + (action === 'next' ? 1 : -1))); render(); }
      });
      toggle.addEventListener('click',()=>{panel.hidden=!panel.hidden;toggle.setAttribute('aria-expanded',String(!panel.hidden));toggle.textContent=panel.hidden?'동작 보기':'접기';if(panel.hidden)stop();});
      const leave = () => stop();
      window.addEventListener('hashchange', leave);
      dispose = () => { stop(); window.removeEventListener('hashchange', leave); };
      render();
    }
  };
})();
