window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-181951.js"] = [
  {
    "id": "pg-181951",
    "title": "a와 b 출력하기",
    "group": "implementation",
    "tags": [
      "프로그래머스",
      "입출력"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/181951",
    "status": "통과 확인",
    "date": "2026-06-18",
    "problem": "입력받은 a와 b를 지정된 형식으로 각각 출력한다.",
    "summary": "두 정수를 읽어 a = 값, b = 값 형식으로 출력했다.",
    "attempt": "cin >> a >> b로 값을 읽었다.",
    "turning": "각 문장 뒤에 endl을 넣어 줄을 나눴다.",
    "learned": [
      "문자열과 변수 값을 cout으로 이어 출력할 수 있다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <iostream>\r\nusing namespace std;\r\n\r\nint main(void) {\r\n    int a, b;\r\n\r\n    cin >> a >> b;\r\n    cout << \"a = \" << a << endl;\r\n    cout << \"b = \" << b << endl;\r\n    return 0;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-06-18 17:59:15 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
