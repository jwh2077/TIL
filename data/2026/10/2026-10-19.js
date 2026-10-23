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
  }
];
