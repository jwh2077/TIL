window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/swea-1859.js"] = [
  {
    "id": "swea-1859",
    "title": "백만 장자 프로젝트",
    "group": "greedy",
    "url": "https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5LrsUaDxcDFAXc",
    "status": "통과 확인",
    "problem": "하루 구매 제한 아래 여러 날 거래의 최대 이익을 구한다.",
    "date": "2026-09-02",
    "summary": "뒤에서부터 가격을 보며 Maxprice를 바꿨다. 합을 int로 저장한 제출은 실패했고, long long으로 바꾼 뒤 통과했다.",
    "question": "9월 1일에 문제를 보고 앞에서부터 가격을 비교했다. 뒤에 더 비싼 날이 있는지 찾다가, 거꾸로 보면 어떨지 설명을 들었다. maxPrice도 계속 바꿔야 하는지 물었다.",
    "attempt": "9월 2일 새벽에는 마지막 날부터 앞으로 돌면서 가격을 비교하는 코드를 적었다. 더 비싼 가격을 만나면 Maxprice를 바꾸고, 더 싸면 그 차이를 합에 더했다. 작성 중에는 total과 totoal을 섞어 쓴 오타도 있었다.",
    "turning": "9월 2일 04:55 제출은 Fail이었다. 합을 담는 totoal의 자료형을 int에서 long long으로 바꿨고, 04:56 제출은 Pass였다. 두 제출에서 달라진 코드는 이 자료형뿐이었다. 가격을 여러 날 더하면 합이 int 범위를 넘을 수 있었다.",
    "learned": [
      "Maxprice는 뒤에서부터 본 가격 중 가장 큰 값으로 두면 된다.",
      "하루 가격은 int에 들어가도 여러 날의 이익을 더한 합은 long long이 필요했다.",
      "통과한 제출에 있던 변수 이름 totoal과 쓰지 않은 my, index, n도 그대로 남겼다.",
      "원문 문제의 제출이력에서 My제출을 선택하면 9월 2일의 두 제출을 볼 수 있다. 로그인이 필요하다."
    ],
    "code_title": "통과한 제출 코드",
    "solution_code": "#include<iostream>\n#include <vector>\n\nusing namespace std;\n\nint main(int argc, char** argv)\n{\n    int test_case;\n    int T;\n    cin >> T;\n    for (test_case = 1; test_case <= T; ++test_case)\n    {\n        int c;\n        long long totoal = 0;\n        int Maxprice = 0;\n\n        cin >> c;\n\n        vector<int> market(c);\n        vector<int> my(c);\n\n        for (int i = 0; i < c; i++)\n        {\n            cin >> market[i];\n        }\n\n        int index = 0;\n        int n = 0;\n\n        for (int i = c - 1; i >= 0; i--)\n        {\n            if (Maxprice < market[i])\n            {\n                Maxprice = market[i];\n            }\n            else\n            {\n                totoal += Maxprice - market[i];\n            }\n        }\n        cout << \"#\" << test_case << \" \" << totoal << endl;\n    }\n    return 0;//정상종료시 반드시 0을 리턴해야합니다.\n}",
    "verification": "SWEA Pass · 제출 2026-09-02 04:56 · 834 ms / 13,728 KB"
  }
];
