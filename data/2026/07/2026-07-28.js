window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/07/2026-07-28.js"] = [
  {
    "id": "20260728-001",
    "date": "2026-07-28",
    "title": "map과 auto, range-for",
    "project": "개인 TextRPG",
    "phase": "응용",
    "tags": [
      "C++",
      "STL",
      "자료구조",
      "map",
      "실습",
      "프로젝트"
    ],
    "study_content": "map은 키와 값을 한 쌍으로 저장한다. 선언할 때 두 자료형을 지정하고, 같은 키를 중복해서 넣을 수는 없다. map<int, string>으로 만든 뒤 m[키] = 값으로 넣거나 insert({키, 값}), insert(make_pair(키, 값))를 사용했다.\n\n원소에서 first는 키, second는 값이다. 키를 1, 4, 2, 5, 3 순서로 넣고 출력했는데 결과는 1부터 5까지 키 순서로 나왔다. 넣은 순서대로 나오는 것이 아니라 키를 기준으로 정렬된다.",
    "code_reference": "insert / make_pair / first / second / range-for / auto",
    "related_topics": [
      "key",
      "value",
      "auto",
      "range-for",
      "pair"
    ],
    "velog": "https://velog.io/@jwh4410/7.28",
    "repository": "https://github.com/jwh2077/text-rpg",
    "source": [
      "Velog",
      "개인 TextRPG 코드"
    ],
    "primary_topic": "stl",
    "summary": "map에 insert와 make_pair로 값을 넣고 first로 key, second로 value를 읽었다.",
    "date_start": "2026-07-28",
    "date_label": "2026-07-28",
    "activity": "personal",
    "learning_process": "for (const auto& X : m)으로 원소를 하나씩 꺼내고 X.first와 X.second를 출력했다. auto는 들어오는 값에 맞춰 자료형을 정하고, range-for는 전체 원소를 차례로 돌 때 사용한다.\n\n배열에도 같은 반복문을 써 봤다. 1, 3, 2, 5, 4, 6, 7, 8, 9, 10을 넣은 배열은 그 순서 그대로 출력됐다. map의 출력이 정렬된 것은 range-for 때문이 아니라 map의 저장 방식 때문이다."
  }
];
