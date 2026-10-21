window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12940.js"] = [
  {
    "id": "pg-12940",
    "title": "최대공약수와 최소공배수",
    "group": "math",
    "tags": [
      "프로그래머스",
      "약수",
      "최대공약수",
      "최소공배수"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12940",
    "status": "통과 확인",
    "date": "2026-08-25",
    "problem": "두 정수의 최대공약수와 최소공배수를 순서대로 반환한다.",
    "summary": "작은 수부터 내려가며 공통 약수를 찾고 두 수의 곱을 그 값으로 나눴다.",
    "attempt": "n이 작도록 자리를 바꾼 뒤 i를 줄이며 n과 m 모두 나누어떨어지는지 검사했다.",
    "turning": "처음 찾은 i를 최대공약수로 저장하고 n * m / i로 최소공배수를 구했다.",
    "learned": [
      "큰 후보부터 내려오므로 처음 찾은 공약수가 최대공약수다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nvector<int> solution(int n, int m) {\r\n    vector<int> answer (2);\r\n    int num;\r\n    if (n > m)\r\n    {\r\n        int num = m;\r\n        m = n;\r\n        n = num;\r\n    }\r\n    for(int i = n; true; i--)\r\n    {\r\n        if(n % i == 0 && m % i == 0)\r\n        {\r\n            answer[0] = i;\r\n            break;\r\n        }\r\n    }\r\n    answer[1] = n * m / answer[0];\r\n    \r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-08-25 09:30:10 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
