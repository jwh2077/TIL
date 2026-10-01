window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12977.js"] = [
  {
    "id": "pg-12977",
    "title": "소수 만들기",
    "group": "bruteforce",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12977",
    "status": "통과 확인",
    "date": "2026-09-21",
    "problem": "서로 다른 세 수를 골라 더했을 때 합이 소수가 되는 조합의 수를 센다.",
    "summary": "서로 다른 세 인덱스를 고르는 반복문을 만들었다. 합이 같아도 고른 조합이 다르면 따로 세어야 했다.",
    "question": "같은 합이 여러 번 나오면 한 번만 세야 하는지 고민해 set을 생각했다. 소수 판별에서는 홀수와 소수를 섞어 생각했고, 약수 하나를 검사할 때마다 answer를 늘리기도 했다.",
    "attempt": "a < b < c가 되도록 중첩 반복문을 만들었다. 각 합은 소수라고 가정한 뒤 약수를 찾으면 false로 바꾸고, 끝까지 약수가 없을 때만 answer를 한 번 늘리는 형태로 바꿨다.",
    "turning": "문제가 세 수의 합 종류가 아니라 세 수를 고르는 방법의 수를 요구하므로 같은 합도 다른 조합이면 따로 센다. 소수 판별도 '어떤 수로 안 나누어진다'가 아니라 '약수가 하나라도 나오면 실패'로 뒤집어 보았다.",
    "learned": [
      "a < b < c로 순회하면 같은 세 원소를 순서만 바꿔 다시 세지 않는다.",
      "같은 합이 나와도 선택한 인덱스 조합이 다르면 각각 센다.",
      "answer는 약수 검사 횟수가 아니라 소수인 조합의 수라서 판별이 끝난 뒤 증가해야 한다.",
      "대화 중에는 bool b로 반복문 변수 이름을 가리고 2의 배수를 검사하지 않는 코드가 있었다. 통과 제출에서는 bool s로 구분하고 2부터 약수를 검사했다."
    ],
    "code_title": "통과한 제출 코드",
    "solution_code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\nint solution(vector<int> nums) {\n    int answer = 0;\n    for(int a = 0; a < nums.size(); a++ )\n    {\n        for(int b = a + 1; b < nums.size(); b++)\n        {\n            for(int c = b + 1; c < nums.size(); c++)\n            {\n                int num = nums[a] + nums[b] + nums[c];\n                bool s = true;\n                for(int i = 2; i < num; i++ )\n                {\n                    if(num % i == 0)\n                    {\n                        s = false;\n                        break;\n                    }\n                }\n                if(s)\n                {\n                    answer++;\n                }\n            }\n        }\n    }\n    \n\n    return answer;\n}",
    "verification": "프로그래머스 정답 · 100 / 100 · 제출 2026-09-21 09:59:16 · 로그인된 제출 내역에서 코드 확인"
  }
];
