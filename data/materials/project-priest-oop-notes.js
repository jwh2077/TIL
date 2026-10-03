window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/project-priest-oop-notes.js"] = [
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
    "sections": [
      {
        "title": "함수와 객체의 책임",
        "text": "함수는 수행할 동작, 객체는 관련된 상태와 동작의 책임을 묶는다.",
        "html": "<table><thead><tr><th scope=\"col\">체력 관리에 속하는 동작</th><th scope=\"col\">다른 책임의 예</th></tr></thead><tbody><tr><td>TakeDamage / Heal / IsDead</td><td>재장전 / 인벤토리 정렬</td></tr></tbody></table>"
      },
      {
        "title": "is-a·has-a·can-do",
        "html": "<table><thead><tr><th scope=\"col\">관계</th><th scope=\"col\">의미</th><th scope=\"col\">예</th></tr></thead><tbody><tr><td>is-a</td><td>한 종류라는 관계 → 상속</td><td>Rifle은 Weapon의 한 종류</td></tr><tr><td>has-a</td><td>부품이나 상태를 가짐</td><td>Character가 HealthComponent를 가짐</td></tr><tr><td>can-do</td><td>요청 가능한 기능의 약속 → Interface</td><td>여러 종류의 객체가 Interact를 제공</td></tr></tbody></table>",
        "text": "설계상 소유 관계와 포인터의 현재 유효 여부는 별개다."
      },
      {
        "title": "Class·Instance·Component·Interface",
        "html": "<table><thead><tr><th scope=\"col\">용어</th><th scope=\"col\">역할</th></tr></thead><tbody><tr><td>Class</td><td>상태와 기능을 묶는 틀</td></tr><tr><td>Instance</td><td>그 클래스로부터 만들어진 객체</td></tr><tr><td>Component</td><td>기능을 실제로 맡는 부품</td></tr><tr><td>Interface</td><td>외부에서 요청할 수 있는 기능의 약속</td></tr></tbody></table>"
      },
      {
        "title": "외부 요청과 내부 처리",
        "html": "<ol class=\"reference-flow\"><li>외부: TakeDamage 요청</li><li>내부: 방어력 계산</li><li>체력 감소</li><li>사망 판정</li></ol>",
        "text": "외부에서는 내부 계산을 모두 알 필요 없이 공개된 요청을 사용한다. Enemy가 요청을 받고 HealthComponent에 처리를 맡기는 식으로 나눌 수 있다."
      },
      {
        "title": "SRP와 OCP",
        "html": "<table><thead><tr><th scope=\"col\">원칙</th><th scope=\"col\">기준</th><th scope=\"col\">오해하기 쉬운 점</th></tr></thead><tbody><tr><td>SRP · 단일 책임</td><td>같은 책임의 상태와 동작을 묶음</td><td>함수를 하나만 두라는 뜻이 아님</td></tr><tr><td>OCP · 개방-폐쇄</td><td>새 무기가 각자의 Attack을 제공하는 식으로 확장</td><td>기존 코드를 절대 수정하지 말라는 뜻이 아님</td></tr></tbody></table>"
      },
      {
        "title": "Delegate와 Broadcast",
        "html": "<ol class=\"reference-flow\"><li>Delegate: 받을 대상 연결</li><li>탄약 변경 이벤트 발생</li><li>Broadcast: 등록 대상에게 알림</li><li>HUD 등에서 각자 처리</li></ol>"
      },
      {
        "title": "MVC 역할 구분",
        "html": "<table><thead><tr><th scope=\"col\">구분</th><th scope=\"col\">담당</th></tr></thead><tbody><tr><td>View</td><td>정보 표시·입력</td></tr><tr><td>Controller</td><td>입력 해석·요청 전달</td></tr><tr><td>Model</td><td>데이터·규칙·실제 변경</td></tr></tbody></table>",
        "text": "인벤토리의 화면, 장착 요청, 장착 검사와 데이터 변경을 나누는 예시다. 프로젝트 전체에 적용했다고 뜻하지는 않는다."
      }
    ],
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
    ]
  }
];
