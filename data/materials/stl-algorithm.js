window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/stl-algorithm.js"] = [
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
        "text": "DFS는 한 갈래를 끝까지 살펴본 뒤 돌아와 다른 갈래를 본다. BFS는 시작한 곳에서 가까운 곳부터 차례로 살펴본다. DFS에서는 재귀나 stack으로 돌아갈 위치를 기억하고, BFS에서는 queue에 다음에 볼 위치를 넣는다.",
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
      "20260728-001"
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference"
  }
];
