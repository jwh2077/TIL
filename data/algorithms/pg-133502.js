window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-133502.js"] = [
  {
    "id": "pg-133502",
    "title": "햄버거 만들기",
    "group": "simulation",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/133502",
    "status": "통과 확인",
    "date": "2026-07-24",
    "verification": "프로그래머스 정답 · 100 / 100",
    "problem": "재료 배열에서 1-2-3-1 순서가 생길 때마다 제거해 만들 수 있는 햄버거 수를 센다.",
    "summary": "패턴을 찾으면 네 재료를 지우고 인덱스를 뒤로 돌려 제거로 새로 맞닿은 구간을 다시 확인했다.",
    "question": "",
    "attempt": "현재 위치부터 네 값이 1,2,3,1인지 검사하고 erase로 제거했다. 이후 i를 네 칸 뒤로 보내 주변을 다시 검사했다.",
    "turning": "제출은 통과했지만 i+3을 읽기 전에 남은 길이를 검사하는 조건이 없다. 배열 끝에서도 네 값을 읽으려 할 수 있는 부분은 남아 있다.",
    "learned": [
      "지운 자리의 앞뒤가 붙으면 새 햄버거가 생길 수 있다.",
      "i+3이 배열 안에 있는지 먼저 검사해야 한다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "#include <vector>\nusing namespace std;\nint solution(vector<int> ingredient) {\n    int answer = 0;\n    for (int i = 0; ingredient.size() > i; i++) {\n        if (ingredient[i] == 1 && ingredient[i + 3] == 1 &&\n            ingredient[i + 1] == 2 && ingredient[i + 2] == 3) {\n            ingredient.erase(ingredient.begin() + i, ingredient.begin() + i + 4);\n            i -= 4;\n            if (i < 0) i = -1;\n            answer++;\n        }\n    }\n    return answer;\n}"
  }
];
