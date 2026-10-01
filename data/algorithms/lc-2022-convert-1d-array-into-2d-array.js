window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-2022-convert-1d-array-into-2d-array.js"] = [
  {
    "id": "lc-2022",
    "title": "1차원 → 2차원 배열",
    "group": "array",
    "url": "https://leetcode.com/problems/convert-1d-array-into-2d-array/",
    "status": "통과 확인",
    "problem": "순서를 유지해 m행 n열 배열을 만든다. 불가능하면 빈 배열을 반환한다.",
    "date": "2026-08-14",
    "summary": "1차원 배열의 순서를 유지하면서 행과 열의 위치를 직접 계산해 2차원 배열로 옮겼다.",
    "question": "빈 2차원 vector에 A[M]이나 A[M, N]으로 바로 값을 넣으려 했다. 먼저 크기를 만들어야 했고 행과 열도 따로 골라야 했다.",
    "attempt": "original.size()가 m*n과 같은지 먼저 검사했다. 같으면 m행 n열 배열을 만들고, num을 하나씩 늘리면서 A[M][N]에 original[num]을 넣었다.",
    "turning": "불가능한 경우에는 빈 배열을 반환한다. 제출 코드의 vector<vector<int>>{ 0 }도 빈 바깥 vector가 되지만 return {}라고 적으면 뜻이 더 바로 보인다.",
    "learned": [
      "2차원 vector는 행의 수와 각 행의 열 수를 먼저 만들 수 있다.",
      "A[M][N]에서 첫 인덱스는 행, 두 번째 인덱스는 열이다.",
      "불가능한 경우의 반환 형태까지 문제 조건과 정확히 맞아야 한다.",
      "학습일은 8월 14일이고, 코드를 질문한 대화는 8월 17일에 남아 있다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    vector<vector<int>> construct2DArray(vector<int>& original, int m, int n) \n    {\n        if(original.size() != m * n)\n        return vector<vector<int>>{ 0 };\n        vector<vector<int>>A(m, vector<int>(n));\n        int num = 0;\n        for(int M = 0; M < m; M++)\n        {\n            for(int N = 0; N < n; N++)\n            {\n                A[M][N] = original[num];\n                num++;\n            }\n        }\n        return A;\n    }\n};",
    "verification": "LeetCode Accepted · 107 / 107 · 9/29 본인 제출 목록의 마지막 결과: 2026-08-17 Accepted (사이트 표시일, 학습일과 구분)",
    "submission_url": "https://leetcode.com/submissions/detail/2109169458/"
  }
];
