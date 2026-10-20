window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-257-binary-tree-paths.js"] = [
  {
    "id": "lc-257",
    "title": "Binary Tree Paths · 루트부터 리프까지 경로 이어 붙이기",
    "group": "tree",
    "tags": [
      "이진 트리",
      "재귀",
      "DFS",
      "문자열",
      "리프 노드"
    ],
    "url": "https://leetcode.com/problems/binary-tree-paths/",
    "date": "2026-10-12",
    "problem": "이진 트리에서 루트부터 리프까지의 모든 경로를 문자열로 반환한다.",
    "summary": "현재 경로를 문자열 temp로 재귀 함수에 전달하고, 양쪽 자식이 없는 리프에 도착하면 결과에 저장했다.",
    "attempt": "루트의 값을 to_string으로 바꾸고 tree(root, temp)를 호출했다. 자식 노드로 내려갈 때마다 현재 경로에 ->와 자식의 값을 붙여 전달했다.",
    "turning": "왼쪽과 오른쪽 자식이 모두 nullptr이면 리프에 도착한 것이므로 A에 temp를 넣고 반환했다. 자식이 있는 쪽만 재귀 호출하고, temp는 값으로 전달해 각 호출에서 경로를 이어 갔다.",
    "learned": [
      "재귀 호출로 왼쪽과 오른쪽 자식을 탐색했다.",
      "경로 문자열을 값으로 전달하면서 루트부터 현재 노드까지의 경로를 관리했다.",
      "양쪽 자식이 모두 없을 때 완성된 경로를 결과에 저장했다."
    ],
    "solution_code": "// 첫 값은 if로 값이 없으면 push_back 혀면서 넣고 이후  to string += ->val 형태로 이어 붙이기\n// 변경 값을 재귀에서 temp로 가지고 있다가 양쪽 모두 끝 null에 도달시 push_back한다\n\nclass Solution {\npublic:\nvector<string> A;\nvoid tree(TreeNode* root, string temp)\n{\n    if(root->left == nullptr && root->right == nullptr)\n    {\n        A.push_back(temp);\n        return;\n    }\n\n    if(root->left != nullptr)\n    {\n        tree(root->left, temp + \"->\" + to_string(root->left->val));\n    }\n\n    if(root->right != nullptr)\n    {\n        tree(root->right, temp + \"->\" + to_string(root->right->val));\n    }\n}\n\n    vector<string> binaryTreePaths(TreeNode* root) {\n        string temp = to_string(root->val);\n        tree(root, temp);\n        return A;\n    }\n};",
    "verification": "사용자 제공 채점 결과: LeetCode Accepted · 209 / 209 · 제출 2026-10-12 08:39 · C++ · Runtime 0 ms (Beats 100.00%) · Memory 17.67 MB (Beats 65.65%). 목록의 풀이 기록 날짜는 제출일을 기준으로 두었다. 별도 학습일과 제출 시각의 시간대는 확인하지 않았다. 제출 링크는 제공되지 않아 문제 원문만 연결했다.",
    "status": "통과 확인",
    "code_title": "최종 제출 코드 · C++ (원본)"
  }
];
