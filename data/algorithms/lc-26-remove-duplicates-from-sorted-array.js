window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-26-remove-duplicates-from-sorted-array.js"] = [
  {
    "id": "lc-26",
    "title": "정렬 배열에서 중복 제거",
    "group": "array",
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    "status": "통과 확인",
    "date": "2026-09-01",
    "verification": "LeetCode Accepted · 362 / 362 · 9/29 본인 제출 목록의 마지막 결과: 2026-08-31 Accepted (사이트 표시일, 학습일과 구분)",
    "problem": "정렬된 배열을 제자리에서 수정해 서로 다른 값만 앞부분에 남기고 그 개수를 반환한다.",
    "summary": "값의 범위와 정렬 상태를 이용해 같은 값의 두 번째 원소부터 erase로 제거했다.",
    "question": "",
    "attempt": "-100부터 100까지 각 값을 확인했다. 첫 번째 값은 남기고 같은 값이 또 나오면 erase한 뒤 index를 하나 줄여 당겨진 값을 다시 본다.",
    "turning": "erase할 때 뒤 원소들이 앞으로 이동한다. 값이 연속해서 중복되면 같은 위치를 다시 검사해야 빠뜨리지 않는다.",
    "learned": [
      "배열이 정렬되어 있어 같은 값들이 붙어 있다.",
      "erase를 반복하면 뒤 원소를 옮기는 일도 반복된다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        for(int i = -100; i <= 100;i++) {\n            bool era = false;\n            for(int index = 0; index < nums.size();index++) {\n                if(!era && nums[index] == i) era = true;\n                else if(era && nums[index] == i) { nums.erase(nums.begin() + index); index--; }\n            }\n        }\n        return nums.size();\n    }\n};",
    "submission_url": "https://leetcode.com/submissions/detail/2125551510/"
  }
];
