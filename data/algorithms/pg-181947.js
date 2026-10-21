window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-181947.js"] = [
  {
    "id": "pg-181947",
    "title": "덧셈식 출력하기",
    "group": "implementation",
    "tags": [
      "프로그래머스",
      "입출력",
      "사칙연산"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/181947",
    "status": "통과 확인",
    "date": "2026-06-19",
    "problem": "입력받은 두 정수의 덧셈식을 결과와 함께 출력한다.",
    "summary": "두 수와 연산 기호를 이어 붙여 덧셈식을 출력했다.",
    "attempt": "a, +, b, =를 차례로 출력했다.",
    "turning": "a + b의 계산 결과를 이어 출력하고 줄을 바꿨다.",
    "learned": [
      "출력할 문자와 실제 계산식을 구분한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <iostream>\r\n\r\nusing namespace std;\r\n\r\nint main(void) \r\n{\r\n    int a;\r\n    int b;\r\n    cin >> a >> b;\r\n    cout << a << \" + \" << b <<\" = \"; \r\n    cout << a + b << endl;\r\n    return 0;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-06-19 11:16:24 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
