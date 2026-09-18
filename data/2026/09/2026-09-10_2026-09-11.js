window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/09/2026-09-10_2026-09-11.js"] = [
  {
    "id": "20260910-priest",
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
    "date": "2026-09-10",
    "date_end": "2026-09-11",
    "title": "몬스터 공격 사거리와 근거리 피해 판정",
    "summary": "사거리 조건과 공격 함수를 추가하고 양손 충돌 영역을 이용한 피해 판정을 보강했다.",
    "study_content": "9월 10일 몬스터 공격과 사거리 데코레이터를 추가하고, 11일에는 공격 범위 충돌과 근거리 공격을 보강했다. 공격 가능 조건, 애니메이션과 피해 판정을 하나의 전투 흐름으로 연결한 작업이다.",
    "learning_process": "현재 근거리 적 코드는 공격 몽타주를 재생하고 종료 상태를 기록한다. OnNotifyApplyDamage에서는 양손 충돌 영역에 겹친 대상을 모아 Player 태그를 확인해 피해를 적용한다. 이 현재 코드 대조와 당시 변경 목록을 구분해 확인했다.\n\n날짜 없는 팀플 메모에는 원거리 몬스터가 Move To 완료 뒤에야 공격하는 현상을 관찰한 과정이 남아 있다. 진입 시점에만 검사되는 조건의 한계를 확인하고, Sequence와 Selector 구조를 재검토했다. 강제로 종료·반복해 사거리를 재검사하는 방식과 Service를 이용할 가능성을 비교하고, 플레이어 방향으로 회전하는 노드도 검토했다. 이 메모의 작성일과 최종 Blueprint 적용 여부는 확인되지 않아 9월 10~11일의 완료 작업으로 단정하지 않는다.",
    "mistakes_or_difficulties": ["메모에는 Z값을 제외한 사거리 비교를 제안했지만 이전에 대조한 현재 데코레이터 코드는 3차원 거리를 사용한다. 제안과 구현을 구분한다.", "쿨타임 중 배회, 엄폐와 공격 전진·넉백은 메모에 계획이 섞여 있어 구현 완료로 표현하지 않는다."],
    "questions": ["이동 태스크 진행 중 공격 사거리 조건을 언제 다시 검사할 것인가?", "반복 재진입과 Service 기반 상태 갱신 중 어떤 구조가 적합한가?"],
    "application": "사거리 데코레이터, 적 공격 함수, 근거리 적의 충돌·피해 적용 코드가 확인된다. Notify 에셋 바인딩과 실제 플레이 결과는 별도 확인 대상이다.",
    "commits": [
      "49dd14a",
      "4ec33c2",
      "04d1ae7"
    ],
    "references": [
      {
        "label": "Git 변경 근거 · 49dd14a",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/49dd14a"
      },
      {
        "label": "Git 변경 근거 · 4ec33c2",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/4ec33c2"
      },
      {
        "label": "Git 변경 근거 · 04d1ae7",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/04d1ae7"
      }
    ],
    "repository": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project",
    "source": [
      "jwh2077 작성자 Git 변경 이력",
      "팀플 메모장.txt · 작성일 미확인"
    ],
    "verification_note": "날짜는 커밋 작성일이며 실제 학습 시작일이나 실행 성공일을 뜻하지 않는다.",
    "date_start": "2026-09-10",
    "date_label": "2026-09-10 ~ 2026-09-11"
  }
];
