window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-2058-find-the-minimum-and-maximum-number-of-nodes-between-critical-points.js"] = [
  {
    "id": "lc-2058",
    "title": "연결 리스트에서 주변보다 크거나 작은 점 찾기",
    "group": "tree",
    "url": "https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/",
    "status": "수정 중",
    "problem": "앞뒤 값보다 모두 크거나 모두 작은 노드(임계점)를 찾고 그 사이의 최소·최대 거리를 구한다.",
    "date": "2026-09-01",
    "summary": "이전·현재·다음 값을 비교해 임계점을 찾고 거리를 구하려 했다. 본인 제출 목록의 마지막 결과는 Runtime Error였다.",
    "question": "처음에는 임계점 노드 자체를 first와 last에 저장하고 다시 순회해 거리를 세려 했다. 위치와 거리 변수가 섞이면서 최소 거리의 기준이 불분명해졌다.",
    "attempt": "findpoint에서 지역 최솟값·최댓값을 판정하고 num, num2를 증가시키려 했다. 벡터 초기화 문법과 nullptr 접근을 수정했지만 num2 증가와 첫 임계점 처리, p의 유효성 검사가 남았다.",
    "turning": "첫 번째 위치와 직전 위치를 숫자로 저장하는 방법도 정리해 봤다. 이렇게 하면 거리를 구하려고 노드를 다시 따라가지 않아도 된다. 아래에는 이 방식의 참고 예제를 남겼다.",
    "learned": [
      "임계점은 이전과 다음 노드가 모두 있는 현재 노드만 될 수 있다.",
      "최소 거리는 연속한 임계점 사이, 최대 거리는 첫 임계점과 마지막 임계점 사이에서 나온다.",
      "노드 자체보다 순회 인덱스를 저장하면 거리 계산이 직접적이다."
    ],
    "code_title": "참고 예제 · 위치로 거리 계산",
    "solution_code": "class Solution {\npublic:\n    vector<int> nodesBetweenCriticalPoints(ListNode* head) {\n        int first = -1, previous = -1;\n        int minDistance = INT_MAX, index = 1;\n        ListNode* prev = head;\n        ListNode* current = head->next;\n\n        while (current->next != nullptr) {\n            bool critical =\n                (prev->val < current->val && current->val > current->next->val) ||\n                (prev->val > current->val && current->val < current->next->val);\n\n            if (critical) {\n                if (first == -1) first = index;\n                if (previous != -1) minDistance = min(minDistance, index - previous);\n                previous = index;\n            }\n            prev = current;\n            current = current->next;\n            index++;\n        }\n\n        if (first == previous) return {-1, -1};\n        return {minDistance, previous - first};\n    }\n};",
    "verification": "LeetCode Practice History · 최근 제출 9월 1일 · Runtime Error · 제출 20회 · 2026-09-29 목록 확인, 통과 제출은 확인되지 않음 · 아래 코드는 실제 제출이 아닌 참고 예제"
  }
];
