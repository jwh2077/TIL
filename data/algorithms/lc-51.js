window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-51.js"] = [
  {
    "id": "lc-51",
    "title": "N-Queens · 한 행씩 놓고 되돌아가기",
    "group": "bruteforce",
    "url": "https://leetcode.com/problems/n-queens/",
    "status": "통과 확인",
    "date": "2026-10-21",
    "problem": "n × n 체스판에 서로 공격하지 않는 퀸 n개를 배치하고 가능한 체스판들을 반환한다. 같은 행·열·대각선에 퀸을 놓을 수 없다. 가능한 배치가 없으면 빈 결과를 반환한다.",
    "summary": "10월 8일에는 공격 검사와 정답 저장을 완성하지 못했다. 10월 21일에는 위쪽 세 방향을 경계까지 검사하고, 한 행씩 퀸을 놓았다가 되돌리며 모든 배치를 구해 통과했다.",
    "question": "2026-10-08 · 처음 생각한 접근\n\n처음에는 퀸을 최대한 많이 놓는 문제인 줄 알았는데, 정확히 n개를 놓는 문제였다. 작은 크기부터 생각해 보니 n=1은 가능하고, n=2와 n=3은 불가능하며, n=4에서는 배치할 수 있었다. 불가능할 때도 -1이 아니라 빈 결과를 반환해야 했다.",
    "attempt": "한 좌표에 퀸을 놓고 공격 범위를 모두 표시한 다음, 공격받지 않는 곳을 찾으려고 했다. 그런데 놓고 지울 때마다 범위를 다시 관리해야 했고, 검사 반복문도 4중으로 늘어나 복잡해졌다.\n\n더 놓을 수 없으면 이전 위치로 돌아가 다른 자리를 시도해야 하니 재귀가 맞을 것 같았다. 한 행에 하나만 놓는 방식으로 바꾸면 현재 행의 열들을 확인하고, 가능한 곳에 Q를 놓은 뒤 다음 행으로 넘어갈 수 있었다. 돌아오면 다시 .으로 지우는 흐름이다.",
    "turning": "아래쪽 행에는 아직 퀸이 없으므로 왼쪽 위·위·오른쪽 위만 검사하려고 방향 배열을 적었다. 체스판 하나를 vector<vector<string>>으로 만들려 했던 부분도 헷갈렸다. 현재 판은 vector<string>, 정답 판 여러 개는 vector<vector<string>>으로 나눌 수 있었다.\n\n한 행에 하나씩 놓으면 row가 지금까지 놓은 퀸의 수 역할을 한다. row == n일 때 현재 board를 정답에 저장하는 구조까지 생각했다. 하지만 놓아도 되는지 검사하는 부분, 재귀 함수의 매개변수, 정답 board를 저장하는 부분은 아직 코드로 완성하지 못했다. 재귀와 좌표, 공격 검사, 상태 복구를 한 번에 생각하려니 복잡해져 여기까지 진행했다.\n\n2026-10-21 · 이어서 완성한 풀이\n\n퀸의 개수를 Q로 따로 관리하려던 방식 대신 현재 행 번호 num을 사용했다. 첫 행의 각 열에 퀸을 놓고 Queens(t, 1)로 다음 행부터 탐색했다.\n\n위쪽 세 방향을 한 칸씩만 검사했는데, 퀸은 같은 방향의 모든 칸을 공격하므로 경계까지 확인하도록 바꿨다. 방향값 -1을 다시 빼서 반대로 움직이던 부분을 고치고, 방향마다 tX와 tY를 새로 잡았다. 다음 좌표를 먼저 계산한 뒤 while 조건에서 범위를 검사해 배열 밖에 접근하지 않도록 했다.\n\n열을 while(true)로 돌다가 종료 조건이 없어 for문으로 바꿨다. 그 안에 남아 있던 Y++ 때문에 일부 열을 건너뛰어 중복 증가도 지웠다.\n\n놓을 수 있는 칸은 Q로 바꾸고 다음 행을 재귀로 탐색했다. 돌아오면 .으로 되돌려 다른 열을 시도했다. num이 보드 크기에 도달하면 현재 판을 A에 저장했고, 9개 테스트를 모두 통과했다.",
    "code_title": "최종 통과 코드 · C++ (2026-10-21 제출 원본)",
    "solution_code": "class Solution {\npublic:\n    int xa[3]{ -1, -1, -1};\n    int ya[3]{ -1 , 1, 0};\n\n    vector<vector<string>>A;\n\n    vector<vector<string>> solveNQueens(int n) {\n        A.clear();\n        vector<string> t(n, string(n, '.'));\n        for(int i = 0; i < n; i++)\n        {\n            t[0][i] = 'Q';\n            Queens(t, 1);\n            t[0][i] = '.';\n        }\n        return A;\n    }\n\n    void Queens(vector<string>& t, int num)\n    {\n        if(num > t.size() - 1)\n        {\n            A.push_back(t);            \n            return;\n        }\n        int X = num;\n        for(int Y = 0; Y < t.size(); Y++)\n        {\n            bool b = true;\n\n\n            for(int i = 0; i < 3; i++)\n            {\n                int tX = X + xa[i];\n                int tY = Y + ya[i];\n\n                while(tX >= 0 && tX < t.size() &&\n                        tY >= 0 && tY < t.size())\n                {\n\n                    if(t[tX][tY] == 'Q')\n                    {\n                        b = false;\n                    }\n                    tX += xa[i];\n                    tY += ya[i];                    \n                }\n\n            }\n            if(b)\n            {\n                t[X][Y] = 'Q';\n                Queens(t, num + 1);\n                t[X][Y] = '.';\n            }\n        }\n    }\n};",
    "learned": [
      "현재 row에서 col을 0부터 n-1까지 확인하고, 놓을 수 있으면 다음 행을 시도하는 구조로 생각했다.",
      "재귀에서 돌아오면 놓았던 Q를 지워 다른 배치를 시도해야 한다.",
      "한 행에 하나씩 놓으면 Q를 따로 세지 않고 row == n으로 배치 완료를 판단할 수 있다.",
      "10월 8일에는 위쪽 세 방향의 공격 검사와 재귀 함수·정답 저장을 연결하는 부분이 남아 있었다.",
      "10월 21일에는 방향 배열로 경계까지 검사하고, 배열 접근 전에 좌표 범위를 확인하도록 완성했다.",
      "선택 → 재귀 → 선택 취소를 반복해 가능한 배치를 모두 저장했다.",
      "반복문의 종료 조건뿐 아니라 인덱스를 중복해서 증가시키는지도 확인해야 했다."
    ],
    "verification": "2026-10-08 학습 메모는 진행 중 / 미완성 기록이다. 사용자 제공 채점 결과: LeetCode Accepted · 9 / 9 테스트 통과 · 제출 2026-10-21 15:47 · C++ · Runtime 5 ms (Beats 20.42%) · Memory 10.50 MB (Beats 38.10%). 목록의 최신 기록 날짜는 제출일 기준이며, 별도 학습일과 제출 시각의 시간대는 미확인이다. 이전 미완성 과정은 본문에 남겼다.",
    "tags": [
      "LeetCode",
      "백트래킹",
      "재귀",
      "완전 탐색",
      "2차원 배열"
    ],
    "submission_url": "https://leetcode.com/problems/n-queens/submissions/2177693802"
  }
];
