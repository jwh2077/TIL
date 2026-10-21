window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-12981.js"] = [
  {
    "id": "pg-12981",
    "title": "영어 끝말잇기",
    "group": "string",
    "tags": [
      "프로그래머스",
      "문자열",
      "탐색",
      "중복 검사"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12981",
    "status": "통과 확인",
    "date": "2026-09-21",
    "problem": "끝말잇기에서 처음 탈락하는 사람의 번호와 차례를 구한다. 탈락자가 없으면 [0, 0]을 반환한다.",
    "summary": "이전 단어의 끝 글자와 현재 단어의 첫 글자를 비교하고, 앞에서 같은 단어가 나왔는지 find로 검사했다.",
    "attempt": "라운드 r과 사람 h로 반복하면서 r * n + h로 단어 위치를 구했다. 글자가 이어지지 않거나 중복 단어이면 h + 1과 r + 1을 반환했다.",
    "turning": "모든 검사를 지나면 [0, 0]을 반환한다. 단어 길이가 1 이하인지 확인하는 조건도 들어 있다.",
    "learned": [
      "find의 검색 끝을 현재 위치로 잡아 앞에 나온 단어만 비교한다.",
      "제출 후 코드 메모: words.size() / n은 정수 나눗셈이라 마지막 라운드가 n명보다 짧으면 남은 단어를 검사하지 않는다. 사이트의 100점 결과와 별개로 남아 있는 주의점이다."
    ],
    "code_title": "통과 제출 원본 · C++",
    "solution_code": "#include <string>\r\n#include <vector>\r\n#include <algorithm>\r\n\r\nusing namespace std;\r\n\r\nvector<int> solution(int n, vector<string> words) {\r\n    vector<int> answer;\r\n    \r\n    for(int r = 0; r < words.size() / n; r++)\r\n    {\r\n        for(int h = 0; h < n; h++)\r\n        {\r\n            int index = r * n + h;\r\n            if(index > 0 && words[index - 1].back() != words[index].front())\r\n            {\r\n                answer.push_back(h + 1);\r\n                answer.push_back(r + 1);\r\n                return answer; \r\n            }\r\n            if(find(words.begin(), words.begin() + index, words[index]) != words.begin() + index)\r\n            {\r\n                answer.push_back(h + 1);\r\n                answer.push_back(r + 1);\r\n                return answer; \r\n            }\r\n                \r\n            if(words[index].size() <= 1)\r\n            {\r\n                answer.push_back(h + 1);\r\n                answer.push_back(r + 1);\r\n                return answer; \r\n            }\r\n            \r\n        }\r\n    }\r\n    answer.push_back(0);\r\n    answer.push_back(0);\r\n    return answer;\r\n}",
    "verification": "2026-10-21 로그인된 본인 제출 내역에서 확인: 프로그래머스 정답 100 / 100 · C++ · 제출 2026-09-21 08:56:11 (사이트 표시 시각). 목록 날짜는 보존한 코드의 제출일 기준이며, 정확한 학습일은 별도로 남아 있지 않다. 제출 내역의 코드 원문을 보존했다. 코드 설명 외에 당시 시행착오나 학습 소감은 덧붙이지 않았다. 개별 제출 주소·실행 시간·메모리·테스트 수는 별도로 기록하지 않았다."
  }
];
