window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-486-predict-the-winner.js"] = [
  {
    "id": "lc-486",
    "title": "양끝의 수를 골라 승자 예측하기",
    "group": "array",
    "url": "https://leetcode.com/problems/predict-the-winner/",
    "status": "오답 · 수정 중",
    "date": "2026-08-27",
    "problem": "두 사람이 배열 양끝에서 수를 하나씩 골라 점수를 더한다. 둘 다 최선으로 선택할 때 먼저 고른 사람의 점수가 같거나 더 큰지 구한다.",
    "summary": "양끝 값을 비교해 큰 수를 번갈아 더했지만 [1,5,233,7]에서 오답이 났다.",
    "question": "양끝의 수 중 큰 값을 고르고 WinA와 winB에 번갈아 더하는 코드로 풀어봤다. i와 index를 움직여 남은 구간을 줄였다.",
    "attempt": "앞뒤 값을 비교해 고른 쪽의 위치를 움직였다. 컴파일 오류를 고친 뒤에도 오답이 났다. 마지막 제출은 67개 중 1개만 통과했다.",
    "turning": "[1,5,233,7]에서는 false가 나왔지만 기대값은 true였다. 큰 값을 번갈아 고르는 코드로는 이 예제를 통과하지 못했다.",
    "learned": [
      "WinA와 winB에 각각 고른 수를 더하고 마지막에 두 점수를 비교했다.",
      "앞쪽 위치는 i를 늘리고, 뒤쪽 위치는 index를 줄여 옮겼다."
    ],
    "code_title": "마지막 제출 코드 · Wrong Answer",
    "solution_code": "class Solution {\npublic:\n    bool predictTheWinner(vector<int>& nums) {\n        int WinA = 0;\n        int winB = 0;\n        int index = nums.size() - 1;\n        int i = 0;\n        while(true)\n        {\n\n            if(nums[i] >= nums[index - i])\n            {\n                WinA += nums[i];\n                i++;\n            }\n            else\n            {\n                WinA += nums[index];\n                index--;\n            }\n            if(nums[i] >= nums[index])\n            {\n                winB += nums[i];\n                i++;\n            }\n            else\n            {\n                winB += nums[index];\n                index--;\n            }\n            if(i >= index)\n            {\n                if(WinA >= winB){return true;}\n                else{return false;}\n            }\n        }\n\n    }\n};",
    "verification": "LeetCode Wrong Answer · 1 / 67 · 제출 화면 2026-08-27 21:02 · 로그인된 본인 제출 코드 확인 · 기록 날짜는 제출 표시일 기준, 학습 시작일 미확인 · 통과 제출 없음",
    "submission_url": "https://leetcode.com/problems/predict-the-winner/submissions/2121862138"
  }
];
