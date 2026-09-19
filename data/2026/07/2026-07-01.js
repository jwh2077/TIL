window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/07/2026-07-01.js"] = [
  {
    "id": "20260701-001",
    "date": "2026-07-01",
    "title": "HUD와 함수 개념",
    "project": "FirstFPS · 첫 주 Blueprint 프로젝트",
    "phase": "처음 접함",
    "tags": [
      "C",
      "Unreal",
      "Blueprint",
      "함수",
      "실습"
    ],
    "study_content": "화면에 탄약과 체력을 표시하는 HUD를 만들고, 적이 플레이어를 감지해서 따라오다가 가까워지면 자폭하는 흐름까지 붙였다. C에서는 함수가 왜 필요한지 처음 배웠다.",
    "learning_process": "위젯의 숫자와 Progress Bar를 변수로 바꾸고 캐릭터의 탄약·체력 값과 연결했다. 체력 바에는 현재 체력을 0~1 값으로 바꿔 넣었다. 적 쪽은 감지한 플레이어를 NavMesh 안에서 따라오게 하고, 가까워지면 30 데미지와 사운드·효과를 실행한 뒤 자신을 없앴다.",
    "questions": [
      "함수의 매개변수와 반환값은 어떤 역할을 하는가?"
    ],
    "mistakes_or_difficulties": [
      "같은 코드를 묶어 다시 쓴다는 건 이해했지만 매개변수와 반환값이 실제로 언제 필요한지는 아직 헷갈렸다."
    ],
    "application": "탄약과 체력 HUD, 적 추적, 자폭 공격을 기존 FPS 프로젝트에 연결했다.",
    "result": "플레이어 상태가 HUD에 바로 바뀌고, 적이 감지부터 추적·공격까지 이어서 동작하는 걸 확인했다.",
    "code_reference": null,
    "understanding": "핵심 흐름 이해",
    "related_topics": [
      "HUD",
      "NavMesh",
      "함수",
      "AI"
    ],
    "later_connection": "이후 TextRPG에서 여러 기능을 함수로 분리하면서 함수의 필요성을 직접 경험했다.",
    "next_learning": "아이템, 탄약, UI 이벤트 등 게임 기능 확장",
    "images": [
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/fabaa8bc-f090-4066-a0ee-401673f27199/image.png",
        "caption": "탄약 수를 표시하기 위해 만든 HUD 위젯"
      },
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/c180c10a-924e-4dfc-b6db-366b70dae70a/image.png",
        "caption": "플레이어를 감지한 적이 NavMesh 안에서 추적하도록 만든 흐름"
      },
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/bac853e7-2a01-4a49-a4de-da63d4ae5fe4/image.png",
        "caption": "자폭 범위에 들어오면 피해와 효과를 실행한 부분"
      }
    ],
    "velog": "https://velog.io/@jwh4410/7.1",
    "repository": "https://github.com/jwh2077/FirstFPS",
    "source": [
      "Velog",
      "사용자 확인: 첫 주 Blueprint 프로젝트는 FirstFPS"
    ],
    "primary_topic": "unreal",
    "summary": "탄약·체력 HUD를 만들고 적의 감지, NavMesh 추적, 자폭 공격을 한 흐름으로 연결했다.",
    "date_start": "2026-07-01",
    "date_label": "2026-07-01",
    "references": [
      {
        "label": "FirstFPS 원본 저장소",
        "url": "https://github.com/jwh2077/FirstFPS"
      }
    ],
    "repository_verification": "사용자가 제공한 저장소 연결 정보 기준. 로컬 FirstFPS 경로를 현재 읽을 수 없어 Git 이력과 Blueprint 노드·실행 결과는 대조하지 않았다.",
    "activity": "personal"
  }
];
