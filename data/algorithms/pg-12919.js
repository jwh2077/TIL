window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12919.js"] = [
  {
    "id": "pg-12919",
    "title": "서울에서 김서방 찾기",
    "group": "string",
    "tags": [
      "프로그래머스",
      "문자열",
      "선형 탐색",
      "to_string"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12919",
    "status": "통과 확인",
    "date": "2026-08-03",
    "problem": "배열에서 Kim의 위치를 찾아 지정된 문장으로 반환한다.",
    "summary": "배열을 순회해 Kim이 있는 인덱스를 찾았다.",
    "attempt": "seoul[i]가 Kim이면 i를 to_string으로 바꿔 문장 사이에 넣었다.",
    "turning": "찾는 즉시 김서방은 i에 있다 형태로 반환한다.",
    "learned": [
      "숫자 인덱스를 문자열에 붙일 때 to_string을 사용한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nstring solution(vector<string> seoul) {\r\n    for (int i = 0; i < seoul.size(); i++)\r\n    {\r\n        if(seoul[i] == \"Kim\")\r\n        {\r\n            return \"김서방은 \" + to_string(i) + \"에 있다\";\r\n        }\r\n    }\r\n\r\n    return \"0\";\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-08-03 09:20:46 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 같은 목록에서 확인한 다른 통과 제출: 2026-07-31 14:45:04. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
