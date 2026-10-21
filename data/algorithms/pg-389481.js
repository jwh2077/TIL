window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-389481.js"] = [
  {
    "id": "pg-389481",
    "title": "봉인된 주문 · 주문을 숫자로 바꿔 순서 조정하기",
    "group": "math",
    "tags": [
      "진법 변환",
      "문자열",
      "정렬",
      "long long",
      "프로그래머스"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/389481",
    "status": "통과 확인",
    "date": "2026-10-20",
    "problem": "알파벳 소문자 주문이 길이 우선, 같은 길이에서는 사전순으로 나열되어 있다. bans의 주문을 삭제한 뒤 n번째 주문을 구한다.",
    "summary": "주문을 26진법과 비슷한 숫자로 바꿔 정렬했다. 삭제된 주문만큼 목표 순서를 조정한 뒤 다시 문자열로 변환했다.",
    "question": "n이 최대 10^15라 모든 주문을 만들면 시간 초과가 날 것이라고 생각했다. 알파벳 주문을 26진법 숫자처럼 다루면 어떨까 생각했다.",
    "attempt": "처음에는 n만 문자열로 바꾸고 bans는 문자열 상태로 비교하려고 했다. 하지만 길이 우선, 사전순으로 정렬해야 해서 문자열에 기본 sort()만 쓰면 문제에서 원하는 순서가 되지 않았다.\n\nbans의 각 주문을 a=1, z=26으로 두고 num = num * 26 + (c - 'a' + 1)로 long long 숫자로 바꿨다. 숫자로 바꾸면 기본 sort()로 정렬할 수 있었다.",
    "turning": "정렬된 삭제 주문을 앞에서부터 보면서 현재 n 이하이면 n을 하나 늘렸다. 처음의 n에 고정해서 비교하는 것이 아니라, 삭제 주문을 반영하면서 변경되는 n과 계속 비교해야 했다.\n\n마지막 숫자를 주문으로 되돌릴 때는 a=1, z=26이라 나머지를 구하기 전에 n--를 했다. n % 26으로 문자를 붙이고 n을 26으로 나눴다. 문자가 뒤에서부터 만들어져 마지막에 reverse()로 뒤집었다. 문자열을 숫자로 바꾸는 내부 변수도 n에서 num으로 바꿔 함수 매개변수와 구분했다.",
    "learned": [
      "문자열을 숫자로 바꾸면 길이 우선·사전순인 주문의 순서를 숫자 정렬로 다룰 수 있었다.",
      "삭제 주문을 반영할 때는 계속 바뀌는 목표 순서 n을 기준으로 비교했다.",
      "a가 1부터 시작하므로 문자열로 되돌릴 때는 n을 하나 줄인 뒤 나머지를 계산했다.",
      "나머지로 얻은 문자는 뒤에서부터 쌓이므로 reverse()로 순서를 뒤집었다."
    ],
    "code_title": "최종 통과 코드 · C++ (원본)",
    "solution_code": "#include <string>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nstring solution(long long n, vector<string> bans) {\n    string N;\n    vector<long long> b;\n    for(string s : bans)\n    {\n        long long num = 0;\n        for(char c : s)\n        {\n           num = num * 26 + (c - 'a' + 1);\n        }\n        b.push_back(num);\n    }\n    \n    sort(b.begin(), b.end());\n    \n    for(long long B : b)\n    {\n        if(B <= n)\n        {\n            n++;\n        }\n        else\n        {\n            break;\n        }\n    }\n    \n    string answer = \"\";\n    while(n > 0)\n    {\n        n--;\n        char t = 'a' + (n % 26);\n        answer += t;\n        n /= 26;\n    }\n    reverse(answer.begin(), answer.end());\n    return answer;\n}",
    "verification": "사용자 제공 채점 결과: Programmers 정확성 100점 · 29 / 29 테스트 통과 · C++ · 최대 실행 시간 30.44 ms · 최대 메모리 36.3 MB. 풀이 날짜는 2026-10-20이다. 별도 제출 시각과 제출 링크는 제공되지 않았다."
  }
];
