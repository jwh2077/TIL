window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-120820.js"] = [
  {
    "id": "pg-120820",
    "title": "나이 출력",
    "group": "math",
    "tags": [
      "프로그래머스",
      "사칙연산"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/120820",
    "status": "통과 확인",
    "date": "2026-07-01",
    "problem": "문제에서 정한 2022년을 기준으로 나이에 해당하는 출생 연도를 구한다.",
    "summary": "2022에서 나이를 빼고 1을 더했다.",
    "attempt": "C 코드에서 2022 - age + 1을 계산했다.",
    "turning": "계산한 출생 연도를 반환한다.",
    "learned": [
      "기준 연도 2022는 현재 연도가 아니라 문제에 주어진 값이다."
    ],
    "code_title": "통과 제출 원본 · C",
    "solution_code": "#include <stdio.h>\r\n#include <stdbool.h>\r\n#include <stdlib.h>\r\n\r\nint solution(int age) \r\n{\r\n    int answer = 0;\r\n    answer = 2022 - age + 1 ;\r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C · 제출 2026-07-01 09:29:51 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 같은 목록에서 확인한 다른 통과 제출: 2026-07-01 09:27:47. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
