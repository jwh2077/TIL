window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/project-period/ch3-1.js"] = [
  {
    "id": "project-ch3-1",
    "project": "챕터 3 개인 프로젝트",
    "title": "CH3_1 · 이동·회전 액터 실습",
    "summary": "MovingActor와 UpActor를 만들고 SceneRoot 아래 StaticMeshComp를 붙였다.",
    "study_content": "MovingActor와 UpActor를 만들고 SceneRoot 아래 StaticMeshComp를 붙였다. MovingActor는 X축으로 왕복하고 UpActor는 회전하도록 작성했다.",
    "learning_process": "Tick에서 속도에 DeltaTime을 곱했다. MovingActor는 StartLocation에 이동량을 더하고 UP 값으로 방향을 바꾼다. 속도와 경계값은 UPROPERTY로 에디터에서 바꿀 수 있게 했다.",
    "files": [
      "MovingActor.cpp",
      "UpActor.cpp",
      "MovingActor.h",
      "UpActor.h"
    ],
    "repo": "CH3_1",
    "date": "2026-08-10",
    "date_end": "2026-09-02",
    "date_label": "2026-08-10 ~ 2026-09-02 · 관련 프로젝트 기간",
    "date_basis": "20260810-001~20260902-ch3 관련 수업·챕터 3 기록에 배치. CH3_1 ZIP의 작성일·학습일을 추정한 값이 아님.",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "C++",
      "개인 프로젝트"
    ],
    "source": [
      "CH3_1-main.zip",
      "MovingActor.cpp",
      "UpActor.cpp",
      "MovingActor.h",
      "UpActor.h"
    ],
    "references": [
      {
        "label": "원본 코드 · MovingActor.cpp",
        "url": "https://github.com/jwh2077/CH3_1/blob/main/Source/CH3_1/Private/MovingActor.cpp"
      },
      {
        "label": "원본 코드 · UpActor.cpp",
        "url": "https://github.com/jwh2077/CH3_1/blob/main/Source/CH3_1/Private/UpActor.cpp"
      },
      {
        "label": "원본 코드 · MovingActor.h",
        "url": "https://github.com/jwh2077/CH3_1/blob/main/Source/CH3_1/Public/MovingActor.h"
      },
      {
        "label": "원본 코드 · UpActor.h",
        "url": "https://github.com/jwh2077/CH3_1/blob/main/Source/CH3_1/Public/UpActor.h"
      }
    ],
    "project_part": "CH3_1",
    "activity": "personal",
    "mistakes_or_difficulties": [
      "MovingActor의 Max와 Min 기본값이 둘 다 10이다. 에디터에서 값을 바꿨는지와 실제 왕복 범위는 확인되지 않았다."
    ],
    "notice": "Unreal C++ 수업과 챕터 3 기록이 있는 8월 10일~9월 2일 구간에 묶었다. ZIP에는 Git 이력이 없어 CH3_1을 작업한 정확한 날짜는 모른다."
  }
];
