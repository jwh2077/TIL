window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-48-rotate-image.js"] = [
  {
    "id": "lc-48",
    "title": "이미지 90도 회전",
    "group": "array",
    "url": "https://leetcode.com/problems/rotate-image/",
    "status": "통과 확인",
    "problem": "입력 행렬을 직접 시계 방향으로 90도 회전한다.",
    "date": "2026-10-02",
    "summary": "9월 11일에는 값을 덮어쓰는 부분에서 막혔다. 10월 2일에는 네 위치의 값을 임시 변수로 이어 옮겨 제자리 회전을 완성했다.",
    "question": "9월 11일에는 값을 옮기는 순간 다른 위치의 원래 값이 사라지는 부분에서 막혔다. 별도 2차원 배열을 만들 수 없어서 이동 순서가 필요했지만, 당시에는 좌표를 순회하는 틀과 임시 변수까지만 만들었다.",
    "attempt": "10월 2일에는 90도 회전할 때 좌표가 어떻게 변하는지 직접 계산했다. x를 가로, y를 세로로 생각했으므로 vector에는 matrix[y][x]로 접근했다. 크기가 n일 때 시계 방향 회전은 (x, y) → (n - 1 - y, x)이다. 4×4에서는 (0,0) → (3,0) → (3,3) → (0,3) → (0,0)으로 돌아온다.\n\n현재 값을 보관하고 다음 좌표를 계산한 뒤, 그 위치의 원래 값을 먼저 tempB에 담았다. 그다음 현재 값을 넣고 보관한 값으로 다음 이동을 이어 갔다. 이렇게 네 위치를 모두 옮겼다.\n\n모든 좌표에서 시작하면 같은 위치를 반복해서 처리하므로 x < n / 2, y < (n + 1) / 2까지만 시작점을 잡았다. 각 시작점에서 네 번 이동하고, 홀수 크기의 정중앙은 그대로 뒀다.",
    "turning": "이 방식으로 21개 테스트를 통과했다. 그런데 코드를 다시 적으면서 matrix[X][Y]로 바꿔 썼다. 내가 정한 좌표에서는 matrix[Y][X]여야 했다. 또 lo < 1이면 다음 위치로 한 번 옮기고 끝나므로 네 위치를 모두 옮기려면 lo < 4가 필요했다.",
    "learned": [
      "x는 가로, y는 세로로 두었으므로 matrix[y][x]로 접근한다. 좌표 의미와 인덱스 순서를 섞지 않기.",
      "다음 위치에 값을 쓰기 전에 그곳의 원래 값을 보관해야 한다.",
      "일부 시작점에서 네 위치를 한 바퀴씩 옮기면 별도 행렬 없이 회전할 수 있다."
    ],
    "code_title": "최종 Accepted 코드 · 2026-10-02",
    "solution_code": "class Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        int n = matrix.size();\n\n        for(int x = 0; x < n / 2; x++)\n        {\n            for(int y = 0; y < (n + 1) / 2; y++)\n            {\n                int X = x;\n                int Y = y;\n                int temp = 0;\n                int tempA = 0;\n                int tempB = matrix[Y][X];\n\n                for(int lo = 0; lo < 4; lo++)\n                {\n                    tempA = tempB;\n\n                    temp = Y;\n                    Y = X;\n                    X = n - 1 - temp;\n\n                    tempB = matrix[Y][X];\n                    matrix[Y][X] = tempA;\n                }\n            }\n        }\n    }\n};",
    "tags": [
      "배열",
      "행렬",
      "좌표",
      "제자리 회전"
    ],
    "verification": "사용자 제공 제출 결과: 2026-10-02 09:35 · Accepted 21 / 21 · Runtime 0 ms · Memory 10.04 MB. 기존 2026-09-11 미완성 기록에 10월 2일 풀이를 이어 정리했다. 이전에 실려 있던 전치·행 뒤집기 코드는 제출하지 않은 참고 예제였으며, 위 코드는 사용자가 제공한 Accepted 코드다."
  }
];
