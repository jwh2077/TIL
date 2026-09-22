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
    "date_basis": "Git 커밋 작성일",
    "date": "2026-09-17",
    "date_end": "2026-09-18",
    "title": "파츠 DataTable과 GameInstance 기반 보관 구조",
    "summary": "기존 Attachment 구조를 정리하고 PartData, PartInstance, PartManager와 파츠 DataTable을 추가했다.",
    "study_content": "기존 Attachment 구조를 정리하고 PartData, PartInstance, PartManager와 파츠 DataTable을 추가했다. 다음 날에는 GameInstance와 WeaponItem 쪽 연결을 이어갔다.",
    "learning_process": "인벤토리가 보유, 장착, 슬롯 검사와 스탯 적용까지 모두 맡지 않게 역할을 나누려고 했다. PartManager는 슬롯별 파츠 교체와 제거, 기본 무기 스탯에 대한 배율 계산을 맡겼다. 총열은 피해량, 확장 탄창은 탄창 용량을 바꾸는 범위부터 잡았다.",
    "questions": [
      "파츠의 보유와 장착·스탯 적용을 각각 어떤 객체가 책임질 것인가?",
      "레벨 전환 시 보존할 장착 정보와 다시 생성할 무기 객체는 어떻게 연결하는가?"
    ],
    "mistakes_or_difficulties": [
      "슬롯 교체와 배율 계산 코드는 있지만 드래그 앤 드롭, 바닥에서 줍기, UI 장착까지 이어지는 실행 결과는 아직 확인되지 않았다."
    ],
    "commits": [
      "db748d4",
      "28ed0df",
      "1b726b2",
      "7594ff3"
    ],
    "references": [
      {
        "label": "변경 코드 · db748d4",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/db748d4"
      },
      {
        "label": "변경 코드 · 28ed0df",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/28ed0df"
      },
      {
        "label": "변경 코드 · 1b726b2",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/1b726b2"
      },
      {
        "label": "변경 코드 · 7594ff3",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/7594ff3"
      }
    ],
    "repository": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project",
    "source": [
      "jwh2077 작성자 Git 변경 이력",
      "파츠.txt · 작성일 미확인"
    ],
    "verification_note": "날짜는 커밋 작성일이며 실제 학습 시작일이나 실행 성공일을 뜻하지 않는다.",
    "date_start": "2026-09-17",
    "date_label": "2026-09-17 ~ 2026-09-18",
    "activity": "team",
    "notice": "코드 변경 기록을 바탕으로 적었다. 게임 실행 결과는 확인되지 않았다."
  }
];
