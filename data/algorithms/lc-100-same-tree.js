window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-100-same-tree.js"] = [
  {
    "id": "lc-100",
    "title": "같은 트리 비교",
    "group": "tree",
    "url": "https://leetcode.com/problems/same-tree/",
    "status": "오답 · 수정 중",
    "problem": "두 트리의 구조와 대응 값이 같은지 확인한다.",
    "date": "2026-09-16",
    "summary": "자식 노드에서 구한 결과를 반환하지 않아 오답이 났다. 재귀 호출의 반환값을 다시 봤다.",
    "question": "한 번 false가 나오면 더 비교하지 않게 만들고 싶어서 bool A를 재귀 전체에서 공유하려 했다. 하지만 자식 Tree가 false를 반환해도 그 값을 받지 않았고 함수 끝의 true가 결과를 덮었다.",
    "attempt": "A를 값이 아닌 bool&로 바꾸고 자식 구조가 다른 경우를 먼저 검사했다. 그래도 isSameTree에서 A = Tree(...)를 수행하면 마지막 return true가 공유된 false를 다시 true로 바꿀 수 있었다.",
    "turning": "자식 호출의 결과를 바로 반환하는 방식으로 다시 정리했다. 둘 다 nullptr이면 true, 한쪽만 nullptr이면 false다. 현재 값과 왼쪽·오른쪽 결과가 모두 같아야 true가 된다.",
    "learned": [
      "자식 함수의 false를 받지 않으면 끝의 true가 반환된다.",
      "포인터로 값을 읽기 전에 nullptr인지 검사해야 한다."
    ],
    "code_title": "오답 원인을 반영한 풀이",
    "solution_code": "class Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        if (p == nullptr && q == nullptr) return true;\n        if (p == nullptr || q == nullptr) return false;\n\n        return p->val == q->val\n            && isSameTree(p->left, q->left)\n            && isSameTree(p->right, q->right);\n    }\n};",
    "verification": "아래 코드는 수정안 · 통과 제출 미확인"
  }
];
