window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/11/2026-11-11.js"] = [
  {
    "id": "20261111-dont-drop",
    "date": "2026-11-11",
    "date_end": null,
    "date_label": "2026-11-11",
    "title": "Don’t Drop · 캐릭터 외형 연결과 흔들림 수정",
    "summary": "외형 파츠가 기본 메시의 자세를 따라가게 연결했다. 기본 메시를 숨겼을 때 생긴 흔들림은 본 자세를 계속 갱신하도록 설정을 바꿔 해결했다.",
    "project": "Don’t Drop",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "Blueprint",
      "애니메이션",
      "협업"
    ],
    "activity": "team",
    "date_start": "2026-11-11",
    "date_basis": "11월 11일 프로젝트 대화와 본인의 테스트 설명, 블루프린트 및 테스트 맵 캡처.",
    "study_content": "## 기존 캐릭터에 외형을 붙이는 방법\n\n임시 프로젝트에서 Creative_Characters_FREE 예제를 열어 보니 몸통, 얼굴, 머리카락, 의상, 신발이 별도 메시로 나뉘어 있었다. 예제 블루프린트는 기본 Character를 상속하고, 내가 쓰던 블루프린트는 직접 만든 C++ 캐릭터를 상속했다. 예제 캐릭터에서 기존 이동 조작이 되지 않아, 내 캐릭터를 유지하면서 외형만 붙이는 방법을 살펴봤다. 예제는 파츠 구조를 보는 데 사용했고 프로젝트에는 다른 에셋을 쓰기로 했다.\n\n## 외형 파츠 연결과 흔들림 수정\n\nConstruction Script에서 Set Leader Pose Component를 사용해 외형 파츠가 기본 Mesh의 본 자세를 따라가도록 연결했다. 테스트 맵에서 SKM_Default_Sidekick을 Hidden in Game으로 숨겼더니 캐릭터가 위아래로 크게 흔들렸다. 다리는 움직이고 있어서 처음에는 물리 설정 문제라고 생각했다.\n\n기본 메시는 숨긴 채 Visibility Based Anim Tick Option을 Always Tick Pose and Refresh Bones로 바꿔 다시 실행했다. 화면에 보이지 않아도 기준 메시의 본 자세를 계속 갱신하게 하니 흔들림이 사라졌다.\n\n## 공식 문서에서 찾아본 내용\n\nLeader Pose를 쓰면 각 파츠가 기준 메시의 본 자세를 따라간다. 파츠마다 애니메이션을 따로 계산하지 않아도 되지만, 메시는 각각 렌더링된다. Copy Pose from Mesh와 Skeletal Mesh Merge는 공식 문서에서 구성 방식의 차이를 찾아봤다.",
    "images": [
      {
        "url": "assets/images/dont-drop-leader-pose-20261111.png",
        "alt": "Construction Script에서 외형 파츠를 Set Leader Pose Component의 Target에, 기본 Mesh를 리더에 연결한 화면",
        "caption": "외형 파츠가 기본 Mesh의 본 자세를 따라가도록 연결한 블루프린트."
      },
      {
        "url": "assets/images/dont-drop-appearance-test-20261111.png",
        "alt": "테스트 맵에서 확인한 캐릭터와 방어구 외형",
        "caption": "본 자세 갱신 설정을 바꾼 뒤 테스트 맵에서 확인한 캐릭터와 방어구."
      }
    ],
    "references": [
      {
        "label": "Epic Games · 모듈형 캐릭터 작업하기",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/working-with-modular-characters-in-unreal-engine?lang=ko"
      },
      {
        "label": "이전 기록 · MVP 마무리와 캐릭터 에셋 선정 시작",
        "url": "#record=20261110-dont-drop"
      }
    ],
    "source": [
      "11월 11일 프로젝트 대화와 사용자 테스트 설명",
      "사용자가 제공한 블루프린트 및 테스트 맵 캡처"
    ]
  }
];
