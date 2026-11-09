window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-42747.js"] = [
  {
    "id": "pg-42747",
    "title": "H-Index · 인용 횟수와 논문 수 비교하기",
    "group": "queue",
    "tags": [
      "프로그래머스",
      "우선순위 큐",
      "priority_queue"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/42747",
    "status": "통과 확인",
    "date": "2026-11-04",
    "problem": "h번 이상 인용된 논문이 h편 이상일 때, 가능한 가장 큰 h를 구한다. 프로그래머스 Lv.2 문제다.",
    "summary": "우선순위 큐에서 인용 횟수가 높은 논문부터 확인했다. 큐에 남은 논문 수를 보다가, 이번 논문까지 몇 편을 확인했는지 세는 방식으로 바꿨다.",
    "question": "처음에는 pq.size() <= h로 비교했다. 그런데 pq.size()는 아직 남아 있는 논문 수였다. [100, 100, 100]은 세 편 모두 100번씩 인용됐지만 H-Index는 3이다. 답이 꼭 인용 횟수 중 하나일 필요는 없었다.",
    "attempt": "확인한 논문 수는 A로 따로 셌다. 처음에는 pq.pop()을 먼저 해서, A를 늘릴 때는 이미 다음 논문의 인용 횟수를 보고 있었다. 현재 논문을 포함할 수 있는지 먼저 비교하고 나서 제거하도록 순서를 바꿨다.\n\npq.size() > 1을 반복 조건에 넣으니 마지막 한 편을 검사하지 않고 끝났다. 마지막 논문을 따로 처리하려고 반복문을 두 개로 나눠 봤지만 두 번째 조건을 반대로 쓰면서 더 복잡해졌다.",
    "turning": "한 반복문에서 h에는 현재 맨 위 논문의 인용 횟수를 두고, ++A로 이번 논문까지 센 뒤 비교했다. h < ++A이면 이번 논문은 A번만큼 인용되지 않았다. 뒤에 남은 논문은 인용 횟수가 더 클 수 없으므로 이전까지 만족한 A - 1을 반환했다.\n\n조건을 만족하면 pq.pop()으로 현재 논문을 제거했다. 마지막 한 편이었다면 A를 그대로 반환하고, 큐에 논문이 남아 있을 때만 pq.top()으로 다음 값을 읽었다.",
    "learned": [
      "pq.top()으로 현재 인용 횟수를 읽고, 비교가 끝난 뒤 pq.pop()해야 같은 논문을 기준으로 셀 수 있었다.",
      "++A는 이번 논문을 먼저 포함한다. 그래서 인용 횟수가 부족할 때 반환할 값은 A - 1이다.",
      "논문 n편을 우선순위 큐에 넣고 최대 n번 꺼내므로 시간 복잡도는 O(n log n), 공간 복잡도는 O(n)이다."
    ],
    "code_title": "최종 통과 코드 · C++",
    "solution_code": "#include <vector>\n#include <queue>\n\nusing namespace std;\n\nint solution(vector<int> citations) {\n    priority_queue<int> pq;\n    for(int num : citations)\n    {\n        pq.push(num);\n    }\n    int h = pq.top();\n    int A = 0;\n    while(A <= h)\n    {\n        if(h < ++A)\n        {\n            return A - 1;\n        }\n        pq.pop();\n        if(pq.size() == 0)\n        {\n            return A;\n        }\n        h = pq.top();\n    }\n    return A;\n}",
    "code_result": "정확성 100/100 · 16/16 통과 · 실행 시간 0.00~0.07ms · 메모리 4.70~5.07MB",
    "verification": "2026-11-04는 학습일이자 채점 결과를 공유한 날이다. 제출일과 제출 링크는 미확인."
  }
];
