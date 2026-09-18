window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/project-period/ch3-2.js"] = [
  {
    "id": "project-ch3-2",
    "project": "챕터 3 개인 프로젝트",
    "title": "CH3_2 · Pawn 입력과 드론·카메라 분리",
    "summary": "직접 이동하는 Pawn에서 카메라 Yaw 기반 드론 이동과 Pitch·Roll 보간으로 확장한 코드를 정리했다.",
    "study_content": "CH3Pawn은 입력값으로 로컬 이동과 회전을 적용한다. Drone은 3축 입력을 받아 카메라의 Yaw를 기준으로 수평 이동 방향을 계산하고 수직 입력을 더한다. 기체의 Pitch·Roll과 카메라 시점을 나누는 구성이며, 기존 비행체 회전 메모와 함께 프로젝트 전체 기록으로 묶었다.",
    "learning_process": "PlayerController에서 InputMappingContext를 등록하고 Pawn의 SetupPlayerInputComponent에서 MoveAction과 LookAction을 바인딩했다. Drone의 Move는 입력을 저장하고 카메라 Yaw로 전방·우측 벡터를 구한다. Tick에서는 이동 입력으로 목표 Pitch·Roll을 계산하고 FInterpTo로 현재 값을 보간한다. Look은 컨트롤러 Yaw·Pitch 입력으로 전달된다.",
    "application": "Drone 이동은 방향을 정규화한 뒤 Speed와 GetDeltaSeconds를 곱해 AddActorWorldOffset에 전달한다. 이동 액션의 Completed·Canceled도 Move에 연결돼 있다. 반면 CH3Pawn의 직접 이동에는 DeltaTime 곱이 없으므로 두 구현을 구분한다. 기존 C:/tem 비행체 메모의 화면 회전 문제는 이 주제와 연결되지만 이 코드가 문제를 해결했다는 실행 결과는 확인하지 않았다.",
    "mistakes_or_difficulties": [
      "CH3GameMode의 DefaultPawnClass가 ACH3GameMode::StaticClass로 지정돼 있다. 의도한 Pawn 클래스를 가리키는지 확인이 필요하다.",
      "실제 Axis3D 입력 에셋, Pawn 지정, 충돌과 카메라 동작은 Editor에서 검증해야 한다."
    ],
    "questions": [
      "기체의 기울기와 카메라 시점을 어느 객체에서 관리하는가?",
      "입력 이벤트에서 직접 이동할 때 프레임 시간과 충돌은 어떻게 처리하는가?"
    ],
    "files": [
      "CH3Pawn.cpp",
      "Drone.cpp",
      "Drone.h",
      "CH3PlayerController.cpp",
      "CH3GameMode.cpp"
    ],
    "repo": "CH3_2",
    "date": null,
    "date_end": null,
    "date_label": "CH3_2 프로젝트 전체 작업",
    "date_basis": "프로젝트 전체 기준 · ZIP에 Git 이력 없음 · 세부 날짜 추정하지 않음",
    "understanding": "코드 구성과 동작 흐름 확장",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "C++",
      "개인 프로젝트"
    ],
    "result": "ZIP 소스 코드 확인. 빌드·플레이 검증은 하지 않았다.",
    "source": [
      "CH3_2-main.zip",
      "CH3Pawn.cpp",
      "Drone.cpp",
      "Drone.h",
      "CH3PlayerController.cpp",
      "CH3GameMode.cpp"
    ],
    "references": [
      {
        "label": "원본 코드 · CH3Pawn.cpp",
        "url": "https://github.com/jwh2077/CH3_2/blob/main/Source/CH3_2/Private/CH3Pawn.cpp"
      },
      {
        "label": "원본 코드 · Drone.cpp",
        "url": "https://github.com/jwh2077/CH3_2/blob/main/Source/CH3_2/Private/Drone.cpp"
      },
      {
        "label": "원본 코드 · Drone.h",
        "url": "https://github.com/jwh2077/CH3_2/blob/main/Source/CH3_2/Public/Drone.h"
      },
      {
        "label": "원본 코드 · CH3PlayerController.cpp",
        "url": "https://github.com/jwh2077/CH3_2/blob/main/Source/CH3_2/Private/CH3PlayerController.cpp"
      },
      {
        "label": "원본 코드 · CH3GameMode.cpp",
        "url": "https://github.com/jwh2077/CH3_2/blob/main/Source/CH3_2/Private/CH3GameMode.cpp"
      }
    ],
    "project_part": "CH3_2"
  }
];
