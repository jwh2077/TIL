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
    "study_content": "직업을 선택하면 Warrior, Magician, Thief, Archer 중 하나를 new로 만들고 Player*에 넣었다.",
    "learning_process": "Player* player = nullptr에서 시작해서 마지막에는 delete player로 해제했다. 부모 포인터로 여러 직업을 다루긴 했지만 포인터가 필요한 이유나 클래스별 역할은 아직 잘 모르겠었다.",
    "code_reference": "Player* player = nullptr; / JobSelection() / new Warrior, new Magician, new Thief, new Archer / delete player",
    "related_topics": [
      "부모 클래스",
      "파생 클래스",
      "동적 할당",
      "객체 생성"
    ],
    "velog": "https://velog.io/@jwh4410/7.14",
    "repository": "https://github.com/jwh2077/text-rpg",
    "source": [
      "Velog",
      "개인 TextRPG 코드"
    ],
    "primary_topic": "oop",
    "summary": "직업을 선택하면 Warrior, Magician, Thief, Archer 중 하나를 new로 만들고 Player*에 넣었다.",
    "date_start": "2026-07-14",
    "date_label": "2026-07-14",
    "activity": "personal"
  }
];
