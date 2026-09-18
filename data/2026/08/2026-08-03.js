window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/08/2026-08-03.js"] = [
  {
    "id": "20260803-001",
    "date": "2026-08-03",
    "title": "Shop과 Item 구조 리팩터링",
    "project": "팀 TextRPG",
    "phase": "응용",
    "tags": [
      "C++",
      "클래스",
      "상속",
      "다형성",
      "STL",
      "스마트 포인터",
      "unique_ptr",
      "리팩터링",
      "프로젝트"
    ],
    "study_content": "Shop 구조를 수정하고 Item을 별도의 클래스로 분리했다. 아이템을 std::unique_ptr<Item> 형태로 관리하는 구조를 사용했다.",
    "learning_process": "기존 구조를 다시 살펴보고 Shop과 Item의 책임을 분리했다. 개별 아이템을 별도의 클래스로 구성하고 Item을 기반으로 관리하도록 구조를 수정했다. 작성자 Git 이력에는 8월 2일 판매 추가에 이어 이날 판매 관련 수정이 여러 차례 남아 있다.",
    "questions": [
      "Shop과 Item의 책임을 어디까지 분리해야 하는가?",
      "부모 타입인 Item으로 여러 종류의 아이템을 관리할 때 어떤 구조가 적절한가?"
    ],
    "mistakes_or_difficulties": [
      "기능이 늘어나면서 기존 구조를 그대로 유지하기 어려워 리팩터링이 필요했다.",
      "스마트 포인터와 클래스 구조를 함께 사용해야 했다."
    ],
    "application": "Shop과 Item의 책임을 분리하고 개별 Item 클래스를 구성했다. Item 객체는 std::unique_ptr<Item>으로 관리했다.",
    "result": "상점과 아이템의 구조를 이전보다 분리된 형태로 정리했다.",
    "code_reference": "Shop / Item / std::unique_ptr<Item>",
    "understanding": "개념 응용",
    "related_topics": [
      "책임 분리",
      "상속",
      "다형성",
      "unique_ptr",
      "리팩터링"
    ],
    "later_connection": "이후 Unreal C++에서 Actor, Component, Controller 등의 책임을 나누는 구조를 이해할 때 연결되는 경험이 되었다.",
    "next_learning": "팀 프로젝트 마무리와 협업 방식 회고",
    "velog": null,
    "repository": "https://github.com/raimei2000/Ch2_TextRPG_Group5",
    "source": [
      "팀 TextRPG 코드",
      "팀 작업 기록"
    ],
    "primary_topic": "project",
    "summary": "Shop 구조를 수정하고 Item을 별도의 클래스로 분리했다.",
    "date_start": "2026-08-03",
    "date_label": "2026-08-03"
  }
];
