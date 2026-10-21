window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-340207.js"] = [
  {
    "id": "pg-340207",
    "title": "[PCCE 기출문제] 1번 / 문자 출력",
    "group": "implementation",
    "tags": [
      "프로그래머스",
      "입출력",
      "문자열"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/340207",
    "status": "통과 확인",
    "date": "2026-06-29",
    "problem": "3, 2, 1과 지정된 메시지를 줄바꿈해 출력한다.",
    "summary": "cout과 endl을 연결해 숫자와 메시지를 출력했다.",
    "attempt": "message에 문자열을 저장하고 3, 2, 1을 각각 한 줄에 출력했다.",
    "turning": "마지막 줄에 message를 출력한다.",
    "learned": [
      "endl로 출력 뒤에 줄바꿈을 넣는다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <iostream>\r\n\r\nusing namespace std;\r\n\r\nint main(void) {\r\n    string message = \"Let's go!\";\r\n\r\n    cout << \"3\" << endl << \"2\" << endl << \"1\" << endl;\r\n    cout << message << endl;\r\n    \r\n    return 0;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-06-29 17:36:09 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
