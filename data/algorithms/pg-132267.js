window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-132267.js"] = [
  {
    "id": "pg-132267",
    "title": "콜라 문제",
    "group": "simulation",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/132267",
    "status": "통과 확인",
    "problem": "빈 병을 교환하며 받은 병의 총수를 구한다.",
    "date": "2026-09-11",
    "summary": "교환해서 받은 병과 남은 병을 따로 계산하고, 지금까지 받은 병의 수를 더했다.",
    "question": "초기 코드에서는 my를 어떤 값으로 시작할지, 받은 콜라를 다음 교환에서 어떻게 빈 병으로 다시 사용할지가 섞여 있었다.",
    "attempt": "my를 현재 가진 빈 병 n으로 시작했다. 한 번 교환할 때 cola=(my/a)*b를 계산하고, answer에는 cola를 더했다.",
    "turning": "다음 반복의 빈 병은 교환하고 남은 my%a와 새로 받아 마신 cola의 합이다. 이전 코드에서는 cola를 my에 두 번 더했지만 my=my%a+cola 한 줄이면 충분하다. my가 a와 같은 경우도 교환할 수 있으므로 조건은 my>=a다.",
    "learned": [
      "반복 시뮬레이션에서는 현재 상태와 이번 변화량을 다른 변수로 둔다.",
      "몫은 교환 횟수, 나머지는 교환 후 남은 병을 뜻한다.",
      "경계값 my==a를 손으로 확인하면 >와 >=를 구분할 수 있다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "#include <string>\n#include <vector>\nusing namespace std;\nint solution(int a, int b, int n) {\n    int answer = 0, cola = 0, my = n;\n    while(my >= a)\n    {\n        cola = (my / a) * b;\n        my = my % a + cola;\n        answer += cola;\n    }\n    return answer;\n}",
    "verification": "프로그래머스 정답 · 100 / 100"
  }
];
