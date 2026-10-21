window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12950.js"] = [
  {
    "id": "pg-12950",
    "title": "행렬의 덧셈",
    "group": "array",
    "tags": [
      "프로그래머스",
      "2차원 배열",
      "중첩 반복문"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12950",
    "status": "통과 확인",
    "date": "2026-08-21",
    "problem": "두 행렬의 같은 위치 원소를 더한 행렬을 반환한다.",
    "summary": "입력과 같은 크기의 2차원 vector를 만들어 같은 좌표끼리 더했다.",
    "attempt": "바깥 반복문으로 행, 안쪽 반복문으로 열을 순회했다.",
    "turning": "A[a][b]에 arr1[a][b] + arr2[a][b]를 저장했다.",
    "learned": [
      "행 수와 열 수를 각각 arr1.size(), arr1[0].size()로 구한다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nvector<vector<int>> solution(vector<vector<int>> arr1, vector<vector<int>> arr2) {\r\n    vector<vector<int>> A(arr1.size(), vector<int>(arr1[0].size()));\r\n    for(int a = 0; a < arr1.size(); a++)\r\n    {\r\n        for(int b = 0; b < arr1[0].size(); b++)\r\n        {\r\n            A[a][b] = arr1[a][b] + arr2[a][b];\r\n        }\r\n    }\r\n    return A;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-08-21 09:50:08 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
