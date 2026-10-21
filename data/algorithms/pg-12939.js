window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12939.js"] = [
  {
    "id": "pg-12939",
    "title": "최댓값과 최솟값 · 공백으로 숫자 나누기",
    "group": "string",
    "tags": [
      "문자열",
      "stoi",
      "to_string",
      "최솟값",
      "최댓값",
      "프로그래머스"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12939",
    "status": "통과 확인",
    "date": "2026-10-20",
    "problem": "공백으로 구분된 정수 문자열에서 최솟값과 최댓값을 찾아, 최솟값과 최댓값 순서로 공백을 사이에 둔 문자열을 반환한다.",
    "summary": "공백이 나올 때까지 문자를 모으고 stoi()로 숫자로 바꿨다. 첫 숫자로 최솟값과 최댓값을 초기화한 뒤 나머지 숫자와 비교했다.",
    "question": "처음에는 문자열을 뒤에서부터 탐색하면서 음수 부호를 확인하려고 했다. 숫자가 공백으로 구분된다는 점을 이용해 문자를 하나씩 모으는 방식으로 바꿨다.",
    "attempt": "for문을 1부터 시작해서 첫 문자를 건너뛰는 문제가 있어 0부터 돌도록 수정했다. while 조건을 잘못 썼을 때는 stoi()에 빈 문자열이 넘어가 std::invalid_argument 오류가 났다.",
    "turning": "공백이 아니면 t2에 문자를 모으고, 공백을 만나면 stoi(t2)로 변환하도록 했다. 마지막 숫자도 같은 방식으로 처리하려고 s 끝에 공백 하나를 붙였다. min과 max의 초기값은 bool f로 첫 숫자인지 구분해 넣었고, 이후 숫자와 비교해 갱신했다. 숫자 하나를 처리하고 나면 t2.clear()로 비웠다.",
    "learned": [
      "공백을 기준으로 문자를 모아 음수 부호까지 포함한 숫자 문자열을 만들었다.",
      "stoi()에 빈 문자열이 넘어가지 않도록 반복문 조건과 문자열이 채워지는 시점을 확인했다.",
      "첫 숫자로 min과 max를 초기화하고, 마지막 숫자는 끝에 붙인 공백으로 처리했다.",
      "stoi(), to_string(), getline(), stringstream, istringstream, ostringstream의 사용법과 차이를 공부했다. 최종 제출에서는 stoi()와 to_string()을 사용했다."
    ],
    "code_title": "최종 통과 코드 · C++ (원본)",
    "solution_code": "#include <string>\n#include <vector>\n\nusing namespace std;\n\nstring solution(string s) {\n    int min;\n    int max;\n    int t;\n    string t2;\n    s += ' ';\n    bool f = true;\n    \n    for(int i = 0; i < s.size(); i++)\n    {\n        if(s[i] != ' ')\n        {\n            t2 += s[i];\n        }\n        else\n        {\n            t = stoi(t2);\n            \n            if(f)\n            {\n                min = t;\n                max = t;\n                f = false;\n            }\n\n            if(min > t)\n            {\n                min = t;\n            }\n            if(max < t)\n            {\n                max = t;\n            }\n            t2.clear();\n        }\n\n    }\n    string answer =  to_string(min) + \" \" + to_string(max);\n    return answer;\n}",
    "verification": "사용자 제공 채점 결과: Programmers 정확성 100점 · 12 / 12 테스트 통과 · C++ · 실행 시간 0.01 ms. 풀이 기록 날짜는 제공된 2026-10-20을 사용했다. 별도 제출 시각과 제출 링크는 남기지 않았다."
  }
];
