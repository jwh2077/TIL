window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-138476.js"] = [
  {
    "id": "pg-138476",
    "title": "귤 고르기",
    "group": "greedy",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/138476",
    "status": "통과 확인",
    "date": "2026-09-07",
    "verification": "프로그래머스 정답 · 100 / 100",
    "problem": "k개의 귤을 고를 때 포함되는 크기 종류 수의 최솟값을 구한다.",
    "summary": "크기별 개수를 센 뒤 개수가 많은 종류부터 선택하는 그리디 방식으로 풀었다.",
    "question": "",
    "attempt": "unordered_map으로 크기별 빈도를 세고 각 빈도를 최대 힙에 넣었다. 가장 큰 빈도부터 k에서 빼며 선택한 종류 수를 증가시켰다.",
    "turning": "가장 많은 종류부터 k에서 빼면 한 종류로 채울 수 있는 수가 가장 많다. k가 0 이하가 될 때까지 꺼낸 횟수를 센다.",
    "learned": [
      "귤 크기 자체보다 그 크기의 개수가 필요해서 힙에는 개수만 넣는다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "#include <vector>\n#include <unordered_map>\n#include <queue>\nusing namespace std;\nint solution(int k, vector<int> tangerine) {\n    unordered_map<int, int> data;\n    for(auto A : tangerine) data[A]++;\n    priority_queue<int> num;\n    for(auto A : data) num.push(A.second);\n    int answer = 0;\n    while(k > 0) { k -= num.top(); num.pop(); answer++; }\n    return answer;\n}"
  }
];
