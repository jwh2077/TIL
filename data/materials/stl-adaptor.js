window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/stl-adaptor.js"] = [
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
