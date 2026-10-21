window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12925.js"] = [
  {
    "id": "pg-12925",
    "title": "문자열을 정수로 바꾸기",
    "group": "string",
    "tags": [
      "프로그래머스",
      "문자열",
      "stoi",
      "형변환"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12925",
    "status": "통과 확인",
    "date": "2026-07-24",
    "problem": "숫자로 이루어진 문자열을 정수로 변환한다.",
    "summary": "stoi로 문자열을 정수로 바꿨다.",
    "attempt": "std::string으로 받은 s를 std::stoi에 전달했다.",
    "turning": "변환한 값을 바로 반환한다.",
    "learned": [
      "stoi는 문자열을 int로 변환한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n\r\nint solution(std::string s) {\r\n    return std::stoi(s);\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-24 09:38:20 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 같은 목록에서 확인한 다른 통과 제출: 2026-07-23 08:45:18. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
