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
    "date": null,
    "date_end": null,
    "date_label": "CH3_1 프로젝트 전체 작업",
    "date_basis": "프로젝트 전체 기준 · ZIP에 Git 이력 없음 · 세부 날짜 추정하지 않음",
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
    "notice": "프로젝트 전체 코드 기준이다. 작업 날짜와 실행 결과는 확인되지 않았다."
  }
];
