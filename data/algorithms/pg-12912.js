window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12912.js"] = [
  {
    "id": "pg-12912",
    "title": "두 정수 사이의 합",
    "group": "math",
    "tags": [
      "프로그래머스",
      "반복문",
      "누적합"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12912",
    "status": "통과 확인",
    "date": "2026-07-29",
    "problem": "두 정수 사이의 모든 정수를 양 끝값까지 포함해 더한다.",
    "summary": "작은 값을 a에 둔 뒤 a부터 b까지 더했다.",
    "attempt": "a가 b보다 크면 임시 변수 c를 사용해 두 값을 바꿨다.",
    "turning": "long long answer에 a부터 b까지 누적해 반환한다.",
    "learned": [
      "입력 순서를 먼저 맞추면 같은 반복문으로 처리할 수 있다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "long long solution(int a, int b) {\r\n\tlong long answer = 0;\r\n\tif (a > b)\r\n\t{\r\n\t\tint c = a;\r\n\t\ta = b;\r\n\t\tb = c;\r\n\t}\r\n\tfor (int i = a; i <= b; i++)\r\n\t{\r\n\t\tanswer += i;\r\n\t}\r\n\treturn answer;\r\n}\r\n",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-29 08:51:21 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
