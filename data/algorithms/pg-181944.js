window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-181944.js"] = [
  {
    "id": "pg-181944",
    "title": "홀짝 구분하기",
    "group": "implementation",
    "tags": [
      "프로그래머스",
      "입출력",
      "나머지",
      "조건문"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/181944",
    "status": "통과 확인",
    "date": "2026-06-19",
    "problem": "입력한 정수가 짝수인지 홀수인지 지정된 문장으로 출력한다.",
    "summary": "n % 2로 나누어 even 또는 odd 문장을 출력했다.",
    "attempt": "나머지가 0이면 짝수 문장을 출력했다.",
    "turning": "그 밖에는 홀수 문장을 출력했다.",
    "learned": [
      "if와 else로 두 출력 경우를 나눈다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <iostream>\r\nusing namespace std;\r\n\r\nint main() \r\n{\r\n    int n;\r\n    \r\n    cin >> n;\r\n    \r\n    if (n % 2 == 0)\r\n        cout << n << \" is even \" <<endl;\r\n    else\r\n        cout << n << \" is odd \" <<endl;\r\n    return 0;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-06-19 11:34:34 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 같은 목록에서 확인한 다른 통과 제출: 2026-06-19 11:33:47. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
