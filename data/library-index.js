window.TIL_LIBRARY_INDEX = [
  {
    "id": "stl-foundation",
    "title": "C++ STL 정리 노트",
    "summary": "vector·list·map 등 컨테이너 사용법, 문자열, sort·find·reverse, 연산 비용과 선택 기준.",
    "kind": "file",
    "topic": "stl",
    "status": "종합 정리 노트",
    "source_name": "자료구조.html / data-structures-stl-lab-v3.html",
    "source_url": "data/guides/stl-reference.html",
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "topics": [
      "cpp",
      "stl"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "관련 Velog · STL과 vector 기초",
        "url": "https://velog.io/@jwh4410/7.17"
      },
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
        "label": "관련 Velog · map과 auto, range-for",
        "url": "https://velog.io/@jwh4410/7.28"
      },
      {
        "label": "연결 리스트·트리 등 자료구조 원리",
        "url": "#material=data-structures"
      },
      {
        "label": "탐색·DP·백트래킹 정리",
        "url": "#material=algorithm-techniques"
      },
      {
        "label": "자료구조·STL 원본 HTML",
        "url": "data/guides/structures-stl-lab.html"
      }
    ],
    "legacy_sections": {
      "stl-sequence": "vector — 인덱스 접근·뒤에 추가",
      "stl-associative": "set — 중복 없이 정렬",
      "stl-adaptor": "stack — 마지막에 넣은 값 꺼내기",
      "stl-algorithm": "string — 문자열 다루기",
      "concept-bigo": "Big-O 표기법",
      "stl-selection": "STL 컨테이너 선택 기준"
    },
    "toc_groups": [
      {
        "title": "순차 컨테이너",
        "start": "vector — 인덱스 접근·뒤에 추가"
      },
      {
        "title": "키로 찾는 컨테이너",
        "start": "set — 중복 없이 정렬"
      },
      {
        "title": "꺼내는 순서와 양쪽 접근",
        "start": "stack — 마지막에 넣은 값 꺼내기"
      },
      {
        "title": "문자열·STL 알고리즘",
        "start": "string — 문자열 다루기"
      },
      {
        "title": "STL 개념·복잡도·선택 기준",
        "start": "STL이란?"
      }
    ],
    "quick_links": [
      {
        "label": "vector",
        "section": "vector — 인덱스 접근·뒤에 추가"
      },
      {
        "label": "map",
        "section": "map — 키와 값 저장"
      },
      {
        "label": "Big-O",
        "section": "Big-O 표기법"
      }
    ],
    "file": "data/materials/stl-foundation.js",
    "outline": [
      {
        "title": "vector — 인덱스 접근·뒤에 추가",
        "text": "vector — 인덱스 접근·뒤에 추가 1. 개념 / 구조 vector 는 크기를 변화시켜가며 사용할 수 있는 동적 배열 이다. 원소가 연속적인 메모리에 저장된다. 인덱스로 임의 접근할 수 있다. 끝에 원소를 추가할 때 평균적으로 O(1)이다. capacity 가 부족하면 더 큰 공간을 확보하고 기존 원소를 이동할 수 있다. 2. size / capacity vector<int> vec; vec.size(); // 현재 원소 개수 vec.capacity(); // 현재 확보된 공간 vec.reserve(100); // capacity를 미리 확보 개념 의미 size 현재 들어 있는 원소의 개수 capacity 현재 확보된 저장 공간의 크기 reserve(n) capacity를 최소 n까지 확보. size는 변하지 않음 3. 주요 명령어 + Big-O 명령어 기능 Big-O push_back() 뒤에 추가 평균 O(1), 재할당 시 O(n) emplace_back() 뒤에서 객체를 생성하며 추가 평균 O(1), 재할당 시 O(n) pop_back() 마지막 원소 삭제 O(1) insert() 특정 위치에 삽입 O(n) erase() 특정 위치 삭제 O(n) operator[] 인덱스로 접근 O(1) at() 인덱스로 접근 + 범위 검사 O(1) empty() 비었는지 확인 O(1) clear() 모든 원소 삭제 O(n) size() 원소 개수 O(1) 4. 장점 / 단점 / 사용하기 좋은 때 장점: 인덱스 접근이 빠르고 캐시 효율이 좋다. 단점: 중간 삽입/삭제 시 뒤 원소를 이동해야 한다. 좋은 경우: 인덱스 접근이 필요하거나 끝에서 추가/삭제가 많은 경우 5. 탐색 / 뒤집기 find(vec.begin(), vec.end(), value); // 순차 탐색 reverse(vec.begin(), vec.end()); // 뒤집기 find() 는 O(n), reverse() 는 O(n)이다. 6. 알고리즘 예시: 그래프 vector<vector<int>> graph(4); graph[0].push_back(1); graph[0].push_back(2); 0번 정점에서 1번과 2번 정점으로 연결된 것을 인접 리스트로 표현한 것이다. {1, 2} 는 주소가 아니라 연결된 정점의 번호 를 저장한 것이다. 연산 예시와 주의사항 vector<int> v{4, 8, 12, 16}; v.push_back(7); v.insert(v.begin() + 1, 7); v.erase(v.begin() + 1); cout << v.size() << \" / \" << v.capacity(); vector의 capacity 증가 방식은 구현별로 달라진다."
      },
      {
        "title": "2차원 vector — 행 추가와 값 추가",
        "text": "2차원 vector — 행 추가와 값 추가 A.push_back(vector {1})은 바깥 vector에 새 행을 추가한다. A[i].push_back(1)은 이미 있는 i번째 행에 값을 추가한다. 이전 행의 [j-1]과 [j]를 더할 때는 두 인덱스가 모두 존재하는 범위만 순회한다. vector > A; A.push_back(vector {1}); // 첫 행 추가 A[0].push_back(1); // 첫 행에 값 추가 A[i]에 접근하기 전에 i번째 행이 있어야 한다. if로 값을 검사하더라도 없는 인덱스에 먼저 접근하면 범위 검사가 되지 않는다."
      },
      {
        "title": "vector 크기 — n+1칸이 필요한 경우",
        "text": "vector 크기 — n+1칸이 필요한 경우 F(0)부터 F(n)까지 저장하려면 n+1칸이 필요하다. n칸만 만들면 마지막 인덱스는 n-1이다. 자료형의 크기를 키워도 배열의 인덱스 범위는 늘어나지 않는다."
      },
      {
        "title": "list — 위치를 찾아 삽입·삭제",
        "text": "list — 위치를 찾아 삽입·삭제 1. 개념 / 구조 list 는 일반적으로 양방향 연결 리스트 이다. [10] ⇄ [20] ⇄ [30] 노드가 메모리상 연속되어 있을 필요가 없다. 각 노드는 앞/뒤 노드와 연결된다. 인덱스 임의 접근이 불가능하다. 위치를 가리키는 iterator를 이미 가지고 있다면 삽입/삭제가 효율적이다. 2. 주요 명령어 + Big-O 명령어 기능 Big-O push_back() 뒤 추가 O(1) push_front() 앞 추가 O(1) pop_back() 뒤 삭제 O(1) pop_front() 앞 삭제 O(1) insert(it) iterator 위치에 삽입 O(1)* erase(it) iterator 위치 삭제 O(1)* remove(value) 값을 찾아 삭제 O(n) find() 순차 탐색 O(n) reverse() 뒤집기 O(n) sort() 리스트 자체 정렬 O(n log n) * 해당 위치의 iterator를 이미 알고 있는 경우. 위치를 찾는 과정은 별도로 O(n)이 걸릴 수 있다. 3. 사용하기 좋은 때 중간 삽입/삭제가 많고 해당 위치를 iterator로 관리할 수 있으며 인덱스 접근이 중요하지 않을 때 연산 예시와 주의사항 list<int> a{4, 8, 12, 16}; a.insert(next(a.begin(), 1), 7); a.erase(next(a.begin(), 1)); for (int x : a) cout << x << ' '; iterator를 이미 알고 있을 때 삽입·삭제는 O(1)입니다. next(begin, n)처럼 위치를 찾는 비용은 O(n)일 수 있습니다."
      },
      {
        "title": "forward_list — 단방향 연결 리스트",
        "text": "forward_list — 단방향 연결 리스트 1. 개념 / 구조 forward_list 는 단방향 연결 리스트 이다. [10] → [20] → [30] 다음 노드 방향으로만 이동한다. list 보다 구조가 단순하다. 인덱스 접근이 불가능하다. 2. 주요 명령어 + Big-O 명령어 기능 Big-O push_front() 앞 추가 O(1) pop_front() 앞 삭제 O(1) insert_after() iterator 뒤에 삽입 O(1)* erase_after() iterator 뒤 원소 삭제 O(1)* remove() 값으로 삭제 O(n) reverse() 뒤집기 O(n) 3. 사용하기 좋은 때 양방향 이동이 필요 없고 앞쪽 또는 특정 노드 뒤에서 삽입/삭제하는 경우 연산 예시와 주의사항 forward_list<int> a{4, 8, 12, 16}; a.insert_after(a.begin(), 7); a.erase_after(a.begin()); for (int x : a) cout << x << ' '; forward_list에는 size()가 없습니다. 인덱스로 직접 접근할 수도 없습니다."
      },
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
        "text": "map — 키와 값 저장 1. 개념 / 구조 map 은 Key - Value 쌍을 저장하고 Key 기준으로 정렬한다. Key 중복 X Key 기준 정렬 Key로 Value 접근 균형 트리 계열로 구현된다. 2. 주요 명령어 + Big-O 명령어 기능 Big-O map[key] Key 접근. 없으면 새 원소를 삽입할 수 있음 O(log n) at(key) Key 접근. 없으면 예외 O(log n) insert() 삽입 O(log n) emplace() 생성 후 삽입 O(log n) erase(key) Key 삭제 O(log n) find() Key 탐색 O(log n) contains() Key 존재 확인 O(log n) 3. 사용하기 좋은 때 Key와 Value를 묶어 관리하고 Key 기준 정렬이나 탐색이 필요할 때 map<string, int> data; data[\"HP\"] = 100; 연산 예시와 주의사항 set<int> s{4, 8, 12}; s.insert(7); s.insert(8); // 중복 원소는 추가되지 않음 map<int, string> m{{4,\"A\"},{8,\"B\"}}; m[8] = \"C\"; // 기존 키의 값 갱신 s.erase(4); C++ 표준은 균형 트리의 구체적인 종류를 지정하지 않습니다. 구현에 따라 레드-블랙 트리를 흔히 사용합니다."
      },
      {
        "title": "unordered_map — 정렬 없이 키 검색",
        "text": "unordered_map — 정렬 없이 키 검색 1. 개념 / 구조 unordered_map 은 Hash Table 기반의 Key - Value 자료구조이다. Key 중복 X 정렬 X 평균적으로 빠른 Key 검색 2. 주요 명령어 + Big-O 명령어 기능 평균 / 최악 data[key] Key 접근 / 없으면 삽입 O(1) / O(n) insert() 삽입 O(1) / O(n) erase(key) 삭제 O(1) / O(n) find() Key 탐색 O(1) / O(n) contains() 존재 확인 O(1) / O(n) 3. 사용하기 좋은 때 정렬이 필요하지 않고 Key 검색을 많이 하는 경우 연산 예시와 주의사항 unordered_map<int, string> m; m[4] = \"A\"; m[9] = \"B\"; auto it = m.find(9); if (it != m.end()) cout << it->second; m.erase(9); 반복 순서는 정렬되지 않으며 일정한 순서를 기대할 수 없습니다. 평균 O(1)이지만 최악의 경우 O(n)이 될 수 있습니다."
      },
      {
        "title": "multimap — 같은 키 여러 개 저장",
        "text": "multimap — 같은 키 여러 개 저장 1. 개념 / 구조 multimap 은 하나의 Key에 여러 Value를 저장할 수 있으며 Key 기준으로 정렬한다. multimap<string, int> data; data.insert({\"A\", 10}); data.insert({\"A\", 20}); 2. 주요 명령어 + Big-O 명령어 기능 Big-O insert() 삽입 O(log n) erase(key) 해당 Key의 모든 원소 삭제 O(log n + k) find() Key 탐색 O(log n) count() Key 개수 O(log n + k) equal_range() 같은 Key의 범위 O(log n) 3. 사용하기 좋은 때 하나의 Key에 여러 데이터를 연결하면서 Key 정렬이 필요할 때 Key와 Value를 같이 비교해 정렬하고 싶다면 multiset<pair<...>, 비교함수> 같은 방법도 가능하다. 다만 Key-Value 자체가 목적이라면 map/multimap 이 보통 더 자연스럽다."
      },
      {
        "title": "stack — 마지막에 넣은 값 꺼내기",
        "text": "stack — 마지막에 넣은 값 꺼내기 1. 개념 / 구조 LIFO(Last In, First Out) — 후입선출 TOP ↓ [30] [20] [10] 2. 주요 명령어 + Big-O 명령어 기능 Big-O push() 맨 위에 추가 O(1) emplace() 맨 위에서 생성/추가 O(1) pop() 맨 위 삭제 O(1) top() 맨 위 확인 O(1) empty() 비었는지 확인 O(1) 3. 사용하기 좋은 때 괄호 짝 검사 계산기 DFS 되돌리기 / Undo 연산 예시와 주의사항 stack<int> s; s.push(4); s.push(8); s.push(12); int x = s.top(); s.pop(); stack은 컨테이너 어댑터입니다. 실제 저장소로는 기본적으로 deque 등을 사용합니다."
      },
      {
        "title": "queue — 먼저 넣은 값 꺼내기",
        "text": "queue — 먼저 넣은 값 꺼내기 1. 개념 / 구조 FIFO(First In, First Out) — 선입선출 front → [10][20][30] ← back 2. 주요 명령어 + Big-O 명령어 기능 Big-O push() 뒤에 추가 O(1) emplace() 뒤에서 생성/추가 O(1) pop() 앞 삭제 O(1) front() 앞 확인 O(1) back() 뒤 확인 O(1) empty() 비었는지 확인 O(1) 3. 사용하기 좋은 때 BFS 대기열 먼저 들어온 작업부터 처리해야 하는 경우 연산 예시와 주의사항 queue<int> q; q.push(4); q.push(8); q.push(12); int x = q.front(); q.pop(); queue도 컨테이너 어댑터이며 기본적으로 deque를 사용합니다. 인덱스 접근은 제공하지 않습니다."
      },
      {
        "title": "deque — 양쪽 끝에 추가·삭제",
        "text": "deque — 양쪽 끝에 추가·삭제 1. 개념 / 구조 Double Ended Queue — 양쪽 끝에서 삽입/삭제할 수 있다. 앞 ↔ [10][20][30][40] ↔ 뒤 2. 주요 명령어 + Big-O 명령어 기능 Big-O push_front() 앞 추가 O(1) push_back() 뒤 추가 O(1) pop_front() 앞 삭제 O(1) pop_back() 뒤 삭제 O(1) front() / back() 양 끝 확인 O(1) operator[] 인덱스 접근 O(1) 3. 장점 / 단점 / 사용하기 좋은 때 장점: 양쪽 끝의 삽입/삭제가 빠르고 인덱스 접근도 가능 단점: vector처럼 하나의 연속된 메모리 블록에 저장된다는 보장은 없음 좋은 경우: 양쪽에서 데이터를 넣고 빼는 경우, 슬라이딩 윈도우 연산 예시와 주의사항 deque<int> d{4, 8, 12}; d.push_front(7); d.push_back(7); d.pop_front(); cout << d[0]; deque는 인덱스 접근이 가능하지만 vector처럼 단일 연속 메모리 블록에 저장된다고 보장하지 않습니다."
      },
      {
        "title": "priority_queue — 우선순위에 따라 꺼내기",
        "text": "priority_queue — 우선순위에 따라 꺼내기 1. 개념 / 구조 우선순위가 높은 원소를 먼저 꺼내는 자료구조이다. priority_queue 는 Heap을 사용한다. Heap은 완전 이진 트리 형태를 유지한다. 배열 형태로 효율적으로 표현할 수 있다. 전체 원소가 정렬되어 있는 것은 아니다. priority_queue<int> maxPQ; // 기본: 큰 값 우선 priority_queue<int, vector<int>, greater<int>> minPQ; // 작은 값 우선 2. 주요 명령어 + Big-O 명령어 기능 Big-O push() 삽입 O(log n) emplace() 생성 후 삽입 O(log n) pop() 최상위 우선순위 삭제 O(log n) top() 최상위 우선순위 확인 O(1) empty() 비었는지 확인 O(1) 3. 사용하기 좋은 때 최소/최대값을 반복해서 꺼낼 때 Dijkstra 우선순위가 있는 작업 처리 연산 예시와 주의사항 priority_queue<int> pq; for (int x : {24,18,15,8,12,10}) pq.push(x); pq.push(32); // 입력값 예시 int greatest = pq.top(); pq.pop(); // 최소 힙: priority_queue<int, vector<int>, greater<int>> minPQ; priority_queue는 힙 기반으로 동작하며, 전체 원소를 순회하거나 정렬된 전체 내용을 얻는 인터페이스는 제공하지 않습니다."
      },
      {
        "title": "string — 문자열 다루기",
        "text": "string — 문자열 다루기 1. 개념 std::string 은 문자열을 저장하는 표준 컨테이너이다. 내부적으로 연속적인 문자 저장을 사용하며 인덱스로 접근할 수 있다. 2. 주요 명령어 + Big-O 명령어 기능 대략적인 Big-O str[index] 문자 접근 O(1) find() 문자열/문자 탐색 O(n) 수준 substr(pos, count) 부분 문자열 생성 O(count) reverse() 문자열 뒤집기 O(n) size() 문자열 길이 O(1) 3. 파싱 문자열을 원하는 단위로 나누어 데이터를 추출하는 작업이다. string str = \"HP:100\"; auto pos = str.find(':'); string key = str.substr(0, pos); string value = str.substr(pos + 1); 4. 뒤집기 reverse(str.begin(), str.end()); find() 는 위치를 반환하며 찾지 못하면 string::npos 를 반환한다."
      },
      {
        "title": "STL 알고리즘 — sort·find·reverse와 컨테이너별 정렬",
        "text": "STL 알고리즘 — sort·find·reverse와 컨테이너별 정렬 1. sort sort(vec.begin(), vec.end()); // 기본 오름차순 sort(vec.begin(), vec.end(), greater<>()); // 내림차순 일반적으로 O(n log n)이다. 2. find / reverse find(vec.begin(), vec.end(), value); // O(n) reverse(vec.begin(), vec.end()); // O(n) 3. 컨테이너별 정렬 sort(vec.begin(), vec.end()); // vector 등 Random Access Iterator가 필요한 경우 lst.sort(); // list는 자체 sort 사용 list 는 임의 접근(Random Access)이 불가능하기 때문에 일반적인 std::sort() 를 사용할 수 없고, 멤버 함수 list::sort() 를 사용한다. 연산 예시와 주의사항 vector<int> v{8, 4, 12, 7}; sort(v.begin(), v.end()); auto it = find(v.begin(), v.end(), 7); reverse(v.begin(), v.end()); sort에는 임의 접근 반복자가 필요하므로 list에서는 list.sort()를 사용해야 합니다."
      },
      {
        "title": "STL이란?",
        "text": "STL이란? 1. 핵심 구성 구성 역할 예시 Container 데이터 저장 vector, list, set, map Iterator 컨테이너의 원소를 가리키고 이동 begin(), end() Algorithm 정렬/탐색/변경 등의 작업 sort(), find(), reverse() vector<int> vec = {3, 1, 2}; sort(vec.begin(), vec.end());"
      },
      {
        "title": "Big-O 표기법",
        "text": "Big-O 표기법 1. 개념 입력 크기 n 이 커질 때 알고리즘의 실행 시간이나 필요한 공간이 어떻게 증가하는지를 나타내는 표기법이다. 표기 의미 예시 O(1) 입력 크기와 관계없이 일정 vector 인덱스 접근, stack top O(log n) 범위를 줄여가며 처리 set/map 탐색 O(n) 데이터 수에 비례 순차 탐색 O(n log n) 효율적인 정렬에서 자주 등장 sort() O(n²) 데이터 수의 제곱에 비례 중첩 반복문 Big-O는 실제 시간이 몇 초인지가 아니라, 입력 크기가 증가할 때 성능이 증가하는 정도를 표현한다."
      },
      {
        "title": "STL 컨테이너 선택 기준",
        "text": "STL 컨테이너 선택 기준 필요한 상황 추천 자료구조 이유 인덱스 접근 vector 임의 접근 O(1) 끝에서 추가/삭제 vector 평균 O(1) 양쪽 끝에서 추가/삭제 deque 양쪽 O(1) 중간 삽입/삭제 + 위치 iterator 보유 list 연결 변경으로 처리 중복 없는 정렬 데이터 set 정렬 + 중복 X 중복 없는 빠른 검색 unordered_set Hash Table 평균 O(1) Key-Value + 정렬 map Key 기준 정렬 Key-Value + 빠른 검색 unordered_map Hash Table 평균 O(1) Key 중복 + 정렬 multimap 같은 Key 여러 개 가능 후입선출 stack LIFO 선입선출 queue FIFO 최소/최대 우선 처리 priority_queue Heap"
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
    "quick_links": [
      {
        "label": "자료구조",
        "section": "TArray·TMap·TSet — 용도 비교"
      },
      {
        "label": "STL 비교",
        "section": "STL과 비교하기"
      },
      {
        "label": "문법 예제",
        "section": "기본 문법 예제 · 실행 전"
      }
    ],
    "file": "data/materials/unreal-containers.js",
    "outline": [
      {
        "title": "TArray·TMap·TSet — 용도 비교",
        "text": "TArray·TMap·TSet — 용도 비교 C++ STL Unreal 기본 용도 vector TArray 동적 배열 map TMap Key - Value set TSet 중복 없는 집합 Unreal의 컨테이너는 STL과 내부 구현이 완전히 같은 것은 아니지만, 기본적인 용도를 비교하면 이해하기 쉽다."
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
        "title": "컨테이너 예제 — 실행 전 확인할 항목",
        "text": "컨테이너 예제 — 실행 전 확인할 항목 사용 중인 Unreal 버전에서 예제 컴파일하기 TArray의 Num과 인덱스 범위 살펴보기 TMap에서 없는 key를 Find했을 때 반환값 살펴보기 TSet에 같은 값을 두 번 넣어보기"
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
        "title": "class — 멤버 선언과 접근 제어",
        "text": "class — 멤버 선언과 접근 제어 관련된 변수와 함수를 하나의 클래스로 묶는다. 접근 지정자 접근 범위 public 외부에서도 접근 private 클래스 내부에서 접근 protected 클래스 내부와 자식 클래스에서 접근"
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
        "title": "new·delete — 할당·해제와 메모리 문제",
        "text": "new·delete — 할당·해제와 메모리 문제 항목 의미 new / delete 동적 할당 / 해제 댕글링 포인터 해제된 메모리 주소 등을 계속 가리키는 포인터 메모리 누수 더 이상 쓰지 않는 할당 메모리를 해제하지 못하고 남김"
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
        "title": "함수 오버로딩 — 구분할 수 있는 조건",
        "text": "함수 오버로딩 — 구분할 수 있는 조건 차이 구분 가능 여부 매개변수 타입 가능 매개변수 개수 가능 반환 타입만 다름 불가능"
      },
      {
        "title": "함수 호출 — 타입 승격과 변환 예시",
        "text": "함수 호출 — 타입 승격과 변환 예시 승격도 표준 변환에 속한다. 위 표는 승격과 그 밖의 변환을 구분하는 예시이며 전체 오버로드 결정 규칙을 나열한 것은 아니다. 예 분류 char / short → int 원래 값을 int로 표현할 수 있는 경우 정수 승격 float → double 부동소수점 승격 int → double 일반적인 표준 변환"
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
    "quick_links": [
      {
        "label": "헤더 선언",
        "section": "AItem 헤더 — 상속과 generated.h 위치"
      },
      {
        "label": "컴포넌트 연결",
        "section": "SceneRoot·StaticMesh — 생성과 부착"
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
    "quick_links": [
      {
        "label": "감지→행동",
        "section": "감지에서 행동까지"
      },
      {
        "label": "분기 노드",
        "section": "Selector와 Sequence"
      },
      {
        "label": "공격 시점",
        "section": "공격 범위와 타격 시점 분리"
      }
    ],
    "file": "data/materials/project-priest-ai-notes.js",
    "outline": [
      {
        "title": "감지에서 행동까지",
        "text": "감지에서 행동까지 AI Perception: 감지 AIController: AI 제어 Blackboard: 판단용 상태 Behavior Tree: 행동 선택 Character: 이동·공격"
      },
      {
        "title": "Perception·Blackboard·Behavior Tree의 역할",
        "text": "Perception·Blackboard·Behavior Tree의 역할 요소 역할 AIController 캐릭터의 AI 제어, Behavior Tree 실행 AI Perception 외부 상황 감지 Blackboard 목표·위치·상태 보관. 직접 이동·공격하지 않음 Behavior Tree 상태와 조건을 보고 행동 실행 NavMesh 이동 가능한 영역"
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
    "summary": "서버·클래스별 역할, 접속 흐름과 Property Replication의 방향·Replicated·DOREPLIFETIME 설정.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "멀티플레이 개념 정리",
    "source_name": "CH4개인과제10.1발제.txt / UE_Multiplayer_Server_TIL.md / 10-5 서버.txt / 10-12숫자야구.txt",
    "source_url": "",
    "notice": "숫자 야구는 역할 구분을 설명하는 예시다. 과제 안내와 공부하며 남긴 질문은 관련 학습 기록에 있다.",
    "related_ids": [
      "20261001-study",
      "20261005-chatx",
      "20261012-chatx"
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
      },
      {
        "label": "RPC 호출 조건과 채팅 전달",
        "url": "#material=unreal-rpc"
      },
      {
        "label": "Epic · Replicate Actor Properties",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/replicate-actor-properties-in-unreal-engine"
      },
      {
        "label": "ChatX · 숫자 야구 판정·PlayerState 복제 코드",
        "url": "https://github.com/jwh2077/ChatX/commit/91e041f876bbb86074db51efa01a3c6d7c832f55"
      }
    ],
    "quick_links": [
      {
        "label": "서버 종류",
        "section": "P2P·Listen Server·Dedicated Server"
      },
      {
        "label": "클래스 역할",
        "section": "멀티플레이 클래스별 역할"
      },
      {
        "label": "프로퍼티 복제",
        "section": "Property Replication(프로퍼티 레플리케이션) — 방향과 설정"
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
        "title": "멀티플레이 클래스별 역할",
        "text": "멀티플레이 클래스별 역할 GameMode는 서버에서 게임 규칙을 담당하는 Actor다. 서버 프로세스 자체를 뜻하지 않는다. 클래스 담을 정보 서버·클라이언트 관계 GameMode 게임 규칙·승패 판정 서버에만 존재 GameState 라운드·팀 점수 등 전체 상태 서버에서 관리하고 클라이언트에 복제 PlayerState 닉네임·개인 점수 등 플레이어 정보 다른 플레이어에게 필요한 상태 공유 GameInstance 설정·맵 이동 후 유지할 로컬 데이터 각 프로세스에 따로 존재, 자동 동기화되지 않음 PlayerController 플레이어 입력·Pawn 조종 서버와 해당 플레이어의 클라이언트에 존재. 다른 클라이언트에는 기본적으로 복제되지 않음 Pawn / Character 플레이어가 조종하는 게임 속 객체 복제 설정과 클라이언트별 필요 여부에 따라 전달"
      },
      {
        "title": "복제 대상과 HasAuthority()",
        "text": "복제 대상과 HasAuthority() 공유할 필요가 없는 값을 모두 복제하지 않는다. HasAuthority()를 단순한 서버 여부 표시와 완전히 같은 뜻으로 사용하지 않는다. 항목 구분 복제 대상 GameState·PlayerState뿐 아니라 Actor·변수·Component 등도 대상이 될 수 있음 HasAuthority() 현재 Actor에 대한 Authority를 가지고 있는지 검사"
      },
      {
        "title": "Property Replication(프로퍼티 레플리케이션) — 방향과 설정",
        "text": "Property Replication(프로퍼티 레플리케이션) — 방향과 설정 프로퍼티 복제는 지정한 상태 값을 서버의 Authority에서 클라이언트의 Proxy로 전달한다. 클라이언트가 값을 바꿨다고 서버로 역방향 복제되지는 않는다. 서버에 처리를 요청하는 RPC와 구분한다. Actor의 bReplicates = true 설정 복제할 속성의 UPROPERTY() 에 Replicated 지정 Net/UnrealNetwork.h 포함 GetLifetimeReplicatedProps() 를 재정의하고 부모 함수를 호출한 뒤 DOREPLIFETIME(클래스명, 속성명) 으로 등록 모든 속성을 무조건 보내는 것이 아니라 공유할 속성을 선택한다. 이후 값의 변경을 전달하되, 전달 대상과 시점은 Actor의 관련성·복제 조건 등의 영향을 받는다. 매번 바뀐 중간 값이 모두 이벤트처럼 전달된다는 의미는 아니다. ChatX에서 복제한 값 CXPlayerState : PlayerNameString, CurrentGuessCount, MaxGuessCount CXPlayerController : NotificationText 91e041f 커밋에서 각 속성에 Replicated를 지정하고 GetLifetimeReplicatedProps의 DOREPLIFETIME에 등록했다. PlayerState의 플레이어 정보와 Controller 소유자에게 표시할 알림을 나눠 둔 예다. 위젯 자체를 복제하는 방식은 아니다."
      },
      {
        "title": "역할을 나누는 예 — 숫자 야구",
        "text": "역할을 나누는 예 — 숫자 야구 클라이언트: 숫자 입력 서버: 정답과 비교 서버: Strike / Ball 판정 공유 상태 전달 클라이언트: 결과 표시 GameMode에 둔 함수 GenerateSecretNumber : 1~9 배열에서 하나씩 뽑고 제거해 세 자리 정답 생성 IsGuessNumberString : 입력 후보의 길이·숫자·0 포함 여부 검사 JudgeResult : 같은 위치면 Strike, 다른 위치에 포함되면 Ball, 둘 다 없으면 OUT IncreaseGuessCount / JudgeGame / ResetGame : 시도 횟수 증가·게임 종료 판단·새 정답과 횟수 초기화 이 코드에서 더 점검할 부분 91e041f 기준으로 TSet에 넣은 문자 수를 검사하지 않아 중복 숫자가 통과할 수 있다. AllPlayerControllers에 접속한 Controller를 추가하는 코드도 빠져 있으며, JudgeGame과 ResetGame이 플레이어 순회 안에서 호출된다. 함수가 작성된 상태와 게임 전체의 정상 동작은 구분해야 한다."
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
        "title": "서버 디버깅 — 실행 위치와 로그 출력",
        "text": "서버 디버깅 — 실행 위치와 로그 출력 서버와 클라이언트 두 개를 나눠 그려 코드 실행 위치와 값의 이동을 따라간다. 전용 서버에는 화면이 없으므로 화면 메시지만 사용하지 않는다. UE_LOG와 프로젝트용 로그 카테고리로 출력 위치와 내용을 구분한다."
      }
    ]
  },
  {
    "id": "unreal-build-flow",
    "title": "C++·Unreal 빌드 과정",
    "summary": "cpp와 헤더가 컴파일·링크되는 순서, UBT·UHT의 역할, IntelliSense와 실제 빌드 결과의 차이. Development·DebugGame·Shipping과 Editor 대상 구분.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "빌드 과정 참고 · 2026-10-02",
    "source_name": "10.02.md · 로컬 보관 / 10-19.txt",
    "source_url": "",
    "notice": "기본 빌드 흐름을 정리한 자료다. IntelliSense 표시와 빌드 결과가 달랐던 사례는 관련 학습 기록에 남겼다.",
    "related_ids": [
      "20261002-chatx",
      "20261019-study"
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
      },
      {
        "label": "Unreal 공식 문서 · 빌드 구성",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/build-configurations-reference-for-unreal-engine?application_version=5.6"
      }
    ],
    "quick_links": [
      {
        "label": "빌드 순서",
        "section": "Unreal 빌드 순서"
      },
      {
        "label": "UHT 역할",
        "section": "UHT의 역할 — 리플렉션 코드 생성"
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
      },
      {
        "title": "빌드 구성 — Development·DebugGame·Shipping",
        "text": "빌드 구성 — Development·DebugGame·Shipping 구성 이름만으로 디버깅 가능 여부를 단정하지 않는다. Development와 Shipping도 디버그 심볼이 있으면 디버깅할 수 있지만, 최적화 때문에 코드 흐름을 따라가기 어려울 수 있다. Development: 개발 중 성능과 반복 작업에 맞춘 구성이다. 시간이 많이 드는 일부 최적화를 제외한 최적화를 사용한다. DebugGame: 게임 코드를 최적화하지 않아 게임 모듈을 디버깅하기 편한 구성이다. Shipping: 배포와 성능을 위한 구성이다. 콘솔 명령, 통계, 프로파일링 도구 등을 제한한다."
      },
      {
        "title": "Editor — 빌드 구성과 실행 대상 구분",
        "text": "Editor — 빌드 구성과 실행 대상 구분 Development와 DebugGame은 빌드 구성이고, Editor는 빌드 대상이다. Development Editor는 Development 구성으로 에디터에서 사용할 코드를 빌드한다. DebugGame Editor는 게임 코드를 디버깅하기 위한 구성과 Editor 대상을 조합한 이름이다."
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
      },
      {
        "label": "ChatX · Slate·SlateCore 추가와 채팅 입력 연결",
        "url": "https://github.com/jwh2077/ChatX/commit/4067d8093ea43a76d4bdf0d88827e0dbc62ea0ce"
      }
    ],
    "quick_links": [
      {
        "label": "모듈 추가",
        "section": "모듈 추가 — DependencyModuleNames"
      },
      {
        "label": "Public·Private",
        "section": "모듈 의존성 — Public과 Private"
      },
      {
        "label": "헤더 경로",
        "section": "IncludePaths — 검색 기준과 하위 경로"
      }
    ],
    "file": "data/materials/unreal-build-settings.js",
    "outline": [
      {
        "title": "Build.cs에서 설정할 항목 찾기",
        "text": "Build.cs에서 설정할 항목 찾기 Build.cs는 UBT에 모듈의 빌드 설정을 전달한다. 하려는 일 설정 다른 모듈의 기능 사용 DependencyModuleNames 헤더 검색 경로 추가 IncludePaths 다른 모듈에도 공개 Public 현재 모듈 안에서만 사용 Private"
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
    "source_name": "10-6.txt / 스크린샷 2026-10-06 153305.png / 10.07.txt / 10-11.txt / 10-12멀티쳇.txt",
    "source_url": "",
    "related_ids": [
      "20261006-chatx",
      "20261007-chatx"
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
      },
      {
        "label": "LocalRole·RemoteRole과 로컬 제어",
        "url": "#material=unreal-network-roles"
      },
      {
        "label": "RPC 호출 조건",
        "url": "#material=unreal-rpc"
      },
      {
        "label": "ChatX · IsLocalController와 출력 도우미",
        "url": "https://github.com/jwh2077/ChatX/commit/66da914e921c26205327343144a6778b1ca7a565"
      }
    ],
    "quick_links": [
      {
        "label": "객체 배치",
        "section": "서버와 각 클라이언트에 있는 객체"
      },
      {
        "label": "Owner",
        "section": "Ownership(오너십·오너쉽)과 패밀리 — 소유 관계"
      },
      {
        "label": "PIE 설정",
        "section": "전용 서버 테스트 — PIE 설정"
      }
    ],
    "file": "data/materials/unreal-network-testing.js",
    "outline": [
      {
        "title": "전용 서버와 두 클라이언트 — 각자 월드를 가진다",
        "text": "전용 서버와 두 클라이언트 — 각자 월드를 가진다 전용 서버는 게임의 판정과 상태를 관리하고, 플레이어 A와 B는 각각 클라이언트로 접속한다. 서버와 클라이언트는 서로 다른 월드와 객체를 가진다. 같은 PC에서 PIE로 테스트할 때도 이 구분은 유지된다. 전용 서버: 규칙·판정·상태 ├─ 연결 A ↔ 클라이언트 A: A의 입력·화면 └─ 연결 B ↔ 클라이언트 B: B의 입력·화면 다른 플레이어가 보이는 이유 A의 화면에 B가 보인다고 해서 B의 객체를 함께 사용하는 것은 아니다. 서버가 필요한 상태를 보내면 A의 월드에 있는 B의 복제본이 그 상태를 반영한다. 서버가 완성된 화면을 보내는 방식도 아니다."
      },
      {
        "title": "서버와 각 클라이언트에 있는 객체",
        "text": "서버와 각 클라이언트에 있는 객체 A와 B가 전용 서버에 접속한 경우 다. 아래 세 영역은 서로 다른 월드를 나타낸다. 여기서 “가지고 있다”는 것은 객체가 그 월드에 존재한다는 뜻이며, Actor의 Owner 관계와는 구분한다. 전용 서버 Actor GameMode PlayerController A · B Pawn A · B 맵의 배경 Actor ABP · UI A·B 캐릭터의 ABP 로컬 플레이어의 UI 없음 클라이언트 A Actor PlayerController A Pawn A · B의 복제본 맵의 배경 Actor ABP · UI A·B 캐릭터의 ABP A의 로컬 UI GameMode · PlayerController B 없음 클라이언트 B Actor PlayerController B Pawn A · B의 복제본 맵의 배경 Actor ABP · UI A·B 캐릭터의 ABP B의 로컬 UI GameMode · PlayerController A 없음 A와 B의 Pawn이 서로 보이도록 복제된 예시다. 실제 Actor 전달 범위는 복제 설정과 관련성에 따라 달라진다. 배경은 각 월드에서 맵을 로드해 존재할 수 있으며, 모두 서버에서 복제되는 것은 아니다. ABP는 서버와 클라이언트 양쪽에 존재하고, UI는 각 로컬 화면에 둔다. ABP와 UI 자체를 Actor로 분류한 것은 아니다. ABP가 존재하는 위치와 ABP 자체가 네트워크 복제되는지는 별개의 문제다."
      },
      {
        "title": "연결 구조 — NetDriver와 NetConnection",
        "text": "연결 구조 — NetDriver와 NetConnection NetDriver는 연결들을 관리하고, NetConnection은 통신 상대와의 연결을 나타낸다. 서버는 여러 클라이언트 연결을 관리하지만, 각 클라이언트는 서버 연결을 가진다. 전용 서버의 NetDriver ├─ ClientConnections: A와의 연결 │ ↕ │ A의 NetDriver.ServerConnection └─ ClientConnections: B와의 연결 ↕ B의 NetDriver.ServerConnection A에서 B로 게임 상태를 전달할 때는 서버를 거친다. 위의 A·B 표시는 상대를 구분한 것으로, 배열의 고정 인덱스나 플레이어 번호를 뜻하지 않는다. // UNetDriver의 연결 멤버 — 수업 메모 발췌 // 클라이언트에서 서버로 향하는 연결 TObjectPtr<UNetConnection> ServerConnection; // 서버에서 접속한 클라이언트들을 관리하는 배열 TArray<TObjectPtr<UNetConnection>> ClientConnections; 드라이버를 PC 한 대당 하나라고 세기보다는 월드와 드라이버의 용도를 구분한다. 서버의 Listen 경로와 클라이언트의 접속 경로도 같지 않다."
      },
      {
        "title": "ServerConnection — 멤버 선언과 실제 연결",
        "text": "ServerConnection — 멤버 선언과 실제 연결 ServerConnection 멤버가 선언되어 있다는 것과 실제 연결 객체를 가리킨다는 것은 다르다. ServerConnection == nullptr : 포인터에 연결 객체가 없다. 서버 쪽에서도 이 값은 nullptr이다. ClientConnections 가 빈 배열: 배열은 있지만 담긴 클라이언트 연결이 없다. “연결이 있다”는 말은 멤버 이름이 존재한다는 뜻이 아니라, 그 안에 실제 연결이 잡혀 있다는 뜻으로 읽어야 한다."
      },
      {
        "title": "Ownership(오너십·오너쉽)과 패밀리 — 소유 관계",
        "text": "Ownership(오너십·오너쉽)과 패밀리 — 소유 관계 Owner는 이 Actor의 소유자로 지정한 Actor다. 그 관계를 따라 플레이어의 PlayerController에 도달하면 해당 플레이어의 Owning Connection을 찾을 수 있다. 수업 메모에서 말하는 패밀리 는 PlayerController·Pawn·무기처럼 Owner로 이어지는 소유 관계를 가리킨다. 별도의 NetRole 이름은 아니며, 같은 소유 관계에 들어갔다고 모든 Actor가 AutonomousProxy가 되는 것은 아니다. 무기를 Pawn의 소유로 지정하는 예 // 관계 설명용 예시: 서버에서 소유 관계 설정 Weapon->SetOwner(Pawn); 무기 Actor → Owner인 Pawn → Pawn을 조종하는 PlayerController → 해당 플레이어의 NetConnection 이 예시는 프로젝트에 적용을 마쳤다는 뜻이 아니다. Owner를 지정한 뒤 연결을 찾는 코드 흐름은 다음 항목에서 이어진다. 무기를 가지고 있는 것과 Owner 지정은 다르다 캐릭터가 무기 포인터를 멤버로 보관하는 것은 has-a 관계로 볼 수 있다. 하지만 포인터에 넣는 것만으로 Unreal의 Owner가 자동 설정되지는 않는다. 무기를 손에 Attach 하는 것도 공간적으로 붙이는 작업이므로 별도다. Ownership과 Authority도 다르다. 어떤 클라이언트의 소유인지 정하는 것과 Actor 상태를 결정할 권한은 구분한다. Owner를 지정했다고 서버의 판정 권한이 클라이언트로 넘어가지는 않는다."
      },
      {
        "title": "GetNetConnection() — Owner에서 연결까지",
        "text": "GetNetConnection() — Owner에서 연결까지 아래는 10월 7일 메모에 남긴 엔진 코드의 핵심 흐름이다. 사용 중인 엔진 버전에 따라 구현은 다를 수 있다. 1. 일반 Actor는 Owner에게 연결을 묻는다 UNetConnection* AActor::GetNetConnection() const { return Owner ? Owner->GetNetConnection() : nullptr; } 2. Pawn은 Controller를 먼저 확인한다 UNetConnection* APawn::GetNetConnection() const { if (Controller) { return Controller->GetNetConnection(); } return Super::GetNetConnection(); } 3. PlayerController에서 연결을 얻는다 UNetConnection* APlayerController::GetNetConnection() const { return (Player != nullptr) ? NetConnection : nullptr; } 이 코드는 연결을 찾는 과정이다. Owner가 없다고 모든 복제·통신이 금지되는 것은 아니다. Owning Connection은 소유자 기준 복제 조건과 RPC 대상 등을 정할 때 사용한다. GetNetConnection()이 임의의 하위 Actor를 찾아 내려가는 함수도 아니다."
      },
      {
        "title": "서버인지 클라이언트인지 구분 — GetNetMode()",
        "text": "서버인지 클라이언트인지 구분 — GetNetMode() GetNetMode() 는 현재 월드의 실행 모드를 ENetMode 값으로 반환한다. 값 실행 형태 NM_Standalone 원격 연결 없이 서버·로컬 플레이 로직을 실행. 싱글·로컬 멀티플레이 NM_DedicatedServer 로컬 플레이어 없는 전용 서버 NM_ListenServer 서버 역할과 로컬 플레이를 함께 수행 NM_Client 서버에 접속해 입력·로컬 표현 등을 실행. 서버 전용 판정과 구분 NM_MAX 는 실행 모드로 사용하는 값이 아니다. 구분할 대상 사용하는 함수 월드가 서버인지 클라이언트인지 GetNetMode() 이 컨트롤러가 로컬 플레이어의 것인지 IsLocalController() 해당 Actor에 권한이 있는지 HasAuthority() 나와 다른 사람의 클라이언트는 모두 NM_Client 일 수 있다. NetMode만으로 누구의 UI인지 구분할 수는 없다."
      },
      {
        "title": "전용 서버 테스트 — PIE 설정",
        "text": "전용 서버 테스트 — PIE 설정 설정 위치: Editor Preferences → Level Editor → Play 설정 선택 / 용도 Play Net Mode Play as Client — 클라이언트 창과 백그라운드 전용 서버 실행 Run Under One Process 끄기 — 창마다 프로세스를 나눠 테스트 Always On Top 선택 사항. 테스트 창을 다른 창 위에 표시 설정할 때 참고 Run Under One Process를 켜도 멀티플레이 테스트는 가능하다. 빠르게 실행할 수 있지만 실제로 프로세스를 나눈 환경과는 차이가 있다. Play as Client는 전용 서버를 실행하므로 Launch Separate Server를 반드시 켤 필요는 없다. 이 옵션은 현재 모드에서 요구하지 않아도 서버를 따로 실행할 때 사용한다. 10월 6일 남긴 실제 설정 화면. 이미지를 누르면 크게 볼 수 있다. 늦은 참가 허용 — Allow Late Joining 언리얼 에디터에서 편집(Edit) → 에디터 개인 설정(Editor Preferences) 을 연다. 검색창에 Late Joining 을 입력한다. Allow Late Joining(늦은 참가 허용) 을 활성화한다. 플레이 버튼 옆 ▼ 에서 멀티플레이 설정을 확인한다. 에디터를 닫아도 빌드가 막힐 때 서버를 별도 프로세스로 실행했다면 에디터 종료 후에도 서버 프로세스가 남아 있는지 확인한다. 메모에 남긴 점검 항목이며, 모든 빌드 오류가 이 원인이라는 뜻은 아니다."
      },
      {
        "title": "내 화면에만 UI 표시 — IsLocalController()",
        "text": "내 화면에만 UI 표시 — IsLocalController() PlayerController에서 로컬 플레이어의 컨트롤러인지 검사한다. 로컬이 아니면 반환하고, 로컬일 때만 UI 처리를 이어간다. // PlayerController 멤버 함수 안에서 if (!IsLocalController()) { return; } // 이 로컬 플레이어의 UI 처리 !IsLocalController() 와 IsLocalController() == false 는 같은 조건이다. 리슨 서버의 방장도 로컬 플레이어다. 로컬 = 서버가 아님 으로 구분하면 안 된다. 두 화면에 같은 출력이 보일 때 PrintString의 디버그 출력인지, UI 위젯이 양쪽에 생성된 것인지 먼저 구분한다. 위젯이라면 생성 위치·소유 대상·중복 호출을 살펴본다. 프로세스를 나누는 설정만으로 UI 코드가 고쳐지지는 않는다. ChatX의 화면 출력과 서버 로그 66da914 커밋의 MyPrintString() 은 Client·ListenServer에서는 AddOnScreenDebugMessage를, DedicatedServer·Standalone에서는 UE_LOG를 사용한다. 이는 이 프로젝트의 출력 분기이며 Standalone에서 화면 출력을 못 한다는 뜻은 아니다. GetNetModeString() 은 Client·StandAlone·Server 문자열로 구분한다."
      },
      {
        "title": "HP 판정은 서버, 화면 표시는 클라이언트",
        "text": "HP 판정은 서버, 화면 표시는 클라이언트 피해량이나 HP는 클라이언트가 보낸 값만으로 확정하지 않고, 서버에서 규칙과 요청 조건을 검사한다. 클라이언트는 전달받은 결과를 화면에 표시한다. 클라이언트: 입력·요청 서버: 요청 조건 확인과 게임 상태 결정 클라이언트: 전달받은 결과를 UI·효과·소리로 표시"
      }
    ]
  },
  {
    "id": "unreal-network-roles",
    "title": "Unreal NetRole — LocalRole·RemoteRole과 로컬 제어",
    "summary": "Pawn의 역할을 서버·소유 클라이언트·다른 클라이언트에서 읽고, Possess 로그와 Authority·Ownership을 구분한다.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "멀티플레이",
    "source_name": "10-8-추가메모.txt / 10-11.txt",
    "source_url": "",
    "related_ids": [
      "20261008-chatx",
      "20261011-chatx"
    ],
    "references": [
      {
        "label": "연결과 Owner 관계",
        "url": "#material=unreal-network-testing"
      },
      {
        "label": "RPC 호출 조건",
        "url": "#material=unreal-rpc"
      },
      {
        "label": "Epic · Actor Role and Remote Role",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/actor-role-and-remote-role-in-unreal-engine"
      },
      {
        "label": "Epic · Actor Owner and Owning Connection",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/actor-owner-and-owning-connection-in-unreal-engine"
      },
      {
        "label": "ChatX · Pawn BeginPlay·PossessedBy 역할 로그",
        "url": "https://github.com/jwh2077/ChatX/commit/7ca0ed21157497e83f705322dcc5685f2acaf8f9"
      }
    ],
    "quick_links": [
      {
        "label": "LocalRole",
        "section": "LocalRole·RemoteRole — 어느 월드에서 보는가"
      },
      {
        "label": "Possess",
        "section": "Possess 전후 — 서버 로그에서 바뀐 값"
      },
      {
        "label": "소유·제어",
        "section": "Authority·Ownership·로컬 제어 구분"
      }
    ],
    "file": "data/materials/unreal-network-roles.js",
    "outline": [
      {
        "title": "LocalRole·RemoteRole — 어느 월드에서 보는가",
        "text": "LocalRole·RemoteRole — 어느 월드에서 보는가 NetMode 는 월드의 실행 모드, NetRole 은 Actor의 네트워크 역할이다. GetLocalRole() 은 현재 인스턴스의 역할, GetRemoteRole() 은 원격에서의 역할을 읽는다. 컴퓨터 전체에 붙는 역할이 아니다. 아래는 A가 조종하는 복제 Pawn을 세 월드에서 본 일반적인 예다. Proxy는 가짜 화면이 아니라 각 클라이언트 월드에 있는 Actor다. 서버의 Pawn A Local: Authority Remote: AutonomousProxy │ 복제 ├─ 클라이언트 A: 내 Pawn │ Local: AutonomousProxy │ Remote: Authority └─ 클라이언트 B: 다른 사람의 Pawn Local: SimulatedProxy Remote: Authority 서버의 RemoteRole만으로 모든 클라이언트의 역할을 같게 생각하면 안 된다. 같은 Pawn도 소유 클라이언트와 다른 클라이언트에서 역할이 다르다."
      },
      {
        "title": "Possess 전후 — 서버 로그에서 바뀐 값",
        "text": "Possess 전후 — 서버 로그에서 바뀐 값 10월 11일 Pawn에 남긴 로그다. 원본의 대괄호에 나란히 찍힌 LocalRole / RemoteRole을 줄로 나눴다. CXPawn::BeginPlay() Server Local: ROLE_Authority Remote: ROLE_SimulatedProxy CXPawn::PossessedBy() Server Local: ROLE_Authority Remote: ROLE_AutonomousProxy 빙의 전후에도 서버의 LocalRole은 Authority다. 이 로그에서 달라진 것은 RemoteRole이다. 모든 Pawn이 생성 즉시 AutonomousProxy가 되는 것은 아니다."
      },
      {
        "title": "Authority·Ownership·로컬 제어 구분",
        "text": "Authority·Ownership·로컬 제어 구분 HasAuthority() : 현재 Actor의 LocalRole이 Authority인지 검사한다. IsLocalController() : 해당 Controller가 로컬 제어인지 검사한다. IsLocallyControlled() : 해당 Pawn을 로컬에서 제어하는지 검사한다. 입력과 내 UI를 구분할 때 AutonomousProxy만 검사하면 리슨 서버의 방장 같은 경우를 놓칠 수 있다. 로컬 제어와 서버 권한은 동시에 성립할 수 있다. 무기 → Pawn → PlayerController로 Owner를 따라 연결을 찾는 것과, 무기 자체의 NetRole은 별개다. 소유 관계에 들어갔다고 무기와 파츠가 모두 AutonomousProxy가 되는 것은 아니다. Server RPC의 호출 조건도 역할 이름 하나가 아니라 소유 연결과 복제 설정을 함께 본다."
      },
      {
        "title": "RemoteRole이 None인 경우",
        "text": "RemoteRole이 None인 경우 클라이언트에서만 생성한 비복제 Actor는 LocalRole: Authority / RemoteRole: None 일 수 있다. 따라서 HasAuthority가 true라는 이유만으로 서버 월드라고 판단하지 않는다. 반대로 서버가 생성한 Actor라고 RemoteRole이 항상 None인 것도 아니다. 복제하는 AI Pawn처럼 SimulatedProxy로 전달되는 경우가 있다. RemoteRole은 플레이어 접속 여부를 판별하는 값이 아니다."
      }
    ]
  },
  {
    "id": "unreal-rpc",
    "title": "Unreal RPC — Server·Client·NetMulticast 호출 조건",
    "summary": "RPC 호출 조건과 소유 연결, PlayerController별 채팅 전달, Reliable·WithValidation 옵션.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "멀티플레이",
    "source_name": "10-12.txt / 스크린샷 2026-10-12 012554.png / 스크린샷 2026-10-12 013034.png / 10-12멀티쳇.txt",
    "source_url": "",
    "related_ids": [
      "20261012-chatx"
    ],
    "references": [
      {
        "label": "Owner에서 연결까지",
        "url": "#material=unreal-network-testing"
      },
      {
        "label": "NetRole과 로컬 제어",
        "url": "#material=unreal-network-roles"
      },
      {
        "label": "Epic · Remote Procedure Calls",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/remote-procedure-calls-in-unreal-engine"
      },
      {
        "label": "Epic · Actor Owner and Owning Connection",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/actor-owner-and-owning-connection-in-unreal-engine"
      },
      {
        "label": "Epic · TActorIterator",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/Engine/TActorIterator"
      },
      {
        "label": "ChatX · 채팅 RPC·접속 알림 코드",
        "url": "https://github.com/jwh2077/ChatX/commit/7ca0ed21157497e83f705322dcc5685f2acaf8f9"
      },
      {
        "label": "ChatX · GameMode로 채팅 판정 연결",
        "url": "https://github.com/jwh2077/ChatX/commit/91e041f876bbb86074db51efa01a3c6d7c832f55"
      },
      {
        "label": "프로퍼티 복제와 숫자 야구 상태",
        "url": "#material=unreal-multiplayer-basics"
      }
    ],
    "quick_links": [
      {
        "label": "호출·실행 위치",
        "section": "RPC를 호출하는 곳과 실행되는 곳"
      },
      {
        "label": "소유 연결",
        "section": "소유 연결에 따른 RPC 실행 조건"
      },
      {
        "label": "선언·구현",
        "section": "선언·구현 — UFUNCTION과 _Implementation"
      }
    ],
    "file": "data/materials/unreal-rpc.js",
    "outline": [
      {
        "title": "RPC를 호출하는 곳과 실행되는 곳",
        "text": "RPC를 호출하는 곳과 실행되는 곳 RPC는 네트워크를 통해 다른 곳에서 함수를 실행하도록 요청하는 방식이다. Server 와 Client 는 호출 출발지가 아니라 실행 방향을 나타낸다. 메모에서 다룬 세 종류는 다음처럼 구분한다. 소유 클라이언트의 Server RPC → 서버 서버의 Client RPC → Actor의 소유 클라이언트 서버의 NetMulticast → 서버 + 관련 클라이언트 원격 호출에는 Actor와 필요한 컴포넌트의 복제 설정이 필요하다. 소리·효과 같은 일시적인 이벤트뿐 아니라 서버에 처리를 요청할 때도 쓴다."
      },
      {
        "title": "소유 연결에 따른 RPC 실행 조건",
        "text": "소유 연결에 따른 RPC 실행 조건 클라이언트에서 Server RPC 자신이 소유한 복제 Actor에서 요청한다. 다른 클라이언트 소유 Actor나 소유 연결이 없는 Actor를 통해 보낸 요청은 서버로 전달되지 않는다. 서버에서 Client RPC 해당 Actor의 Owning Connection에 연결된 클라이언트가 대상이다. 서버 소유 또는 연결이 없는 경우에는 서버에서 실행되므로, Client라는 이름만으로 원격 클라이언트 실행을 보장하지 않는다. NetMulticast 서버에서 호출하면 서버와 그 Actor가 관련 있는 클라이언트에서 실행한다. 클라이언트에서 호출하면 호출한 클라이언트에서만 실행한다. PlayerController는 기본적으로 서버와 소유 클라이언트에만 있으므로 전체 플레이어에게 보내는 방송 경로로 생각하면 안 된다. Owner가 없다는 것과 서버가 Authority를 갖는다는 것은 서로 다른 기준이다. Owner는 Pawn 등을 거쳐 PlayerController로 이어질 수도 있어 SetOwner(PlayerController)를 직접 호출하는 형태만 가능한 것은 아니다."
      },
      {
        "title": "전체 채팅 전달 — PlayerController마다 Client RPC 호출",
        "text": "전체 채팅 전달 — PlayerController마다 Client RPC 호출 서버의 PlayerController A에서 NetMulticast를 호출해도, PlayerController A가 없는 클라이언트 B에는 전달되지 않는다. 채팅 메모의 코드는 서버에서 각 PlayerController를 찾아 Client RPC를 호출한다. 클라이언트 A → Server RPC → 서버 ├ PlayerController A의 Client RPC → 클라이언트 A └ PlayerController B의 Client RPC → 클라이언트 B 채팅 전달을 처음 연결한 7ca0ed2 커밋의 함수다. 이후 숫자 야구 단계에서는 서버의 처리를 GameMode로 옮겼다. void ACXPlayerController::ServerRPCPrintChatMessageString_Implementation( const FString& InChatMessageString) { for (TActorIterator It(GetWorld()); It; ++It) { ACXPlayerController* CXPlayerController = *It; if (IsValid(CXPlayerController) == true) { CXPlayerController->ClientRPCPrintChatMessageString( InChatMessageString); } } }"
      },
      {
        "title": "TActorIterator — 배열 대신 월드의 Actor 순회",
        "text": "TActorIterator — 배열 대신 월드의 Actor 순회 TActorIterator<ACXPlayerController> It(GetWorld()) 는 지정한 월드에서 해당 클래스의 Actor를 순회한다. 헤더는 EngineUtils.h 다. It : 현재 가리킬 Actor가 있는지 검사 ++It : 다음 Actor로 이동 *It : 현재 Actor 포인터를 꺼냄 for (auto Item : Items) 가 이미 가진 컨테이너의 원소를 순회하는 것과 달리, 이 예시는 월드에서 PlayerController를 찾는다. 순회 대상이 다르며 클라이언트에서 돌린다고 서버의 모든 PlayerController를 찾을 수 있는 것은 아니다."
      },
      {
        "title": "숫자 야구로 확장 — Server RPC에서 GameMode로 전달",
        "text": "숫자 야구로 확장 — Server RPC에서 GameMode로 전달 91e041f 커밋에서는 ServerRPCPrintChatMessageString_Implementation() 이 GameMode를 가져와 PrintChatMessageString(this, InChatMessageString) 을 호출한다. 메시지의 숫자 검사·판정과 각 PlayerController로 보내는 처리는 GameMode에 둔다. 로컬 Controller: 플레이어 정보와 입력을 묶어 Server RPC 요청 서버 Controller: GameMode에 보낸 플레이어와 메시지 전달 GameMode: 숫자 입력이면 판정·횟수 처리, 아니면 일반 채팅 처리 각 Controller의 Client RPC: 해당 클라이언트에 결과 출력 이 단계의 게임 규칙 코드는 아직 점검할 부분이 있다. 복제 문서의 숫자 야구 예시에서 작성 범위와 주의점을 함께 볼 수 있다."
      },
      {
        "title": "접속 알림 — GameState의 NetMulticast 사용",
        "text": "접속 알림 — GameState의 NetMulticast 사용 접속 알림은 GameMode::OnPostLogin() 에서 GameState::MulticastRPCBroadcastLoginMessage() 를 호출한다. PlayerController 하나의 소유 클라이언트로 보내는 경로와 달리, GameState를 통해 접속 알림을 전달하는 구조다. ChatX 구현은 HasAuthority() == false 인 곳에서만 로컬 PlayerController를 얻어 출력한다. 전용 서버 실습 코드이며, 이 조건 그대로라면 리슨 서버 호스트의 출력 분기는 실행되지 않는다. GetPlayerController(GetWorld(), 0) 의 0은 서버 번호가 아니라 해당 월드의 플레이어 인덱스다."
      },
      {
        "title": "선언·구현 — UFUNCTION과 _Implementation",
        "text": "선언·구현 — UFUNCTION과 _Implementation 아래는 선언 형태를 보여 주는 예시다. 프로젝트에 적용을 끝낸 코드가 아니다. UFUNCTION(Server, Reliable) void ServerRequest(); // .cpp: 실제 처리 함수 void AMyActor::ServerRequest_Implementation() { // 서버 처리 } 호출할 때는 ServerRequest() 를 사용한다. _Implementation을 직접 부르면 RPC 전달 경로를 거치지 않는 일반 함수 호출이 된다."
      },
      {
        "title": "Unreliable·Reliable — 전달 보장과 비용",
        "text": "Unreliable·Reliable — 전달 보장과 비용 Unreliable 이 기본값이며 전달을 보장하지 않는다. Reliable 은 수신 확인까지 재전송하므로 비용이 든다. 모든 반복 호출을 Reliable로 지정하기보다 전달이 필요한 이벤트인지 구분한다. Reliable을 붙여도 소유 연결이 잘못된 호출이 유효해지지는 않는다. 연결이 끊어진 상황까지 무조건 실행된다는 뜻도 아니다."
      },
      {
        "title": "WithValidation — 검증 실패와 일반 거절",
        "text": "WithValidation — 검증 실패와 일반 거절 클라이언트의 Server RPC 요청 → 서버의 _Validate() true → _Implementation() false → 호출 클라이언트 연결 종료 WithValidation 을 지정하면 같은 매개변수를 받는 bool 반환형 _Validate를 구현한다. false는 단순히 동작 한 번을 취소하는 결과가 아니므로 주의한다. 일반적인 게임 조건 불충족을 처리할 때는 이 차이를 고려한다. 서버에서 실행된다고 입력값이 저절로 안전해지는 것은 아니다. 허용 범위와 게임 규칙은 서버 코드에서 검사한다."
      }
    ]
  },
  {
    "kind": "note",
    "topic": "ds",
    "topics": [
      "ds"
    ],
    "publication": "reference",
    "status": "개념 참고",
    "source_url": "data/guides/algorithm-lab.html",
    "related_ids": [],
    "id": "algorithm-techniques",
    "title": "알고리즘 기법 — 탐색·DP·백트래킹",
    "summary": "선형·이진 탐색, DFS·BFS, 완전 탐색, DP, 그리디, 백트래킹과 재귀의 사용 조건·C++ 예제·복잡도.",
    "source_name": "algorithm-learning-lab-v3.html",
    "notice": "아래 코드는 개념을 설명하는 참고 예제다. 실제 제출 코드와 결과는 관련 문제 풀이 기록에서 볼 수 있다.",
    "references": [
      {
        "label": "자료구조 원리",
        "url": "#material=data-structures"
      },
      {
        "label": "C++ STL 사용법",
        "url": "#material=stl-foundation"
      },
      {
        "label": "Search Insert Position · 내 풀이",
        "url": "#algorithm=lc-35"
      },
      {
        "label": "Minesweeper · 내 풀이",
        "url": "#algorithm=lc-529"
      },
      {
        "label": "Rotting Oranges · 내 풀이",
        "url": "#algorithm=lc-994"
      },
      {
        "label": "피보나치 수 · 내 풀이",
        "url": "#algorithm=pg-12945"
      },
      {
        "label": "N-Queens · 내 풀이",
        "url": "#algorithm=lc-51"
      },
      {
        "label": "Binary Tree Paths · 내 풀이",
        "url": "#algorithm=lc-257"
      },
      {
        "label": "알고리즘 원본 HTML",
        "url": "data/guides/algorithm-lab.html"
      }
    ],
    "quick_links": [
      {
        "label": "DFS·BFS",
        "section": "깊이 우선 탐색 (DFS)"
      },
      {
        "label": "DP",
        "section": "동적 계획법 (DP)"
      },
      {
        "label": "백트래킹",
        "section": "백트래킹 (Backtracking)"
      }
    ],
    "toc_groups": [
      {
        "title": "탐색",
        "start": "선형 탐색 (Linear Search)"
      },
      {
        "title": "문제 해결 전략",
        "start": "동적 계획법 (DP)"
      },
      {
        "title": "호출 구조",
        "start": "재귀 함수 (Recursion)"
      }
    ],
    "file": "data/materials/algorithm-techniques.js",
    "outline": [
      {
        "title": "선형 탐색 (Linear Search)",
        "text": "선형 탐색 (Linear Search) 배열의 각 원소를 앞에서부터 방문하며 조건을 검사합니다. 목표값 이상인 첫 인덱스에 도달하면 반환합니다. 앞에서부터 확인 → 조건 만족 시 반환 → 끝까지 없으면 배열 길이 반환 사용 조건 정렬 여부에 관계없이 처음부터 순서대로 확인 대상이 앞에 있으면 빨리 끝나지만 뒤에 있으면 모두 살펴봄 작은 비정렬 목록에서 ID·이름 검색 정렬된 배열의 첫 조건 충족 위치 확인 C++ 참고 예제 int searchInsert(vector<int>& nums, int target) { for (int i = 0; i < nums.size(); ++i) { if (nums[i] >= target) return i; } return nums.size(); } 비용과 주의사항 구분 비용 조건 최선 O(1) 첫 원소가 조건에 맞는 경우 최악 O(n) 마지막 원소까지 확인 추가 공간 O(1) 인덱스만 유지 여기서는 정렬된 배열의 삽입 위치를 찾는 예시입니다. 일반적인 선형 탐색은 배열 정렬이 필수는 아닙니다."
      },
      {
        "title": "이진 탐색 (Binary Search)",
        "text": "이진 탐색 (Binary Search) 현재 탐색 범위의 가운데 값을 비교하고, 목표값이 있을 수 없는 절반을 제외합니다. 찾지 못한 경우 lower_bound 형태로 삽입 위치를 얻을 수도 있습니다. 정렬된 배열 → 중간값 비교 → 가능한 절반만 남김 → 삽입 위치 반환 사용 조건 정렬 또는 단조성 조건이 있어야 함 매번 가능한 범위의 절반가량을 버림 정렬된 점수표에서 기준값 이상인 첫 위치 찾기 정렬된 상품 가격 목록에서 검색 범위 좁히기 C++ 참고 예제 int low = 0, high = nums.size(); while (low < high) { int mid = low + (high-low)/2; if (nums[mid] < target) low = mid+1; else high = mid; } return low; // 삽입 위치 비용과 주의사항 구분 비용 조건 일반적인 탐색 O(log n) 범위를 반복해서 절반으로 줄임 추가 공간 O(1) 반복문 구현 기준 사전 정렬 O(n log n) 입력이 정렬돼 있지 않다면 별도 비용 배열이 정렬되어 있어야 합니다. 이 예시는 목표값 이상인 첫 위치를 찾는 lower_bound 방식입니다."
      },
      {
        "title": "깊이 우선 탐색 (DFS)",
        "text": "깊이 우선 탐색 (DFS) 한 정점을 방문한 뒤 방문하지 않은 인접 정점으로 내려갑니다. 더 갈 곳이 없으면 호출 스택을 따라 돌아옵니다. 방문 표시 → 미방문 이웃으로 재귀 → 갈 곳이 없으면 이전 호출로 반환 사용 조건 현재 갈래를 끝까지 들어간 뒤 돌아옴 그래프의 순환을 만나면 방문 기록이 필요 연결된 섬·영역의 크기 계산 트리 노드를 재귀로 전체 순회 C++ 참고 예제 void dfs(int u) { visited[u] = true; for (int v : graph[u]) { if (!visited[v]) dfs(v); } } 비용과 주의사항 구분 비용 조건 그래프 전체 탐색 O(V+E) 정점 V개·간선 E개 (인접 리스트) 방문 기록 O(V) 방문 배열 재귀 스택 최대 O(V) 최악 깊이 V인 경우 그래프에 순환이 있다면 visited 검사로 무한 재방문을 막아야 합니다. 방문 순서는 인접 정점의 나열 순서에 따라 달라집니다."
      },
      {
        "title": "너비 우선 탐색 (BFS)",
        "text": "너비 우선 탐색 (BFS) 시작점을 큐에 넣고, 꺼낸 정점에서 새로 발견한 이웃을 큐 뒤에 추가합니다. 선입선출(FIFO)이므로 가까운 단계부터 처리됩니다. 시작점 방문 표시·큐 등록 → 앞에서 꺼냄 → 미방문 이웃 표시·등록 → 반복 사용 조건 큐를 이용해 먼저 발견한 정점부터 처리 간선 비용이 같을 때 단계 수가 최단 거리 격자에서 최소 이동 횟수 구하기 감염·불·물 같은 확산 현상의 단계별 처리 C++ 참고 예제 queue<int> q; q.push(start); visited[start] = true; while (!q.empty()) { int u = q.front(); q.pop(); for (int v : graph[u]) { if (!visited[v]) { visited[v] = true; q.push(v); } } } 비용과 주의사항 구분 비용 조건 그래프 전체 탐색 O(V+E) 정점 V개·간선 E개 (인접 리스트) 큐·방문 기록 O(V) 최악 V개 정점 보관 격자 예제 O(R×C) 행 R·열 C의 각 칸을 최대 한 번 방문 이 예시는 정점을 큐에 넣을 때 방문 표시를 하여 중복 등록을 방지합니다. 최단 거리 성질은 간선 비용이 동일할 때 적용됩니다."
      },
      {
        "title": "완전 탐색 (Brute Force)",
        "text": "완전 탐색 (Brute Force) 가능한 모든 후보를 차례로 만들어 조건을 검사합니다. 이 예시는 3개 스위치 중 정확히 2개가 켜진 경우를 찾습니다. 후보 생성 → 조건 검사 → 결과 기록 → 다음 후보 사용 조건 가능한 후보를 모두 생성해 검사 정답을 놓치지 않지만 후보 수가 매우 많아질 수 있음 작은 입력에서 정답 기준 구현 만들기 스위치 n개의 모든 ON/OFF 패턴 검사 C++ 참고 예제 for (int mask = 0; mask < (1<<3); ++mask) { int cnt = 0; for (int i = 0; i < 3; ++i) if (mask & (1<<i)) ++cnt; if (cnt == 2) { // 조건 만족 } } 비용과 주의사항 구분 비용 조건 이진 선택 n개 O(n·2ⁿ) 2ⁿ개의 후보마다 n칸 검사 반복 열거의 추가 공간 O(1) 마스크만 유지할 경우 후보 저장 O(2ⁿ) 모든 후보를 보관한다면 별도 비용 후보 수뿐 아니라 후보 하나를 검사하는 비용도 함께 센다. n개의 스위치를 모두 확인하는 아래 방식은 O(n·2ⁿ)이다."
      },
      {
        "title": "동적 계획법 (DP)",
        "text": "동적 계획법 (DP) 큰 문제의 답이 작은 문제의 답에 의존할 때, 이미 구한 값을 저장해 반복 계산을 줄입니다. 아래는 F(n)=F(n−1)+F(n−2)를 아래에서부터 계산하는 Bottom-Up 방식입니다. 기저값 저장 → 작은 문제부터 계산 → 이전 답 재사용 → 결과 반환 사용 조건 작은 문제의 답을 저장해 반복 계산 감소 메모이제이션(Top-Down) 또는 테이블(Bottom-Up)로 구현 피보나치·계단 오르기 계산 게임 승패·최소 비용·경우의 수 상태 계산 C++ 참고 예제 vector<int> dp(n+1); dp[0] = 0; dp[1] = 1; for (int i = 2; i <= n; ++i) { dp[i] = dp[i-1] + dp[i-2]; } return dp[n]; 비용과 주의사항 구분 비용 조건 피보나치 Bottom-Up O(n) F(0)부터 F(n)까지 계산 테이블 공간 O(n) n+1개 결과 저장 공간 최적화 O(1) 직전 두 값만 필요하다면 가능 문제를 쪼개는 것만으로 DP는 아닙니다. 작은 문제의 정답을 저장해 재사용하는 구조가 중요합니다. 이 코드는 피보나치에 대한 예시입니다. 예제는 n ≥ 1을 전제로 하며, 큰 값에서는 자료형의 범위도 확인해야 한다."
      },
      {
        "title": "그리디 (Greedy)",
        "text": "그리디 (Greedy) 매 단계에서 현재 기준으로 가장 좋아 보이는 선택을 합니다. 여기서는 4·3·1원 동전으로 목표 금액을 만들 때 가능한 가장 큰 동전을 선택합니다. 현재 최선 선택 → 남은 문제 갱신 → 반복 4·3·1원으로 6원: 4+1+1 (3개) / 최적: 3+3 (2개) 사용 조건 매 순간 가장 유리해 보이는 선택을 즉시 확정 국소 최적이 전체 최적을 보장하는 조건을 검증해야 함 활동 선택(끝나는 시간이 빠른 일정부터) 특정 동전 체계에서 거스름돈 최소 개수 계산 C++ 참고 예제 vector<int> coins = {4,3,1}; for (int c : coins) { while (amount >= c) { amount -= c; chosen.push_back(c); } } 비용과 주의사항 구분 비용 조건 단순 동전 예제 O(k+m) 동전 종류 k와 선택된 동전 수 m 선택 결과 저장 O(m) 선택한 동전을 모두 담을 때 동전 정렬 포함 O(k log k) 필요 시 내림차순 정렬 추가 항상 전체 최적해를 보장하지는 않습니다. 예를 들어 6원에서 그리디는 4+1+1(3개), 최적해는 3+3(2개)입니다. 동전 종류와 구현 방식에 따라 복잡도는 달라집니다."
      },
      {
        "title": "백트래킹 (Backtracking)",
        "text": "백트래킹 (Backtracking) 가능한 선택을 하나 적용하고 더 깊이 탐색합니다. 조건을 어기거나 탐색을 마치면 선택을 취소하여 다른 후보를 시도합니다. 후보 검사 → 선택 → 다음 단계 재귀 → 선택 취소 → 다음 후보 사용 조건 후보 선택 뒤 재귀 탐색하고 끝나면 원상 복구 가능성이 없는 분기는 더 확장하지 않고 가지치기 N-Queens에서 퀸의 충돌 없는 배치 순열·조합과 제약 충족 문제 풀이 C++ 참고 예제 void solve(int row) { if (row == n) { save(); return; } for (int col = 0; col < n; ++col) { if (!safe(row,col)) continue; place(row,col); solve(row+1); remove(row,col); } } 비용과 주의사항 구분 비용 조건 탐색 시간 문제에 따라 지수·팩토리얼 수준 후보 수와 가지치기에 크게 좌우됨 호출 스택 O(n) 깊이가 n일 때 체스판 저장 O(n²) n×n 보드를 직접 유지한다면 예제의 safe·place·remove·save 함수는 공격 범위 검사, 배치, 복구, 결과 저장을 나타내는 보조 함수다. 시간 복잡도는 문제와 가지치기에 따라 달라진다."
      },
      {
        "title": "재귀 함수 (Recursion)",
        "text": "재귀 함수 (Recursion) 함수가 자기 자신을 호출하는 방식입니다. 각 호출마다 별도의 실행 문맥이 스택에 쌓이고, 종료 조건에 도달하면 가장 나중에 호출된 함수부터 반환됩니다. fact(3) → fact(2) → fact(1) 6 ← 2 ← 1 사용 조건 자기 자신을 호출하며 문제를 더 작은 입력으로 만듦 종료 조건에 도달하면 호출 역순으로 반환 폴더·트리의 계층 순회 DFS·분할 정복·백트래킹 작성 C++ 참고 예제 int fact(int n) { if (n <= 1) return 1; return n * fact(n-1); } 비용과 주의사항 구분 비용 조건 팩토리얼 예제 시간 O(n) n부터 1까지 한 번씩 호출 팩토리얼 호출 공간 O(n) 호출 스택 깊이 일반 재귀 시간 문제별 상이 중복 호출이 많으면 더 커짐 종료 조건이 없거나 깊이가 너무 깊으면 스택 오버플로가 발생할 수 있습니다. 모든 재귀 알고리즘의 시간 복잡도가 O(n)인 것은 아닙니다."
      }
    ]
  },
  {
    "kind": "note",
    "topic": "ds",
    "topics": [
      "ds"
    ],
    "publication": "reference",
    "status": "개념 참고",
    "source_url": "data/guides/structures-stl-lab.html",
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "id": "data-structures",
    "title": "자료구조 원리 — 연결 리스트·트리·힙",
    "summary": "연속·연결 저장, 노드와 포인터, 이진 트리·BST·힙·해시·그래프의 동작과 탐색.",
    "source_name": "자료구조.html / data-structures-stl-lab-v3.html",
    "references": [
      {
        "label": "관련 Velog · STL과 vector 기초",
        "url": "https://velog.io/@jwh4410/7.17"
      },
      {
        "label": "관련 Velog · STL vector와 map 복습",
        "url": "https://velog.io/@jwh4410/7.27"
      },
      {
        "label": "관련 Velog · map과 auto, range-for",
        "url": "https://velog.io/@jwh4410/7.28"
      },
      {
        "label": "C++ STL 사용법",
        "url": "#material=stl-foundation"
      },
      {
        "label": "자료구조·STL 원본 HTML",
        "url": "data/guides/structures-stl-lab.html"
      },
      {
        "label": "DFS·BFS 등 탐색 기법",
        "url": "#material=algorithm-techniques"
      }
    ],
    "legacy_sections": {
      "graph-tree": "그래프 — 정점과 간선"
    },
    "quick_links": [
      {
        "label": "연결 리스트",
        "section": "단일 연결 리스트"
      },
      {
        "label": "트리",
        "section": "트리 — 부모와 자식 관계"
      },
      {
        "label": "힙",
        "section": "힙"
      }
    ],
    "file": "data/materials/data-structures.js",
    "outline": [
      {
        "title": "자료구조",
        "text": "자료구조 1. 개념 자료구조는 데이터를 저장, 삽입, 삭제, 접근, 탐색 등 효율적으로 관리하기 위한 방법이다."
      },
      {
        "title": "메모리 — 연속 저장과 연결 저장",
        "text": "메모리 — 연속 저장과 연결 저장 1. 연속적인 저장 데이터를 서로 붙어 있는 연속된 메모리 공간에 저장한다. [10][20][30][40] 예: 배열, vector 2. 불연속적인 저장 데이터가 메모리상에서 서로 붙어 있지 않아도 되며, 노드와 포인터 등을 이용해 연결한다. [10] → [20] → [30] 예: list , 연결 기반 Tree 연속적인 저장과 인덱스 접근 가능 여부는 같은 개념이 아니다. 저장 방식과 접근 방식을 구분해서 생각한다."
      },
      {
        "title": "배열과 연속 저장",
        "text": "배열과 연속 저장 원소가 연속된 주소에 놓입니다. 중간 삽입은 뒤 원소들을 옮겨야 합니다. int arr[8] = {4, 8, 12, 16}; int n = 4; // 인덱스 1에 값 7 삽입 for (int i = n; i > 1; --i) { arr[i] = arr[i - 1]; } arr[1] = 7; ++n; 원시 배열은 크기가 고정돼 있어 여유 공간을 미리 확보해야 합니다."
      },
      {
        "title": "단일 연결 리스트",
        "text": "단일 연결 리스트 각 노드가 값과 다음 노드의 주소(next)를 가집니다. prev → right added.next = right prev.next = added prev → added → right struct Node { int value; Node* next; }; // prev 뒤에 새 노드 삽입 Node* added = new Node{7, nullptr}; added->next = prev->next; prev->next = added; 노드 삽입은 삽입 직전 노드의 포인터를 알고 있을 때 O(1)입니다. 위치 탐색 비용은 별도입니다."
      },
      {
        "title": "이중 연결 리스트",
        "text": "이중 연결 리스트 각 노드가 이전(prev)과 다음(next) 노드를 가리킵니다. left ⇄ right added.prev = left / added.next = right left.next = added / right.prev = added left ⇄ added ⇄ right struct Node { int value; Node* prev; Node* next; }; // left와 right 사이 새 노드 연결 added->prev = left; added->next = right; left->next = added; right->prev = added; 양방향 이동이 가능하지만 노드마다 포인터 두 개가 필요합니다."
      },
      {
        "title": "트리 — 부모와 자식 관계",
        "text": "트리 — 부모와 자식 관계 1. 개념 부모-자식 관계를 가지는 계층적인 자료구조이다. [1] Root / \\ [2] [3] / [4] Leaf 2. 용어 용어 의미 Root 가장 위의 노드 Parent 부모 노드 Child 자식 노드 Leaf 자식이 없는 노드 Edge 노드와 노드를 연결하는 간선 3. 종류 Binary Tree Binary Search Tree Heap"
      },
      {
        "title": "이진 트리",
        "text": "이진 트리 각 노드가 최대 두 자식을 가집니다. 이진 트리 자체가 자동으로 정렬되는 것은 아닙니다. void preorder(TreeNode* root) { if (!root) return; visit(root->val); // 루트 preorder(root->left); // 왼쪽 preorder(root->right); // 오른쪽 } 이진 트리의 중위 순회가 언제나 정렬 결과를 만드는 것은 아닙니다. BST일 때 가능합니다."
      },
      {
        "title": "이진 탐색 트리",
        "text": "이진 탐색 트리 각 노드의 왼쪽에는 작은 값, 오른쪽에는 큰 값이 위치하는 트리입니다. 현재 노드와 비교 → 작으면 왼쪽 / 크면 오른쪽 → 찾거나 nullptr에서 종료 Node* find(Node* root, int target) { while (root) { if (root->val == target) return root; if (target val) root = root->left; else root = root->right; } return nullptr; } 균형이 잡힌 BST는 탐색이 O(log n)이지만, 한쪽으로 치우치면 O(n)까지 느려질 수 있습니다. map은 순서를 유지하고 로그 시간 연산을 보장합니다."
      },
      {
        "title": "힙",
        "text": "힙 완전 이진 트리이며 부모·자식 간의 우선순위 관계를 유지합니다. 배열 끝에 추가 → 부모와 비교 → 우선순위가 높으면 교환 → 위로 반복 // 최대 힙 삽입의 핵심 아이디어 heap.push_back(value); int i = heap.size() - 1; while (i > 0 && heap[(i - 1) / 2] < heap[i]) { swap(heap[(i - 1) / 2], heap[i]); i = (i - 1) / 2; } 힙은 전체가 정렬된 배열이 아닙니다. 최대 힙은 가장 큰 원소가 루트에 있다는 규칙만 보장합니다."
      },
      {
        "title": "해시 테이블",
        "text": "해시 테이블 키를 해시 함수에 넣어 버킷 위치를 계산합니다. 충돌 처리 방법도 중요합니다. // 구조를 이해하기 위한 단순 버킷 예제 int bucket(int key) { return key % 5; } // 같은 버킷의 원소는 연결해 충돌 처리 // 실무에서는 unordered_map 사용 예제는 같은 버킷의 원소를 연결해 충돌을 처리합니다. 실제 STL 해시 함수·버킷 수·구현은 달라질 수 있습니다."
      },
      {
        "title": "그래프 — 정점과 간선",
        "text": "그래프 — 정점과 간선 DFS는 한 갈래를 끝까지 살펴본 뒤 돌아와 다른 갈래를 본다. BFS는 시작한 곳에서 가까운 곳부터 차례로 살펴본다. DFS에서는 재귀나 stack으로 돌아갈 위치를 기억하고, BFS에서는 queue에 다음에 볼 위치를 넣는다. 1. 개념 정점(Vertex)과 간선(Edge)으로 이루어진 자료구조이다. 2. Vector를 이용한 인접 리스트 vector<vector<int>> graph(4); graph[0].push_back(1); graph[0].push_back(2); 각 정점에 연결된 다른 정점의 목록을 저장하는 방식이다. 3. 대표 알고리즘 알고리즘 주로 사용하는 자료구조 목적 BFS Queue 너비 우선 탐색 DFS Stack / 재귀 깊이 우선 탐색 Dijkstra Priority Queue 한 시작점에서 최단 거리 무방향 간선 연결 vector<vector<int>> graph(5); // 무방향 그래프: 양쪽 모두 등록 graph[0].push_back(1); graph[1].push_back(0); 그래프는 자료구조이며 DFS·BFS는 그래프를 탐색하는 알고리즘입니다."
      }
    ]
  }
];
