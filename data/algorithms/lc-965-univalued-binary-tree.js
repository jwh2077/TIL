window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-965-univalued-binary-tree.js"] = [
  {
    "id": "lc-965",
    "title": "단일값 이진 트리",
    "group": "tree",
    "url": "https://leetcode.com/problems/univalued-binary-tree/",
    "status": "통과 확인",
    "problem": "트리 모든 노드의 값이 같은지 확인한다.",
    "date": "2026-09-14",
    "summary": "왼쪽만 따라가면 놓치는 노드가 있어 양쪽 자식을 재귀로 돌았다.",
    "question": "8월 17일에는 왼쪽 끝까지 내려간 다음 일부 오른쪽 자식만 검사하는 코드를 적었다. 이 방식으로는 오른쪽 가지 안쪽의 노드를 놓칠 수 있었다. 이때 DFS/BFS가 뭔지도 물었다.",
    "attempt": "9월 14일에는 재귀 함수 tree가 자식 값을 반환하고 부모 값과 비교하도록 바꿨다. 불일치가 나오면 멤버 변수 A를 false로 바꾸고 이후 호출을 빠르게 종료하려 했다.",
    "turning": "자식 함수가 반환한 값과 현재 노드 값을 비교한다. 한 번이라도 다르면 멤버 변수 A를 false로 두는 방식으로 통과했다.",
    "learned": [
      "한쪽 끝만 내려가면 반대쪽 가지의 노드를 놓친다.",
      "이 풀이에서는 값 비교 결과를 A에 남긴다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    bool A = true;\n    bool isUnivalTree(TreeNode* root) \n    {\n        A = true;\n        tree(root);\n        return A;\n    }\n    int tree (TreeNode* root)\n    {\n        if (!A){ return 0;}\n        if(root->left != nullptr && tree(root->left) != root-> val) A = false;\n        if(root->right != nullptr && tree(root->right)!= root-> val) A = false;\n        return root-> val;\n    }\n};",
    "verification": "LeetCode Accepted · 72 / 72 · 9/29 본인 제출 목록의 마지막 결과: 2026-09-14 Accepted (사이트 표시일, 학습일과 구분)",
    "submission_url": "https://leetcode.com/submissions/detail/2141062788/"
  }
];
