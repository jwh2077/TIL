window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-42587.js"] = [
  {
    "id": "pg-42587",
    "title": "프로세스",
    "group": "queue",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/42587",
    "status": "통과 확인",
    "problem": "우선순위와 대기 순서에 따른 목표의 실행 순서를 구한다.",
    "date": "2026-09-02",
    "summary": "대기 순서를 위한 queue와 최고 우선순위를 위한 priority_queue를 함께 사용했다.",
    "question": "queue는 가운데 인덱스로 접근할 수 없으므로, 현재 프로세스보다 높은 우선순위가 뒤에 있는지 매번 어떻게 확인할지가 문제였다.",
    "attempt": "queue<pair<int,int>>에 우선순위와 원래 위치를 함께 넣고, 별도 priority_queue에는 우선순위만 넣었다. 현재 queue의 front가 최고 우선순위가 아니면 뒤로 보내고, 같으면 실행했다.",
    "turning": "priority_queue는 별도 헤더가 아니라 <queue>에 포함된다. 실행할 때 일반 queue와 우선순위 큐에서 값을 함께 pop해야 두 자료구조의 상태가 맞는다. 원래 위치를 pair.second로 보존해 목표인지 확인했다.",
    "learned": [
      "queue는 순서를, priority_queue는 현재 최댓값 확인을 담당한다.",
      "같은 데이터를 두 자료구조에 둘 때 제거 시점을 함께 맞춘다.",
      "pair에 원래 인덱스를 보존하면 재배치 후에도 대상을 찾을 수 있다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "#include <string>\n#include <vector>\n#include <queue>\nusing namespace std;\nint solution(vector<int> priorities, int location) \n{\n    int answer = 0;\n    queue<pair<int,int>>pro;\n    priority_queue<int> pq;\n    for(int i = 0; i < priorities.size(); i++)\n    {\n        pro.push({priorities[i], i});\n        pq.push(priorities[i]);\n    }\n    while(true)\n    {\n        if(pro.front().first >= pq.top())\n        {\n            answer++;\n            if(pro.front().second == location) return answer;\n            pro.pop(); pq.pop();\n        }\n        else { pro.push(pro.front()); pro.pop(); }\n    }\n}",
    "verification": "프로그래머스 정답 · 100 / 100"
  }
];
