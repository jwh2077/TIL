window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-120831.js"] = [
  {
    "id": "pg-120831",
    "title": "짝수의 합",
    "group": "math",
    "tags": [
      "프로그래머스",
      "반복문",
      "나머지"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/120831",
    "status": "통과 확인",
    "date": "2026-07-09",
    "problem": "n 이하의 짝수를 모두 더한다.",
    "summary": "n부터 내려가며 짝수만 더했다.",
    "attempt": "i를 줄이면서 i % 2 == 0인 경우 answer에 더했다.",
    "turning": "i가 0이 되면 반복을 마치고 합을 반환한다.",
    "learned": [
      "나머지 조건을 사용해 누적할 값을 고른다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n#include <iostream>\r\n\r\n\r\nusing namespace std;\r\n\r\nint solution(int n) \r\n{\r\n    int answer = 0;\r\n    for (int i = n; i > 0; i--)\r\n    {\r\n        if(i % 2 == 0)\r\n        answer += i;\r\n    }\r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-09 08:44:17 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 같은 목록에서 확인한 다른 통과 제출: 2026-07-08 09:50:41. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
