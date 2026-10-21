window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12916.js"] = [
  {
    "id": "pg-12916",
    "title": "문자열 내 p와 y의 개수",
    "group": "string",
    "tags": [
      "프로그래머스",
      "문자열",
      "빈도",
      "조건문"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12916",
    "status": "통과 확인",
    "date": "2026-07-24",
    "problem": "대소문자를 구분하지 않고 p와 y의 개수가 같은지 확인한다.",
    "summary": "소문자와 대문자를 함께 비교해 p와 y를 각각 셌다.",
    "attempt": "y 또는 Y이면 y를, p 또는 P이면 p를 증가시켰다.",
    "turning": "두 개수가 다르면 false로 바꾸고, 같으면 초기값 true를 반환한다.",
    "learned": [
      "두 문자가 모두 없으면 개수가 0으로 같아 true가 된다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nbool solution(string s)\r\n{\r\n    bool answer = true;\r\n\tint y = 0;\r\n\tint p = 0;\r\n\tfor (int i = 0; i < s.size(); i++)\r\n\t{\r\n\t\tif (s[i] == 'y' || s[i] == 'Y')\r\n\t\t{\r\n\t\t\ty++;\r\n\t\t}\r\n\t\tif (s[i] == 'p' || s[i] == 'P')\r\n\t\t{\r\n\t\t\tp++;\r\n\t\t}\r\n\t}\r\n\tif (y != p)\r\n\t{\r\n\t\tanswer = false;\r\n\t}\r\n\r\n\r\n    return answer;\r\n}\r\n",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-24 17:37:14 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
