window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-build-flow.js"] = [
  {
    "id": "unreal-build-flow",
    "title": "Build.cs와 C++ 빌드 흐름",
    "summary": "모듈 의존성과 헤더 검색 경로를 구분하고, cpp·UHT·IntelliSense가 하는 일을 연결해 봤다.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "2026-10-02 공부 메모",
    "source_name": "10.02.md · 로컬 보관",
    "source_url": "",
    "notice": "ChatX를 진행하며 설정과 파일 위치를 바꿔 보고 적은 내용이다. 아래 짧은 코드는 설명용 예시도 포함한다.",
    "sections": [
      {
        "title": "Build.cs에서 나누어 본 두 설정",
        "text": "ChatX의 Build.cs를 보면서 어떤 모듈을 쓸지와 헤더를 어디서 찾을지를 나눠 봤다. Build.cs는 UBT에 모듈의 빌드 설정을 알려준다. ACXCharacter가 UEnhancedInputComponent를 사용한다면 실제 사용은 클래스에서 하더라도 UBT에는 EnhancedInput 모듈에 대한 의존성으로 알려주는 식이다.",
        "code": "PublicDependencyModuleNames.AddRange(new string[]\n{\n    \"Core\", \"CoreUObject\", \"Engine\", \"InputCore\", \"EnhancedInput\"\n});\nPublicIncludePaths.Add(\"ChatX\");"
      },
      {
        "title": "Public과 Private Dependency",
        "text": "공개 헤더를 사용하는 쪽에도 필요한 의존성은 Public, 내부 구현에서만 필요한 의존성은 Private으로 구분했다. 예를 들어 cpp 내부에서만 Slate를 사용한다면 PrivateDependencyModuleNames에 Slate와 SlateCore를 두는 식이다. 객체의 public/private와 완전히 같은 개념은 아니지만, 외부에 필요한 정보와 내부 구현을 나눈다는 점에서 캡슐화와 연결해서 생각했다. 아직은 의존성의 공개 범위를 나눈다는 정도로 이해한다."
      },
      {
        "title": "검색 기준점과 include 경로",
        "text": "ChatX를 헤더 검색 기준으로 등록하고 그 아래 Game/CXGameModeBase.h를 둔다면 include에도 Game/을 적는다. 하위 폴더를 전부 뒤져 파일명만으로 찾아주는 설정은 아니다.",
        "code": "// 헤더 위치: Source/ChatX/Game/CXGameModeBase.h\n#include \"Game/CXGameModeBase.h\""
      },
      {
        "title": "cpp와 헤더를 옮겨 보기",
        "items": [
          "Game/ 안에 cpp와 h가 같이 있을 때는 #include \"CXGameModeBase.h\"로 읽을 수 있었다. 같은 폴더에서 찾을 수 있으니 반드시 IncludePaths 설정 덕분인 것은 아니다.",
          "cpp만 ChatX/ 바로 아래로 옮기고 헤더는 Game/에 두면 #include \"Game/CXGameModeBase.h\"로 경로를 적는다.",
          "반대로 헤더를 ChatX/ 바로 아래에 두면 등록한 검색 기준에서 CXGameModeBase.h를 찾을 수 있다."
        ],
        "text": "IncludePaths는 cpp의 위치를 찾는 설정이 아니라 cpp를 컴파일하면서 필요한 헤더를 찾는 설정이었다."
      },
      {
        "title": "Public/Private IncludePaths와 폴더 위치",
        "text": "Public은 h, Private은 cpp라고만 생각하면 맞지 않았다. 둘 다 헤더 검색 경로이며 Private에도 내부용 헤더를 둘 수 있다. ProjectPriest에서는 StateMachines/Public과 StateMachines/Private이 모듈 바로 아래의 일반적인 Public/Private 위치와 달라 해당 경로를 따로 등록한 예를 봤다.",
        "code": "PublicIncludePaths.Add(\"ProjectPriest/StateMachines/Public\");\nPrivateIncludePaths.Add(\"ProjectPriest/StateMachines/Private\");\n\n// 위 Public 경로를 기준으로 포함하는 헤더\n#include \"StateMachine.h\"\n#include \"States/IdleState.h\""
      },
      {
        "title": "Add와 AddRange",
        "text": "Add는 하나, AddRange는 여러 항목을 한꺼번에 추가할 때 쓴다. 경로 하나만 들어 있는 배열을 AddRange로 넘겨도 목적은 같다.",
        "code": "PublicIncludePaths.Add(\"ChatX\");\n// 같은 경로 하나를 배열로 추가하는 예\nPublicIncludePaths.AddRange(new string[] { \"ChatX\" });"
      },
      {
        "title": "cpp에서 시작해 링크까지",
        "text": "모든 헤더를 먼저 읽은 다음 cpp를 처리한다고 생각하기보다, cpp가 include한 헤더와 그 헤더가 다시 포함한 내용을 따라가며 컴파일한다고 정리했다. 기본 흐름은 cpp와 포함된 헤더 → obj → 여러 결과를 링크 → 실행 파일이나 DLL이다. Unreal의 빌드 옵션에 따라 여러 cpp를 묶어 컴파일하기도 하므로 이 흐름은 기본 원리를 이해하기 위한 구분이다.",
        "code": "// Player.cpp\n#include \"Player.h\"\n\n// Player.h에서 필요한 다른 헤더를 포함하는 예\n#include \"Weapon.h\"\n#include \"Stat.h\""
      },
      {
        "title": "전용 cpp가 없는 헤더와 UHT",
        "text": "구조체, enum, 템플릿, inline 함수나 인터페이스처럼 전용 cpp 없이 헤더로만 두는 타입도 있다. 그 헤더는 다른 cpp에 포함되어 컴파일에 참여한다. UHT가 처리하는 이유는 cpp가 없어서가 아니라 UCLASS, USTRUCT, UPROPERTY 같은 Unreal 리플렉션 선언이 있기 때문이다. UHT가 필요한 코드를 생성한 뒤 일반 C++ 컴파일러가 컴파일하는 흐름으로 나눴다.",
        "code": "// 일반 C++ 인터페이스 예시\nclass IDamageable\n{\npublic:\n    virtual ~IDamageable() = default;\n    virtual void TakeDamage(float Damage) = 0;\n};"
      },
      {
        "title": "빨간 줄과 실제 빌드 결과",
        "text": "Game/CXGameModeBase.h에는 빨간 줄이 뜨고 파일명만 적으면 정상으로 보였지만 실제 빌드는 성공했다. IntelliSense가 IncludePath 정보를 반영하지 못했거나 갱신되지 않았을 가능성이 있다. 원인을 확정한 것은 아니고, 코드 분석 표시와 실제 빌드 결과를 구분해서 보기로 했다."
      }
    ],
    "related_ids": [
      "20261002-chatx"
    ],
    "references": [
      {
        "label": "ChatX · 이번 과제 저장소",
        "url": "https://github.com/jwh2077/ChatX"
      }
    ]
  }
];
