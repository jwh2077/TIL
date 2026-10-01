window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12945.js"] = [
  {
    "id": "pg-12945",
    "title": "피보나치 수",
    "group": "dp",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12945",
    "status": "통과 확인",
    "date": "2026-09-22",
    "problem": "n번째 피보나치 수를 1234567로 나눈 나머지를 반환한다.",
    "summary": "F(n)까지 저장하려고 vector 크기를 n+1로 고치고, 값이 커진 뒤가 아니라 더할 때마다 나머지를 저장했다.",
    "question": "vector<int> Fibonacci(n)으로 F(n)에 접근했고 실패 원인을 오버플로우로만 생각했다. 더 큰 자료형을 쓰거나 마지막에만 나머지를 구하는 방법도 시도했다.",
    "attempt": "F(0)과 F(1)을 먼저 넣고 2부터 n까지 앞의 두 값을 더했다. 배열 범위를 맞춘 뒤 각 계산에 % 1234567을 적용했다.",
    "turning": "n칸 배열의 마지막 인덱스는 n-1이라 F(n)을 저장하려면 n+1칸이 필요했다. 또한 큰 피보나치 수를 만든 뒤 나누면 이미 오버플로우가 나므로 중간 계산마다 나머지를 남겼다.",
    "learned": [
      "F(0)부터 F(n)까지 저장하려면 vector 크기는 n+1이다.",
      "(a+b)%m은 ((a%m)+(b%m))%m과 같아서 계산 중간에 나머지를 구할 수 있다.",
      "제출 내역에는 28.6점, 42.9점 이후 100점이 남아 있다. 통과 코드는 vector<long long>(n + 1)에 매 단계 나머지를 저장한다."
    ],
    "code_title": "통과한 제출 코드",
    "solution_code": "#include <vector>\n\nusing namespace std;\n\nint solution(int n) {\n    int answer = 0;\n    vector<long long> Fibonacci(n + 1);\n    Fibonacci[0] = 0;\n    Fibonacci[1] = 1;\n    for(int i = 2; i <= n; i++)\n    {\n        Fibonacci[i] = (Fibonacci[i - 1] + Fibonacci[i - 2]) % 1234567;\n    }\n    if(n <= 2)\n    {\n        return Fibonacci[n] % 1234567;\n    }\n    return Fibonacci[n];\n}",
    "verification": "프로그래머스 정답 · 100 / 100 · 제출 2026-09-22 08:34:08 · 로그인된 제출 내역에서 코드 확인"
  }
];
