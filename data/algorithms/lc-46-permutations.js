window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-46-permutations.js"] = [
  {
    "id": "lc-46",
    "title": "Permutations · 선택한 숫자를 되돌리며 순열 만들기",
    "group": "bruteforce",
    "tags": [
      "순열",
      "재귀",
      "백트래킹",
      "vector",
      "방문 여부",
      "DFS",
      "깊이 우선 탐색",
      "LeetCode"
    ],
    "url": "https://leetcode.com/problems/permutations/",
    "date": "2026-10-13",
    "problem": "서로 다른 정수 배열에서 가능한 모든 순열을 반환한다.",
    "summary": "사용 여부를 표시하고 숫자를 선택한 뒤 재귀 호출했다. 돌아오면 숫자와 사용 표시를 되돌려 다른 순열을 만들었다.",
    "question": "방문 여부를 map으로 관리할지 vector<bool>로 관리할지 고민했다.",
    "attempt": "완성된 순열은 vector<vector<int>> A에, 현재 고른 숫자는 vector<int> temp에 저장했다. vector<bool> val로 각 인덱스의 사용 여부를 관리하고, continue 대신 if (!val[i]) 안에서 아직 쓰지 않은 숫자를 선택했다.",
    "turning": "val[i] = true로 표시하고 temp에 숫자를 넣은 뒤 re(nums)를 호출했다. 돌아오면 temp.pop_back()으로 마지막 숫자를 빼고 val[i] = false로 되돌렸다. temp.size() == nums.size()이면 순열 하나가 완성된 것이므로 A에 넣고 반환했다.",
    "learned": [
      "현재 선택한 숫자 수가 입력 크기와 같아지면 순열을 저장했다.",
      "사용 여부는 숫자 값이 아니라 입력 배열의 인덱스로 관리했다.",
      "선택 → 재귀 호출 → 선택 취소 순서로 상태를 복구해야 다른 순열을 탐색할 수 있었다."
    ],
    "solution_code": "class Solution {\npublic:\nvector<vector<int>>A;\nvector<bool>val;\nvector<int>temp;\n\nvoid re (vector<int>& nums){\n    if(temp.size() == nums.size())\n    {\n        A.push_back(temp);\n        return;\n    }\n    for(int i = 0; i < nums.size();i++)\n    {\n        if(!val[i])\n        {\n            val[i] = true;\n            \n            temp.push_back(nums[i]);\n            \n            re(nums);\n            \n            temp.pop_back();\n            \n            val[i] = false;\n        }\n    }\n}\n    vector<vector<int>> permute(vector<int>& nums) {\n      val.resize(nums.size(),false);\n      re(nums);\n      return A;\n    }\n};",
    "verification": "사용자 제공 채점 결과: LeetCode Accepted · 26 / 26 · 제출 2026-10-13 20:55 · C++ · Runtime 0 ms (Beats 100.00%) · Memory 10.97 MB (Beats 25.98%). 목록의 풀이 기록 날짜는 제출일을 기준으로 두었다. 별도 학습일과 제출 시각의 시간대는 확인하지 않았다. 제출 링크는 제공되지 않아 문제 원문만 연결했다.",
    "status": "통과 확인",
    "code_title": "최종 제출 코드 · C++ (원본)"
  }
];
