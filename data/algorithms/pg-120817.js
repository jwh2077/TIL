window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-120817.js"] = [
  {
    "id": "pg-120817",
    "title": "배열의 평균값",
    "group": "array",
    "tags": [
      "프로그래머스",
      "배열",
      "평균",
      "실수 연산"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/120817",
    "status": "통과 확인",
    "date": "2026-07-13",
    "problem": "배열 원소의 평균을 구한다.",
    "summary": "double 변수에 원소를 모두 더하고 개수로 나눴다.",
    "attempt": "배열 뒤에서부터 앞까지 원소를 answer에 누적했다.",
    "turning": "answer를 numbers.size()로 나눈 값을 반환한다.",
    "learned": [
      "합을 double에 저장해 나눗셈 결과의 소수 부분을 유지한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\ndouble solution(vector<int> numbers) {\r\n    int s = numbers.size();\r\n    double answer = 0;\r\n    for (int i = s - 1; i >= 0; i--){\r\n        answer += numbers[i];\r\n    }\r\n    answer /= s;\r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-13 09:31:25 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
