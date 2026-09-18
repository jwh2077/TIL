window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/09/2026-09-17_2026-09-18.js"] = [
  {
    "id": "20260917-priest",
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
    "date": "2026-09-17",
    "date_end": "2026-09-18",
    "title": "파츠 DataTable과 GameInstance 기반 보관 구조",
    "summary": "파츠 정보를 데이터로 분리하고 슬롯·스탯 적용·레벨 간 보관 역할을 나누었다.",
    "study_content": "17일 기존 Attachment 계열을 정리하고 PartData·PartInstance·PartManager 및 파츠 DataTable을 추가했다. 18일에는 GameInstance·WeaponItem과 연결하는 변경, 함수 수정과 구조체 이름 추가가 이어졌다.",
    "learning_process": "날짜 없는 파츠 메모에는 인벤토리가 보유·장착·스탯 적용을 모두 책임지는 구조에 대한 고민이 남아 있다. 이 설계 고민은 별도 주제 자료로 연결하고, 날짜별 기록에는 확인된 코드 변경을 중심으로 담았다.",
    "application": "현재 PartManager는 슬롯별 파츠 갱신·제거와 기본 무기 스탯에 대한 배율 계산을 담당한다. PartInstance는 Manager를 생성한다. 18일 변경 목록에는 GameInstance와 WeaponItem의 연결 작업이 확인된다.",
    "commits": [
      "db748d4",
      "28ed0df",
      "1b726b2",
      "7594ff3"
    ],
    "references": [
      {
        "label": "Git 변경 근거 · db748d4",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/db748d4"
      },
      {
        "label": "Git 변경 근거 · 28ed0df",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/28ed0df"
      },
      {
        "label": "Git 변경 근거 · 1b726b2",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/1b726b2"
      },
      {
        "label": "Git 변경 근거 · 7594ff3",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/7594ff3"
      }
    ],
    "repository": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project",
    "source": [
      "jwh2077 작성자 Git 변경 이력"
    ],
    "verification_note": "날짜는 커밋 작성일이며 실제 학습 시작일이나 실행 성공일을 뜻하지 않는다.",
    "date_start": "2026-09-17",
    "date_label": "2026-09-17 ~ 2026-09-18"
  }
];
