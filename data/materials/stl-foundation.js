window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/stl-foundation.js"] = [
  {
    "id": "stl-foundation",
    "title": "C++ 자료구조·STL 정리 노트",
    "summary": "저장 방식부터 컨테이너 사용법, 문자열·정렬·탐색, 그래프·트리, Big-O와 자료구조 선택까지.",
    "kind": "file",
    "topic": "stl",
    "status": "종합 정리 노트",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "자료구조",
        "html": "\n<h3>1. 개념</h3>\n<p>자료구조는 데이터를 <strong>저장, 삽입, 삭제, 접근, 탐색</strong> 등 효율적으로 관리하기 위한 방법이다.</p>\n\n"
      },
      {
        "title": "메모리 — 연속 저장과 연결 저장",
        "html": "\n<h3>1. 연속적인 저장</h3>\n<p>데이터를 서로 붙어 있는 연속된 메모리 공간에 저장한다.</p>\n<pre>[10][20][30][40]</pre>\n<p>예: 배열, <code>vector</code></p>\n<h3>2. 불연속적인 저장</h3>\n<p>데이터가 메모리상에서 서로 붙어 있지 않아도 되며, 노드와 포인터 등을 이용해 연결한다.</p>\n<pre>[10] → [20] → [30]</pre>\n<p>예: <code>list</code>, 연결 기반 Tree</p>\n<blockquote>연속적인 저장과 인덱스 접근 가능 여부는 같은 개념이 아니다. 저장 방식과 접근 방식을 구분해서 생각한다.</blockquote>\n\n"
      },
      {
        "title": "vector — 인덱스 접근·뒤에 추가",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><code>vector</code>는 크기를 변화시켜가며 사용할 수 있는 <strong>동적 배열</strong>이다.</p>\n<ul><li>원소가 연속적인 메모리에 저장된다.</li><li>인덱스로 임의 접근할 수 있다.</li><li>끝에 원소를 추가할 때 평균적으로 O(1)이다.</li><li><code>capacity</code>가 부족하면 더 큰 공간을 확보하고 기존 원소를 이동할 수 있다.</li></ul>\n<h3>2. size / capacity</h3>\n<pre><code>vector&lt;int&gt; vec;\n\nvec.size();       // 현재 원소 개수\nvec.capacity();   // 현재 확보된 공간\nvec.reserve(100); // capacity를 미리 확보</code></pre>\n<table><tr><th>개념</th><th>의미</th></tr>\n<tr><td><code>size</code></td><td>현재 들어 있는 원소의 개수</td></tr>\n<tr><td><code>capacity</code></td><td>현재 확보된 저장 공간의 크기</td></tr>\n<tr><td><code>reserve(n)</code></td><td>capacity를 최소 n까지 확보. size는 변하지 않음</td></tr>\n</table>\n<h3>3. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push_back()</code></td><td>뒤에 추가</td><td>평균 O(1), 재할당 시 O(n)</td></tr>\n<tr><td><code>emplace_back()</code></td><td>뒤에서 객체를 생성하며 추가</td><td>평균 O(1), 재할당 시 O(n)</td></tr>\n<tr><td><code>pop_back()</code></td><td>마지막 원소 삭제</td><td>O(1)</td></tr>\n<tr><td><code>insert()</code></td><td>특정 위치에 삽입</td><td>O(n)</td></tr>\n<tr><td><code>erase()</code></td><td>특정 위치 삭제</td><td>O(n)</td></tr>\n<tr><td><code>operator[]</code></td><td>인덱스로 접근</td><td>O(1)</td></tr>\n<tr><td><code>at()</code></td><td>인덱스로 접근 + 범위 검사</td><td>O(1)</td></tr>\n<tr><td><code>empty()</code></td><td>비었는지 확인</td><td>O(1)</td></tr>\n<tr><td><code>clear()</code></td><td>모든 원소 삭제</td><td>O(n)</td></tr>\n<tr><td><code>size()</code></td><td>원소 개수</td><td>O(1)</td></tr>\n</table>\n<h3>4. 장점 / 단점 / 사용하기 좋은 때</h3>\n<ul><li><strong>장점:</strong> 인덱스 접근이 빠르고 캐시 효율이 좋다.</li><li><strong>단점:</strong> 중간 삽입/삭제 시 뒤 원소를 이동해야 한다.</li><li><strong>좋은 경우:</strong> 인덱스 접근이 필요하거나 끝에서 추가/삭제가 많은 경우</li></ul>\n<h3>5. 탐색 / 뒤집기</h3>\n<pre><code>find(vec.begin(), vec.end(), value); // 순차 탐색\nreverse(vec.begin(), vec.end());     // 뒤집기</code></pre>\n<p><code>find()</code>는 O(n), <code>reverse()</code>는 O(n)이다.</p>\n<h3>6. 알고리즘 예시: 그래프</h3>\n<pre><code>vector&lt;vector&lt;int&gt;&gt; graph(4);\n\ngraph[0].push_back(1);\ngraph[0].push_back(2);</code></pre>\n<p>0번 정점에서 1번과 2번 정점으로 연결된 것을 인접 리스트로 표현한 것이다.</p>\n<blockquote><code>{1, 2}</code>는 주소가 아니라 <strong>연결된 정점의 번호</strong>를 저장한 것이다.</blockquote>\n\n"
      },
      {
        "title": "2차원 vector — 행 추가와 값 추가",
        "text": "A.push_back(vector<int>{1})은 바깥 vector에 새 행을 추가한다. A[i].push_back(1)은 이미 있는 i번째 행에 값을 추가한다. 이전 행의 [j-1]과 [j]를 더할 때는 두 인덱스가 모두 존재하는 범위만 순회한다.",
        "code": "vector<vector<int>> A;\nA.push_back(vector<int>{1}); // 첫 행 추가\nA[0].push_back(1);           // 첫 행에 값 추가",
        "items": [
          "A[i]에 접근하기 전에 i번째 행이 있어야 한다.",
          "if로 값을 검사하더라도 없는 인덱스에 먼저 접근하면 범위 검사가 되지 않는다."
        ]
      },
      {
        "title": "vector 크기 — n+1칸이 필요한 경우",
        "text": "F(0)부터 F(n)까지 저장하려면 n+1칸이 필요하다. n칸만 만들면 마지막 인덱스는 n-1이다. 자료형의 크기를 키워도 배열의 인덱스 범위는 늘어나지 않는다."
      },
      {
        "title": "list — 위치를 찾아 삽입·삭제",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><code>list</code>는 일반적으로 <strong>양방향 연결 리스트</strong>이다.</p>\n<pre>[10] ⇄ [20] ⇄ [30]</pre>\n<ul><li>노드가 메모리상 연속되어 있을 필요가 없다.</li><li>각 노드는 앞/뒤 노드와 연결된다.</li><li>인덱스 임의 접근이 불가능하다.</li><li>위치를 가리키는 iterator를 이미 가지고 있다면 삽입/삭제가 효율적이다.</li></ul>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push_back()</code></td><td>뒤 추가</td><td>O(1)</td></tr>\n<tr><td><code>push_front()</code></td><td>앞 추가</td><td>O(1)</td></tr>\n<tr><td><code>pop_back()</code></td><td>뒤 삭제</td><td>O(1)</td></tr>\n<tr><td><code>pop_front()</code></td><td>앞 삭제</td><td>O(1)</td></tr>\n<tr><td><code>insert(it)</code></td><td>iterator 위치에 삽입</td><td>O(1)*</td></tr>\n<tr><td><code>erase(it)</code></td><td>iterator 위치 삭제</td><td>O(1)*</td></tr>\n<tr><td><code>remove(value)</code></td><td>값을 찾아 삭제</td><td>O(n)</td></tr>\n<tr><td><code>find()</code></td><td>순차 탐색</td><td>O(n)</td></tr>\n<tr><td><code>reverse()</code></td><td>뒤집기</td><td>O(n)</td></tr>\n<tr><td><code>sort()</code></td><td>리스트 자체 정렬</td><td>O(n log n)</td></tr>\n</table>\n<p class=\"small\">* 해당 위치의 iterator를 이미 알고 있는 경우. 위치를 찾는 과정은 별도로 O(n)이 걸릴 수 있다.</p>\n<h3>3. 사용하기 좋은 때</h3><p>중간 삽입/삭제가 많고 해당 위치를 iterator로 관리할 수 있으며 인덱스 접근이 중요하지 않을 때</p>\n\n"
      },
      {
        "title": "forward_list — 단방향 연결 리스트",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><code>forward_list</code>는 <strong>단방향 연결 리스트</strong>이다.</p>\n<pre>[10] → [20] → [30]</pre>\n<ul><li>다음 노드 방향으로만 이동한다.</li><li><code>list</code>보다 구조가 단순하다.</li><li>인덱스 접근이 불가능하다.</li></ul>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push_front()</code></td><td>앞 추가</td><td>O(1)</td></tr>\n<tr><td><code>pop_front()</code></td><td>앞 삭제</td><td>O(1)</td></tr>\n<tr><td><code>insert_after()</code></td><td>iterator 뒤에 삽입</td><td>O(1)*</td></tr>\n<tr><td><code>erase_after()</code></td><td>iterator 뒤 원소 삭제</td><td>O(1)*</td></tr>\n<tr><td><code>remove()</code></td><td>값으로 삭제</td><td>O(n)</td></tr>\n<tr><td><code>reverse()</code></td><td>뒤집기</td><td>O(n)</td></tr>\n</table>\n<h3>3. 사용하기 좋은 때</h3><p>양방향 이동이 필요 없고 앞쪽 또는 특정 노드 뒤에서 삽입/삭제하는 경우</p>\n\n"
      },
      {
        "title": "set — 중복 없이 정렬",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><code>set</code>은 <strong>중복 없는 값</strong>을 정렬된 상태로 저장한다.</p>\n<ul><li>중복 X</li><li>요소 자체가 Key 역할</li><li>기본적으로 오름차순</li><li>표준에서는 균형 잡힌 트리 계열로 동작하며 대표적으로 Red-Black Tree가 사용된다.</li></ul>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(log n)</td></tr>\n<tr><td><code>emplace()</code></td><td>생성 후 삽입</td><td>O(log n)</td></tr>\n<tr><td><code>erase(key)</code></td><td>Key 삭제</td><td>O(log n)</td></tr>\n<tr><td><code>find()</code></td><td>탐색</td><td>O(log n)</td></tr>\n<tr><td><code>contains()</code></td><td>존재 확인</td><td>O(log n)</td></tr>\n<tr><td><code>lower_bound()</code></td><td>값 이상인 첫 위치</td><td>O(log n)</td></tr>\n<tr><td><code>upper_bound()</code></td><td>값 초과인 첫 위치</td><td>O(log n)</td></tr>\n</table>\n<h3>3. 사용하기 좋은 때</h3><ul><li>중복 제거</li><li>정렬된 상태 유지</li><li>범위 탐색</li></ul>\n<pre><code>set&lt;int&gt; nums;\nset&lt;int, greater&lt;&gt;&gt; descNums;</code></pre>\n\n"
      },
      {
        "title": "unordered_set — 정렬 없이 값 검색",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><code>unordered_set</code>은 <strong>Hash Table</strong>을 이용해 중복 없는 값을 저장한다.</p>\n<ul><li>중복 X</li><li>정렬 X</li><li>평균적으로 빠른 탐색</li></ul>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>평균 / 최악</th></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>erase()</code></td><td>삭제</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>find()</code></td><td>탐색</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>contains()</code></td><td>존재 확인</td><td>O(1) / O(n)</td></tr>\n</table>\n<h3>3. 사용하기 좋은 때</h3><p>정렬이 필요하지 않고 빠른 존재 확인/검색이 중요할 때</p>\n\n"
      },
      {
        "title": "multiset — 중복을 허용하는 set",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><code>multiset</code>은 <strong>중복을 허용하면서 정렬</strong>된 상태로 저장한다.</p>\n<pre><code>multiset&lt;int&gt; nums;\nnums.insert(10);\nnums.insert(10); // 10이 두 개 존재 가능</code></pre>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(log n)</td></tr>\n<tr><td><code>erase(iterator)</code></td><td>해당 원소 삭제</td><td>O(1)~</td></tr>\n<tr><td><code>erase(key)</code></td><td>해당 Key의 모든 원소 삭제</td><td>O(log n + k)</td></tr>\n<tr><td><code>count()</code></td><td>특정 값 개수</td><td>O(log n + k)</td></tr>\n<tr><td><code>lower_bound()</code></td><td>값 이상인 첫 위치</td><td>O(log n)</td></tr>\n<tr><td><code>upper_bound()</code></td><td>값 초과인 첫 위치</td><td>O(log n)</td></tr>\n<tr><td><code>equal_range()</code></td><td>같은 값의 범위</td><td>O(log n)</td></tr>\n</table>\n<h3>3. 사용하기 좋은 때</h3><p>중복을 허용하면서 정렬과 범위 탐색이 필요할 때</p>\n\n"
      },
      {
        "title": "map — 키와 값 저장",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><code>map</code>은 <strong>Key - Value</strong> 쌍을 저장하고 Key 기준으로 정렬한다.</p>\n<ul><li>Key 중복 X</li><li>Key 기준 정렬</li><li>Key로 Value 접근</li><li>균형 트리 계열로 구현된다.</li></ul>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>map[key]</code></td><td>Key 접근. 없으면 새 원소를 삽입할 수 있음</td><td>O(log n)</td></tr>\n<tr><td><code>at(key)</code></td><td>Key 접근. 없으면 예외</td><td>O(log n)</td></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(log n)</td></tr>\n<tr><td><code>emplace()</code></td><td>생성 후 삽입</td><td>O(log n)</td></tr>\n<tr><td><code>erase(key)</code></td><td>Key 삭제</td><td>O(log n)</td></tr>\n<tr><td><code>find()</code></td><td>Key 탐색</td><td>O(log n)</td></tr>\n<tr><td><code>contains()</code></td><td>Key 존재 확인</td><td>O(log n)</td></tr>\n</table>\n<h3>3. 사용하기 좋은 때</h3><p>Key와 Value를 묶어 관리하고 Key 기준 정렬이나 탐색이 필요할 때</p>\n<pre><code>map&lt;string, int&gt; data;\ndata[\"HP\"] = 100;</code></pre>\n\n"
      },
      {
        "title": "unordered_map — 정렬 없이 키 검색",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><code>unordered_map</code>은 Hash Table 기반의 <strong>Key - Value</strong> 자료구조이다.</p>\n<ul><li>Key 중복 X</li><li>정렬 X</li><li>평균적으로 빠른 Key 검색</li></ul>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>평균 / 최악</th></tr>\n<tr><td><code>data[key]</code></td><td>Key 접근 / 없으면 삽입</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>erase(key)</code></td><td>삭제</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>find()</code></td><td>Key 탐색</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>contains()</code></td><td>존재 확인</td><td>O(1) / O(n)</td></tr>\n</table>\n<h3>3. 사용하기 좋은 때</h3><p>정렬이 필요하지 않고 Key 검색을 많이 하는 경우</p>\n\n"
      },
      {
        "title": "multimap — 같은 키 여러 개 저장",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><code>multimap</code>은 하나의 Key에 여러 Value를 저장할 수 있으며 Key 기준으로 정렬한다.</p>\n<pre><code>multimap&lt;string, int&gt; data;\ndata.insert({\"A\", 10});\ndata.insert({\"A\", 20});</code></pre>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(log n)</td></tr>\n<tr><td><code>erase(key)</code></td><td>해당 Key의 모든 원소 삭제</td><td>O(log n + k)</td></tr>\n<tr><td><code>find()</code></td><td>Key 탐색</td><td>O(log n)</td></tr>\n<tr><td><code>count()</code></td><td>Key 개수</td><td>O(log n + k)</td></tr>\n<tr><td><code>equal_range()</code></td><td>같은 Key의 범위</td><td>O(log n)</td></tr>\n</table>\n<h3>3. 사용하기 좋은 때</h3><p>하나의 Key에 여러 데이터를 연결하면서 Key 정렬이 필요할 때</p>\n<blockquote>Key와 Value를 같이 비교해 정렬하고 싶다면 <code>multiset&lt;pair&lt;...&gt;, 비교함수&gt;</code> 같은 방법도 가능하다. 다만 Key-Value 자체가 목적이라면 <code>map/multimap</code>이 보통 더 자연스럽다.</blockquote>\n\n"
      },
      {
        "title": "stack — 마지막에 넣은 값 꺼내기",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><strong>LIFO(Last In, First Out)</strong> — 후입선출</p>\n<pre>TOP\n ↓\n[30]\n[20]\n[10]</pre>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push()</code></td><td>맨 위에 추가</td><td>O(1)</td></tr>\n<tr><td><code>emplace()</code></td><td>맨 위에서 생성/추가</td><td>O(1)</td></tr>\n<tr><td><code>pop()</code></td><td>맨 위 삭제</td><td>O(1)</td></tr>\n<tr><td><code>top()</code></td><td>맨 위 확인</td><td>O(1)</td></tr>\n<tr><td><code>empty()</code></td><td>비었는지 확인</td><td>O(1)</td></tr>\n</table>\n<h3>3. 사용하기 좋은 때</h3><ul><li>괄호 짝 검사</li><li>계산기</li><li>DFS</li><li>되돌리기 / Undo</li></ul>\n\n"
      },
      {
        "title": "queue — 먼저 넣은 값 꺼내기",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><strong>FIFO(First In, First Out)</strong> — 선입선출</p>\n<pre>front → [10][20][30] ← back</pre>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push()</code></td><td>뒤에 추가</td><td>O(1)</td></tr>\n<tr><td><code>emplace()</code></td><td>뒤에서 생성/추가</td><td>O(1)</td></tr>\n<tr><td><code>pop()</code></td><td>앞 삭제</td><td>O(1)</td></tr>\n<tr><td><code>front()</code></td><td>앞 확인</td><td>O(1)</td></tr>\n<tr><td><code>back()</code></td><td>뒤 확인</td><td>O(1)</td></tr>\n<tr><td><code>empty()</code></td><td>비었는지 확인</td><td>O(1)</td></tr>\n</table>\n<h3>3. 사용하기 좋은 때</h3><ul><li>BFS</li><li>대기열</li><li>먼저 들어온 작업부터 처리해야 하는 경우</li></ul>\n\n"
      },
      {
        "title": "deque — 양쪽 끝에 추가·삭제",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><strong>Double Ended Queue</strong> — 양쪽 끝에서 삽입/삭제할 수 있다.</p>\n<pre>앞 ↔ [10][20][30][40] ↔ 뒤</pre>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push_front()</code></td><td>앞 추가</td><td>O(1)</td></tr>\n<tr><td><code>push_back()</code></td><td>뒤 추가</td><td>O(1)</td></tr>\n<tr><td><code>pop_front()</code></td><td>앞 삭제</td><td>O(1)</td></tr>\n<tr><td><code>pop_back()</code></td><td>뒤 삭제</td><td>O(1)</td></tr>\n<tr><td><code>front()</code> / <code>back()</code></td><td>양 끝 확인</td><td>O(1)</td></tr>\n<tr><td><code>operator[]</code></td><td>인덱스 접근</td><td>O(1)</td></tr>\n</table>\n<h3>3. 장점 / 단점 / 사용하기 좋은 때</h3>\n<ul><li><strong>장점:</strong> 양쪽 끝의 삽입/삭제가 빠르고 인덱스 접근도 가능</li><li><strong>단점:</strong> vector처럼 하나의 연속된 메모리 블록에 저장된다는 보장은 없음</li><li><strong>좋은 경우:</strong> 양쪽에서 데이터를 넣고 빼는 경우, 슬라이딩 윈도우</li></ul>\n\n"
      },
      {
        "title": "priority_queue — 우선순위에 따라 꺼내기",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p>우선순위가 높은 원소를 먼저 꺼내는 자료구조이다.</p>\n<ul><li><code>priority_queue</code>는 Heap을 사용한다.</li><li>Heap은 완전 이진 트리 형태를 유지한다.</li><li>배열 형태로 효율적으로 표현할 수 있다.</li><li>전체 원소가 정렬되어 있는 것은 아니다.</li></ul>\n<pre><code>priority_queue&lt;int&gt; maxPQ; // 기본: 큰 값 우선\n\npriority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; minPQ;\n// 작은 값 우선</code></pre>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push()</code></td><td>삽입</td><td>O(log n)</td></tr>\n<tr><td><code>emplace()</code></td><td>생성 후 삽입</td><td>O(log n)</td></tr>\n<tr><td><code>pop()</code></td><td>최상위 우선순위 삭제</td><td>O(log n)</td></tr>\n<tr><td><code>top()</code></td><td>최상위 우선순위 확인</td><td>O(1)</td></tr>\n<tr><td><code>empty()</code></td><td>비었는지 확인</td><td>O(1)</td></tr>\n</table>\n<h3>3. 사용하기 좋은 때</h3><ul><li>최소/최대값을 반복해서 꺼낼 때</li><li>Dijkstra</li><li>우선순위가 있는 작업 처리</li></ul>\n\n"
      },
      {
        "title": "string — 문자열 다루기",
        "html": "\n<h3>1. 개념</h3>\n<p><code>std::string</code>은 문자열을 저장하는 표준 컨테이너이다. 내부적으로 연속적인 문자 저장을 사용하며 인덱스로 접근할 수 있다.</p>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>대략적인 Big-O</th></tr>\n<tr><td><code>str[index]</code></td><td>문자 접근</td><td>O(1)</td></tr>\n<tr><td><code>find()</code></td><td>문자열/문자 탐색</td><td>O(n) 수준</td></tr>\n<tr><td><code>substr(pos, count)</code></td><td>부분 문자열 생성</td><td>O(count)</td></tr>\n<tr><td><code>reverse()</code></td><td>문자열 뒤집기</td><td>O(n)</td></tr>\n<tr><td><code>size()</code></td><td>문자열 길이</td><td>O(1)</td></tr>\n</table>\n<h3>3. 파싱</h3>\n<p>문자열을 원하는 단위로 나누어 데이터를 추출하는 작업이다.</p>\n<pre><code>string str = \"HP:100\";\n\nauto pos = str.find(':');\nstring key = str.substr(0, pos);\nstring value = str.substr(pos + 1);</code></pre>\n<h3>4. 뒤집기</h3>\n<pre><code>reverse(str.begin(), str.end());</code></pre>\n<blockquote><code>find()</code>는 위치를 반환하며 찾지 못하면 <code>string::npos</code>를 반환한다.</blockquote>\n\n"
      },
      {
        "title": "STL 알고리즘 — sort·find·reverse와 컨테이너별 정렬",
        "html": "\n<h3>1. sort</h3>\n<pre><code>sort(vec.begin(), vec.end()); // 기본 오름차순\nsort(vec.begin(), vec.end(), greater&lt;&gt;()); // 내림차순</code></pre>\n<p>일반적으로 O(n log n)이다.</p>\n<h3>2. find / reverse</h3>\n<pre><code>find(vec.begin(), vec.end(), value); // O(n)\nreverse(vec.begin(), vec.end());     // O(n)</code></pre>\n<h3>3. 컨테이너별 정렬</h3>\n<pre><code>sort(vec.begin(), vec.end()); // vector 등 Random Access Iterator가 필요한 경우\n\nlst.sort();                   // list는 자체 sort 사용</code></pre>\n<blockquote><code>list</code>는 임의 접근(Random Access)이 불가능하기 때문에 일반적인 <code>std::sort()</code>를 사용할 수 없고, 멤버 함수 <code>list::sort()</code>를 사용한다.</blockquote>\n\n"
      },
      {
        "title": "그래프 — 정점과 간선",
        "text": "DFS는 한 갈래를 끝까지 살펴본 뒤 돌아와 다른 갈래를 본다. BFS는 시작한 곳에서 가까운 곳부터 차례로 살펴본다. DFS에서는 재귀나 stack으로 돌아갈 위치를 기억하고, BFS에서는 queue에 다음에 볼 위치를 넣는다.",
        "html": "\n<h3>1. 개념</h3>\n<p>정점(Vertex)과 간선(Edge)으로 이루어진 자료구조이다.</p>\n<h3>2. Vector를 이용한 인접 리스트</h3>\n<pre><code>vector&lt;vector&lt;int&gt;&gt; graph(4);\n\ngraph[0].push_back(1);\ngraph[0].push_back(2);</code></pre>\n<p>각 정점에 연결된 다른 정점의 목록을 저장하는 방식이다.</p>\n<h3>3. 대표 알고리즘</h3>\n<table><tr><th>알고리즘</th><th>주로 사용하는 자료구조</th><th>목적</th></tr>\n<tr><td>BFS</td><td>Queue</td><td>너비 우선 탐색</td></tr>\n<tr><td>DFS</td><td>Stack / 재귀</td><td>깊이 우선 탐색</td></tr>\n<tr><td>Dijkstra</td><td>Priority Queue</td><td>한 시작점에서 최단 거리</td></tr>\n</table>\n\n"
      },
      {
        "title": "트리 — 부모와 자식 관계",
        "html": "\n<h3>1. 개념</h3>\n<p>부모-자식 관계를 가지는 계층적인 자료구조이다.</p>\n<pre>        [1] Root\n       /   \\\n     [2]   [3]\n     /\n   [4] Leaf</pre>\n<h3>2. 용어</h3>\n<table><tr><th>용어</th><th>의미</th></tr>\n<tr><td>Root</td><td>가장 위의 노드</td></tr>\n<tr><td>Parent</td><td>부모 노드</td></tr>\n<tr><td>Child</td><td>자식 노드</td></tr>\n<tr><td>Leaf</td><td>자식이 없는 노드</td></tr>\n<tr><td>Edge</td><td>노드와 노드를 연결하는 간선</td></tr>\n</table>\n<h3>3. 종류</h3><ul><li>Binary Tree</li><li>Binary Search Tree</li><li>Heap</li></ul>\n\n"
      },
      {
        "title": "STL이란?",
        "html": "\n<h3>1. 핵심 구성</h3>\n<table><tr><th>구성</th><th>역할</th><th>예시</th></tr>\n<tr><td>Container</td><td>데이터 저장</td><td>vector, list, set, map</td></tr>\n<tr><td>Iterator</td><td>컨테이너의 원소를 가리키고 이동</td><td>begin(), end()</td></tr>\n<tr><td>Algorithm</td><td>정렬/탐색/변경 등의 작업</td><td>sort(), find(), reverse()</td></tr>\n</table>\n<pre><code>vector&lt;int&gt; vec = {3, 1, 2};\nsort(vec.begin(), vec.end());</code></pre>\n\n"
      },
      {
        "title": "Big-O 표기법",
        "html": "\n<h3>1. 개념</h3>\n<p>입력 크기 <code>n</code>이 커질 때 알고리즘의 실행 시간이나 필요한 공간이 어떻게 증가하는지를 나타내는 표기법이다.</p>\n<table><tr><th>표기</th><th>의미</th><th>예시</th></tr>\n<tr><td>O(1)</td><td>입력 크기와 관계없이 일정</td><td>vector 인덱스 접근, stack top</td></tr>\n<tr><td>O(log n)</td><td>범위를 줄여가며 처리</td><td>set/map 탐색</td></tr>\n<tr><td>O(n)</td><td>데이터 수에 비례</td><td>순차 탐색</td></tr>\n<tr><td>O(n log n)</td><td>효율적인 정렬에서 자주 등장</td><td>sort()</td></tr>\n<tr><td>O(n²)</td><td>데이터 수의 제곱에 비례</td><td>중첩 반복문</td></tr>\n</table>\n<blockquote>Big-O는 실제 시간이 몇 초인지가 아니라, 입력 크기가 증가할 때 성능이 증가하는 정도를 표현한다.</blockquote>\n\n"
      },
      {
        "title": "자료구조 선택 기준",
        "html": "\n<table><tr><th>필요한 상황</th><th>추천 자료구조</th><th>이유</th></tr>\n<tr><td>인덱스 접근</td><td>vector</td><td>임의 접근 O(1)</td></tr>\n<tr><td>끝에서 추가/삭제</td><td>vector</td><td>평균 O(1)</td></tr>\n<tr><td>양쪽 끝에서 추가/삭제</td><td>deque</td><td>양쪽 O(1)</td></tr>\n<tr><td>중간 삽입/삭제 + 위치 iterator 보유</td><td>list</td><td>연결 변경으로 처리</td></tr>\n<tr><td>중복 없는 정렬 데이터</td><td>set</td><td>정렬 + 중복 X</td></tr>\n<tr><td>중복 없는 빠른 검색</td><td>unordered_set</td><td>Hash Table 평균 O(1)</td></tr>\n<tr><td>Key-Value + 정렬</td><td>map</td><td>Key 기준 정렬</td></tr>\n<tr><td>Key-Value + 빠른 검색</td><td>unordered_map</td><td>Hash Table 평균 O(1)</td></tr>\n<tr><td>Key 중복 + 정렬</td><td>multimap</td><td>같은 Key 여러 개 가능</td></tr>\n<tr><td>후입선출</td><td>stack</td><td>LIFO</td></tr>\n<tr><td>선입선출</td><td>queue</td><td>FIFO</td></tr>\n<tr><td>최소/최대 우선 처리</td><td>priority_queue</td><td>Heap</td></tr>\n</table>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "관련 Velog · STL과 vector 기초",
        "url": "https://velog.io/@jwh4410/7.17"
      },
      {
        "label": "관련 Velog · STL vector와 map 복습",
        "url": "https://velog.io/@jwh4410/7.27"
      },
      {
        "label": "파스칼의 삼각형 · 내 풀이",
        "url": "#algorithm=swea-2005"
      },
      {
        "label": "피보나치 수 · 내 풀이",
        "url": "#algorithm=pg-12945"
      },
      {
        "label": "SWEA 파스칼의 삼각형 원문",
        "url": "https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5P0-h6Ak4DFAUq"
      },
      {
        "label": "프로그래머스 피보나치 수 원문",
        "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12945"
      },
      {
        "label": "관련 Velog · map과 auto, range-for",
        "url": "https://velog.io/@jwh4410/7.28"
      }
    ],
    "legacy_sections": {
      "stl-sequence": "vector — 인덱스 접근·뒤에 추가",
      "stl-associative": "set — 중복 없이 정렬",
      "stl-adaptor": "stack — 마지막에 넣은 값 꺼내기",
      "stl-algorithm": "string — 문자열 다루기",
      "graph-tree": "그래프 — 정점과 간선",
      "concept-bigo": "Big-O 표기법",
      "stl-selection": "자료구조 선택 기준"
    },
    "toc_groups": [
      {
        "title": "기초와 저장 방식",
        "start": "자료구조"
      },
      {
        "title": "순차 컨테이너",
        "start": "vector — 인덱스 접근·뒤에 추가"
      },
      {
        "title": "키로 찾는 컨테이너",
        "start": "set — 중복 없이 정렬"
      },
      {
        "title": "꺼내는 순서와 양쪽 접근",
        "start": "stack — 마지막에 넣은 값 꺼내기"
      },
      {
        "title": "문자열·STL 알고리즘",
        "start": "string — 문자열 다루기"
      },
      {
        "title": "그래프·트리·선택 기준",
        "start": "그래프 — 정점과 간선"
      }
    ],
    "quick_links": [
      {
        "label": "vector",
        "section": "vector — 인덱스 접근·뒤에 추가"
      },
      {
        "label": "map",
        "section": "map — 키와 값 저장"
      },
      {
        "label": "Big-O",
        "section": "Big-O 표기법"
      }
    ]
  }
];
