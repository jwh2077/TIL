window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12932.js"] = [
  {
    "id": "pg-12932",
    "title": "자연수 뒤집어 배열로 만들기",
    "group": "array",
    "tags": [
      "프로그래머스",
      "자릿수",
      "vector",
      "나머지"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12932",
    "status": "통과 확인",
    "date": "2026-07-21",
    "problem": "자연수의 각 자릿수를 뒤집은 순서로 배열에 담는다.",
    "summary": "일의 자리부터 꺼내 vector에 넣었다.",
    "attempt": "n % 10을 answer에 넣은 뒤 n을 10으로 나누는 과정을 반복했다.",
    "turning": "n이 0이 되면 반복을 끝내고 배열을 반환한다.",
    "learned": [
      "일의 자리부터 꺼내므로 따로 배열을 뒤집지 않아도 역순으로 저장된다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nvector<int> solution(long long n) {\r\n    vector<int> answer;\r\n\r\n    while (n != 0)\r\n    {\r\n        int x = n % 10;\r\n        answer.push_back( x );\r\n        n = n / 10;\r\n    }\r\n\r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-21 08:48:00 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
