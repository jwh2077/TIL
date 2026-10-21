window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12934.js"] = [
  {
    "id": "pg-12934",
    "title": "정수 제곱근 판별",
    "group": "math",
    "tags": [
      "프로그래머스",
      "제곱근",
      "완전 탐색"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12934",
    "status": "통과 확인",
    "date": "2026-07-24",
    "problem": "n이 양의 정수의 제곱이면 그 정수보다 1 큰 수의 제곱을, 아니면 -1을 반환한다.",
    "summary": "정수를 하나씩 늘리며 제곱한 값이 n과 같은지 비교했다.",
    "attempt": "answer를 -1로 두고 i를 1부터 늘렸다. i * i == n이면 (i + 1) * (i + 1)을 반환했다.",
    "turning": "일치하는 값을 찾지 못하면 초기값 -1을 반환한다.",
    "learned": [
      "제출 후 코드 메모: 반복 상한이 n / 2 + 1이라 완전제곱수가 아닌 큰 입력에서는 탐색이 길어질 수 있고, i * i의 정수 범위도 주의해야 한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nlong long solution(long long n) {\r\n    long long answer = -1;\r\n    for(long long i = 1; i <= (n / 2) + 1; i++)\r\n    {\r\n        if(i * i == n)\r\n        {\r\n            answer = (i + 1) * (i + 1);\r\n            return answer;\r\n        }\r\n    }\r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-24 09:03:19 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
