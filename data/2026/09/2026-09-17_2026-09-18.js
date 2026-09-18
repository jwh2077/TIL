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
    "learning_process": "날짜 없는 파츠 메모에는 인벤토리가 보유·장착·스탯 적용을 모두 책임지는 구조에 대한 고민이 남아 있다. 보유 여부, 장착 가능 슬롯, 장착 상태, 실제 무기 스탯 적용을 각각 나누어 생각하며 인벤토리에 책임이 집중되지 않도록 별도 관리 클래스를 검토했다.\n\n총열은 피해량, 확장 탄창은 탄창 용량을 변경하는 대상으로 범위를 좁혔다. 같은 슬롯의 중복 적용 제한과 레벨 재시작 시 장착 정보를 무기로 전달할 구조체를 고민했다. 메모의 UAttachment·FAttachmentData 이름은 당시 설계안이며 실제 PartData·PartInstance·PartManager와 구분한다. 작성일은 알 수 없어 이 설계 과정 전체를 17~18일에 발생한 것으로 단정하지 않는다.",
    "questions": ["파츠의 보유와 장착·스탯 적용을 각각 어떤 객체가 책임질 것인가?", "레벨 전환 시 보존할 장착 정보와 다시 생성할 무기 객체는 어떻게 연결하는가?"],
    "mistakes_or_difficulties": ["드래그 앤 드롭, 바닥 획득 액터와 UI 연결은 원본에 계획·의존 작업으로 섞여 있다. 최종 실행 결과는 별도 확인이 필요하다.", "현재 코드에서 확인한 슬롯 관리와 배율 계산을 원문의 모든 설계안이 구현됐다는 근거로 확대하지 않는다."],
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
      "jwh2077 작성자 Git 변경 이력",
      "파츠.txt · 작성일 미확인"
    ],
    "verification_note": "날짜는 커밋 작성일이며 실제 학습 시작일이나 실행 성공일을 뜻하지 않는다.",
    "date_start": "2026-09-17",
    "date_label": "2026-09-17 ~ 2026-09-18"
  }
];
