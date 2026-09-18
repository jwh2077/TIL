window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/07/2026-07-14.js"] = [
  {
    "id": "20260714-001",
    "date": "2026-07-14",
    "title": "Player 포인터와 직업 선택",
    "project": "개인 TextRPG",
    "phase": "직접 구현",
    "tags": [
      "C++",
      "포인터",
      "클래스",
      "상속",
      "다형성",
      "실습",
      "프로젝트"
    ],
    "study_content": "Player* 포인터를 사용해 직업별 객체를 생성하고 관리하는 구조를 구현했다. Warrior, Magician, Thief, Archer 객체를 new로 생성하고 Player*에 저장했다.",
    "learning_process": "Player* player = nullptr로 포인터를 선언하고 JobSelection에서 선택한 직업에 따라 new Warrior, new Magician, new Thief, new Archer를 생성하도록 구현했다. 생성한 객체는 Player*로 관리하고 delete player로 해제했다.",
    "questions": [
      "왜 부모 클래스 포인터로 자식 객체를 관리하는가?",
      "객체의 역할을 왜 클래스로 나누는가?"
    ],
    "mistakes_or_difficulties": [
      "객체지향에서 각 클래스의 책임을 어떻게 나눠야 하는지는 당시 이해하지 못했다.",
      "Player* 사용은 학습 조건에 따라 적용한 부분이 있었고 포인터의 필요성을 완전히 이해한 것은 아니었다."
    ],
    "application": "개인 TextRPG의 직업 선택 기능에 Player 포인터와 상속 구조를 적용했다.",
    "result": "직업 선택에 따라 서로 다른 파생 객체를 생성하고 Player*로 관리하는 코드를 구현했다.",
    "code_reference": "Player* player = nullptr; / JobSelection() / new Warrior, new Magician, new Thief, new Archer / delete player",
    "understanding": "독립 구현 경험",
    "related_topics": [
      "부모 클래스",
      "파생 클래스",
      "동적 할당",
      "객체 생성"
    ],
    "later_connection": "이후 팀 TextRPG에서 상속과 다형성을 더 큰 구조에 적용하고, Unreal C++에서 부모 타입과 자식 타입을 다루는 과정으로 연결되었다.",
    "next_learning": "직업 선택 함수를 Player* 반환 구조로 분리",
    "velog": "https://velog.io/@jwh4410/7.14",
    "repository": "https://github.com/jwh2077/text-rpg",
    "source": [
      "Velog",
      "개인 TextRPG 코드"
    ],
    "primary_topic": "oop",
    "summary": "Player* 포인터를 사용해 직업별 객체를 생성하고 관리하는 구조를 구현했다.",
    "date_start": "2026-07-14",
    "date_label": "2026-07-14"
  }
];
