window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-88-merge-sorted-array.js"] = [
  {
    "id": "lc-88",
    "title": "정렬된 배열 병합",
    "group": "array",
    "url": "https://leetcode.com/problems/merge-sorted-array/",
    "status": "통과 확인",
    "problem": "두 정렬 배열을 nums1에 오름차순으로 합친다.",
    "date": "2026-09-08",
    "summary": "nums2를 nums1 뒤에 복사하고 sort로 정렬한 코드가 통과했다.",
    "question": "처음에는 nums2를 nums1 뒤에 붙이고 sort하려 했다. 한 번의 순회로 끝내려면 이미 확보된 nums1의 뒤 공간을 어떻게 사용할지가 핵심이었다.",
    "attempt": "m과 n을 각각 마지막 유효 인덱스로 줄이고, nums1의 맨 뒤부터 두 배열의 큰 값을 넣으려 했다. 한쪽 인덱스가 -1이 된 뒤에도 접근하면서 런타임 오류가 생겼다.",
    "turning": "뒤에서 큰 값부터 넣는 방법을 시도하다 인덱스 오류가 났다. 통과한 제출은 nums2를 nums1의 빈 구간에 복사한 뒤 sort로 전체를 정렬하는 방식이다.",
    "learned": [
      "m과 n은 개수라 마지막 인덱스는 각각 m-1, n-1이다.",
      "아래 제출 코드는 복사 후 정렬한다. 뒤에서 합치는 방식과 구분해야 한다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) \n    {\n        for(int i = m; i < m + n; i++) nums1[i] = nums2[i - m];\n        sort(nums1.begin(),nums1.end());\n    }\n};",
    "verification": "LeetCode Accepted · 63 / 63 · 9/29 본인 제출 목록의 마지막 결과: 2026-09-08 Runtime Error (사이트 표시일, 학습일과 구분) · 위 통과 근거와 마지막 제출 결과는 서로 다른 제출",
    "submission_url": "https://leetcode.com/submissions/detail/2134457404/"
  }
];
