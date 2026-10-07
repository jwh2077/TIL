window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/pg-160586.js"] = [
  {
    "id": "pg-160586",
    "title": "대충 만든 자판 · 문자별 최소 입력 횟수",
    "group": "string",
    "url": "https://school.programmers.co.kr/learn/courses/30/lessons/160586",
    "status": "풀이 진행 중",
    "date": "2026-10-06",
    "problem": "여러 키에 적힌 문자로 targets를 입력할 때 필요한 최소 누름 횟수를 구한다. 입력할 수 없는 문자열은 -1이다.",
    "summary": "keymap과 targets가 하나씩 대응한다고 생각했다가, 모든 키에서 문자별 최소 횟수를 먼저 구하는 방향으로 바꿨다.",
    "question": "처음에는 keymap[0]이 targets[0] 전용 키인 줄 알았다. 그래서 keymap[i] 안에서 targets[i]의 문자를 찾으려고 했다.",
    "attempt": "find(keymap[i].begin(), keymap[i].end(), ...)로 위치를 찾으려 했다. find()는 정수 인덱스가 아니라 iterator를 반환했다. 안쪽 반복문에서 찾을 대상도 문자열 전체가 아니라 targets[i][j] 한 문자였다.\n\nunordered_map<char, int> key에 문자별 최소 입력 횟수를 저장하는 방법을 생각했다. \"ABACD\"라면 A는 1, B는 2, C는 4, D는 5다. 같은 문자가 다시 나와도 마지막 값으로 덮지 않고 작은 값을 남겨야 한다.",
    "turning": "예제를 다시 보니 keymap 전체가 사용할 수 있는 모든 키 정보였다. [\"ABACD\", \"BCEFD\"]에서 B는 첫 키로 2번, 둘째 키로 1번이므로 1을 저장하면 된다. 모든 keymap을 먼저 훑고 targets를 따로 계산하는 쪽으로 바꿨다.",
    "learned": [
      "모든 키에서 문자별 최소 입력 횟수를 먼저 저장한다.",
      "targets를 하나씩 돌며 각 문자의 횟수를 더하는 구조를 생각했다.",
      "입력할 수 없는 문자가 있으면 -1을 반환해야 한다."
    ],
    "verification": "풀이 진행 중. 완성 코드와 채점 결과는 아직 없다. 기록 날짜: 2026-10-06. 원본: # 2026-10-06 — 프로그래머스 160586. 대충 만든.txt",
    "code_title": "메모에 남긴 코드 조각 · 미완성",
    "solution_code": "// 문자별 최소 횟수를 저장하려고 생각한 형태\nunordered_map<char, int> key;\n\n// 처음 위치를 찾으려던 코드 조각. ...은 미작성 부분이다.\nfind(keymap[i].begin(), keymap[i].end(), ...)\n\n// target 문자열에서 현재 문자에 접근\ntargets[i][j]"
  }
];
