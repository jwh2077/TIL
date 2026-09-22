window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/09/2026-09-02.js"] = [
  {
    "date": "2026-09-02",
    "date_end": null,
    "title": "CH3 개인 프로젝트 · 웨이브 추가",
    "summary": "레벨 전체 시간과 웨이브 시간을 따로 두고 한 레벨 안에서 여러 웨이브가 이어지게 바꿨다.",
    "commits": [
      "3cd9672"
    ],
    "study_content": "레벨 전체 시간과 웨이브 시간을 따로 두고 한 레벨 안에서 여러 웨이브가 이어지게 바꿨다. 시간이 끝나거나 코인을 모두 모으면 같은 EndWave 흐름으로 들어가게 했다.",
    "learning_process": "StartWave에서 생성 수와 수집 수를 초기화하고 아이템을 스폰했다. EndWave에서는 타이머와 남은 코인을 정리한 뒤 웨이브 인덱스를 올렸다. 마지막 웨이브가 끝나면 EndLevel로 넘기고 HUD에는 레벨 시간, 웨이브 시간과 현재 번호를 표시했다.",
    "questions": [
      "스폰 함수의 반환값이 집계에 제대로 전달되는가?",
      "전체 레벨 타이머와 웨이브 타이머가 가까운 시점에 종료될 때 중복 진행을 막는가?"
    ],
    "mistakes_or_difficulties": [
      "SpawnRandomItem은 SpawnItem을 호출한 뒤 항상 nullptr을 반환한다. StartWave는 이 반환값으로 코인 수를 세므로 생성 수가 늘지 않아 코인 수집으로 웨이브를 끝내는 경로에 문제가 생길 수 있다.",
      "레벨 타이머와 웨이브 타이머가 함께 끝날 때 중복으로 넘어가는지는 실행 확인이 필요하다."
    ],
    "source_files": [
      "CH3GameState.cpp",
      "CH3GameState.h",
      "SpawnVolume.cpp",
      "BaseIteam.cpp"
    ],
    "id": "20260902-ch3",
    "date_start": "2026-09-02",
    "date_label": "2026-09-02",
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
        "label": "변경 코드 · 3cd9672",
        "url": "https://github.com/jwh2077/CH3/commit/3cd9672"
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
