window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/10/2026-10-07.js"] = [
  {
    "id": "20261007-chatx",
    "date": "2026-10-07",
    "date_start": "2026-10-07",
    "date_end": null,
    "date_label": "2026-10-07",
    "date_basis": "10.07.txt 본문의 10 - 7 표기와 7일 학습 기록 추가 요청",
    "title": "ChatX · Owner를 따라 플레이어 연결 찾기",
    "project": "ChatX",
    "primary_topic": "unreal",
    "activity": "personal",
    "tags": [
      "Unreal",
      "멀티플레이",
      "NetConnection",
      "Ownership"
    ],
    "summary": "NetDriver의 연결 구조를 다시 보고, 무기에서 Pawn과 PlayerController를 거쳐 연결을 찾는 코드를 따라갔다.",
    "study_content": "전용 서버와 클라이언트의 관계를 이어서 봤다. 서버는 ClientConnections로 접속한 클라이언트들의 연결을 관리하고, 각 클라이언트는 ServerConnection으로 서버에 연결되는 구조였다. 같은 멤버가 선언되어 있어도 서버인지 클라이언트인지에 따라 실제로 들어 있는 값은 달랐다.\n\n이번에는 GetNetConnection() 코드를 따라가 봤다. 일반 Actor는 Owner에게 연결을 묻고, Pawn은 Controller가 있으면 그쪽으로 넘어갔다. PlayerController에서는 플레이어의 NetConnection을 반환했다. 무기에서 Pawn, PlayerController로 타고 올라가 연결을 찾는 흐름으로 적어 봤다.\n\n여기서 말하는 소유가 객체를 멤버로 가지는 has-a와 같은 것인지 헷갈렸다. 무기에 Owner를 지정하는 함수가 SetOwner()인지도 메모에 질문으로 남겼다. 소유 관계가 RPC와 Property Replication에 연결된다는 설명은 들었지만, 어떻게 사용하는지까지는 아직 이어지지 않았다.\n\nNetMode별 실행 형태와 GameMode, Pawn, PlayerController가 어느 쪽에 있는지도 다시 나눠 봤다. 전용 서버에는 로컬 플레이어가 없다는 점을 기준으로 서버와 내 클라이언트, 다른 클라이언트를 구분해 보려 했다.",
    "questions": [
      "Ownership은 has-a 관계와 어떻게 다른가?",
      "무기의 Owner를 지정하는 것과 Owning Connection을 찾는 흐름이 RPC·Property Replication에서는 어떻게 쓰이는가?"
    ],
    "repository": "https://github.com/jwh2077/ChatX",
    "references": [
      {
        "label": "전용 서버의 연결·소유 관계 정리",
        "url": "#material=unreal-network-testing"
      }
    ],
    "source": [
      "10.07.txt · 로컬 보관"
    ]
  }
];
