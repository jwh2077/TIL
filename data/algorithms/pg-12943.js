window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12943.js"] = [
  {
    "id": "pg-12943",
    "title": "콜라츠 추측",
    "group": "simulation",
    "tags": [
      "프로그래머스",
      "반복문",
      "조건문",
      "long long"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12943",
    "status": "통과 확인",
    "date": "2026-07-30",
    "problem": "짝수는 2로 나누고 홀수는 3배 후 1을 더해 1이 될 때까지의 횟수를 구한다. 제한 횟수 안에 끝나지 않으면 -1을 반환한다.",
    "summary": "짝수와 홀수에 따라 값을 바꾸며 반복 횟수를 셌다.",
    "attempt": "num을 long long n에 옮기고 1이 아닐 동안 계산했다.",
    "turning": "계산할 때마다 answer를 늘리고, 500을 넘으면 -1로 바꿔 종료했다.",
    "learned": [
      "처음부터 1이면 반복하지 않아 0을 반환한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nint solution(int num) {\r\n    long long n = num;\r\n    int answer = 0;\r\n    while(n != 1)\r\n    {\r\n        if(n % 2 == 0)\r\n        {\r\n            n /= 2;\r\n        }\r\n        else\r\n        {\r\n            n = n * 3 + 1;\r\n        }\r\n        answer++;\r\n        if(answer > 500)\r\n        {\r\n            answer = -1;\r\n            break;\r\n        }\r\n    }\r\n\r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-30 09:15:15 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
