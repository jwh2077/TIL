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
    "summary": "Item이 회전하면서 위아래로 움직이게 했다.",
    "study_content": "Item이 회전하면서 위아래로 움직이게 했다. Tick에서 속도에 DeltaTime을 곱하고 AddActorWorldOffset과 AddActorLocalRotation으로 움직였다.",
    "learning_process": "여러 Item을 배치했는데 플레이하면 같은 위치로 모였다. BeginPlay에서 위치를 강제로 지정한 부분이 원인이어서 배치한 위치를 유지하도록 이 코드를 빼는 방향으로 정리했다. UPROPERTY 옵션도 같이 봤다.",
    "velog": "https://velog.io/@jwh4410/Unreal-C-jw6fy4zd",
    "source": [
      "Velog: Unreal C++ Item 액터 이동과 매크로 정리 (2026-08-12)"
    ],
    "primary_topic": "unreal",
    "date_start": "2026-08-12",
    "date_label": "2026-08-12",
    "activity": "study"
  }
];
