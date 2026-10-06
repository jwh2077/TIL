window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/10/2026-10-06.js"] = [
  {
    "id": "20261006-chatx",
    "date": "2026-10-06",
    "date_start": "2026-10-06",
    "date_end": null,
    "date_label": "2026-10-06",
    "date_basis": "오늘 학습 자료라는 사용자 안내와 10-6.txt 파일명",
    "title": "ChatX · 전용 서버 설정과 로컬 UI 구분",
    "project": "ChatX",
    "primary_topic": "unreal",
    "activity": "personal",
    "tags": [
      "Unreal",
      "멀티플레이",
      "PIE",
      "NetMode",
      "UI"
    ],
    "summary": "개인 화면에만 UI를 띄우려고 IsLocalController()를 보고, PIE 실행 설정과 NetDriver의 연결 구조를 따라갔다.",
    "study_content": "멀티플레이에서는 내가 죽었을 때 내 화면에만 사망 UI를 띄우는 것처럼, 개인 화면에서만 처리할 일이 있었다. IsLocalController()가 false면 return하도록 적었는데도 두 화면에 같은 출력이 보였다. 메모에는 UI와 PrintString을 같이 적어 두었고, 한 프로세스에서 실행하는 설정도 함께 봤다.\n\nPlay Net Mode를 Play as Client로 두고 Run Under One Process를 끄는 설정을 남겼다. 여러 창을 각각의 프로세스로 실행해서 보는 쪽으로 바꿔 봤다. Always On Top처럼 창을 위에 띄워 두는 옵션도 같이 적었다.\n\n그다음에는 같은 코드가 서버와 각 클라이언트에서 실행될 수 있으니, 지금 어디서 실행되는지 나눠야 한다는 쪽으로 생각했다. HP를 줄이는 중요한 처리는 서버에 두고, 화면에 보여줄 UI나 효과는 클라이언트 쪽에서 처리하는 기준을 봤다.\n\nGetNetMode()에서 반환하는 enum과 UNetDriver 코드를 따라갔다. ServerConnection은 클라이언트에서 서버로 연결되는 쪽이고, ClientConnections는 서버에서 클라이언트 연결들을 담는 쪽으로 정리했다. 다만 코드를 봐도 아직 한 번에 이해되지는 않았다. 포인터 멤버가 선언돼 있다는 것과 실제 연결 객체를 가리킨다는 것이 어떻게 다른지도 질문으로 남겼다.",
    "notice": "설정과 코드를 보며 적어 둔 내용이다. 설정을 바꾼 뒤 UI 문제가 해결됐는지는 따로 적어 두지 않았다.",
    "repository": "https://github.com/jwh2077/ChatX",
    "references": [
      {
        "label": "Unreal 멀티플레이 실행 구분 — PIE·로컬 UI·NetMode",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-network-testing"
      }
    ],
    "source": [
      "10-6.txt · 로컬 보관",
      "스크린샷 2026-10-06 153305.png · PIE 설정",
      "ChatGPT 이미지 2026년 10월 6일 오후 04_02_18.png · 개념 설명용 그림, 로컬 보관"
    ]
  }
];
