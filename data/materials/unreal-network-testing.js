window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-network-testing.js"] = [
  {
    "id": "unreal-network-testing",
    "title": "Unreal 멀티플레이 실행 구분 — PIE·로컬 UI·NetMode",
    "summary": "PIE 전용 서버 설정, 내 화면에만 UI 표시하기, NetMode와 서버·클라이언트 연결 구조를 찾아보는 문서.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "멀티플레이 실행·디버깅",
    "source_name": "10-6.txt / 스크린샷 2026-10-06 153305.png",
    "source_url": "",
    "related_ids": [
      "20261006-chatx"
    ],
    "sections": [
      {
        "title": "전용 서버 테스트 — PIE 설정",
        "html": "<p>설정 위치: <strong>Editor Preferences → Level Editor → Play</strong></p><table><thead><tr><th scope=\"col\">설정</th><th scope=\"col\">선택 / 용도</th></tr></thead><tbody><tr><td>Play Net Mode</td><td><strong>Play as Client</strong> — 클라이언트 창과 백그라운드 전용 서버 실행</td></tr><tr><td>Run Under One Process</td><td><strong>끄기</strong> — 창마다 프로세스를 나눠 테스트</td></tr><tr><td>Always On Top</td><td>선택 사항. 테스트 창을 다른 창 위에 표시</td></tr></tbody></table><p><strong>설정할 때 참고</strong></p><ul><li>Run Under One Process를 켜도 멀티플레이 테스트는 가능하다. 빠르게 실행할 수 있지만 실제로 프로세스를 나눈 환경과는 차이가 있다.</li><li>Play as Client는 전용 서버를 실행하므로 Launch Separate Server를 반드시 켤 필요는 없다. 이 옵션은 현재 모드에서 요구하지 않아도 서버를 따로 실행할 때 사용한다.</li></ul><figure style=\"margin:0\"><a href=\"assets/images/unreal-pie-settings-20261006.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/images/unreal-pie-settings-20261006.png\" alt=\"Play as Client 선택, Run Under One Process 해제, Launch Separate Server와 Always On Top 선택 상태\" loading=\"lazy\" width=\"1080\" height=\"644\" style=\"display:block;width:100%;height:auto\"></a><figcaption class=\"caption\">10월 6일 남긴 실제 설정 화면. 이미지를 누르면 크게 볼 수 있다.</figcaption></figure>"
      },
      {
        "title": "내 화면에만 UI 표시 — IsLocalController()",
        "html": "<p>PlayerController에서 <strong>로컬 플레이어의 컨트롤러인지</strong> 검사한다. 로컬이 아니면 반환하고, 로컬일 때만 UI 처리를 이어간다.</p><pre><code>// PlayerController 멤버 함수 안에서\nif (!IsLocalController())\n{\n    return;\n}\n\n// 이 로컬 플레이어의 UI 처리</code></pre><ul><li><code>!IsLocalController()</code>와 <code>IsLocalController() == false</code>는 같은 조건이다.</li><li>리슨 서버의 방장도 로컬 플레이어다. <strong>로컬 = 서버가 아님</strong>으로 구분하면 안 된다.</li></ul><p><strong>두 화면에 같은 출력이 보일 때</strong><br>PrintString의 디버그 출력인지, UI 위젯이 양쪽에 생성된 것인지 먼저 구분한다. 위젯이라면 생성 위치·소유 대상·중복 호출을 살펴본다. 프로세스를 나누는 설정만으로 UI 코드가 고쳐지지는 않는다.</p>"
      },
      {
        "title": "서버인지 클라이언트인지 구분 — GetNetMode()",
        "html": "<p><code>GetNetMode()</code>는 현재 월드의 실행 모드를 <code>ENetMode</code> 값으로 반환한다.</p><table><thead><tr><th scope=\"col\">값</th><th scope=\"col\">실행 형태</th></tr></thead><tbody><tr><td>NM_Standalone</td><td>독립 실행</td></tr><tr><td>NM_DedicatedServer</td><td>로컬 플레이어 없는 전용 서버</td></tr><tr><td>NM_ListenServer</td><td>서버 역할과 로컬 플레이를 함께 수행</td></tr><tr><td>NM_Client</td><td>서버에 접속한 클라이언트</td></tr></tbody></table><p><code>NM_MAX</code>는 실행 모드로 사용하는 값이 아니다.</p><table><thead><tr><th scope=\"col\">구분할 대상</th><th scope=\"col\">사용하는 함수</th></tr></thead><tbody><tr><td>월드가 서버인지 클라이언트인지</td><td>GetNetMode()</td></tr><tr><td>이 컨트롤러가 로컬 플레이어의 것인지</td><td>IsLocalController()</td></tr><tr><td>해당 Actor에 권한이 있는지</td><td>HasAuthority()</td></tr></tbody></table><p>나와 다른 사람의 클라이언트는 모두 <code>NM_Client</code>일 수 있다. <strong>NetMode만으로 누구의 UI인지 구분할 수는 없다.</strong></p>"
      },
      {
        "title": "연결 구조 — NetDriver와 NetConnection",
        "html": "<p><strong>UNetConnection</strong>은 통신 상대와의 연결 객체이고, <strong>UNetDriver</strong>는 그 연결들을 소유하고 관리한다.</p><table><thead><tr><th scope=\"col\">NetDriver가 있는 쪽</th><th scope=\"col\">관리하는 연결</th></tr></thead><tbody><tr><td>서버</td><td>ClientConnections — 접속한 클라이언트들의 연결 배열</td></tr><tr><td>클라이언트</td><td>ServerConnection — 서버로 연결되는 포인터</td></tr></tbody></table><pre><code>서버의 NetDriver\n  ClientConnections → 클라이언트 A 연결\n                    → 클라이언트 B 연결\n\n클라이언트 A의 NetDriver\n  ServerConnection  → 서버 연결</code></pre><p>기본 게임 통신 구조에서 클라이언트끼리 상태를 전달할 때는 서버를 거친다.</p>"
      },
      {
        "title": "멤버가 있어도 연결은 없을 수 있다",
        "html": "<table><thead><tr><th scope=\"col\">멤버</th><th scope=\"col\">연결이 없는 상태</th></tr></thead><tbody><tr><td>ServerConnection</td><td>멤버는 선언돼 있지만 값은 nullptr. 서버 측에서도 nullptr이다.</td></tr><tr><td>ClientConnections</td><td>배열은 존재하지만 접속자가 없으면 비어 있다.</td></tr></tbody></table><p><strong>멤버의 선언과 실제 값은 다르다.</strong> ServerConnection이라는 멤버가 있다고 해서 연결 객체까지 생성돼 있다는 뜻은 아니다.</p>"
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
      }
    ]
  }
];
