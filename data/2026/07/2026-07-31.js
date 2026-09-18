window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/07/2026-07-31.js"] = [
  {
    "id": "20260731-001",
    "date": "2026-07-31",
    "title": "Shop과 unique_ptr을 이용한 Item 관리",
    "project": "팀 TextRPG",
    "phase": "시행착오",
    "tags": [
      "C++",
      "STL",
      "스마트 포인터",
      "unique_ptr",
      "클래스",
      "상속",
      "프로젝트",
      "협업"
    ],
    "study_content": "팀 상점 시스템을 구현하면서 Logger와 Shop, Item을 연결했다. 아이템 구매 과정에서 std::unique_ptr을 사용해 Item 객체를 관리했다.",
    "learning_process": "상점에서 아이템을 구매하고 인벤토리에 추가하는 흐름을 구현했다. Item 객체의 소유권을 관리하기 위해 unique_ptr을 적용했다. 판매 기능은 이 시점에 완전히 구현되지 않았다. 이날 메모의 main 완성·상점·보스 항목은 작업 목표다. 구매 가격 표시 및 상점 틀 추가는 Git 이력으로 확인되며 목표와 구분해 기록한다.",
    "questions": [
      "unique_ptr은 왜 사용하는가?",
      "동적으로 생성한 Item의 소유권을 어떻게 관리해야 하는가?"
    ],
    "mistakes_or_difficulties": [
      "스마트 포인터에 대한 기존 이해가 충분하지 않은 상태에서 실제 프로젝트에 적용했다.",
      "구매와 판매 기능을 하나의 흐름으로 완성하는 과정에서 추가 수정이 필요했다."
    ],
    "application": "Shop에서 구매한 Item을 std::unique_ptr로 관리하는 구조를 적용했다.",
    "result": "unique_ptr을 실제 아이템 관리에 적용했으며 판매 기능은 아직 미완성 상태였다.",
    "code_reference": "std::unique_ptr<Item> / Shop / Item",
    "understanding": "협업 기반 구현",
    "related_topics": [
      "스마트 포인터",
      "소유권",
      "RAII",
      "vector"
    ],
    "later_connection": "이후 Shop과 Item 구조를 리팩터링하면서 unique_ptr을 사용하는 방식이 더 구체적으로 연결되었다.",
    "next_learning": "Shop과 Item 구조 리팩터링",
    "velog": null,
    "repository": "https://github.com/raimei2000/Ch2_TextRPG_Group5",
    "source": [
      "팀 TextRPG 코드",
      "팀 작업 기록"
    ],
    "primary_topic": "project",
    "summary": "팀 상점 시스템을 구현하면서 Logger와 Shop, Item을 연결했다.",
    "date_start": "2026-07-31",
    "date_label": "2026-07-31"
  }
];
