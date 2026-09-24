window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/09/2026-09-21_2026-09-23.js"] = [
  {
    "id": "20260921-priest",
    "project": "ProjectPriest",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "C++",
      "Blueprint",
      "AI",
      "디버깅"
    ],
    "phase": "직접 구현",
    "date_basis": "원문 대화 시각 · 한국 시간",
    "date": "2026-09-21",
    "date_end": "2026-09-23",
    "title": "파츠 참조와 근접 공격 연결",
    "summary": "GameInstance에서 파츠 객체를 찾는 흐름을 다시 보고, 몬스터의 공격 범위와 Anim Notify에서 피해를 주는 코드를 연결했다.",
    "study_content": "GameInstance → PartInstance → PartManager로 이어지는 참조를 Blueprint에서 어떻게 가져올지 확인했다. 이후 근접 몬스터에서는 BoxComponent의 Begin/End Overlap으로 플레이어를 기억하고, 공격 몽타주의 Notify 시점에 ApplyDamage를 호출하는 코드를 작성했다.",
    "learning_process": "파츠 쪽에서는 GetOrCreatePartInstance가 포인터를 반환해도 되는지, UPROPERTY가 붙은 TMap<FName, TObjectPtr<UPartInstance>>에 보관한 객체를 Blueprint에서 어떻게 변수로 올릴지 물었다. UI를 다시 실행하는 과정에서는 WBP_WeaponParts가 가비지 컬렉션 중 파괴됐다는 SObjectWidget 경고도 확인했다. 몬스터 공격은 몽타주 종료 상태와 공격 범위 Overlap을 먼저 나눈 뒤, 범위 안에 들어온 Player를 저장해서 OnNotifyApplyDamage에서 사용했다.",
    "questions": [
      "GameInstance가 보관하는 PartInstance와 PartManager를 Blueprint에서 어떻게 참조할 것인가?",
      "TObjectPtr는 일반 포인터나 약한 참조와 어떤 차이가 있는가?",
      "블랙보드에서 여러 AI가 함께 쓸 값을 한 번만 지정할 수 있는가?",
      "Broadcast, Blocking Volume, 메모리 풀링은 현재 작업에서 각각 어디에 쓰이는가?"
    ],
    "mistakes_or_difficulties": [
      "Text와 Name 타입이 달라 Blueprint에서 원하는 핀과 Promote to Variable이 바로 보이지 않았다.",
      "위젯을 다시 실행할 때 SObjectWidget이 가비지 컬렉션 중 파괴됐다는 Ensure가 발생했다.",
      "공격 범위에서 저장한 Player 포인터의 수명과 TObjectPtr·약한 참조의 차이가 섞였다.",
      "블랙보드 초기값을 각 AIController에서 반복해서 넣지 않을 방법을 고민했지만 최종 적용 결과는 대화에서 확인되지 않았다."
    ],
    "references": [],
    "repository": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project",
    "source": [
      "ChatGPT 대화 · 언리얼 개념 정리 · 2026-09-21~2026-09-23",
      "ChatGPT 대화 · ProjectPriest · 2026-09-23"
    ],
    "verification_note": "대화에 남은 코드와 오류를 바탕으로 적었다. 몬스터 피해 적용과 블랙보드 초기화의 최종 실행 결과는 확인되지 않았다.",
    "date_start": "2026-09-21",
    "date_label": "2026-09-21 ~ 2026-09-23",
    "activity": "team",
    "notice": "대화에서 확인된 작업과 질문만 적었다. 실행 성공으로 확인되지 않은 부분은 완료로 표시하지 않았다."
  }
];
