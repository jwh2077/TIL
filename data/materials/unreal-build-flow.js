window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-build-flow.js"] = [
  {
    "id": "unreal-build-flow",
    "title": "C++·Unreal 빌드 과정",
    "summary": "cpp와 헤더가 컴파일·링크되는 순서, UBT·UHT의 역할, IntelliSense와 실제 빌드 결과의 차이. Development·DebugGame·Shipping과 Editor 대상 구분.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "빌드 과정 참고 · 2026-10-02",
    "source_name": "10.02.md · 로컬 보관 / 10-19.txt",
    "source_url": "",
    "notice": "기본 빌드 흐름을 정리한 자료다. IntelliSense 표시와 빌드 결과가 달랐던 사례는 관련 학습 기록에 남겼다.",
    "sections": [
      {
        "title": "Unreal 빌드 순서",
        "html": "<ol class=\"reference-flow\"><li>UBT: 빌드 설정 구성</li><li>UHT: 리플렉션 코드 생성</li><li>C++ 컴파일러: 코드 컴파일</li><li>링커: 결과 연결</li></ol><table><thead><tr><th scope=\"col\">도구</th><th scope=\"col\">역할</th></tr></thead><tbody><tr><td>UBT</td><td>Build.cs 등의 설정으로 모듈 빌드 구성</td></tr><tr><td>UHT</td><td>리플렉션 대상 헤더 분석, 필요한 코드 생성</td></tr><tr><td>C++ 컴파일러</td><td>cpp·포함된 헤더·생성된 코드 컴파일</td></tr><tr><td>링커</td><td>컴파일 결과를 실행 파일이나 DLL로 연결</td></tr></tbody></table>"
      },
      {
        "title": "C++ 빌드 순서 — include → 컴파일 → 링크",
        "text": "cpp가 포함한 헤더와 그 헤더가 포함한 내용을 모아 컴파일한다. 모든 헤더를 먼저 따로 컴파일하는 흐름은 아니다. Unreal의 빌드 옵션에 따라 여러 cpp를 묶기도 하므로 항상 cpp 하나당 obj 하나라는 뜻은 아니다.",
        "code": "// Player.cpp\n#include \"Player.h\"\n\n// Player.h에서 필요한 다른 헤더를 포함하는 예\n#include \"Weapon.h\"\n#include \"Stat.h\"",
        "html": "<ol class=\"reference-flow\"><li>cpp에서 #include</li><li>필요한 헤더 포함</li><li>컴파일 → obj</li><li>여러 결과 링크</li><li>실행 파일 / DLL</li></ol>"
      },
      {
        "title": "UHT의 역할 — 리플렉션 코드 생성",
        "text": "UHT의 처리 기준은 전용 cpp의 유무가 아니라 Unreal 리플렉션 선언이다. 일반 C++ 컴파일러를 대신하지 않는다.",
        "code": "// 일반 C++ 인터페이스 예시\nclass IDamageable\n{\npublic:\n    virtual ~IDamageable() = default;\n    virtual void TakeDamage(float Damage) = 0;\n};",
        "html": "<table><thead><tr><th scope=\"col\">선언 예</th><th scope=\"col\">UHT와의 관계</th></tr></thead><tbody><tr><td>일반 struct, enum, 템플릿, inline 함수</td><td>전용 cpp 없이 헤더로 존재할 수 있음. 다른 cpp에 포함되어 컴파일</td></tr><tr><td>UCLASS / USTRUCT / UPROPERTY 등</td><td>Unreal 리플렉션에 필요한 코드 생성 대상</td></tr></tbody></table>"
      },
      {
        "title": "IntelliSense와 실제 빌드 오류",
        "html": "<table><thead><tr><th scope=\"col\">구분</th><th scope=\"col\">무엇을 보는가</th></tr></thead><tbody><tr><td>IntelliSense 빨간 줄</td><td>Visual Studio의 코드 분석 결과</td></tr><tr><td>실제 빌드 결과</td><td>UBT가 구성한 환경으로 컴파일한 결과</td></tr></tbody></table>",
        "text": "검색 경로 정보가 서로 다르면 빨간 줄이 있어도 빌드는 성공할 수 있다. 빨간 줄만으로 컴파일 실패를 판단하지 않고 실제 빌드 결과를 함께 확인한다."
      },
      {
        "title": "빌드 구성 — Development·DebugGame·Shipping",
        "items": [
          "Development: 개발 중 성능과 반복 작업에 맞춘 구성이다. 시간이 많이 드는 일부 최적화를 제외한 최적화를 사용한다.",
          "DebugGame: 게임 코드를 최적화하지 않아 게임 모듈을 디버깅하기 편한 구성이다.",
          "Shipping: 배포와 성능을 위한 구성이다. 콘솔 명령, 통계, 프로파일링 도구 등을 제한한다."
        ],
        "text": "구성 이름만으로 디버깅 가능 여부를 단정하지 않는다. Development와 Shipping도 디버그 심볼이 있으면 디버깅할 수 있지만, 최적화 때문에 코드 흐름을 따라가기 어려울 수 있다."
      },
      {
        "title": "Editor — 빌드 구성과 실행 대상 구분",
        "text": "Development와 DebugGame은 빌드 구성이고, Editor는 빌드 대상이다. Development Editor는 Development 구성으로 에디터에서 사용할 코드를 빌드한다. DebugGame Editor는 게임 코드를 디버깅하기 위한 구성과 Editor 대상을 조합한 이름이다."
      }
    ],
    "related_ids": [
      "20261002-chatx",
      "20261019-study"
    ],
    "references": [
      {
        "label": "ChatX · 이번 과제 저장소",
        "url": "https://github.com/jwh2077/ChatX"
      },
      {
        "label": "Unreal Build.cs 설정",
        "url": "https://jwh2077.github.io/TIL/#material=unreal-build-settings"
      },
      {
        "label": "Unreal C++ AItem 헤더 구조",
        "url": "https://jwh2077.github.io/TIL/#material=velog-20260810-001"
      },
      {
        "label": "Unreal 공식 문서 · 빌드 구성",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/build-configurations-reference-for-unreal-engine?application_version=5.6"
      }
    ],
    "quick_links": [
      {
        "label": "빌드 순서",
        "section": "Unreal 빌드 순서"
      },
      {
        "label": "UHT 역할",
        "section": "UHT의 역할 — 리플렉션 코드 생성"
      }
    ]
  }
];
