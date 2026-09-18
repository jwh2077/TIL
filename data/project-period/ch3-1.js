window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/project-period/ch3-1.js"] = [
  {
    "id": "project-ch3-1",
    "project": "챕터 3 개인 프로젝트",
    "title": "CH3_1 · 이동·회전 액터 실습",
    "summary": "컴포넌트를 구성하고 DeltaTime 기반 이동·회전, 누적 이동량과 방향 전환을 작성했다.",
    "study_content": "MovingActor와 UpActor를 AActor에서 파생해 SceneRoot와 StaticMeshComp를 구성했다. 이동 액터는 X축 왕복 이동을, 회전 액터는 로컬 회전을 수행하도록 작성했다. 이번 기록은 ZIP에 포함된 프로젝트 전체 코드를 기준으로 정리한 것이며 개별 학습 날짜는 확인되지 않았다.",
    "learning_process": "생성자에서 컴포넌트의 부모·자식 관계를 연결하고 Tick에서 속도와 DeltaTime을 곱했다. MovingActor는 StartLocation에 이동량을 누적하며 UP 상태에 따라 이동 방향을 바꾼다. UPROPERTY로 속도와 경계값을 인스턴스에서 편집할 수 있도록 노출했다.",
    "application": "MovingActor.cpp의 AddActorWorldOffset과 UpActor.cpp의 AddActorLocalRotation 호출이 확인된다. 회전 코드는 FRotator의 첫 번째 성분을 변경한다. 클래스 이름만으로 상하 이동을 구현했다고 해석하지 않았다.",
    "mistakes_or_difficulties": [
      "MovingActor 기본값의 Max와 Min이 모두 10이므로 의도한 왕복 범위인지 점검해야 한다. 에디터에서 인스턴스 값이 변경됐는지는 확인하지 않았다."
    ],
    "questions": [
      "누적 이동량과 실제 월드 위치는 어떻게 구분하는가?",
      "왕복 경계값과 방향 전환 조건은 어떤 조합이어야 하는가?"
    ],
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
    "understanding": "코드 구성과 동작 흐름 확장",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "C++",
      "개인 프로젝트"
    ],
    "result": "ZIP 소스 코드 확인. 빌드·플레이 검증은 하지 않았다.",
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
    "project_part": "CH3_1"
  }
];
