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
    "study_content": "전날 못 끝냈던 E키 문 상호작용을 다시 잡았다. 문 앞에 갔을 때만 E키가 먹고, 열려 있으면 닫고 닫혀 있으면 다시 열리게 만드는 게 목표였다.",
    "learning_process": "문 Blueprint의 Box Overlap으로 캐릭터가 범위 안에 들어왔는지 확인하고 CanInteract를 바꿨다. 캐릭터 쪽 E키 입력에서는 이 값이 true일 때 문을 찾아 RunInteract를 실행했다. 문 회전값은 GetNewRotation 함수로 따로 빼고 Is Open 값에 따라 열리는 각도와 닫히는 각도를 골랐다.",
    "questions": [],
    "mistakes_or_difficulties": [
      "전날에는 문 Blueprint만 보고 있어서 E키 입력을 어디서 받아야 하는지 몰랐다. 입력은 캐릭터가 받고, 문은 상호작용 함수만 실행하게 나눠야 했다."
    ],
    "application": "플레이어가 문 가까이에 있을 때만 E키로 문을 열고 닫게 연결했다.",
    "result": "전날 막혔던 입력 연결을 해결했고, 범위 밖에서는 작동하지 않는 것도 확인했다.",
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
    "images": [
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/1d1bc582-4f71-42ad-9481-6e5c6dbd4600/image.png",
        "caption": "문을 열고 닫을 때 사용할 회전값을 계산한 Blueprint"
      },
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/ef19cbae-4b23-4c25-86bf-91e9b1be5833/image.png",
        "caption": "박스 충돌로 플레이어가 상호작용 범위에 들어왔는지 확인한 부분"
      },
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/b3505c0d-b910-49b2-861b-a9d1802d52ba/image.png",
        "caption": "E키 입력에서 문을 참조하고 상호작용 함수를 실행한 흐름"
      }
    ],
    "velog": "https://velog.io/@jwh4410/6.24",
    "repository": null,
    "source": [
      "Velog"
    ],
    "primary_topic": "unreal",
    "summary": "전날 못 끝낸 E키 문 상호작용을 캐릭터 입력과 문 함수로 나눠서 완성했다.",
    "date_start": "2026-06-24",
    "date_label": "2026-06-24",
    "references": [],
    "activity": "study"
  }
];
