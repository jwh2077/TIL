window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-752-open-the-lock.js"] = [
  {
    "id": "lc-752",
    "title": "Open the Lock · 상태를 중복 없이 탐색하기",
    "group": "queue",
    "tags": [
      "LeetCode",
      "BFS",
      "너비 우선 탐색",
      "큐",
      "set",
      "문자열"
    ],
    "url": "https://leetcode.com/problems/open-the-lock/",
    "status": "통과 확인",
    "date": "2026-11-03",
    "problem": "0000에서 시작해 네 자리 중 하나를 1 올리거나 내리며 target까지의 최소 회전 횟수를 구한다. 9 다음은 0, 0 이전은 9이며 deadends는 지나갈 수 없다. 도달하지 못하면 -1을 반환한다.",
    "summary": "숫자 순서대로 계산하려던 접근에서 BFS로 바꾸고, set에 방문 상태를 남기면서 queue로 탐색 순서를 관리했다. 10월 29일·30일과 11월 3일에 공부했고, 11월 3일에 통과했다.",
    "question": "처음에는 0000부터 9999까지 배열을 만들고 각 상태까지의 최소 이동 횟수를 저장하는 DP 비슷한 방식을 생각했다. 하지만 0000에서 9000도 한 번에 갈 수 있어서 숫자 크기 순서로 계산하기는 어려웠다. BFS와 DFS 중 고민하다가 이동 횟수별로 상태를 확인하는 BFS로 접근했다.\n\n매번 8개 상태로 확장하면 시간 초과가 나지 않을지 걱정했다. 가능한 상태가 총 10,000개라는 점을 확인하고 중복 방문을 막는 방법을 생각했다.",
    "attempt": "처음에는 set 하나로 관리하려 했지만, vector처럼 인덱스로 접근하거나 새로 넣은 순서대로 꺼낼 수 없었다. set에는 deadends와 방문한 상태를 계속 남기고, queue에는 앞으로 탐색할 상태를 넣도록 역할을 나눴다.\n\n상태는 네 자리의 vector<int>로 표현했다. 컨테이너의 자료형에 길이 4를 지정하려다가 실제 vector를 만들 때 크기를 지정하도록 바꿨다. 방향 배열 V는 8행 4열로 만들고, 앞의 네 행은 한 자리씩 +1, 뒤의 네 행은 -1을 넣었다. 문자열은 P()에서 각 문자에 '0'을 빼 숫자로 바꿨다.\n\n반복 조건을 i > 4로 써서 실행되지 않던 부분은 i < 4로 고쳤다. 음수 방향의 V[i][i - 4]는 i가 3이면 인덱스가 -1이 되므로 4부터 시작하도록 수정했다. set에 push()를 쓰던 부분은 insert()로, Q[i]로 접근하던 부분은 Q.front()로 바꿨다.\n\nwhile(Q.size() == 0)은 큐가 비어 있을 때만 실행되는 조건이라 반대로 고쳤다. Q.pop()을 빠뜨려 같은 상태를 계속 보던 문제도 수정했다. 방향 계산에서는 상태의 순서와 자릿수 인덱스를 섞었다가 temp[l] = Q.front()[l] + V[j][l]로 정리했다. j는 방향이고 l은 자릿수다.",
    "turning": "push()에서 각 자릿수가 9를 넘으면 10을 빼고, 0보다 작으면 10을 더했다. 처음에는 증가할 때만 처리했다가 감소할 때도 순환하도록 고쳤다. set 삽입 전후의 크기를 비교해 새 상태일 때만 큐에도 넣고 true를 반환했다.\n\ndeadends를 먼저 set에 넣은 뒤 push({0,0,0,0})로 시작했다. 반환값을 반대로 사용하던 부분을 수정해 시작 상태를 넣을 수 없을 때 -1을 반환했다. push()에서 이미 큐에 넣으므로 별도의 Q.push()도 제거했다.\n\n현재 Q.size()를 저장하고 그 개수만큼 처리한 뒤 이동 횟수 A를 늘렸다. 목표 상태를 만나면 A를, 큐가 빌 때까지 찾지 못하면 -1을 반환했다. 최종적으로 49개 테스트를 모두 통과했다. 최적화한 다른 버전은 제출하지 않았다.",
    "learned": [
      "set은 방문 여부와 이동 불가능 상태를, queue는 탐색 순서를 맡도록 나눴다. 방문 기록을 지우지 않아 같은 상태를 다시 큐에 넣지 않았다.",
      "set 검색은 전체 순회가 아니라 O(log N)이라는 점을 확인했다.",
      "Q.size()를 먼저 저장하면 같은 이동 횟수의 상태들을 묶어서 처리할 수 있었다.",
      "2차원 좌표의 방향 배열처럼 네 자릿수의 변화량도 8개의 방향 벡터로 표현했다.",
      "문자에서 '0'을 빼 숫자로 바꾸고, 증가와 감소 양쪽의 순환을 처리했다."
    ],
    "code_title": "최종 통과 코드 · C++ (제출 원본)",
    "solution_code": "class Solution {\r\npublic:\r\n    set<vector<int>>S;\r\n    queue<vector<int>>Q;\r\n\r\n    vector<int> P(string num)\r\n    {\r\n        vector<int>A;\r\n        for(int i = 0; i < 4; i++)\r\n        { \r\n            A.push_back(num[i] - '0');\r\n        }\r\n        return A;\r\n    }\r\n\r\n    bool push(vector<int>A)\r\n    {\r\n        for(int i = 0; i < A.size();i++)\r\n        {            \r\n            if(A[i] > 9)\r\n            {\r\n                A[i] -= 10;\r\n            }\r\n            else if(A[i] < 0)\r\n            {\r\n                A[i] += 10;\r\n            }\r\n        }\r\n        int size = S.size();\r\n        S.insert(A);\r\n        if(size != S.size())\r\n        {\r\n            Q.push(A);\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    int openLock(vector<string>& deadends, string target) {\r\n        vector<vector<int>>V(8,vector<int>(4));\r\n        vector<int>tg = P(target);\r\n        for(int i = 0; i < 4; i++)\r\n        {\r\n                V[i] = {0,0,0,0};\r\n                V[i][i] = 1;\r\n        }\r\n        for(int i = 4; i < 8; i++)\r\n        {\r\n                V[i] = {0,0,0,0};\r\n                V[i][i - 4] = -1;\r\n        }\r\n        for(string te : deadends)\r\n        {\r\n            vector<int> temp = P(te);\r\n            S.insert(temp);\r\n        }\r\n        if(!push({0,0,0,0}))\r\n        {\r\n            return -1;\r\n        }\r\n        int A = 0;\r\n        while(Q.size() != 0)\r\n        {\r\n            int size = Q.size();\r\n            for(int i = 0; i < size; i++)\r\n            {\r\n                if(tg == Q.front())\r\n                {\r\n                    return A;\r\n                }\r\n                vector<int>temp(4);\r\n                for(int j = 0; j < 8; j++)\r\n                {\r\n                    for(int l = 0; l < 4; l++)\r\n                    {\r\n                        temp[l] = Q.front()[l] + V[j][l];\r\n                    }\r\n                    push(temp);\r\n                }\r\n                Q.pop();\r\n            }\r\n            A++;\r\n        }\r\n        return -1;\r\n    }\r\n};",
    "code_result": "2026-11-03 09:45 · Accepted · 49/49 · Runtime 653ms (Beats 5.04%) · Memory 112.00MB (Beats 11.03%)",
    "submission_url": "https://leetcode.com/problems/open-the-lock/submissions/2188166447",
    "verification": "사용자 제공 학습 기록·제출 코드·채점 결과 기준. 학습일: 2026-10-29, 2026-10-30, 2026-11-03. 목록 날짜는 사용자 요청에 따라 마지막 학습일이자 통과일인 2026-11-03으로 표시했다. 제출일: 2026-11-03 09:45. 날짜별 세부 시행착오의 배분과 제출 시각의 시간대는 별도로 확인되지 않아 추정하지 않았다."
  }
];
