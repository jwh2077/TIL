window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/09/2026-09-02.js"] = [
  {
    "date": "2026-09-02",
    "date_end": null,
    "title": "CH3 개인 프로젝트 · 웨이브 확장과 남은 점검",
    "summary": "레벨 안의 웨이브를 분리하고 시간 종료·코인 수집 종료·HUD 갱신을 연결한 코드를 정리했다.",
    "commits": [
      "3cd9672"
    ],
    "study_content": "9월 2일 변경은 GameState의 웨이브 처리와 BaseItem의 효과 정리를 확장한 작업이다. 레벨 전체 시간과 웨이브 시간을 따로 관리하고, 웨이브 종료 후 다음 웨이브 또는 다음 레벨로 진행하는 구조를 추가했다.",
    "learning_process": "현재 StartWave는 생성·수집 코인 수를 초기화하고 ItemsPerWave만큼 스폰을 시도한다. EndWave는 타이머와 남은 코인을 정리한 뒤 인덱스를 증가시킨다. 시간 종료와 모든 코인 수집이라는 두 경로가 EndWave로 모이고, 최대 웨이브를 넘으면 EndLevel로 이어지는 흐름을 코드에서 추적했다.",
    "application": "현재 기본값은 MaxWaves 3, ItemsPerWave 20, WaveDuration 10초, LevelDuration 30초이다. HUD는 레벨 시간과 웨이브 시간·번호를 갱신하고 EndLevel에서 다음 맵 또는 게임 종료로 분기한다. 설정값은 현재 코드 기준이며 실제 에셋 오버라이드와 플레이 결과는 확인하지 않았다.",
    "questions": [
      "스폰 함수의 반환값이 집계에 제대로 전달되는가?",
      "전체 레벨 타이머와 웨이브 타이머가 가까운 시점에 종료될 때 중복 진행을 막는가?"
    ],
    "mistakes_or_difficulties": [
      "현재 SpawnRandomItem은 SpawnItem을 호출하지만 생성 액터를 반환하지 않고 항상 nullptr을 반환한다. StartWave가 반환값으로 코인을 세므로 생성 코인 수가 증가하지 않아 수집 완료 경로가 막힐 수 있다.",
      "타이머 동시 종료와 레벨 전환 경계 조건은 플레이 테스트 대상으로 남긴다."
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
        "label": "Git 변경 근거 · 3cd9672",
        "url": "https://github.com/jwh2077/CH3/commit/3cd9672"
      }
    ],
    "source": [
      "CH3 로컬 저장소 Git 이력",
      "Source/CH3 소스 코드"
    ]
  }
];
