window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-1232-check-if-it-is-a-straight-line.js"] = [
  {
    "id": "lc-1232",
    "title": "좌표가 한 직선 위에 있는지 확인",
    "group": "array",
    "url": "https://leetcode.com/problems/check-if-it-is-a-straight-line/description/",
    "status": "통과 확인",
    "date": "2026-09-29",
    "problem": "여러 좌표가 모두 하나의 직선 위에 있는지 확인한다.",
    "summary": "x차이 / y차이를 비교하고, 수직선과 수평선은 좌표 차이가 0인지 따로 검사했다.",
    "question": "coordinates가 2차원 vector라서 구조부터 확인했다. coordinates[i][0]은 i번째 점의 x, coordinates[i][1]은 y였다.",
    "attempt": "첫 두 점의 x차이 / y차이를 r에 넣고, 이후에는 이전 점과 현재 점의 값이 같은지 비교했다. 처음에는 float에 저장하면 실수 나눗셈이 될 줄 알았지만 정수끼리 먼저 계산됐다. 그래서 나누기 전에 분자를 float로 바꿨다.\n\n수직선과 수평선일 때 r = 1을 넣어보기도 했다. 하지만 나머지 점들도 같은 선 위에 있는지는 별도로 검사해야 했다. 좌표 차이를 1과 비교하던 부분도 같은 좌표의 차이는 0이므로 고쳤다.",
    "turning": "첫 두 점의 x 차이가 0이면 나머지 x좌표를, y 차이가 0이면 나머지 y좌표를 확인했다. 그 외에는 r을 비교했다. 이렇게 나눠서 제출하니 83개 테스트를 통과했고 Runtime은 0 ms가 나왔다.",
    "learned": [
      "바깥 인덱스는 점 번호이고, 안쪽 인덱스는 x와 y를 고른다.",
      "float r = 1 / 2는 정수 나눗셈이 먼저 된다. 실수 계산을 하려면 나누기 전에 형변환한다.",
      "수직선은 x좌표가 같고, 수평선은 y좌표가 같다."
    ],
    "code_title": "완료 코드 · C++",
    "solution_code": "class Solution {\npublic:\n    bool checkStraightLine(vector<vector<int>>& coordinates) \n    {\n        float r = (float)(coordinates[0][0] - coordinates[1][0]) / (coordinates[0][1] - coordinates[1][1]);\n\n        if (0 == coordinates[0][0] - coordinates[1][0])\n        {\n            for (int i = 2; i < coordinates.size(); i++)\n            {\n                if (0 != coordinates[i-1][0] - coordinates[i][0])\n                {\n                    return false;\n                }\n            }\n        }\n        else if (0 == coordinates[0][1] - coordinates[1][1])\n        {\n            for (int i = 2; i < coordinates.size(); i++)\n            {\n                if (0 != coordinates[i-1][1] - coordinates[i][1])\n                {\n                    return false;\n                }\n            }\n        }\n        else\n        {\n            for (int i = 2; i < coordinates.size(); i++)\n            {\n                if (r != (float)(coordinates[i-1][0] - coordinates[i][0]) / (coordinates[i-1][1] - coordinates[i][1]))\n                {\n                    return false;\n                }\n            }\n        }\n\n        return true;\n    }\n};",
    "verification": "사용자 제공 결과: LeetCode Accepted · 83 / 83 · Runtime 0 ms · 학습일 2026-09-29 · 제출 상세 링크와 제출 시각은 미확인 · 제공된 코드 유지: r 계산이 수평선 분기보다 앞에 있고 float를 직접 비교함"
  }
];
