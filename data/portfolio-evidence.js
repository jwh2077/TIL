/* Single source of truth for four alternative portfolio experiences. Verified against public TIL records through 2026-11-09. */
window.TIL_PORTFOLIO_EVIDENCE = {
  "version": "2026-11-09",
  "policy": "검증 가능한 공개 학습·프로젝트 기록을 근거로 작성. 작업 시도, 관찰, 최종 검증을 구분함.",
  "cases": [
    {
      "id": "case-priest",
      "sourceProject": "priest",
      "title": "Project Priest",
      "kind": "팀 액션 게임",
      "period": "2026.09 · 팀 발표 09.29",
      "state": "팀 발표 완료",
      "role": "적 AI · 무기 파츠 · UI 데이터 연동",
      "stack": [
        "Unreal Engine 5",
        "C++",
        "Behavior Tree",
        "Blackboard",
        "DataTable"
      ],
      "focus": "전투 AI의 상태 전환과 공격 판정 흐름",
      "intro": "순찰·감지·추적·공격을 연결하고, 무기 파츠 데이터를 능력치와 UI에 전달하는 기능을 담당했습니다.",
      "contributions": [
        "AIController·Behavior Tree·Blackboard를 연결해 행동 조건을 구성",
        "파츠 정보의 저장·참조·장착 데이터와 UI 전달 경로 점검",
        "공격 Overlap·Anim Notify·Mesh 사망 처리 문제 조사"
      ],
      "challenge": "공격 모션이 보이지만 피해가 적용되지 않는 구간이 있었고, 플레이어를 놓치는 순간 참조를 비우면 전투 흐름이 끊겼습니다.",
      "diagnosis": "Collision Box 높이·Capsule 실제 겹침·Overlap·Notify 호출 시점을 나눠 확인했습니다. 감지 여부와 마지막 위치, 전투 종료 조건을 분리하는 설계도 검토했습니다.",
      "action": "Box 높이를 조정할 때 판정이 달라지는 현상을 관찰했습니다. 발표 자료에는 Notify 시점 범위 검사 방식도 정리되어 있습니다.",
      "observed": "적 AI와 파츠 작업 및 2026.09.29 팀 발표 기록이 있습니다. 플레이 영상에는 전투·인벤토리·구역 이동·보스전이 담겼습니다.",
      "limits": "Collision 수정 후의 확정 테스트 결과와 최종 공격 판정 구현의 일치 여부는 확인되지 않았습니다. 감지 상실 보완 일부는 설계 검토 단계입니다.",
      "records": [
        {
          "id": "20260907-priest",
          "label": "Behavior Tree·Blackboard 기본 연결",
          "date": "09.07"
        },
        {
          "id": "20260925-priest-ai",
          "label": "감지 상실·공격 판정 점검",
          "date": "09.25"
        },
        {
          "id": "20260929-priest",
          "label": "팀 발표와 마무리",
          "date": "09.29"
        }
      ]
    },
    {
      "id": "case-dontdrop",
      "sourceProject": "chapter-4-team",
      "title": "Don’t Drop",
      "kind": "리슨 서버 팀 대전 게임",
      "period": "2026.10.29–11.09 · 확인된 기록",
      "state": "개발 기록 · 완료 미확인",
      "role": "캐릭터 이동 · 입력 · 방어구 무게 연동",
      "stack": [
        "Unreal Engine 5.6",
        "C++",
        "CharacterMovement",
        "Enhanced Input",
        "DataTable"
      ],
      "focus": "이동 입력과 방어구 상태의 데이터 연결",
      "intro": "이동 설정을 DataTable에서 적용하고 방어구 무게·입력 유지 시간·전투 요청이 캐릭터 이동에 반영되도록 작업했습니다.",
      "contributions": [
        "FPlayerDataRow·FPlayerMovementTuningRow 설정을 CharacterMovementComponent에 적용",
        "무게 변경 이벤트와 최대 속도 재계산 연결",
        "공격·가드 입력을 전투 컴포넌트 요청으로 전달"
      ],
      "challenge": "출발 속도를 크게 주면 처음 빠르게 이동했다가 급격히 느려져 대시처럼 보였습니다. 테이블에 정의된 AirControl 등의 값이 실제 컴포넌트에 반영되지 않은 부분도 살폈습니다.",
      "diagnosis": "시작 순간의 속도와 키를 유지하는 동안 증가하는 입력 세기를 분리했습니다. 무게별 속도·감속·마찰은 값의 이름과 실제 계산 방향을 대조해야 했습니다.",
      "action": "DataTable에서 이동 값을 읽어 적용하고, 방어구 상태 변경 시 최대 속도 재계산을 연결했습니다. 11월 9일 가드 시작·종료 입력을 RequestCombatBlock(true/false)로 전달했습니다.",
      "observed": "캐릭터 코드와 데이터 테이블 병합 후 빌드가 통과한 기록 및 가드 C++ 로그 확인 기록이 있습니다. 출발 속도 문제는 직접 플레이에서 관찰했습니다.",
      "limits": "최종 원격 클라이언트 이동 일치·게임 완성은 확인되지 않았습니다. 관전 테스트 코드는 작동하지 않아 제거했고 엑셀 설정 연동은 구상 단계입니다.",
      "records": [
        {
          "id": "20261105-dont-drop",
          "label": "무게·가속·공격 입력",
          "date": "11.05"
        },
        {
          "id": "20261106-dont-drop",
          "label": "DataTable 적용·출발 속도 테스트",
          "date": "11.06"
        },
        {
          "id": "20261109-dont-drop",
          "label": "가드 연결·관전 정리",
          "date": "11.09"
        }
      ]
    },
    {
      "id": "case-chatx",
      "sourceProject": "chapter-4",
      "title": "ChatX · 숫자 야구",
      "kind": "개인 멀티플레이 실습",
      "period": "2026.10.02–10.12 · 학습 기록",
      "state": "코드 작성 · 통합 검증 미확인",
      "role": "숫자 야구 규칙 · 채팅 RPC · 상태 복제",
      "stack": [
        "Unreal Engine",
        "C++",
        "GameMode",
        "RPC",
        "Replication"
      ],
      "focus": "서버 규칙과 소유 클라이언트 통신",
      "intro": "게임 규칙 판정을 서버 GameMode에 배치하고, PlayerController의 채팅 메시지와 PlayerState 복제를 학습하며 코드를 작성했습니다.",
      "contributions": [
        "1~9 중 중복 없는 세 숫자 생성·입력 검증·Strike/Ball 판정 작성",
        "서버에서 Controller를 순회하며 각 소유자에게 Client RPC 전달",
        "이름·시도 횟수의 PlayerState 복제 설정과 알림 UI 흐름 작성"
      ],
      "challenge": "특정 PlayerController는 다른 클라이언트에 없으므로 NetMulticast만으로 모두에게 메시지를 전달하기 어려웠습니다.",
      "diagnosis": "Server·Client·NetMulticast RPC의 호출 위치와 Ownership, Actor 존재 범위를 구분했습니다.",
      "action": "GameMode의 PrintChatMessageString을 통해 판정을 실행하고 Controller별 Client RPC 전달 경로를 작성했습니다. 속성 복제는 DOREPLIFETIME을 사용했습니다.",
      "observed": "10월 12일 메시지 전달·숫자 야구 판정 및 복제 코드 작성과 해당 커밋 기록이 있습니다.",
      "limits": "코드 작성은 확인되지만 전체 게임의 실행 성공·외부 네트워크 안정성은 기록만으로 단정하지 않습니다.",
      "records": [
        {
          "id": "20261007-chatx",
          "label": "Owner·Controller 연결 확인",
          "date": "10.07"
        },
        {
          "id": "20261011-chatx",
          "label": "빙의 전후 역할 로그",
          "date": "10.11"
        },
        {
          "id": "20261012-chatx",
          "label": "RPC·숫자 야구 규칙·복제",
          "date": "10.12"
        }
      ]
    },
    {
      "id": "case-textrpg",
      "sourceProject": null,
      "title": "팀 TextRPG",
      "kind": "C++ 콘솔 RPG 팀 프로젝트",
      "period": "2026.07.29–08.05 · 작업 기록",
      "state": "팀 프로젝트 마무리",
      "role": "상점 구매·판매 · Item 관리 · Logger",
      "stack": [
        "C++",
        "STL",
        "std::unique_ptr",
        "Git",
        "PR"
      ],
      "focus": "객체 책임 분리와 아이템 소유권",
      "intro": "상점 구매·판매 기능을 맡아 Shop과 Item의 책임을 나누고, std::unique_ptr<Item>을 이용한 아이템 관리와 팀 코드 병합을 경험했습니다.",
      "contributions": [
        "상점 아이템 구매·판매 흐름 구현 및 수정",
        "Shop·Item 클래스 역할 분리와 unique_ptr 기반 아이템 관리",
        "전투·아이템·골드 Logger 집계 및 Git 브랜치·PR 협업"
      ],
      "challenge": "구매와 판매, Item의 관리 책임이 섞이면 구조가 복잡해졌고, 팀 통합 시 Git 병합·충돌과 역할 경계 조정이 필요했습니다.",
      "diagnosis": "Shop과 Item을 구분하고 아이템 소유권이 어디에 있는지 점검했습니다.",
      "action": "Item 클래스를 분리하고 std::unique_ptr<Item>으로 다뤘으며 판매 기능을 이어서 수정했습니다.",
      "observed": "2026.08.03 리팩터링 기록과 08.05 팀 프로젝트 마무리·협업 회고가 있습니다.",
      "limits": "메모리·성능 향상 수치를 측정하지 않았습니다. 팀의 모든 기능을 단독 개발한 것으로 표시하지 않습니다.",
      "records": [
        {
          "id": "20260731-001",
          "label": "Shop 구매·unique_ptr 관리",
          "date": "07.31"
        },
        {
          "id": "20260803-001",
          "label": "Shop·Item 구조 개선",
          "date": "08.03"
        },
        {
          "id": "20260805-001",
          "label": "협업·Git 회고",
          "date": "08.05"
        }
      ]
    }
  ],
  "other": [
    {
      "title": "CX · 차량 프로젝트",
      "role": "채팅 데이터와 새 접속자 기록 전달",
      "state": "개인 실습",
      "records": [
        "20261026-cx",
        "20261027-cx"
      ],
      "note": "ChatX와 구분되는 별도 프로젝트이며 차량 게임 전체 개발·완료를 주장하지 않습니다.",
      "sourceProject": "chapter-4"
    },
    {
      "title": "FirstFPS",
      "role": "Blueprint 기반 이동·발사·HUD·아이템",
      "state": "개인 학습",
      "records": [
        "20260630-001",
        "20260703-001"
      ],
      "note": "초기 Blueprint 게임플레이 실습",
      "sourceProject": null
    },
    {
      "title": "개인 TextRPG",
      "role": "직업 파생 클래스·Player*·STL",
      "state": "개인 학습",
      "records": [
        "20260714-001",
        "20260715-001"
      ],
      "note": "C++ 상속·다형성 학습",
      "sourceProject": null
    },
    {
      "title": "챕터 3 개인 프로젝트",
      "role": "Pawn·아이템·웨이브·HUD",
      "state": "개인 실습",
      "records": [
        "20260825-ch3",
        "20260902-ch3"
      ],
      "note": "엔진 게임플레이 구조 학습",
      "sourceProject": null
    }
  ],
  "skills": [
    {
      "title": "적 AI · 전투",
      "tools": [
        "Behavior Tree",
        "Blackboard",
        "Collision",
        "Anim Notify"
      ],
      "caseIds": [
        "case-priest"
      ],
      "note": "행동 전환·공격 판정 점검"
    },
    {
      "title": "이동 · 입력",
      "tools": [
        "CharacterMovement",
        "Enhanced Input",
        "DataTable"
      ],
      "caseIds": [
        "case-dontdrop"
      ],
      "note": "방어구 무게·가속·가드"
    },
    {
      "title": "서버 · 복제",
      "tools": [
        "GameMode",
        "PlayerController",
        "RPC",
        "Replication"
      ],
      "caseIds": [
        "case-chatx"
      ],
      "note": "서버 규칙·채팅 전달"
    },
    {
      "title": "C++ 구조 · 협업",
      "tools": [
        "C++",
        "std::unique_ptr",
        "Git",
        "PR"
      ],
      "caseIds": [
        "case-textrpg"
      ],
      "note": "소유권·상점 역할 분리"
    }
  ],
  "publicDocs": [
    "portfolio",
    "projects",
    "resume",
    "cpp",
    "unreal",
    "networking",
    "debugging"
  ]
};
