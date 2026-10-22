window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-35-search-insert-position.js"] = [
  {
    "id": "lc-35",
    "title": "Search Insert Position · 선형 탐색에서 이진 탐색으로",
    "group": "array",
    "tags": [
      "LeetCode",
      "배열",
      "선형 탐색",
      "이진 탐색",
      "시간 복잡도"
    ],
    "url": "https://leetcode.com/problems/search-insert-position/",
    "submission_url": "https://leetcode.com/problems/search-insert-position/submissions/2178415740",
    "status": "통과 확인",
    "date": "2026-10-22",
    "problem": "오름차순으로 정렬된 서로 다른 정수 배열에서 target의 인덱스를 찾는다. 없다면 정렬 순서를 유지하며 삽입할 위치를 반환한다. 문제의 시간 복잡도 조건은 O(log n)이다.",
    "summary": "처음에는 배열을 순회해 68개 테스트를 통과했지만 O(log n) 조건은 만족하지 못했다. 현재 범위의 중간 인덱스와 종료 조건을 고쳐 이진 탐색으로도 통과했다.",
    "question": "배열을 처음부터 보면서 target 이상인 값이 나오면 그 인덱스를 반환했다. 끝까지 없으면 nums.size()를 반환했다. 68개 테스트는 모두 통과했지만, 이 풀이는 O(n)이라 문제에서 요구한 O(log n) 조건은 만족하지 못했다.",
    "attempt": "이진 탐색으로 다시 작성하면서 양 끝을 d와 u로 두고 중간값에 따라 범위를 줄이려고 했다. 처음에는 중간 인덱스를 u / 2로 계산해서 d가 바뀐 상황을 반영하지 못했다.\n\n중간 인덱스를 (u + d) / 2로 고친 뒤에도 범위 갱신에 u / 2나 d + (u / 2)가 남아 있었다. 양쪽 모두 현재 범위의 중간 인덱스로 갱신하도록 바꿨다. 그런데 경계가 더 이상 움직이지 않으면 반복이 끝나지 않을 수 있었다.",
    "turning": "target이 최댓값보다 크면 배열 끝, 최솟값보다 작으면 0을 먼저 반환했다. 이미 검사한 중간 위치를 mid + 1이나 mid - 1로 제외하는 대신, 두 경계가 인접하면 끝내는 u == d + 1 조건을 사용했다.\n\n경계의 값이 target과 같거나 두 경계가 인접하면 nums[d]를 확인해 d 또는 u를 반환했다. 범위를 절반씩 줄이는 두 번째 풀이도 68개 테스트를 통과했고, 시간 복잡도 O(log n), 추가 공간 O(1)로 처리했다.",
    "learned": [
      "Accepted를 받아도 문제에서 요구한 시간 복잡도를 만족하는지는 따로 봐야 했다.",
      "중간 인덱스는 현재 탐색 범위의 양 끝을 기준으로 계산해야 했다.",
      "범위를 갱신해도 경계가 그대로일 수 있어서 종료 조건을 함께 생각해야 했다.",
      "mid + 1, mid - 1로 범위를 줄이는 대신 경계를 유지하다 인접한 시점에 끝내는 방식으로 구현했다."
    ],
    "code_title": "풀이 2 · 이진 탐색 O(log n)",
    "solution_code": "class Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        int u = nums.size() - 1;\n        int d = 0;\n        \n        if(nums[u] < target)\n        {\n            return nums.size();\n        }\n\n        if(nums[0] > target)\n        {\n            return 0;\n        }\n\n        while(true)\n        {\n            if(nums[u] == target || nums[d] == target || u == d + 1)\n            {\n                if(nums[d] == target)\n                {\n                    return d;\n                }\n                return u;\n            }\n\n            if(nums[(u + d) / 2] > target)\n            {\n                u = (u + d) / 2;\n            }\n            else\n            {\n                d = (u + d) / 2;\n            }\n        }\n    }\n};",
    "verification": "학습일: 사용자 제공 2026-10-22. 두 제출 모두 C++, Accepted 68/68. 선형 탐색: 제출 2026-10-22 09:04 · Runtime 0 ms · Memory 13.71 MB · https://leetcode.com/problems/search-insert-position/submissions/2178396905/ . 이진 탐색: 제출 2026-10-22 10:22 · Runtime 0 ms · Memory 13.28 MB · https://leetcode.com/problems/search-insert-position/submissions/2178415740 . 제출 시각의 시간대는 미확인. 첫 풀이는 정확성 테스트를 통과했지만 O(log n) 조건은 만족하지 못했다. 두 번째 풀이에서 시간 복잡도 조건을 충족했다.",
    "previous_solutions": [
      {
        "title": "풀이 1 · 선형 탐색 O(n)",
        "code": "class Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        for(int i = 0; i < nums.size(); i++)\n        {\n            if(nums[i] >= target)\n            {\n                return i;\n            }\n        }\n        return nums.size();\n    }\n};",
        "submission_url": "https://leetcode.com/problems/search-insert-position/submissions/2178396905/",
        "result": "2026-10-22 09:04 · Accepted 68/68 · 0 ms · 13.71 MB. 정확성 테스트는 통과했지만 문제의 O(log n) 조건은 만족하지 못했다."
      }
    ],
    "code_result": "2026-10-22 10:22 · Accepted 68/68 · 0 ms · 13.28 MB. 시간 복잡도 O(log n), 추가 공간 O(1)."
  }
];
