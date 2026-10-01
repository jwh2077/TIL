window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-1603-design-parking-system.js"] = [
  {
    "id": "lc-1603",
    "title": "주차 시스템 설계",
    "group": "simulation",
    "url": "https://leetcode.com/problems/design-parking-system/",
    "status": "통과 확인",
    "problem": "차량 종류별 남은 공간과 주차 가능 여부를 관리한다.",
    "date": "2026-09-04",
    "summary": "차량 종류를 배열 인덱스로 바꿔서 종류별로 남은 주차 공간을 저장했다.",
    "question": "생성자에서 받은 big, medium, small을 addCar가 계속 사용할 수 있게 어디에 저장해야 하는지 확인했다.",
    "attempt": "클래스 멤버 A[3]을 만들고 carType-1로 접근했다. 함수 안 지역 변수는 종료되면 사라지지만 멤버 변수는 객체가 살아 있는 동안 유지된다는 점을 연결했다.",
    "turning": "int A[3]에 생성자 안에서 A={...}로 다시 대입할 수는 없다. 제출 코드에서는 A[0], A[1], A[2]에 각각 값을 넣었다. addCar는 자리가 남아 있으면 하나 줄이고 true, 없으면 false를 반환한다.",
    "learned": [
      "객체가 계속 기억할 값은 멤버 변수에 둔다.",
      "carType 1~3에서 1을 빼 배열의 0~2에 접근한다.",
      "아래 코드는 vector가 아니라 int 배열을 쓴다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "class ParkingSystem {\npublic:\n    int A[3];\n    ParkingSystem(int big, int medium, int small) \n    {\n        A[0] = big; A[1] = medium; A[2] = small;\n    }\n    bool addCar(int carType) \n    {\n        if(A[carType - 1] >= 1)\n        {\n            A[carType - 1]--;\n            return true;\n        }\n        return false;\n    }\n};",
    "verification": "LeetCode Accepted · 102 / 102 · 9/29 본인 제출 목록의 마지막 결과: 2026-09-04 Accepted (사이트 표시일, 학습일과 구분)",
    "submission_url": "https://leetcode.com/submissions/detail/2130652933/"
  }
];
