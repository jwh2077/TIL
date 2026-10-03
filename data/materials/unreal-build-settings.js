window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-build-settings.js"] = [
  {
    "id": "unreal-build-settings",
    "title": "Unreal Build.cs 설정",
    "summary": "모듈 추가, Public/Private 선택 기준, 헤더 검색 경로와 파일 위치별 #include 예시.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "빌드 설정 참고 · 2026-10-02",
    "source_name": "10.02.md · 로컬 보관",
    "source_url": "",
    "notice": "ChatX와 ProjectPriest의 설정을 예로 정리했다. 코드는 설정과 경로를 설명하기 위한 예시다.",
    "sections": [
      {
        "title": "필요한 설정 찾기",
        "html": "<table><thead><tr><th scope=\"col\">하려는 일</th><th scope=\"col\">설정</th></tr></thead><tbody><tr><td>다른 모듈의 기능 사용</td><td>DependencyModuleNames</td></tr><tr><td>헤더 검색 경로 추가</td><td>IncludePaths</td></tr><tr><td>다른 모듈에도 공개</td><td>Public</td></tr><tr><td>현재 모듈 안에서만 사용</td><td>Private</td></tr></tbody></table>",
        "text": "Build.cs는 UBT에 모듈의 빌드 설정을 전달한다."
      },
      {
        "title": "모듈 추가 — DependencyModuleNames",
        "text": "사용할 기능이 속한 Unreal 모듈을 의존성에 추가한다. 예를 들어 UEnhancedInputComponent는 EnhancedInput 모듈의 기능이다. #include로 헤더를 포함하는 것과 모듈 의존성을 지정하는 것은 역할이 다르다.",
        "code": "PublicDependencyModuleNames.AddRange(new string[]\n{\n    \"Core\", \"CoreUObject\", \"Engine\", \"InputCore\", \"EnhancedInput\"\n});"
      },
      {
        "title": "모듈 의존성 — Public과 Private",
        "html": "<table><thead><tr><th scope=\"col\">구분</th><th scope=\"col\">선택 기준</th><th scope=\"col\">예</th></tr></thead><tbody><tr><td>PublicDependencyModuleNames</td><td>공개 인터페이스를 사용하는 쪽에도 필요</td><td>공개 헤더가 의존하는 모듈</td></tr><tr><td>PrivateDependencyModuleNames</td><td>현재 모듈 내부 구현에서만 필요</td><td>cpp 내부에서만 사용하는 Slate / SlateCore</td></tr></tbody></table>",
        "text": "C++ 클래스의 접근 제어와는 별개의 설정이다."
      },
      {
        "title": "IncludePaths — 검색 기준과 하위 경로",
        "text": "검색 기준 ChatX와 include 경로 Game/CXGameModeBase.h를 합쳐 헤더를 찾는다. 하위 폴더 전체를 자동으로 재귀 탐색하는 설정은 아니다.",
        "code": "// Build.cs: 헤더 검색 기준 추가\nPublicIncludePaths.Add(\"ChatX\");\n\n// 헤더 위치: Source/ChatX/Game/CXGameModeBase.h\n#include \"Game/CXGameModeBase.h\"",
        "html": "<ol class=\"reference-flow\"><li>검색 기준: ChatX/</li><li>상대 경로: Game/CXGameModeBase.h</li><li>대상: ChatX/Game/CXGameModeBase.h</li></ol>",
        "items": [
          "Add(\"ChatX\"): 경로 하나 추가",
          "AddRange(new string[] { \"PathA\", \"PathB\" }): 여러 경로 추가. 하나만 담은 배열도 가능하다."
        ]
      },
      {
        "title": "파일 위치별 #include 예시",
        "text": "ChatX가 검색 기준으로 등록된 경우다. 같은 폴더에서 헤더를 찾는 경우와 등록된 경로에서 찾는 경우를 구분한다.",
        "code": "// 1. cpp와 h가 같은 폴더\nChatX/\n└─ Game/\n   ├─ CXGameModeBase.cpp\n   └─ CXGameModeBase.h\n// cpp: #include \"CXGameModeBase.h\"\n\n// 2. cpp만 상위 폴더\nChatX/\n├─ CXGameModeBase.cpp\n└─ Game/\n   └─ CXGameModeBase.h\n// cpp: #include \"Game/CXGameModeBase.h\"\n\n// 3. h만 상위 폴더\nChatX/\n├─ CXGameModeBase.h\n└─ Game/\n   └─ CXGameModeBase.cpp\n// cpp: #include \"CXGameModeBase.h\""
      },
      {
        "title": "PublicIncludePaths와 PrivateIncludePaths — 공개 범위",
        "text": "둘 다 헤더 검색 경로다. Private에도 내부용 헤더를 둘 수 있으므로 Public = h, Private = cpp로 구분하지 않는다.",
        "code": "PublicIncludePaths.Add(\"ProjectPriest/StateMachines/Public\");\nPrivateIncludePaths.Add(\"ProjectPriest/StateMachines/Private\");\n\n// 위 Public 경로를 기준으로 포함하는 헤더\n#include \"StateMachine.h\"\n#include \"States/IdleState.h\"",
        "html": "<table><thead><tr><th scope=\"col\">설정</th><th scope=\"col\">사용 범위</th></tr></thead><tbody><tr><td>PublicIncludePaths</td><td>공개 인터페이스에서 필요한 검색 경로</td></tr><tr><td>PrivateIncludePaths</td><td>현재 모듈 내부에서 필요한 검색 경로</td></tr></tbody></table>",
        "items": [
          "예시의 StateMachines/Public·Private는 모듈 바로 아래의 일반적인 Public·Private 위치와 달라 경로를 직접 등록한다.",
          "검색 기준을 더 깊게 두면 #include에서 그 앞부분을 생략할 수 있다."
        ]
      }
    ],
    "related_ids": [
      "20261002-chatx"
    ],
    "references": [
      {
        "label": "ChatX · 이번 과제 저장소",
        "url": "https://github.com/jwh2077/ChatX"
      },
      {
        "label": "C++·Unreal 빌드 과정",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-build-flow"
      },
      {
        "label": "Unreal C++ AItem 헤더 구조",
        "url": "https://jwh2077.github.io/TIL/#material=velog-20260810-001"
      }
    ]
  }
];
