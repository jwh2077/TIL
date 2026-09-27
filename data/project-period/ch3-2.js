window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/project-period/ch3-2.js"] = [
  {
    "id": "project-ch3-2",
    "project": "챕터 3 개인 프로젝트",
    "title": "CH3_2 · Pawn 입력과 드론·카메라 분리",
    "summary": "직접 움직이는 Pawn에서 시작해 카메라 Yaw를 기준으로 이동하는 Drone으로 확장했다.",
    "study_content": "직접 움직이는 Pawn에서 시작해 카메라 Yaw를 기준으로 이동하는 Drone으로 확장했다. 기체의 Pitch·Roll과 카메라 시점을 따로 다루는 구조도 같이 만들었다.",
    "learning_process": "PlayerController에서 InputMappingContext를 등록하고 Pawn에서 Move와 Look을 바인딩했다. Drone은 입력값과 카메라 Yaw로 전방·우측 방향을 구하고 수직 입력을 더했다. Tick에서는 목표 Pitch와 Roll을 계산한 뒤 FInterpTo로 부드럽게 보간했다.",
    "mistakes_or_difficulties": [
      "CH3GameMode의 DefaultPawnClass가 ACH3GameMode::StaticClass로 지정돼 있다. 움직일 Pawn 클래스를 가리키는지 확인이 필요하다.",
      "Axis3D 입력 에셋과 카메라, 충돌을 연결한 실제 실행 결과는 확인되지 않았다."
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
    "date": "2026-08-10",
    "date_end": "2026-09-02",
    "date_label": "2026-08-10 ~ 2026-09-02 · 관련 프로젝트 기간",
    "date_basis": "20260810-001~20260902-ch3 관련 수업·챕터 3 기록에 배치. CH3_2 ZIP의 작성일·학습일을 추정한 값이 아님.",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "C++",
      "개인 프로젝트"
    ],
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
    "project_part": "CH3_2",
    "activity": "personal",
    "notice": "Unreal C++ 수업과 챕터 3 기록이 있는 8월 10일~9월 2일 구간에 묶었다. ZIP에는 Git 이력이 없어 CH3_2를 작업한 정확한 날짜는 모른다."
  }
];
