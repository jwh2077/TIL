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
    "date_basis": "Git 커밋 작성일",
    "date": "2026-09-10",
    "date_end": "2026-09-11",
    "title": "몬스터 공격 사거리와 근거리 피해 판정",
    "summary": "몬스터의 공격 가능 거리를 검사하는 Decorator와 공격 함수를 만들었다.",
    "study_content": "몬스터의 공격 가능 거리를 검사하는 Decorator와 공격 함수를 만들었다. 다음 날에는 양손 충돌 영역으로 근거리 피해를 주는 부분을 보강했다.",
    "learning_process": "근거리 적은 공격 Montage를 재생하고 Notify가 들어오면 양손 충돌 영역에 겹친 대상을 모았다. 그중 Player 태그가 있는 대상에 피해를 적용했다. 원거리 적은 Move To가 끝나야 공격 조건을 다시 보는 문제가 있어서 조건을 반복 검사할지 Service에서 상태를 갱신할지 고민했다.",
    "mistakes_or_difficulties": [
      "사거리를 비교할 때 Z값은 빼려고 했지만 코드에는 FVector::Dist로 3차원 거리를 재는 부분이 남아 있다. Move To 중 공격 조건을 다시 검사하는 문제의 최종 해결 여부는 확인되지 않았다."
    ],
    "questions": [
      "이동 태스크 진행 중 공격 사거리 조건을 언제 다시 검사할 것인가?",
      "반복 재진입과 Service 기반 상태 갱신 중 어떤 구조가 적합한가?"
    ],
    "commits": [
      "49dd14a",
      "4ec33c2",
      "04d1ae7"
    ],
    "references": [
      {
        "label": "변경 코드 · 49dd14a",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/49dd14a"
      },
      {
        "label": "변경 코드 · 4ec33c2",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/4ec33c2"
      },
      {
        "label": "변경 코드 · 04d1ae7",
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
    "date_label": "2026-09-10 ~ 2026-09-11",
    "activity": "team",
    "notice": "코드 변경 기록을 바탕으로 적었다. 게임 실행 결과는 확인되지 않았다."
  }
];
