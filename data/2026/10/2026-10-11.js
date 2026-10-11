window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/10/2026-10-11.js"] = [
  {
    "id": "20261011-chatx",
    "date": "2026-10-11",
    "date_start": "2026-10-11",
    "date_end": null,
    "date_label": "2026-10-11",
    "date_basis": "10-11.txt 날짜별 메모와 본문 2026.10.11 로그",
    "title": "ChatX · Pawn 빙의 전후의 역할 로그",
    "project": "ChatX",
    "primary_topic": "unreal",
    "activity": "personal",
    "tags": [
      "Unreal",
      "멀티플레이",
      "NetRole",
      "Possess"
    ],
    "summary": "Pawn에 로그를 남겨 빙의 전후의 역할을 비교했다. 서버의 LocalRole은 그대로이고 RemoteRole이 바뀌었다.",
    "study_content": "로그를 출력할 Pawn을 만들고 GameMode에서 지정해 봤다. BeginPlay에서는 Authority / SimulatedProxy, PossessedBy에서는 Authority / AutonomousProxy가 찍혔다. 서버의 LocalRole은 계속 Authority였고 RemoteRole만 바뀌었다.\n\nHasAuthority 안에서 GetLocalRole을 Authority와 비교하는 코드도 봤다. 입력과 UI 쪽은 IsLocalController와 IsLocallyControlled를 함께 적어 뒀다.\n\nController에서 Pawn, 무기, 파츠로 소유 관계가 이어지는 것도 다시 봤다. Ownership을 맺는 것과 AutonomousProxy가 되는 것은 같은 개념이 아니라고 적었는데, 소유 관계를 따라 통신하는 부분과 역할을 설명하는 부분은 아직 섞여 있다.",
    "questions": [
      "무기와 파츠가 소유 관계에 들어가는 것과 AutonomousProxy 역할은 어떻게 구분할까?",
      "LocalRole과 RemoteRole만으로 플레이어가 조종하는 Pawn인지 구분할 수 있을까?"
    ],
    "repository": "https://github.com/jwh2077/ChatX",
    "references": [
      {
        "label": "NetRole — LocalRole·RemoteRole과 로컬 제어",
        "url": "#material=unreal-network-roles"
      }
    ],
    "source": [
      "10-11.txt · local/reference/chatx/ 원본 보관"
    ]
  }
];
