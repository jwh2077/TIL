window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-42626.js"] = [
  {
    "id": "pg-42626",
    "title": "더 맵게",
    "group": "queue",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/42626",
    "status": "통과 확인",
    "problem": "가장 작은 두 값을 섞어 모든 값이 K 이상이 되는 최소 횟수를 구한다.",
    "date": "2026-09-11",
    "summary": "최솟값 두 개를 반복해서 꺼내기 위해 최소 힙을 사용하고 종료 조건을 다듬었다.",
    "question": "priority_queue는 기본적으로 큰 값이 먼저 나오는데 이 문제는 가장 작은 두 값이 필요했다. greater<int>를 지정한 우선순위 큐가 왜 최소 힙이 되는지부터 확인했다.",
    "attempt": "모든 스코빌 값을 최소 힙에 넣고 top 두 개를 꺼내 첫 번째+두 번째*2를 다시 넣었다. 섞은 횟수는 answer에 누적했다.",
    "turning": "반복 조건은 가장 작은 값이 K보다 작을 때다. <=를 사용하면 K와 정확히 같은 값도 불필요하게 섞는다. 두 번째 값을 꺼내기 전에 원소가 두 개 미만인지 검사해야 더 만들 수 없는 경우 -1을 반환할 수 있다.",
    "learned": [
      "greater<int> 비교자를 사용하면 가장 작은 값이 top에 온다.",
      "전체가 조건을 만족하는지는 최소값 하나만 확인하면 된다.",
      "top을 호출하기 전 컨테이너가 비어 있지 않은지 보장해야 한다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "#include <vector>\n#include <queue>\nusing namespace std;\nint solution(vector<int> scoville, int K) {\n    int answer = 0;\n    priority_queue<int, vector<int>, greater<int>>sco;\n    for(int value : scoville) sco.push(value);\n    while(sco.top() < K)\n    {\n        if(sco.size() < 2) return -1;\n        int num = sco.top(); sco.pop();\n        num += sco.top() * 2; sco.pop();\n        sco.push(num);\n        answer++;\n    }\n    return answer;\n}",
    "verification": "프로그래머스 정답 · 100 / 100"
  }
];
