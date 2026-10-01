window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-58-length-of-last-word.js"] = [
  {
    "id": "lc-58",
    "title": "마지막 단어의 길이",
    "group": "string",
    "url": "https://leetcode.com/problems/length-of-last-word/",
    "status": "통과 확인",
    "date": "2026-08-25",
    "verification": "LeetCode Accepted · 60 / 60 · 9/29 본인 제출 목록의 마지막 결과: 2026-08-24 Accepted (사이트 표시일, 학습일과 구분)",
    "problem": "문자열 끝의 공백을 무시하고 마지막 단어의 길이를 반환한다.",
    "summary": "공백 뒤 새 단어가 시작되면 길이를 1로 초기화하고, 같은 단어가 이어지면 길이를 증가시켰다.",
    "question": "",
    "attempt": "isAfterSpace로 직전 문자가 공백이었는지 기록했다. 공백 다음의 첫 글자에서는 answer를 1로 다시 시작했다.",
    "turning": "끝에 공백이 와도 answer를 지우지 않는다. 다음 단어의 첫 글자를 만날 때만 1로 다시 시작한다.",
    "learned": [
      "공백을 만났는지와 마지막 단어 길이를 따로 저장한다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    int lengthOfLastWord(string s) {\n        int answer{};\n        bool isAfterSpace{};\n        for (char c : s) {\n            if (c == ' ') isAfterSpace = true;\n            else {\n                if (isAfterSpace) answer = 1;\n                else answer += 1;\n                isAfterSpace = false;\n            }\n        }\n        return answer;\n    }\n};",
    "submission_url": "https://leetcode.com/submissions/detail/2117914094/"
  }
];
