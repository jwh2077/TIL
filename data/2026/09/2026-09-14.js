window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/09/2026-09-14.js"] = [
  {
    "id": "20260914-priest",
    "project": "ProjectPriest",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "C++"
    ],
    "phase": "직접 구현",
    "understanding": "구현과 구조 개선 경험",
    "date_basis": "Git 커밋 작성일",
    "result": "코드 변경 이력 확인",
    "date": "2026-09-14",
    "title": "몬스터 스탯 DataTable 전환과 사망 처리",
    "summary": "고정 스탯을 데이터 행으로 옮기고 삭제 타이머·사망·아이템 드롭 흐름을 변경했다.",
    "study_content": "몬스터 생성자의 고정 스탯 값을 제거하고 FDataTableRowHandle로 행을 지정하는 구조를 추가했다. 체력·공격력·방어력·사거리·최소 피해량·순찰 반경을 BeginPlay에서 행 데이터로 초기화한다.",
    "learning_process": "커밋 diff에서 생성자의 값 제거와 GetRow<FMonsterData> 초기화 추가를 확인했다. 같은 날 삭제 타이머, 사망 로직과 데이터 기반 아이템 드롭 관련 변경도 이어졌다. 드롭의 최종 구조에는 이후 팀원의 변경이 포함될 수 있다.",
    "application": "DataTable 기반 스탯 초기화의 직접 변경 내용이 확인된다. 사망·삭제 타이머·드롭은 해당 커밋의 변경 기록으로 연결했다.",
    "commits": [
      "32e1455",
      "c881568",
      "ed85981",
      "360a6d3"
    ],
    "references": [
      {
        "label": "Git 변경 근거 · 32e1455",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/32e1455"
      },
      {
        "label": "Git 변경 근거 · c881568",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/c881568"
      },
      {
        "label": "Git 변경 근거 · ed85981",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/ed85981"
      },
      {
        "label": "Git 변경 근거 · 360a6d3",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/360a6d3"
      }
    ],
    "repository": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project",
    "source": [
      "jwh2077 작성자 Git 변경 이력"
    ],
    "verification_note": "날짜는 커밋 작성일이며 실제 학습 시작일이나 실행 성공일을 뜻하지 않는다.",
    "date_start": "2026-09-14",
    "date_label": "2026-09-14",
    "activity": "team"
  }
];
