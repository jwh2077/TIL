window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/06/2026-06-24.js"] = [
  {
    "id": "20260624-001",
    "date": "2026-06-24",
    "title": "E키 문 상호작용 완성",
    "project": "Basecamp",
    "phase": "도움을 받아 해결",
    "tags": [
      "Unreal",
      "Blueprint",
      "실습",
      "디버깅"
    ],
    "study_content": "E키를 눌렀을 때 플레이어 주변의 문과 상호작용하여 문을 열고 닫는 기능을 구현했다.",
    "learning_process": "Box Overlap으로 BP_ThirdPersonCharacter를 감지하고 CanInteract 값을 설정했다. E키 입력에서 CanInteract를 확인한 뒤 문을 참조하고 RunInteract를 실행하도록 연결했다. Is Open 값을 기준으로 문 회전값을 변경했다.",
    "questions": [],
    "mistakes_or_difficulties": [
      "전날에는 캐릭터가 E키 입력을 받게 하는 방법을 몰라 구현하지 못했다."
    ],
    "application": "플레이어가 문 근처에 있을 때 E키로 문을 열고 닫는 기능을 실제로 작동시켰다.",
    "result": "도움을 받아 E키 문 상호작용을 실제로 작동시켰다.",
    "code_reference": null,
    "understanding": "협업 기반 구현",
    "related_topics": [
      "Input",
      "Box Overlap",
      "Boolean",
      "Rotation",
      "Interaction"
    ],
    "later_connection": "이후 Unreal에서 입력과 상호작용 기능을 구현할 때 기본적인 흐름을 이해하는 데 연결되었다.",
    "next_learning": "C++ 프로그래밍과 Unreal의 기본 구조를 본격적으로 학습",
    "velog": "https://velog.io/@jwh4410/6.24",
    "repository": null,
    "source": [
      "Velog"
    ],
    "primary_topic": "unreal",
    "summary": "E키를 눌렀을 때 플레이어 주변의 문과 상호작용하여 문을 열고 닫는 기능을 구현했다.",
    "date_start": "2026-06-24",
    "date_label": "2026-06-24",
    "references": [],
    "activity": "study"
  }
];
