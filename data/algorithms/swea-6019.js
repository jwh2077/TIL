window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/swea-6019.js"] = [
  {
    "id": "swea-6019",
    "title": "기차 사이의 파리",
    "group": "math",
    "url": "https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AWajaTmaZw4DFAWM",
    "status": "통과 확인",
    "date": "2026-09-23",
    "problem": "서로 다가오는 두 기차가 충돌할 때까지 일정한 속력으로 왕복하는 파리의 이동 거리를 구한다.",
    "summary": "파리의 왕복을 하나씩 계산하지 않고 두 기차가 충돌할 때까지의 시간에 파리 속력을 곱했다. 출력 정밀도를 지정한 여섯 번째 제출에서 통과했다.",
    "question": "샘플에서는 200이 나왔지만 08:29부터 08:42까지 다섯 번의 제출이 오답이었다. B 변수에 기차 B의 속력을 넣은 뒤 다시 파리 속력을 덮어써도 되는지와 실수 출력 방식을 확인했다.",
    "attempt": "D/(A+B)*F 공식을 사용했다. 처음에는 float를 썼고 출력 형식을 빠뜨렸다. setprecision을 쓰면서 <iomanip>을 넣지 않아 컴파일 오류도 겪었다. D를 double로 바꾸고 테스트 케이스별 줄바꿈과 # 번호를 출력했지만 08:42 제출까지는 Fail이었다.",
    "turning": "두 기차 사이 거리는 매시간 A+B만큼 줄어들어 충돌 시간은 D/(A+B)가 된다. 계산식은 그대로 둔 채 <iomanip>을 추가하고 fixed와 setprecision(10)으로 출력한 08:44 제출이 Pass를 받았다.",
    "learned": [
      "반복되는 왕복을 직접 더하지 않고 전체 이동 시간을 먼저 구할 수 있다.",
      "정수와 실수가 섞인 나눗셈에서는 어느 피연산자가 실수인지 확인한다.",
      "setprecision을 쓰려면 <iomanip>이 필요하다.",
      "실수 답은 계산 자료형뿐 아니라 문제에서 요구하는 오차 범위에 맞춰 출력 정밀도도 확인해야 한다."
    ],
    "code_title": "통과한 제출 코드",
    "solution_code": "#include<iostream>\n#include <iomanip>\n\nusing namespace std;\n\nint main(int argc, char** argv)\n{\n    int test_case;\n    int T;\n    cin >> T;\n    for(test_case = 1; test_case <= T; ++test_case)\n    {\n        double D;\n        cin >> D;\n        int A;\n        cin >> A;\n        int B;\n        cin >> B;\n        A += B;\n        cin >> B;\n        D = D / A;\n        D *= B;\n        cout << \"#\" << test_case << \" \" << fixed << setprecision(10) << D << endl;\n    }\n    return 0;//정상종료시 반드시 0을 리턴해야합니다.\n}",
    "verification": "SWEA Pass · 제출 2026-09-23 08:44 · 512 ms / 5,832 KB",
    "submission_url": "https://swexpertacademy.com/main/code/problem/problemSubmitHistory.do?contestProbId=AWajaTmaZw4DFAWM"
  }
];
