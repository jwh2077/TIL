window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-138476.js"] = [
  {
    "id": "pg-138476",
    "title": "귤 고르기",
    "group": "greedy",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/138476",
    "status": "통과 확인",
    "date": "2026-09-07",
    "verification": "사용자 제공 제출 기록과 원본 코드 기준. 첫 통과 제출: 2026-09-07 23:08:33, 100점. 기존 목록 날짜 2026-09-07은 첫 통과 제출일이며 최초 학습일은 미확인이다. 재학습일 및 재풀이 통과 제출일: 2026-10-30, 08:55:13에 100점(34/34). 제출 링크와 시각의 시간대는 미확인.",
    "problem": "k개의 귤을 고를 때 포함되는 크기 종류 수의 최솟값을 구한다.",
    "summary": "크기별 개수를 센 뒤 개수가 많은 종류부터 선택했다. 9월 7일 통과 후 10월 30일에 다시 풀며 map과 우선순위 큐의 역할을 확인했다.",
    "question": "2026-10-30에 다시 풀면서 priority_queue<pair<int,int>>로 크기와 개수를 함께 관리할 수 있을지 생각했다. 같은 값이나 pair를 저장할 수는 있지만, map처럼 키로 접근하거나 같은 크기의 귤을 자동으로 합쳐 주지는 않았다.",
    "attempt": "unordered_map으로 크기별 빈도를 세고 각 빈도를 최대 힙에 넣었다. 가장 큰 빈도부터 k에서 빼며 선택한 종류 수를 증가시켰다.\n\n2026-10-30 재풀이\n처음에는 Q.push(tangerine[i])로 귤의 크기를 넣으려고 했다. 필요한 것은 크기 자체가 아니라 같은 크기의 개수라서 unordered_map의 키에 크기, 값에 개수를 저장하고 큐에는 개수만 넣도록 바꿨다.\n\nfor(int i : M)으로 순회하려 했지만 map의 원소는 pair라 int로 받을 수 없었다. auto로 받아 i.second를 큐에 넣었다. while(k <= 0)으로 거꾸로 쓴 조건도 k > 0으로 고쳤다.\n\nQ.top()으로 꺼낸 값을 다시 M[i]로 조회하려고도 했다. 큐에는 이미 개수가 들어 있으므로 그 값을 바로 k에서 빼야 했다.",
    "turning": "가장 많은 종류부터 k에서 빼면 한 종류로 채울 수 있는 수가 가장 많다. k가 0 이하가 될 때까지 꺼낸 횟수를 센다.\n\n재풀이도 크기별 개수를 세고 큰 개수부터 선택하는 같은 방식으로 마무리했다. 이전 코드의 data·num·answer가 이번에는 M·Q·A로 바뀌었고, 핵심 알고리즘은 같았다. 34개 테스트를 모두 통과했다.\n\n전체 귤 개수를 n, 서로 다른 크기 수를 m이라고 하면 평균 시간 복잡도는 O(n + m log m), 공간 복잡도는 O(m)이다.",
    "learned": [
      "귤 크기 자체보다 그 크기의 개수가 필요해서 힙에는 개수만 넣는다.",
      "unordered_map을 순회할 때는 pair를 받으므로 auto와 .second로 개수를 가져왔다.",
      "priority_queue는 중복값과 pair를 저장할 수 있지만 키로 검색하거나 중복된 크기를 자동으로 집계하지는 않는다.",
      "이번에는 크기를 map에서 집계하고 개수의 우선순위를 큐에서 관리하도록 역할을 나눴다."
    ],
    "code_title": "재풀이 통과 · 2026-10-30",
    "solution_code": "#include <vector>\n#include <queue>\n#include <unordered_map>\n\nusing namespace std;\n\nint solution(int k, vector<int> tangerine) {\n    priority_queue<int> Q;\n    unordered_map<int,int> M;\n    int A = 0;\n    for(int i : tangerine)\n    {\n        M[i]++;\n    }\n    for(auto i : M)\n    {\n        Q.push(i.second);\n    }\n    while(k > 0)\n    { \n        k -= Q.top();\n        Q.pop();\n        A++;\n    }\n    return A;\n}",
    "tags": [
      "프로그래머스",
      "그리디",
      "unordered_map",
      "priority_queue",
      "빈도 계산"
    ],
    "previous_solutions": [
      {
        "title": "첫 통과 · 2026-09-07",
        "code": "#include <string>\n#include <vector>\n#include <unordered_map>\n#include <queue>\n\nusing namespace std;\n\nint solution(int k, vector<int> tangerine) \n{\n    unordered_map<int, int> data;\n    for(auto A : tangerine )\n    {\n        data[A]++;\n    }\n    int answer = 0;\n    \n    priority_queue<int> num;\n    for(auto A : data)\n    {\n        num.push(A.second);\n    }\n    while(k > 0)\n    {\n        k -= num.top();\n        num.pop();\n        answer++;\n    }\n\n\n    return answer;\n}",
        "result": "2026-09-07 23:08:33 · 100점. 앞선 22:44:24 제출은 88.2점. 오답 코드·구체적인 실패 원인, 실행 시간·메모리 및 제출 링크는 미확인."
      }
    ],
    "code_result": "2026-10-30 08:55:13 · 100/100 · 34/34 통과 · 0.00~16.14 ms · 4.63~12.2 MB. 앞선 08:53:19 제출은 91.2점, 08:54:50 제출은 41.2점. 각 오답 코드와 실패 원인은 미확인이며 위 시행착오를 특정 오답 제출에 연결하지 않았다."
  }
];
