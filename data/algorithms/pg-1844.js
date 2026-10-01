window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-1844.js"] = [
  {
    "id": "pg-1844",
    "title": "게임 맵 최단거리",
    "group": "tree",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/1844",
    "status": "통과 확인",
    "problem": "네 방향 이동으로 목표까지 최소 칸 수를 구한다. 도달 불가면 -1이다.",
    "date": "2026-09-18",
    "summary": "queue에 좌표를 넣고 같은 거리의 칸을 한 묶음씩 처리했다.",
    "question": "갈 수 있는 모든 분기를 저장해야 한다는 생각은 있었지만, 거리 순서와 방문 처리를 한 구조 안에서 어떻게 관리할지가 막혔다.",
    "attempt": "queue에 시작 좌표를 넣고 한 레벨의 원소 수만큼 처리한 뒤 count를 증가시켰다. 네 방향 배열로 이웃을 만들고, 방문한 칸은 -1로 바꿔 다시 큐에 들어오지 않게 했다.",
    "turning": "큐에 들어 있던 칸 수만큼 처리한 뒤 count를 올렸다. 같은 거리에 있는 칸들을 먼저 처리하므로 별도 거리 배열 없이 이동한 칸 수를 센다.",
    "learned": [
      "maps를 읽기 전에 배열 범위부터 검사한다.",
      "큐에 넣은 칸을 다시 넣지 않도록 방문 표시를 한다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "#include<vector>\n#include<queue>\nusing namespace std;\n\nint solution(vector<vector<int> > maps)\n{\n    int count = 1;\n    queue<pair<int,int>>my;\n    my.push({0,0}); \n    maps[0][0] = -1;\n    int X = maps.size() - 1;\n    int Y = maps[0].size() - 1;\n    int SearchX[4]{0,1,0,-1};\n    int SearchY[4]{1,0,-1,0};\n    while(!my.empty())\n    {\n        int num = my.size();\n        for(int j = 0; j < num; j++)\n        {\n            int x = my.front().first;\n            int y = my.front().second;\n            if(X == x && Y == y) return count;\n            my.pop();\n            for(int i = 0; i < 4; i++)\n            {\n                if (x + SearchX[i] < 0 || y + SearchY[i] < 0){}\n                else if(x + SearchX[i] > X || y + SearchY[i] > Y){}\n                else if(maps[x + SearchX[i]][y + SearchY[i]] == 1)\n                {\n                    maps[x + SearchX[i]][y + SearchY[i]] = -1;\n                    my.push({x + SearchX[i],y + SearchY[i]});\n                }\n            }\n        }\n        count++;\n    }\n    return -1;\n}",
    "verification": "프로그래머스 정답 · 100 / 100"
  }
];
