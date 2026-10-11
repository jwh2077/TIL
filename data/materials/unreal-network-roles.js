window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-network-roles.js"] = [
  {
    "id": "unreal-network-roles",
    "title": "Unreal NetRole — LocalRole·RemoteRole과 로컬 제어",
    "summary": "Pawn의 역할을 서버·소유 클라이언트·다른 클라이언트에서 읽고, Possess 로그와 Authority·Ownership을 구분한다.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "멀티플레이",
    "source_name": "10-8-추가메모.txt / 10-11.txt",
    "source_url": "",
    "related_ids": [
      "20261008-chatx",
      "20261011-chatx"
    ],
    "sections": [
      {
        "title": "LocalRole·RemoteRole — 어느 월드에서 보는가",
        "html": "<p><code>NetMode</code>는 월드의 실행 모드, <code>NetRole</code>은 Actor의 네트워크 역할이다. <code>GetLocalRole()</code>은 현재 인스턴스의 역할, <code>GetRemoteRole()</code>은 원격에서의 역할을 읽는다. 컴퓨터 전체에 붙는 역할이 아니다.</p><p>아래는 A가 조종하는 복제 Pawn을 세 월드에서 본 일반적인 예다. Proxy는 가짜 화면이 아니라 각 클라이언트 월드에 있는 Actor다.</p><pre><code>서버의 Pawn A\n  Local: Authority\n  Remote: AutonomousProxy\n       │ 복제\n       ├─ 클라이언트 A: 내 Pawn\n       │  Local: AutonomousProxy\n       │  Remote: Authority\n       └─ 클라이언트 B: 다른 사람의 Pawn\n          Local: SimulatedProxy\n          Remote: Authority</code></pre><p>서버의 RemoteRole만으로 모든 클라이언트의 역할을 같게 생각하면 안 된다. 같은 Pawn도 소유 클라이언트와 다른 클라이언트에서 역할이 다르다.</p>"
      },
      {
        "title": "Possess 전후 — 서버 로그에서 바뀐 값",
        "html": "<p>10월 11일 Pawn에 남긴 로그다. 원본의 대괄호에 나란히 찍힌 LocalRole / RemoteRole을 줄로 나눴다.</p><pre><code>CXPawn::BeginPlay() Server\nLocal: ROLE_Authority\nRemote: ROLE_SimulatedProxy\n\nCXPawn::PossessedBy() Server\nLocal: ROLE_Authority\nRemote: ROLE_AutonomousProxy</code></pre><p>빙의 전후에도 서버의 LocalRole은 Authority다. 이 로그에서 달라진 것은 RemoteRole이다. 모든 Pawn이 생성 즉시 AutonomousProxy가 되는 것은 아니다.</p>"
      },
      {
        "title": "Authority·Ownership·로컬 제어 구분",
        "html": "<ul><li><code>HasAuthority()</code>: 현재 Actor의 LocalRole이 Authority인지 검사한다.</li><li><code>IsLocalController()</code>: 해당 Controller가 로컬 제어인지 검사한다.</li><li><code>IsLocallyControlled()</code>: 해당 Pawn을 로컬에서 제어하는지 검사한다.</li></ul><p>입력과 내 UI를 구분할 때 AutonomousProxy만 검사하면 리슨 서버의 방장 같은 경우를 놓칠 수 있다. 로컬 제어와 서버 권한은 동시에 성립할 수 있다.</p><p>무기 → Pawn → PlayerController로 Owner를 따라 연결을 찾는 것과, 무기 자체의 NetRole은 별개다. 소유 관계에 들어갔다고 무기와 파츠가 모두 AutonomousProxy가 되는 것은 아니다. Server RPC의 호출 조건도 역할 이름 하나가 아니라 소유 연결과 복제 설정을 함께 본다.</p>"
      },
      {
        "title": "RemoteRole이 None인 경우",
        "html": "<p>클라이언트에서만 생성한 비복제 Actor는 <code>LocalRole: Authority / RemoteRole: None</code>일 수 있다. 따라서 HasAuthority가 true라는 이유만으로 서버 월드라고 판단하지 않는다.</p><p>반대로 서버가 생성한 Actor라고 RemoteRole이 항상 None인 것도 아니다. 복제하는 AI Pawn처럼 SimulatedProxy로 전달되는 경우가 있다. RemoteRole은 플레이어 접속 여부를 판별하는 값이 아니다.</p>"
      }
    ],
    "references": [
      {
        "label": "연결과 Owner 관계",
        "url": "#material=unreal-network-testing"
      },
      {
        "label": "RPC 호출 조건",
        "url": "#material=unreal-rpc"
      },
      {
        "label": "Epic · Actor Role and Remote Role",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/actor-role-and-remote-role-in-unreal-engine"
      },
      {
        "label": "Epic · Actor Owner and Owning Connection",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/actor-owner-and-owning-connection-in-unreal-engine"
      }
    ]
  }
];
