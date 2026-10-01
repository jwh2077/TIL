window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-1347-minimum-number-of-steps-to-make-two-strings-anagram.js"] = [
  {
    "id": "lc-1347",
    "title": "두 문자열의 아나그램 만들기",
    "group": "string",
    "url": "https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/",
    "status": "통과 확인",
    "problem": "t의 문자를 교체해 s와 같은 문자 빈도를 만드는 최소 횟수를 구한다.",
    "date": "2026-09-07",
    "summary": "map에 문자별 개수 차이를 쌓았다. 어느 쪽에 남은 문자를 세어야 하는지 헷갈렸다.",
    "question": "s의 문자는 +1, t의 문자는 -1로 기록하면 같은 문자는 0이 된다. 이후 pair의 값에 어떻게 접근하고 어떤 부호를 더해야 하는지를 확인했다.",
    "attempt": "unordered_map<char,int>를 순회하며 음수에는 !A.second 또는 -A.second를 적용하고 양수도 더하려 했다. 논리 부정 !는 절댓값이 아니라 0 또는 1을 만든다.",
    "turning": "!A.second는 부호를 바꾸는 연산이 아니라 참과 거짓을 뒤집는 연산이라 음수에 쓰면 0이 나온다. 두 문자열의 길이가 같아 양수 차이만 더한 결과가 교체 횟수와 같았고 이 코드가 통과했다. A.second > 0인 값만 더한다고 적으면 뜻이 더 분명하다.",
    "learned": [
      "range-for에서 map 원소는 key와 value를 가진 pair다.",
      "!value는 부호 전환이 아니라 논리값 변환이다.",
      "빈도 차이의 어느 방향을 합산할지 문제의 변환 방향으로 결정한다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class Solution {\npublic:\n    int minSteps(string s, string t)\n    {\n        unordered_map<char,int>sum;        \n        for(int i = 0 ; i < s.size(); i++)\n        {\n            sum[s[i]]++;\n            sum[t[i]]--;\n        }\n        int num = 0;\n        for(auto A : sum)\n        {\n            if(0 > A.second) num += !A.second;\n            else num += A.second;\n        }\n        return num;\n    }\n};",
    "verification": "LeetCode Accepted · 63 / 63 · 9/29 본인 제출 목록의 마지막 결과: 2026-09-07 Accepted (사이트 표시일, 학습일과 구분)",
    "submission_url": "https://leetcode.com/submissions/detail/2133362982/"
  }
];
