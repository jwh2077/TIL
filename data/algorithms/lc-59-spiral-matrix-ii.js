window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-59-spiral-matrix-ii.js"] = [
  {
    "id": "lc-59",
    "title": "나선형 행렬 II",
    "group": "array",
    "url": "https://leetcode.com/problems/spiral-matrix-ii/",
    "status": "통과 확인",
    "problem": "1부터 n²까지 시계 방향 나선으로 채운다.",
    "date": "2026-08-17",
    "summary": "위·아래·왼쪽·오른쪽 경계를 줄여 가며 나선형으로 행렬을 채웠다.",
    "question": "처음부터 ux/dx/uy/dy를 두고 네 방향을 따로 채우려 했다. 그런데 n-uy, n-dx로 좌표를 다시 계산하면서 배열 범위를 벗어났고, while 조건도 여러 번 바꿨다.",
    "attempt": "ux와 dx를 위·아래 행, dy와 uy를 왼쪽·오른쪽 열로 사용했다. 위쪽 행을 오른쪽으로 채운 뒤 ux를 늘리고, 오른쪽 열을 아래로 채운 뒤 uy를 줄이는 식으로 한 겹씩 안쪽으로 이동했다.",
    "turning": "배열에 접근할 때 경계 변수 자체를 쓰도록 고쳤다. while(ux == dx), while(ux != dx)로 반복을 끝내려던 부분도 num을 기준으로 바꿨다. 1부터 n*n까지 채우고 멈추도록 하니 마지막 한 칸도 처리할 수 있었다.",
    "learned": [
      "방향 이동 문제는 현재 위치보다 유효한 경계를 관리하는 편이 단순할 수 있다.",
      "각 방향을 처리한 직후 해당 경계를 한 칸 줄인다.",
      "반복문의 시작·종료 조건을 작은 n으로 직접 추적하면 중복 접근을 확인할 수 있다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    vector<vector<int>> generateMatrix(int n) {\n        vector<vector<int>>A(n,vector<int>(n));\n        int num = 1;\n        int ux = 0, dx = n - 1, uy = n - 1, dy = 0;\n        while(n*n >= num)\n        {\n            for(int i = dy; i <= uy;i++) A[ux][i] = num++;\n            ux++;\n            for(int i = ux; i <= dx;i++) A[i][uy] = num++;\n            uy--;\n            for(int i = uy; i >= dy;i--) A[dx][i] = num++;\n            dx--;\n            for(int i = dx; i >= ux;i--) A[i][dy] = num++;\n            dy++;\n        }\n        return A;\n    }\n};",
    "verification": "LeetCode Accepted · 20 / 20 · 당시 결과: Runtime 0 ms / Beats 100.00% · 9/29 본인 제출 목록의 마지막 결과: 2026-08-17 Accepted (사이트 표시일, 학습일과 구분)",
    "submission_url": "https://leetcode.com/submissions/detail/2109446133/"
  }
];
