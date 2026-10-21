window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12937.js"] = [
  {
    "id": "pg-12937",
    "title": "짝수와 홀수",
    "group": "math",
    "tags": [
      "프로그래머스",
      "나머지",
      "조건문"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12937",
    "status": "통과 확인",
    "date": "2026-08-05",
    "problem": "정수가 짝수이면 Even, 홀수이면 Odd를 반환한다.",
    "summary": "2로 나눈 나머지로 짝수와 홀수를 나눴다.",
    "attempt": "num % 2가 0이면 Even을 반환했다.",
    "turning": "짝수 조건에 해당하지 않으면 Odd를 반환한다.",
    "learned": [
      "짝수는 2로 나눈 나머지가 0이다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n\r\nusing namespace std;\r\n\r\nstring solution(int num) {\r\n    if(num % 2 == 0){\r\n    return \"Even\";\r\n    }\r\n    return \"Odd\";\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-08-05 22:50:02 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 같은 목록에서 확인한 다른 통과 제출: 2026-07-10 09:54:42. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
