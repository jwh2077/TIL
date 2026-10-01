window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-867-transpose-matrix.js"] = [
  {
    "id": "lc-867",
    "title": "행렬 전치",
    "group": "array",
    "url": "https://leetcode.com/problems/transpose-matrix/",
    "status": "통과 확인",
    "problem": "행과 열을 서로 바꾼다.",
    "date": "2026-08-17",
    "summary": "행과 열을 바꾸는 문제를 풀면서 행 개수와 마지막 인덱스를 헷갈렸다.",
    "question": "전치 결과에서는 원본의 행이 열이 되고 원본의 열이 행이 된다. 그래서 결과 크기를 Y × X로 만들고 result[col][row] = matrix[row][col]로 옮기려 했다.",
    "attempt": "좌표를 바꾸는 식은 맞았지만 열 수를 matrix[X].size()로 읽었다. X는 마지막 행 번호가 아니라 행의 개수이므로 matrix[X]는 배열 밖을 가리킨다.",
    "turning": "행의 개수는 matrix.size(), 열의 개수는 존재하는 한 행인 matrix[0].size()에서 구했다. 결과의 바깥 반복은 원본 열, 안쪽 반복은 원본 행을 순회한다.",
    "learned": [
      "size()는 개수이며 마지막 인덱스는 size()-1이다.",
      "전치 후 결과 크기는 cols × rows다.",
      "좌표를 바꿀 때 결과와 원본의 인덱스 순서를 함께 적으면 혼동이 줄어든다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    vector<vector<int>> transpose(vector<vector<int>>& matrix) {\n        int X = matrix.size();\n        int Y = matrix[0].size();\n        vector<vector<int>>A(Y,vector<int>(X));\n        for(int x = 0; x < Y; x++)\n            for(int y = 0; y < X; y++) A[x][y] = matrix[y][x];\n        return A;\n    }\n};",
    "verification": "LeetCode Accepted · 36 / 36 · 9/29 본인 제출 목록의 마지막 결과: 2026-08-17 Accepted (사이트 표시일, 학습일과 구분)",
    "submission_url": "https://leetcode.com/submissions/detail/2109291619/"
  }
];
