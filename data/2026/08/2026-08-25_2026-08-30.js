window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/08/2026-08-25_2026-08-30.js"] = [
  {
    "date": "2026-08-25",
    "date_end": "2026-08-30",
    "title": "CH3 개인 프로젝트 · 게임 진행과 HUD 연결",
    "summary": "아이템 스폰과 체력 처리에 점수, 레벨 진행, HUD, 메뉴 전환을 연결했다.",
    "commits": [
      "4cc002d",
      "c379422",
      "0f2bce5"
    ],
    "study_content": "아이템 스폰과 체력 처리에 점수, 레벨 진행, HUD, 메뉴 전환을 연결했다. 기능이 따로 움직이는 상태에서 실제 게임 한 판의 흐름으로 묶어 가던 기간이다.",
    "learning_process": "SpawnVolume은 DataTable의 Spawnchance 합과 누적값으로 아이템을 고르게 했다. GameState가 타이머와 진행 상태를 맡고 GameInstance에는 레벨이 바뀌어도 남아야 하는 점수와 레벨 인덱스를 뒀다. PlayerController에서는 HUD와 메뉴 위젯을 바꾸면서 UIOnly와 GameOnly 입력 모드도 같이 전환했다.",
    "questions": [
      "레벨의 진행 상태와 레벨을 넘어 유지할 데이터는 어떻게 나누는가?",
      "지연 콜백이 실행될 때 효과 객체의 유효성은 어떻게 확인하는가?"
    ],
    "mistakes_or_difficulties": [
      "위젯과 입력 에셋을 연결한 뒤 실제로 동작하는지는 확인되지 않았다.",
      "BaseItem은 TWeakObjectPtr의 IsValid를 검사하지만 MineItem은 타이머 함수에 일반 포인터를 넘긴다. 타이머가 실행될 때 객체가 남아 있는지는 별도로 봐야 한다."
    ],
    "source_files": [
      "SpawnVolume.cpp",
      "CH3GameState.cpp",
      "CH3GameInstance.cpp",
      "CH3PlayerController.cpp",
      "MineItem.cpp"
    ],
    "id": "20260825-ch3",
    "date_start": "2026-08-25",
    "date_label": "2026-08-25 ~ 2026-08-30",
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
        "label": "변경 코드 · 4cc002d",
        "url": "https://github.com/jwh2077/CH3/commit/4cc002d"
      },
      {
        "label": "변경 코드 · c379422",
        "url": "https://github.com/jwh2077/CH3/commit/c379422"
      },
      {
        "label": "변경 코드 · 0f2bce5",
        "url": "https://github.com/jwh2077/CH3/commit/0f2bce5"
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
