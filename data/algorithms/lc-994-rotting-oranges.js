window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-994-rotting-oranges.js"] = [
  {
    "id": "lc-994",
    "title": "Rotting Oranges · 여러 시작점에서 같은 시간씩 확장하기",
    "group": "queue",
    "tags": [
      "BFS",
      "너비 우선 탐색",
      "큐",
      "2차원 배열",
      "다중 시작점 탐색",
      "LeetCode"
    ],
    "url": "https://leetcode.com/problems/rotting-oranges/",
    "status": "통과 확인",
    "date": "2026-10-21",
    "problem": "썩은 오렌지에서 상하좌우로 인접한 신선한 오렌지가 매분 썩는다. 모든 오렌지가 썩는 데 걸리는 시간을 구하고, 끝까지 썩지 않는 오렌지가 있으면 -1을 반환한다.",
    "summary": "처음부터 썩은 오렌지를 모두 큐에 넣고, 같은 레벨을 한 번에 처리하며 시간을 셌다. 탐색이 끝난 뒤 신선한 오렌지가 남았는지 확인했다.",
    "question": "처음에는 썩은 오렌지에서 주변으로 확장하면서 마지막 오렌지까지 탐색한 깊이를 계산하려고 했다. DFS의 재귀 깊이가 아니라 BFS의 레벨이 경과 시간에 해당한다는 점을 이해하고, 이전에 풀었던 게임 맵 최단거리의 BFS 방식을 참고했다.",
    "attempt": "처음부터 썩은 오렌지가 여러 개일 수 있어서 모든 시작 좌표를 queue<pair<int, int>>에 넣었다. q.size()를 저장해 현재 레벨에 있던 오렌지만 처리하려고 했는데, 반복 조건을 j > size로 써서 반복문이 실행되지 않았다. j < size로 고쳤다.\n\nq.pop()도 4방향 탐색 안에 넣었다가 한 오렌지의 주변을 모두 확인한 뒤 제거하도록 옮겼다. 주변 칸에 범위 검사 없이 접근해 런타임 오류가 났고, X >= 0과 Y >= 0 조건을 추가했다. 열의 범위를 grid.size()로 검사하던 부분은 grid[0].size()로 수정했다.",
    "turning": "현재 레벨의 오렌지를 처리하면서 새로 썩은 칸을 큐에 넣었다. 다음 레벨이 남아 있으면 A++로 시간을 늘렸다.\n\n처음에는 주변 오렌지만 보고 썩을 수 없는 오렌지를 미리 판단하려 했는데, BFS를 끝낸 뒤 전체 판에 1이 남았는지 확인하는 방식으로 바꿨다. 큐가 비었을 때 신선한 오렌지가 남으면 -1, 없으면 경과 시간 A를 반환했다.",
    "learned": [
      "여러 시작점을 처음부터 큐에 넣으면 같은 시점에서 탐색을 시작할 수 있었다.",
      "q.size()를 먼저 저장해 현재 레벨과 다음 레벨을 구분하고 시간 A를 셌다.",
      "q.front()로 좌표를 읽고 주변을 처리한 다음 q.pop()으로 현재 좌표를 제거했다.",
      "행은 grid.size(), 열은 grid[0].size()를 기준으로 범위를 검사했다.",
      "탐색이 끝난 뒤 신선한 오렌지가 남았는지 확인해 도달하지 못한 칸을 판단했다."
    ],
    "code_title": "최종 통과 코드 · C++ (제출 원본)",
    "solution_code": "class Solution {\npublic:\n    int dx[4] = {-1, 1, 0, 0};\n    int dy[4] = {0 ,0 ,-1 ,1};\n\n    int orangesRotting(vector<vector<int>>& grid) {\n\n        queue<pair<int, int>> q;\n        int A = 0;\n        \n        for(int i = 0; i < grid.size(); i++)\n        {\n            for(int j = 0; j < grid[0].size(); j++)\n            {\n                if(grid[i][j] == 2)\n                {\n                    q.push({i, j});\n                }\n            }\n        }\n\n        while(true)\n        {\n            int size = q.size();\n\n            for(int j = 0; j < size; j++)\n            {\n                for(int i = 0; i < 4; i++)\n                {\n                    int x = q.front().first;\n                    int y = q.front().second;\n\n                    int X = x + dx[i];\n                    int Y = y + dy[i];\n\n                    if( X >= 0 && X < grid.size() &&\n                        Y >= 0 && Y < grid[0].size())\n                    {\n                        if(grid[X][Y] == 1)\n                        {\n                            grid[X][Y] = 2;\n                            q.push({X, Y});\n                        }\n                    }\n                }\n                q.pop();\n            }\n            if(q.size() == 0)\n            {\n                for(int i = 0; i < grid.size(); i++)\n                {\n                    for(int j = 0; j < grid[0].size(); j++)\n                    {\n                        if(grid[i][j] == 1)\n                        {\n                            return -1;\n                        }\n                    }\n                }\n                return A;\n            }\n            A++;\n        }\n    }\n};",
    "verification": "사용자 제공 채점 결과: LeetCode Accepted · 307 / 307 테스트 통과 · 제출 2026-10-21 10:53 · C++ · Runtime 0 ms · Memory 16.58 MB. 목록의 풀이 기록 날짜는 제출일을 기준으로 두었다. 별도 학습일과 제출 시각의 시간대는 확인하지 않았다. 제출 링크는 제공되지 않아 문제 원문만 연결했다."
  }
];
