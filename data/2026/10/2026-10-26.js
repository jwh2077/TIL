window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/10/2026-10-26.js"] = [
  {
    "id": "20261026-cx",
    "date": "2026-10-26",
    "title": "CX · 채팅 입력을 서버로 보내기",
    "project": "CX",
    "activity": "personal",
    "tags": [
      "Unreal",
      "멀티플레이",
      "RPC",
      "UI"
    ],
    "summary": "채팅 위젯의 엔터 입력과 PlayerController의 서버·클라이언트 RPC를 연결했다. 수신 메시지 표시 함수는 아직 비어 있었다.",
    "study_content": "채팅용 C++ 위젯 클래스와 UI_Chat 블루프린트를 추가했다. 입력창에서 엔터를 누르는 이벤트를 연결하고, PlayerController에 메시지를 주고받을 서버·클라이언트 RPC를 작성했다. Build.cs에는 위젯을 쓰는 데 필요한 모듈 의존성을 추가했다.\n\n입력이 확정된 이유가 엔터인지 ETextCommit::OnEnter로 구분했다. 빈 입력을 확인한 뒤 위젯의 소유 PlayerController를 통해 서버로 보내는 흐름으로 나눴다. 클라이언트가 Server RPC로 보내고, 서버는 각 PlayerController의 Client RPC를 호출해 전달하도록 작성했다. CTSChatMessage와 STCChatMessage가 어느 방향으로 가는지 구분해서 봤다.\n\nNativeConstruct()에서 입력 이벤트를 연결하고 NativeDestruct()에서 해제했다. 이미 연결했는지 확인하는 부분도 넣었다. 위젯을 만들 때뿐 아니라 없어질 때의 처리도 같이 생각해야 했다.\n\n이날은 입력과 전송 구조를 만드는 단계였다. 수신한 메시지를 화면에 표시하는 함수는 아직 비어 있어, 채팅 전체를 완성한 상태는 아니었다.",
    "questions": [
      "받은 메시지를 채팅 로그에 어떻게 표시할까?",
      "로컬 컨트롤러에서 입력을 처리하는 부분과 서버에서 처리할 부분을 어떻게 나눌까?"
    ],
    "references": [
      {
        "label": "RPC 호출 조건과 전송 방향",
        "url": "#material=unreal-rpc"
      }
    ],
    "source": [
      "TIL_CX/2026-10-26.md",
      "TIL_CX/README.md · 4e31ec2 코드 대조에 관한 사용자 제공 정리"
    ],
    "date_basis": "사용자가 제공한 TIL_CX/2026-10-26.md의 작업일. 동봉 README의 커밋 날짜와 코드 대조 범위를 참고함.",
    "date_start": "2026-10-26",
    "date_end": null,
    "date_label": "2026-10-26",
    "primary_topic": "unreal"
  }
];
