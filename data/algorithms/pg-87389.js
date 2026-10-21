window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-87389.js"] = [
  {
    "id": "pg-87389",
    "title": "나머지가 1이 되는 수 찾기",
    "group": "math",
    "tags": [
      "프로그래머스",
      "나머지",
      "완전 탐색"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/87389",
    "status": "통과 확인",
    "date": "2026-07-20",
    "problem": "n을 나눴을 때 나머지가 1이 되는 가장 작은 자연수를 찾는다.",
    "summary": "x를 1부터 늘리며 n % x가 1인지 확인했다.",
    "attempt": "answer가 0인 동안 반복하고 조건을 만족하면 answer에 x를 저장했다.",
    "turning": "작은 수부터 확인하므로 처음 찾은 값을 반환한다.",
    "learned": [
      "오름차순 탐색에서 처음 조건을 만족한 값이 최솟값이다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nint solution(int n) {\r\n    int answer = 0;\r\n    int x = 1;\r\n    while(answer == 0)\r\n    {\r\n        if(n % x == 1)\r\n        {\r\n            answer = x;\r\n        }\r\n        x++;\r\n    }\r\n        \r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-20 09:25:09 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
