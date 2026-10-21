window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-86051.js"] = [
  {
    "id": "pg-86051",
    "title": "없는 숫자 더하기",
    "group": "array",
    "tags": [
      "프로그래머스",
      "배열",
      "완전 탐색",
      "조건문"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/86051",
    "status": "통과 확인",
    "date": "2026-08-07",
    "problem": "0부터 9까지의 숫자 중 배열에 없는 숫자를 더한다.",
    "summary": "0부터 9까지 하나씩 배열에 있는지 찾아 없는 수만 더했다.",
    "attempt": "C로 숫자를 찾았는지 표시했다. 배열의 마지막까지 찾지 못하면 B를 true로 바꿨다.",
    "turning": "B가 true인 숫자 A만 answer에 더했다.",
    "learned": [
      "숫자 하나를 검사할 때마다 찾음 여부를 초기화한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nint solution(vector<int> numbers) {\r\n    int answer = 0;\r\n    for(int A = 0; A <= 9; A++)\r\n    {\r\n        bool B = false;\r\n        bool C = false;\r\n        for (int i = 0;i < numbers.size(); i++)\r\n        {\r\n            if (numbers[i] == A)\r\n            {\r\n                C = true;\r\n            }\r\n            else if(C == false && numbers.size() == i + 1)\r\n            {\r\n                B = true;\r\n            }\r\n        }        \r\n        if (B == true)\r\n        {\r\n            answer += A;\r\n        }\r\n    }\r\n        \r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-08-07 09:30:33 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
