window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-25-reverse-nodes-in-k-group.js"] = [
  {
    "id": "lc-25",
    "title": "k개 그룹으로 연결 리스트 뒤집기",
    "group": "tree",
    "url": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "status": "통과 확인",
    "date": "2026-08-20",
    "verification": "LeetCode Accepted · 62 / 62 · 9/29 본인 제출 목록의 마지막 결과: 2026-08-19 Wrong Answer (사이트 표시일, 학습일과 구분) · 위 통과 근거와 마지막 제출 결과는 서로 다른 제출",
    "problem": "연결 리스트를 k개씩 묶어 각 묶음의 순서를 뒤집고 남는 노드는 유지한다.",
    "summary": "노드 연결을 바꾸는 대신 k의 배수 구간 값을 배열에 저장한 뒤 역순으로 다시 써서 통과했다.",
    "question": "",
    "attempt": "리스트 길이에서 완전한 그룹 수를 구하고, 그 구간의 값을 vector에 저장했다. 각 그룹마다 뒤에서 앞으로 값을 읽어 노드에 덮어썼다.",
    "turning": "노드 연결을 바꾸지 않고 val을 덮어쓴 코드가 Accepted를 받았다. 다만 문제에는 값을 바꾸지 말고 노드를 바꾸라는 조건이 있다. 채점 통과와 이 조건을 지켰는지는 별개다.",
    "learned": [
      "size / k개의 묶음만 뒤집고 남는 노드는 그대로 둔다.",
      "값 변경과 노드 연결 변경은 다르다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    ListNode* reverseKGroup(ListNode* head, int k) {\n        ListNode* B = head;\n        int size = getsize(head), re = size / k;\n        vector<int>A(re * k, 0);\n        for(int b = 0; b < re * k; b++) { A[b] = B->val; B = B->next; }\n        B = head;\n        for (int a = 0; re > a; a++)\n            for(int c = k - 1; c >= 0; c--) { B->val = A[a * k + c]; B = B->next; }\n        return head;\n    }\n    int getsize(ListNode* head) {\n        int num = 0;\n        while(head != nullptr) { head = head->next; num++; }\n        return num;\n    }\n};",
    "submission_url": "https://leetcode.com/submissions/detail/2111625723/"
  }
];
