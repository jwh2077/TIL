window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/08/2026-08-18_2026-08-23.js"] = [
  {
    "date": "2026-08-18",
    "date_end": "2026-08-23",
    "title": "CH3 개인 프로젝트 · 입력과 아이템 구조",
    "summary": "캐릭터 입력과 카메라, 움직이는 액터를 구성한 뒤 공통 아이템과 파생 아이템으로 확장했다.",
    "commits": [
      "2d1d7fb",
      "c40977c"
    ],
    "study_content": "8월 18일 첫 커밋에는 캐릭터, PlayerController, GameMode와 Item 액터 코드가 포함되어 있다. 23일에는 BaseItem, ItemInterface, 코인·회복·지뢰 아이템이 추가되었다. 캐릭터 조작과 액터 실습에서 시작해 상호작용이 있는 아이템 구조로 범위를 넓힌 작업 묶음이다.",
    "learning_process": "PlayerController에서 InputMappingContext를 등록하고 캐릭터의 SetupPlayerInputComponent에서 이동·점프·시점·달리기 액션을 함수와 연결했다. 현재 Item 코드는 Tick의 DeltaTime을 이동량과 회전량에 곱하고, 누적 Z 값에 따라 상하 이동 방향을 바꾼다. 이어 BaseItem에 공통 컴포넌트와 오버랩 처리를 모으고 ActivateItem을 파생 아이템에서 확장하는 구조를 작성했다.",
    "application": "SpringArm과 Camera 컴포넌트를 연결하고 이동 입력은 액터의 전방·우측 방향으로 적용했다. BaseItem은 Scene, Sphere Collision, StaticMesh를 구성하고 Player 태그를 확인해 ActivateItem을 호출한다. 각 아이템의 효과를 공통 획득 흐름에서 분리해 관리하려는 코드 구조가 확인된다.",
    "questions": [
      "입력 등록과 실제 캐릭터 동작의 책임은 어떻게 나누는가?",
      "공통 아이템의 처리와 파생 아이템의 효과는 어느 지점에서 연결하는가?"
    ],
    "mistakes_or_difficulties": [
      "현재 Item 코드에 PrimaryActorTick.bCanEverTick 표기가 있어 컴파일 검증이 필요하다. 이번 정리는 코드의 의도와 구조를 확인한 것이며 실행 성공을 뜻하지 않는다."
    ],
    "source_files": [
      "CH3Character.cpp",
      "CH3PlayerController.cpp",
      "Item.cpp",
      "BaseIteam.cpp",
      "ItemInterface.h"
    ],
    "id": "20260818-ch3",
    "date_start": "2026-08-18",
    "date_label": "2026-08-18 ~ 2026-08-23",
    "project": "챕터 3 개인 프로젝트",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "C++",
      "개인 프로젝트"
    ],
    "understanding": "기능 연결과 구조 확장",
    "date_basis": "Git 커밋 작성일 · 공식 수업 주차 미확인",
    "result": "변경 이력과 현재 소스 코드 확인. Unreal Editor 빌드·플레이 검증은 하지 않았다.",
    "repository": "https://github.com/jwh2077/CH3",
    "references": [
      {
        "label": "Git 변경 근거 · 2d1d7fb",
        "url": "https://github.com/jwh2077/CH3/commit/2d1d7fb"
      },
      {
        "label": "Git 변경 근거 · c40977c",
        "url": "https://github.com/jwh2077/CH3/commit/c40977c"
      }
    ],
    "source": [
      "CH3 로컬 저장소 Git 이력",
      "Source/CH3 소스 코드"
    ],
    "project_part": "CH3"
  }
];
