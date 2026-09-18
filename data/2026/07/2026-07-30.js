window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/07/2026-07-30.js"] = [
  {
    "id": "20260730-001",
    "date": "2026-07-30",
    "title": "Logger와 게임 데이터 집계",
    "project": "팀 TextRPG",
    "phase": "직접 구현",
    "tags": [
      "C++",
      "프로젝트",
      "협업",
      "클래스",
      "static",
      "map",
      "실습"
    ],
    "study_content": "Logger를 singleton/reference 방식으로 접근하고 게임에서 발생하는 전투, 아이템, 재화 등의 데이터를 누적해서 관리하는 통계 시스템을 구현했다.",
    "learning_process": "게임 내에서 실제 상태가 변경되는 지점에서 골드와 데미지 등의 데이터를 기록하도록 Logger를 연결했다. 단순히 화면에 텍스트를 출력하는 용도가 아니라 게임 데이터를 누적하고 통계 화면에서 확인할 수 있도록 구조를 확장했다. main은 실행됐지만 한글 출력이 깨져 SetConsoleCP(CP_UTF8)와 SetConsoleOutputCP(CP_UTF8)를 적용해 수정했다는 메모가 있다. Logger의 피해 기록 호출을 적용한 내용도 남아 있다.",
    "questions": [
      "공통으로 사용하는 Logger를 어디서든 어떻게 접근할 것인가?",
      "게임 데이터를 어느 시점에 기록해야 실제 통계와 일치하는가?"
    ],
    "mistakes_or_difficulties": [
      "단순 출력용 로그와 실제 게임 데이터를 집계하는 시스템의 차이를 고려해야 했다.",
      "데이터가 실제로 변경되는 시점에 기록해야 한다는 점을 확인했다."
    ],
    "application": "전투와 아이템, 재화 등의 데이터를 Logger에 누적하고 통계에서 사용할 수 있도록 구현했다.",
    "result": "Logger를 단순 출력 기능이 아닌 게임 데이터 집계 시스템으로 활용했다.",
    "code_reference": "Logger / singleton 접근 / 전투·아이템·재화 데이터 기록",
    "understanding": "독립 구현 경험",
    "related_topics": [
      "singleton",
      "reference",
      "static",
      "데이터 집계",
      "통계"
    ],
    "later_connection": "이후 Unreal 프로젝트에서 게임 상태와 시스템을 분리해서 관리하는 구조를 이해하는 데 연결되었다.",
    "next_learning": "Shop과 Item 시스템 구현",
    "velog": null,
    "repository": "https://github.com/raimei2000/Ch2_TextRPG_Group5",
    "source": [
      "팀 TextRPG 코드",
      "팀 작업 기록"
    ],
    "primary_topic": "project",
    "summary": "Logger를 singleton/reference 방식으로 접근하고 게임에서 발생하는 전투, 아이템, 재화 등의 데이터를 누적해서 관리하는 통계 시스템을 구현했다.",
    "date_start": "2026-07-30",
    "date_label": "2026-07-30"
  }
];
