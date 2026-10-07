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
    "study_content": "오늘은 멀티플레이에서 내 화면에만 UI를 띄우는 방법과 전용 서버 테스트 설정을 봤다. 내가 죽었을 때 나한테만 사망 UI를 보여주는 경우가 예시였다.\n\nIsLocalController()가 false면 return하도록 했는데도 두 화면에 같은 출력이 보였다. 여기서 PIE 설정을 살펴봤다. Play as Client로 전용 서버 환경을 실행하고, Run Under One Process를 끄면 창마다 프로세스를 나눌 수 있었다. 설정 방법과 UI를 구분하는 코드는 자료실에 정리했다.\n\n같은 코드가 서버와 여러 클라이언트에서 실행된다는 점도 생각해야 했다. HP를 줄이는 판정은 서버에서, UI나 효과를 보여주는 처리는 클라이언트에서 맡는 식으로 역할을 나눴다. 지금 서버인지 클라이언트인지 구분하는 값이 NetMode였다.\n\n이어서 GetNetMode()와 UNetDriver 코드를 따라가 봤다. 클라이언트는 ServerConnection으로 서버에 연결하고, 서버는 ClientConnections에 클라이언트들의 연결을 담는 구조였다. 다만 코드까지 한 번에 이해되지는 않았고, 포인터 멤버가 있다는 것과 실제 연결이 있다는 것의 차이가 헷갈렸다.",
    "notice": "설정을 바꾼 뒤 UI가 의도대로 나오는지는 아직 확인이 필요하다.",
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
    ],
    "questions": [
      "ServerConnection 멤버는 선언돼 있어도 값은 nullptr일 수 있다. 코드에서 연결이 ‘있다’, ‘없다’고 할 때는 멤버 자체가 아니라 그 안의 값을 보는 것인가?"
    ]
  }
];
