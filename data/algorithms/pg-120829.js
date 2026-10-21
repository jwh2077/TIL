window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-120829.js"] = [
  {
    "id": "pg-120829",
    "title": "각도기",
    "group": "implementation",
    "tags": [
      "프로그래머스",
      "조건문",
      "범위 검사"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/120829",
    "status": "통과 확인",
    "date": "2026-07-08",
    "problem": "각도를 예각, 직각, 둔각, 평각으로 구분해 번호를 반환한다.",
    "summary": "각도의 범위를 if와 else if로 나눴다.",
    "attempt": "0보다 크고 90보다 작으면 1, 90이면 2로 처리했다.",
    "turning": "90보다 크고 180보다 작으면 3, 180이면 4를 반환한다.",
    "learned": [
      "범위 안의 값과 경계값을 구분해 조건을 작성한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n#include <iostream>\r\n\r\nusing namespace std;\r\n\r\nint solution(int angle)\r\n{\r\n    int answer = 0;\r\n    if (0 < angle && angle < 90)\r\n    {\r\n        answer = 1;\r\n    }\r\n    else if (angle == 90)\r\n    {\r\n        answer = 2;\r\n    }\r\n    else if (90 < angle && angle < 180)\r\n    {\r\n        answer = 3;\r\n    }\r\n    else if (angle == 180)\r\n    {\r\n        answer = 4;\r\n    }  \r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-08 09:38:10 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
