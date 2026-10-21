window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/swea-11315.js"] = [
  {
    "id": "swea-11315",
    "title": "오목 판정 · 네 방향으로 연속된 돌 확인하기",
    "group": "implementation",
    "tags": [
      "오목",
      "vector",
      "문자열",
      "배열 범위",
      "완전 탐색",
      "SWEA"
    ],
    "url": "https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AXaSUPYqPYMDFASQ",
    "date": "2026-10-19",
    "problem": "N×N 오목판에서 돌이 다섯 개 이상 연속하는지 확인한다.",
    "summary": "문자열로 오목판을 받고, 돌이 있는 칸에서 네 방향을 확인했다. 범위를 벗어나지 않도록 마지막으로 접근할 칸을 먼저 검사했다.",
    "question": "처음에는 2차원 배열을 쓰려고 했는데, 입력이 문자열 형태라 vector<string>으로 받았다.",
    "attempt": "모든 칸을 돌면서 현재 칸이 o일 때 오른쪽, 아래쪽, 오른쪽 아래, 왼쪽 아래로 다섯 칸씩 확인했다. 배열 범위를 벗어나 접근하면서 Segmentation fault가 났다.",
    "turning": "각 방향에서 마지막 칸까지 범위 안에 있는지 먼저 검사하도록 바꿨다. 돌이 아닌 칸은 continue로 건너뛰고, 방향을 확인하다 돌이 끊기면 break로 해당 반복문을 끝냈다. 반복문 뒤에서 l == 5이면 다섯 칸을 모두 확인한 것으로 판단했다. YES와 NO는 탐색을 마친 뒤 테스트 케이스마다 한 번만 출력했다.",
    "learned": [
      "문자열로 들어오는 판은 vector<string>으로 받을 수 있다.",
      "접근하기 전에 각 방향의 마지막 좌표가 범위 안인지 확인했다.",
      "continue는 다음 반복으로 넘어가고, break는 해당 반복문을 끝낸다.",
      "반복문이 끝난 뒤 l == 5인지 확인해 다섯 칸이 모두 이어졌는지 판단했다."
    ],
    "solution_code": "#include <iostream>\n#include <vector>\n#include <string>\n \nusing namespace std;\n \nint main(int argc, char** argv)\n{\n    int test_case;\n    int T;\n    cin >> T;\n    for (test_case = 1; test_case <= T; ++test_case)\n    {\n        int n;\n        cin >> n;\n        vector<string> A(n);\n        for (int i = 0; i < n; i++)\n        {\n            cin >> A[i];\n        }\n        bool f = false;\n        for (int i = 0; i < n; i++)\n        {\n            for (int j = 0; j < n; j++)\n            {\n                if (A[i][j] != 'o')\n                {\n                    continue;\n                }\n                 \n                int l;\n                 \n                if (j + 4 < n)\n                {\n                    for(l = 0; l < 5; l++)\n                    {\n                        if(A[i][j+l] != 'o')\n                        {\n                            break;\n                        }\n                    }\n                    if(l == 5)\n                    {\n                        f = true;\n                    } \n                }\n                // \n                if (i + 4 < n)\n                {\n                    for(l = 0; l < 5; l++)\n                    {\n                        if(A[i+l][j] != 'o')\n                        {\n                            break;\n                        }\n                    }\n                    if(l == 5)\n                    {\n                        f = true;\n                    } \n                }\n                //\n                if (i + 4 < n && j + 4 < n)\n                {\n                    for(l = 0; l < 5; l++)\n                    {\n                        if(A[i+l][j+l] != 'o')\n                        {\n                            break;\n                        }\n                    }\n                    if(l == 5)\n                    {\n                        f = true;\n                    } \n                }\n                //\n                if (i + 4 < n && j - 4 >= 0)\n                {\n                    for(l = 0; l < 5; l++)\n                    {\n                        if(A[i+l][j-l] != 'o')\n                        {\n                            break;\n                        }\n                    }\n                    if(l == 5)\n                    {\n                        f = true;\n                    } \n                }\n            }\n        }\n        if(f)\n        {\n            cout << \"#\" << test_case << \" YES\\n\";\n        }\n        else\n        {\n            cout << \"#\" << test_case << \" NO\\n\";\n        }\n    }\n    return 0;\n}",
    "verification": "사용자 제공 채점 결과: SWEA Pass · 제출 2026-10-19 09:40 · C++ · 실행 시간 9 ms · 메모리 5,832 KB · 코드 길이 2,523 B. 목록의 풀이 기록 날짜는 제출일을 기준으로 두었다. 별도 학습일과 제출 시각의 시간대는 확인하지 않았다. 제출 링크는 제공되지 않아 문제 원문만 연결했다.",
    "status": "통과 확인",
    "code_title": "최종 제출 코드 · C++ (원본)"
  }
];
