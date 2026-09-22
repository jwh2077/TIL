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
    "date_basis": "Git 커밋 작성일",
    "date": "2026-09-14",
    "title": "몬스터 스탯 DataTable 전환과 사망 처리",
    "summary": "몬스터 생성자에 박아둔 체력과 공격력 값을 DataTable 행으로 옮겼다.",
    "study_content": "몬스터 생성자에 박아둔 체력과 공격력 값을 DataTable 행으로 옮겼다. 사망 처리와 삭제 타이머, 아이템 드롭 작업도 같이 이어졌다.",
    "learning_process": "FDataTableRowHandle로 몬스터 행을 지정하고 BeginPlay에서 체력, 공격력, 방어력, 사거리, 최소 피해량과 순찰 반경을 읽었다. 적 종류가 늘어날 때 생성자를 계속 고치지 않도록 수치를 데이터로 빼는 작업이었다.",
    "commits": [
      "32e1455",
      "c881568",
      "ed85981",
      "360a6d3"
    ],
    "references": [
      {
        "label": "변경 코드 · 32e1455",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/32e1455"
      },
      {
        "label": "변경 코드 · c881568",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/c881568"
      },
      {
        "label": "변경 코드 · ed85981",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/ed85981"
      },
      {
        "label": "변경 코드 · 360a6d3",
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
    "activity": "team",
    "notice": "코드 변경 기록을 바탕으로 적었다. 게임 실행 결과는 확인되지 않았다."
  }
];
