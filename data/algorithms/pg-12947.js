window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12947.js"] = [
  {
    "id": "pg-12947",
    "title": "하샤드 수",
    "group": "math",
    "tags": [
      "프로그래머스",
      "자릿수",
      "나머지"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12947",
    "status": "통과 확인",
    "date": "2026-07-29",
    "problem": "양의 정수가 자신의 자릿수 합으로 나누어떨어지는지 확인한다.",
    "summary": "자릿수 합을 구한 뒤 원래 수를 그 합으로 나눴다.",
    "attempt": "원래 x를 남겨 두고 복사한 y에서 % 10과 / 10으로 자릿수를 처리했다.",
    "turning": "x % a == 0이면 true를 반환한다.",
    "learned": [
      "자릿수를 제거해 가는 변수와 나중에 검사할 원래 값을 구분한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "bool solution(int x) {\r\n\tint y = x;\r\n\tint a = 0;\r\n\tbool answer = false;\r\n\twhile (y > 0)\r\n\t{\r\n\t\ta += y % 10;\r\n\t\ty = y / 10;\r\n\t}\r\n\tif (x % a == 0)\r\n\t{\r\n\t\tanswer = true;\r\n\t}\r\n\treturn answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-29 08:42:57 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
