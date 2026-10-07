window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/stl-associative.js"] = [
  {
    "id": "stl-associative",
    "title": "C++ set·map·unordered — 중복·키 검색·정렬",
    "summary": "set과 map의 중복 처리, 정렬 순서, key로 값 찾기.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
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
        "label": "관련 Velog · STL vector와 map 복습",
        "url": "https://velog.io/@jwh4410/7.27"
      },
      {
        "label": "관련 Velog · map과 auto, range-for",
        "url": "https://velog.io/@jwh4410/7.28"
      },
      {
        "label": "자료구조 선택 기준",
        "url": "https://jwh2077.github.io/TIL/#material=stl-selection"
      },
      {
        "label": "C++ 문자열·STL 알고리즘",
        "url": "https://jwh2077.github.io/TIL/#material=stl-algorithm"
      }
    ]
  }
];
