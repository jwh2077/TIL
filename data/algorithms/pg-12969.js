window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12969.js"] = [
  {
    "id": "pg-12969",
    "title": "직사각형 별찍기",
    "group": "implementation",
    "tags": [
      "프로그래머스",
      "입출력",
      "중첩 반복문"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12969",
    "status": "통과 확인",
    "date": "2026-08-24",
    "problem": "가로 a개, 세로 b개의 별로 직사각형을 출력한다.",
    "summary": "중첩 반복문으로 한 줄의 별과 전체 줄 수를 나눴다.",
    "attempt": "안쪽 반복문에서 별을 a번 출력했다.",
    "turning": "한 줄마다 endl로 줄을 바꾸고 이를 b번 반복했다.",
    "learned": [
      "안쪽 반복문은 열, 바깥 반복문은 행을 처리한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <iostream>\r\n\r\nusing namespace std;\r\n\r\nint main(void) {\r\n    int a;\r\n    int b;\r\n    cin >> a >> b;\r\n    for(int x = 0; x < b; x++)\r\n    {\r\n        for(int y = 0; y < a; y++)\r\n        {\r\n            cout << \"*\";\r\n        }\r\n        cout << endl;\r\n    }\r\n    return 0;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-08-24 08:57:38 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
