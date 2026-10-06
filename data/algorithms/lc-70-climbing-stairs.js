window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-70-climbing-stairs.js"] = [
  {
    "id": "lc-70",
    "title": "Climbing Stairs · 이전 두 계단의 경우의 수 더하기",
    "group": "dp",
    "tags": [
      "DP",
      "계단",
      "vector",
      "경우의 수"
    ],
    "url": "https://leetcode.com/problems/climbing-stairs/",
    "submission_url": "https://leetcode.com/problems/climbing-stairs/submissions/2163653661/",
    "status": "통과 확인",
    "date": "2026-10-06",
    "problem": "한 번에 1칸 또는 2칸씩 올라갈 때, n번째 계단에 도달하는 방법의 수를 구한다.",
    "summary": "1칸과 2칸을 조합해 직접 세다가, 마지막에 올 수 있는 위치가 n - 1과 n - 2라는 점으로 경우의 수를 나눴다.",
    "question": "처음에는 1칸씩 올라가서 n에 도착한 뒤, 1 두 개를 2 하나로 바꿔 가며 세려고 했다. 2가 들어갈 수 있는 개수로 구하면 될까 생각했는데, 뭔가 이 방식은 아닌 것 같았다.",
    "attempt": "작은 계단부터 경우의 수를 직접 적었다.\n\n1: 1\n2: 11, 2\n3: 111, 12, 21\n4: 1111, 112, 121, 211, 22\n5: 11111, 1112, 1121, 1211, 2111, 122, 212, 221\n\nDP로 풀려면 문제를 쪼개야 하는데, 각 계단에 도달하는 경우의 수를 따로 보면 어떨까 생각했다. n번째 계단으로 한 번에 올 수 있는 곳은 n - 1이나 n - 2니까, 그 둘에 도달하는 경우의 수를 더하면 됐다.",
    "turning": "계단 수를 키로 map에 넣고 이전 두 값을 더하려고 했다. 그런데 계단 번호로 접근할 거라면 굳이 map을 쓸 필요 없이 vector의 인덱스로 접근하면 되는 것이었다.\n\nA[1] = 1, A[2] = 2를 넣고 3부터 A[i] = A[i - 1] + A[i - 2]로 채웠다. n이 1일 때는 A[2]에 접근하기 전에 반환하도록 했다. 45개 테스트를 통과했다.",
    "learned": [
      "n번째 계단에는 n - 1에서 1칸, n - 2에서 2칸 올라오는 두 경우가 있다.",
      "각 계단까지의 경우의 수를 vector에 저장하고 이전 두 값을 더했다."
    ],
    "code_title": "통과 코드 · C++",
    "solution_code": "class Solution {\npublic:\n    int climbStairs(int n) {\n        vector<int> A(n + 1);\n        A[0] = 0;\n        A[1] = 1;\n        if(n < 2)\n        {\n            return A[n];\n        }\n        A[2] = 2;\n\n        for(int i = 3; i <= n; i++)\n        {\n            A[i] = A[i - 1] + A[i - 2];\n        }\n\n        return A[n];\n    }\n};",
    "verification": "사용자 제공 제출 결과: Accepted · 45 / 45 testcases passed. 제출 화면 시각 2026-10-06 09:03. Runtime 0 ms · Beats 100.00%, Memory 8.72 MB · Beats 18.73%. 제출 링크는 직접 열리지 않아 대화에 제공된 결과를 근거로 기록했다. 화면 시각의 시간대는 별도 확인하지 않았다. 풀이 기록 날짜는 2026-10-06 대화와 제공된 제출 날짜를 기준으로 했다."
  }
];
