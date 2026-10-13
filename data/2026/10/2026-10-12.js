window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/10/2026-10-12.js"] = [
  {
    "id": "20261012-chatx",
    "date": "2026-10-12",
    "date_start": "2026-10-12",
    "date_end": null,
    "date_label": "2026-10-12",
    "date_basis": "10-12.txt / 10-12멀티쳇.txt / 10-12숫자야구.txt 날짜별 메모 파일명",
    "title": "ChatX · RPC로 채팅 전달과 프로퍼티 복제",
    "project": "ChatX",
    "primary_topic": "unreal",
    "activity": "personal",
    "tags": [
      "Unreal",
      "멀티플레이",
      "RPC",
      "Ownership",
      "Replication"
    ],
    "summary": "PlayerController별 채팅 전달에서 GameMode의 숫자 야구 판정으로 연결하고, 플레이어 이름·시도 횟수·알림 문구를 복제하는 코드를 넣었다.",
    "study_content": "오늘은 RPC를 봤다. 호출하는 곳과 실행하는 곳이 다를 수 있어서 Server와 Client가 어느 쪽을 가리키는지 처음에는 헷갈렸다. 서버에서 호출한다는 뜻이 아니라 서버에서 실행하도록 요청한다는 식으로 방향을 나눠 적었다.\n\n공식 문서의 한글 표와 영어 표를 같이 보며 호출 위치와 Actor 소유 관계를 비교했다. 내 Actor인지 다른 클라이언트의 Actor인지에 따라 실행이 달라지고, NetMulticast도 클라이언트에서 호출하면 그 클라이언트에서만 실행된다는 조건을 적어 뒀다.\n\nWithValidation을 붙이면 _Validate 결과에 따라 _Implementation 실행 여부가 나뉜다. 마지막에는 기본값인 Unreliable과 Reliable의 차이도 봤다.\n\n멀티 채팅에서는 Client RPC 대신 NetMulticast를 쓰면 어떨지 생각해 봤다. A의 PlayerController는 다른 클라이언트에 없으니, 서버에서 호출해도 그쪽에는 전달할 객체가 없었다. 서버에서 TActorIterator로 PlayerController를 순회하고 각각의 Client RPC를 호출하는 코드를 적어 뒀다.\n\n숫자 야구에서는 판정을 서버 쪽 GameMode에 두는 방향으로 정리했다. RPC는 호출 조건에 따라 양쪽으로 요청할 수 있지만, 프로퍼티 복제는 서버에서 클라이언트로 상태를 보내는 방식이었다. bReplicates와 Replicated를 설정하고 GetLifetimeReplicatedProps에 DOREPLIFETIME으로 속성을 등록하는 순서도 적었다.\n\n이어서 채팅을 받는 Server RPC에서 GameMode의 PrintChatMessageString을 호출하도록 바꿨다. GameMode에는 1~9 중 겹치지 않는 숫자 세 개를 뽑는 함수와 입력 검사, Strike·Ball 판정, 시도 횟수 증가, 승패·무승부 처리와 초기화 함수를 넣었다. 정답 배열에서 뽑은 숫자를 제거하는 부분도 따라 적었다.\n\nPlayerState에는 플레이어 이름과 현재·최대 시도 횟수를 두고 복제 속성으로 등록했다. PlayerController에는 NotificationText를 추가하고 알림 위젯을 만드는 코드도 붙였다. 접속 알림은 GameMode의 OnPostLogin에서 GameState의 Multicast RPC를 호출하는 흐름으로 나눴다.\n\n숫자 생성 코드에서는 이미 1~9로 채운 배열을 FilterByPredicate로 다시 거르는 이유가 궁금했다. RandInit으로 시드를 정하는 부분과 RandRange로 인덱스를 뽑는 부분도 구분해서 봐야 했다. 입력 검사에 쓰인 do-while(false)는 처음 보는 형태라 주석으로 남겼다.",
    "questions": [
      "Owner가 없는 Actor와 서버 소유 Actor는 어떻게 나눠 봐야 할까?",
      "TActorIterator를 쓰는 반복문은 배열을 도는 범위 기반 for와 어떻게 다를까?",
      "이미 1~9로 채운 배열에서 Num > 0을 다시 검사하는 이유는 뭘까?",
      "입력 검사에 쓰인 do-while(false)는 어떤 흐름으로 동작할까?"
    ],
    "repository": "https://github.com/jwh2077/ChatX",
    "references": [
      {
        "label": "RPC — Server·Client·NetMulticast 호출 조건",
        "url": "#material=unreal-rpc"
      },
      {
        "label": "프로퍼티 복제 설정과 클래스별 역할",
        "url": "#material=unreal-multiplayer-basics"
      },
      {
        "label": "10월 12일 06:11 커밋 · 채팅 RPC와 접속 알림",
        "url": "https://github.com/jwh2077/ChatX/commit/7ca0ed21157497e83f705322dcc5685f2acaf8f9"
      },
      {
        "label": "10월 12일 11:01 커밋 · 숫자 야구 판정과 상태 복제",
        "url": "https://github.com/jwh2077/ChatX/commit/91e041f876bbb86074db51efa01a3c6d7c832f55"
      }
    ],
    "source": [
      "10-12.txt · local/reference/chatx/ 원본 보관",
      "10-12멀티쳇.txt · local/reference/chatx/ 원본 보관",
      "10-12숫자야구.txt · local/reference/chatx/ 원본 보관",
      "ChatX 7ca0ed2 / 91e041f · 커밋 시각은 KST. 코드 작성 범위이며 전체 게임의 실행 성공 기록은 아님"
    ]
  }
];
