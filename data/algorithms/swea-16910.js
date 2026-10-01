window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/swea-16910.js"] = [
  {
    "id": "swea-16910",
    "title": "원 안의 점",
    "group": "math",
    "url": "https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AYcllbDqUVgDFASR",
    "status": "통과 확인",
    "problem": "반지름 N의 원에 포함되는 정수 좌표를 센다.",
    "date": "2026-09-10",
    "summary": "정수 좌표를 하나씩 보면서 원 안에 있는지 계산했다. +N에서 빠진 두 점은 마지막에 더했고 이 코드로 통과했다.",
    "question": "x와 y를 -N부터 N까지 움직이면 정사각형을 세는 것처럼 보였다. 실제로 원 안의 점만 남기는 역할은 x*x+y*y<=N*N 조건이 한다.",
    "attempt": "이중 반복문으로 좌표 후보를 만들고 조건을 만족할 때 count를 증가시켰다. 반복 조건을 x<N, y<N으로 두어 +N 경계가 빠졌고 결과에 2를 더해 보정했다.",
    "turning": "+N인 세로선과 가로선에서 원 안에 드는 정수점은 각각 (N,0), (0,N)뿐이다. -N 쪽 두 점은 시작값에 포함되어 있으므로 빠진 점은 네 개가 아니라 두 개였다. 보정보다 반복 범위를 <=N으로 쓰는 편이 의도가 분명하다.",
    "learned": [
      "이중 반복문은 후보 영역을 만들고 if 조건이 실제 도형을 판정한다.",
      "제곱 거리 비교는 sqrt 없이 원 안 여부를 검사한다.",
      "통과한 제출은 x<N, y<N으로 순회한 뒤 빠진 (N,0), (0,N)을 c+2로 보정했다.",
      "My제출에서 08:28과 08:42의 두 제출이 모두 Pass였고, 마지막 제출 코드는 514B였다."
    ],
    "code_title": "마지막 통과 제출 코드",
    "solution_code": "#include<iostream>\n\nusing namespace std;\n\nint main(int argc, char** argv)\n{\n    int test_case;\n    int T;\n    cin>>T;\n    for(test_case = 1; test_case <= T; ++test_case)\n    {\n        int N;\n        int c = 0;\n        cin >> N;\n        for(int x = -N ; x < N; x++)\n        {\n            for(int y = -N; y < N; y++)\n            {\n                if( x * x + y * y <= N * N)\n                {\n                    c++;\n                }\n            }\n        }\n        c = c + 2; \n        cout << \"#\" << test_case << \" \" << c << endl;\n    }\n    return 0;\n}",
    "verification": "SWEA Pass · 제출 2026-09-10 08:42 · 38 ms / 5,832 KB",
    "submission_url": "https://swexpertacademy.com/main/code/problem/problemSubmitHistory.do?contestProbId=AYcllbDqUVgDFASR"
  }
];
