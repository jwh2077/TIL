window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12933.js"] = [
  {
    "id": "pg-12933",
    "title": "정수 내림차순으로 배치하기",
    "group": "math",
    "tags": [
      "프로그래머스",
      "자릿수",
      "정렬",
      "vector"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12933",
    "status": "통과 확인",
    "date": "2026-07-24",
    "problem": "정수의 각 자릿수를 내림차순으로 배치한 수를 구한다.",
    "summary": "자릿수를 vector에 넣어 정렬한 뒤 작은 숫자부터 낮은 자리에 더했다.",
    "attempt": "n % 10으로 숫자를 꺼내고 n을 10으로 나눴다. 모은 숫자는 sort로 오름차순 정렬했다.",
    "turning": "B와 C로 자리값을 늘리면서 각 숫자를 answer에 더했다. 작은 숫자가 낮은 자리에 들어가 최종 숫자는 내림차순 배치가 된다.",
    "learned": [
      "제출 후 코드 메모: answer는 long long이지만 B, C와 a * C는 int 연산이라 자리수가 커지면 오버플로에 주의해야 한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n#include <algorithm>\r\n\r\nusing namespace std;\r\n\r\nlong long solution(long long n)\r\n{\r\n    long long answer = 0;\r\n    vector<int>A;\r\n    while (n > 0)\r\n    {\r\n        A.push_back(n % 10);\r\n        n = n / 10;\r\n    }\r\n    sort(A.begin(), A.end());\r\n    int B = 1;\r\n    int C = 1;\r\n\r\n    for (auto& a : A)\r\n    {\r\n        C = B;\r\n        B *= 10;\r\n        answer += a * C;\r\n    }\r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-07-24 09:36:08 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
