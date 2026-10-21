window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-120806.js"] = [
  {
    "id": "pg-120806",
    "title": "두 수의 나눗셈",
    "group": "math",
    "tags": [
      "프로그래머스",
      "사칙연산",
      "형변환",
      "실수 연산"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/120806",
    "status": "통과 확인",
    "date": "2026-07-07",
    "problem": "두 수를 나눈 값에 1000을 곱한 뒤 정수 부분을 반환한다.",
    "summary": "나누기 전에 num1을 double로 바꾸고 결과에 1000을 곱했다.",
    "attempt": "계산 결과를 float answer에 저장했다.",
    "turning": "int 반환형으로 반환하면서 소수 부분이 제거된다.",
    "learned": [
      "정수끼리 먼저 나눈 뒤 실수 변수에 저장하는 것과 나누기 전에 형변환하는 것은 다르다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nint solution(int num1, int num2) {\r\n    float answer = 0;\r\n    answer = (double)num1 / num2 ;\r\n    answer *= 1000;\r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-07 09:04:20 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 같은 목록에서 확인한 다른 통과 제출: 2026-07-05 12:59:10. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
