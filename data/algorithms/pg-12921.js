window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12921.js"] = [
  {
    "id": "pg-12921",
    "title": "소수 찾기",
    "group": "math",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12921",
    "status": "오답 · 시간 초과",
    "problem": "2부터 n까지 소수의 개수를 센다.",
    "date": "2026-09-10",
    "summary": "약수를 하나씩 검사하고 반복을 줄여봤지만 시간 초과가 남았다.",
    "question": "각 숫자를 2부터 절반까지 나누며 소수인지 확인했다. break와 홀수만 검사하는 방법으로 반복을 줄였지만 큰 n에서는 여전히 시간 초과가 났다.",
    "attempt": "짝수는 합성수로 먼저 표시하고 3부터 홀수 약수만 검사했다. 이 과정에서 2도 짝수라는 이유로 제외되는 예외가 생겼고 별도 보정을 넣었다.",
    "turning": "2를 따로 처리해도 각 숫자의 약수를 반복해서 찾는 데 시간이 많이 든다. 당시 제출은 68.8점이었다. 아래 에라토스테네스의 체는 배수를 지워나가는 참고 풀이이고, 당시 제출 코드와는 다르다.",
    "learned": [
      "최적화 전에 작은 경계값 2, 3, 4를 확인해야 한다.",
      "break는 한 숫자의 검사를 줄이지만 전체 복잡도를 충분히 낮추지 못할 수 있다.",
      "정확성 실패와 시간 초과는 원인과 해결 방법이 다르다."
    ],
    "code_title": "참고 예제 · 배수를 지우는 방식",
    "solution_code": "int solution(int n) {\n    vector<bool> isPrime(n + 1, true);\n    isPrime[0] = isPrime[1] = false;\n\n    for (int i = 2; i * i <= n; i++) {\n        if (!isPrime[i]) continue;\n        for (int multiple = i * i; multiple <= n; multiple += i) {\n            isPrime[multiple] = false;\n        }\n    }\n\n    return count(isPrime.begin(), isPrime.end(), true);\n}",
    "verification": "프로그래머스 오답 · 68.8 / 100 · 최근 제출 2026-09-10 20:38:25 · 로그인된 제출 내역 확인"
  }
];
