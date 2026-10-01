window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-181932.js"] = [
  {
    "id": "pg-181932",
    "title": "코드 처리하기",
    "group": "string",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/181932",
    "status": "통과 확인",
    "problem": "문자 1에서 mode를 바꾸고 해당 인덱스의 문자를 모은다.",
    "date": "2026-09-04",
    "summary": "문자 1을 만날 때 mode를 전환하고 인덱스의 홀짝에 따라 문자를 선택했다.",
    "question": "문자열을 한 번 순회하면서 mode 0에서는 짝수 인덱스, mode 1에서는 홀수 인덱스의 문자를 모아야 했다.",
    "attempt": "bool mode를 false로 시작하고 code[i]가 문자 1이 아닐 때 현재 mode와 i%2를 비교했다. 문자 1이면 mode=!mode로 전환했다.",
    "turning": "숫자 1이 아니라 문자 비교인 code[i] != '1'을 사용했다. 마지막에 answer가 비어 있으면 EMPTY를 반환하는 조건을 추가하면서 요구사항을 완성했다.",
    "learned": [
      "bool 값은 ! 연산으로 간단히 전환할 수 있다.",
      "문자 리터럴은 작은따옴표를 사용한다.",
      "주 반복이 끝난 뒤 빈 결과 같은 출력 예외를 처리한다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "#include <string>\nusing namespace std;\nstring solution(string code)\n{\n    bool mode = false;\n    string answer = \"\";\n    for(int i = 0; i < code.size(); i++)\n    {\n        if(code[i] != '1')\n        {\n            if(mode == false && i % 2 == 0) answer += code[i];\n            else if(mode == true && i % 2 != 0) answer += code[i];\n        }\n        else mode = !mode;\n    }\n    if(answer.size() == 0) answer = \"EMPTY\";\n    return answer;\n}",
    "verification": "프로그래머스 정답 · 100 / 100"
  }
];
