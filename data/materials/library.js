window.TIL_LIBRARY = [
  {
    "id": "stl-foundation",
    "title": "자료구조의 기본 · 저장 방식 · STL",
    "summary": "데이터를 저장하는 방식과 STL의 컨테이너, 반복자, 알고리즘.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "자료구조",
        "html": "\n<h2>1. 개념</h2>\n<p>자료구조는 데이터를 <strong>저장, 삽입, 삭제, 접근, 탐색</strong> 등 효율적으로 관리하기 위한 방법이다.</p>\n\n"
      },
      {
        "title": "메모리에서의 저장",
        "html": "\n<h2>1. 연속적인 저장</h2>\n<p>데이터를 서로 붙어 있는 연속된 메모리 공간에 저장한다.</p>\n<pre>[10][20][30][40]</pre>\n<p>예: 배열, <code>vector</code></p>\n<h2>2. 불연속적인 저장</h2>\n<p>데이터가 메모리상에서 서로 붙어 있지 않아도 되며, 노드와 포인터 등을 이용해 연결한다.</p>\n<pre>[10] → [20] → [30]</pre>\n<p>예: <code>list</code>, 연결 기반 Tree</p>\n<blockquote>연속적인 저장과 인덱스 접근 가능 여부는 같은 개념이 아니다. 저장 방식과 접근 방식을 구분해서 생각한다.</blockquote>\n\n"
      },
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
      }
    ]
  },
  {
    "id": "stl-sequence",
    "title": "vector / list / deque",
    "summary": "vector, list, deque에서 값을 읽고 추가하거나 지우는 방법.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Vector",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>vector</code>는 크기를 변화시켜가며 사용할 수 있는 <strong>동적 배열</strong>이다.</p>\n<ul><li>원소가 연속적인 메모리에 저장된다.</li><li>인덱스로 임의 접근할 수 있다.</li><li>끝에 원소를 추가할 때 평균적으로 O(1)이다.</li><li><code>capacity</code>가 부족하면 더 큰 공간을 확보하고 기존 원소를 이동할 수 있다.</li></ul>\n<h2>2. size / capacity</h2>\n<pre><code>vector&lt;int&gt; vec;\n\nvec.size();       // 현재 원소 개수\nvec.capacity();   // 현재 확보된 공간\nvec.reserve(100); // capacity를 미리 확보</code></pre>\n<table><tr><th>개념</th><th>의미</th></tr>\n<tr><td><code>size</code></td><td>현재 들어 있는 원소의 개수</td></tr>\n<tr><td><code>capacity</code></td><td>현재 확보된 저장 공간의 크기</td></tr>\n<tr><td><code>reserve(n)</code></td><td>capacity를 최소 n까지 확보. size는 변하지 않음</td></tr>\n</table>\n<h2>3. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push_back()</code></td><td>뒤에 추가</td><td>평균 O(1), 재할당 시 O(n)</td></tr>\n<tr><td><code>emplace_back()</code></td><td>뒤에서 객체를 생성하며 추가</td><td>평균 O(1), 재할당 시 O(n)</td></tr>\n<tr><td><code>pop_back()</code></td><td>마지막 원소 삭제</td><td>O(1)</td></tr>\n<tr><td><code>insert()</code></td><td>특정 위치에 삽입</td><td>O(n)</td></tr>\n<tr><td><code>erase()</code></td><td>특정 위치 삭제</td><td>O(n)</td></tr>\n<tr><td><code>operator[]</code></td><td>인덱스로 접근</td><td>O(1)</td></tr>\n<tr><td><code>at()</code></td><td>인덱스로 접근 + 범위 검사</td><td>O(1)</td></tr>\n<tr><td><code>empty()</code></td><td>비었는지 확인</td><td>O(1)</td></tr>\n<tr><td><code>clear()</code></td><td>모든 원소 삭제</td><td>O(n)</td></tr>\n<tr><td><code>size()</code></td><td>원소 개수</td><td>O(1)</td></tr>\n</table>\n<h2>4. 장점 / 단점 / 사용하기 좋은 때</h2>\n<ul><li><strong>장점:</strong> 인덱스 접근이 빠르고 캐시 효율이 좋다.</li><li><strong>단점:</strong> 중간 삽입/삭제 시 뒤 원소를 이동해야 한다.</li><li><strong>좋은 경우:</strong> 인덱스 접근이 필요하거나 끝에서 추가/삭제가 많은 경우</li></ul>\n<h2>5. 탐색 / 뒤집기</h2>\n<pre><code>find(vec.begin(), vec.end(), value); // 순차 탐색\nreverse(vec.begin(), vec.end());     // 뒤집기</code></pre>\n<p><code>find()</code>는 O(n), <code>reverse()</code>는 O(n)이다.</p>\n<h2>6. 알고리즘 예시: 그래프</h2>\n<pre><code>vector&lt;vector&lt;int&gt;&gt; graph(4);\n\ngraph[0].push_back(1);\ngraph[0].push_back(2);</code></pre>\n<p>0번 정점에서 1번과 2번 정점으로 연결된 것을 인접 리스트로 표현한 것이다.</p>\n<blockquote><code>{1, 2}</code>는 주소가 아니라 <strong>연결된 정점의 번호</strong>를 저장한 것이다.</blockquote>\n\n"
      },
      {
        "title": "List",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>list</code>는 일반적으로 <strong>양방향 연결 리스트</strong>이다.</p>\n<pre>[10] ⇄ [20] ⇄ [30]</pre>\n<ul><li>노드가 메모리상 연속되어 있을 필요가 없다.</li><li>각 노드는 앞/뒤 노드와 연결된다.</li><li>인덱스 임의 접근이 불가능하다.</li><li>위치를 가리키는 iterator를 이미 가지고 있다면 삽입/삭제가 효율적이다.</li></ul>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push_back()</code></td><td>뒤 추가</td><td>O(1)</td></tr>\n<tr><td><code>push_front()</code></td><td>앞 추가</td><td>O(1)</td></tr>\n<tr><td><code>pop_back()</code></td><td>뒤 삭제</td><td>O(1)</td></tr>\n<tr><td><code>pop_front()</code></td><td>앞 삭제</td><td>O(1)</td></tr>\n<tr><td><code>insert(it)</code></td><td>iterator 위치에 삽입</td><td>O(1)*</td></tr>\n<tr><td><code>erase(it)</code></td><td>iterator 위치 삭제</td><td>O(1)*</td></tr>\n<tr><td><code>remove(value)</code></td><td>값을 찾아 삭제</td><td>O(n)</td></tr>\n<tr><td><code>find()</code></td><td>순차 탐색</td><td>O(n)</td></tr>\n<tr><td><code>reverse()</code></td><td>뒤집기</td><td>O(n)</td></tr>\n<tr><td><code>sort()</code></td><td>리스트 자체 정렬</td><td>O(n log n)</td></tr>\n</table>\n<p class=\"small\">* 해당 위치의 iterator를 이미 알고 있는 경우. 위치를 찾는 과정은 별도로 O(n)이 걸릴 수 있다.</p>\n<h2>3. 사용하기 좋은 때</h2><p>중간 삽입/삭제가 많고 해당 위치를 iterator로 관리할 수 있으며 인덱스 접근이 중요하지 않을 때</p>\n\n"
      },
      {
        "title": "Forward List",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>forward_list</code>는 <strong>단방향 연결 리스트</strong>이다.</p>\n<pre>[10] → [20] → [30]</pre>\n<ul><li>다음 노드 방향으로만 이동한다.</li><li><code>list</code>보다 구조가 단순하다.</li><li>인덱스 접근이 불가능하다.</li></ul>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push_front()</code></td><td>앞 추가</td><td>O(1)</td></tr>\n<tr><td><code>pop_front()</code></td><td>앞 삭제</td><td>O(1)</td></tr>\n<tr><td><code>insert_after()</code></td><td>iterator 뒤에 삽입</td><td>O(1)*</td></tr>\n<tr><td><code>erase_after()</code></td><td>iterator 뒤 원소 삭제</td><td>O(1)*</td></tr>\n<tr><td><code>remove()</code></td><td>값으로 삭제</td><td>O(n)</td></tr>\n<tr><td><code>reverse()</code></td><td>뒤집기</td><td>O(n)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><p>양방향 이동이 필요 없고 앞쪽 또는 특정 노드 뒤에서 삽입/삭제하는 경우</p>\n\n"
      },
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
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "관련 Velog · STL vector와 map 복습",
        "url": "https://velog.io/@jwh4410/7.27"
      }
    ]
  },
  {
    "id": "stl-associative",
    "title": "set / map · 중복과 정렬",
    "summary": "set과 map의 중복 처리, 정렬 순서, key로 값 찾기.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Set",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>set</code>은 <strong>중복 없는 값</strong>을 정렬된 상태로 저장한다.</p>\n<ul><li>중복 X</li><li>요소 자체가 Key 역할</li><li>기본적으로 오름차순</li><li>표준에서는 균형 잡힌 트리 계열로 동작하며 대표적으로 Red-Black Tree가 사용된다.</li></ul>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(log n)</td></tr>\n<tr><td><code>emplace()</code></td><td>생성 후 삽입</td><td>O(log n)</td></tr>\n<tr><td><code>erase(key)</code></td><td>Key 삭제</td><td>O(log n)</td></tr>\n<tr><td><code>find()</code></td><td>탐색</td><td>O(log n)</td></tr>\n<tr><td><code>contains()</code></td><td>존재 확인</td><td>O(log n)</td></tr>\n<tr><td><code>lower_bound()</code></td><td>값 이상인 첫 위치</td><td>O(log n)</td></tr>\n<tr><td><code>upper_bound()</code></td><td>값 초과인 첫 위치</td><td>O(log n)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><ul><li>중복 제거</li><li>정렬된 상태 유지</li><li>범위 탐색</li></ul>\n<pre><code>set&lt;int&gt; nums;\nset&lt;int, greater&lt;&gt;&gt; descNums;</code></pre>\n\n"
      },
      {
        "title": "Unordered Set",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>unordered_set</code>은 <strong>Hash Table</strong>을 이용해 중복 없는 값을 저장한다.</p>\n<ul><li>중복 X</li><li>정렬 X</li><li>평균적으로 빠른 탐색</li></ul>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>평균 / 최악</th></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>erase()</code></td><td>삭제</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>find()</code></td><td>탐색</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>contains()</code></td><td>존재 확인</td><td>O(1) / O(n)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><p>정렬이 필요하지 않고 빠른 존재 확인/검색이 중요할 때</p>\n\n"
      },
      {
        "title": "Multiset",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>multiset</code>은 <strong>중복을 허용하면서 정렬</strong>된 상태로 저장한다.</p>\n<pre><code>multiset&lt;int&gt; nums;\nnums.insert(10);\nnums.insert(10); // 10이 두 개 존재 가능</code></pre>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(log n)</td></tr>\n<tr><td><code>erase(iterator)</code></td><td>해당 원소 삭제</td><td>O(1)~</td></tr>\n<tr><td><code>erase(key)</code></td><td>해당 Key의 모든 원소 삭제</td><td>O(log n + k)</td></tr>\n<tr><td><code>count()</code></td><td>특정 값 개수</td><td>O(log n + k)</td></tr>\n<tr><td><code>lower_bound()</code></td><td>값 이상인 첫 위치</td><td>O(log n)</td></tr>\n<tr><td><code>upper_bound()</code></td><td>값 초과인 첫 위치</td><td>O(log n)</td></tr>\n<tr><td><code>equal_range()</code></td><td>같은 값의 범위</td><td>O(log n)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><p>중복을 허용하면서 정렬과 범위 탐색이 필요할 때</p>\n\n"
      },
      {
        "title": "Map",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>map</code>은 <strong>Key - Value</strong> 쌍을 저장하고 Key 기준으로 정렬한다.</p>\n<ul><li>Key 중복 X</li><li>Key 기준 정렬</li><li>Key로 Value 접근</li><li>균형 트리 계열로 구현된다.</li></ul>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>map[key]</code></td><td>Key 접근. 없으면 새 원소를 삽입할 수 있음</td><td>O(log n)</td></tr>\n<tr><td><code>at(key)</code></td><td>Key 접근. 없으면 예외</td><td>O(log n)</td></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(log n)</td></tr>\n<tr><td><code>emplace()</code></td><td>생성 후 삽입</td><td>O(log n)</td></tr>\n<tr><td><code>erase(key)</code></td><td>Key 삭제</td><td>O(log n)</td></tr>\n<tr><td><code>find()</code></td><td>Key 탐색</td><td>O(log n)</td></tr>\n<tr><td><code>contains()</code></td><td>Key 존재 확인</td><td>O(log n)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><p>Key와 Value를 묶어 관리하고 Key 기준 정렬이나 탐색이 필요할 때</p>\n<pre><code>map&lt;string, int&gt; data;\ndata[\"HP\"] = 100;</code></pre>\n\n"
      },
      {
        "title": "Unordered Map",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><code>unordered_map</code>은 Hash Table 기반의 <strong>Key - Value</strong> 자료구조이다.</p>\n<ul><li>Key 중복 X</li><li>정렬 X</li><li>평균적으로 빠른 Key 검색</li></ul>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>평균 / 최악</th></tr>\n<tr><td><code>data[key]</code></td><td>Key 접근 / 없으면 삽입</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>insert()</code></td><td>삽입</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>erase(key)</code></td><td>삭제</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>find()</code></td><td>Key 탐색</td><td>O(1) / O(n)</td></tr>\n<tr><td><code>contains()</code></td><td>존재 확인</td><td>O(1) / O(n)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><p>정렬이 필요하지 않고 Key 검색을 많이 하는 경우</p>\n\n"
      },
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
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "관련 Velog · STL vector와 map 복습",
        "url": "https://velog.io/@jwh4410/7.27"
      },
      {
        "label": "관련 Velog · map과 auto, range-for",
        "url": "https://velog.io/@jwh4410/7.28"
      }
    ]
  },
  {
    "id": "stl-adaptor",
    "title": "stack / queue / priority_queue",
    "summary": "stack은 마지막 값부터, queue는 처음 값부터 꺼낸다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Stack",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><strong>LIFO(Last In, First Out)</strong> — 후입선출</p>\n<pre>TOP\n ↓\n[30]\n[20]\n[10]</pre>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push()</code></td><td>맨 위에 추가</td><td>O(1)</td></tr>\n<tr><td><code>emplace()</code></td><td>맨 위에서 생성/추가</td><td>O(1)</td></tr>\n<tr><td><code>pop()</code></td><td>맨 위 삭제</td><td>O(1)</td></tr>\n<tr><td><code>top()</code></td><td>맨 위 확인</td><td>O(1)</td></tr>\n<tr><td><code>empty()</code></td><td>비었는지 확인</td><td>O(1)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><ul><li>괄호 짝 검사</li><li>계산기</li><li>DFS</li><li>되돌리기 / Undo</li></ul>\n\n"
      },
      {
        "title": "Queue",
        "html": "\n<h2>1. 개념 / 구조</h2>\n<p><strong>FIFO(First In, First Out)</strong> — 선입선출</p>\n<pre>front → [10][20][30] ← back</pre>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push()</code></td><td>뒤에 추가</td><td>O(1)</td></tr>\n<tr><td><code>emplace()</code></td><td>뒤에서 생성/추가</td><td>O(1)</td></tr>\n<tr><td><code>pop()</code></td><td>앞 삭제</td><td>O(1)</td></tr>\n<tr><td><code>front()</code></td><td>앞 확인</td><td>O(1)</td></tr>\n<tr><td><code>back()</code></td><td>뒤 확인</td><td>O(1)</td></tr>\n<tr><td><code>empty()</code></td><td>비었는지 확인</td><td>O(1)</td></tr>\n</table>\n<h2>3. 사용하기 좋은 때</h2><ul><li>BFS</li><li>대기열</li><li>먼저 들어온 작업부터 처리해야 하는 경우</li></ul>\n\n"
      },
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
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference"
  },
  {
    "id": "stl-algorithm",
    "title": "문자열 · 알고리즘 · 그래프 · 트리",
    "summary": "문자열 나누기, 정렬과 탐색, 그래프와 트리 메모.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "String / 파싱",
        "html": "\n<h2>1. 개념</h2>\n<p><code>std::string</code>은 문자열을 저장하는 표준 컨테이너이다. 내부적으로 연속적인 문자 저장을 사용하며 인덱스로 접근할 수 있다.</p>\n<h2>2. 주요 명령어 + Big-O</h2>\n<table><tr><th>명령어</th><th>기능</th><th>대략적인 Big-O</th></tr>\n<tr><td><code>str[index]</code></td><td>문자 접근</td><td>O(1)</td></tr>\n<tr><td><code>find()</code></td><td>문자열/문자 탐색</td><td>O(n) 수준</td></tr>\n<tr><td><code>substr(pos, count)</code></td><td>부분 문자열 생성</td><td>O(count)</td></tr>\n<tr><td><code>reverse()</code></td><td>문자열 뒤집기</td><td>O(n)</td></tr>\n<tr><td><code>size()</code></td><td>문자열 길이</td><td>O(1)</td></tr>\n</table>\n<h2>3. 파싱</h2>\n<p>문자열을 원하는 단위로 나누어 데이터를 추출하는 작업이다.</p>\n<pre><code>string str = \"HP:100\";\n\nauto pos = str.find(':');\nstring key = str.substr(0, pos);\nstring value = str.substr(pos + 1);</code></pre>\n<h2>4. 뒤집기</h2>\n<pre><code>reverse(str.begin(), str.end());</code></pre>\n<blockquote><code>find()</code>는 위치를 반환하며 찾지 못하면 <code>string::npos</code>를 반환한다.</blockquote>\n\n"
      },
      {
        "title": "STL Algorithm",
        "html": "\n<h2>1. sort</h2>\n<pre><code>sort(vec.begin(), vec.end()); // 기본 오름차순\nsort(vec.begin(), vec.end(), greater&lt;&gt;()); // 내림차순</code></pre>\n<p>일반적으로 O(n log n)이다.</p>\n<h2>2. find / reverse</h2>\n<pre><code>find(vec.begin(), vec.end(), value); // O(n)\nreverse(vec.begin(), vec.end());     // O(n)</code></pre>\n<h2>3. 컨테이너별 정렬</h2>\n<pre><code>sort(vec.begin(), vec.end()); // vector 등 Random Access Iterator가 필요한 경우\n\nlst.sort();                   // list는 자체 sort 사용</code></pre>\n<blockquote><code>list</code>는 임의 접근(Random Access)이 불가능하기 때문에 일반적인 <code>std::sort()</code>를 사용할 수 없고, 멤버 함수 <code>list::sort()</code>를 사용한다.</blockquote>\n\n"
      },
      {
        "title": "Graph",
        "html": "\n<h2>1. 개념</h2>\n<p>정점(Vertex)과 간선(Edge)으로 이루어진 자료구조이다.</p>\n<h2>2. Vector를 이용한 인접 리스트</h2>\n<pre><code>vector&lt;vector&lt;int&gt;&gt; graph(4);\n\ngraph[0].push_back(1);\ngraph[0].push_back(2);</code></pre>\n<p>각 정점에 연결된 다른 정점의 목록을 저장하는 방식이다.</p>\n<h2>3. 대표 알고리즘</h2>\n<table><tr><th>알고리즘</th><th>주로 사용하는 자료구조</th><th>목적</th></tr>\n<tr><td>BFS</td><td>Queue</td><td>너비 우선 탐색</td></tr>\n<tr><td>DFS</td><td>Stack / 재귀</td><td>깊이 우선 탐색</td></tr>\n<tr><td>Dijkstra</td><td>Priority Queue</td><td>한 시작점에서 최단 거리</td></tr>\n</table>\n\n"
      },
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
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference"
  },
  {
    "id": "stl-selection",
    "title": "자료구조 선택 기준",
    "summary": "인덱스로 읽을지, 중간에서 지울지에 따라 골라보기.",
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
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference"
  },
  {
    "id": "concept-bigo",
    "title": "Big-O · 시간 복잡도",
    "summary": "데이터가 많아질 때 처리할 일이 얼마나 늘어나는지.",
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
    ],
    "topics": [
      "ds"
    ],
    "publication": "reference"
  },
  {
    "id": "unreal-containers",
    "title": "Unreal 자료구조 · TArray / TMap / TSet",
    "summary": "TArray, TMap, TSet의 용도와 기본 예제. 아직 실행 전인 초안.",
    "kind": "file",
    "topic": "unreal",
    "status": "게시 준비 초안 · 예제 실행 확인 필요",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Unreal Engine 자료구조",
        "html": "\n<table><tr><th>C++ STL</th><th>Unreal</th><th>기본 용도</th></tr>\n<tr><td><code>vector</code></td><td><code>TArray</code></td><td>동적 배열</td></tr>\n<tr><td><code>map</code></td><td><code>TMap</code></td><td>Key - Value</td></tr>\n<tr><td><code>set</code></td><td><code>TSet</code></td><td>중복 없는 집합</td></tr>\n</table>\n<blockquote>Unreal의 컨테이너는 STL과 내부 구현이 완전히 같은 것은 아니지만, 기본적인 용도를 비교하면 이해하기 쉽다.</blockquote>\n\n"
      },
      {
        "title": "STL과 비교하기",
        "text": "TArray는 같은 타입의 값 목록, TMap은 key와 value, TSet은 중복 없는 값을 담는다. vector, map, set과 용도는 비교할 수 있지만 정렬 순서나 내부 구조까지 같은 것은 아니다."
      },
      {
        "title": "기본 문법 예제 · 실행 전",
        "code": "TArray<int32> Scores;\nScores.Add(10);\nScores.Add(20);\n\nTMap<FName, int32> Stats;\nStats.Add(FName(TEXT(\"Damage\")), 10);\nif (const int32* Damage = Stats.Find(FName(TEXT(\"Damage\"))))\n{\n    // *Damage로 저장된 값 확인\n}\n\nTSet<int32> UniqueIds;\nUniqueIds.Add(1);\nUniqueIds.Add(1); // 같은 값 중복 추가를 비교할 예제"
      },
      {
        "title": "실행 전에 남은 것",
        "items": [
          "사용 중인 Unreal 버전에서 예제 컴파일하기",
          "TArray의 Num과 인덱스 범위 살펴보기",
          "TMap에서 없는 key를 Find했을 때 반환값 살펴보기",
          "TSet에 같은 값을 두 번 넣어보기"
        ]
      }
    ],
    "related_ids": [
      "20260825-ch3",
      "20260910-priest",
      "20260917-priest",
      "note-tem-011"
    ],
    "topics": [
      "unreal",
      "ds"
    ],
    "publication": "draft",
    "notice": "아직 Velog에 올리지 않은 초안이다. 아래 예제는 Unreal에서 컴파일하거나 실행해보지 않았다.",
    "references": [
      {
        "label": "TArray 공식 문서",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/array-containers-in-unreal-engine"
      },
      {
        "label": "TMap 공식 문서",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/map-containers-in-unreal-engine"
      },
      {
        "label": "TSet 공식 문서",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/set-containers-in-unreal-engine"
      }
    ]
  },
  {
    "id": "velog-20260706-001",
    "title": "C 배열과 포인터",
    "summary": "배열 인덱스, 변수의 값과 주소, 포인터로 값 읽기.",
    "kind": "velog",
    "topic": "memory",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.6",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "값과 주소",
        "text": "a는 변수의 값, &a는 그 변수가 있는 주소다. 포인터 p에는 주소를 넣고 *p로 그곳의 값을 읽는다.",
        "code": "int a = 10;\nint* p = &a;\n// p: a의 주소, &p: p 자체의 주소, *p: a의 값"
      },
      {
        "title": "배열의 위치",
        "text": "int a[5]는 int 다섯 개를 담는 배열이다. 첫 값은 a[0], 마지막 값은 a[4]로 읽는다. &a[1]과 a + 1은 같은 원소를 가리킨다."
      }
    ],
    "related_ids": [
      "20260706-001"
    ],
    "topics": [
      "cpp",
      "memory"
    ],
    "publication": "reference"
  },
  {
    "id": "velog-20260709-001",
    "title": "클래스와 객체지향 기초",
    "summary": "멤버 변수와 함수, 접근 제어, getter/setter와 생성자.",
    "kind": "velog",
    "topic": "oop",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.9",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "class 안에 묶기",
        "text": "관련된 변수와 함수를 하나로 묶는다. public은 밖에서도 접근할 수 있고 private은 클래스 안에서 사용한다. protected는 자식 클래스에서도 접근할 수 있다."
      },
      {
        "title": "getter / setter와 생성자",
        "text": "private 변수는 함수로 읽거나 바꾸도록 할 수 있다. 생성자는 클래스와 이름이 같고, 객체를 만들 때 멤버 값을 준비한다."
      }
    ],
    "related_ids": [
      "20260709-001"
    ],
    "topics": [
      "cpp",
      "oop"
    ],
    "publication": "reference"
  },
  {
    "id": "velog-20260710-001",
    "title": "스택·힙과 동적 메모리",
    "summary": "메모리 할당과 해제, 주소 복사와 데이터 복사의 차이.",
    "kind": "velog",
    "topic": "memory",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.10",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "new / delete",
        "text": "new로 만든 메모리는 delete로 해제한다. 해제한 주소를 계속 가리키는 것이 댕글링 포인터이고, 쓰지 않는 메모리를 해제하지 않고 남겨두는 것이 메모리 누수다."
      },
      {
        "title": "주소만 복사하는 것과 데이터를 복사하는 것",
        "text": "얕은 복사는 포인터의 주소를 복사해서 같은 곳을 가리킨다. 깊은 복사는 데이터를 다른 공간에 복사한다. 원본 메모리의 해제와 복사한 쪽의 관계가 헷갈렸던 부분이다."
      },
      {
        "title": "스마트 포인터",
        "text": "unique_ptr, shared_ptr, weak_ptr도 원문에 정리했다. 소유권과 참조 수 설명은 적었지만 당시에는 제대로 이해하지 못했다."
      }
    ],
    "related_ids": [
      "20260710-001"
    ],
    "topics": [
      "cpp",
      "memory"
    ],
    "publication": "reference"
  },
  {
    "id": "velog-20260712-001",
    "title": "함수 오버로딩과 타입 변환",
    "summary": "같은 이름의 함수를 나누는 방법과 타입 변환에서 남은 질문.",
    "kind": "velog",
    "topic": "oop",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.13",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "같은 이름의 함수",
        "text": "매개변수의 타입이나 개수가 다르면 같은 이름의 함수를 나눠 만들 수 있다. 반환 타입만 바꾸는 것으로는 구분할 수 없다."
      },
      {
        "title": "아직 헷갈리는 변환",
        "text": "정확한 타입 일치, 승격, 표준 변환, 사용자 정의 변환 순서로 적었다. char나 short에서 int, float에서 double로 바뀌는 것은 승격인데 int에서 double은 왜 표준 변환인지 질문이 남았다."
      }
    ],
    "related_ids": [
      "20260712-001"
    ],
    "topics": [
      "cpp",
      "oop"
    ],
    "publication": "reference"
  },
  {
    "id": "velog-20260716-001",
    "title": "함수 템플릿과 템플릿 클래스",
    "summary": "T로 타입을 바꿔 쓰는 함수와 Array 클래스 예제.",
    "kind": "velog",
    "topic": "oop",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.16-gndjynps",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "값 교환 함수",
        "text": "T에 타입을 넣어 같은 함수를 쓴다. T&로 받으면 함수 안에서 원래 변수의 값을 바꿀 수 있다. 아래는 원문에 있는 값 교환 부분이다.",
        "code": "template <typename T>\nvoid swapValuse(T& a, T& b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}"
      },
      {
        "title": "Array 객체 만들기",
        "text": "Array 클래스에 T data[100]을 두었다. 원문에는 Array(int)arr로 적었는데 객체 선언은 Array<int> arr처럼 꺾쇠를 쓴다. auto와 템플릿에서 타입을 정하는 방식은 더 헷갈렸던 부분이다."
      }
    ],
    "related_ids": [
      "20260716-001"
    ],
    "topics": [
      "cpp",
      "oop"
    ],
    "publication": "reference"
  },
  {
    "id": "velog-20260810-001",
    "title": "Unreal C++ AItem 헤더 구조",
    "summary": "Item.h에 선언한 변수와 함수, SceneRoot와 메시 연결.",
    "kind": "velog",
    "topic": "unreal",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/Unreal-C",
    "status": "원문 확인 · 핵심 재구성",
    "sections": [
      {
        "title": "Item.h",
        "text": "AItem은 AActor를 상속받는다. 헤더에는 클래스가 가진 변수와 함수를 선언하고 cpp에 동작을 작성한다. Item.generated.h는 include 목록 마지막에 둔다."
      },
      {
        "title": "컴포넌트 연결",
        "text": "SceneRoot를 루트로 두고 StaticMeshComp를 그 아래에 붙인다. 기준점과 화면에 보이는 메시를 나눈 구조다.",
        "code": "SceneRoot = CreateDefaultSubobject<USceneComponent>(TEXT(\"SceneRoot\"));\nSetRootComponent(SceneRoot);\nStaticMeshComp = CreateDefaultSubobject<UStaticMeshComponent>(TEXT(\"StaticMesh\"));\nStaticMeshComp->SetupAttachment(SceneRoot);"
      },
      {
        "title": "Actor 함수",
        "text": "PostInitializeComponents, BeginPlay, Destroyed, EndPlay를 헤더에 선언했다. 각 시점에 할 일은 cpp에서 작성한다."
      }
    ],
    "related_ids": [
      "20260810-001"
    ],
    "topics": [
      "unreal"
    ],
    "publication": "reference"
  },
  {
    "id": "file-note-tem-014",
    "title": "Unreal 수업 메모 · 빌드와 매크로",
    "summary": "Build.cs, UBT·UHT, UPROPERTY와 GC를 보면서 남은 질문.",
    "kind": "note",
    "topic": "unreal",
    "project": null,
    "source_name": "CH3 첫 라이브 정리.txt / CH3 분반수업.txt",
    "status": "정리 중인 노트 · 확정 개념과 구분",
    "notice": "날짜가 없는 수업 메모다. 아래 내용은 아직 남아 있는 질문이다.",
    "sections": [
      {
        "title": "빌드와 매크로",
        "text": "include 경로와 Build.cs를 보고 UBT, UHT, UCLASS, UPROPERTY를 적었다. 매크로와 함수가 처리되는 시점은 어떻게 다를까?"
      },
      {
        "title": "리플렉션과 GC",
        "text": "UPROPERTY로 등록한 값은 에디터 노출과 GC에 어떻게 연결될까? IsValid로 어디까지 확인할 수 있을까? 스마트 포인터와 UObject의 메모리 관리가 어떻게 다른지도 아직 헷갈린다."
      }
    ],
    "related_ids": [
      "note-tem-014"
    ],
    "topics": [
      "unreal"
    ],
    "publication": "reference"
  },
  {
    "id": "file-continue",
    "title": "C++ 실습 노트 · continue와 주석",
    "summary": "continue를 만나면 어떤 출력문을 건너뛰는지 써본 코드.",
    "kind": "note",
    "topic": "cpp",
    "source_name": "26.08.24.txt",
    "status": "원본 예제 보존 · 질문 별도 표시",
    "sections": [
      {
        "title": "continue 써보기",
        "text": "짝수일 때 continue를 만나면 뒤의 출력문을 건너뛰는지 보려고 코드를 썼다."
      },
      {
        "title": "직접 작성한 예제",
        "code": "int main()\r\n{\r\n\tfor (int i = 0; i < 10; i++)\r\n\t{\r\n\t\tstd::cout << \"강아지\\n\";\r\n\t\tif (i % 2 == 0)\r\n\t\t{\r\n\t\t\tstd::cout << i <<std::endl;\r\n\t\t\tcontinue;\r\n\t\t}\r\n\t\tstd::cout << \"고양이\\n\";\r\n\t}\r\n}"
      },
      {
        "title": "주석 메모",
        "text": "//, /* */, /// 형태와 @param, XML 형태의 주석을 같이 적었다. 도구에서 어떻게 표시되는지는 아직 확인하지 않았다."
      }
    ],
    "related_ids": [
      "20260618-001",
      "20260619-001",
      "20260622-001"
    ],
    "topics": [
      "cpp"
    ],
    "publication": "reference"
  }
];
