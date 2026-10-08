window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-network-testing.js"] = [
  {
    "id": "unreal-network-testing",
    "title": "Unreal 전용 서버 — 실행 설정과 연결·소유 관계",
    "summary": "전용 서버와 두 클라이언트의 관계, 실행 위치, NetDriver의 연결 관리와 Owner를 따라 Owning Connection을 찾는 흐름.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "멀티플레이 실행·디버깅",
    "source_name": "10-6.txt / 스크린샷 2026-10-06 153305.png / 10.07.txt",
    "source_url": "",
    "related_ids": [
      "20261006-chatx",
      "20261007-chatx"
    ],
    "sections": [
      {
        "title": "전용 서버와 두 클라이언트 — 각자 월드를 가진다",
        "html": "<p>전용 서버는 게임의 판정과 상태를 관리하고, 플레이어 A와 B는 각각 클라이언트로 접속한다. <strong>서버와 클라이언트는 서로 다른 월드와 객체를 가진다.</strong> 같은 PC에서 PIE로 테스트할 때도 이 구분은 유지된다.</p><pre><code>전용 서버: 규칙·판정·상태\n ├─ 연결 A ↔ 클라이언트 A: A의 입력·화면\n └─ 연결 B ↔ 클라이언트 B: B의 입력·화면</code></pre><h3>다른 플레이어가 보이는 이유</h3><p>A의 화면에 B가 보인다고 해서 B의 객체를 함께 사용하는 것은 아니다. 서버가 필요한 상태를 보내면 A의 월드에 있는 B의 복제본이 그 상태를 반영한다. 서버가 완성된 화면을 보내는 방식도 아니다.</p>"
      },
      {
        "title": "서버와 각 클라이언트에 있는 객체",
        "html": "<p><strong>A와 B가 전용 서버에 접속한 경우</strong>다. 아래 세 영역은 서로 다른 월드를 나타낸다. 여기서 “가지고 있다”는 것은 객체가 그 월드에 존재한다는 뜻이며, Actor의 <code>Owner</code> 관계와는 구분한다.</p><div class=\"network-worlds\" role=\"group\" aria-label=\"전용 서버와 두 클라이언트의 객체 배치\"><div class=\"network-world\"><h3>전용 서버</h3><h4>Actor</h4><ul><li><strong>GameMode</strong></li><li>PlayerController A · B</li><li>Pawn A · B</li><li>맵의 배경 Actor</li></ul><h4>ABP · UI</h4><ul><li>A·B 캐릭터의 ABP</li></ul><p class=\"network-absent\">로컬 플레이어의 UI 없음</p></div><div class=\"network-world\"><h3>클라이언트 A</h3><h4>Actor</h4><ul><li><strong>PlayerController A</strong></li><li>Pawn A · B의 복제본</li><li>맵의 배경 Actor</li></ul><h4>ABP · UI</h4><ul><li>A·B 캐릭터의 ABP</li><li><strong>A의 로컬 UI</strong></li></ul><p class=\"network-absent\">GameMode · PlayerController B 없음</p></div><div class=\"network-world\"><h3>클라이언트 B</h3><h4>Actor</h4><ul><li><strong>PlayerController B</strong></li><li>Pawn A · B의 복제본</li><li>맵의 배경 Actor</li></ul><h4>ABP · UI</h4><ul><li>A·B 캐릭터의 ABP</li><li><strong>B의 로컬 UI</strong></li></ul><p class=\"network-absent\">GameMode · PlayerController A 없음</p></div></div><p class=\"caption\">A와 B의 Pawn이 서로 보이도록 복제된 예시다. 실제 Actor 전달 범위는 복제 설정과 관련성에 따라 달라진다. 배경은 각 월드에서 맵을 로드해 존재할 수 있으며, 모두 서버에서 복제되는 것은 아니다.</p><p><strong>ABP는 서버와 클라이언트 양쪽에 존재하고, UI는 각 로컬 화면에 둔다.</strong> ABP와 UI 자체를 Actor로 분류한 것은 아니다. ABP가 존재하는 위치와 ABP 자체가 네트워크 복제되는지는 별개의 문제다.</p>"
      },
      {
        "title": "연결 구조 — NetDriver와 NetConnection",
        "html": "<p><strong>NetDriver는 연결들을 관리하고, NetConnection은 통신 상대와의 연결을 나타낸다.</strong> 서버는 여러 클라이언트 연결을 관리하지만, 각 클라이언트는 서버 연결을 가진다.</p><pre><code>전용 서버의 NetDriver\n ├─ ClientConnections: A와의 연결\n │     ↕\n │   A의 NetDriver.ServerConnection\n └─ ClientConnections: B와의 연결\n       ↕\n     B의 NetDriver.ServerConnection</code></pre><p>A에서 B로 게임 상태를 전달할 때는 서버를 거친다. 위의 A·B 표시는 상대를 구분한 것으로, 배열의 고정 인덱스나 플레이어 번호를 뜻하지 않는다.</p><pre><code>// UNetDriver의 연결 멤버 — 수업 메모 발췌\n// 클라이언트에서 서버로 향하는 연결\nTObjectPtr&lt;UNetConnection&gt; ServerConnection;\n\n// 서버에서 접속한 클라이언트들을 관리하는 배열\nTArray&lt;TObjectPtr&lt;UNetConnection&gt;&gt; ClientConnections;</code></pre><p>드라이버를 PC 한 대당 하나라고 세기보다는 월드와 드라이버의 용도를 구분한다. 서버의 Listen 경로와 클라이언트의 접속 경로도 같지 않다.</p>"
      },
      {
        "title": "멤버가 있어도 연결은 없을 수 있다",
        "html": "<p><code>ServerConnection</code> 멤버가 선언되어 있다는 것과 실제 연결 객체를 가리킨다는 것은 다르다.</p><ul><li><code>ServerConnection == nullptr</code>: 포인터에 연결 객체가 없다. 서버 쪽에서도 이 값은 nullptr이다.</li><li><code>ClientConnections</code>가 빈 배열: 배열은 있지만 담긴 클라이언트 연결이 없다.</li></ul><p>“연결이 있다”는 말은 멤버 이름이 존재한다는 뜻이 아니라, 그 안에 실제 연결이 잡혀 있다는 뜻으로 읽어야 한다.</p>"
      },
      {
        "title": "Ownership — has-a·Attach·Authority와 구분",
        "html": "<p><strong>Owner는 이 Actor의 소유자로 지정한 Actor다.</strong> 그 관계를 따라 플레이어의 PlayerController에 도달하면 해당 플레이어의 Owning Connection을 찾을 수 있다.</p><h3>무기를 Pawn의 소유로 지정하는 예</h3><pre><code>// 관계 설명용 예시: 서버에서 소유 관계 설정\nWeapon-&gt;SetOwner(Pawn);\n\n무기 Actor\n  → Owner인 Pawn\n  → Pawn을 조종하는 PlayerController\n  → 해당 플레이어의 NetConnection</code></pre><p>이 예시는 프로젝트에 적용을 마쳤다는 뜻이 아니다. Owner를 지정한 뒤 연결을 찾는 코드 흐름은 다음 항목에서 이어진다.</p><h3>무기를 가지고 있는 것과 Owner 지정은 다르다</h3><p>캐릭터가 무기 포인터를 멤버로 보관하는 것은 <strong>has-a</strong> 관계로 볼 수 있다. 하지만 포인터에 넣는 것만으로 Unreal의 Owner가 자동 설정되지는 않는다. 무기를 손에 <strong>Attach</strong>하는 것도 공간적으로 붙이는 작업이므로 별도다.</p><p><strong>Ownership과 Authority도 다르다.</strong> 어떤 클라이언트의 소유인지 정하는 것과 Actor 상태를 결정할 권한은 구분한다. Owner를 지정했다고 서버의 판정 권한이 클라이언트로 넘어가지는 않는다.</p>"
      },
      {
        "title": "GetNetConnection() — Owner에서 연결까지",
        "html": "<p>아래는 10월 7일 메모에 남긴 엔진 코드의 핵심 흐름이다. 사용 중인 엔진 버전에 따라 구현은 다를 수 있다.</p><h3>1. 일반 Actor는 Owner에게 연결을 묻는다</h3><pre><code>UNetConnection* AActor::GetNetConnection() const\n{\n    return Owner ? Owner-&gt;GetNetConnection() : nullptr;\n}</code></pre><h3>2. Pawn은 Controller를 먼저 확인한다</h3><pre><code>UNetConnection* APawn::GetNetConnection() const\n{\n    if (Controller)\n    {\n        return Controller-&gt;GetNetConnection();\n    }\n    return Super::GetNetConnection();\n}</code></pre><h3>3. PlayerController에서 연결을 얻는다</h3><pre><code>UNetConnection* APlayerController::GetNetConnection() const\n{\n    return (Player != nullptr) ? NetConnection : nullptr;\n}</code></pre><p>이 코드는 연결을 찾는 과정이다. Owner가 없다고 모든 복제·통신이 금지되는 것은 아니다. Owning Connection은 소유자 기준 복제 조건과 RPC 대상 등을 정할 때 사용한다. GetNetConnection()이 임의의 하위 Actor를 찾아 내려가는 함수도 아니다.</p>"
      },
      {
        "title": "서버인지 클라이언트인지 구분 — GetNetMode()",
        "html": "<p><code>GetNetMode()</code>는 현재 월드의 실행 모드를 <code>ENetMode</code> 값으로 반환한다.</p><table><thead><tr><th scope=\"col\">값</th><th scope=\"col\">실행 형태</th></tr></thead><tbody><tr><td>NM_Standalone</td><td>원격 연결 없이 서버·로컬 플레이 로직을 실행. 싱글·로컬 멀티플레이</td></tr><tr><td>NM_DedicatedServer</td><td>로컬 플레이어 없는 전용 서버</td></tr><tr><td>NM_ListenServer</td><td>서버 역할과 로컬 플레이를 함께 수행</td></tr><tr><td>NM_Client</td><td>서버에 접속해 입력·로컬 표현 등을 실행. 서버 전용 판정과 구분</td></tr></tbody></table><p><code>NM_MAX</code>는 실행 모드로 사용하는 값이 아니다.</p><table><thead><tr><th scope=\"col\">구분할 대상</th><th scope=\"col\">사용하는 함수</th></tr></thead><tbody><tr><td>월드가 서버인지 클라이언트인지</td><td>GetNetMode()</td></tr><tr><td>이 컨트롤러가 로컬 플레이어의 것인지</td><td>IsLocalController()</td></tr><tr><td>해당 Actor에 권한이 있는지</td><td>HasAuthority()</td></tr></tbody></table><p>나와 다른 사람의 클라이언트는 모두 <code>NM_Client</code>일 수 있다. <strong>NetMode만으로 누구의 UI인지 구분할 수는 없다.</strong></p>"
      },
      {
        "title": "전용 서버 테스트 — PIE 설정",
        "html": "<p>설정 위치: <strong>Editor Preferences → Level Editor → Play</strong></p><table><thead><tr><th scope=\"col\">설정</th><th scope=\"col\">선택 / 용도</th></tr></thead><tbody><tr><td>Play Net Mode</td><td><strong>Play as Client</strong> — 클라이언트 창과 백그라운드 전용 서버 실행</td></tr><tr><td>Run Under One Process</td><td><strong>끄기</strong> — 창마다 프로세스를 나눠 테스트</td></tr><tr><td>Always On Top</td><td>선택 사항. 테스트 창을 다른 창 위에 표시</td></tr></tbody></table><p><strong>설정할 때 참고</strong></p><ul><li>Run Under One Process를 켜도 멀티플레이 테스트는 가능하다. 빠르게 실행할 수 있지만 실제로 프로세스를 나눈 환경과는 차이가 있다.</li><li>Play as Client는 전용 서버를 실행하므로 Launch Separate Server를 반드시 켤 필요는 없다. 이 옵션은 현재 모드에서 요구하지 않아도 서버를 따로 실행할 때 사용한다.</li></ul><figure style=\"margin:0\"><a href=\"assets/images/unreal-pie-settings-20261006.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/images/unreal-pie-settings-20261006.png\" alt=\"Play as Client 선택, Run Under One Process 해제, Launch Separate Server와 Always On Top 선택 상태\" loading=\"lazy\" width=\"1080\" height=\"644\" style=\"display:block;width:100%;height:auto\"></a><figcaption class=\"caption\">10월 6일 남긴 실제 설정 화면. 이미지를 누르면 크게 볼 수 있다.</figcaption></figure>"
      },
      {
        "title": "내 화면에만 UI 표시 — IsLocalController()",
        "html": "<p>PlayerController에서 <strong>로컬 플레이어의 컨트롤러인지</strong> 검사한다. 로컬이 아니면 반환하고, 로컬일 때만 UI 처리를 이어간다.</p><pre><code>// PlayerController 멤버 함수 안에서\nif (!IsLocalController())\n{\n    return;\n}\n\n// 이 로컬 플레이어의 UI 처리</code></pre><ul><li><code>!IsLocalController()</code>와 <code>IsLocalController() == false</code>는 같은 조건이다.</li><li>리슨 서버의 방장도 로컬 플레이어다. <strong>로컬 = 서버가 아님</strong>으로 구분하면 안 된다.</li></ul><p><strong>두 화면에 같은 출력이 보일 때</strong><br>PrintString의 디버그 출력인지, UI 위젯이 양쪽에 생성된 것인지 먼저 구분한다. 위젯이라면 생성 위치·소유 대상·중복 호출을 살펴본다. 프로세스를 나누는 설정만으로 UI 코드가 고쳐지지는 않는다.</p>"
      },
      {
        "title": "HP 판정은 서버, 화면 표시는 클라이언트",
        "html": "<ol class=\"reference-flow\"><li>클라이언트: 입력·요청</li><li>서버: 요청 조건 확인과 게임 상태 결정</li><li>클라이언트: 전달받은 결과를 UI·효과·소리로 표시</li></ol>",
        "text": "피해량이나 HP는 클라이언트가 보낸 값만으로 확정하지 않고, 서버에서 규칙과 요청 조건을 검사한다. 클라이언트는 전달받은 결과를 화면에 표시한다."
      }
    ],
    "references": [
      {
        "label": "클래스 역할·서버·복제 기본 개념",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-multiplayer-basics"
      },
      {
        "label": "Epic · PIE Multiplayer Options",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/play-in-editor-multiplayer-options-in-unreal-engine"
      },
      {
        "label": "Epic · 멀티플레이 디버깅",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/testing-and-debugging-networked-games-in-unreal-engine"
      },
      {
        "label": "Epic · IsLocalController",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/Engine/GameFramework/APlayerController/IsLocalController?application_version=5.5"
      },
      {
        "label": "Epic · UNetDriver",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/UNetDriver"
      },
      {
        "label": "Epic · ENetMode",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/Engine/ENetMode"
      },
      {
        "label": "Epic · Actor Owner and Owning Connection",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/actor-owner-and-owning-connection-in-unreal-engine"
      },
      {
        "label": "Epic · Networking Overview",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/networking-overview-for-unreal-engine"
      },
      {
        "label": "Epic · SetOwner",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Actor/SetOwner"
      }
    ]
  }
];
