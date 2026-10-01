window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/swea-2005.js"] = [
  {
    "id": "swea-2005",
    "title": "파스칼의 삼각형",
    "group": "implementation",
    "url": "https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5P0-h6Ak4DFAUq",
    "status": "통과 확인",
    "date": "2026-09-28",
    "problem": "첫 줄부터 N번째 줄까지 파스칼의 삼각형을 출력한다.",
    "summary": "첫 행을 {1}로 만든 뒤, 이전 행의 인접한 두 값을 더해 가운데를 채우고 양끝에 1을 놓았다.",
    "question": "2차원 vector에서 A.push_back(vector<int>{1})과 A[i].push_back(1)의 차이가 헷갈렸다. 값이 있는지 if로 확인하려다 존재하지 않는 인덱스에 먼저 접근해 Segmentation fault도 발생했다.",
    "attempt": "처음에는 반복마다 새 행을 두 번 추가해 i와 실제 행 위치가 어긋났다. A[i-1][j+1]을 검사하는 코드도 이전 행의 범위를 벗어났다. 첫 행은 반복문 밖에서 만들고, 새 행은 {1}로 한 번만 추가한 뒤 현재 행에는 계산값과 마지막 1을 넣는 형태로 바꿨다.",
    "turning": "가운데 값은 j가 1부터 i-1까지일 때만 만들면 A[i-1][j-1]과 A[i-1][j]가 모두 존재한다. 그래서 인덱스의 값으로 존재 여부를 검사하지 않고 반복 범위로 유효한 위치만 접근했다.",
    "learned": [
      "A.push_back(vector<int>{1})은 2차원 vector에 새 행을 만든다.",
      "A[i].push_back(value)는 이미 존재하는 i번째 행에 값을 추가한다.",
      "if(A[index])는 인덱스 존재 여부 검사가 아니라 접근한 값이 0인지 확인하는 코드다.",
      "각 행의 가운데는 이전 행의 [j-1]과 [j]를 더해서 만들 수 있다."
    ],
    "code_title": "통과한 제출 코드",
    "solution_code": "#include<iostream>\n#include<vector>\n\nusing namespace std;\n\nint main(int argc, char** argv)\n{\n    int test_case;\n    int T;\n    cin>>T;\n    int N;\n    for(test_case = 1; test_case <= T; ++test_case)\n    {\n        cout << \"#\" << test_case << endl;\n        cin >> N;\n        vector<vector<int>>A;\n        A.push_back(vector<int>{ 1 });\n        for(int i = 1; i < N; i++)\n        {\n            A.push_back(vector<int>{ 1 });\n            for(int j = 1; j < i; j++)\n            {\n                int num = 0;\n                num += A[i - 1][ j - 1] ;\n                num += A[i - 1][ j ];\n                A[i].push_back(num);\n            }\n            A[i].push_back( 1 );\n        }\n        for(int i = 0; i < A.size(); i++)\n        {\n            for(int j = 0; j < A[i].size(); j++)\n            {\n                cout << A[i][j] << \" \" ;\n            }\n            cout << endl;\n        }\n    }\n    return 0;//정상종료시 반드시 0을 리턴해야합니다.\n}",
    "verification": "SWEA Pass · 제출 2026-09-28 09:25 · 7 ms / 5,844 KB · My제출에서 코드와 결과 확인",
    "submission_url": "https://swexpertacademy.com/main/code/problem/problemSubmitHistory.do?contestProbId=AV5P0-h6Ak4DFAUq"
  }
];
