window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-rpc.js"] = [
  {
    "id": "unreal-rpc",
    "title": "Unreal RPC — Server·Client·NetMulticast 호출 조건",
    "summary": "RPC 호출 조건과 소유 연결, PlayerController별 채팅 전달, Reliable·WithValidation 옵션.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "멀티플레이",
    "source_name": "10-12.txt / 스크린샷 2026-10-12 012554.png / 스크린샷 2026-10-12 013034.png / 10-12멀티쳇.txt",
    "source_url": "",
    "related_ids": [
      "20261012-chatx"
    ],
    "sections": [
      {
        "title": "호출 위치와 실행 위치 구분",
        "html": "<p>RPC는 네트워크를 통해 다른 곳에서 함수를 실행하도록 요청하는 방식이다. <code>Server</code>와 <code>Client</code>는 호출 출발지가 아니라 실행 방향을 나타낸다. 메모에서 다룬 세 종류는 다음처럼 구분한다.</p><pre><code>소유 클라이언트의 Server RPC\n  → 서버\n\n서버의 Client RPC\n  → Actor의 소유 클라이언트\n\n서버의 NetMulticast\n  → 서버 + 관련 클라이언트</code></pre><p>원격 호출에는 Actor와 필요한 컴포넌트의 복제 설정이 필요하다. 소리·효과 같은 일시적인 이벤트뿐 아니라 서버에 처리를 요청할 때도 쓴다.</p>"
      },
      {
        "title": "소유 연결에 따라 달라지는 실행",
        "html": "<h3>클라이언트에서 Server RPC</h3><p>자신이 소유한 복제 Actor에서 요청한다. 다른 클라이언트 소유 Actor나 소유 연결이 없는 Actor를 통해 보낸 요청은 서버로 전달되지 않는다.</p><h3>서버에서 Client RPC</h3><p>해당 Actor의 Owning Connection에 연결된 클라이언트가 대상이다. 서버 소유 또는 연결이 없는 경우에는 서버에서 실행되므로, Client라는 이름만으로 원격 클라이언트 실행을 보장하지 않는다.</p><h3>NetMulticast</h3><p>서버에서 호출하면 서버와 그 Actor가 관련 있는 클라이언트에서 실행한다. 클라이언트에서 호출하면 호출한 클라이언트에서만 실행한다. PlayerController는 기본적으로 서버와 소유 클라이언트에만 있으므로 전체 플레이어에게 보내는 방송 경로로 생각하면 안 된다.</p><p>Owner가 없다는 것과 서버가 Authority를 갖는다는 것은 서로 다른 기준이다. Owner는 Pawn 등을 거쳐 PlayerController로 이어질 수도 있어 SetOwner(PlayerController)를 직접 호출하는 형태만 가능한 것은 아니다.</p>"
      },
      {
        "title": "전체 채팅 전달 — PlayerController마다 Client RPC 호출",
        "html": "<p>서버의 PlayerController A에서 NetMulticast를 호출해도, PlayerController A가 없는 클라이언트 B에는 전달되지 않는다. 채팅 메모의 코드는 서버에서 각 PlayerController를 찾아 Client RPC를 호출한다.</p><pre><code>클라이언트 A → Server RPC → 서버\n  ├ PlayerController A의 Client RPC → 클라이언트 A\n  └ PlayerController B의 Client RPC → 클라이언트 B</code></pre><p>채팅 전달을 처음 연결한 7ca0ed2 커밋의 함수다. 이후 숫자 야구 단계에서는 서버의 처리를 GameMode로 옮겼다.</p>",
        "code": "void ACXPlayerController::ServerRPCPrintChatMessageString_Implementation(\n    const FString& InChatMessageString)\n{\n    for (TActorIterator<ACXPlayerController> It(GetWorld()); It; ++It)\n    {\n        ACXPlayerController* CXPlayerController = *It;\n        if (IsValid(CXPlayerController) == true)\n        {\n            CXPlayerController->ClientRPCPrintChatMessageString(\n                InChatMessageString);\n        }\n    }\n}"
      },
      {
        "title": "TActorIterator — 배열 대신 월드의 Actor 순회",
        "html": "<p><code>TActorIterator&lt;ACXPlayerController&gt; It(GetWorld())</code>는 지정한 월드에서 해당 클래스의 Actor를 순회한다. 헤더는 <code>EngineUtils.h</code>다.</p><ul><li><code>It</code>: 현재 가리킬 Actor가 있는지 검사</li><li><code>++It</code>: 다음 Actor로 이동</li><li><code>*It</code>: 현재 Actor 포인터를 꺼냄</li></ul><p><code>for (auto Item : Items)</code>가 이미 가진 컨테이너의 원소를 순회하는 것과 달리, 이 예시는 월드에서 PlayerController를 찾는다. 순회 대상이 다르며 클라이언트에서 돌린다고 서버의 모든 PlayerController를 찾을 수 있는 것은 아니다.</p>"
      },
      {
        "title": "숫자 야구로 확장 — Server RPC에서 GameMode로 전달",
        "html": "<p>91e041f 커밋에서는 <code>ServerRPCPrintChatMessageString_Implementation()</code>이 GameMode를 가져와 <code>PrintChatMessageString(this, InChatMessageString)</code>을 호출한다. 메시지의 숫자 검사·판정과 각 PlayerController로 보내는 처리는 GameMode에 둔다.</p><ol><li>로컬 Controller: 플레이어 정보와 입력을 묶어 Server RPC 요청</li><li>서버 Controller: GameMode에 보낸 플레이어와 메시지 전달</li><li>GameMode: 숫자 입력이면 판정·횟수 처리, 아니면 일반 채팅 처리</li><li>각 Controller의 Client RPC: 해당 클라이언트에 결과 출력</li></ol><p>이 단계의 게임 규칙 코드는 아직 점검할 부분이 있다. 복제 문서의 숫자 야구 예시에서 작성 범위와 주의점을 함께 볼 수 있다.</p>"
      },
      {
        "title": "접속 알림 — GameState의 NetMulticast 사용",
        "html": "<p>접속 알림은 <code>GameMode::OnPostLogin()</code>에서 <code>GameState::MulticastRPCBroadcastLoginMessage()</code>를 호출한다. PlayerController 하나의 소유 클라이언트로 보내는 경로와 달리, GameState를 통해 접속 알림을 전달하는 구조다.</p><p>ChatX 구현은 <code>HasAuthority() == false</code>인 곳에서만 로컬 PlayerController를 얻어 출력한다. 전용 서버 실습 코드이며, 이 조건 그대로라면 리슨 서버 호스트의 출력 분기는 실행되지 않는다. <code>GetPlayerController(GetWorld(), 0)</code>의 0은 서버 번호가 아니라 해당 월드의 플레이어 인덱스다.</p>"
      },
      {
        "title": "선언·구현 — UFUNCTION과 _Implementation",
        "html": "<p>아래는 선언 형태를 보여 주는 예시다. 프로젝트에 적용을 끝낸 코드가 아니다.</p><pre><code>UFUNCTION(Server, Reliable)\nvoid ServerRequest();\n\n// .cpp: 실제 처리 함수\nvoid AMyActor::ServerRequest_Implementation()\n{\n    // 서버 처리\n}</code></pre><p>호출할 때는 <code>ServerRequest()</code>를 사용한다. _Implementation을 직접 부르면 RPC 전달 경로를 거치지 않는 일반 함수 호출이 된다.</p>"
      },
      {
        "title": "Unreliable·Reliable — 전달 보장과 비용",
        "html": "<p><code>Unreliable</code>이 기본값이며 전달을 보장하지 않는다. <code>Reliable</code>은 수신 확인까지 재전송하므로 비용이 든다. 모든 반복 호출을 Reliable로 지정하기보다 전달이 필요한 이벤트인지 구분한다.</p><p>Reliable을 붙여도 소유 연결이 잘못된 호출이 유효해지지는 않는다. 연결이 끊어진 상황까지 무조건 실행된다는 뜻도 아니다.</p>"
      },
      {
        "title": "WithValidation — 검증 실패와 일반 거절",
        "html": "<pre><code>클라이언트의 Server RPC 요청\n  → 서버의 _Validate()\n      true  → _Implementation()\n      false → 호출 클라이언트 연결 종료</code></pre><p><code>WithValidation</code>을 지정하면 같은 매개변수를 받는 bool 반환형 _Validate를 구현한다. false는 단순히 동작 한 번을 취소하는 결과가 아니므로 주의한다. 일반적인 게임 조건 불충족을 처리할 때는 이 차이를 고려한다.</p><p>서버에서 실행된다고 입력값이 저절로 안전해지는 것은 아니다. 허용 범위와 게임 규칙은 서버 코드에서 검사한다.</p>"
      }
    ],
    "references": [
      {
        "label": "Owner에서 연결까지",
        "url": "#material=unreal-network-testing"
      },
      {
        "label": "NetRole과 로컬 제어",
        "url": "#material=unreal-network-roles"
      },
      {
        "label": "Epic · Remote Procedure Calls",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/remote-procedure-calls-in-unreal-engine"
      },
      {
        "label": "Epic · Actor Owner and Owning Connection",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/actor-owner-and-owning-connection-in-unreal-engine"
      },
      {
        "label": "Epic · TActorIterator",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/Engine/TActorIterator"
      },
      {
        "label": "ChatX · 채팅 RPC·접속 알림 코드",
        "url": "https://github.com/jwh2077/ChatX/commit/7ca0ed21157497e83f705322dcc5685f2acaf8f9"
      },
      {
        "label": "ChatX · GameMode로 채팅 판정 연결",
        "url": "https://github.com/jwh2077/ChatX/commit/91e041f876bbb86074db51efa01a3c6d7c832f55"
      },
      {
        "label": "프로퍼티 복제와 숫자 야구 상태",
        "url": "#material=unreal-multiplayer-basics"
      }
    ]
  }
];
