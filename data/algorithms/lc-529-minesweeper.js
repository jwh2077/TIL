window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-529-minesweeper.js"] = [
  {
    "id": "lc-529",
    "title": "Minesweeper · 주변 지뢰를 세고 빈 칸 펼치기",
    "group": "array",
    "tags": [
      "DFS",
      "재귀",
      "2차원 배열",
      "8방향 탐색",
      "방문 처리",
      "깊이 우선 탐색",
      "LeetCode"
    ],
    "url": "https://leetcode.com/problems/minesweeper/description/",
    "status": "통과 확인",
    "date": "2026-10-21",
    "problem": "지뢰찾기 판에서 클릭한 칸을 공개한다. 지뢰면 X로 바꾸고, 빈 칸이면 주변 지뢰 수를 표시하거나 지뢰가 없는 영역을 펼친다.",
    "summary": "8방향의 지뢰 수를 먼저 센 뒤, 지뢰가 없으면 현재 칸을 B로 바꾸고 아직 공개되지 않은 E만 재귀로 탐색했다.",
    "question": "클릭한 곳이 M이면 X로 바꾸고 바로 반환하도록 했다. 빈 칸에서 주변으로 탐색을 이어 가려고 index()를 따로 만들었다. 처음에는 대각선을 제외해야 하나 고민했는데, 지뢰를 셀 때도 빈 칸을 펼칠 때도 8방향을 확인해야 했다.",
    "attempt": "dx와 dy에 방향 8개를 넣었지만 반복 조건을 i <= 8로 써서 배열 범위를 벗어났다. i < 8로 고쳤고, board[x + dx[i]][y + dy[i]]에 범위 검사 없이 접근하면서 난 런타임 오류도 수정했다.\n\n범위 조건에서는 X < 0과 &&를 잘못 사용했다. 이후 X <= board.size()로 썼을 때도 마지막 인덱스를 넘어갔다. X >= 0 && X < board.size(), Y >= 0 && Y < board[0].size()로 검사하도록 바꿨다.",
    "turning": "주변 지뢰를 모두 센 뒤 count가 0이 아니면 현재 칸을 숫자로 바꾸고 더 확장하지 않았다. 지뢰가 없으면 현재 칸을 B로 먼저 바꾸고, 주변에서 아직 E인 칸만 재귀 호출했다. 현재 칸의 상태를 먼저 바꿔 두니 이미 탐색한 칸을 다시 방문하지 않도록 할 수 있었다.",
    "learned": [
      "방향 배열로 대각선을 포함한 주변 8칸을 탐색했다.",
      "size()는 원소 개수라 마지막 인덱스는 size() - 1이다. 방향 배열도 0부터 7까지만 접근해야 했다.",
      "주변 칸에 접근하거나 재귀 호출하기 전에 범위와 칸의 상태를 검사했다.",
      "지뢰 개수를 모두 계산한 뒤 숫자를 표시할지, 빈 영역으로 확장할지 나눴다.",
      "재귀 호출 전에 현재 칸을 B로 바꾸고 E만 탐색해 중복 방문을 막았다."
    ],
    "code_title": "최종 통과 코드 · C++ (제출 원본)",
    "solution_code": "class Solution {\n    int dx[8] = {-1,-1,-1,0,0,1,1,1};\n    int dy[8] = {-1,0,1,-1,1,-1,0,1};\n\npublic:\n    void index(vector<vector<char>>& board , int x, int y)\n    {\n        int count = 0;\n        for(int i = 0; i < 8; i++)\n        {\n            int X = x + dx[i];\n            int Y = y + dy[i];\n\n            if( X >= 0 && X < board.size() &&\n                Y >= 0 && Y < board[0].size())\n            {\n                if(board[X][Y] == 'M')\n                {\n                    count++;\n                }\n            }\n        }\n        if(count != 0)\n        {\n            board[x][y] = '0' + count;\n        }\n        else\n        {\n            board[x][y] = 'B';\n            for(int i = 0; i < 8; i++)\n            {\n                int X = x + dx[i];\n                int Y = y + dy[i];\n                \n                if( X >= 0 && X < board.size() &&\n                    Y >= 0 && Y < board[0].size())\n                {\n                    if(board[X][Y] == 'E')\n                    {\n                        index(board, x + dx[i], y + dy[i]);\n                    }\n                }\n            }\n        }\n    }\n        \n    vector<vector<char>> updateBoard(vector<vector<char>>& board, vector<int>& click) {\n        int x = click[0];\n        int y = click[1];\n\n        if(board[x][y] == 'M')\n        {\n            board[x][y] = 'X';\n            return board;\n        }\n\n        index(board, x, y);\n\n        return board;\n    }\n};",
    "verification": "사용자 제공 채점 결과: LeetCode Accepted · 54 / 54 테스트 통과 · 제출 2026-10-21 01:53 · C++ · Runtime 0 ms (Beats 100.00%) · Memory 15.38 MB (Beats 96.54%). 목록의 풀이 기록 날짜는 제출일을 기준으로 두었다. 별도 학습일과 제출 시각의 시간대는 확인하지 않았다. 제출 링크는 제공되지 않아 문제 원문만 연결했다."
  }
];
