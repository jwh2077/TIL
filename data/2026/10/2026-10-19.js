window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/10/2026-10-19.js"] = [
  {
    "id": "20261019-study",
    "date": "2026-10-19",
    "date_start": "2026-10-19",
    "date_end": null,
    "date_label": "2026-10-19",
    "date_basis": "사용자가 지정한 10월 19일 자료와 10-19.txt 파일명. 연도는 현재 학습 기록의 2026년 흐름에 맞춤.",
    "title": "Unreal · Config와 빌드 구성 살펴보기",
    "project": "개인 공부",
    "primary_topic": "unreal",
    "activity": "study",
    "tags": [
      "Unreal",
      "Config",
      "빌드",
      "머티리얼"
    ],
    "summary": "Base·Default와 플랫폼별 설정을 보고, Development·DebugGame·Shipping 및 Editor가 붙는 경우를 나눠 적었다. 머티리얼과 HLSL도 참고로 메모했다.",
    "study_content": "Config 설정을 봤다. 엔진 폴더에 있는 Base 설정을 바탕으로 프로젝트의 Default 설정을 덮어쓰거나 추가하는 흐름으로 적었다. Android처럼 플랫폼에 따라 설정 파일을 나누는 내용도 함께 봤다.\n\n빌드 구성은 Development, DebugGame, Shipping으로 나눠 적었다. Development는 개발 중 사용하는 구성, DebugGame은 내가 만든 프로젝트 코드를 따라가며 디버깅할 때 쓰는 구성, Shipping은 배포와 최적화에 맞춘 구성으로 구분했다. Development Editor와 DebugGame Editor처럼 Editor가 붙는 경우도 같이 봤다.\n\n머티리얼은 노드로 보이지만 내부 코드로 변환된다는 설명을 들었다. 머티리얼 창에서 볼 수 있는 HLSL과 코드를 넣는 내용도 참고로 적어 뒀다.",
    "references": [
      {
        "label": "C++·Unreal 빌드 과정과 빌드 구성",
        "url": "#material=unreal-build-flow"
      }
    ],
    "source": [
      "10-19.txt"
    ]
  },
  {
    "id": "20261019-cx",
    "date": "2026-10-19",
    "title": "CX · 프로젝트 설정과 엔진 버전 맞추기",
    "project": "CX",
    "activity": "personal",
    "tags": [
      "Unreal",
      "C++",
      "프로젝트 설정",
      "Git"
    ],
    "summary": "CX 기본 파일을 Git에 등록하고 엔진 연결을 5.5에서 5.6으로 바꿨다.",
    "study_content": "CX 프로젝트의 기본 파일을 Git에 등록하고 Visual Studio 개발 설정을 추가했다. 프로젝트의 엔진 연결은 5.5에서 현재 사용하는 5.6으로 바꿨다.\n\n.uproject의 EngineAssociation은 어느 엔진으로 프로젝트를 열지 정하는 정보였다. 강의와 내 환경의 버전이 다르면 코드를 비교하기 전에 엔진 버전부터 맞춰 봐야 했다.\n\nGit에 보관할 파일도 구분했다. Source뿐 아니라 Content, Config, .uproject가 프로젝트를 구성하고, 빌드하면서 만들어지는 파일과 개발 도구의 개인 설정은 따로 봐야 했다.",
    "references": [
      {
        "label": "C++·Unreal 빌드 과정과 빌드 구성",
        "url": "#material=unreal-build-flow"
      }
    ],
    "source": [
      "TIL_CX/2026-10-19.md",
      "TIL_CX/README.md · 초기 등록·설정 관련 커밋 02a4958, 28bad06, fb8b080을 대조한 사용자 제공 정리"
    ],
    "date_basis": "사용자가 제공한 TIL_CX/2026-10-19.md의 작업일. 동봉 README의 커밋 날짜는 저장 시점 근거이며 작업 시작일로 확장하지 않음.",
    "date_start": "2026-10-19",
    "date_end": null,
    "date_label": "2026-10-19",
    "primary_topic": "unreal"
  }
];
