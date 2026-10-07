window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/10/2026-10-02.js"] = [
  {
    "id": "20261002-chatx",
    "date": "2026-10-02",
    "date_start": "2026-10-02",
    "date_end": null,
    "date_label": "2026-10-02",
    "date_basis": "사용자가 오늘 자료로 제공한 10.02.md와 대화",
    "title": "ChatX · Build.cs와 헤더 경로 따라가기",
    "project": "ChatX",
    "primary_topic": "unreal",
    "activity": "personal",
    "tags": [
      "Unreal",
      "C++",
      "Build.cs",
      "헤더",
      "빌드"
    ],
    "summary": "Dependency와 IncludePaths를 구분하고, 파일 위치를 바꾸면서 헤더를 찾는 경로와 C++ 빌드 흐름을 살펴봤다.",
    "study_content": "ChatX 과제를 진행하면서 Build.cs의 DependencyModuleNames와 IncludePaths가 각각 무엇을 하는지 봤다. Dependency는 사용할 Unreal 모듈을, IncludePaths는 헤더를 찾을 기준 경로를 정하는 설정이었다. IncludePaths가 cpp 파일을 찾는 설정은 아니었다.\n\nCXGameModeBase의 cpp와 헤더 위치를 바꿔 보며 경로를 따라갔다. 같은 폴더에서는 파일명만 적어도 됐지만, cpp만 밖으로 옮기면 Game/CXGameModeBase.h처럼 하위 경로가 필요했다. 헤더를 ChatX 바로 아래로 옮겼을 때는 등록한 검색 경로에서 찾을 수 있었다.\n\nVisual Studio에서는 Game/CXGameModeBase.h에 빨간 줄이 뜨는데 실제 빌드는 성공하기도 했다. IntelliSense의 표시와 빌드 결과가 다를 수 있어서, 빨간 줄만 보고 빌드 오류라고 생각하면 안 됐다.\n\n여기서 cpp가 헤더를 포함해 컴파일되고, 그 결과가 링크되는 과정까지 이어서 봤다. UHT는 C++ 컴파일러를 대신하는 것이 아니라 Unreal 리플렉션에 필요한 코드를 준비하는 도구였다. 파일 위치별 예시와 빌드 순서는 자료실에 모았다.",
    "repository": "https://github.com/jwh2077/ChatX",
    "references": [
      {
        "label": "C++·Unreal 빌드 과정",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-build-flow"
      },
      {
        "label": "Unreal Build.cs 설정",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-build-settings"
      }
    ],
    "source": [
      "10.02.md · 로컬 보관",
      "2026-10-02 대화 · ChatX 과제 저장소 안내"
    ],
    "questions": [
      "Public과 Private은 의존성을 어디까지 공개할지 나누는 정도로 이해했다. 캡슐화와는 어떤 관계인지 아직 깊게 공부하지 못했다."
    ]
  }
];
