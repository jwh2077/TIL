window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12918.js"] = [
  {
    "id": "pg-12918",
    "title": "문자열 다루기 기본",
    "group": "string",
    "tags": [
      "프로그래머스",
      "문자열",
      "조건문",
      "숫자 판별"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12918",
    "status": "통과 확인",
    "date": "2026-08-21",
    "problem": "문자열 길이가 4 또는 6이고 모든 문자가 숫자인지 확인한다.",
    "summary": "길이를 먼저 확인하고 각 문자를 0부터 9까지 비교했다.",
    "attempt": "길이가 4나 6이면 문자열을 순회하면서 숫자 문자 10개 중 하나인지 검사했다.",
    "turning": "길이가 맞지 않거나 숫자가 아닌 문자가 있으면 false, 모두 통과하면 true를 반환한다.",
    "learned": [
      "문자 0과 정수 0은 다르므로 숫자 문자는 따옴표로 비교한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nbool solution(string s) {\r\n    if(4 == s.size() || 6 == s.size())\r\n    {\r\n        for(int i = 0; i < s.size(); i++)\r\n        {\r\n            char a = s[i];\r\n            if(a == '0'||a == '1'||a == '2'||a == '3'||a == '4'||a == '5'||a == '6'||a == '7'||a == '8'||a == '9'){}\r\n            else\r\n            {\r\n                return false;\r\n            }\r\n        }\r\n    }\r\n    else\r\n    {\r\n        return false;\r\n\r\n    }\r\n    return true;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-08-21 09:59:55 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
