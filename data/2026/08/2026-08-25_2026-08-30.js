window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/08/2026-08-25_2026-08-30.js"] = [
  {
    "date": "2026-08-25",
    "date_end": "2026-08-30",
    "title": "CH3 개인 프로젝트 · 게임 진행과 HUD 연결",
    "summary": "아이템 스폰과 체력 처리에 점수·레벨 진행·HUD·메뉴 전환·획득 효과를 연결했다.",
    "commits": [
      "4cc002d",
      "c379422",
      "0f2bce5"
    ],
    "study_content": "25일 변경에서는 체력, GameState, ItemSpawnRow와 SpawnVolume이 확장되었다. 27일에는 GameInstance, 게임 진행과 HUD 코드가 추가되었고 30일에는 메뉴 흐름과 획득 효과를 보강했다. 서로 떨어진 기능을 하나의 플레이 흐름으로 연결해 간 기간이다.",
    "learning_process": "SpawnVolume은 DataTable의 행을 TArray로 가져와 Spawnchance의 합과 누적값으로 행을 선택한다. GameState는 진행 상태와 타이머를 관리하고, GameInstance의 TotalScore와 CurrentLevelIndex를 이용해 점수와 레벨 정보를 전달하는 구조를 작성했다. PlayerController는 HUD와 메뉴 위젯을 교체하고 UIOnly와 GameOnly 입력 모드를 전환한다. 현재 코드를 대조해 각 역할의 연결점을 확인했다.",
    "application": "캐릭터의 체력을 Clamp하고 머리 위 위젯의 텍스트를 갱신하는 코드, 점수·시간·레벨을 HUD에 표시하는 코드가 있다. StartGame은 점수와 레벨 인덱스를 초기화하고 BasicLevel을 연다. 아이템 획득 시 파티클과 사운드를 재생하며, 지뢰는 타이머 이후 겹친 Player 대상에 피해를 적용하는 흐름으로 구성했다.",
    "questions": [
      "레벨의 진행 상태와 레벨을 넘어 유지할 데이터는 어떻게 나누는가?",
      "지연 콜백이 실행될 때 효과 객체의 유효성은 어떻게 확인하는가?"
    ],
    "mistakes_or_difficulties": [
      "위젯 이름·클래스와 입력 에셋의 실제 연결은 Unreal Editor 실행 확인이 필요하다.",
      "현재 BaseItem 파티클 정리는 TWeakObjectPtr의 IsValid를 확인하지만 MineItem 콜백은 원시 포인터를 캡처한다. 두 구현의 안전성을 같다고 단정하지 않는다."
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
    "project": "CH3 개인 프로젝트",
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
        "label": "Git 변경 근거 · 4cc002d",
        "url": "https://github.com/jwh2077/CH3/commit/4cc002d"
      },
      {
        "label": "Git 변경 근거 · c379422",
        "url": "https://github.com/jwh2077/CH3/commit/c379422"
      },
      {
        "label": "Git 변경 근거 · 0f2bce5",
        "url": "https://github.com/jwh2077/CH3/commit/0f2bce5"
      }
    ],
    "source": [
      "CH3 로컬 저장소 Git 이력",
      "Source/CH3 소스 코드"
    ]
  }
];
