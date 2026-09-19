window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/06/2026-06-30.js"] = [
  {
    "id": "20260630-001",
    "date": "2026-06-30",
    "title": "FPS 발사 기능과 C 자료형",
    "project": "FirstFPS · 첫 주 Blueprint 프로젝트",
    "phase": "따라 해봄",
    "tags": [
      "C",
      "Unreal",
      "Blueprint",
      "자료형",
      "실습",
      "시행착오"
    ],
    "study_content": "IA_Fire 입력부터 사운드, 총구 효과, 랜덤 반동, Line Trace까지 한 번에 붙여서 FPS 발사 기능을 만들었다. C에서는 정수·실수 자료형과 printf, scanf를 써봤다.",
    "learning_process": "Started에서 IsFiring을 true로 바꾸고 Completed에서 false로 돌렸다. 연사 간격을 두는 Delay는 함수 밖 이벤트 흐름에 놓았다. 카메라 위치를 시작점으로 잡고 카메라가 보는 방향에 6000을 곱해서 Line Trace 끝점을 만들었다. 무언가 맞으면 Hit Location에서 피격 효과가 나오게 연결했다.",
    "questions": [],
    "mistakes_or_difficulties": [
      "Collision과 Hit 옵션이 많아서 처음에는 왜 레이저가 적을 통과하는지 찾기 어려웠다. 필요한 충돌 설정을 하나씩 바꾸면서 확인했다.",
      "C 자료형은 종류가 많아 정수와 실수의 정확한 크기까지는 아직 헷갈렸다."
    ],
    "application": "마우스를 누르는 동안 일정 간격으로 발사하고, 카메라 정면의 적을 맞히면 피격 효과가 나오게 했다.",
    "result": "발사 입력부터 충돌 지점 처리까지 이어지는 전체 Blueprint 흐름을 완성했다.",
    "code_reference": null,
    "understanding": "예제 기반 실습",
    "related_topics": [
      "Collision",
      "Hit",
      "printf",
      "scanf",
      "정수",
      "실수"
    ],
    "later_connection": "이후 Unreal C++에서 Collision과 객체 간 상호작용을 다룰 때 다시 연결되었다.",
    "next_learning": "HUD와 함수 개념",
    "images": [
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/18b521a5-3495-4cbb-8aab-a3152c5676b8/image.png",
        "caption": "IA_Fire 입력으로 발사 상태를 바꾸는 부분"
      },
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/b00fb4cc-b22c-43fc-aa08-42c00428ecaa/image.png",
        "caption": "카메라 위치와 방향으로 Line Trace 시작점과 끝점을 만든 Blueprint"
      },
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/2d911772-8d8e-4e36-a7ab-f003f1307dd7/image.png",
        "caption": "충돌 지점에서 피격 효과를 재생하도록 연결한 부분"
      }
    ],
    "velog": "https://velog.io/@jwh4410/6.30",
    "repository": "https://github.com/jwh2077/FirstFPS",
    "source": [
      "Velog",
      "사용자 확인: 첫 주 Blueprint 프로젝트는 FirstFPS"
    ],
    "primary_topic": "unreal",
    "summary": "발사 입력, 연사 간격, 반동, Line Trace와 피격 효과를 연결해서 FPS 총 발사 흐름을 만들었다.",
    "date_start": "2026-06-30",
    "date_label": "2026-06-30",
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
