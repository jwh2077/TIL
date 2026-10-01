window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-1510-stone-game-iv.js"] = [
  {
    "id": "lc-1510",
    "title": "Stone Game IV · 승패 DP",
    "group": "dp",
    "url": "https://leetcode.com/problems/stone-game-iv/",
    "status": "통과 확인",
    "problem": "제곱수만큼 돌을 제거하는 게임의 선공 승패를 구한다.",
    "date": "2026-09-10",
    "summary": "돌을 가져간 뒤 상대가 지는 상태를 만들 수 있는지 dp에 저장했다.",
    "question": "bool 배열에 true와 false만 넣으면 계산 전 상태와 패배 상태를 어떻게 구분하는지, dp[1]과 dp[4]가 왜 모두 true인지가 혼란스러웠다.",
    "attempt": "dp를 0부터 n까지 순서대로 채우면 현재 i보다 작은 상태는 이미 계산되어 있다. i에서 j²개를 가져간 뒤 남는 상태는 i-j*j이며, 그 상태가 상대의 패배라면 현재 상태는 승리다.",
    "turning": "초기 코드의 dp[i+j*j]는 미래 상태를 보므로 아직 계산되지 않았다. i-j*j로 바꾸고 false인 이전 상태 하나를 찾으면 dp[i]=true로 두고 반복을 끝낸다. 마지막에는 dp[n]을 반환해야 한다.",
    "learned": [
      "dp[i]는 돌 i개에서 현재 차례인 사람이 이길 수 있는지를 뜻한다.",
      "선택 후 상대에게 패배 상태를 넘길 수 있으면 현재는 승리 상태다.",
      "작은 인덱스부터 채우면 필요한 이전 결과가 이미 계산되어 있다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    bool winnerSquareGame(int n) \n    {\n        vector<bool> dp(1 + n, false);\n        for (int i = 1 ; i <= n; i++)\n        {\n            for(int j = 1 ; j * j <= i; j++)\n            {\n                if(!dp[i - j * j])\n                {\n                    dp[i] = true;\n                    break;\n                }\n            }\n        }\n        return dp[n];\n    }\n};",
    "verification": "LeetCode Accepted · 72 / 72 · 9/29 본인 제출 목록의 마지막 결과: 2026-09-10 Accepted (사이트 표시일, 학습일과 구분)",
    "submission_url": "https://leetcode.com/submissions/detail/2136668367/"
  }
];
