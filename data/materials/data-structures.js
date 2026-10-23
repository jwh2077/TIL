window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/data-structures.js"] = [
  {
    "kind": "note",
    "topic": "ds",
    "topics": [
      "ds"
    ],
    "publication": "reference",
    "status": "개념 참고",
    "source_url": "data/guides/structures-stl-lab.html",
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "id": "data-structures",
    "title": "자료구조 원리 — 연결 리스트·트리·힙",
    "summary": "연속·연결 저장, 노드와 포인터, 이진 트리·BST·힙·해시·그래프의 동작과 탐색.",
    "source_name": "자료구조.html / data-structures-stl-lab-v3.html",
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
        "title": "배열과 연속 저장",
        "text": "원소가 연속된 주소에 놓입니다. 중간 삽입은 뒤 원소들을 옮겨야 합니다.",
        "code": "int arr[8] = {4, 8, 12, 16};\nint n = 4;\n// 인덱스 1에 값 7 삽입\nfor (int i = n; i > 1; --i) {\n    arr[i] = arr[i - 1];\n}\narr[1] = 7;\n++n;",
        "items": [
          "원시 배열은 크기가 고정돼 있어 여유 공간을 미리 확보해야 합니다."
        ]
      },
      {
        "title": "단일 연결 리스트",
        "text": "각 노드가 값과 다음 노드의 주소(next)를 가집니다.",
        "code": "struct Node {\n    int value;\n    Node* next;\n};\n// prev 뒤에 새 노드 삽입\nNode* added = new Node{7, nullptr};\nadded->next = prev->next;\nprev->next = added;",
        "items": [
          "노드 삽입은 삽입 직전 노드의 포인터를 알고 있을 때 O(1)입니다. 위치 탐색 비용은 별도입니다."
        ],
        "html": "<pre aria-label=\"동작 순서\">prev → right\nadded.next = right\nprev.next = added\nprev → added → right</pre>"
      },
      {
        "title": "이중 연결 리스트",
        "text": "각 노드가 이전(prev)과 다음(next) 노드를 가리킵니다.",
        "code": "struct Node {\n    int value;\n    Node* prev;\n    Node* next;\n};\n// left와 right 사이 새 노드 연결\nadded->prev = left;\nadded->next = right;\nleft->next = added;\nright->prev = added;",
        "items": [
          "양방향 이동이 가능하지만 노드마다 포인터 두 개가 필요합니다."
        ],
        "html": "<pre aria-label=\"동작 순서\">left ⇄ right\nadded.prev = left / added.next = right\nleft.next = added / right.prev = added\nleft ⇄ added ⇄ right</pre>"
      },
      {
        "title": "트리 — 부모와 자식 관계",
        "html": "\n<h3>1. 개념</h3>\n<p>부모-자식 관계를 가지는 계층적인 자료구조이다.</p>\n<pre>        [1] Root\n       /   \\\n     [2]   [3]\n     /\n   [4] Leaf</pre>\n<h3>2. 용어</h3>\n<table><tr><th>용어</th><th>의미</th></tr>\n<tr><td>Root</td><td>가장 위의 노드</td></tr>\n<tr><td>Parent</td><td>부모 노드</td></tr>\n<tr><td>Child</td><td>자식 노드</td></tr>\n<tr><td>Leaf</td><td>자식이 없는 노드</td></tr>\n<tr><td>Edge</td><td>노드와 노드를 연결하는 간선</td></tr>\n</table>\n<h3>3. 종류</h3><ul><li>Binary Tree</li><li>Binary Search Tree</li><li>Heap</li></ul>\n\n"
      },
      {
        "title": "이진 트리",
        "text": "각 노드가 최대 두 자식을 가집니다. 이진 트리 자체가 자동으로 정렬되는 것은 아닙니다.",
        "code": "void preorder(TreeNode* root) {\n    if (!root) return;\n    visit(root->val);          // 루트\n    preorder(root->left);     // 왼쪽\n    preorder(root->right);    // 오른쪽\n}",
        "items": [
          "이진 트리의 중위 순회가 언제나 정렬 결과를 만드는 것은 아닙니다. BST일 때 가능합니다."
        ]
      },
      {
        "title": "이진 탐색 트리",
        "text": "각 노드의 왼쪽에는 작은 값, 오른쪽에는 큰 값이 위치하는 트리입니다.",
        "code": "Node* find(Node* root, int target) {\n    while (root) {\n        if (root->val == target) return root;\n        if (target < root->val) root = root->left;\n        else root = root->right;\n    }\n    return nullptr;\n}",
        "items": [
          "균형이 잡힌 BST는 탐색이 O(log n)이지만, 한쪽으로 치우치면 O(n)까지 느려질 수 있습니다. map은 순서를 유지하고 로그 시간 연산을 보장합니다."
        ],
        "html": "<pre aria-label=\"동작 순서\">현재 노드와 비교 → 작으면 왼쪽 / 크면 오른쪽 → 찾거나 nullptr에서 종료</pre>"
      },
      {
        "title": "힙",
        "text": "완전 이진 트리이며 부모·자식 간의 우선순위 관계를 유지합니다.",
        "code": "// 최대 힙 삽입의 핵심 아이디어\nheap.push_back(value);\nint i = heap.size() - 1;\nwhile (i > 0 && heap[(i - 1) / 2] < heap[i]) {\n    swap(heap[(i - 1) / 2], heap[i]);\n    i = (i - 1) / 2;\n}",
        "items": [
          "힙은 전체가 정렬된 배열이 아닙니다. 최대 힙은 가장 큰 원소가 루트에 있다는 규칙만 보장합니다."
        ],
        "html": "<pre aria-label=\"동작 순서\">배열 끝에 추가 → 부모와 비교 → 우선순위가 높으면 교환 → 위로 반복</pre>"
      },
      {
        "title": "해시 테이블",
        "text": "키를 해시 함수에 넣어 버킷 위치를 계산합니다. 충돌 처리 방법도 중요합니다.",
        "code": "// 구조를 이해하기 위한 단순 버킷 예제\nint bucket(int key) { return key % 5; }\n// 같은 버킷의 원소는 연결해 충돌 처리\n// 실무에서는 unordered_map 사용",
        "items": [
          "예제는 같은 버킷의 원소를 연결해 충돌을 처리합니다. 실제 STL 해시 함수·버킷 수·구현은 달라질 수 있습니다."
        ]
      },
      {
        "title": "그래프 — 정점과 간선",
        "text": "DFS는 한 갈래를 끝까지 살펴본 뒤 돌아와 다른 갈래를 본다. BFS는 시작한 곳에서 가까운 곳부터 차례로 살펴본다. DFS에서는 재귀나 stack으로 돌아갈 위치를 기억하고, BFS에서는 queue에 다음에 볼 위치를 넣는다.",
        "html": "\n<h3>1. 개념</h3>\n<p>정점(Vertex)과 간선(Edge)으로 이루어진 자료구조이다.</p>\n<h3>2. Vector를 이용한 인접 리스트</h3>\n<pre><code>vector&lt;vector&lt;int&gt;&gt; graph(4);\n\ngraph[0].push_back(1);\ngraph[0].push_back(2);</code></pre>\n<p>각 정점에 연결된 다른 정점의 목록을 저장하는 방식이다.</p>\n<h3>3. 대표 알고리즘</h3>\n<table><tr><th>알고리즘</th><th>주로 사용하는 자료구조</th><th>목적</th></tr>\n<tr><td>BFS</td><td>Queue</td><td>너비 우선 탐색</td></tr>\n<tr><td>DFS</td><td>Stack / 재귀</td><td>깊이 우선 탐색</td></tr>\n<tr><td>Dijkstra</td><td>Priority Queue</td><td>한 시작점에서 최단 거리</td></tr>\n</table>\n\n<h3>무방향 간선 연결</h3><pre><code class=\"language-cpp\">vector&lt;vector&lt;int&gt;&gt; graph(5);\n// 무방향 그래프: 양쪽 모두 등록\ngraph[0].push_back(1);\ngraph[1].push_back(0);</code></pre><p>그래프는 자료구조이며 DFS·BFS는 그래프를 탐색하는 알고리즘입니다.</p>"
      }
    ],
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
        "label": "관련 Velog · map과 auto, range-for",
        "url": "https://velog.io/@jwh4410/7.28"
      },
      {
        "label": "C++ STL 사용법",
        "url": "#material=stl-foundation"
      },
      {
        "label": "자료구조·STL 원본 HTML",
        "url": "data/guides/structures-stl-lab.html"
      },
      {
        "label": "DFS·BFS 등 탐색 기법",
        "url": "#material=algorithm-techniques"
      }
    ],
    "legacy_sections": {
      "graph-tree": "그래프 — 정점과 간선"
    },
    "quick_links": [
      {
        "label": "연결 리스트",
        "section": "단일 연결 리스트"
      },
      {
        "label": "트리",
        "section": "트리 — 부모와 자식 관계"
      },
      {
        "label": "힙",
        "section": "힙"
      }
    ]
  }
];
