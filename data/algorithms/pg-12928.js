window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12928.js"] = [
  {
    "id": "pg-12928",
    "title": "약수의 합",
    "group": "math",
    "tags": [
      "프로그래머스",
      "약수",
      "나머지",
      "반복문"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12928",
    "status": "통과 확인",
    "date": "2026-07-20",
    "problem": "n의 약수를 모두 더한다.",
    "summary": "1부터 n까지 나누어떨어지는 수만 더했다.",
    "attempt": "n % i == 0인 i를 answer에 누적했다.",
    "turning": "반복을 마치면 약수의 합을 반환한다.",
    "learned": [
      "약수는 나누었을 때 나머지가 0인 수다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nint solution(int n) {\r\n    int answer = 0;\r\n    for (int i = 1; i <= n; i++)\r\n    {\r\n        if(n % i == 0 )\r\n        {\r\n            answer += i;\r\n        }\r\n        \r\n    }\r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-20 09:12:55 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
