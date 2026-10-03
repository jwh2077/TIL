window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-multiplayer-basics.js"] = [
  {
    "id": "unreal-multiplayer-basics",
    "title": "Unreal 멀티플레이 — 클래스 역할·서버·복제",
    "summary": "GameMode·GameState·PlayerState·GameInstance 비교, 리슨·전용 서버, 복제 권한과 통신 구분.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "CH4 과제 발제 · 2026-10-01",
    "source_name": "CH4개인과제10.1발제.txt / UE_Multiplayer_Server_TIL.md",
    "source_url": "",
    "notice": "10월 1일 발제에서 다룬 개념을 정리했다. 과제 안내와 당시 학습 과정은 관련 학습 기록에 있다.",
    "sections": [
      {
        "title": "입력부터 결과 표시까지",
        "html": "<ol class=\"reference-flow\"><li>클라이언트: 숫자 입력</li><li>서버: 정답과 비교</li><li>서버: Strike / Ball 판정</li><li>공유 상태 전달</li><li>클라이언트: 결과 표시</li></ol>"
      },
      {
        "title": "클래스별 역할",
        "html": "<table><thead><tr><th scope=\"col\">클래스</th><th scope=\"col\">담을 정보</th><th scope=\"col\">서버·클라이언트 관계</th></tr></thead><tbody><tr><td>GameMode</td><td>게임 규칙·승패 판정</td><td>서버에만 존재</td></tr><tr><td>GameState</td><td>라운드·팀 점수 등 전체 상태</td><td>서버에서 관리하고 클라이언트에 복제</td></tr><tr><td>PlayerState</td><td>닉네임·개인 점수 등 플레이어 정보</td><td>다른 플레이어에게 필요한 상태 공유</td></tr><tr><td>GameInstance</td><td>설정·맵 이동 후 유지할 로컬 데이터</td><td>각 프로세스에 따로 존재, 자동 동기화되지 않음</td></tr></tbody></table>"
      },
      {
        "title": "복제 대상과 HasAuthority()",
        "html": "<table><thead><tr><th scope=\"col\">항목</th><th scope=\"col\">구분</th></tr></thead><tbody><tr><td>복제 대상</td><td>GameState·PlayerState뿐 아니라 Actor·변수·Component 등도 대상이 될 수 있음</td></tr><tr><td>HasAuthority()</td><td>현재 Actor에 대한 Authority를 가지고 있는지 검사</td></tr></tbody></table>",
        "text": "공유할 필요가 없는 값을 모두 복제하지 않는다. HasAuthority()를 단순한 서버 여부 표시와 완전히 같은 뜻으로 사용하지 않는다."
      },
      {
        "title": "Listen Server와 Dedicated Server",
        "html": "<table><thead><tr><th scope=\"col\">구분</th><th scope=\"col\">구성</th><th scope=\"col\">주의점</th></tr></thead><tbody><tr><td>Listen Server</td><td>방장이 플레이하면서 서버 역할도 담당</td><td>방장이 나갔을 때 처리 필요</td></tr><tr><td>Dedicated Server</td><td>플레이어 화면 없이 서버 역할 담당</td><td>화면 디버그 메시지보다 로그로 상태 확인</td></tr></tbody></table>"
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
      "20261001-study"
    ]
  }
];
