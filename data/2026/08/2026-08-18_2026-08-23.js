window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/08/2026-08-18_2026-08-23.js"] = [
  {
    "date": "2026-08-18",
    "date_end": "2026-08-23",
    "title": "CH3 개인 프로젝트 · 입력과 아이템 구조",
    "summary": "캐릭터 이동과 카메라, 움직이는 Item 액터를 만든 뒤 코인·회복·지뢰 아이템까지 늘렸다.",
    "commits": [
      "2d1d7fb",
      "c40977c"
    ],
    "study_content": "캐릭터 이동과 카메라, 움직이는 Item 액터를 만든 뒤 코인·회복·지뢰 아이템까지 늘렸다. 처음에는 각각 만들던 아이템의 공통 부분을 BaseItem과 ItemInterface로 묶었다.",
    "learning_process": "PlayerController에서 InputMappingContext를 등록하고 캐릭터에서 이동·점프·시점·달리기 입력을 함수에 연결했다. BaseItem에는 Scene, Sphere Collision, StaticMesh와 오버랩 처리를 두고, 실제 효과는 각 아이템의 ActivateItem에서 다르게 실행했다.",
    "questions": [
      "입력 등록과 실제 캐릭터 동작의 책임은 어떻게 나누는가?",
      "공통 아이템의 처리와 파생 아이템의 효과는 어느 지점에서 연결하는가?"
    ],
    "mistakes_or_difficulties": [
      "Item에 PrimaryActorTick.bCanEverTick 표기가 남아 있다. 이 상태로 컴파일되는지는 확인되지 않았다."
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
    "date_basis": "Git 커밋 작성일 · 공식 수업 주차 미확인",
    "repository": "https://github.com/jwh2077/CH3",
    "references": [
      {
        "label": "변경 코드 · 2d1d7fb",
        "url": "https://github.com/jwh2077/CH3/commit/2d1d7fb"
      },
      {
        "label": "변경 코드 · c40977c",
        "url": "https://github.com/jwh2077/CH3/commit/c40977c"
      }
    ],
    "source": [
      "CH3 로컬 저장소 Git 이력",
      "Source/CH3 소스 코드"
    ],
    "project_part": "CH3",
    "activity": "personal"
  }
];
