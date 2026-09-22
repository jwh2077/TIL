window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/06/2026-06-29.js"] = [
  {
    "id": "20260629-001",
    "date": "2026-06-29",
    "title": "Enhanced Input과 C 연산자",
    "project": "FirstFPS · 첫 주 Blueprint 프로젝트",
    "phase": "따라 해봄",
    "tags": [
      "C",
      "Unreal",
      "Blueprint",
      "실습",
      "개념정리"
    ],
    "study_content": "Enhanced Input으로 이동, 시점 회전, 조준을 붙여봤다. 같은 날 C에서는 연산자와 조건문, 반복문을 공부했다.",
    "learning_process": "IA_Move와 IA_Look은 X, Y 두 값이 필요해서 Axis2D로 만들고 IA_Aim은 누른 상태만 구분하면 돼서 Bool로 만들었다. IMC_FPS에서 키를 연결한 뒤 Move의 X는 오른쪽, Y는 앞쪽 이동에 썼다. Look은 마우스 X, Y를 Yaw와 Pitch에 연결했고 Aim은 Started가 들어올 때마다 IsAiming을 반대로 바꿨다.",
    "questions": [
      "왜 Input Action과 Input Mapping Context를 분리해서 사용하는가?"
    ],
    "mistakes_or_difficulties": [
      "처음에는 IA와 IMC를 왜 나눠 쓰는지 헷갈렸다. 일단 IA는 입력값의 형태, IMC는 실제 키 연결을 맡는다고 정리했다."
    ],
    "code_reference": null,
    "related_topics": [
      "Input Action",
      "Input Mapping Context",
      "Yaw",
      "Pitch",
      "Roll"
    ],
    "images": [
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/4f5f3d10-9306-4aef-b4ad-15a6de13d70f/image.png",
        "caption": "Input Mapping Context에 Move, Look, Aim을 등록한 목록"
      },
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/3cd8ddc2-c065-41a5-bab3-b0e139263c34/image.png",
        "caption": "S키의 입력 축과 방향을 바꾼 Swizzle과 Negate 설정"
      },
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/fc6edc56-a3a9-4af5-adb3-1bae1d11a8f8/image.png",
        "caption": "Look 입력의 X·Y 값을 Yaw·Pitch 회전에 연결한 Blueprint"
      },
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/ecd5e220-7920-484e-b4c4-ff7988c6c73b/image.png",
        "caption": "카메라가 Pawn의 회전을 따르도록 켠 Use Pawn Control Rotation"
      }
    ],
    "velog": "https://velog.io/@jwh4410/6.29",
    "repository": "https://github.com/jwh2077/FirstFPS",
    "source": [
      "Velog",
      "사용자 확인: 첫 주 Blueprint 프로젝트는 FirstFPS"
    ],
    "primary_topic": "unreal",
    "summary": "Enhanced Input으로 이동, 시점 회전, 조준을 붙여봤다.",
    "date_start": "2026-06-29",
    "date_label": "2026-06-29",
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
