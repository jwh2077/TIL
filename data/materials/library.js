window.TIL_LIBRARY = [
  {
    "id": "concept-intro",
    "title": "자료구조",
    "summary": "자료구조의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "자료구조",
        "html": "\n<h2>1. 개념</h2>\n<p>자료구조는 데이터를 <strong>저장, 삽입, 삭제, 접근, 탐색</strong> 등 효율적으로 관리하기 위한 방법이다.</p>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-memory",
    "title": "메모리에서의 저장",
    "summary": "메모리에서의 저장의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "메모리에서의 저장",
        "html": "\n<h2>1. 연속적인 저장</h2>\n<p>데이터를 서로 붙어 있는 연속된 메모리 공간에 저장한다.</p>\n<pre>[10][20][30][40]</pre>\n<p>예: 배열, <code>vector</code></p>\n<h2>2. 불연속적인 저장</h2>\n<p>데이터가 메모리상에서 서로 붙어 있지 않아도 되며, 노드와 포인터 등을 이용해 연결한다.</p>\n<pre>[10] → [20] → [30]</pre>\n<p>예: <code>list</code>, 연결 기반 Tree</p>\n<blockquote>연속적인 저장과 인덱스 접근 가능 여부는 같은 개념이 아니다. 저장 방식과 접근 방식을 구분해서 생각한다.</blockquote>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-vector",
    "title": "Vector",
    "summary": "Vector의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Vector",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>vector</code>는 크기를 변화시켜가며 사용할 수 있는 <strong>동적 배열</strong>이다.</p>\n<ul><li>원소가 연속적인 메모리에 저장된다.</li><li>인덱스로 임의 접근할 수 있다.</li><li>끝에 원소를 추가할 때 평균적으로 O(1)이다.</li><li><code>capacity</code>가 부족하면 더 큰 공간을 확보하고 기존 원소를 이동할 수 있다.</li></ul>\n<h2>2. size / capacity</h2>\n<pre><code>vector&lt;int&gt; vec;\n\nvec.size();       // 현재 원소 개수\nvec.capacity();   // 현재 확보된 공간\nvec.reserve(100); // capacity를 미리 확보</code></pre>\n<table><tr><th>개념</th><th>의미</th></tr>\n<tr><td><code>size</code></td><td>현재 들어 있는 원소의 개수</td></tr>\n<tr><td><code>capacity</code></td><td>현재 확보된 저장 공간의 크기</td></tr>\n<tr><td><code>reserve(n)</code></td><td>capacity를 최소 n까지 확보. size는 변하지 않음</td></tr>\n</table>\n<h2>3. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push_back()</code></td><td>뒤에 추가</td><td>평균 O(1), 재할당 시 O(n)</td></tr>\n<tr><td><code>emplace_back()</code></td><td>뒤에서 객체를 생성하며 추가</td><td>평균 O(1), 재할당 시 O(n)</td></tr>\n<tr><td><code>pop_back()</code></td><td>마지막 원소 삭제</td><td>O(1)</td></tr>\n<tr><td><code>insert()</code></td><td>특정 위치에 삽입</td><td>O(n)</td></tr>\n<tr><td><code>erase()</code></td><td>특정 위치 삭제</td><td>O(n)</td></tr>\n<tr><td><code>operator[]</code></td><td>인덱스로 접근</td><td>O(1)</td></tr>\n<tr><td><code>at()</code></td><td>인덱스로 접근 + 범위 검사</td><td>O(1)</td></tr>\n<tr><td><code>empty()</code></td><td>비었는지 확인</td><td>O(1)</td></tr>\n<tr><td><code>clear()</code></td><td>모든 원소 삭제</td><td>O(n)</td></tr>\n<tr><td><code>size()</code></td><td>원소 개수</td><td>O(1)</td></tr>\n</table>\n<h2>4. 장점 / 단점 / 사용하기 좋은 때</h2>\n<ul><li><strong>장점:</strong> 인덱스 접근이 빠르고 캐시 효율이 좋다.</li><li><strong>단점:</strong> 중간 삽입/삭제 시 뒤 원소를 이동해야 한다.</li><li><strong>좋은 경우:</strong> 인덱스 접근이 필요하거나 끝에서 추가/삭제가 많은 경우</li></ul>\n<h2>5. 탐색 / 뒤집기</h2>\n<pre><code>find(vec.begin(), vec.end(), value); // 순차 탐색\nreverse(vec.begin(), vec.end());     // 뒤집기</code></pre>\n<p><code>find()</code>는 O(n), <code>reverse()</code>는 O(n)이다.</p>\n<h2>6. 알고리즘 예시: 그래프</h2>\n<pre><code>vector&lt;vector&lt;int&gt;&gt; graph(4);\n\ngraph[0].push_back(1);\ngraph[0].push_back(2);</code></pre>\n<p>0번 정점에서 1번과 2번 정점으로 연결된 것을 인접 리스트로 표현한 것이다.</p>\n<blockquote><code>{1, 2}</code>는 주소가 아니라 <strong>연결된 정점의 번호</strong>를 저장한 것이다.</blockquote>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-list",
    "title": "List",
    "summary": "List의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "List",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>list</code>는 일반적으로 <strong>양방향 연결 리스트</strong>이다.</p>\n<pre>[10] ⇄ [20] ⇄ [30]</pre>\n<ul><li>노드가 메모리상 연속되어 있을 필요가 없다.</li><li>각 노드는 앞/뒤 노드와 연결된다.</li><li>인덱스 임의 접근이 불가능하다.</li><li>위치를 가리키는 iterator를 이미 가지고 있다면 삽입/삭제가 효율적이다.</li></ul>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push_back()</code></td><td>뒤 추가</td><td>O(1)</td></tr>\n<tr><td><code>push_front()</code></td><td>앞 추가</td><td>O(1)</td></tr>\n<tr><td><code>pop_back()</code></td><td>뒤 삭제</td><td>O(1)</td></tr>\n<tr><td><code>pop_front()</code></td><td>앞 삭제</td><td>O(1)</td></tr>\n<tr><td><code>insert(it)</code></td><td>iterator 위치에 삽입</td><td>O(1)*</td></tr>\n<tr><td><code>erase(it)</code></td><td>iterator 위치 삭제</td><td>O(1)*</td></tr>\n<tr><td><code>remove(value)</code></td><td>값을 찾아 삭제</td><td>O(n)</td></tr>\n<tr><td><code>find()</code></td><td>순차 탐색</td><td>O(n)</td></tr>\n<tr><td><code>reverse()</code></td><td>뒤집기</td><td>O(n)</td></tr>\n<tr><td><code>sort()</code></td><td>리스트 자체 정렬</td><td>O(n log n)</td></tr>\n</table>\n<p class=\"small\">* 해당 위치의 iterator를 이미 알고 있는 경우. 위치를 찾는 과정은 별도로 O(n)이 걸릴 수 있다.</p>\n<h2>3. 사용하기 좋은 때</h2><p>중간 삽입/삭제가 많고 해당 위치를 iterator로 관리할 수 있으며 인덱스 접근이 중요하지 않을 때</p>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-forward",
    "title": "Forward List",
    "summary": "Forward List의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Forward List",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>forward_list</code>는 <strong>단방향 연결 리스트</strong>이다.</p>\n<pre>[10] → [20] → [30]</pre>\n<ul><li>다음 노드 방향으로만 이동한다.</li><li><code>list</code>보다 구조가 단순하다.</li><li>인덱스 접근이 불가능하다.</li></ul>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push_front()</code></td><td>앞 추가</td><td>O(1)</td></tr>\n<tr><td><code>pop_front()</code></td><td>앞 삭제</td><td>O(1)</td></tr>\n<tr><td><code>insert_after()</code></td><td>iterator 뒤에 삽입</td><td>O(1)*</td></tr>\n<tr><td><code>erase_after()</code></td><td>iterator 뒤 원소 삭제</td><td>O(1)*</td></tr>\n<tr><td><code>remove()</code></td><td>값으로 삭제</td><td>O(n)</td></tr>\n<tr><td><code>reverse()</code></td><td>뒤집기</td><td>O(n)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><p>양방향 이동이 필요 없고 앞쪽 또는 특정 노드 뒤에서 삽입/삭제하는 경우</p>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-set",
    "title": "Set",
    "summary": "Set의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Set",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>set</code>은 <strong>중복 없는 값</strong>을 정렬된 상태로 저장한다.</p>\n<ul><li>중복 X</li><li>요소 자체가 Key 역할</li><li>기본적으로 오름차순</li><li>표준에서는 균형 잡힌 트리 계열로 동작하며 대표적으로 Red-Black Tree가 사용된다.</li></ul>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(log n)</td></tr>\n<tr><td><code>emplace()</code></td><td>생성 후 삽입</td><td>O(log n)</td></tr>\n<tr><td><code>erase(key)</code></td><td>Key 삭제</td><td>O(log n)</td></tr>\n<tr><td><code>find()</code></td><td>탐색</td><td>O(log n)</td></tr>\n<tr><td><code>contains()</code></td><td>존재 확인</td><td>O(log n)</td></tr>\n<tr><td><code>lower_bound()</code></td><td>값 이상인 첫 위치</td><td>O(log n)</td></tr>\n<tr><td><code>upper_bound()</code></td><td>값 초과인 첫 위치</td><td>O(log n)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><ul><li>중복 제거</li><li>정렬된 상태 유지</li><li>범위 탐색</li></ul>\n<pre><code>set&lt;int&gt; nums;\nset&lt;int, greater&lt;&gt;&gt; descNums;</code></pre>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-uset",
    "title": "Unordered Set",
    "summary": "Unordered Set의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Unordered Set",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>unordered_set</code>은 <strong>Hash Table</strong>을 이용해 중복 없는 값을 저장한다.</p>\n<ul><li>중복 X</li><li>정렬 X</li><li>평균적으로 빠른 탐색</li></ul>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>평균 / 최악</th></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>erase()</code></td><td>삭제</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>find()</code></td><td>탐색</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>contains()</code></td><td>존재 확인</td><td>O(1) / O(n)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><p>정렬이 필요하지 않고 빠른 존재 확인/검색이 중요할 때</p>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-mset",
    "title": "Multiset",
    "summary": "Multiset의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Multiset",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>multiset</code>은 <strong>중복을 허용하면서 정렬</strong>된 상태로 저장한다.</p>\n<pre><code>multiset&lt;int&gt; nums;\nnums.insert(10);\nnums.insert(10); // 10이 두 개 존재 가능</code></pre>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(log n)</td></tr>\n<tr><td><code>erase(iterator)</code></td><td>해당 원소 삭제</td><td>O(1)~</td></tr>\n<tr><td><code>erase(key)</code></td><td>해당 Key의 모든 원소 삭제</td><td>O(log n + k)</td></tr>\n<tr><td><code>count()</code></td><td>특정 값 개수</td><td>O(log n + k)</td></tr>\n<tr><td><code>lower_bound()</code></td><td>값 이상인 첫 위치</td><td>O(log n)</td></tr>\n<tr><td><code>upper_bound()</code></td><td>값 초과인 첫 위치</td><td>O(log n)</td></tr>\n<tr><td><code>equal_range()</code></td><td>같은 값의 범위</td><td>O(log n)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><p>중복을 허용하면서 정렬과 범위 탐색이 필요할 때</p>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-map",
    "title": "Map",
    "summary": "Map의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Map",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>map</code>은 <strong>Key - Value</strong> 쌍을 저장하고 Key 기준으로 정렬한다.</p>\n<ul><li>Key 중복 X</li><li>Key 기준 정렬</li><li>Key로 Value 접근</li><li>균형 트리 계열로 구현된다.</li></ul>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>map[key]</code></td><td>Key 접근. 없으면 새 원소를 삽입할 수 있음</td><td>O(log n)</td></tr>\n<tr><td><code>at(key)</code></td><td>Key 접근. 없으면 예외</td><td>O(log n)</td></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(log n)</td></tr>\n<tr><td><code>emplace()</code></td><td>생성 후 삽입</td><td>O(log n)</td></tr>\n<tr><td><code>erase(key)</code></td><td>Key 삭제</td><td>O(log n)</td></tr>\n<tr><td><code>find()</code></td><td>Key 탐색</td><td>O(log n)</td></tr>\n<tr><td><code>contains()</code></td><td>Key 존재 확인</td><td>O(log n)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><p>Key와 Value를 묶어 관리하고 Key 기준 정렬이나 탐색이 필요할 때</p>\n<pre><code>map&lt;string, int&gt; data;\ndata[\"HP\"] = 100;</code></pre>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-umap",
    "title": "Unordered Map",
    "summary": "Unordered Map의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Unordered Map",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>unordered_map</code>은 Hash Table 기반의 <strong>Key - Value</strong> 자료구조이다.</p>\n<ul><li>Key 중복 X</li><li>정렬 X</li><li>평균적으로 빠른 Key 검색</li></ul>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>평균 / 최악</th></tr>\n<tr><td><code>data[key]</code></td><td>Key 접근 / 없으면 삽입</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>erase(key)</code></td><td>삭제</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>find()</code></td><td>Key 탐색</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>contains()</code></td><td>존재 확인</td><td>O(1) / O(n)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><p>정렬이 필요하지 않고 Key 검색을 많이 하는 경우</p>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-mmap",
    "title": "Multimap",
    "summary": "Multimap의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Multimap",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>multimap</code>은 하나의 Key에 여러 Value를 저장할 수 있으며 Key 기준으로 정렬한다.</p>\n<pre><code>multimap&lt;string, int&gt; data;\ndata.insert({\"A\", 10});\ndata.insert({\"A\", 20});</code></pre>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(log n)</td></tr>\n<tr><td><code>erase(key)</code></td><td>해당 Key의 모든 원소 삭제</td><td>O(log n + k)</td></tr>\n<tr><td><code>find()</code></td><td>Key 탐색</td><td>O(log n)</td></tr>\n<tr><td><code>count()</code></td><td>Key 개수</td><td>O(log n + k)</td></tr>\n<tr><td><code>equal_range()</code></td><td>같은 Key의 범위</td><td>O(log n)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><p>하나의 Key에 여러 데이터를 연결하면서 Key 정렬이 필요할 때</p>\n<blockquote>Key와 Value를 같이 비교해 정렬하고 싶다면 <code>multiset&lt;pair&lt;...&gt;, 비교함수&gt;</code> 같은 방법도 가능하다. 다만 Key-Value 자체가 목적이라면 <code>map/multimap</code>이 보통 더 자연스럽다.</blockquote>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-stack",
    "title": "Stack",
    "summary": "Stack의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Stack",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><strong>LIFO(Last In, First Out)</strong> — 후입선출</p>\n<pre>TOP\n ↓\n[30]\n[20]\n[10]</pre>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push()</code></td><td>맨 위에 추가</td><td>O(1)</td></tr>\n<tr><td><code>emplace()</code></td><td>맨 위에서 생성/추가</td><td>O(1)</td></tr>\n<tr><td><code>pop()</code></td><td>맨 위 삭제</td><td>O(1)</td></tr>\n<tr><td><code>top()</code></td><td>맨 위 확인</td><td>O(1)</td></tr>\n<tr><td><code>empty()</code></td><td>비었는지 확인</td><td>O(1)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><ul><li>괄호 짝 검사</li><li>계산기</li><li>DFS</li><li>되돌리기 / Undo</li></ul>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-queue",
    "title": "Queue",
    "summary": "Queue의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Queue",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><strong>FIFO(First In, First Out)</strong> — 선입선출</p>\n<pre>front → [10][20][30] ← back</pre>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push()</code></td><td>뒤에 추가</td><td>O(1)</td></tr>\n<tr><td><code>emplace()</code></td><td>뒤에서 생성/추가</td><td>O(1)</td></tr>\n<tr><td><code>pop()</code></td><td>앞 삭제</td><td>O(1)</td></tr>\n<tr><td><code>front()</code></td><td>앞 확인</td><td>O(1)</td></tr>\n<tr><td><code>back()</code></td><td>뒤 확인</td><td>O(1)</td></tr>\n<tr><td><code>empty()</code></td><td>비었는지 확인</td><td>O(1)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><ul><li>BFS</li><li>대기열</li><li>먼저 들어온 작업부터 처리해야 하는 경우</li></ul>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-deque",
    "title": "Deque",
    "summary": "Deque의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Deque",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><strong>Double Ended Queue</strong> — 양쪽 끝에서 삽입/삭제할 수 있다.</p>\n<pre>앞 ↔ [10][20][30][40] ↔ 뒤</pre>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push_front()</code></td><td>앞 추가</td><td>O(1)</td></tr>\n<tr><td><code>push_back()</code></td><td>뒤 추가</td><td>O(1)</td></tr>\n<tr><td><code>pop_front()</code></td><td>앞 삭제</td><td>O(1)</td></tr>\n<tr><td><code>pop_back()</code></td><td>뒤 삭제</td><td>O(1)</td></tr>\n<tr><td><code>front()</code> / <code>back()</code></td><td>양 끝 확인</td><td>O(1)</td></tr>\n<tr><td><code>operator[]</code></td><td>인덱스 접근</td><td>O(1)</td></tr>\n</table>\n<h2>3. 장점 / 단점 / 사용하기 좋은 때</h2>\n<ul><li><strong>장점:</strong> 양쪽 끝의 삽입/삭제가 빠르고 인덱스 접근도 가능</li><li><strong>단점:</strong> vector처럼 하나의 연속된 메모리 블록에 저장된다는 보장은 없음</li><li><strong>좋은 경우:</strong> 양쪽에서 데이터를 넣고 빼는 경우, 슬라이딩 윈도우</li></ul>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-pq",
    "title": "Priority Queue / Heap",
    "summary": "Priority Queue / Heap의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Priority Queue / Heap",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p>우선순위가 높은 원소를 먼저 꺼내는 자료구조이다.</p>\n<ul><li><code>priority_queue</code>는 Heap을 사용한다.</li><li>Heap은 완전 이진 트리 형태를 유지한다.</li><li>배열 형태로 효율적으로 표현할 수 있다.</li><li>전체 원소가 정렬되어 있는 것은 아니다.</li></ul>\n<pre><code>priority_queue&lt;int&gt; maxPQ; // 기본: 큰 값 우선\n\npriority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; minPQ;\n// 작은 값 우선</code></pre>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push()</code></td><td>삽입</td><td>O(log n)</td></tr>\n<tr><td><code>emplace()</code></td><td>생성 후 삽입</td><td>O(log n)</td></tr>\n<tr><td><code>pop()</code></td><td>최상위 우선순위 삭제</td><td>O(log n)</td></tr>\n<tr><td><code>top()</code></td><td>최상위 우선순위 확인</td><td>O(1)</td></tr>\n<tr><td><code>empty()</code></td><td>비었는지 확인</td><td>O(1)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><ul><li>최소/최대값을 반복해서 꺼낼 때</li><li>Dijkstra</li><li>우선순위가 있는 작업 처리</li></ul>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-string",
    "title": "String / 파싱",
    "summary": "String / 파싱의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "String / 파싱",
        "html": "\n<h2>1. 개념</h2>\n<p><code>std::string</code>은 문자열을 저장하는 표준 컨테이너이다. 내부적으로 연속적인 문자 저장을 사용하며 인덱스로 접근할 수 있다.</p>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>대략적인 Big-O</th></tr>\n<tr><td><code>str[index]</code></td><td>문자 접근</td><td>O(1)</td></tr>\n<tr><td><code>find()</code></td><td>문자열/문자 탐색</td><td>O(n) 수준</td></tr>\n<tr><td><code>substr(pos, count)</code></td><td>부분 문자열 생성</td><td>O(count)</td></tr>\n<tr><td><code>reverse()</code></td><td>문자열 뒤집기</td><td>O(n)</td></tr>\n<tr><td><code>size()</code></td><td>문자열 길이</td><td>O(1)</td></tr>\n</table>\n<h2>3. 파싱</h2>\n<p>문자열을 원하는 단위로 나누어 데이터를 추출하는 작업이다.</p>\n<pre><code>string str = \"HP:100\";\n\nauto pos = str.find(':');\nstring key = str.substr(0, pos);\nstring value = str.substr(pos + 1);</code></pre>\n<h2>4. 뒤집기</h2>\n<pre><code>reverse(str.begin(), str.end());</code></pre>\n<blockquote><code>find()</code>는 위치를 반환하며 찾지 못하면 <code>string::npos</code>를 반환한다.</blockquote>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-algorithm",
    "title": "STL Algorithm",
    "summary": "STL Algorithm의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "STL Algorithm",
        "html": "\n<h2>1. sort</h2>\n<pre><code>sort(vec.begin(), vec.end()); // 기본 오름차순\nsort(vec.begin(), vec.end(), greater&lt;&gt;()); // 내림차순</code></pre>\n<p>일반적으로 O(n log n)이다.</p>\n<h2>2. find / reverse</h2>\n<pre><code>find(vec.begin(), vec.end(), value); // O(n)\nreverse(vec.begin(), vec.end());     // O(n)</code></pre>\n<h2>3. 컨테이너별 정렬</h2>\n<pre><code>sort(vec.begin(), vec.end()); // vector 등 Random Access Iterator가 필요한 경우\n\nlst.sort();                   // list는 자체 sort 사용</code></pre>\n<blockquote><code>list</code>는 임의 접근(Random Access)이 불가능하기 때문에 일반적인 <code>std::sort()</code>를 사용할 수 없고, 멤버 함수 <code>list::sort()</code>를 사용한다.</blockquote>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-graph",
    "title": "Graph",
    "summary": "Graph의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Graph",
        "html": "\n<h2>1. 개념</h2>\n<p>정점(Vertex)과 간선(Edge)으로 이루어진 자료구조이다.</p>\n<h2>2. Vector를 이용한 인접 리스트</h2>\n<pre><code>vector&lt;vector&lt;int&gt;&gt; graph(4);\n\ngraph[0].push_back(1);\ngraph[0].push_back(2);</code></pre>\n<p>각 정점에 연결된 다른 정점의 목록을 저장하는 방식이다.</p>\n<h2>3. 대표 알고리즘</h2>\n<table><tr><th>알고리즘</th><th>주로 사용하는 자료구조</th><th>목적</th></tr>\n<tr><td>BFS</td><td>Queue</td><td>너비 우선 탐색</td></tr>\n<tr><td>DFS</td><td>Stack / 재귀</td><td>깊이 우선 탐색</td></tr>\n<tr><td>Dijkstra</td><td>Priority Queue</td><td>한 시작점에서 최단 거리</td></tr>\n</table>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-tree",
    "title": "Tree",
    "summary": "Tree의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Tree",
        "html": "\n<h2>1. 개념</h2>\n<p>부모-자식 관계를 가지는 계층적인 자료구조이다.</p>\n<pre>        [1] Root\n       /   \\\n     [2]   [3]\n     /\n   [4] Leaf</pre>\n<h2>2. 용어</h2>\n<table><tr><th>용어</th><th>의미</th></tr>\n<tr><td>Root</td><td>가장 위의 노드</td></tr>\n<tr><td>Parent</td><td>부모 노드</td></tr>\n<tr><td>Child</td><td>자식 노드</td></tr>\n<tr><td>Leaf</td><td>자식이 없는 노드</td></tr>\n<tr><td>Edge</td><td>노드와 노드를 연결하는 간선</td></tr>\n</table>\n<h2>3. 종류</h2><ul><li>Binary Tree</li><li>Binary Search Tree</li><li>Heap</li></ul>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-stl",
    "title": "STL이란?",
    "summary": "STL이란?의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "STL이란?",
        "html": "\n<h2>1. 핵심 구성</h2>\n<table><tr><th>구성</th><th>역할</th><th>예시</th></tr>\n<tr><td>Container</td><td>데이터 저장</td><td>vector, list, set, map</td></tr>\n<tr><td>Iterator</td><td>컨테이너의 원소를 가리키고 이동</td><td>begin(), end()</td></tr>\n<tr><td>Algorithm</td><td>정렬/탐색/변경 등의 작업</td><td>sort(), find(), reverse()</td></tr>\n</table>\n<pre><code>vector&lt;int&gt; vec = {3, 1, 2};\nsort(vec.begin(), vec.end());</code></pre>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-bigo",
    "title": "Big-O 표기법",
    "summary": "Big-O 표기법의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Big-O 표기법",
        "html": "\n<h2>1. 개념</h2>\n<p>입력 크기 <code>n</code>이 커질 때 알고리즘의 실행 시간이나 필요한 공간이 어떻게 증가하는지를 나타내는 표기법이다.</p>\n<table><tr><th>표기</th><th>의미</th><th>예시</th></tr>\n<tr><td>O(1)</td><td>입력 크기와 관계없이 일정</td><td>vector 인덱스 접근, stack top</td></tr>\n<tr><td>O(log n)</td><td>범위를 줄여가며 처리</td><td>set/map 탐색</td></tr>\n<tr><td>O(n)</td><td>데이터 수에 비례</td><td>순차 탐색</td></tr>\n<tr><td>O(n log n)</td><td>효율적인 정렬에서 자주 등장</td><td>sort()</td></tr>\n<tr><td>O(n²)</td><td>데이터 수의 제곱에 비례</td><td>중첩 반복문</td></tr>\n</table>\n<blockquote>Big-O는 실제 시간이 몇 초인지가 아니라, 입력 크기가 증가할 때 성능이 증가하는 정도를 표현한다.</blockquote>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-choice",
    "title": "자료구조 선택 기준",
    "summary": "자료구조 선택 기준의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "자료구조 선택 기준",
        "html": "\n<table><tr><th>필요한 상황</th><th>추천 자료구조</th><th>이유</th></tr>\n<tr><td>인덱스 접근</td><td>vector</td><td>임의 접근 O(1)</td></tr>\n<tr><td>끝에서 추가/삭제</td><td>vector</td><td>평균 O(1)</td></tr>\n<tr><td>양쪽 끝에서 추가/삭제</td><td>deque</td><td>양쪽 O(1)</td></tr>\n<tr><td>중간 삽입/삭제 + 위치 iterator 보유</td><td>list</td><td>연결 변경으로 처리</td></tr>\n<tr><td>중복 없는 정렬 데이터</td><td>set</td><td>정렬 + 중복 X</td></tr>\n<tr><td>중복 없는 빠른 검색</td><td>unordered_set</td><td>Hash Table 평균 O(1)</td></tr>\n<tr><td>Key-Value + 정렬</td><td>map</td><td>Key 기준 정렬</td></tr>\n<tr><td>Key-Value + 빠른 검색</td><td>unordered_map</td><td>Hash Table 평균 O(1)</td></tr>\n<tr><td>Key 중복 + 정렬</td><td>multimap</td><td>같은 Key 여러 개 가능</td></tr>\n<tr><td>후입선출</td><td>stack</td><td>LIFO</td></tr>\n<tr><td>선입선출</td><td>queue</td><td>FIFO</td></tr>\n<tr><td>최소/최대 우선 처리</td><td>priority_queue</td><td>Heap</td></tr>\n</table>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "concept-unreal",
    "title": "Unreal Engine 자료구조",
    "summary": "Unreal Engine 자료구조의 개념과 원본 정리의 설명·예제를 살펴봅니다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Unreal Engine 자료구조",
        "html": "\n<table><tr><th>C++ STL</th><th>Unreal</th><th>기본 용도</th></tr>\n<tr><td><code>vector</code></td><td><code>TArray</code></td><td>동적 배열</td></tr>\n<tr><td><code>map</code></td><td><code>TMap</code></td><td>Key - Value</td></tr>\n<tr><td><code>set</code></td><td><code>TSet</code></td><td>중복 없는 집합</td></tr>\n</table>\n<blockquote>Unreal의 컨테이너는 STL과 내부 구현이 완전히 같은 것은 아니지만, 기본적인 용도를 비교하면 이해하기 쉽다.</blockquote>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001",
      "note-tem-015"
    ]
  },
  {
    "id": "velog-20260706-001",
    "title": "C 배열과 포인터",
    "summary": "C 언어의 배열과 배열의 주소 관계, 함수, 포인터를 학습했다.",
    "kind": "velog",
    "topic": "memory",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.6",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "다루는 개념",
        "text": "C 언어의 배열과 배열의 주소 관계, 함수, 포인터를 학습했다. C++의 cin, cout, getline도 함께 학습했다."
      },
      {
        "title": "개념을 확인할 질문",
        "items": [
          "포인터는 왜 필요한가?"
        ]
      }
    ],
    "related_ids": [
      "20260706-001"
    ],
    "notice": "구현 과정과 회고는 관련 실습 기록에 남기고 개념 부분만 발췌했습니다. 기존 저장 내용을 사용했으며 원문 전체를 이번에 재검증하지 않았습니다."
  },
  {
    "id": "velog-20260709-001",
    "title": "클래스와 객체지향 기초",
    "summary": "C++의 클래스와 접근 제어자, getter/setter, 생성자, 객체 생성 방법을 학습했다.",
    "kind": "velog",
    "topic": "oop",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.9",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "다루는 개념",
        "text": "C++의 클래스와 접근 제어자, getter/setter, 생성자, 객체 생성 방법을 학습했다."
      },
      {
        "title": "개념을 확인할 질문",
        "items": [
          "객체지향과 클래스가 왜 필요한가?"
        ]
      }
    ],
    "related_ids": [
      "20260709-001"
    ],
    "notice": "구현 과정과 회고는 관련 실습 기록에 남기고 개념 부분만 발췌했습니다. 기존 저장 내용을 사용했으며 원문 전체를 이번에 재검증하지 않았습니다."
  },
  {
    "id": "velog-20260710-001",
    "title": "스택·힙과 동적 메모리",
    "summary": "스택과 힙의 차이, new/delete, 댕글링 포인터, 메모리 누수, 스마트 포인터, 얕은 복사와 깊은 복사를 학습했다.",
    "kind": "velog",
    "topic": "memory",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.10",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "다루는 개념",
        "text": "스택과 힙의 차이, new/delete, 댕글링 포인터, 메모리 누수, 스마트 포인터, 얕은 복사와 깊은 복사를 학습했다."
      },
      {
        "title": "개념을 확인할 질문",
        "items": [
          "스마트 포인터는 왜 필요한가?",
          "얕은 복사와 깊은 복사는 무엇이 다른가?"
        ]
      }
    ],
    "related_ids": [
      "20260710-001"
    ],
    "notice": "구현 과정과 회고는 관련 실습 기록에 남기고 개념 부분만 발췌했습니다. 기존 저장 내용을 사용했으며 원문 전체를 이번에 재검증하지 않았습니다."
  },
  {
    "id": "velog-20260712-001",
    "title": "함수 오버로딩과 타입 변환",
    "summary": "함수 오버로딩과 타입 변환의 종류를 학습했다.",
    "kind": "velog",
    "topic": "oop",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.13",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "다루는 개념",
        "text": "함수 오버로딩과 타입 변환의 종류를 학습했다. 정확한 타입 일치, 타입 승격, 표준 변환, 사용자 정의 변환을 정리하고 함수 템플릿을 접했다."
      },
      {
        "title": "개념을 확인할 질문",
        "items": [
          "int에서 double로 변환될 때 왜 특정 변환 분류에 들어가지 않는가?"
        ]
      }
    ],
    "related_ids": [
      "20260712-001"
    ],
    "notice": "구현 과정과 회고는 관련 실습 기록에 남기고 개념 부분만 발췌했습니다. 기존 저장 내용을 사용했으며 원문 전체를 이번에 재검증하지 않았습니다."
  },
  {
    "id": "velog-20260716-001",
    "title": "함수 템플릿과 템플릿 클래스",
    "summary": "함수 템플릿과 템플릿 클래스를 학습했다.",
    "kind": "velog",
    "topic": "oop",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.16-gndjynps",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "다루는 개념",
        "text": "함수 템플릿과 템플릿 클래스를 학습했다. 하나의 함수나 클래스가 여러 자료형에서 동작하도록 만드는 방법을 접했다."
      },
      {
        "title": "문법·코드 키워드",
        "text": "template <typename T> void printarr(); / template <typename T> void swapValuse(T& a, T& b); / template <typename T> class Array"
      },
      {
        "title": "개념을 확인할 질문",
        "items": [
          "auto와 템플릿은 어떤 차이가 있는가?",
          "템플릿을 사용할 때 왜 자료형을 지정해야 하는가?"
        ]
      }
    ],
    "related_ids": [
      "20260716-001"
    ],
    "notice": "구현 과정과 회고는 관련 실습 기록에 남기고 개념 부분만 발췌했습니다. 기존 저장 내용을 사용했으며 원문 전체를 이번에 재검증하지 않았습니다."
  },
  {
    "id": "velog-20260717-001",
    "title": "STL과 vector 기초",
    "summary": "STL의 기본적인 구조와 컨테이너, 알고리즘, 반복자의 개념을 접했다.",
    "kind": "velog",
    "topic": "stl",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.17",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "다루는 개념",
        "text": "STL의 기본적인 구조와 컨테이너, 알고리즘, 반복자의 개념을 접했다. vector의 동적 크기, 인덱스 접근, push_back, pop_back, size, erase 등을 학습했고 2차원 vector와 map의 기본 개념도 접했다."
      }
    ],
    "related_ids": [
      "20260717-001"
    ],
    "notice": "구현 과정과 회고는 관련 실습 기록에 남기고 개념 부분만 발췌했습니다. 기존 저장 내용을 사용했으며 원문 전체를 이번에 재검증하지 않았습니다."
  },
  {
    "id": "velog-20260727-001",
    "title": "STL vector와 map 복습",
    "summary": "STL의 기본적인 사용법을 다시 복습했다.",
    "kind": "velog",
    "topic": "stl",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.27",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "다루는 개념",
        "text": "STL의 기본적인 사용법을 다시 복습했다. vector와 2차원 vector, map의 기본적인 사용법을 다시 확인했다."
      }
    ],
    "related_ids": [
      "20260727-001"
    ],
    "notice": "구현 과정과 회고는 관련 실습 기록에 남기고 개념 부분만 발췌했습니다. 기존 저장 내용을 사용했으며 원문 전체를 이번에 재검증하지 않았습니다."
  },
  {
    "id": "velog-20260728-001",
    "title": "map과 auto, range-for",
    "summary": "map의 세부적인 사용법을 학습했다.",
    "kind": "velog",
    "topic": "stl",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.28",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "다루는 개념",
        "text": "map의 세부적인 사용법을 학습했다. key 기준 정렬, auto, range-for, insert, make_pair, first, second 등을 사용했다."
      },
      {
        "title": "문법·코드 키워드",
        "text": "insert / make_pair / first / second / range-for / auto"
      }
    ],
    "related_ids": [
      "20260728-001"
    ],
    "notice": "구현 과정과 회고는 관련 실습 기록에 남기고 개념 부분만 발췌했습니다. 기존 저장 내용을 사용했으며 원문 전체를 이번에 재검증하지 않았습니다."
  },
  {
    "id": "velog-20260810-001",
    "title": "Unreal C++ AItem 헤더 구조",
    "summary": "AItem 헤더의 선언, 컴포넌트 구성, Actor 생명주기 함수를 정리했다.",
    "kind": "velog",
    "topic": "unreal",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/Unreal-C",
    "status": "원문 확인 · 핵심 재구성",
    "sections": [
      {
        "title": "다루는 개념",
        "text": "Unreal Engine C++에서 AItem 클래스를 만들며 헤더 파일이 클래스의 변수와 함수를 선언하는 역할을 한다는 점을 정리했다. AItem은 AActor를 상속하고, SceneRoot와 StaticMeshComp를 컴포넌트로 선언했다."
      }
    ],
    "related_ids": [
      "20260810-001"
    ],
    "notice": "구현 과정과 회고는 관련 실습 기록에 남기고 개념 부분만 발췌했습니다. Velog 원문을 확인해 기존 정리와 대조했습니다."
  },
  {
    "id": "file-note-tem-014",
    "title": "Unreal 수업 노트 · 빌드와 리플렉션의 연결",
    "summary": "UBT·UHT·매크로·GC 수업 메모의 학습 범위와 남은 질문을 구분합니다.",
    "kind": "note",
    "topic": "unreal",
    "project": null,
    "source_name": "CH3 첫 라이브 정리.txt / CH3 분반수업.txt",
    "status": "정리 중인 노트 · 확정 개념과 구분",
    "notice": "원본의 질문과 설계 고민을 보존한 재구성입니다. 완료된 기능이나 검증된 개념 사전으로 읽지 않습니다.",
    "sections": [
      {
        "title": "메모에 남긴 학습 범위",
        "text": "폴더·include 경로와 Build.cs, 매크로, UHT, 리플렉션, GC와 UPROPERTY의 관계를 라이브 학습 메모로 남겼다. 분반수업 메모에는 프로퍼티 지정자, 참조 추적, 포인터 유효성과 스마트 포인터에 관한 질문이 이어진다."
      },
      {
        "title": "생각을 정리한 과정",
        "text": "매크로와 함수의 동작 시점, 리플렉션의 의미와 참조 추적을 이해하려 했으며 일부 설명에 물음표와 이해 확인 질문이 남아 있다. 프로퍼티 지정자가 에디터 노출과 GC 참조 추적에 관여하는 흐름을 정리했다. 리플렉션에 등록되지 않은 포인터와 IsValid의 관계, 스마트 포인터의 유효성 확인에 대한 설명도 기록했다."
      },
      {
        "title": "아직 확인할 내용",
        "items": [
          "날짜 확인",
          "원문의 부정확하거나 단순화된 표현을 현재 개념 정리의 정답으로 옮기지 않음",
          "수업 날짜 확인",
          "스마트 포인터 종류가 특정되지 않아 참조 유지·유효성·GC 설명을 현재 개념 정리에 쓰기 전 검증 필요",
          "IsValid에 대한 원문 설명을 포인터 전반에 일반화하지 않음",
          "CDO 개념을 배웠다고 용어 목록만으로 확장하지 않음"
        ]
      }
    ],
    "related_ids": [
      "note-tem-014"
    ]
  },
  {
    "id": "file-continue",
    "title": "C++ 실습 노트 · continue와 주석",
    "summary": "직접 작성한 반복문 예제와 문서화 주석 메모를 분리해 읽습니다.",
    "kind": "note",
    "topic": "cpp",
    "source_name": "26.08.24.txt",
    "status": "원본 예제 보존 · 질문 별도 표시",
    "sections": [
      {
        "title": "실습의 목적",
        "text": "continue를 검색한 뒤, 반복문 안에서 출력 흐름이 달라지는지 직접 코드를 작성해 확인하려고 한 기록입니다."
      },
      {
        "title": "직접 작성한 예제",
        "code": "int main()\r\n{\r\n\tfor (int i = 0; i < 10; i++)\r\n\t{\r\n\t\tstd::cout << \"강아지\\n\";\r\n\t\tif (i % 2 == 0)\r\n\t\t{\r\n\t\t\tstd::cout << i <<std::endl;\r\n\t\t\tcontinue;\r\n\t\t}\r\n\t\tstd::cout << \"고양이\\n\";\r\n\t}\r\n}"
      },
      {
        "title": "예제에서 다시 볼 지점",
        "text": "짝수 조건을 만났을 때 continue 다음의 출력문에 도달하는지, 다음 반복에서는 어떤 출력부터 다시 시작하는지 순서대로 추적합니다."
      },
      {
        "title": "주석 메모",
        "text": "원본에는 //, /* */와 /// 형태를 비교하고 @param 및 XML 형태의 문서화 주석을 기록했습니다. 도구별 문서 추출과 표시 방식에 관한 설명은 별도 확인이 필요한 메모로 남깁니다."
      }
    ],
    "related_ids": [
      "20260618-001",
      "20260619-001",
      "20260622-001"
    ]
  }
];
