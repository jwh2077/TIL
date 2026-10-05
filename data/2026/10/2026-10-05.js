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
    "study_content": "P2P는 토렌트처럼 이용자끼리 정보를 주고받는 방식으로 생각했다. 리슨 서버는 방장이 플레이하면서 서버 역할도 같이 하고, 전용 서버는 플레이하는 쪽과 서버 역할을 나누는 것으로 정리했다.\n\n이어서 서버에 클라이언트가 접속하는 흐름을 따라 적었다. 서버에서 레벨 정보를 받고 클라이언트가 레벨을 연 뒤, 플레이어의 컨트롤러와 상태, 캐릭터가 어떻게 생기고 전달되는지 봤다. GameMode는 서버에만 있고, 클라이언트에는 본인의 PlayerController가 있다는 점을 따로 적었다. 다른 플레이어의 캐릭터와 상태도 받아야 서로 보이거나 상호작용할 수 있었다.\n\n복제되는 객체는 메모에서 일단 진짜와 가짜로 나눠 생각했다. 다만 다른 플레이어 쪽 복제를 더 약한 복제라고 생각해도 되는지, 각 클라이언트의 레벨과 객체를 어떻게 구분해야 하는지는 아직 헷갈렸다. GameMode를 서버 자체와 같다고 생각해도 되는지도 질문으로 남겼다.\n\nPIE와 Open 명령도 적어 뒀다. Open 뒤에 붙는 ?Listen이 정확히 무엇을 바꾸는지는 물음표를 붙여 뒀고, 클라이언트끼리 정보를 주고받을 때는 서버를 거치는 흐름으로 정리했다.",
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
    "notice": "서버 구조와 접속 흐름을 공부하며 적어 둔 내용이다. 직접 실행한 결과까지 적어 둔 것은 아니다."
  }
];
