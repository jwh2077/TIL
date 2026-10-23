window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/algorithm-techniques.js"] = [
  {
    "kind": "note",
    "topic": "ds",
    "topics": [
      "ds"
    ],
    "publication": "reference",
    "status": "개념 참고",
    "source_url": "data/guides/algorithm-lab.html",
    "related_ids": [],
    "id": "algorithm-techniques",
    "title": "알고리즘 기법 — 탐색·DP·백트래킹",
    "summary": "선형·이진 탐색, DFS·BFS, 완전 탐색, DP, 그리디, 백트래킹과 재귀의 사용 조건·C++ 예제·복잡도.",
    "source_name": "algorithm-learning-lab-v3.html",
    "sections": [
      {
        "title": "선형 탐색 (Linear Search)",
        "html": "<p>배열의 각 원소를 앞에서부터 방문하며 조건을 검사합니다. 목표값 이상인 첫 인덱스에 도달하면 반환합니다.</p><pre aria-label=\"동작 순서\">앞에서부터 확인 → 조건 만족 시 반환 → 끝까지 없으면 배열 길이 반환</pre><h3>사용 조건</h3><ul><li>정렬 여부에 관계없이 처음부터 순서대로 확인</li><li>대상이 앞에 있으면 빨리 끝나지만 뒤에 있으면 모두 살펴봄</li><li>작은 비정렬 목록에서 ID·이름 검색</li><li>정렬된 배열의 첫 조건 충족 위치 확인</li></ul><h3>C++ 참고 예제</h3><pre><code class=\"language-cpp\">int searchInsert(vector&lt;int&gt;&amp; nums, int target) {\n    for (int i = 0; i &lt; nums.size(); ++i) {\n        if (nums[i] &gt;= target) return i;\n    }\n    return nums.size();\n}</code></pre><h3>비용과 주의사항</h3><table><thead><tr><th>구분</th><th>비용</th><th>조건</th></tr></thead><tbody><tr><td>최선</td><td>O(1)</td><td>첫 원소가 조건에 맞는 경우</td></tr><tr><td>최악</td><td>O(n)</td><td>마지막 원소까지 확인</td></tr><tr><td>추가 공간</td><td>O(1)</td><td>인덱스만 유지</td></tr></tbody></table><p>여기서는 정렬된 배열의 삽입 위치를 찾는 예시입니다. 일반적인 선형 탐색은 배열 정렬이 필수는 아닙니다.</p>"
      },
      {
        "title": "이진 탐색 (Binary Search)",
        "html": "<p>현재 탐색 범위의 가운데 값을 비교하고, 목표값이 있을 수 없는 절반을 제외합니다. 찾지 못한 경우 lower_bound 형태로 삽입 위치를 얻을 수도 있습니다.</p><pre aria-label=\"동작 순서\">정렬된 배열 → 중간값 비교 → 가능한 절반만 남김 → 삽입 위치 반환</pre><h3>사용 조건</h3><ul><li>정렬 또는 단조성 조건이 있어야 함</li><li>매번 가능한 범위의 절반가량을 버림</li><li>정렬된 점수표에서 기준값 이상인 첫 위치 찾기</li><li>정렬된 상품 가격 목록에서 검색 범위 좁히기</li></ul><h3>C++ 참고 예제</h3><pre><code class=\"language-cpp\">int low = 0, high = nums.size();\nwhile (low &lt; high) {\n    int mid = low + (high-low)/2;\n    if (nums[mid] &lt; target) low = mid+1;\n    else high = mid;\n}\nreturn low; // 삽입 위치</code></pre><h3>비용과 주의사항</h3><table><thead><tr><th>구분</th><th>비용</th><th>조건</th></tr></thead><tbody><tr><td>일반적인 탐색</td><td>O(log n)</td><td>범위를 반복해서 절반으로 줄임</td></tr><tr><td>추가 공간</td><td>O(1)</td><td>반복문 구현 기준</td></tr><tr><td>사전 정렬</td><td>O(n log n)</td><td>입력이 정렬돼 있지 않다면 별도 비용</td></tr></tbody></table><p>배열이 정렬되어 있어야 합니다. 이 예시는 목표값 이상인 첫 위치를 찾는 lower_bound 방식입니다.</p>"
      },
      {
        "title": "깊이 우선 탐색 (DFS)",
        "html": "<p>한 정점을 방문한 뒤 방문하지 않은 인접 정점으로 내려갑니다. 더 갈 곳이 없으면 호출 스택을 따라 돌아옵니다.</p><pre aria-label=\"동작 순서\">방문 표시 → 미방문 이웃으로 재귀 → 갈 곳이 없으면 이전 호출로 반환</pre><h3>사용 조건</h3><ul><li>현재 갈래를 끝까지 들어간 뒤 돌아옴</li><li>그래프의 순환을 만나면 방문 기록이 필요</li><li>연결된 섬·영역의 크기 계산</li><li>트리 노드를 재귀로 전체 순회</li></ul><h3>C++ 참고 예제</h3><pre><code class=\"language-cpp\">void dfs(int u) {\n    visited[u] = true;\n    for (int v : graph[u]) {\n        if (!visited[v]) dfs(v);\n    }\n}</code></pre><h3>비용과 주의사항</h3><table><thead><tr><th>구분</th><th>비용</th><th>조건</th></tr></thead><tbody><tr><td>그래프 전체 탐색</td><td>O(V+E)</td><td>정점 V개·간선 E개 (인접 리스트)</td></tr><tr><td>방문 기록</td><td>O(V)</td><td>방문 배열</td></tr><tr><td>재귀 스택</td><td>최대 O(V)</td><td>최악 깊이 V인 경우</td></tr></tbody></table><p>그래프에 순환이 있다면 visited 검사로 무한 재방문을 막아야 합니다. 방문 순서는 인접 정점의 나열 순서에 따라 달라집니다.</p>"
      },
      {
        "title": "너비 우선 탐색 (BFS)",
        "html": "<p>시작점을 큐에 넣고, 꺼낸 정점에서 새로 발견한 이웃을 큐 뒤에 추가합니다. 선입선출(FIFO)이므로 가까운 단계부터 처리됩니다.</p><pre aria-label=\"동작 순서\">시작점 방문 표시·큐 등록 → 앞에서 꺼냄 → 미방문 이웃 표시·등록 → 반복</pre><h3>사용 조건</h3><ul><li>큐를 이용해 먼저 발견한 정점부터 처리</li><li>간선 비용이 같을 때 단계 수가 최단 거리</li><li>격자에서 최소 이동 횟수 구하기</li><li>감염·불·물 같은 확산 현상의 단계별 처리</li></ul><h3>C++ 참고 예제</h3><pre><code class=\"language-cpp\">queue&lt;int&gt; q;\nq.push(start); visited[start] = true;\nwhile (!q.empty()) {\n    int u = q.front(); q.pop();\n    for (int v : graph[u]) {\n        if (!visited[v]) {\n            visited[v] = true; q.push(v);\n        }\n    }\n}</code></pre><h3>비용과 주의사항</h3><table><thead><tr><th>구분</th><th>비용</th><th>조건</th></tr></thead><tbody><tr><td>그래프 전체 탐색</td><td>O(V+E)</td><td>정점 V개·간선 E개 (인접 리스트)</td></tr><tr><td>큐·방문 기록</td><td>O(V)</td><td>최악 V개 정점 보관</td></tr><tr><td>격자 예제</td><td>O(R×C)</td><td>행 R·열 C의 각 칸을 최대 한 번 방문</td></tr></tbody></table><p>이 예시는 정점을 큐에 넣을 때 방문 표시를 하여 중복 등록을 방지합니다. 최단 거리 성질은 간선 비용이 동일할 때 적용됩니다.</p>"
      },
      {
        "title": "완전 탐색 (Brute Force)",
        "html": "<p>가능한 모든 후보를 차례로 만들어 조건을 검사합니다. 이 예시는 3개 스위치 중 정확히 2개가 켜진 경우를 찾습니다.</p><pre aria-label=\"동작 순서\">후보 생성 → 조건 검사 → 결과 기록 → 다음 후보</pre><h3>사용 조건</h3><ul><li>가능한 후보를 모두 생성해 검사</li><li>정답을 놓치지 않지만 후보 수가 매우 많아질 수 있음</li><li>작은 입력에서 정답 기준 구현 만들기</li><li>스위치 n개의 모든 ON/OFF 패턴 검사</li></ul><h3>C++ 참고 예제</h3><pre><code class=\"language-cpp\">for (int mask = 0; mask &lt; (1&lt;&lt;3); ++mask) {\n    int cnt = 0;\n    for (int i = 0; i &lt; 3; ++i)\n        if (mask &amp; (1&lt;&lt;i)) ++cnt;\n    if (cnt == 2) {\n        // 조건 만족\n    }\n}</code></pre><h3>비용과 주의사항</h3><table><thead><tr><th>구분</th><th>비용</th><th>조건</th></tr></thead><tbody><tr><td>이진 선택 n개</td><td>O(n·2ⁿ)</td><td>2ⁿ개의 후보마다 n칸 검사</td></tr><tr><td>반복 열거의 추가 공간</td><td>O(1)</td><td>마스크만 유지할 경우</td></tr><tr><td>후보 저장</td><td>O(2ⁿ)</td><td>모든 후보를 보관한다면 별도 비용</td></tr></tbody></table><p>후보 수뿐 아니라 후보 하나를 검사하는 비용도 함께 센다. n개의 스위치를 모두 확인하는 아래 방식은 O(n·2ⁿ)이다.</p>"
      },
      {
        "title": "동적 계획법 (DP)",
        "html": "<p>큰 문제의 답이 작은 문제의 답에 의존할 때, 이미 구한 값을 저장해 반복 계산을 줄입니다. 아래는 F(n)=F(n−1)+F(n−2)를 아래에서부터 계산하는 Bottom-Up 방식입니다.</p><pre aria-label=\"동작 순서\">기저값 저장 → 작은 문제부터 계산 → 이전 답 재사용 → 결과 반환</pre><h3>사용 조건</h3><ul><li>작은 문제의 답을 저장해 반복 계산 감소</li><li>메모이제이션(Top-Down) 또는 테이블(Bottom-Up)로 구현</li><li>피보나치·계단 오르기 계산</li><li>게임 승패·최소 비용·경우의 수 상태 계산</li></ul><h3>C++ 참고 예제</h3><pre><code class=\"language-cpp\">vector&lt;int&gt; dp(n+1);\ndp[0] = 0;\ndp[1] = 1;\nfor (int i = 2; i &lt;= n; ++i) {\n    dp[i] = dp[i-1] + dp[i-2];\n}\nreturn dp[n];</code></pre><h3>비용과 주의사항</h3><table><thead><tr><th>구분</th><th>비용</th><th>조건</th></tr></thead><tbody><tr><td>피보나치 Bottom-Up</td><td>O(n)</td><td>F(0)부터 F(n)까지 계산</td></tr><tr><td>테이블 공간</td><td>O(n)</td><td>n+1개 결과 저장</td></tr><tr><td>공간 최적화</td><td>O(1)</td><td>직전 두 값만 필요하다면 가능</td></tr></tbody></table><p>문제를 쪼개는 것만으로 DP는 아닙니다. 작은 문제의 정답을 저장해 재사용하는 구조가 중요합니다. 이 코드는 피보나치에 대한 예시입니다. 예제는 n ≥ 1을 전제로 하며, 큰 값에서는 자료형의 범위도 확인해야 한다.</p>"
      },
      {
        "title": "그리디 (Greedy)",
        "html": "<p>매 단계에서 현재 기준으로 가장 좋아 보이는 선택을 합니다. 여기서는 4·3·1원 동전으로 목표 금액을 만들 때 가능한 가장 큰 동전을 선택합니다.</p><pre aria-label=\"동작 순서\">현재 최선 선택 → 남은 문제 갱신 → 반복\n4·3·1원으로 6원: 4+1+1 (3개) / 최적: 3+3 (2개)</pre><h3>사용 조건</h3><ul><li>매 순간 가장 유리해 보이는 선택을 즉시 확정</li><li>국소 최적이 전체 최적을 보장하는 조건을 검증해야 함</li><li>활동 선택(끝나는 시간이 빠른 일정부터)</li><li>특정 동전 체계에서 거스름돈 최소 개수 계산</li></ul><h3>C++ 참고 예제</h3><pre><code class=\"language-cpp\">vector&lt;int&gt; coins = {4,3,1};\nfor (int c : coins) {\n    while (amount &gt;= c) {\n        amount -= c;\n        chosen.push_back(c);\n    }\n}</code></pre><h3>비용과 주의사항</h3><table><thead><tr><th>구분</th><th>비용</th><th>조건</th></tr></thead><tbody><tr><td>단순 동전 예제</td><td>O(k+m)</td><td>동전 종류 k와 선택된 동전 수 m</td></tr><tr><td>선택 결과 저장</td><td>O(m)</td><td>선택한 동전을 모두 담을 때</td></tr><tr><td>동전 정렬 포함</td><td>O(k log k)</td><td>필요 시 내림차순 정렬 추가</td></tr></tbody></table><p>항상 전체 최적해를 보장하지는 않습니다. 예를 들어 6원에서 그리디는 4+1+1(3개), 최적해는 3+3(2개)입니다. 동전 종류와 구현 방식에 따라 복잡도는 달라집니다.</p>"
      },
      {
        "title": "백트래킹 (Backtracking)",
        "html": "<p>가능한 선택을 하나 적용하고 더 깊이 탐색합니다. 조건을 어기거나 탐색을 마치면 선택을 취소하여 다른 후보를 시도합니다.</p><pre aria-label=\"동작 순서\">후보 검사 → 선택 → 다음 단계 재귀 → 선택 취소 → 다음 후보</pre><h3>사용 조건</h3><ul><li>후보 선택 뒤 재귀 탐색하고 끝나면 원상 복구</li><li>가능성이 없는 분기는 더 확장하지 않고 가지치기</li><li>N-Queens에서 퀸의 충돌 없는 배치</li><li>순열·조합과 제약 충족 문제 풀이</li></ul><h3>C++ 참고 예제</h3><pre><code class=\"language-cpp\">void solve(int row) {\n    if (row == n) { save(); return; }\n    for (int col = 0; col &lt; n; ++col) {\n        if (!safe(row,col)) continue;\n        place(row,col);\n        solve(row+1);\n        remove(row,col);\n    }\n}</code></pre><h3>비용과 주의사항</h3><table><thead><tr><th>구분</th><th>비용</th><th>조건</th></tr></thead><tbody><tr><td>탐색 시간</td><td>문제에 따라 지수·팩토리얼 수준</td><td>후보 수와 가지치기에 크게 좌우됨</td></tr><tr><td>호출 스택</td><td>O(n)</td><td>깊이가 n일 때</td></tr><tr><td>체스판 저장</td><td>O(n²)</td><td>n×n 보드를 직접 유지한다면</td></tr></tbody></table><p>예제의 safe·place·remove·save 함수는 공격 범위 검사, 배치, 복구, 결과 저장을 나타내는 보조 함수다. 시간 복잡도는 문제와 가지치기에 따라 달라진다.</p>"
      },
      {
        "title": "재귀 함수 (Recursion)",
        "html": "<p>함수가 자기 자신을 호출하는 방식입니다. 각 호출마다 별도의 실행 문맥이 스택에 쌓이고, 종료 조건에 도달하면 가장 나중에 호출된 함수부터 반환됩니다.</p><pre aria-label=\"동작 순서\">fact(3) → fact(2) → fact(1)\n   6    ←    2    ←    1</pre><h3>사용 조건</h3><ul><li>자기 자신을 호출하며 문제를 더 작은 입력으로 만듦</li><li>종료 조건에 도달하면 호출 역순으로 반환</li><li>폴더·트리의 계층 순회</li><li>DFS·분할 정복·백트래킹 작성</li></ul><h3>C++ 참고 예제</h3><pre><code class=\"language-cpp\">int fact(int n) {\n    if (n &lt;= 1) return 1;\n    return n * fact(n-1);\n}</code></pre><h3>비용과 주의사항</h3><table><thead><tr><th>구분</th><th>비용</th><th>조건</th></tr></thead><tbody><tr><td>팩토리얼 예제 시간</td><td>O(n)</td><td>n부터 1까지 한 번씩 호출</td></tr><tr><td>팩토리얼 호출 공간</td><td>O(n)</td><td>호출 스택 깊이</td></tr><tr><td>일반 재귀 시간</td><td>문제별 상이</td><td>중복 호출이 많으면 더 커짐</td></tr></tbody></table><p>종료 조건이 없거나 깊이가 너무 깊으면 스택 오버플로가 발생할 수 있습니다. 모든 재귀 알고리즘의 시간 복잡도가 O(n)인 것은 아닙니다.</p>"
      }
    ],
    "notice": "아래 코드는 개념을 설명하는 참고 예제다. 실제 제출 코드와 결과는 관련 문제 풀이 기록에서 볼 수 있다.",
    "references": [
      {
        "label": "자료구조 원리",
        "url": "#material=data-structures"
      },
      {
        "label": "C++ STL 사용법",
        "url": "#material=stl-foundation"
      },
      {
        "label": "Search Insert Position · 내 풀이",
        "url": "#algorithm=lc-35"
      },
      {
        "label": "Minesweeper · 내 풀이",
        "url": "#algorithm=lc-529"
      },
      {
        "label": "Rotting Oranges · 내 풀이",
        "url": "#algorithm=lc-994"
      },
      {
        "label": "피보나치 수 · 내 풀이",
        "url": "#algorithm=pg-12945"
      },
      {
        "label": "N-Queens · 내 풀이",
        "url": "#algorithm=lc-51"
      },
      {
        "label": "Binary Tree Paths · 내 풀이",
        "url": "#algorithm=lc-257"
      },
      {
        "label": "알고리즘 원본 HTML",
        "url": "data/guides/algorithm-lab.html"
      }
    ],
    "quick_links": [
      {
        "label": "DFS·BFS",
        "section": "깊이 우선 탐색 (DFS)"
      },
      {
        "label": "DP",
        "section": "동적 계획법 (DP)"
      },
      {
        "label": "백트래킹",
        "section": "백트래킹 (Backtracking)"
      }
    ],
    "toc_groups": [
      {
        "title": "탐색",
        "start": "선형 탐색 (Linear Search)"
      },
      {
        "title": "문제 해결 전략",
        "start": "동적 계획법 (DP)"
      },
      {
        "title": "호출 구조",
        "start": "재귀 함수 (Recursion)"
      }
    ]
  }
];
