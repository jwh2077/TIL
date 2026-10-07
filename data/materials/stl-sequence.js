window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/stl-sequence.js"] = [
  {
    "id": "stl-sequence",
    "title": "C++ vector·list·deque — 조회·추가·삭제",
    "summary": "vector, list, deque에서 값을 읽고 추가하거나 지우는 방법.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "vector — 인덱스 접근·뒤에 추가",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><code>vector</code>는 크기를 변화시켜가며 사용할 수 있는 <strong>동적 배열</strong>이다.</p>\n<ul><li>원소가 연속적인 메모리에 저장된다.</li><li>인덱스로 임의 접근할 수 있다.</li><li>끝에 원소를 추가할 때 평균적으로 O(1)이다.</li><li><code>capacity</code>가 부족하면 더 큰 공간을 확보하고 기존 원소를 이동할 수 있다.</li></ul>\n<h3>2. size / capacity</h3>\n<pre><code>vector&lt;int&gt; vec;\n\nvec.size();       // 현재 원소 개수\nvec.capacity();   // 현재 확보된 공간\nvec.reserve(100); // capacity를 미리 확보</code></pre>\n<table><tr><th>개념</th><th>의미</th></tr>\n<tr><td><code>size</code></td><td>현재 들어 있는 원소의 개수</td></tr>\n<tr><td><code>capacity</code></td><td>현재 확보된 저장 공간의 크기</td></tr>\n<tr><td><code>reserve(n)</code></td><td>capacity를 최소 n까지 확보. size는 변하지 않음</td></tr>\n</table>\n<h3>3. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push_back()</code></td><td>뒤에 추가</td><td>평균 O(1), 재할당 시 O(n)</td></tr>\n<tr><td><code>emplace_back()</code></td><td>뒤에서 객체를 생성하며 추가</td><td>평균 O(1), 재할당 시 O(n)</td></tr>\n<tr><td><code>pop_back()</code></td><td>마지막 원소 삭제</td><td>O(1)</td></tr>\n<tr><td><code>insert()</code></td><td>특정 위치에 삽입</td><td>O(n)</td></tr>\n<tr><td><code>erase()</code></td><td>특정 위치 삭제</td><td>O(n)</td></tr>\n<tr><td><code>operator[]</code></td><td>인덱스로 접근</td><td>O(1)</td></tr>\n<tr><td><code>at()</code></td><td>인덱스로 접근 + 범위 검사</td><td>O(1)</td></tr>\n<tr><td><code>empty()</code></td><td>비었는지 확인</td><td>O(1)</td></tr>\n<tr><td><code>clear()</code></td><td>모든 원소 삭제</td><td>O(n)</td></tr>\n<tr><td><code>size()</code></td><td>원소 개수</td><td>O(1)</td></tr>\n</table>\n<h3>4. 장점 / 단점 / 사용하기 좋은 때</h3>\n<ul><li><strong>장점:</strong> 인덱스 접근이 빠르고 캐시 효율이 좋다.</li><li><strong>단점:</strong> 중간 삽입/삭제 시 뒤 원소를 이동해야 한다.</li><li><strong>좋은 경우:</strong> 인덱스 접근이 필요하거나 끝에서 추가/삭제가 많은 경우</li></ul>\n<h3>5. 탐색 / 뒤집기</h3>\n<pre><code>find(vec.begin(), vec.end(), value); // 순차 탐색\nreverse(vec.begin(), vec.end());     // 뒤집기</code></pre>\n<p><code>find()</code>는 O(n), <code>reverse()</code>는 O(n)이다.</p>\n<h3>6. 알고리즘 예시: 그래프</h3>\n<pre><code>vector&lt;vector&lt;int&gt;&gt; graph(4);\n\ngraph[0].push_back(1);\ngraph[0].push_back(2);</code></pre>\n<p>0번 정점에서 1번과 2번 정점으로 연결된 것을 인접 리스트로 표현한 것이다.</p>\n<blockquote><code>{1, 2}</code>는 주소가 아니라 <strong>연결된 정점의 번호</strong>를 저장한 것이다.</blockquote>\n\n"
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
        "title": "deque — 양쪽 끝에 추가·삭제",
        "html": "\n<h3>1. 개념 / 구조</h3>\n<p><strong>Double Ended Queue</strong> — 양쪽 끝에서 삽입/삭제할 수 있다.</p>\n<pre>앞 ↔ [10][20][30][40] ↔ 뒤</pre>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>Big-O</th></tr>\n<tr><td><code>push_front()</code></td><td>앞 추가</td><td>O(1)</td></tr>\n<tr><td><code>push_back()</code></td><td>뒤 추가</td><td>O(1)</td></tr>\n<tr><td><code>pop_front()</code></td><td>앞 삭제</td><td>O(1)</td></tr>\n<tr><td><code>pop_back()</code></td><td>뒤 삭제</td><td>O(1)</td></tr>\n<tr><td><code>front()</code> / <code>back()</code></td><td>양 끝 확인</td><td>O(1)</td></tr>\n<tr><td><code>operator[]</code></td><td>인덱스 접근</td><td>O(1)</td></tr>\n</table>\n<h3>3. 장점 / 단점 / 사용하기 좋은 때</h3>\n<ul><li><strong>장점:</strong> 양쪽 끝의 삽입/삭제가 빠르고 인덱스 접근도 가능</li><li><strong>단점:</strong> vector처럼 하나의 연속된 메모리 블록에 저장된다는 보장은 없음</li><li><strong>좋은 경우:</strong> 양쪽에서 데이터를 넣고 빼는 경우, 슬라이딩 윈도우</li></ul>\n\n"
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
        "title": "vector 크기 — 0부터 n까지 저장하려면 n+1칸",
        "text": "F(0)부터 F(n)까지 저장하려면 n+1칸이 필요하다. n칸만 만들면 마지막 인덱스는 n-1이다. 자료형의 크기를 키워도 배열의 인덱스 범위는 늘어나지 않는다."
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
