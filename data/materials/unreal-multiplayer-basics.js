window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-multiplayer-basics.js"] = [
  {
    "id": "unreal-multiplayer-basics",
    "title": "Unreal 멀티플레이 — 클래스 역할·서버·복제",
    "summary": "서버·클래스별 역할, 접속 흐름과 Property Replication의 방향·Replicated·DOREPLIFETIME 설정.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "멀티플레이 개념 정리",
    "source_name": "CH4개인과제10.1발제.txt / UE_Multiplayer_Server_TIL.md / 10-5 서버.txt / 10-12숫자야구.txt",
    "source_url": "",
    "notice": "숫자 야구는 역할 구분을 설명하는 예시다. 과제 안내와 공부하며 남긴 질문은 관련 학습 기록에 있다.",
    "sections": [
      {
        "title": "P2P·Listen Server·Dedicated Server",
        "html": "<table><thead><tr><th scope=\"col\">구분</th><th scope=\"col\">구성</th><th scope=\"col\">주의점</th></tr></thead><tbody><tr><td>P2P (Peer to Peer)</td><td>참여자가 서로 데이터를 주고받는 구조</td><td>Unreal의 기본 클라이언트–서버 모델과 구분</td></tr><tr><td>Listen Server</td><td>방장이 플레이하면서 서버 역할도 담당</td><td>방장이 나갔을 때 처리 필요</td></tr><tr><td>Dedicated Server</td><td>플레이어 화면 없이 서버 역할 담당</td><td>화면 디버그 메시지보다 로그로 상태 확인</td></tr></tbody></table>",
        "text": "리슨 서버도 서버를 중심으로 통신한다. 방장이 직접 플레이한다는 이유로 P2P와 같은 구조가 되는 것은 아니다."
      },
      {
        "title": "클라이언트 접속 흐름",
        "html": "<ol class=\"reference-flow\"><li>클라이언트가 서버에 접속 요청</li><li>서버가 접속에 필요한 맵 정보 전달</li><li>클라이언트가 맵 로드</li><li>서버의 로그인 처리와 PlayerController 생성</li><li>클라이언트별로 필요한 객체·상태 복제</li></ol>",
        "text": "기본 클라이언트–서버 모델에서 클라이언트 간 게임 상태 전달은 서버를 거친다.",
        "items": [
          "서버와 각 클라이언트는 자기 월드와 객체를 따로 가진다.",
          "복제본은 서버 상태를 전달받는 로컬 객체다. ‘가짜’나 ‘약한 객체’로 구분하지 않는다.",
          "모든 Actor와 변수가 자동으로 동기화되는 것은 아니다."
        ]
      },
      {
        "title": "멀티플레이 클래스별 역할",
        "html": "<table><thead><tr><th scope=\"col\">클래스</th><th scope=\"col\">담을 정보</th><th scope=\"col\">서버·클라이언트 관계</th></tr></thead><tbody><tr><td>GameMode</td><td>게임 규칙·승패 판정</td><td>서버에만 존재</td></tr><tr><td>GameState</td><td>라운드·팀 점수 등 전체 상태</td><td>서버에서 관리하고 클라이언트에 복제</td></tr><tr><td>PlayerState</td><td>닉네임·개인 점수 등 플레이어 정보</td><td>다른 플레이어에게 필요한 상태 공유</td></tr><tr><td>GameInstance</td><td>설정·맵 이동 후 유지할 로컬 데이터</td><td>각 프로세스에 따로 존재, 자동 동기화되지 않음</td></tr><tr><td>PlayerController</td><td>플레이어 입력·Pawn 조종</td><td>서버와 해당 플레이어의 클라이언트에 존재. 다른 클라이언트에는 기본적으로 복제되지 않음</td></tr><tr><td>Pawn / Character</td><td>플레이어가 조종하는 게임 속 객체</td><td>복제 설정과 클라이언트별 필요 여부에 따라 전달</td></tr></tbody></table>",
        "text": "GameMode는 서버에서 게임 규칙을 담당하는 Actor다. 서버 프로세스 자체를 뜻하지 않는다."
      },
      {
        "title": "복제 대상과 HasAuthority()",
        "html": "<table><thead><tr><th scope=\"col\">항목</th><th scope=\"col\">구분</th></tr></thead><tbody><tr><td>복제 대상</td><td>GameState·PlayerState뿐 아니라 Actor·변수·Component 등도 대상이 될 수 있음</td></tr><tr><td>HasAuthority()</td><td>현재 Actor에 대한 Authority를 가지고 있는지 검사</td></tr></tbody></table>",
        "text": "공유할 필요가 없는 값을 모두 복제하지 않는다. HasAuthority()를 단순한 서버 여부 표시와 완전히 같은 뜻으로 사용하지 않는다."
      },
      {
        "title": "Property Replication(프로퍼티 레플리케이션) — 방향과 설정",
        "html": "<p>프로퍼티 복제는 지정한 상태 값을 서버의 Authority에서 클라이언트의 Proxy로 전달한다. 클라이언트가 값을 바꿨다고 서버로 역방향 복제되지는 않는다. 서버에 처리를 요청하는 RPC와 구분한다.</p><ol><li>Actor의 <code>bReplicates = true</code> 설정</li><li>복제할 속성의 <code>UPROPERTY()</code>에 <code>Replicated</code> 지정</li><li><code>Net/UnrealNetwork.h</code> 포함</li><li><code>GetLifetimeReplicatedProps()</code>를 재정의하고 부모 함수를 호출한 뒤 <code>DOREPLIFETIME(클래스명, 속성명)</code>으로 등록</li></ol><p>모든 속성을 무조건 보내는 것이 아니라 공유할 속성을 선택한다. 이후 값의 변경을 전달하되, 전달 대상과 시점은 Actor의 관련성·복제 조건 등의 영향을 받는다. 매번 바뀐 중간 값이 모두 이벤트처럼 전달된다는 의미는 아니다.</p><h3>ChatX에서 복제한 값</h3><ul><li><code>CXPlayerState</code>: PlayerNameString, CurrentGuessCount, MaxGuessCount</li><li><code>CXPlayerController</code>: NotificationText</li></ul><p>91e041f 커밋에서 각 속성에 Replicated를 지정하고 GetLifetimeReplicatedProps의 DOREPLIFETIME에 등록했다. PlayerState의 플레이어 정보와 Controller 소유자에게 표시할 알림을 나눠 둔 예다. 위젯 자체를 복제하는 방식은 아니다.</p>"
      },
      {
        "title": "역할을 나누는 예 — 숫자 야구",
        "html": "<ol class=\"reference-flow\"><li>클라이언트: 숫자 입력</li><li>서버: 정답과 비교</li><li>서버: Strike / Ball 판정</li><li>공유 상태 전달</li><li>클라이언트: 결과 표시</li></ol><h3>GameMode에 둔 함수</h3><ul><li><code>GenerateSecretNumber</code>: 1~9 배열에서 하나씩 뽑고 제거해 세 자리 정답 생성</li><li><code>IsGuessNumberString</code>: 입력 후보의 길이·숫자·0 포함 여부 검사</li><li><code>JudgeResult</code>: 같은 위치면 Strike, 다른 위치에 포함되면 Ball, 둘 다 없으면 OUT</li><li><code>IncreaseGuessCount / JudgeGame / ResetGame</code>: 시도 횟수 증가·게임 종료 판단·새 정답과 횟수 초기화</li></ul><h3>이 코드에서 더 점검할 부분</h3><p>91e041f 기준으로 TSet에 넣은 문자 수를 검사하지 않아 중복 숫자가 통과할 수 있다. AllPlayerControllers에 접속한 Controller를 추가하는 코드도 빠져 있으며, JudgeGame과 ResetGame이 플레이어 순회 안에서 호출된다. 함수가 작성된 상태와 게임 전체의 정상 동작은 구분해야 한다.</p>"
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
        "title": "서버 디버깅 — 실행 위치와 로그 출력",
        "items": [
          "서버와 클라이언트 두 개를 나눠 그려 코드 실행 위치와 값의 이동을 따라간다.",
          "전용 서버에는 화면이 없으므로 화면 메시지만 사용하지 않는다.",
          "UE_LOG와 프로젝트용 로그 카테고리로 출력 위치와 내용을 구분한다."
        ]
      }
    ],
    "related_ids": [
      "20261001-study",
      "20261005-chatx",
      "20261012-chatx"
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
      },
      {
        "label": "RPC 호출 조건과 채팅 전달",
        "url": "#material=unreal-rpc"
      },
      {
        "label": "Epic · Replicate Actor Properties",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/replicate-actor-properties-in-unreal-engine"
      },
      {
        "label": "ChatX · 숫자 야구 판정·PlayerState 복제 코드",
        "url": "https://github.com/jwh2077/ChatX/commit/91e041f876bbb86074db51efa01a3c6d7c832f55"
      }
    ],
    "quick_links": [
      {
        "label": "서버 종류",
        "section": "P2P·Listen Server·Dedicated Server"
      },
      {
        "label": "클래스 역할",
        "section": "멀티플레이 클래스별 역할"
      },
      {
        "label": "프로퍼티 복제",
        "section": "Property Replication(프로퍼티 레플리케이션) — 방향과 설정"
      }
    ]
  }
];
