window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-42586.js"] = [
  {
    "id": "pg-42586",
    "title": "기능개발",
    "group": "queue",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/42586",
    "status": "통과 확인",
    "problem": "작업 순서대로 완료된 기능을 묶어 배포한다.",
    "date": "2026-09-10",
    "summary": "작업 진행과 배포 묶음을 같은 반복문에서 처리하면서 생기는 0개 배포 문제를 확인했다.",
    "question": "앞 작업이 끝나야 뒤 작업도 배포할 수 있으므로, 현재 num부터 연속으로 100 이상인 작업 수를 세려 했다.",
    "attempt": "완료된 수 count를 세어 결과에 넣고 num을 옮긴 뒤, 현재 작업이 끝날 때까지 남은 작업의 진행도를 하루씩 증가시켰다.",
    "turning": "배포한 개수가 0일 때는 결과에 넣지 않도록 했다. 제출 코드는 통과했지만 while 조건에서 배열을 먼저 읽고 범위를 검사하는 부분이 남아 있다. num + count < size와 num < size를 배열 접근보다 먼저 검사해야 한다.",
    "learned": [
      "뒤 작업이 끝나도 앞 작업이 끝나야 같이 배포된다.",
      "&&는 앞 조건부터 보므로 배열 범위 검사를 먼저 둬야 한다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "#include <string>\n#include <vector>\nusing namespace std;\nvector<int> solution(vector<int> progresses, vector<int> speeds) \n{\n    vector<int> A;\n    int num = 0, size = progresses.size(), count = 0;\n    while(num <= size - 1)\n    {\n        if(progresses[num] >= 100)\n        {\n            count = 0;\n            while(progresses[num + count] >= 100 && num + count < size) count++;\n            A.push_back(count);\n            num += count;\n        }\n        while(progresses[num] < 100 && num < size)\n        {\n            for(int i = num; i < size; i++) progresses[i] += speeds[i];\n        }\n    }\n    return A;\n}",
    "verification": "프로그래머스 정답 · 100 / 100"
  }
];
