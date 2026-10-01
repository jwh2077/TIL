window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-134240.js"] = [
  {
    "id": "pg-134240",
    "title": "푸드 파이트 대회",
    "group": "simulation",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/134240",
    "status": "통과 확인",
    "date": "2026-09-10",
    "verification": "프로그래머스 정답 · 100 / 100",
    "problem": "양쪽 선수가 같은 음식 순서와 양을 먹도록 가운데 물 0을 둔 문자열을 만든다.",
    "summary": "deque 중앙에 0을 두고 같은 음식 번호를 앞뒤에 하나씩 추가해 대칭을 만들었다.",
    "question": "",
    "attempt": "큰 음식 번호부터 내려오며 food[i]가 2 이상인 동안 push_front와 push_back으로 같은 번호를 넣었다.",
    "turning": "가운데 0을 먼저 넣고 큰 음식 번호부터 앞뒤에 붙였다. 한 번 붙일 때마다 같은 음식 두 개를 써서 food[i]를 2 줄인다.",
    "learned": [
      "홀수로 남는 음식 하나는 양쪽에 똑같이 나눌 수 없다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "#include <string>\n#include <vector>\n#include <deque>\nusing namespace std;\nstring solution(vector<int> food) {\n    deque<int>A(1, 0);\n    for (int i = food.size() - 1; i >= 1; i--)\n        while (food[i] >= 2) { A.push_back(i); A.push_front(i); food[i] -= 2; }\n    string answer = \"\";\n    for (int value : A) answer += to_string(value);\n    return answer;\n}"
  }
];
