window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12954.js"] = [
  {
    "id": "pg-12954",
    "title": "x만큼 간격이 있는 n개의 숫자",
    "group": "array",
    "tags": [
      "프로그래머스",
      "vector",
      "반복문",
      "등차수열"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12954",
    "status": "통과 확인",
    "date": "2026-07-21",
    "problem": "x부터 시작해 x씩 증가하는 숫자 n개를 배열로 반환한다.",
    "summary": "현재 x를 배열에 넣고 처음의 간격을 계속 더했다.",
    "attempt": "처음 x를 y에 보관하고 n번 반복하며 answer에 x를 넣었다.",
    "turning": "매번 x += y로 다음 값을 만들었다.",
    "learned": [
      "제출 후 코드 메모: 결과 배열은 long long이지만 누적 변수 x와 y는 int다. 누적값이 int 범위를 넘으면 결과 배열의 자료형만으로 오버플로를 막을 수 없다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nvector<long long> solution(int x, int n)\r\n{\r\n    int y = x;\r\n    vector<long long> answer;\r\n    for (int i = n; i > 0; i--)\r\n    {\r\n        answer.push_back({ x });\r\n        x += y;\r\n    }\r\n\r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-21 08:32:35 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
