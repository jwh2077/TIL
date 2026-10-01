window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-250125.js"] = [
  {
    "id": "pg-250125",
    "title": "이웃한 칸",
    "group": "array",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/250125",
    "status": "통과 확인",
    "date": "2026-09-17",
    "verification": "프로그래머스 정답 · 100 / 100",
    "problem": "선택한 칸의 상하좌우 중 같은 색인 칸의 수를 센다.",
    "summary": "방향 배열로 네 이웃을 만들고 행과 열 범위를 차례로 확인한 뒤 색을 비교했다.",
    "question": "",
    "attempt": "dh와 dw를 같은 인덱스의 방향 쌍으로 두었다. h_check와 w_check가 모두 0 이상 n 미만일 때만 board에 접근했다.",
    "turning": "h_check와 w_check가 범위 안인지 먼저 검사한 뒤 색을 비교한다. 가장자리에서도 배열 밖의 칸을 읽지 않도록 했다.",
    "learned": [
      "행과 열의 이동량을 같은 인덱스로 묶어 쓴다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "#include <string>\n#include <vector>\nusing namespace std;\nint solution(vector<vector<string>> board, int h, int w) {\n    int n = board.size(), count = 0;\n    int dh[4] = {0, 1, -1, 0};\n    int dw[4] = {1, 0, 0, -1};\n    for(int i = 0; i <= 3; i++) {\n        int h_check = h + dh[i], w_check = w + dw[i];\n        if(h_check >= 0 && h_check < n && w_check >= 0 && w_check < n)\n            if(board[h][w] == board[h_check][w_check]) count++;\n    }\n    return count;\n}"
  }
];
