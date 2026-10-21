window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-82612.js"] = [
  {
    "id": "pg-82612",
    "title": "부족한 금액 계산하기",
    "group": "math",
    "tags": [
      "프로그래머스",
      "누적합",
      "반복문",
      "long long"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/82612",
    "status": "통과 확인",
    "date": "2026-08-19",
    "problem": "이용 횟수에 비례해 요금이 늘어날 때 필요한 부족 금액을 구한다.",
    "summary": "회차별 요금을 더하고 가진 돈과 비교했다.",
    "attempt": "price * i를 long long sum에 누적했다.",
    "turning": "money가 sum 이상이면 0, 부족하면 sum - money를 반환한다.",
    "learned": [
      "결과가 0보다 작아지지 않도록 가진 돈이 충분한 경우를 따로 처리한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "using namespace std;\r\n\r\nlong long solution(int price, int money, int count)\r\n{\r\n    long long sum = 0;\r\n    for(int i = 0; i <= count; i++)\r\n    {\r\n        sum += price * i;\r\n    }\r\n    if (money >= sum)\r\n    {return 0;}\r\n    return sum - money;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-08-19 09:30:09 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 같은 목록에서 확인한 다른 통과 제출: 2026-08-19 09:28:23. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
