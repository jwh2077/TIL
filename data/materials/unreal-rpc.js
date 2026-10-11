window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-rpc.js"] = [
  {
    "id": "unreal-rpc",
    "title": "Unreal RPC — Server·Client·NetMulticast 호출 조건",
    "summary": "RPC의 호출 위치와 실행 대상을 구분하고, 소유 연결·Reliable·WithValidation 조건을 찾아본다.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "멀티플레이",
    "source_name": "10-12.txt / 스크린샷 2026-10-12 012554.png / 스크린샷 2026-10-12 013034.png",
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
      }
    ]
  }
];
