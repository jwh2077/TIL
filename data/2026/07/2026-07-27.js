window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/07/2026-07-27.js"] = [
  {
    "id": "20260727-001",
    "date": "2026-07-27",
    "title": "STL vector와 map 복습",
    "project": "개인 TextRPG",
    "phase": "복습",
    "tags": [
      "C++",
      "STL",
      "자료구조",
      "vector",
      "map",
      "복습"
    ],
    "study_content": "STL은 컨테이너, 알고리즘, 반복자로 구성된다. 컨테이너는 선언할 때 자료형을 정해 데이터를 담고, 반복자로 원소에 접근한다. 그중 vector는 배열처럼 인덱스로 접근하지만 원소 수에 따라 크기가 달라진다.\n\nvector<int> values(4, 7)처럼 크기와 값을 넣어 초기화하거나, 초기화 리스트로 값을 넣을 수 있다. 2차원 vector는 안쪽 vector를 바깥 vector의 원소로 둔다. vector<vector<int>> grid(3, vector<int>(4, 7))은 3행 4열을 모두 7로 채운 형태다.",
    "code_reference": null,
    "related_topics": [
      "vector",
      "2D vector",
      "map"
    ],
    "velog": "https://velog.io/@jwh4410/7.27",
    "repository": "https://github.com/jwh2077/text-rpg",
    "source": [
      "Velog"
    ],
    "primary_topic": "stl",
    "summary": "vector, 2차원 vector와 map의 기본 사용법을 다시 봤다.",
    "date_start": "2026-07-27",
    "date_label": "2026-07-27",
    "activity": "personal",
    "learning_process": "push_back으로 끝에 넣고 pop_back으로 마지막 원소를 뺀다. size는 원소 개수를 확인할 때 쓴다. 2차원 vector에서 바깥 vector에 빈 vector를 추가하면 행이 하나 늘어난다.\n\nerase는 반복자로 지울 위치나 범위를 지정한다. begin()+1부터 begin()+3까지라면 인덱스 1과 2가 지워지고 끝 위치인 3은 포함하지 않는다. 중간에서 삽입하거나 지우면 뒤 원소를 옮겨야 하므로 맨 뒤에서 처리하는 편이 좋다. map은 키로 값을 찾는 컨테이너라는 것까지 적었다."
  }
];
