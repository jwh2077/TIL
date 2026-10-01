window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-2514-count-anagrams.js"] = [
  {
    "id": "lc-2514",
    "title": "Count Anagrams · 팩토리얼 계산에서 막힘",
    "group": "math",
    "tags": [
      "문자열",
      "팩토리얼",
      "경우의 수",
      "나머지 연산"
    ],
    "url": "https://leetcode.com/problems/count-anagrams/description/",
    "status": "미완성",
    "date": "2026-09-30",
    "problem": "문장을 이루는 각 단어의 문자 순서를 바꿔 만들 수 있는 서로 다른 애너그램의 수를 구한다. 결과는 1,000,000,007로 나눈 나머지를 반환한다.",
    "summary": "풀이 실패·보류. 중복 문자를 고려한 경우의 수는 계산했지만, 나머지 연산 뒤의 나눗셈에서 막혔다.",
    "question": "처음에는 단어별 애너그램을 직접 만들어 set에 넣으려고 했다. 하지만 경우의 수가 많아 시간 초과가 날 것 같아서 직접 만들지 않고 개수를 계산하는 방식으로 바꿨다.",
    "attempt": "서로 다른 문자가 n개면 n!이고, 중복된 문자가 있으면 그 개수의 팩토리얼로 나눈다. \"too\"는 3! / 2! = 3, \"aabb\"는 4! / 2! / 2! = 6, \"aaabbc\"는 6! / 3! / 2!로 계산할 수 있다는 것까지 이해했다.\n\n소문자는 26개라 int alphabet[26] = {}를 만들고 alphabet[s[j] - 'a']++로 개수를 셌다. 공백이나 마지막 문자에서 단어의 경우의 수를 계산해 A에 곱했다. 단어 하나가 끝나면 anagrams를 비우고 alphabet도 모두 0으로 돌려 다음 단어에 사용했다.",
    "turning": "팩토리얼이 빠르게 커져 int와 long long으로도 오버플로가 났다. 계산 중간에 % 1000000007을 넣어봤지만, 나머지를 구한 값에 일반적인 /를 쓰면 원래의 나눗셈과 같은 결과가 나오지 않았다. 큰 팩토리얼의 오버플로를 막으면서 나눗셈까지 처리하는 방법을 아직 몰라 여기서 보류했다.",
    "learned": [
      "단어 길이의 팩토리얼을 중복된 각 문자 개수의 팩토리얼로 나누면 서로 다른 배열의 수를 계산할 수 있다.",
      "소문자에서 a를 빼면 알파벳 개수 배열의 0~25번 위치로 사용할 수 있다.",
      "다음 단어를 계산하기 전에 문자열과 알파벳 개수 배열을 초기화했다.",
      "나머지 연산을 적용한 값끼리 일반 나눗셈을 하는 것으로는 원래 계산을 대신할 수 없었다."
    ],
    "code_title": "작성한 코드 · C++ · 미완성, 풀이 보류",
    "solution_code": "class Solution {\npublic:\n    int countAnagrams(string s) {\n        int A = 1;\n        string anagrams;\n        int alphabet[26] = {};\n\n        for (int j = 0; j < s.size(); j++)\n        {\n            if(s[j] == ' ' || j == s.size() - 1)\n            {\n                long long n = 1;\n\n                if(j == s.size() - 1)\n                {\n                    anagrams += s[j];\n                    alphabet[s[j] - 'a']++;\n                }\n\n                for(int i = anagrams.size(); i > 0; i--)\n                {\n                    n = n * i % (1000000000 + 7);\n                }\n\n                for(int al = 0; al < 26; al++)\n                {\n                    if(alphabet[al] > 1)\n                    {\n                        int b = 1;\n\n                        for (int i = 1; i <= alphabet[al]; i++)\n                        {\n                            b = b * i % (1000000000 + 7);\n                        }\n\n                        n /= b;\n                    }\n                }\n\n                A *= n % (1000000000 + 7);\n\n                anagrams.clear();\n\n                for (int i = 0; i < 26; i++)\n                {\n                    alphabet[i] = 0;\n                }\n            }\n            else\n            {\n                alphabet[s[j] - 'a']++;\n                anagrams += s[j];\n            }\n        }\n\n        return A % (1000000000 + 7);\n    }\n};",
    "verification": "사용자 제공 학습일 2026-09-30 · 결과: 풀이 실패 / 보류. 통과 결과나 제출 시각은 확인되지 않았다. 당시 작성 코드를 유지했으며 정답 코드가 아니다. b의 곱셈과 A의 누적 곱셈에도 오버플로 문제가 남아 있다."
  }
];
