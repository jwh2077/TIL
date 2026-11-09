window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-80-remove-duplicates-from-sorted-array-ii.js"] = [
  {
    "id": "lc-80",
    "title": "Remove Duplicates from Sorted Array II · 역순으로 중복 제거하기",
    "group": "array",
    "tags": [
      "LeetCode",
      "배열",
      "vector",
      "시간 복잡도"
    ],
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
    "submission_url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/submissions/2191842400",
    "status": "통과 확인",
    "date": "2026-11-08",
    "problem": "정렬된 정수 배열에서 같은 숫자를 최대 두 개까지 남기고, 남은 원소 수를 반환한다. 입력 배열을 직접 수정하며 추가 공간은 O(1)이어야 한다. LeetCode Medium 문제다.",
    "summary": "erase()로 원소를 지우며 뒤에서부터 순회했다. 반복문 범위와 temp 갱신, 중복 개수 조건을 수정해 통과했다. 추가 공간은 O(1)이지만 반복적인 삭제로 시간은 최악 O(n²)이 걸릴 수 있다.",
    "question": "처음에는 vector의 erase()로 중복 원소를 지운 뒤 nums.size()를 반환하려고 했다. 삭제하면 뒤쪽 원소가 앞으로 이동하므로, 뒤에서부터 지우면 아직 검사하지 않은 앞쪽 인덱스는 유지할 수 있겠다고 생각했다.",
    "attempt": "마지막 원소를 temp에 저장하고 그 앞에서부터 비교했다. 처음에는 반복 조건을 i > 0으로 써서 인덱스 0을 검사하지 않았다. i >= 0으로 고쳤고, 반복문 안에서 int temp = nums[i]로 새 변수를 만들었던 부분도 temp = nums[i]로 바꿨다.\n\n같은 값을 최대 두 개까지 남겨야 해서 count로 중복 횟수를 셌다. 처음에는 count > 2일 때 지웠는데, [1,1,1,1]에서 세 개가 남았다. count는 마지막 원소를 제외하고 추가로 만난 같은 값의 개수를 세고 있었다.",
    "turning": "같은 값을 추가로 두 번 만났다면 세 번째 원소이므로 count >= 2일 때 삭제하도록 바꿨다. 값이 달라지면 count를 0으로 초기화했다. 역순으로 끝까지 검사한 뒤 남은 배열의 크기를 반환했고, 170개 테스트를 모두 통과했다.",
    "learned": [
      "뒤에서부터 삭제하면 아직 검사하지 않은 앞쪽 원소들의 인덱스는 유지된다. 다만 erase()가 뒤쪽 원소를 옮기는 비용까지 없어지는 것은 아니다.",
      "count가 전체 등장 횟수인지, 기준 원소 이후 추가로 만난 횟수인지에 따라 삭제 조건이 달라졌다.",
      "기존 배열을 직접 수정하고 변수만 추가로 사용해서 추가 공간은 O(1)이다. 삭제할 때마다 원소를 이동시킬 수 있어 시간 복잡도는 최악 O(n²)이다."
    ],
    "code_title": "최종 통과 코드 · C++",
    "solution_code": "class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        int temp = nums[nums.size() - 1];\n        int count = 0;\n        for(int i = nums.size() - 2; i >= 0; i--)\n        {\n            if(temp == nums[i])\n            {\n                count++;\n                if(count >= 2)\n                {\n                   nums.erase(nums.begin() + i);\n                }\n            }\n            else\n            {\n                count = 0;\n            }\n            temp = nums[i];\n        }\n        return nums.size();\n    }\n};",
    "code_result": "2026-11-08 18:21 · Accepted 170/170 · Runtime 16 ms (Beats 6.75%) · Memory 19.65 MB (Beats 22.24%)",
    "verification": "사용자 제공 학습일 2026-11-08, 제출일 2026-11-08 18:21. C++ 제출 원본과 Accepted 170/170 결과를 제공받았다. 제출 링크는 사용자 제공 주소이며 별도 재조회하지 않았다."
  }
];
