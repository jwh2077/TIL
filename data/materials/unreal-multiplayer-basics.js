window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-multiplayer-basics.js"] = [
  {
    "id": "unreal-multiplayer-basics",
    "title": "Unreal 멀티플레이 — 클래스 역할·서버·복제",
    "summary": "서버 종류, 클라이언트 접속 흐름, GameMode·PlayerController 등 클래스별 위치와 복제 범위.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "멀티플레이 개념 정리",
    "source_name": "CH4개인과제10.1발제.txt / UE_Multiplayer_Server_TIL.md / 10-5 서버.txt",
    "source_url": "",
    "notice": "10월 1일 발제와 10월 5일 서버 메모의 개념을 묶었다. 과제 안내와 당시 공부하며 남긴 질문은 관련 학습 기록에 있다.",
    "sections": [
      {
        "title": "입력부터 결과 표시까지",
        "html": "<ol class=\"reference-flow\"><li>클라이언트: 숫자 입력</li><li>서버: 정답과 비교</li><li>서버: Strike / Ball 판정</li><li>공유 상태 전달</li><li>클라이언트: 결과 표시</li></ol>"
      },
      {
        "title": "클래스별 역할",
        "html": "<table><thead><tr><th scope=\"col\">클래스</th><th scope=\"col\">담을 정보</th><th scope=\"col\">서버·클라이언트 관계</th></tr></thead><tbody><tr><td>GameMode</td><td>게임 규칙·승패 판정</td><td>서버에만 존재</td></tr><tr><td>GameState</td><td>라운드·팀 점수 등 전체 상태</td><td>서버에서 관리하고 클라이언트에 복제</td></tr><tr><td>PlayerState</td><td>닉네임·개인 점수 등 플레이어 정보</td><td>다른 플레이어에게 필요한 상태 공유</td></tr><tr><td>GameInstance</td><td>설정·맵 이동 후 유지할 로컬 데이터</td><td>각 프로세스에 따로 존재, 자동 동기화되지 않음</td></tr><tr><td>PlayerController</td><td>플레이어 입력·Pawn 조종</td><td>서버와 해당 플레이어의 클라이언트에 존재. 다른 클라이언트에는 기본적으로 복제되지 않음</td></tr><tr><td>Pawn / Character</td><td>플레이어가 조종하는 게임 속 객체</td><td>복제 설정과 클라이언트별 필요 여부에 따라 전달</td></tr></tbody></table>",
        "text": "GameMode는 서버에서 게임 규칙을 담당하는 Actor다. 서버 프로세스 자체를 뜻하지 않는다."
      },
      {
        "title": "복제 대상과 HasAuthority()",
        "html": "<table><thead><tr><th scope=\"col\">항목</th><th scope=\"col\">구분</th></tr></thead><tbody><tr><td>복제 대상</td><td>GameState·PlayerState뿐 아니라 Actor·변수·Component 등도 대상이 될 수 있음</td></tr><tr><td>HasAuthority()</td><td>현재 Actor에 대한 Authority를 가지고 있는지 검사</td></tr></tbody></table>",
        "text": "공유할 필요가 없는 값을 모두 복제하지 않는다. HasAuthority()를 단순한 서버 여부 표시와 완전히 같은 뜻으로 사용하지 않는다."
      },
      {
        "title": "P2P·Listen Server·Dedicated Server",
        "html": "<table><thead><tr><th scope=\"col\">구분</th><th scope=\"col\">구성</th><th scope=\"col\">주의점</th></tr></thead><tbody><tr><td>P2P (Peer to Peer)</td><td>참여자가 서로 데이터를 주고받는 구조</td><td>Unreal의 기본 클라이언트–서버 모델과 구분</td></tr><tr><td>Listen Server</td><td>방장이 플레이하면서 서버 역할도 담당</td><td>방장이 나갔을 때 처리 필요</td></tr><tr><td>Dedicated Server</td><td>플레이어 화면 없이 서버 역할 담당</td><td>화면 디버그 메시지보다 로그로 상태 확인</td></tr></tbody></table>",
        "text": "리슨 서버도 서버를 중심으로 통신한다. 방장이 직접 플레이한다는 이유로 P2P와 같은 구조가 되는 것은 아니다."
      },
      {
        "title": "클라이언트 접속 흐름",
        "html": "<ol class=\"reference-flow\"><li>클라이언트가 서버에 접속 요청</li><li>서버가 접속에 필요한 맵 정보 전달</li><li>클라이언트가 맵 로드</li><li>서버의 로그인 처리와 PlayerController 생성</li><li>클라이언트별로 필요한 객체·상태 복제</li></ol>",
        "text": "기본 클라이언트–서버 모델에서 클라이언트 간 게임 상태 전달은 서버를 거친다. 서버와 각 클라이언트는 자기 월드와 객체를 따로 가진다. 복제본을 가짜나 약한 객체로 구분하기보다, 서버의 권한 있는 상태와 클라이언트의 로컬 객체를 구분한다. 모든 Actor와 변수가 자동으로 동기화되는 것은 아니다."
      },
      {
        "title": "PIE와 ?Listen 구분",
        "html": "<table><thead><tr><th scope=\"col\">표현</th><th scope=\"col\">의미</th></tr></thead><tbody><tr><td>PIE (Play In Editor)</td><td>에디터에서 게임을 실행하는 기능. PIE 자체가 전용 서버를 뜻하지는 않음</td></tr><tr><td>맵 이름 뒤의 ?Listen</td><td>해당 맵을 리슨 서버로 열기 위한 옵션</td></tr><tr><td>전용 서버 실행</td><td>서버 실행 대상과 실행 옵션을 별도로 사용. ?Listen을 빼는 것만으로 전용 서버가 되지는 않음</td></tr></tbody></table>"
      },
      {
        "title": "TCP·UDP와 RPC 전달 방식",
        "html": "<table><thead><tr><th scope=\"col\">구분</th><th scope=\"col\">핵심</th></tr></thead><tbody><tr><td>TCP</td><td>전달·순서를 보장하기 위한 재전송이 있음</td></tr><tr><td>UDP</td><td>프로토콜 자체는 전달·순서를 보장하지 않음</td></tr><tr><td>Reliable / Unreliable RPC</td><td>언리얼에서 전달 신뢰성을 구분하는 설정</td></tr></tbody></table>",
        "text": "TCP = 웹, UDP = 게임으로만 외우지 않고 데이터의 성격으로 구분한다. 전송 프로토콜과 RPC 옵션은 같은 분류가 아니다."
      },
      {
        "title": "서버 디버깅",
        "items": [
          "서버와 클라이언트 두 개를 나눠 그려 코드 실행 위치와 값의 이동을 따라간다.",
          "전용 서버에는 화면이 없으므로 화면 메시지만 사용하지 않는다.",
          "UE_LOG와 프로젝트용 로그 카테고리로 출력 위치와 내용을 구분한다."
        ]
      }
    ],
    "related_ids": [
      "20261001-study",
      "20261005-chatx"
    ],
    "references": [
      {
        "label": "Epic 공식 문서 · Client-Server Model",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/client-server-model?application_version=4.27"
      },
      {
        "label": "Epic 공식 문서 · Networking Overview",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-overview?application_version=4.27"
      },
      {
        "label": "Epic 공식 문서 · Actors and their Owning Connections",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/actors-and-their-owning-connections-in-unreal-engine?application_version=5.2"
      },
      {
        "label": "PIE·로컬 UI·NetMode 실행 구분",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-network-testing"
      }
    ]
  }
];
