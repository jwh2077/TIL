window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12931.js"] = [
  {
    "id": "pg-12931",
    "title": "자릿수 더하기",
    "group": "math",
    "tags": [
      "프로그래머스",
      "자릿수",
      "나머지",
      "반복문"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12931",
    "status": "통과 확인",
    "date": "2026-08-05",
    "problem": "자연수의 각 자릿수를 더한다.",
    "summary": "10으로 나눈 나머지를 더하며 자릿수를 하나씩 제거했다.",
    "attempt": "answer에 n % 10을 더하고 n /= 10으로 다음 자리를 처리했다.",
    "turning": "나눈 n이 0이면 누적한 값을 반환한다.",
    "learned": [
      "정수 나눗셈으로 마지막 자릿수를 제거할 수 있다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "using namespace std;\r\n\r\nint solution(int n)\r\n{\r\n    int answer = 0;\r\n    while ( true )\r\n    {\r\n        answer += n % 10;\r\n        n /= 10;\r\n        if (n == 0)\r\n        {\r\n            return answer; \r\n        }\r\n    }\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-08-05 23:21:45 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 같은 목록에서 확인한 다른 통과 제출: 2026-07-16 09:22:23. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
