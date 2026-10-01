window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-68644.js"] = [
  {
    "id": "pg-68644",
    "title": "두 개 뽑아서 더하기",
    "group": "math",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/68644",
    "status": "통과 확인",
    "problem": "서로 다른 인덱스의 두 수 합을 중복 없이 오름차순으로 반환한다.",
    "date": "2026-09-08",
    "summary": "중복 합은 set으로 제거했지만 같은 원소를 두 번 선택하지 않도록 반복 시작점을 조정했다.",
    "question": "모든 두 수의 합을 만들고 정렬과 중복 제거를 한 번에 처리하기 위해 set을 선택했다.",
    "attempt": "처음에는 항상 numbers[0]을 더했고, 다음에는 numbers[i]+numbers[b]로 바꿨다. b를 0부터 시작하면 같은 쌍을 반대 순서로 다시 계산한다.",
    "turning": "b를 i+1부터 시작하면 i와 b가 서로 다른 인덱스가 되고 각 조합을 한 번만 방문한다. b=i로 시작하면 같은 인덱스의 수를 두 번 뽑는 셈이므로 문제 조건과 다르다.",
    "learned": [
      "값의 중복과 인덱스의 중복은 다른 문제다.",
      "두 원소 조합은 두 번째 반복을 i+1에서 시작한다.",
      "set은 삽입하면서 중복 제거와 정렬을 함께 수행한다."
    ],
    "code_title": "통과 제출을 바탕으로 정리한 코드",
    "solution_code": "#include <vector>\n#include <set>\nusing namespace std;\nvector<int> solution(vector<int> numbers) {\n    set<int> A;\n    for(int i = 0 ; i < numbers.size(); i++)\n        for(int b = i + 1; b < numbers.size(); b++) A.insert(numbers[i] + numbers[b]);\n    vector<int> answer(A.begin(), A.end());\n    return answer;\n}",
    "verification": "프로그래머스 정답 · 100 / 100"
  }
];
