window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/10/2026-10-05.js"] = [
  {
    "id": "20261005-chatx",
    "date": "2026-10-05",
    "date_start": "2026-10-05",
    "date_end": null,
    "date_label": "2026-10-05",
    "date_basis": "오늘 자료로 전달한 10-5 서버.txt의 10-5 표기와 대화",
    "title": "ChatX · 서버 종류와 클라이언트 접속 흐름",
    "project": "ChatX",
    "primary_topic": "unreal",
    "activity": "personal",
    "tags": [
      "Unreal",
      "멀티플레이",
      "서버",
      "복제"
    ],
    "summary": "P2P·리슨·전용 서버를 구분하고, 클라이언트가 접속할 때 어떤 객체와 정보가 필요한지 메모했다.",
    "study_content": "오늘은 P2P, 리슨 서버, 전용 서버의 차이부터 봤다. P2P는 토렌트처럼 이용자끼리 정보를 주고받는 방식으로 생각했다. 리슨 서버는 방장이 플레이하면서 서버 역할도 맡고, 전용 서버는 플레이하는 쪽과 서버 역할을 나누는 구조였다.\n\n그다음에는 클라이언트가 서버에 접속하는 흐름을 따라갔다. 서버에서 레벨 정보를 받아 맵을 연 뒤, 플레이어의 컨트롤러와 상태, 캐릭터가 어떻게 생기고 전달되는지 봤다. GameMode는 서버에만 있고, 클라이언트에는 본인의 PlayerController가 있었다. 다른 플레이어와 상호작용하려면 그쪽 캐릭터와 상태도 받아야 했다.\n\n복제는 일단 ‘진짜와 가짜’로 나눠 생각했는데, 서버와 각 클라이언트의 객체를 어떻게 구분해야 할지 헷갈렸다. GameMode를 서버 자체로 생각해도 되는지도 잘 모르겠었다.\n\nPIE와 Open 명령도 함께 봤다. 클라이언트끼리 정보를 주고받을 때 서버를 거친다는 흐름은 정리했지만, Open 뒤의 ?Listen이 정확히 무엇을 바꾸는지는 아직 이해하지 못했다.",
    "repository": "https://github.com/jwh2077/ChatX",
    "references": [
      {
        "label": "Unreal 멀티플레이 — 클래스 역할·서버·복제",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-multiplayer-basics"
      }
    ],
    "source": [
      "10-5 서버.txt · 로컬 보관"
    ],
    "notice": "접속 흐름을 공부하며 적은 내용이다. 직접 실행한 결과는 포함하지 않았다.",
    "questions": [
      "다른 플레이어 쪽의 복제본을 ‘더 약한 복제’라고 생각해도 되는가?",
      "서버와 각 클라이언트가 가진 레벨·객체는 어떻게 구분하는가?",
      "GameMode와 서버 자체는 어떻게 다른가?",
      "Open 명령의 ?Listen은 무엇을 바꾸는가?"
    ]
  }
];
