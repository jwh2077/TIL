window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-120807.js"] = [
  {
    "id": "pg-120807",
    "title": "숫자 비교하기",
    "group": "implementation",
    "tags": [
      "프로그래머스",
      "조건문",
      "비교"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/120807",
    "status": "통과 확인",
    "date": "2026-08-05",
    "problem": "두 정수가 같으면 1, 다르면 -1을 반환한다.",
    "summary": "num1과 num2를 ==로 비교했다.",
    "attempt": "같은 경우 return 1로 끝냈다.",
    "turning": "else에서는 -1을 반환한다.",
    "learned": [
      "==는 두 값이 같은지 비교한다."
    ],
    "code_title": "통과 제출 원본 · C",
    "solution_code": "#include <stdio.h>\r\n#include <stdbool.h>\r\n#include <stdlib.h>\r\n\r\nint solution(int num1, int num2) {\r\n    if(num1 == num2){\r\n        return 1;      \r\n    }\r\n    else{\r\n        return -1;\r\n    }\r\n\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C · 제출 2026-08-05 22:10:22 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 같은 목록에서 확인한 다른 통과 제출: 2026-08-05 22:08:30, 2026-07-02 09:15:56, 2026-07-02 08:58:21. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
