window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/algorithms/lc-155-min-stack.js"] = [
  {
    "id": "lc-155",
    "title": "Min Stack · 최소값을 함께 저장하는 스택",
    "group": "implementation",
    "tags": [
      "스택",
      "배열",
      "vector",
      "최소값"
    ],
    "url": "https://leetcode.com/problems/min-stack/description/",
    "status": "통과 확인",
    "date": "2026-10-01",
    "problem": "push, pop, top, getMin으로 값을 넣고 빼면서 현재 최소값도 상수 시간에 반환하는 스택을 만든다.",
    "summary": "값을 넣을 때 그 시점까지의 최소값도 함께 저장했다. 배열과 vector 두 방식으로 풀었다.",
    "question": "처음에는 pop()이 최대값을 제거하는 것으로 착각했다. 배열이나 vector의 중간 값을 빼면 뒤 원소를 당겨야 하니 O(1)이 불가능하다고 생각했다. 하지만 스택의 pop()은 마지막에 들어온 값인 top을 제거한다. 배열에서는 값을 실제로 지우지 않고 size만 줄이면 됐다.",
    "attempt": "현재 최소값이 빠지면 다음 최소값을 찾으려고 다시 순회해야 할 것 같았다. 그래서 실제 값과 함께 각 시점까지의 최소값을 따로 저장했다. 값이 5, 3, 7, 2일 때 최소값 배열은 5, 3, 3, 2가 된다. 2를 빼면 마지막 최소값은 다시 3이다.\n\n호출 횟수가 최대 30,000번이라 배열도 30,000칸으로 만들었다. val에는 넣은 값, min에는 이전 최소값과 새 값 중 작은 값을 저장하고 size를 늘렸다. pop은 size를 줄이고, top과 getMin은 size - 1 위치를 읽었다.",
    "turning": "vector로 바꿀 때는 빈 vector에 val[size] = value로 접근했다. 아직 그 위치가 없어서 push_back()으로 추가하도록 고쳤다. min.back()도 비어 있을 때 읽으면 안 되므로 첫 값은 따로 넣었다. pop에서는 두 vector의 마지막 원소를 함께 뺐다. 배열과 vector 풀이 모두 45개 테스트를 통과했다.",
    "learned": [
      "스택은 마지막에 넣은 값을 먼저 꺼내는 LIFO 구조다. push는 맨 위에 추가하고 pop은 제거하며 top은 값을 확인한다.",
      "최소값을 하나만 기억하는 대신 각 위치까지의 최소값을 저장하면 pop 이후에도 마지막 min 값을 읽으면 된다.",
      "고정 배열 풀이의 네 연산은 모두 O(1)이다. vector의 push_back은 재할당이 일어날 수 있어 분할 상환 O(1), 한 번의 최악 시간은 O(n)이다. vector 풀이의 나머지 세 연산은 O(1)이다.",
      "배열은 size를 직접 관리하고, vector는 push_back(), pop_back(), back()으로 마지막 원소를 다룬다."
    ],
    "code_title": "통과 코드 두 가지 · C++ · 각각 별도 제출",
    "solution_code": "// 1. 배열 풀이 · Accepted 45 / 45 · 55 ms · 152.34 MB\nclass MinStack {\npublic:\n    int size;\n    int val[30000];\n    int min[30000];\n\n    MinStack()\n    {\n        size = 0;\n    }\n\n    void push(int value)\n    {\n        val[size] = value;\n\n        if(size > 0 && value < min[size - 1])\n        {\n            min[size] = value;\n        }\n        else if(size == 0)\n        {\n            min[size] = value;\n        }\n        else\n        {\n            min[size] = min[size - 1];\n        }\n\n        size++;\n    }\n\n    void pop()\n    {\n        size--;\n    }\n\n    int top()\n    {\n        return val[size - 1];\n    }\n\n    int getMin()\n    {\n        return min[size - 1];\n    }\n};\n\n// 2. vector 풀이 · Accepted 45 / 45 · 35 ms · 152.62 MB\n// 위 배열 풀이와 별도로 제출한 코드\nclass MinStack {\npublic:\n    vector<int> val;\n    vector<int> min;\n\n    MinStack()\n    {\n    }\n\n    void push(int value)\n    {\n        val.push_back(value);\n\n        if(min.size() > 0 && value < min.back())\n        {\n            min.push_back(value);\n        }\n        else if(min.size() == 0)\n        {\n            min.push_back(value);\n        }\n        else\n        {\n            min.push_back(min.back());\n        }\n    }\n\n    void pop()\n    {\n        min.pop_back();\n        val.pop_back();\n    }\n\n    int top()\n    {\n        return val.back();\n    }\n\n    int getMin()\n    {\n        return min.back();\n    }\n};",
    "verification": "사용자 제공 결과: 두 풀이 모두 LeetCode Accepted · 45 / 45. 배열: Runtime 55 ms / Memory 152.34 MB. vector: Runtime 35 ms / Memory 152.62 MB. 학습일 2026-10-01. 제출 상세 링크와 제출 시각은 미확인. 제공된 풀이 코드는 유지했다."
  }
];
