window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12917.js"] = [
  {
    "id": "pg-12917",
    "title": "문자열 내림차순으로 배치하기",
    "group": "string",
    "tags": [
      "프로그래머스",
      "문자열",
      "정렬",
      "sort"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12917",
    "status": "통과 확인",
    "date": "2026-08-18",
    "problem": "문자열의 문자를 내림차순으로 정렬한다.",
    "summary": "sort에 greater<char>()를 전달해 문자를 내림차순으로 정렬했다.",
    "attempt": "s.begin()부터 s.end()까지 정렬했다.",
    "turning": "정렬된 s를 그대로 반환한다.",
    "learned": [
      "greater<char>()는 문자 비교를 내림차순으로 지정한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <algorithm>\r\n\r\nusing namespace std;\r\n\r\nstring solution(string s) {\r\n    sort(s.begin(), s.end(), greater<char>());\r\n    return s;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-08-18 09:19:28 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
