window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/10/2026-10-27.js"] = [
  {
    "id": "20261027-cx",
    "date": "2026-10-27",
    "title": "CX · 채팅 기록을 새 접속자에게 전달하기",
    "project": "CX",
    "activity": "personal",
    "tags": [
      "Unreal",
      "멀티플레이",
      "RPC",
      "Subsystem"
    ],
    "summary": "FChatData와 UChatSubsystem으로 채팅을 보관하고, PostLogin에서 새 플레이어에게 이전 기록을 전달하도록 작성했다.",
    "study_content": "전날 만든 채팅 전송 구조에 화면 표시를 연결했다. 발신자와 메시지를 함께 다루는 FChatData를 만들고, UChatSubsystem에 최근 채팅을 보관하는 코드를 추가했다. 새 플레이어가 들어오면 GameMode의 PostLogin()에서 기존 기록을 가져와 전달하도록 작성했다.\n\n접속 중인 플레이어에게 새 메시지를 보내는 것과, 나중에 들어온 플레이어에게 이전 기록을 보내는 것은 다른 흐름이었다. 새 메시지는 서버에서 기록하고 접속 중인 플레이어에게 전달했다. 새 접속자는 PostLogin에서 따로 기록을 받게 했다.\n\n위젯은 화면 표시를, Subsystem은 기록 보관을 맡도록 나눴다. UWorldSubsystem은 월드에 속하므로 서버의 기록이 클라이언트에 자동으로 공유되는 것은 아니었다. RPC로 전달해야 했고, 월드의 메모리에 보관하는 코드라 게임을 종료한 뒤에도 파일로 남기는 기능은 아니었다.\n\n서버가 여러 PlayerController에 전달할 때 발신자와 수신자를 섞지 않는 것도 중요했다. 메시지를 보낸 PlayerController의 PlayerState에서 이름을 구하고, 그 이름을 메시지와 함께 전달하도록 작성했다.",
    "references": [
      {
        "label": "RPC 호출 조건과 전송 방향",
        "url": "#material=unreal-rpc"
      },
      {
        "label": "멀티플레이 클래스의 역할과 상태 복제",
        "url": "#material=unreal-multiplayer-basics"
      }
    ],
    "source": [
      "TIL_CX/2026-10-27.md",
      "TIL_CX/README.md · 241d899 코드 대조에 관한 사용자 제공 정리"
    ],
    "date_basis": "사용자가 제공한 TIL_CX/2026-10-27.md의 작업일. 동봉 README의 커밋 날짜와 코드 대조 범위를 참고함.",
    "date_start": "2026-10-27",
    "date_end": null,
    "date_label": "2026-10-27",
    "primary_topic": "unreal"
  }
];
