window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-566-reshape-the-matrix.js"] = [
  {
    "id": "lc-566",
    "title": "행렬 재구성",
    "group": "array",
    "url": "https://leetcode.com/problems/reshape-the-matrix/",
    "status": "통과 확인",
    "problem": "행 우선 순서를 유지하며 행렬 크기를 바꾼다.",
    "date": "2026-08-17",
    "summary": "행렬의 값을 한 줄짜리 배열에 담은 뒤 새 행과 열에 다시 넣었다.",
    "question": "원래 행렬과 결과 행렬의 모양은 달라도 원소의 읽는 순서는 같아야 했다. 처음에는 중간 vector B에 모든 값을 담고 다시 결과 배열로 옮기는 방식을 선택했다.",
    "attempt": "X*Y와 r*c가 다르면 원래 행렬을 반환하고, 같으면 중첩 반복문 두 번으로 평탄화와 재배치를 수행했다. 이 과정에서 y < Y를 Y < y로 쓰거나 두 번째 반복에서 num을 증가시키지 않는 실수를 찾았다.",
    "turning": "제출한 코드는 중간 배열 B에 담아 다시 옮긴다. 중간 배열을 없애는 방법도 질문했다. i / 열 수는 행, i % 열 수는 열이므로 원본은 Y, 결과는 c로 나눠야 한다. 숫자 3으로 고정해서는 안 된다.",
    "learned": [
      "전체 원소 수가 같아야 reshape가 가능하다.",
      "1차원 인덱스 i는 [i/열 수][i%열 수]로 바꿀 수 있다.",
      "좌표 공식의 나누는 수는 배열마다 그 배열의 열 수다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {\n        int X = mat.size();\n        int Y = mat[0].size();\n        vector<vector<int>> A(r,vector<int>(c));\n        vector<int>B(X * Y);\n        int num = 0;\n        if (X * Y != r * c)\n        {\n            return mat;\n        }\n        for(int x = 0; x < X; x++)\n            for(int y = 0; y < Y; y++) B[num++] = mat[x][y];\n        num = 0;\n        for(int x = 0; x < r; x++)\n            for(int y = 0; y < c; y++) A[x][y] = B[num++];\n        return A;\n    }\n};",
    "verification": "LeetCode Accepted · 57 / 57 · 9/29 본인 제출 목록의 마지막 결과: 2026-08-17 Accepted (사이트 표시일, 학습일과 구분)",
    "submission_url": "https://leetcode.com/submissions/detail/2109243993/"
  }
];
