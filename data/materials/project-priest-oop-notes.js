window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/project-priest-oop-notes.js"] = [
  {
    "id": "project-priest-oop-notes",
    "title": "상속·Component·Interface와 객체의 역할",
    "summary": "상속, Component, Interface를 언제 쓸지 예시로 나눠 봤다.",
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
    "sections": [
      {
        "title": "함수와 객체가 맡는 일",
        "text": "함수는 무엇을 하는지, 객체는 무엇을 책임지는지로 나눠 봤다. HealthComponent 안의 TakeDamage, Heal, IsDead는 함수는 달라도 모두 체력 관리에 속한다. 여기에 재장전이나 인벤토리 정렬까지 들어가면 맡는 일이 섞이기 시작한다."
      },
      {
        "title": "is-a / has-a / can-do",
        "items": [
          "is-a: 이것의 한 종류라는 관계다. Rifle은 Weapon의 한 종류라고 보고 상속으로 표현한다.",
          "has-a: 무엇을 가지고 있다는 관계다. Character가 HealthComponent를 가지거나 Weapon이 파츠를 가지는 경우다. 다만 가지고 있다는 설계와 실제 포인터가 항상 유효하다는 것은 별개다.",
          "can-do: 무엇을 할 수 있다는 약속이다. 종류가 달라도 Interact 같은 요청을 받을 수 있게 Interface로 표현한다. 실제 동작은 각 객체가 정한다."
        ]
      },
      {
        "title": "Class와 Instance",
        "text": "Class는 상태와 기능을 묶는 틀이고, Instance는 그 클래스로부터 만들어진 객체라는 점을 강조한 말이다. 원문의 클래스 예시는 이 관계를 설명하기 위한 예시다."
      },
      {
        "title": "Component와 Interface를 같이 보기",
        "text": "Component는 기능을 실제로 맡는 부품으로 보고, Interface는 외부에서 어떤 요청을 할 수 있는지 정하는 약속으로 봤다. 외부에서는 Enemy에 피해를 요청하고, 내부에서는 HealthComponent가 체력 처리를 맡는 식으로 역할을 나눌 수 있다."
      },
      {
        "title": "SRP와 OCP",
        "text": "단일 책임 원칙(SRP)은 함수 하나만 두라는 뜻이 아니라 같은 책임에 속한 기능을 함께 두자는 쪽으로 이해했다. 개방-폐쇄 원칙(OCP)은 새 무기마다 기존 분기를 늘리기보다 Weapon의 Attack을 각 무기가 자기 방식으로 처리하게 하는 예시로 봤다. 기존 코드를 절대 수정하지 말라는 뜻은 아니다."
      },
      {
        "title": "내부 처리와 이벤트 알림",
        "text": "외부에서는 TakeDamage만 호출하고 내부의 방어력 계산, 체력 감소, 사망 판정을 몰라도 되게 나누는 예시를 봤다. Delegate는 이벤트를 받을 대상을 연결하고, Broadcast는 등록된 대상들에게 이벤트가 생겼음을 알린다. Weapon이 탄약 변경을 알리면 HUD 등이 자기 처리를 맡는 식이다."
      },
      {
        "title": "MVC로 나눠 보기",
        "items": [
          "View: 정보를 보여주고 입력을 받는다.",
          "Controller: 입력을 해석해서 알맞은 곳에 요청을 전달한다.",
          "Model: 데이터와 규칙을 가지고 실제 변경을 처리한다."
        ],
        "text": "인벤토리 화면과 장착 요청, 장착 가능 여부 검사와 데이터 변경을 나눠 보는 설명이다. 이 정리만으로 프로젝트 전체가 MVC로 구현됐다고 보지는 않는다."
      }
    ],
    "related_ids": [
      "20260924-priest-concepts",
      "note-tem-011",
      "20260715-001"
    ],
    "references": []
  }
];
