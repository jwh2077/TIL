window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/06/2026-06-16.js"] = [
  {
    "id": "20260616-001",
    "date": "2026-06-16",
    "title": "플랫폼 생성과 Timer 제어",
    "project": "Basecamp",
    "phase": "시행착오",
    "tags": [
      "Unreal",
      "Blueprint",
      "실습",
      "시행착오",
      "디버깅"
    ],
    "study_content": "플랫폼을 생성하고 삭제하는 과정을 구현했다. 플랫폼 생성이 빠르게 반복되면서 삭제 타이밍이 처음 생성된 플랫폼을 기준으로 동작하는 문제가 발생했다.",
    "learning_process": "기존 Timer 동작을 확인한 뒤 Set Timer by Event를 사용하고 삭제 과정을 이벤트로 분리했다. Timer 값을 변수로 만들고 새로운 플랫폼이 생성될 때 기존 Timer를 Clear하는 방식으로 수정했다.",
    "questions": [],
    "mistakes_or_difficulties": [
      "반복적인 플랫폼 생성 과정에서 Timer가 예상한 방식으로 동작하지 않았다.",
      "Timer와 Event의 관계를 직접 수정하면서 해결했다."
    ],
    "application": "플랫폼 생성 및 삭제에 Timer와 Event를 적용했다.",
    "result": "기존 Timer를 정리하고 새로운 Timer를 설정하는 방식으로 문제를 수정했다.",
    "code_reference": null,
    "understanding": "협업 기반 구현",
    "related_topics": [
      "Timer",
      "Event",
      "Platform"
    ],
    "later_connection": "이후 Unreal에서 Timer와 Event를 이용해 시간 기반 동작을 구현할 때 연결되는 경험이 되었다.",
    "next_learning": "Blueprint Event와 Unreal 오브젝트 동작을 더 익히기",
    "velog": null,
    "repository": null,
    "source": [
      "학습 기록"
    ],
    "primary_topic": "unreal",
    "summary": "플랫폼을 생성하고 삭제하는 과정을 구현했다.",
    "date_start": "2026-06-16",
    "date_label": "2026-06-16",
    "activity": "study"
  }
];
