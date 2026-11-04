window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-131701.js"] = [
  {
    "id": "pg-131701",
    "title": "연속 부분 수열 합의 개수 · 원형 수열에서 중복 합 세기",
    "group": "array",
    "tags": [
      "프로그래머스",
      "배열",
      "완전 탐색",
      "set",
      "unordered_set"
    ],
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/131701",
    "status": "통과 확인",
    "date": "2026-11-03",
    "problem": "원형 수열에서 길이 1부터 수열 전체 길이까지 연속해서 골랐을 때 나오는 서로 다른 합의 개수를 구한다. 프로그래머스 Lv.2 문제다.",
    "summary": "각 위치에서 출발해 한 바퀴 동안 합을 누적했다. set으로 먼저 통과한 뒤 합의 정렬 순서는 쓰지 않는다는 점을 보고 unordered_set으로 바꿨다.",
    "question": "[7, 9, 1, 1, 4]를 일반 배열처럼 끝까지만 더하면 부분 수열은 15개인데 set에 남은 합은 14개였다. 길이 1인 두 구간의 합이 모두 1이라 한 번만 들어갔다. 여기서 세려는 건 구간을 만든 횟수가 아니라 서로 다른 합의 개수였다.",
    "attempt": "처음에는 합이 누적되지 않거나 시작 위치 i를 바꿔도 계속 elements[0]부터 더했다. 시작할 때마다 temp = elements[i]로 두고 그 값을 먼저 넣어 길이 1인 경우부터 셌다.\n\n배열 앞쪽을 더하는 반복문을 맨 뒤에 따로 붙여 봤다. 마지막 시작점의 temp만 이어지다 보니 예제에서 18 대신 17이 나왔다. 각 시작점에서 끝에 닿을 때마다 j를 0으로 돌리는 쪽으로 바꿨다.",
    "turning": "다음에 읽을 위치 j와 몇 개 더 읽었는지 세는 l을 분리했다. j는 i + 1에서 시작하고, l은 시작점과 관계없이 1부터 n - 1까지 돈다. 첫 원소를 이미 넣었으니 이렇게 하면 어느 위치에서든 길이 n까지 정확히 한 바퀴를 센다.\n\nset으로 먼저 통과했다. 정렬해서 꺼낼 일이 없고 insert()와 size()만 써서 unordered_set으로 바꿔 다시 제출했다. set 쪽에서 공유한 측정값은 207.48ms·23.6MB였고, unordered_set 제출에서는 최대 69.01ms·22.4MB였다. 같은 조건에서 따로 잰 비교는 아니다.",
    "learned": [
      "set과 unordered_set 모두 top()은 없다. 이 문제에서는 합을 넣고 서로 다른 값이 몇 개 남았는지만 보면 됐다.",
      "길이 n인 수열에서 삽입을 n²번 시도한다. set은 전체 O(n² log n), unordered_set은 삽입이 평균 O(1)이라 전체 평균 O(n²)이다.",
      "서로 다른 합만 저장하므로 추가 공간은 서로 다른 합의 개수에 비례하고, 최악 O(n²)이다."
    ],
    "code_title": "최종 통과 코드 · C++ · unordered_set",
    "solution_code": "#include <vector>\n#include <unordered_set>\n\nusing namespace std;\n\nint solution(vector<int> elements) {\n    unordered_set<int> S;\n    int temp = 0;\n    for(int i = 0; i < elements.size(); i++)\n    {\n        temp = elements[i];\n        S.insert(temp);\n        int j = i + 1;\n        for(int l = 1; l < elements.size(); l++)\n        {\n            if(j >  elements.size() - 1)\n            {\n                j = 0;\n            }\n            S.insert(temp += elements[j]);\n            j++;\n        }\n    }\n\n    return S.size();\n}",
    "code_result": "정확성 100/100 · 20/20 통과 · 실행 시간 0.01~69.01ms · 메모리 4.67~22.4MB",
    "verification": "2026-11-03은 학습일이자 채점 결과를 공유한 날이다. 제출일과 제출 링크는 미확인. set 풀이도 통과했으며, 남아 있는 제출 원본은 unordered_set 버전이다."
  }
];
