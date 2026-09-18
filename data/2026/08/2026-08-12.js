window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/08/2026-08-12.js"] = [
  {
    "id": "20260812-001",
    "date": "2026-08-12",
    "title": "Unreal C++ Item 액터 이동과 매크로",
    "project": null,
    "phase": "학습 정리",
    "tags": [
      "Unreal",
      "C++",
      "Actor",
      "컴포넌트",
      "디버깅",
      "개념정리"
    ],
    "summary": "Item 액터의 이동·회전과 DeltaTime, Unreal 매크로 및 UPROPERTY 옵션을 정리했다.",
    "study_content": "Item 액터가 회전하면서 Z축으로 상하 이동하도록 구현했다. Tick 함수에서 DeltaTime을 곱해 이동량과 회전량을 계산하고, AddActorWorldOffset과 AddActorLocalRotation을 사용했다. UCLASS, UPROPERTY, UFUNCTION의 역할과 UPROPERTY 옵션도 함께 정리했다.",
    "learning_process": "여러 Item 액터가 플레이 시 같은 위치로 이동하는 현상을 확인하고 BeginPlay에서 위치를 강제로 지정한 코드가 원인임을 파악했다. 레벨에 배치한 위치를 유지하기 위해 해당 위치 지정 코드를 제거하는 방향으로 정리했다.",
    "application": "Z축 이동 범위를 벗어나면 방향을 바꾸도록 Item 액터의 이동을 구성하고, DeltaTime을 적용한 회전 로직을 작성했다.",
    "result": "Item 액터의 이동과 회전 흐름, 그리고 에디터·Blueprint 노출 목적에 따라 UPROPERTY 옵션을 선택하는 기준을 정리했다.",
    "understanding": "Actor의 프레임 단위 동작과 Unreal 매크로가 엔진·에디터와 연결되는 방식을 익혀가는 단계였다.",
    "velog": "https://velog.io/@jwh4410/Unreal-C-jw6fy4zd",
    "source": [
      "Velog: Unreal C++ Item 액터 이동과 매크로 정리 (2026-08-12)"
    ],
    "primary_topic": "unreal",
    "date_start": "2026-08-12",
    "date_label": "2026-08-12"
  }
];
