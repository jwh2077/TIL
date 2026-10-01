window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-38-count-and-say.js"] = [
  {
    "id": "lc-38",
    "title": "Count and Say",
    "group": "string",
    "url": "https://leetcode.com/problems/count-and-say/",
    "status": "통과 확인",
    "date": "2026-08-21",
    "verification": "LeetCode Accepted · 30 / 30 · 9/29 본인 제출 목록의 마지막 결과: 2026-08-20 Wrong Answer (사이트 표시일, 학습일과 구분) · 위 통과 근거와 마지막 제출 결과는 서로 다른 제출",
    "problem": "이전 문자열에서 연속한 같은 숫자의 개수와 숫자를 읽어 다음 문자열을 만든다.",
    "summary": "현재 문자를 기준으로 연속 개수를 세고 문자가 바뀌는 순간 결과 문자열에 묶음을 기록했다.",
    "question": "",
    "attempt": "A를 현재 수열, B를 다음 수열로 두었다. C에는 현재 숫자, D에는 연속 개수를 저장하고 문자가 바뀔 때 D와 C를 붙였다.",
    "turning": "문자열을 끝까지 돌고 나면 마지막 묶음이 남는다. 반복문 밖에서 마지막 D와 C를 한 번 더 붙였다.",
    "learned": [
      "문자가 바뀔 때 묶음을 붙이는 것만으로는 마지막 묶음이 빠진다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    string countAndSay(int n) {\n        string A = \"1\", B;\n        char C;\n        int D = 0;\n        for(int a = 1; a < n; a++) {\n            B = \"\"; C = A[0]; D = 0;\n            for(int b = 0; b < A.size(); b++) {\n                if(C != A[b]) { B += to_string(D); B += C; D = 0; }\n                C = A[b]; D++;\n            }\n            B += to_string(D); B += C; A = B;\n        }\n        return A;\n    }\n};",
    "submission_url": "https://leetcode.com/submissions/detail/2113884747/"
  }
];
