window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12953.js"] = [
  {
    "id": "pg-12953",
    "title": "N개의 최소공배수",
    "group": "math",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12953",
    "status": "통과 확인",
    "problem": "모든 수의 공통 배수 중 가장 작은 값을 구한다.",
    "date": "2026-09-02",
    "summary": "각 수의 배수를 하나씩 늘려 최소공배수를 찾으려고 했다. 이 방식은 반복이 많아졌다.",
    "question": "각 원소를 자기 자신의 배수로 늘리면 결국 같은 값에서 만난다는 생각으로 현재 최댓값까지 작은 값을 증가시키려 했다.",
    "attempt": "원본 값을 temp에 보존하고 arr의 각 값을 top 이상이 될 때까지 temp[i]만큼 더했다. 모든 값이 같은지 확인하는 함수를 따로 만들었다.",
    "turning": "작은 값에 원래 값을 반복해서 더하고, 모든 값이 같아졌을 때 답으로 반환했다. 이 방식으로 통과했다.",
    "learned": [
      "배수로 늘릴 때 더할 원래 값은 temp에 따로 남겨둔다.",
      "모든 값이 같아졌는지 검사하는 함수와 배수를 늘리는 반복을 나눴다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "#include <string>\n#include <vector>\nusing namespace std;\nbool 이름뭐하지(vector<int> arr)\n{\n    for(int i = 0 ; i < arr.size(); i++)\n        if(arr[0] != arr[i]) return false;\n    return true;\n}\nint solution(vector<int> arr) \n{\n    int top = 0;\n    vector<int>temp(arr);\n    while(true)\n    {\n        for(int i = 0; i < arr.size(); i++)\n        {\n            while(arr[i] < top) arr[i] += temp[i];\n            if(top < arr[i]) top = arr[i];\n        }\n        if(이름뭐하지(arr)) return arr[0];\n    }\n}",
    "verification": "프로그래머스 정답 · 100 / 100"
  }
];
