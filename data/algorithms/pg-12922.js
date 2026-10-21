window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12922.js"] = [
  {
    "id": "pg-12922",
    "title": "수박수박수박수박수박수?",
    "group": "string",
    "tags": [
      "프로그래머스",
      "문자열",
      "나머지",
      "반복문"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12922",
    "status": "통과 확인",
    "date": "2026-08-12",
    "problem": "수와 박이 번갈아 나오는 길이 n의 문자열을 만든다.",
    "summary": "홀수 번째에는 수, 짝수 번째에는 박을 붙였다.",
    "attempt": "i를 1부터 n까지 돌며 i % 2에 따라 붙일 글자를 나눴다.",
    "turning": "문자열에 n번 글자를 이어 붙인 뒤 반환한다.",
    "learned": [
      "반복 인덱스의 홀짝으로 번갈아 나오는 패턴을 만들 수 있다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nstring solution(int n) {\r\n    string answer = \"\";\r\n    for (int i = 1; i <= n; i++)\r\n    {\r\n        if (i % 2 == 0)\r\n        {\r\n            answer = answer + \"박\";\r\n        }\r\n        else\r\n        {\r\n            answer = answer + \"수\";\r\n        }\r\n    }\r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-08-12 09:29:24 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
