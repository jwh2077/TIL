window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-network-testing.js"] = [
  {
    "id": "unreal-network-testing",
    "title": "Unreal 멀티플레이 실행 구분 — PIE·로컬 UI·NetMode",
    "summary": "전용 서버로 PIE 실행하기, 개인 UI 분기, NetMode와 NetDriver 연결 값 구분.",
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
        "title": "전용 서버로 PIE 테스트하기",
        "html": "<table><thead><tr><th scope=\"col\">설정</th><th scope=\"col\">의미</th></tr></thead><tbody><tr><td>Play Net Mode → Play as Client</td><td>클라이언트 창과 백그라운드 전용 서버로 테스트</td></tr><tr><td>Run Under One Process → 끄기</td><td>프로세스를 나눠 실행. 켜면 빠르게 테스트할 수 있지만 실제 실행 환경과 차이가 있음</td></tr><tr><td>Launch Separate Server</td><td>현재 Net Mode에서 요구하지 않아도 서버를 따로 실행. Play as Client에서는 필수 체크가 아님</td></tr><tr><td>Always On Top</td><td>새 게임 창을 다른 창 위에 표시</td></tr></tbody></table>",
        "text": "설정 위치: Editor Preferences → Level Editor → Play. 한 프로세스에서도 여러 월드로 멀티플레이 테스트가 가능하다. 프로세스를 나누는 설정은 테스트 환경을 바꾸는 것이며, UI 코드의 문제를 자동으로 고쳐 주지는 않는다."
      },
      {
        "title": "PIE 설정 화면",
        "html": "<figure style=\"margin:0\"><a href=\"assets/images/unreal-pie-settings-20261006.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/images/unreal-pie-settings-20261006.png\" alt=\"Play as Client 선택, Run Under One Process 해제, Launch Separate Server와 Always On Top 선택 상태\" loading=\"lazy\" width=\"1080\" height=\"644\" style=\"display:block;width:100%;height:auto\"></a><figcaption class=\"caption\">10월 6일 남긴 실제 설정 화면. 이미지를 누르면 크게 볼 수 있다.</figcaption></figure>"
      },
      {
        "title": "내 화면의 UI — IsLocalController()",
        "text": "PlayerController에서 로컬 플레이어의 UI를 처리할 때, 로컬 컨트롤러가 아니면 먼저 반환한다. !IsLocalController()와 IsLocalController() == false는 같은 조건이다. 리슨 서버의 방장도 로컬 플레이어이므로, 로컬이라는 말이 서버가 아니라는 뜻은 아니다.\n\n화면에 같은 디버그 문자열이 보이는 것과 같은 UI 위젯이 생성되는 것은 구분해서 확인한다. 이 조건만으로 위젯 생성·소유 대상·중복 호출 문제가 모두 해결되는 것은 아니다.",
        "code": "// PlayerController 멤버 함수 안에서\nif (!IsLocalController())\n{\n    return;\n}\n\n// 이 로컬 플레이어의 UI 처리"
      },
      {
        "title": "NetMode — 지금 월드가 어떤 모드인가",
        "html": "<table><thead><tr><th scope=\"col\">값</th><th scope=\"col\">실행 형태</th></tr></thead><tbody><tr><td>NM_Standalone</td><td>독립 실행</td></tr><tr><td>NM_DedicatedServer</td><td>로컬 플레이어 없는 전용 서버</td></tr><tr><td>NM_ListenServer</td><td>서버 역할과 로컬 플레이를 함께 수행</td></tr><tr><td>NM_Client</td><td>서버에 접속한 클라이언트</td></tr></tbody></table>",
        "text": "GetNetMode()의 반환형은 ENetMode다. NM_MAX는 실행 모드로 선택하는 값이 아니다.\n\nNetMode는 월드의 네트워크 실행 모드, IsLocalController()는 컨트롤러의 로컬 여부, HasAuthority()는 해당 Actor의 권한을 구분한다. 내 클라이언트와 다른 클라이언트는 모두 NM_Client일 수 있으므로 NetMode만으로 소유 플레이어를 구분하지 않는다."
      },
      {
        "title": "NetDriver·NetConnection — 연결을 담는 위치",
        "html": "<table><thead><tr><th scope=\"col\">대상</th><th scope=\"col\">역할</th></tr></thead><tbody><tr><td>UNetDriver</td><td>네트워크 연결을 소유·관리</td></tr><tr><td>UNetConnection</td><td>통신 상대와의 연결 객체</td></tr><tr><td>ServerConnection</td><td>클라이언트의 서버 연결. 서버 측에서는 null</td></tr><tr><td>ClientConnections</td><td>서버가 관리하는 클라이언트 연결 배열</td></tr></tbody></table>",
        "code": "서버의 NetDriver\n  ClientConnections → 클라이언트 A 연결\n                    → 클라이언트 B 연결\n\n클라이언트 A의 NetDriver\n  ServerConnection  → 서버 연결",
        "text": "멤버가 선언돼 있다는 것과 값이 연결 객체를 가리킨다는 것은 다르다. ServerConnection 멤버는 존재해도 값은 nullptr일 수 있고, ClientConnections 배열도 접속자가 없으면 비어 있을 수 있다. 기본 게임 통신 구조에서 클라이언트 사이의 상태 전달은 서버를 거친다."
      },
      {
        "title": "판정과 화면 표시 나누기",
        "html": "<ol class=\"reference-flow\"><li>클라이언트: 입력·요청</li><li>서버: 요청 조건 확인과 게임 상태 결정</li><li>클라이언트: 전달받은 결과를 UI·효과·소리로 표시</li></ol>",
        "text": "클라이언트가 보낸 값만 믿고 피해량이나 HP를 확정하지 않는다. 서버에서 규칙과 요청 조건을 검사한다. 이 흐름은 역할 구분을 위한 설명이며, 모든 클라이언트 조작을 막는다는 뜻은 아니다."
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
