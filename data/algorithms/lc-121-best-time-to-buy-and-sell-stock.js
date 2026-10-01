window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-121-best-time-to-buy-and-sell-stock.js"] = [
  {
    "id": "lc-121",
    "title": "주식 한 번 거래의 최대 이익",
    "group": "greedy",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "status": "통과 확인",
    "problem": "한 번 사고 이후 팔아 얻는 최대 이익을 구한다.",
    "date": "2026-09-03",
    "summary": "뒤에서부터 가격을 보면서 가장 높은 가격을 기억하고, 현재 가격과의 차이로 최대 이익을 구했다.",
    "question": "처음에는 prices.size()부터 접근하고 가능한 차익을 total에 계속 더했다. 그러나 이 문제는 여러 번의 이익 합이 아니라 한 번의 매수와 매도의 최대 차이를 묻는다.",
    "attempt": "마지막 날부터 거꾸로 보며 가장 높은 가격을 topprices에 저장했다. topprices - prices[i]로 차익을 구하고 profit에는 가장 큰 차익만 남겼다.",
    "turning": "첫 인덱스는 size()-1로 고쳤다. 최고 가격과 최대 이익을 각각 max로 갱신했다. 같은 코드를 제출해도 Runtime 값이 달라져 그 숫자만으로 속도를 비교하기는 어려웠다.",
    "learned": [
      "미래 값이 필요한 문제는 뒤에서 순회하는 방법을 고려한다.",
      "한 번 거래이므로 차익을 누적하지 않고 최댓값만 저장한다.",
      "실행 시간 표시의 작은 차이보다 O(n), O(1) 구조가 더 안정적인 판단 기준이다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) \n    {\n        int topprices = 0;\n        int profit = 0;\n        for(int i = prices.size() - 1; i >= 0; i--)\n        {\n            topprices = max(topprices, prices[i]);\n            profit = max(profit, topprices - prices[i]);\n        }\n        return profit;\n    }\n};",
    "verification": "LeetCode Accepted · 213 / 213 · 9/29 본인 제출 목록의 마지막 결과: 2026-09-03 Accepted (사이트 표시일, 학습일과 구분)",
    "submission_url": "https://leetcode.com/submissions/detail/2129035853/"
  }
];
