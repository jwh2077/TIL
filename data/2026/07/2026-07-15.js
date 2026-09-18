window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/07/2026-07-15.js"] = [
  {
    "id": "20260715-001",
    "date": "2026-07-15",
    "title": "JobSelection과 상속·다형성 적용",
    "project": "개인 TextRPG",
    "phase": "직접 구현",
    "tags": [
      "C++",
      "상속",
      "다형성",
      "포인터",
      "함수",
      "실습",
      "프로젝트"
    ],
    "study_content": "JobSelection 함수가 Player*를 반환하도록 만들고 직업별 파생 객체를 반환하는 구조를 구현했다.",
    "learning_process": "직업 선택 결과에 따라 Warrior, Magician, Thief, Archer를 생성하고 이를 Player* 형태로 반환했다. 같은 Player 계열로 관리하면서 직업에 따라 다른 객체가 선택되도록 구현했다.",
    "questions": [
      "같은 부모 타입으로 관리하면서 실제 직업별 객체를 사용하는 방식은 어떻게 동작하는가?"
    ],
    "mistakes_or_difficulties": [
      "상속과 다형성의 문법은 적용했지만 런타임 다형성이 내부적으로 어떻게 동작하는지는 깊게 이해하지 못했다."
    ],
    "application": "개인 TextRPG의 직업 선택 시스템에 상속과 다형성을 적용했다.",
    "result": "JobSelection에서 직업에 맞는 파생 객체를 생성하고 Player*로 반환하는 구조를 구현했다.",
    "code_reference": "Player* JobSelection()",
    "understanding": "독립 구현 경험",
    "related_topics": [
      "virtual",
      "override",
      "부모 포인터",
      "파생 객체"
    ],
    "later_connection": "이후 virtual, override, 순수 가상 함수와 추상 클래스 개념을 더 직접적으로 경험하게 되었다.",
    "next_learning": "템플릿 함수와 템플릿 클래스",
    "velog": "https://velog.io/@jwh4410/7.15",
    "repository": "https://github.com/jwh2077/text-rpg",
    "source": [
      "Velog",
      "개인 TextRPG 코드"
    ],
    "primary_topic": "oop",
    "summary": "JobSelection 함수가 Player*를 반환하도록 만들고 직업별 파생 객체를 반환하는 구조를 구현했다.",
    "date_start": "2026-07-15",
    "date_label": "2026-07-15",
    "activity": "personal"
  }
];
