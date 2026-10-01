window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-48-rotate-image.js"] = [
  {
    "id": "lc-48",
    "title": "이미지 90도 회전",
    "group": "array",
    "url": "https://leetcode.com/problems/rotate-image/",
    "status": "미완성",
    "problem": "입력 행렬을 직접 시계 방향으로 90도 회전한다.",
    "date": "2026-09-11",
    "summary": "값을 옮기다가 원래 값이 덮이는 부분에서 막혔다.",
    "question": "matrix[y][x]를 temp에 담아 옮기려 했지만 한 값을 쓴 순간 다른 위치의 원래 값이 사라진다. 별도 2차원 배열을 만들 수 없다는 조건 때문에 이동 순서가 필요했다.",
    "attempt": "중첩 반복문에서 모든 좌표를 읽으며 이동 규칙을 찾기 시작했다. 여기까지는 좌표를 순회하는 틀과 임시 변수만 만들었고 실제 교환은 완성하지 못했다.",
    "turning": "전치한 뒤 각 행을 뒤집으면 90도 회전이 된다. 아래 코드는 당시 작성한 코드가 아니라 미완성 풀이 뒤에 덧붙인 참고 예제다. 직접 완성하거나 통과한 풀이로 표시하지 않았다.",
    "learned": [
      "제자리에서 바꿀 때는 덮어쓸 값이 뒤에서 필요한지 먼저 봐야 한다."
    ],
    "code_title": "참고 예제 · 제출하지 않은 코드",
    "solution_code": "void rotate(vector<vector<int>>& matrix) {\n    int n = matrix.size();\n\n    for (int row = 0; row < n; row++) {\n        for (int col = row + 1; col < n; col++) {\n            swap(matrix[row][col], matrix[col][row]);\n        }\n    }\n\n    for (auto& row : matrix) {\n        reverse(row.begin(), row.end());\n    }\n}"
  }
];
