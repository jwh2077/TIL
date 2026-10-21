window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-120802.js"] = [
  {
    "id": "pg-120802",
    "title": "두 수의 합 구하기",
    "group": "math",
    "tags": [
      "프로그래머스",
      "사칙연산"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/120802",
    "status": "통과 확인",
    "date": "2026-07-02",
    "problem": "두 정수의 합을 구한다.",
    "summary": "두 매개변수를 더해 answer에 넣었다.",
    "attempt": "C로 작성했고 answer = num1 + num2로 합을 계산했다.",
    "turning": "answer를 반환한다.",
    "learned": [
      "함수의 매개변수로 받은 두 정수를 더한다."
    ],
    "code_title": "통과 제출 원본 · C",
    "solution_code": "#include <stdio.h>\r\n#include <stdbool.h>\r\n#include <stdlib.h>\r\n\r\nint solution(int num1, int num2) \r\n{\r\n    int answer = -1;\r\n    answer=num1+num2;\r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C · 제출 2026-07-02 09:17:36 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
