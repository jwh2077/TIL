window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/graph-tree.js"] = [
  {
    "id": "graph-tree",
    "title": "그래프·트리 — 구조와 탐색",
    "summary": "인접 리스트, BFS·DFS 비교, 트리의 부모·자식 관계와 기본 용어.",
    "kind": "file",
    "topic": "ds",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Graph",
        "text": "DFS는 한 갈래를 끝까지 살펴본 뒤 돌아와 다른 갈래를 본다. BFS는 시작한 곳에서 가까운 곳부터 차례로 살펴본다. DFS에서는 재귀나 stack으로 돌아갈 위치를 기억하고, BFS에서는 queue에 다음에 볼 위치를 넣는다.",
        "html": "\n<h3>1. 개념</h3>\n<p>정점(Vertex)과 간선(Edge)으로 이루어진 자료구조이다.</p>\n<h3>2. Vector를 이용한 인접 리스트</h3>\n<pre><code>vector&lt;vector&lt;int&gt;&gt; graph(4);\n\ngraph[0].push_back(1);\ngraph[0].push_back(2);</code></pre>\n<p>각 정점에 연결된 다른 정점의 목록을 저장하는 방식이다.</p>\n<h3>3. 대표 알고리즘</h3>\n<table><tr><th>알고리즘</th><th>주로 사용하는 자료구조</th><th>목적</th></tr>\n<tr><td>BFS</td><td>Queue</td><td>너비 우선 탐색</td></tr>\n<tr><td>DFS</td><td>Stack / 재귀</td><td>깊이 우선 탐색</td></tr>\n<tr><td>Dijkstra</td><td>Priority Queue</td><td>한 시작점에서 최단 거리</td></tr>\n</table>\n\n"
      },
      {
        "title": "Tree",
        "html": "\n<h3>1. 개념</h3>\n<p>부모-자식 관계를 가지는 계층적인 자료구조이다.</p>\n<pre>        [1] Root\n       /   \\\n     [2]   [3]\n     /\n   [4] Leaf</pre>\n<h3>2. 용어</h3>\n<table><tr><th>용어</th><th>의미</th></tr>\n<tr><td>Root</td><td>가장 위의 노드</td></tr>\n<tr><td>Parent</td><td>부모 노드</td></tr>\n<tr><td>Child</td><td>자식 노드</td></tr>\n<tr><td>Leaf</td><td>자식이 없는 노드</td></tr>\n<tr><td>Edge</td><td>노드와 노드를 연결하는 간선</td></tr>\n</table>\n<h3>3. 종류</h3><ul><li>Binary Tree</li><li>Binary Search Tree</li><li>Heap</li></ul>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "topics": [
      "ds"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "vector / list / deque",
        "url": "https://jwh2077.github.io/TIL/#material=stl-sequence"
      },
      {
        "label": "stack / queue / priority_queue",
        "url": "https://jwh2077.github.io/TIL/#material=stl-adaptor"
      },
      {
        "label": "C++ 문자열·STL 알고리즘",
        "url": "https://jwh2077.github.io/TIL/#material=stl-algorithm"
      }
    ]
  }
];
