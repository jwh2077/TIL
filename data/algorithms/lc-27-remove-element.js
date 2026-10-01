window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-27-remove-element.js"] = [
  {
    "id": "lc-27",
    "title": "특정 값 제거",
    "group": "array",
    "url": "https://leetcode.com/problems/remove-element/",
    "status": "통과 확인",
    "date": "2026-09-01",
    "verification": "LeetCode Accepted · 116 / 116 · 9/29 본인 제출 목록의 마지막 결과: 2026-08-31 Accepted (사이트 표시일, 학습일과 구분)",
    "problem": "배열에서 val과 같은 원소를 제자리에서 제거하고 남은 원소 수를 반환한다.",
    "summary": "순회 중 목표 값을 만나면 erase하고 인덱스를 되돌려 연속된 목표 값도 놓치지 않았다.",
    "question": "",
    "attempt": "nums[i]가 val이면 그 위치를 지운 다음 i--를 수행했다. for문의 i++와 합쳐져 같은 인덱스를 다시 확인한다.",
    "turning": "지운 뒤에는 다음 값이 현재 위치로 당겨진다. i를 한 칸 줄여 다음 반복에서 그 위치를 다시 검사한다.",
    "learned": [
      "vector::erase는 원소 수와 인덱스를 함께 바꾼다.",
      "연속 삭제에서는 당겨진 원소를 다시 확인해야 한다.",
      "제자리 문제에서는 덮어쓰기 방식도 검토한다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    int removeElement(vector<int>& nums, int val) {\n        for(int i = 0; i < nums.size(); i++) {\n            if (nums[i] == val) { nums.erase(nums.begin()+i); i--; }\n        }\n        return nums.size();\n    }\n};",
    "submission_url": "https://leetcode.com/submissions/detail/2125542053/"
  }
];
