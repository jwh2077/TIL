window.TIL_LIBRARY_INDEX = [
  {
    "id": "stl-foundation",
    "title": "자료구조의 기본 · 저장 방식 · STL",
    "summary": "데이터를 저장하는 방식과 STL의 컨테이너, 반복자, 알고리즘.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "관련 Velog · STL과 vector 기초",
        "url": "https://velog.io/@jwh4410/7.17"
      },
      {
        "label": "자료구조 선택 기준",
        "url": "https://jwh2077.github.io/TIL/#material=stl-selection"
      },
      {
        "label": "Big-O · 시간 복잡도",
        "url": "https://jwh2077.github.io/TIL/#material=concept-bigo"
      }
    ],
    "file": "data/materials/stl-foundation.js",
    "outline": [
      {
        "title": "자료구조",
        "text": "자료구조 1. 개념 자료구조는 데이터를 저장, 삽입, 삭제, 접근, 탐색 등 효율적으로 관리하기 위한 방법이다."
      },
      {
        "title": "메모리에서의 저장",
        "text": "메모리에서의 저장 1. 연속적인 저장 데이터를 서로 붙어 있는 연속된 메모리 공간에 저장한다. [10][20][30][40] 예: 배열, vector 2. 불연속적인 저장 데이터가 메모리상에서 서로 붙어 있지 않아도 되며, 노드와 포인터 등을 이용해 연결한다. [10] → [20] → [30] 예: list , 연결 기반 Tree 연속적인 저장과 인덱스 접근 가능 여부는 같은 개념이 아니다. 저장 방식과 접근 방식을 구분해서 생각한다."
      },
      {
        "title": "STL이란?",
        "text": "STL이란? 1. 핵심 구성 구성 역할 예시 Container 데이터 저장 vector, list, set, map Iterator 컨테이너의 원소를 가리키고 이동 begin(), end() Algorithm 정렬/탐색/변경 등의 작업 sort(), find(), reverse() vector<int> vec = {3, 1, 2}; sort(vec.begin(), vec.end());"
      }
    ]
  },
  {
    "id": "stl-sequence",
    "title": "C++ vector·list·deque — 조회·추가·삭제",
    "summary": "vector, list, deque에서 값을 읽고 추가하거나 지우는 방법.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "관련 Velog · STL vector와 map 복습",
        "url": "https://velog.io/@jwh4410/7.27"
      },
      {
        "label": "파스칼의 삼각형 · 내 풀이",
        "url": "#algorithm=swea-2005"
      },
      {
        "label": "피보나치 수 · 내 풀이",
        "url": "#algorithm=pg-12945"
      },
      {
        "label": "SWEA 파스칼의 삼각형 원문",
        "url": "https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5P0-h6Ak4DFAUq"
      },
      {
        "label": "프로그래머스 피보나치 수 원문",
        "url": "https://school.programmers.co.kr/learn/courses/30/lessons/12945"
      },
      {
        "label": "자료구조 선택 기준",
        "url": "https://jwh2077.github.io/TIL/#material=stl-selection"
      },
      {
        "label": "C++ 문자열·STL 알고리즘",
        "url": "https://jwh2077.github.io/TIL/#material=stl-algorithm"
      }
    ],
    "file": "data/materials/stl-sequence.js",
    "outline": [
      {
        "title": "vector — 인덱스 접근·뒤에 추가",
        "text": "vector — 인덱스 접근·뒤에 추가 1. 개념 / 구조 vector 는 크기를 변화시켜가며 사용할 수 있는 동적 배열 이다. 원소가 연속적인 메모리에 저장된다. 인덱스로 임의 접근할 수 있다. 끝에 원소를 추가할 때 평균적으로 O(1)이다. capacity 가 부족하면 더 큰 공간을 확보하고 기존 원소를 이동할 수 있다. 2. size / capacity vector<int> vec; vec.size(); // 현재 원소 개수 vec.capacity(); // 현재 확보된 공간 vec.reserve(100); // capacity를 미리 확보 개념 의미 size 현재 들어 있는 원소의 개수 capacity 현재 확보된 저장 공간의 크기 reserve(n) capacity를 최소 n까지 확보. size는 변하지 않음 3. 주요 명령어 + Big-O 명령어 기능 Big-O push_back() 뒤에 추가 평균 O(1), 재할당 시 O(n) emplace_back() 뒤에서 객체를 생성하며 추가 평균 O(1), 재할당 시 O(n) pop_back() 마지막 원소 삭제 O(1) insert() 특정 위치에 삽입 O(n) erase() 특정 위치 삭제 O(n) operator[] 인덱스로 접근 O(1) at() 인덱스로 접근 + 범위 검사 O(1) empty() 비었는지 확인 O(1) clear() 모든 원소 삭제 O(n) size() 원소 개수 O(1) 4. 장점 / 단점 / 사용하기 좋은 때 장점: 인덱스 접근이 빠르고 캐시 효율이 좋다. 단점: 중간 삽입/삭제 시 뒤 원소를 이동해야 한다. 좋은 경우: 인덱스 접근이 필요하거나 끝에서 추가/삭제가 많은 경우 5. 탐색 / 뒤집기 find(vec.begin(), vec.end(), value); // 순차 탐색 reverse(vec.begin(), vec.end()); // 뒤집기 find() 는 O(n), reverse() 는 O(n)이다. 6. 알고리즘 예시: 그래프 vector<vector<int>> graph(4); graph[0].push_back(1); graph[0].push_back(2); 0번 정점에서 1번과 2번 정점으로 연결된 것을 인접 리스트로 표현한 것이다. {1, 2} 는 주소가 아니라 연결된 정점의 번호 를 저장한 것이다."
      },
      {
        "title": "list — 위치를 찾아 삽입·삭제",
        "text": "list — 위치를 찾아 삽입·삭제 1. 개념 / 구조 list 는 일반적으로 양방향 연결 리스트 이다. [10] ⇄ [20] ⇄ [30] 노드가 메모리상 연속되어 있을 필요가 없다. 각 노드는 앞/뒤 노드와 연결된다. 인덱스 임의 접근이 불가능하다. 위치를 가리키는 iterator를 이미 가지고 있다면 삽입/삭제가 효율적이다. 2. 주요 명령어 + Big-O 명령어 기능 Big-O push_back() 뒤 추가 O(1) push_front() 앞 추가 O(1) pop_back() 뒤 삭제 O(1) pop_front() 앞 삭제 O(1) insert(it) iterator 위치에 삽입 O(1)* erase(it) iterator 위치 삭제 O(1)* remove(value) 값을 찾아 삭제 O(n) find() 순차 탐색 O(n) reverse() 뒤집기 O(n) sort() 리스트 자체 정렬 O(n log n) * 해당 위치의 iterator를 이미 알고 있는 경우. 위치를 찾는 과정은 별도로 O(n)이 걸릴 수 있다. 3. 사용하기 좋은 때 중간 삽입/삭제가 많고 해당 위치를 iterator로 관리할 수 있으며 인덱스 접근이 중요하지 않을 때"
      },
      {
        "title": "forward_list — 단방향 연결 리스트",
        "text": "forward_list — 단방향 연결 리스트 1. 개념 / 구조 forward_list 는 단방향 연결 리스트 이다. [10] → [20] → [30] 다음 노드 방향으로만 이동한다. list 보다 구조가 단순하다. 인덱스 접근이 불가능하다. 2. 주요 명령어 + Big-O 명령어 기능 Big-O push_front() 앞 추가 O(1) pop_front() 앞 삭제 O(1) insert_after() iterator 뒤에 삽입 O(1)* erase_after() iterator 뒤 원소 삭제 O(1)* remove() 값으로 삭제 O(n) reverse() 뒤집기 O(n) 3. 사용하기 좋은 때 양방향 이동이 필요 없고 앞쪽 또는 특정 노드 뒤에서 삽입/삭제하는 경우"
      },
      {
        "title": "deque — 양쪽 끝에 추가·삭제",
        "text": "deque — 양쪽 끝에 추가·삭제 1. 개념 / 구조 Double Ended Queue — 양쪽 끝에서 삽입/삭제할 수 있다. 앞 ↔ [10][20][30][40] ↔ 뒤 2. 주요 명령어 + Big-O 명령어 기능 Big-O push_front() 앞 추가 O(1) push_back() 뒤 추가 O(1) pop_front() 앞 삭제 O(1) pop_back() 뒤 삭제 O(1) front() / back() 양 끝 확인 O(1) operator[] 인덱스 접근 O(1) 3. 장점 / 단점 / 사용하기 좋은 때 장점: 양쪽 끝의 삽입/삭제가 빠르고 인덱스 접근도 가능 단점: vector처럼 하나의 연속된 메모리 블록에 저장된다는 보장은 없음 좋은 경우: 양쪽에서 데이터를 넣고 빼는 경우, 슬라이딩 윈도우"
      },
      {
        "title": "2차원 vector — 행 추가와 값 추가",
        "text": "2차원 vector — 행 추가와 값 추가 A.push_back(vector {1})은 바깥 vector에 새 행을 추가한다. A[i].push_back(1)은 이미 있는 i번째 행에 값을 추가한다. 이전 행의 [j-1]과 [j]를 더할 때는 두 인덱스가 모두 존재하는 범위만 순회한다. vector > A; A.push_back(vector {1}); // 첫 행 추가 A[0].push_back(1); // 첫 행에 값 추가 A[i]에 접근하기 전에 i번째 행이 있어야 한다. if로 값을 검사하더라도 없는 인덱스에 먼저 접근하면 범위 검사가 되지 않는다."
      },
      {
        "title": "vector 크기 — 0부터 n까지 저장하려면 n+1칸",
        "text": "vector 크기 — 0부터 n까지 저장하려면 n+1칸 F(0)부터 F(n)까지 저장하려면 n+1칸이 필요하다. n칸만 만들면 마지막 인덱스는 n-1이다. 자료형의 크기를 키워도 배열의 인덱스 범위는 늘어나지 않는다."
      }
    ]
  },
  {
    "id": "stl-associative",
    "title": "C++ set·map·unordered — 중복·키 검색·정렬",
    "summary": "set과 map의 중복 처리, 정렬 순서, key로 값 찾기.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "관련 Velog · STL vector와 map 복습",
        "url": "https://velog.io/@jwh4410/7.27"
      },
      {
        "label": "관련 Velog · map과 auto, range-for",
        "url": "https://velog.io/@jwh4410/7.28"
      },
      {
        "label": "자료구조 선택 기준",
        "url": "https://jwh2077.github.io/TIL/#material=stl-selection"
      },
      {
        "label": "C++ 문자열·STL 알고리즘",
        "url": "https://jwh2077.github.io/TIL/#material=stl-algorithm"
      }
    ],
    "file": "data/materials/stl-associative.js",
    "outline": [
      {
        "title": "set — 중복 없이 정렬",
        "text": "set — 중복 없이 정렬 1. 개념 / 구조 set 은 중복 없는 값 을 정렬된 상태로 저장한다. 중복 X 요소 자체가 Key 역할 기본적으로 오름차순 표준에서는 균형 잡힌 트리 계열로 동작하며 대표적으로 Red-Black Tree가 사용된다. 2. 주요 명령어 + Big-O 명령어 기능 Big-O insert() 삽입 O(log n) emplace() 생성 후 삽입 O(log n) erase(key) Key 삭제 O(log n) find() 탐색 O(log n) contains() 존재 확인 O(log n) lower_bound() 값 이상인 첫 위치 O(log n) upper_bound() 값 초과인 첫 위치 O(log n) 3. 사용하기 좋은 때 중복 제거 정렬된 상태 유지 범위 탐색 set<int> nums; set<int, greater<>> descNums;"
      },
      {
        "title": "unordered_set — 정렬 없이 값 검색",
        "text": "unordered_set — 정렬 없이 값 검색 1. 개념 / 구조 unordered_set 은 Hash Table 을 이용해 중복 없는 값을 저장한다. 중복 X 정렬 X 평균적으로 빠른 탐색 2. 주요 명령어 + Big-O 명령어 기능 평균 / 최악 insert() 삽입 O(1) / O(n) erase() 삭제 O(1) / O(n) find() 탐색 O(1) / O(n) contains() 존재 확인 O(1) / O(n) 3. 사용하기 좋은 때 정렬이 필요하지 않고 빠른 존재 확인/검색이 중요할 때"
      },
      {
        "title": "multiset — 중복을 허용하는 set",
        "text": "multiset — 중복을 허용하는 set 1. 개념 / 구조 multiset 은 중복을 허용하면서 정렬 된 상태로 저장한다. multiset<int> nums; nums.insert(10); nums.insert(10); // 10이 두 개 존재 가능 2. 주요 명령어 + Big-O 명령어 기능 Big-O insert() 삽입 O(log n) erase(iterator) 해당 원소 삭제 O(1)~ erase(key) 해당 Key의 모든 원소 삭제 O(log n + k) count() 특정 값 개수 O(log n + k) lower_bound() 값 이상인 첫 위치 O(log n) upper_bound() 값 초과인 첫 위치 O(log n) equal_range() 같은 값의 범위 O(log n) 3. 사용하기 좋은 때 중복을 허용하면서 정렬과 범위 탐색이 필요할 때"
      },
      {
        "title": "map — 키와 값 저장",
        "text": "map — 키와 값 저장 1. 개념 / 구조 map 은 Key - Value 쌍을 저장하고 Key 기준으로 정렬한다. Key 중복 X Key 기준 정렬 Key로 Value 접근 균형 트리 계열로 구현된다. 2. 주요 명령어 + Big-O 명령어 기능 Big-O map[key] Key 접근. 없으면 새 원소를 삽입할 수 있음 O(log n) at(key) Key 접근. 없으면 예외 O(log n) insert() 삽입 O(log n) emplace() 생성 후 삽입 O(log n) erase(key) Key 삭제 O(log n) find() Key 탐색 O(log n) contains() Key 존재 확인 O(log n) 3. 사용하기 좋은 때 Key와 Value를 묶어 관리하고 Key 기준 정렬이나 탐색이 필요할 때 map<string, int> data; data[\"HP\"] = 100;"
      },
      {
        "title": "unordered_map — 정렬 없이 키 검색",
        "text": "unordered_map — 정렬 없이 키 검색 1. 개념 / 구조 unordered_map 은 Hash Table 기반의 Key - Value 자료구조이다. Key 중복 X 정렬 X 평균적으로 빠른 Key 검색 2. 주요 명령어 + Big-O 명령어 기능 평균 / 최악 data[key] Key 접근 / 없으면 삽입 O(1) / O(n) insert() 삽입 O(1) / O(n) erase(key) 삭제 O(1) / O(n) find() Key 탐색 O(1) / O(n) contains() 존재 확인 O(1) / O(n) 3. 사용하기 좋은 때 정렬이 필요하지 않고 Key 검색을 많이 하는 경우"
      },
      {
        "title": "multimap — 같은 키 여러 개 저장",
        "text": "multimap — 같은 키 여러 개 저장 1. 개념 / 구조 multimap 은 하나의 Key에 여러 Value를 저장할 수 있으며 Key 기준으로 정렬한다. multimap<string, int> data; data.insert({\"A\", 10}); data.insert({\"A\", 20}); 2. 주요 명령어 + Big-O 명령어 기능 Big-O insert() 삽입 O(log n) erase(key) 해당 Key의 모든 원소 삭제 O(log n + k) find() Key 탐색 O(log n) count() Key 개수 O(log n + k) equal_range() 같은 Key의 범위 O(log n) 3. 사용하기 좋은 때 하나의 Key에 여러 데이터를 연결하면서 Key 정렬이 필요할 때 Key와 Value를 같이 비교해 정렬하고 싶다면 multiset<pair<...>, 비교함수> 같은 방법도 가능하다. 다만 Key-Value 자체가 목적이라면 map/multimap 이 보통 더 자연스럽다."
      }
    ]
  },
  {
    "id": "stl-adaptor",
    "title": "C++ stack·queue·priority_queue — 꺼내는 순서",
    "summary": "stack은 마지막 값부터, queue는 처음 값부터 꺼낸다.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "자료구조 선택 기준",
        "url": "https://jwh2077.github.io/TIL/#material=stl-selection"
      },
      {
        "label": "C++ 문자열·STL 알고리즘",
        "url": "https://jwh2077.github.io/TIL/#material=stl-algorithm"
      }
    ],
    "file": "data/materials/stl-adaptor.js",
    "outline": [
      {
        "title": "stack — 마지막에 넣은 값 꺼내기",
        "text": "stack — 마지막에 넣은 값 꺼내기 1. 개념 / 구조 LIFO(Last In, First Out) — 후입선출 TOP ↓ [30] [20] [10] 2. 주요 명령어 + Big-O 명령어 기능 Big-O push() 맨 위에 추가 O(1) emplace() 맨 위에서 생성/추가 O(1) pop() 맨 위 삭제 O(1) top() 맨 위 확인 O(1) empty() 비었는지 확인 O(1) 3. 사용하기 좋은 때 괄호 짝 검사 계산기 DFS 되돌리기 / Undo"
      },
      {
        "title": "queue — 먼저 넣은 값 꺼내기",
        "text": "queue — 먼저 넣은 값 꺼내기 1. 개념 / 구조 FIFO(First In, First Out) — 선입선출 front → [10][20][30] ← back 2. 주요 명령어 + Big-O 명령어 기능 Big-O push() 뒤에 추가 O(1) emplace() 뒤에서 생성/추가 O(1) pop() 앞 삭제 O(1) front() 앞 확인 O(1) back() 뒤 확인 O(1) empty() 비었는지 확인 O(1) 3. 사용하기 좋은 때 BFS 대기열 먼저 들어온 작업부터 처리해야 하는 경우"
      },
      {
        "title": "priority_queue — 우선순위에 따라 꺼내기",
        "text": "priority_queue — 우선순위에 따라 꺼내기 1. 개념 / 구조 우선순위가 높은 원소를 먼저 꺼내는 자료구조이다. priority_queue 는 Heap을 사용한다. Heap은 완전 이진 트리 형태를 유지한다. 배열 형태로 효율적으로 표현할 수 있다. 전체 원소가 정렬되어 있는 것은 아니다. priority_queue<int> maxPQ; // 기본: 큰 값 우선 priority_queue<int, vector<int>, greater<int>> minPQ; // 작은 값 우선 2. 주요 명령어 + Big-O 명령어 기능 Big-O push() 삽입 O(log n) emplace() 생성 후 삽입 O(log n) pop() 최상위 우선순위 삭제 O(log n) top() 최상위 우선순위 확인 O(1) empty() 비었는지 확인 O(1) 3. 사용하기 좋은 때 최소/최대값을 반복해서 꺼낼 때 Dijkstra 우선순위가 있는 작업 처리"
      }
    ]
  },
  {
    "id": "stl-algorithm",
    "title": "C++ 문자열·STL 알고리즘",
    "summary": "string 파싱, sort·find·reverse 사용 예시와 컨테이너별 정렬.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "vector / list / deque",
        "url": "https://jwh2077.github.io/TIL/#material=stl-sequence"
      },
      {
        "label": "stack / queue / priority_queue",
        "url": "https://jwh2077.github.io/TIL/#material=stl-adaptor"
      },
      {
        "label": "그래프·트리 — 구조와 탐색",
        "url": "https://jwh2077.github.io/TIL/#material=graph-tree"
      }
    ],
    "file": "data/materials/stl-algorithm.js",
    "outline": [
      {
        "title": "string — 문자열 다루기",
        "text": "string — 문자열 다루기 1. 개념 std::string 은 문자열을 저장하는 표준 컨테이너이다. 내부적으로 연속적인 문자 저장을 사용하며 인덱스로 접근할 수 있다. 2. 주요 명령어 + Big-O 명령어 기능 대략적인 Big-O str[index] 문자 접근 O(1) find() 문자열/문자 탐색 O(n) 수준 substr(pos, count) 부분 문자열 생성 O(count) reverse() 문자열 뒤집기 O(n) size() 문자열 길이 O(1) 3. 파싱 문자열을 원하는 단위로 나누어 데이터를 추출하는 작업이다. string str = \"HP:100\"; auto pos = str.find(':'); string key = str.substr(0, pos); string value = str.substr(pos + 1); 4. 뒤집기 reverse(str.begin(), str.end()); find() 는 위치를 반환하며 찾지 못하면 string::npos 를 반환한다."
      },
      {
        "title": "파싱 — 문자열에서 필요한 값 나누기",
        "text": "파싱 — 문자열에서 필요한 값 나누기 1. sort sort(vec.begin(), vec.end()); // 기본 오름차순 sort(vec.begin(), vec.end(), greater<>()); // 내림차순 일반적으로 O(n log n)이다. 2. find / reverse find(vec.begin(), vec.end(), value); // O(n) reverse(vec.begin(), vec.end()); // O(n) 3. 컨테이너별 정렬 sort(vec.begin(), vec.end()); // vector 등 Random Access Iterator가 필요한 경우 lst.sort(); // list는 자체 sort 사용 list 는 임의 접근(Random Access)이 불가능하기 때문에 일반적인 std::sort() 를 사용할 수 없고, 멤버 함수 list::sort() 를 사용한다."
      }
    ]
  },
  {
    "id": "stl-selection",
    "title": "자료구조 선택 기준",
    "summary": "인덱스로 읽을지, 중간에서 지울지에 따라 골라보기.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "vector / list / deque",
        "url": "https://jwh2077.github.io/TIL/#material=stl-sequence"
      },
      {
        "label": "set / map · 중복과 정렬",
        "url": "https://jwh2077.github.io/TIL/#material=stl-associative"
      },
      {
        "label": "stack / queue / priority_queue",
        "url": "https://jwh2077.github.io/TIL/#material=stl-adaptor"
      }
    ],
    "file": "data/materials/stl-selection.js",
    "outline": [
      {
        "title": "자료구조 선택 기준",
        "text": "자료구조 선택 기준 필요한 상황 추천 자료구조 이유 인덱스 접근 vector 임의 접근 O(1) 끝에서 추가/삭제 vector 평균 O(1) 양쪽 끝에서 추가/삭제 deque 양쪽 O(1) 중간 삽입/삭제 + 위치 iterator 보유 list 연결 변경으로 처리 중복 없는 정렬 데이터 set 정렬 + 중복 X 중복 없는 빠른 검색 unordered_set Hash Table 평균 O(1) Key-Value + 정렬 map Key 기준 정렬 Key-Value + 빠른 검색 unordered_map Hash Table 평균 O(1) Key 중복 + 정렬 multimap 같은 Key 여러 개 가능 후입선출 stack LIFO 선입선출 queue FIFO 최소/최대 우선 처리 priority_queue Heap"
      }
    ]
  },
  {
    "id": "concept-bigo",
    "title": "Big-O · 시간 복잡도",
    "summary": "데이터가 많아질 때 처리할 일이 얼마나 늘어나는지.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "topics": [
      "ds"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "자료구조 선택 기준",
        "url": "https://jwh2077.github.io/TIL/#material=stl-selection"
      }
    ],
    "file": "data/materials/concept-bigo.js",
    "outline": [
      {
        "title": "Big-O 표기법",
        "text": "Big-O 표기법 1. 개념 입력 크기 n 이 커질 때 알고리즘의 실행 시간이나 필요한 공간이 어떻게 증가하는지를 나타내는 표기법이다. 표기 의미 예시 O(1) 입력 크기와 관계없이 일정 vector 인덱스 접근, stack top O(log n) 범위를 줄여가며 처리 set/map 탐색 O(n) 데이터 수에 비례 순차 탐색 O(n log n) 효율적인 정렬에서 자주 등장 sort() O(n²) 데이터 수의 제곱에 비례 중첩 반복문 Big-O는 실제 시간이 몇 초인지가 아니라, 입력 크기가 증가할 때 성능이 증가하는 정도를 표현한다."
      }
    ]
  },
  {
    "id": "unreal-containers",
    "title": "Unreal 자료구조 · TArray / TMap / TSet",
    "summary": "TArray, TMap, TSet의 용도와 기본 예제. 아직 실행 전인 초안.",
    "kind": "file",
    "topic": "unreal",
    "status": "게시 준비 초안 · 예제 실행 확인 필요",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "related_ids": [
      "20260825-ch3",
      "20260910-priest",
      "20260917-priest",
      "note-tem-011"
    ],
    "topics": [
      "unreal",
      "ds"
    ],
    "publication": "draft",
    "notice": "아래 예제는 Unreal에서 컴파일·실행 확인 전인 초안이다.",
    "references": [
      {
        "label": "TArray 공식 문서",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/array-containers-in-unreal-engine"
      },
      {
        "label": "TMap 공식 문서",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/map-containers-in-unreal-engine"
      },
      {
        "label": "TSet 공식 문서",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/set-containers-in-unreal-engine"
      },
      {
        "label": "vector / list / deque",
        "url": "https://jwh2077.github.io/TIL/#material=stl-sequence"
      },
      {
        "label": "set / map · 중복과 정렬",
        "url": "https://jwh2077.github.io/TIL/#material=stl-associative"
      }
    ],
    "file": "data/materials/unreal-containers.js",
    "outline": [
      {
        "title": "Unreal Engine 자료구조",
        "text": "Unreal Engine 자료구조 C++ STL Unreal 기본 용도 vector TArray 동적 배열 map TMap Key - Value set TSet 중복 없는 집합 Unreal의 컨테이너는 STL과 내부 구현이 완전히 같은 것은 아니지만, 기본적인 용도를 비교하면 이해하기 쉽다."
      },
      {
        "title": "STL과 비교하기",
        "text": "STL과 비교하기 TArray는 같은 타입의 값 목록, TMap은 key와 value, TSet은 중복 없는 값을 담는다. vector, map, set과 용도는 비교할 수 있지만 정렬 순서나 내부 구조까지 같은 것은 아니다."
      },
      {
        "title": "기본 문법 예제 · 실행 전",
        "text": "기본 문법 예제 · 실행 전 TArray Scores; Scores.Add(10); Scores.Add(20); TMap Stats; Stats.Add(FName(TEXT(\"Damage\")), 10); if (const int32* Damage = Stats.Find(FName(TEXT(\"Damage\")))) { // *Damage로 저장된 값 확인 } TSet UniqueIds; UniqueIds.Add(1); UniqueIds.Add(1); // 같은 값 중복 추가를 비교할 예제"
      },
      {
        "title": "예제 확인 항목",
        "text": "예제 확인 항목 사용 중인 Unreal 버전에서 예제 컴파일하기 TArray의 Num과 인덱스 범위 살펴보기 TMap에서 없는 key를 Find했을 때 반환값 살펴보기 TSet에 같은 값을 두 번 넣어보기"
      }
    ]
  },
  {
    "id": "velog-20260706-001",
    "title": "C 배열과 포인터",
    "summary": "배열 인덱스, 변수의 값과 주소, 포인터로 값 읽기.",
    "kind": "velog",
    "topic": "memory",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.6",
    "status": "개념 중심 발췌 · 원문 링크",
    "related_ids": [
      "20260706-001"
    ],
    "topics": [
      "cpp",
      "memory"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "C++ 동적 메모리 — 할당·해제·복사",
        "url": "https://jwh2077.github.io/TIL/#material=velog-20260710-001"
      }
    ],
    "file": "data/materials/velog-20260706-001.js",
    "outline": [
      {
        "title": "포인터 — 값과 주소 구분",
        "text": "포인터 — 값과 주소 구분 표현 의미 a 변수 값 &a 변수 주소 p 포인터에 저장된 주소 *p 그 주소에 있는 값 int a = 10; int* p = &a; // p: a의 주소, &p: p 자체의 주소, *p: a의 값"
      },
      {
        "title": "배열 — 원소의 위치와 주소",
        "text": "배열 — 원소의 위치와 주소 int a[5]는 int 다섯 개를 담는 배열이다. 첫 값은 a[0], 마지막 값은 a[4]로 읽는다. &a[1]과 a + 1은 같은 원소를 가리킨다. 인덱스 0 1 2 3 4 배열 [ ][ ][ ][ ][ ] 처음 마지막"
      }
    ]
  },
  {
    "id": "velog-20260709-001",
    "title": "클래스와 객체지향 기초",
    "summary": "멤버 변수와 함수, 접근 제어, getter/setter와 생성자.",
    "kind": "velog",
    "topic": "oop",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.9",
    "status": "개념 중심 발췌 · 원문 링크",
    "related_ids": [
      "20260709-001"
    ],
    "topics": [
      "cpp",
      "oop"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "객체지향 설계 — 상속·Component·Interface",
        "url": "https://jwh2077.github.io/TIL/#material=project-priest-oop-notes"
      },
      {
        "label": "함수 템플릿과 템플릿 클래스",
        "url": "https://jwh2077.github.io/TIL/#material=velog-20260716-001"
      }
    ],
    "file": "data/materials/velog-20260709-001.js",
    "outline": [
      {
        "title": "class와 접근 범위",
        "text": "class와 접근 범위 관련된 변수와 함수를 하나의 클래스로 묶는다. 접근 지정자 접근 범위 public 외부에서도 접근 private 클래스 내부에서 접근 protected 클래스 내부와 자식 클래스에서 접근"
      },
      {
        "title": "getter·setter·생성자",
        "text": "getter·setter·생성자 구성 역할 getter 함수를 통해 값 읽기 setter 함수를 통해 값 변경 생성자 객체 생성 시 멤버 값 준비. 클래스와 같은 이름"
      }
    ]
  },
  {
    "id": "velog-20260710-001",
    "title": "C++ 동적 메모리 — 할당·해제·복사",
    "summary": "new/delete, 댕글링 포인터와 메모리 누수, 얕은 복사와 깊은 복사.",
    "kind": "velog",
    "topic": "memory",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.10",
    "status": "개념 중심 발췌 · 원문 링크",
    "related_ids": [
      "20260710-001"
    ],
    "topics": [
      "cpp",
      "memory"
    ],
    "publication": "reference",
    "notice": "스마트 포인터와 복사 방식에서 헷갈렸던 부분은 7월 10일 학습 기록에 남겼다. 스마트 포인터 사용법은 이 문서에서 다루지 않는다.",
    "references": [
      {
        "label": "C 배열과 포인터",
        "url": "https://jwh2077.github.io/TIL/#material=velog-20260706-001"
      }
    ],
    "file": "data/materials/velog-20260710-001.js",
    "outline": [
      {
        "title": "할당과 해제",
        "text": "할당과 해제 항목 의미 new / delete 동적 할당 / 해제 댕글링 포인터 해제된 메모리 주소 등을 계속 가리키는 포인터 메모리 누수 더 이상 쓰지 않는 할당 메모리를 해제하지 못하고 남김"
      },
      {
        "title": "얕은 복사와 깊은 복사",
        "text": "얕은 복사와 깊은 복사 여기서는 포인터가 가리키는 데이터를 복사하는 경우를 비교한다. 얕은 복사: 원본 포인터 ─┐ ├→ 같은 데이터 복사 포인터 ─┘ 깊은 복사: 원본 포인터 ──→ 원본 데이터 복사 포인터 ──→ 별도 공간의 데이터"
      }
    ]
  },
  {
    "id": "velog-20260712-001",
    "title": "함수 오버로딩과 타입 변환",
    "summary": "함수 오버로딩 조건과 승격·표준 변환 예시.",
    "kind": "velog",
    "topic": "oop",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.13",
    "status": "개념 중심 발췌 · 원문 링크",
    "related_ids": [
      "20260712-001"
    ],
    "topics": [
      "cpp",
      "oop"
    ],
    "publication": "reference",
    "file": "data/materials/velog-20260712-001.js",
    "outline": [
      {
        "title": "오버로딩 가능 여부",
        "text": "오버로딩 가능 여부 차이 구분 가능 여부 매개변수 타입 가능 매개변수 개수 가능 반환 타입만 다름 불가능"
      },
      {
        "title": "기본 타입 변환 예시",
        "text": "기본 타입 변환 예시 승격도 표준 변환에 속한다. 위 표는 승격과 그 밖의 변환을 구분하는 예시이며 전체 오버로드 결정 규칙을 나열한 것은 아니다. 예 분류 char / short → int 원래 값을 int로 표현할 수 있는 경우 정수 승격 float → double 부동소수점 승격 int → double 일반적인 표준 변환"
      }
    ]
  },
  {
    "id": "velog-20260716-001",
    "title": "함수 템플릿과 템플릿 클래스",
    "summary": "T로 타입을 바꿔 쓰는 함수와 Array 클래스 예제.",
    "kind": "velog",
    "topic": "oop",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.16-gndjynps",
    "status": "개념 중심 발췌 · 원문 링크",
    "related_ids": [
      "20260716-001"
    ],
    "topics": [
      "cpp",
      "oop"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "클래스와 객체지향 기초",
        "url": "https://jwh2077.github.io/TIL/#material=velog-20260709-001"
      }
    ],
    "file": "data/materials/velog-20260716-001.js",
    "outline": [
      {
        "title": "함수 템플릿 — 두 값 교환",
        "text": "함수 템플릿 — 두 값 교환 타입 매개변수 T를 사용하는 값 교환 함수다. T&로 받아 원래 변수의 값을 바꾼다. template void swapValuse(T& a, T& b) { T temp = a; a = b; b = temp; }"
      },
      {
        "title": "클래스 템플릿 — 타입을 정해 객체 선언",
        "text": "클래스 템플릿 — 타입을 정해 객체 선언 T data[100]을 가진 Array 템플릿 클래스에 int를 지정하는 예다. 타입 인수에는 괄호가 아니라 꺾쇠를 쓴다. Array arr;"
      }
    ]
  },
  {
    "id": "velog-20260810-001",
    "title": "Unreal Actor — 헤더 선언·컴포넌트 연결",
    "summary": "Item.h에 선언한 변수와 함수, SceneRoot와 메시 연결.",
    "kind": "velog",
    "topic": "unreal",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/Unreal-C",
    "status": "원문 확인 · 핵심 재구성",
    "related_ids": [
      "20260810-001"
    ],
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "Unreal Build.cs 설정",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-build-settings"
      },
      {
        "label": "C++·Unreal 빌드 과정",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-build-flow"
      }
    ],
    "file": "data/materials/velog-20260810-001.js",
    "outline": [
      {
        "title": "AItem 헤더 — 상속과 generated.h 위치",
        "text": "AItem 헤더 — 상속과 generated.h 위치 AItem은 AActor를 상속받는다. 헤더에는 클래스가 가진 변수와 함수를 선언하고 cpp에 동작을 작성한다. Item.generated.h는 include 목록 마지막에 둔다."
      },
      {
        "title": "SceneRoot·StaticMesh — 생성과 부착",
        "text": "SceneRoot·StaticMesh — 생성과 부착 SceneRoot를 루트로 두고 StaticMeshComp를 그 아래에 붙인다. 기준점과 화면에 보이는 메시를 나눈 구조다. AItem └─ SceneRoot (기준점) └─ StaticMeshComp (표시할 메시) SceneRoot = CreateDefaultSubobject (TEXT(\"SceneRoot\")); SetRootComponent(SceneRoot); StaticMeshComp = CreateDefaultSubobject (TEXT(\"StaticMesh\")); StaticMeshComp->SetupAttachment(SceneRoot);"
      },
      {
        "title": "Actor 함수 — 시작·종료 시점",
        "text": "Actor 함수 — 시작·종료 시점 헤더에서 선언하고 cpp에서 각 시점의 동작을 작성할 함수 예: PostInitializeComponents, BeginPlay, Destroyed, EndPlay."
      }
    ]
  },
  {
    "id": "file-continue",
    "title": "C++ continue — 반복문 실행 흐름",
    "summary": "continue가 건너뛰는 범위와 짝수·홀수 분기 예시.",
    "kind": "note",
    "topic": "cpp",
    "source_name": "26.08.24.txt",
    "status": "원본 예제 보존 · 질문 별도 표시",
    "related_ids": [
      "20260618-001",
      "20260619-001",
      "20260622-001"
    ],
    "topics": [
      "cpp"
    ],
    "publication": "reference",
    "notice": "원본 파일의 주석 표기 메모는 사용 도구와 처리 결과가 확인되지 않아 로컬 검토 메모에 별도로 보관했다.",
    "file": "data/materials/file-continue.js",
    "outline": [
      {
        "title": "continue의 동작",
        "text": "continue의 동작 현재 반복의 남은 문장을 건너뛰고 다음 반복으로 진행한다. 아래 for문에서는 증감식 i++ 이후 조건을 다시 검사한다. 강아지 출력 짝수: 숫자 출력 → continue 다음 반복으로 이동"
      },
      {
        "title": "분기별 출력",
        "text": "분기별 출력 조건 이번 반복에서 출력 고양이 출력 i가 짝수 강아지, i 값 건너뜀 i가 홀수 강아지, 고양이 실행 int main() { for (int i = 0; i < 10; i++) { std::cout << \"강아지\\n\"; if (i % 2 == 0) { std::cout << i <<std::endl; continue; } std::cout << \"고양이\\n\"; } }"
      }
    ]
  },
  {
    "id": "project-priest-ai-notes",
    "title": "Unreal AI — Perception·Blackboard·Behavior Tree",
    "summary": "감지·상태·행동의 역할, Selector·Sequence 비교, Task·Decorator·Service와 공격 시점.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "로컬 개념 문서에서 정리",
    "source_name": "ProjectPriest_Unreal_AI_BT_Notes.html",
    "source_url": "",
    "project": "ProjectPriest",
    "notice": "ProjectPriest에서 사용한 이름과 흐름을 예로 든다. 작업 경과와 플레이 영상 설명은 관련 학습 기록에 남겼다.",
    "related_ids": [
      "20260924-priest-concepts",
      "20260907-priest",
      "20260910-priest",
      "20260925-priest-ai",
      "20260928-priest"
    ],
    "references": [
      {
        "label": "공격 범위와 Notify 피해 적용 · 49c42fc",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/49c42fc0c144d3b137fc0b3e9e2c8b169d462c8d"
      },
      {
        "label": "이후 공격 범위 에셋 변경 · 6f40359",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/6f40359179126e90655ef8a201a21d9799513170"
      },
      {
        "label": "객체지향 설계 — 상속·Component·Interface",
        "url": "https://jwh2077.github.io/TIL/#material=project-priest-oop-notes"
      }
    ],
    "file": "data/materials/project-priest-ai-notes.js",
    "outline": [
      {
        "title": "감지에서 행동까지",
        "text": "감지에서 행동까지 AI Perception: 감지 AIController: AI 제어 Blackboard: 판단용 상태 Behavior Tree: 행동 선택 Character: 이동·공격"
      },
      {
        "title": "구성요소 역할",
        "text": "구성요소 역할 요소 역할 AIController 캐릭터의 AI 제어, Behavior Tree 실행 AI Perception 외부 상황 감지 Blackboard 목표·위치·상태 보관. 직접 이동·공격하지 않음 Behavior Tree 상태와 조건을 보고 행동 실행 NavMesh 이동 가능한 영역"
      },
      {
        "title": "Blackboard 값 예시",
        "text": "Blackboard 값 예시 ProjectPriest에서 사용한 이름이며 고정된 엔진 키가 아니다. 키 의미 Player 현재 목표 PlayerVector 목표 위치 IsCombat 전투 상태"
      },
      {
        "title": "Selector와 Sequence",
        "text": "Selector와 Sequence 노드 진행 방식 예 Sequence 순서대로 진행, 자식 하나가 실패하면 실패 플레이어 확인 → 바라보기 → 공격 Selector 순서대로 시도, 자식 하나가 성공하면 성공 공격 가능 여부 → 추적 → 순찰"
      },
      {
        "title": "Task·Decorator·Service",
        "text": "Task·Decorator·Service 요소 담당 Task 이동·공격·순찰 위치 지정 등 행동 Decorator Branch 실행 조건 검사 Service Branch 활성 중 일정 주기로 상태 확인·갱신"
      },
      {
        "title": "공격 범위와 타격 시점 분리",
        "text": "공격 범위와 타격 시점 분리 범위 안에 있다는 것과 실제 피해를 주는 시점은 별도로 처리한다. Overlap에서 대상을 보관하고 Notify에서 사용하는 흐름의 예시이며, 모든 공격 판정에 적용하는 단일 정답은 아니다. 범위 검사: 대상 보관 공격 Montage 재생 타격 프레임: Anim Notify 대상 유효 여부 확인 피해 적용"
      }
    ]
  },
  {
    "id": "project-priest-oop-notes",
    "title": "객체지향 설계 — 상속·Component·Interface",
    "summary": "is-a·has-a·can-do 관계, 객체의 책임, Component와 Interface, SRP·OCP·MVC 비교.",
    "kind": "note",
    "topic": "oop",
    "topics": [
      "unreal",
      "oop"
    ],
    "publication": "reference",
    "status": "로컬 개념 문서에서 정리",
    "source_name": "ProjectPriest_Unreal_OOP_Concepts.html",
    "source_url": "",
    "project": "ProjectPriest",
    "notice": "개념을 이해하려고 적은 예시다. 전부 프로젝트에 적용한 구조는 아니다.",
    "related_ids": [
      "20260924-priest-concepts",
      "note-tem-011",
      "20260715-001"
    ],
    "references": [
      {
        "label": "클래스와 객체지향 기초",
        "url": "https://jwh2077.github.io/TIL/#material=velog-20260709-001"
      },
      {
        "label": "Unreal AI — Perception·Blackboard·Behavior Tree",
        "url": "https://jwh2077.github.io/TIL/#material=project-priest-ai-notes"
      }
    ],
    "file": "data/materials/project-priest-oop-notes.js",
    "outline": [
      {
        "title": "함수와 객체의 책임",
        "text": "함수와 객체의 책임 함수는 수행할 동작, 객체는 관련된 상태와 동작의 책임을 묶는다. 체력 관리에 속하는 동작 다른 책임의 예 TakeDamage / Heal / IsDead 재장전 / 인벤토리 정렬"
      },
      {
        "title": "is-a·has-a·can-do",
        "text": "is-a·has-a·can-do 설계상 소유 관계와 포인터의 현재 유효 여부는 별개다. 관계 의미 예 is-a 한 종류라는 관계 → 상속 Rifle은 Weapon의 한 종류 has-a 부품이나 상태를 가짐 Character가 HealthComponent를 가짐 can-do 요청 가능한 기능의 약속 → Interface 여러 종류의 객체가 Interact를 제공"
      },
      {
        "title": "Class·Instance·Component·Interface",
        "text": "Class·Instance·Component·Interface 용어 역할 Class 상태와 기능을 묶는 틀 Instance 그 클래스로부터 만들어진 객체 Component 기능을 실제로 맡는 부품 Interface 외부에서 요청할 수 있는 기능의 약속"
      },
      {
        "title": "외부 요청과 내부 처리",
        "text": "외부 요청과 내부 처리 외부에서는 내부 계산을 모두 알 필요 없이 공개된 요청을 사용한다. Enemy가 요청을 받고 HealthComponent에 처리를 맡기는 식으로 나눌 수 있다. 외부: TakeDamage 요청 내부: 방어력 계산 체력 감소 사망 판정"
      },
      {
        "title": "SRP와 OCP",
        "text": "SRP와 OCP 원칙 기준 오해하기 쉬운 점 SRP · 단일 책임 같은 책임의 상태와 동작을 묶음 함수를 하나만 두라는 뜻이 아님 OCP · 개방-폐쇄 새 무기가 각자의 Attack을 제공하는 식으로 확장 기존 코드를 절대 수정하지 말라는 뜻이 아님"
      },
      {
        "title": "Delegate와 Broadcast",
        "text": "Delegate와 Broadcast Delegate: 받을 대상 연결 탄약 변경 이벤트 발생 Broadcast: 등록 대상에게 알림 HUD 등에서 각자 처리"
      },
      {
        "title": "MVC 역할 구분",
        "text": "MVC 역할 구분 인벤토리의 화면, 장착 요청, 장착 검사와 데이터 변경을 나누는 예시다. 프로젝트 전체에 적용했다고 뜻하지는 않는다. 구분 담당 View 정보 표시·입력 Controller 입력 해석·요청 전달 Model 데이터·규칙·실제 변경"
      }
    ]
  },
  {
    "id": "unreal-multiplayer-basics",
    "title": "Unreal 멀티플레이 — 클래스 역할·서버·복제",
    "summary": "서버 종류, 클라이언트 접속 흐름, GameMode·PlayerController 등 클래스별 위치와 복제 범위.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "멀티플레이 개념 정리",
    "source_name": "CH4개인과제10.1발제.txt / UE_Multiplayer_Server_TIL.md / 10-5 서버.txt",
    "source_url": "",
    "notice": "숫자 야구는 역할 구분을 설명하는 예시다. 과제 안내와 공부하며 남긴 질문은 관련 학습 기록에 있다.",
    "related_ids": [
      "20261001-study",
      "20261005-chatx"
    ],
    "references": [
      {
        "label": "Epic 공식 문서 · Client-Server Model",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/client-server-model?application_version=4.27"
      },
      {
        "label": "Epic 공식 문서 · Networking Overview",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-overview?application_version=4.27"
      },
      {
        "label": "Epic 공식 문서 · Actors and their Owning Connections",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/actors-and-their-owning-connections-in-unreal-engine?application_version=5.2"
      },
      {
        "label": "PIE·로컬 UI·NetMode 실행 구분",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-network-testing"
      }
    ],
    "file": "data/materials/unreal-multiplayer-basics.js",
    "outline": [
      {
        "title": "P2P·Listen Server·Dedicated Server",
        "text": "P2P·Listen Server·Dedicated Server 리슨 서버도 서버를 중심으로 통신한다. 방장이 직접 플레이한다는 이유로 P2P와 같은 구조가 되는 것은 아니다. 구분 구성 주의점 P2P (Peer to Peer) 참여자가 서로 데이터를 주고받는 구조 Unreal의 기본 클라이언트–서버 모델과 구분 Listen Server 방장이 플레이하면서 서버 역할도 담당 방장이 나갔을 때 처리 필요 Dedicated Server 플레이어 화면 없이 서버 역할 담당 화면 디버그 메시지보다 로그로 상태 확인"
      },
      {
        "title": "클라이언트 접속 흐름",
        "text": "클라이언트 접속 흐름 기본 클라이언트–서버 모델에서 클라이언트 간 게임 상태 전달은 서버를 거친다. 클라이언트가 서버에 접속 요청 서버가 접속에 필요한 맵 정보 전달 클라이언트가 맵 로드 서버의 로그인 처리와 PlayerController 생성 클라이언트별로 필요한 객체·상태 복제 서버와 각 클라이언트는 자기 월드와 객체를 따로 가진다. 복제본은 서버 상태를 전달받는 로컬 객체다. ‘가짜’나 ‘약한 객체’로 구분하지 않는다. 모든 Actor와 변수가 자동으로 동기화되는 것은 아니다."
      },
      {
        "title": "클래스별 역할",
        "text": "클래스별 역할 GameMode는 서버에서 게임 규칙을 담당하는 Actor다. 서버 프로세스 자체를 뜻하지 않는다. 클래스 담을 정보 서버·클라이언트 관계 GameMode 게임 규칙·승패 판정 서버에만 존재 GameState 라운드·팀 점수 등 전체 상태 서버에서 관리하고 클라이언트에 복제 PlayerState 닉네임·개인 점수 등 플레이어 정보 다른 플레이어에게 필요한 상태 공유 GameInstance 설정·맵 이동 후 유지할 로컬 데이터 각 프로세스에 따로 존재, 자동 동기화되지 않음 PlayerController 플레이어 입력·Pawn 조종 서버와 해당 플레이어의 클라이언트에 존재. 다른 클라이언트에는 기본적으로 복제되지 않음 Pawn / Character 플레이어가 조종하는 게임 속 객체 복제 설정과 클라이언트별 필요 여부에 따라 전달"
      },
      {
        "title": "복제 대상과 HasAuthority()",
        "text": "복제 대상과 HasAuthority() 공유할 필요가 없는 값을 모두 복제하지 않는다. HasAuthority()를 단순한 서버 여부 표시와 완전히 같은 뜻으로 사용하지 않는다. 항목 구분 복제 대상 GameState·PlayerState뿐 아니라 Actor·변수·Component 등도 대상이 될 수 있음 HasAuthority() 현재 Actor에 대한 Authority를 가지고 있는지 검사"
      },
      {
        "title": "역할을 나누는 예 — 숫자 야구",
        "text": "역할을 나누는 예 — 숫자 야구 클라이언트: 숫자 입력 서버: 정답과 비교 서버: Strike / Ball 판정 공유 상태 전달 클라이언트: 결과 표시"
      },
      {
        "title": "PIE와 ?Listen 구분",
        "text": "PIE와 ?Listen 구분 표현 의미 PIE (Play In Editor) 에디터에서 게임을 실행하는 기능. PIE 자체가 전용 서버를 뜻하지는 않음 맵 이름 뒤의 ?Listen 해당 맵을 리슨 서버로 열기 위한 옵션 전용 서버 실행 서버 실행 대상과 실행 옵션을 별도로 사용. ?Listen을 빼는 것만으로 전용 서버가 되지는 않음"
      },
      {
        "title": "TCP·UDP와 RPC 전달 방식",
        "text": "TCP·UDP와 RPC 전달 방식 TCP = 웹, UDP = 게임으로만 외우지 않고 데이터의 성격으로 구분한다. 전송 프로토콜과 RPC 옵션은 같은 분류가 아니다. 구분 핵심 TCP 전달·순서를 보장하기 위한 재전송이 있음 UDP 프로토콜 자체는 전달·순서를 보장하지 않음 Reliable / Unreliable RPC 언리얼에서 전달 신뢰성을 구분하는 설정"
      },
      {
        "title": "서버 디버깅",
        "text": "서버 디버깅 서버와 클라이언트 두 개를 나눠 그려 코드 실행 위치와 값의 이동을 따라간다. 전용 서버에는 화면이 없으므로 화면 메시지만 사용하지 않는다. UE_LOG와 프로젝트용 로그 카테고리로 출력 위치와 내용을 구분한다."
      }
    ]
  },
  {
    "id": "unreal-build-flow",
    "title": "C++·Unreal 빌드 과정",
    "summary": "cpp와 헤더가 컴파일·링크되는 순서, UBT·UHT의 역할, IntelliSense와 실제 빌드 결과의 차이.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "빌드 과정 참고 · 2026-10-02",
    "source_name": "10.02.md · 로컬 보관",
    "source_url": "",
    "notice": "기본 빌드 흐름을 정리한 자료다. IntelliSense 표시와 빌드 결과가 달랐던 사례는 관련 학습 기록에 남겼다.",
    "related_ids": [
      "20261002-chatx"
    ],
    "references": [
      {
        "label": "ChatX · 이번 과제 저장소",
        "url": "https://github.com/jwh2077/ChatX"
      },
      {
        "label": "Unreal Build.cs 설정",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-build-settings"
      },
      {
        "label": "Unreal C++ AItem 헤더 구조",
        "url": "https://jwh2077.github.io/TIL/#material=velog-20260810-001"
      }
    ],
    "file": "data/materials/unreal-build-flow.js",
    "outline": [
      {
        "title": "Unreal 빌드 순서",
        "text": "Unreal 빌드 순서 UBT: 빌드 설정 구성 UHT: 리플렉션 코드 생성 C++ 컴파일러: 코드 컴파일 링커: 결과 연결 도구 역할 UBT Build.cs 등의 설정으로 모듈 빌드 구성 UHT 리플렉션 대상 헤더 분석, 필요한 코드 생성 C++ 컴파일러 cpp·포함된 헤더·생성된 코드 컴파일 링커 컴파일 결과를 실행 파일이나 DLL로 연결"
      },
      {
        "title": "C++ 빌드 순서 — include → 컴파일 → 링크",
        "text": "C++ 빌드 순서 — include → 컴파일 → 링크 cpp가 포함한 헤더와 그 헤더가 포함한 내용을 모아 컴파일한다. 모든 헤더를 먼저 따로 컴파일하는 흐름은 아니다. Unreal의 빌드 옵션에 따라 여러 cpp를 묶기도 하므로 항상 cpp 하나당 obj 하나라는 뜻은 아니다. cpp에서 #include 필요한 헤더 포함 컴파일 → obj 여러 결과 링크 실행 파일 / DLL // Player.cpp #include \"Player.h\" // Player.h에서 필요한 다른 헤더를 포함하는 예 #include \"Weapon.h\" #include \"Stat.h\""
      },
      {
        "title": "UHT의 역할 — 리플렉션 코드 생성",
        "text": "UHT의 역할 — 리플렉션 코드 생성 UHT의 처리 기준은 전용 cpp의 유무가 아니라 Unreal 리플렉션 선언이다. 일반 C++ 컴파일러를 대신하지 않는다. 선언 예 UHT와의 관계 일반 struct, enum, 템플릿, inline 함수 전용 cpp 없이 헤더로 존재할 수 있음. 다른 cpp에 포함되어 컴파일 UCLASS / USTRUCT / UPROPERTY 등 Unreal 리플렉션에 필요한 코드 생성 대상 // 일반 C++ 인터페이스 예시 class IDamageable { public: virtual ~IDamageable() = default; virtual void TakeDamage(float Damage) = 0; };"
      },
      {
        "title": "IntelliSense와 실제 빌드 오류",
        "text": "IntelliSense와 실제 빌드 오류 검색 경로 정보가 서로 다르면 빨간 줄이 있어도 빌드는 성공할 수 있다. 빨간 줄만으로 컴파일 실패를 판단하지 않고 실제 빌드 결과를 함께 확인한다. 구분 무엇을 보는가 IntelliSense 빨간 줄 Visual Studio의 코드 분석 결과 실제 빌드 결과 UBT가 구성한 환경으로 컴파일한 결과"
      }
    ]
  },
  {
    "id": "unreal-build-settings",
    "title": "Unreal Build.cs 설정",
    "summary": "모듈 추가, Public/Private 선택 기준, 헤더 검색 경로와 파일 위치별 #include 예시.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "빌드 설정 참고 · 2026-10-02",
    "source_name": "10.02.md · 로컬 보관",
    "source_url": "",
    "notice": "ChatX와 ProjectPriest의 설정을 예로 정리했다. 코드는 설정과 경로를 설명하기 위한 예시다.",
    "related_ids": [
      "20261002-chatx"
    ],
    "references": [
      {
        "label": "ChatX · 이번 과제 저장소",
        "url": "https://github.com/jwh2077/ChatX"
      },
      {
        "label": "C++·Unreal 빌드 과정",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-build-flow"
      },
      {
        "label": "Unreal C++ AItem 헤더 구조",
        "url": "https://jwh2077.github.io/TIL/#material=velog-20260810-001"
      }
    ],
    "file": "data/materials/unreal-build-settings.js",
    "outline": [
      {
        "title": "필요한 설정 찾기",
        "text": "필요한 설정 찾기 Build.cs는 UBT에 모듈의 빌드 설정을 전달한다. 하려는 일 설정 다른 모듈의 기능 사용 DependencyModuleNames 헤더 검색 경로 추가 IncludePaths 다른 모듈에도 공개 Public 현재 모듈 안에서만 사용 Private"
      },
      {
        "title": "모듈 추가 — DependencyModuleNames",
        "text": "모듈 추가 — DependencyModuleNames 사용할 기능이 속한 Unreal 모듈을 의존성에 추가한다. 예를 들어 UEnhancedInputComponent는 EnhancedInput 모듈의 기능이다. #include로 헤더를 포함하는 것과 모듈 의존성을 지정하는 것은 역할이 다르다. PublicDependencyModuleNames.AddRange(new string[] { \"Core\", \"CoreUObject\", \"Engine\", \"InputCore\", \"EnhancedInput\" });"
      },
      {
        "title": "모듈 의존성 — Public과 Private",
        "text": "모듈 의존성 — Public과 Private C++ 클래스의 접근 제어와는 별개의 설정이다. 구분 선택 기준 예 PublicDependencyModuleNames 공개 인터페이스를 사용하는 쪽에도 필요 공개 헤더가 의존하는 모듈 PrivateDependencyModuleNames 현재 모듈 내부 구현에서만 필요 cpp 내부에서만 사용하는 Slate / SlateCore"
      },
      {
        "title": "IncludePaths — 검색 기준과 하위 경로",
        "text": "IncludePaths — 검색 기준과 하위 경로 검색 기준 ChatX와 include 경로 Game/CXGameModeBase.h를 합쳐 헤더를 찾는다. 하위 폴더 전체를 자동으로 재귀 탐색하는 설정은 아니다. 검색 기준: ChatX/ 상대 경로: Game/CXGameModeBase.h 대상: ChatX/Game/CXGameModeBase.h // Build.cs: 헤더 검색 기준 추가 PublicIncludePaths.Add(\"ChatX\"); // 헤더 위치: Source/ChatX/Game/CXGameModeBase.h #include \"Game/CXGameModeBase.h\" Add(\"ChatX\"): 경로 하나 추가 AddRange(new string[] { \"PathA\", \"PathB\" }): 여러 경로 추가. 하나만 담은 배열도 가능하다."
      },
      {
        "title": "파일 위치별 #include 예시",
        "text": "파일 위치별 #include 예시 ChatX가 검색 기준으로 등록된 경우다. 같은 폴더에서 헤더를 찾는 경우와 등록된 경로에서 찾는 경우를 구분한다. // 1. cpp와 h가 같은 폴더 ChatX/ └─ Game/ ├─ CXGameModeBase.cpp └─ CXGameModeBase.h // cpp: #include \"CXGameModeBase.h\" // 2. cpp만 상위 폴더 ChatX/ ├─ CXGameModeBase.cpp └─ Game/ └─ CXGameModeBase.h // cpp: #include \"Game/CXGameModeBase.h\" // 3. h만 상위 폴더 ChatX/ ├─ CXGameModeBase.h └─ Game/ └─ CXGameModeBase.cpp // cpp: #include \"CXGameModeBase.h\""
      },
      {
        "title": "PublicIncludePaths와 PrivateIncludePaths — 공개 범위",
        "text": "PublicIncludePaths와 PrivateIncludePaths — 공개 범위 둘 다 헤더 검색 경로다. Private에도 내부용 헤더를 둘 수 있으므로 Public = h, Private = cpp로 구분하지 않는다. 설정 사용 범위 PublicIncludePaths 공개 인터페이스에서 필요한 검색 경로 PrivateIncludePaths 현재 모듈 내부에서 필요한 검색 경로 PublicIncludePaths.Add(\"ProjectPriest/StateMachines/Public\"); PrivateIncludePaths.Add(\"ProjectPriest/StateMachines/Private\"); // 위 Public 경로를 기준으로 포함하는 헤더 #include \"StateMachine.h\" #include \"States/IdleState.h\" 예시의 StateMachines/Public·Private는 모듈 바로 아래의 일반적인 Public·Private 위치와 달라 경로를 직접 등록한다. 검색 기준을 더 깊게 두면 #include에서 그 앞부분을 생략할 수 있다."
      }
    ]
  },
  {
    "id": "graph-tree",
    "title": "그래프·트리 — 구조와 탐색",
    "summary": "인접 리스트, BFS·DFS 비교, 트리의 부모·자식 관계와 기본 용어.",
    "kind": "file",
    "topic": "ds",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "topics": [
      "ds"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "vector / list / deque",
        "url": "https://jwh2077.github.io/TIL/#material=stl-sequence"
      },
      {
        "label": "stack / queue / priority_queue",
        "url": "https://jwh2077.github.io/TIL/#material=stl-adaptor"
      },
      {
        "label": "C++ 문자열·STL 알고리즘",
        "url": "https://jwh2077.github.io/TIL/#material=stl-algorithm"
      }
    ],
    "file": "data/materials/graph-tree.js",
    "outline": [
      {
        "title": "Graph",
        "text": "Graph DFS는 한 갈래를 끝까지 살펴본 뒤 돌아와 다른 갈래를 본다. BFS는 시작한 곳에서 가까운 곳부터 차례로 살펴본다. DFS에서는 재귀나 stack으로 돌아갈 위치를 기억하고, BFS에서는 queue에 다음에 볼 위치를 넣는다. 1. 개념 정점(Vertex)과 간선(Edge)으로 이루어진 자료구조이다. 2. Vector를 이용한 인접 리스트 vector<vector<int>> graph(4); graph[0].push_back(1); graph[0].push_back(2); 각 정점에 연결된 다른 정점의 목록을 저장하는 방식이다. 3. 대표 알고리즘 알고리즘 주로 사용하는 자료구조 목적 BFS Queue 너비 우선 탐색 DFS Stack / 재귀 깊이 우선 탐색 Dijkstra Priority Queue 한 시작점에서 최단 거리"
      },
      {
        "title": "Tree",
        "text": "Tree 1. 개념 부모-자식 관계를 가지는 계층적인 자료구조이다. [1] Root / \\ [2] [3] / [4] Leaf 2. 용어 용어 의미 Root 가장 위의 노드 Parent 부모 노드 Child 자식 노드 Leaf 자식이 없는 노드 Edge 노드와 노드를 연결하는 간선 3. 종류 Binary Tree Binary Search Tree Heap"
      }
    ]
  },
  {
    "id": "unreal-network-testing",
    "title": "Unreal 전용 서버 — 실행 설정과 연결·소유 관계",
    "summary": "전용 서버와 두 클라이언트의 관계, 실행 위치, NetDriver의 연결 관리와 Owner를 따라 Owning Connection을 찾는 흐름.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "멀티플레이 실행·디버깅",
    "source_name": "10-6.txt / 스크린샷 2026-10-06 153305.png / 10.07.txt",
    "source_url": "",
    "related_ids": [
      "20261006-chatx"
    ],
    "references": [
      {
        "label": "클래스 역할·서버·복제 기본 개념",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-multiplayer-basics"
      },
      {
        "label": "Epic · PIE Multiplayer Options",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/play-in-editor-multiplayer-options-in-unreal-engine"
      },
      {
        "label": "Epic · 멀티플레이 디버깅",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/testing-and-debugging-networked-games-in-unreal-engine"
      },
      {
        "label": "Epic · IsLocalController",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/Engine/GameFramework/APlayerController/IsLocalController?application_version=5.5"
      },
      {
        "label": "Epic · UNetDriver",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/UNetDriver"
      },
      {
        "label": "Epic · ENetMode",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/Engine/ENetMode"
      },
      {
        "label": "Epic · Actor Owner and Owning Connection",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/actor-owner-and-owning-connection-in-unreal-engine"
      },
      {
        "label": "Epic · Networking Overview",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/networking-overview-for-unreal-engine"
      },
      {
        "label": "Epic · SetOwner",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Actor/SetOwner"
      }
    ],
    "file": "data/materials/unreal-network-testing.js",
    "outline": [
      {
        "title": "전용 서버와 두 클라이언트 — 각자 월드를 가진다",
        "text": "전용 서버와 두 클라이언트 — 각자 월드를 가진다 전용 서버는 로컬 플레이어 없이 게임 상태와 판정을 담당한다. 플레이어 A와 B는 각각 클라이언트로 접속한다. 같은 PC에서 PIE로 실행해도 서버 월드와 각 클라이언트 월드는 구분된다. 전용 서버 클라이언트 A 클라이언트 B 규칙·판정·상태 관리 A의 입력·화면·UI B의 입력·화면·UI A와 B의 PlayerController A의 PlayerController B의 PlayerController A와 B의 Pawn 필요한 A·B Pawn의 복제본 필요한 A·B Pawn의 복제본 클라이언트 A ←→ 전용 서버 ←→ 클라이언트 B 입력·화면 판정·상태 입력·화면 A가 요청 → 서버가 검사하고 상태 변경 → 필요한 A·B에 전달 → 각 화면에서 표시 클라이언트끼리 같은 객체를 공유하는 구조가 아니다. 서버가 화면을 보내는 대신 상태를 전달하고, 각 클라이언트가 자기 객체로 화면을 만든다. 복제 설정과 관련성에 따라 받는 객체·값은 달라진다."
      },
      {
        "title": "전용 서버 테스트 — PIE 설정",
        "text": "전용 서버 테스트 — PIE 설정 설정 위치: Editor Preferences → Level Editor → Play 설정 선택 / 용도 Play Net Mode Play as Client — 클라이언트 창과 백그라운드 전용 서버 실행 Run Under One Process 끄기 — 창마다 프로세스를 나눠 테스트 Always On Top 선택 사항. 테스트 창을 다른 창 위에 표시 설정할 때 참고 Run Under One Process를 켜도 멀티플레이 테스트는 가능하다. 빠르게 실행할 수 있지만 실제로 프로세스를 나눈 환경과는 차이가 있다. Play as Client는 전용 서버를 실행하므로 Launch Separate Server를 반드시 켤 필요는 없다. 이 옵션은 현재 모드에서 요구하지 않아도 서버를 따로 실행할 때 사용한다. 10월 6일 남긴 실제 설정 화면. 이미지를 누르면 크게 볼 수 있다."
      },
      {
        "title": "내 화면에만 UI 표시 — IsLocalController()",
        "text": "내 화면에만 UI 표시 — IsLocalController() PlayerController에서 로컬 플레이어의 컨트롤러인지 검사한다. 로컬이 아니면 반환하고, 로컬일 때만 UI 처리를 이어간다. // PlayerController 멤버 함수 안에서 if (!IsLocalController()) { return; } // 이 로컬 플레이어의 UI 처리 !IsLocalController() 와 IsLocalController() == false 는 같은 조건이다. 리슨 서버의 방장도 로컬 플레이어다. 로컬 = 서버가 아님 으로 구분하면 안 된다. 두 화면에 같은 출력이 보일 때 PrintString의 디버그 출력인지, UI 위젯이 양쪽에 생성된 것인지 먼저 구분한다. 위젯이라면 생성 위치·소유 대상·중복 호출을 살펴본다. 프로세스를 나누는 설정만으로 UI 코드가 고쳐지지는 않는다."
      },
      {
        "title": "서버인지 클라이언트인지 구분 — GetNetMode()",
        "text": "서버인지 클라이언트인지 구분 — GetNetMode() GetNetMode() 는 현재 월드의 실행 모드를 ENetMode 값으로 반환한다. 값 실행 형태 NM_Standalone 원격 연결 없이 서버·로컬 플레이 로직을 실행. 싱글·로컬 멀티플레이 NM_DedicatedServer 로컬 플레이어 없는 전용 서버 NM_ListenServer 서버 역할과 로컬 플레이를 함께 수행 NM_Client 서버에 접속해 입력·로컬 표현 등을 실행. 서버 전용 판정과 구분 NM_MAX 는 실행 모드로 사용하는 값이 아니다. 구분할 대상 사용하는 함수 월드가 서버인지 클라이언트인지 GetNetMode() 이 컨트롤러가 로컬 플레이어의 것인지 IsLocalController() 해당 Actor에 권한이 있는지 HasAuthority() 나와 다른 사람의 클라이언트는 모두 NM_Client 일 수 있다. NetMode만으로 누구의 UI인지 구분할 수는 없다."
      },
      {
        "title": "연결 구조 — NetDriver와 NetConnection",
        "text": "연결 구조 — NetDriver와 NetConnection UNetConnection 은 통신 상대와의 연결 객체이고, UNetDriver 는 그 연결들을 소유하고 관리한다. NetDriver가 있는 쪽 관리하는 연결 서버 ClientConnections — 접속한 클라이언트들의 연결 배열 클라이언트 ServerConnection — 서버로 연결되는 포인터 서버의 NetDriver ClientConnections → 클라이언트 A 연결 → 클라이언트 B 연결 클라이언트 A의 NetDriver ServerConnection → 서버 연결 기본 게임 통신 구조에서 클라이언트끼리 상태를 전달할 때는 서버를 거친다. // UNetDriver의 연결 멤버 — 수업 메모 발췌 TObjectPtr<UNetConnection> ServerConnection; TArray<TObjectPtr<UNetConnection>> ClientConnections; 서버 NetDriver ClientConnections[연결 A] ←→ A의 ServerConnection ClientConnections[연결 B] ←→ B의 ServerConnection A·B의 클라이언트 NetDriver는 각각 서버 연결을 관리한다. NetDriver는 연결과 네트워크 송수신을 관리한다. 위 배열 표시는 연결을 구별하기 위한 예시이며, 고정 플레이어 번호나 배열 순서를 뜻하지 않는다. PC 한 대당 반드시 하나라고 세지 않고 월드와 드라이버의 용도를 구분한다. 서버의 Listen 경로와 클라이언트의 접속 경로도 같지 않다."
      },
      {
        "title": "멤버가 있어도 연결은 없을 수 있다",
        "text": "멤버가 있어도 연결은 없을 수 있다 멤버 연결이 없는 상태 ServerConnection 멤버는 선언돼 있지만 값은 nullptr. 서버 측에서도 nullptr이다. ClientConnections 배열은 존재하지만 접속자가 없으면 비어 있다. 멤버의 선언과 실제 값은 다르다. ServerConnection이라는 멤버가 있다고 해서 연결 객체까지 생성돼 있다는 뜻은 아니다."
      },
      {
        "title": "HP 판정은 서버, 화면 표시는 클라이언트",
        "text": "HP 판정은 서버, 화면 표시는 클라이언트 피해량이나 HP는 클라이언트가 보낸 값만으로 확정하지 않고, 서버에서 규칙과 요청 조건을 검사한다. 클라이언트는 전달받은 결과를 화면에 표시한다. 클라이언트: 입력·요청 서버: 요청 조건 확인과 게임 상태 결정 클라이언트: 전달받은 결과를 UI·효과·소리로 표시"
      },
      {
        "title": "Ownership — has-a·Attach·Authority와 구분",
        "text": "Ownership — has-a·Attach·Authority와 구분 관계 뜻 Owner / Ownership 이 Actor가 어떤 Actor를 소유자로 가리키는지. 플레이어의 연결을 찾는 데 사용 Owning Connection 소유 관계를 따라 도달한 PlayerController에 해당하는 네트워크 연결 has-a 객체가 다른 객체를 멤버·구성 요소로 가지는 설계 관계. Owner 자동 지정과 다름 Attach 공간적으로 부모에 붙이는 관계. SetOwner와 다른 작업 Authority Actor 상태를 결정할 권한. 클라이언트가 소유한다고 서버 권한이 넘어가는 것은 아님 무기 Actor Owner → Pawn Controller → PlayerController NetConnection → 해당 플레이어 연결 서버에서 플레이어의 Pawn을 무기의 Owner로 지정하는 예가 Weapon->SetOwner(Pawn); 이다. 실제 프로젝트 적용 코드가 아닌 관계 설명용 예시다. 붙이기만 하거나 포인터에 보관하기만 해서는 이 관계를 대신하지 않는다."
      },
      {
        "title": "GetNetConnection() — Owner에서 연결까지",
        "text": "GetNetConnection() — Owner에서 연결까지 아래는 10월 7일 메모에 남긴 엔진 코드의 핵심 흐름이다. 사용 중인 엔진 버전에 따라 구현은 다를 수 있다. UNetConnection* AActor::GetNetConnection() const { return Owner ? Owner->GetNetConnection() : nullptr; } UNetConnection* APawn::GetNetConnection() const { if (Controller) { return Controller->GetNetConnection(); } return Super::GetNetConnection(); } UNetConnection* APlayerController::GetNetConnection() const { return (Player != nullptr) ? NetConnection : nullptr; } 일반 Actor는 Owner의 GetNetConnection()을 호출한다. Pawn은 Controller가 있으면 그쪽 연결을 찾고, 없으면 부모 구현으로 넘어간다. PlayerController까지 도달하면 플레이어의 연결을 얻는다. 이 코드는 연결을 찾는 과정이다. Owner가 없다고 모든 복제·통신이 금지되는 것은 아니다. Owning Connection은 소유자 기준 복제 조건과 RPC 대상 등을 정할 때 사용한다. GetNetConnection()이 임의의 하위 Actor를 찾아 내려가는 함수도 아니다."
      },
      {
        "title": "실행 위치에서 헷갈리기 쉬운 점",
        "text": "실행 위치에서 헷갈리기 쉬운 점 메모에서 구분할 부분 정리 GameMode 서버에만 존재한다. 클라이언트의 GetGameMode()는 nullptr이므로 반환값을 검사한다. HasAuthority() Actor 기준 검사다. 월드의 실행 모드가 필요하면 GetNetMode()를 쓴다. 배경·Pawn 모든 객체가 모든 클라이언트에 자동 복제되는 것은 아니다. 맵 로드와 Actor 복제를 구분한다. UI·애니메이션 UI는 로컬 표시 중심. 애니메이션이 복제되지 않는다는 말과 서버에서 애니메이션을 절대 실행하지 않는다는 말은 다르다. 전용 서버 렌더링·로컬 입력이 없어도 판정에 필요한 게임 객체와 처리는 존재한다."
      }
    ]
  }
];
