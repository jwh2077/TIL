window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/velog-20260810-001.js"] = [
  {
    "id": "velog-20260810-001",
    "title": "Unreal C++ AItem 헤더 구조",
    "summary": "Item.h에 선언한 변수와 함수, SceneRoot와 메시 연결.",
    "kind": "velog",
    "topic": "unreal",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/Unreal-C",
    "status": "원문 확인 · 핵심 재구성",
    "sections": [
      {
        "title": "Item.h",
        "text": "AItem은 AActor를 상속받는다. 헤더에는 클래스가 가진 변수와 함수를 선언하고 cpp에 동작을 작성한다. Item.generated.h는 include 목록 마지막에 둔다."
      },
      {
        "title": "컴포넌트 연결",
        "text": "SceneRoot를 루트로 두고 StaticMeshComp를 그 아래에 붙인다. 기준점과 화면에 보이는 메시를 나눈 구조다.",
        "code": "SceneRoot = CreateDefaultSubobject<USceneComponent>(TEXT(\"SceneRoot\"));\nSetRootComponent(SceneRoot);\nStaticMeshComp = CreateDefaultSubobject<UStaticMeshComponent>(TEXT(\"StaticMesh\"));\nStaticMeshComp->SetupAttachment(SceneRoot);"
      },
      {
        "title": "Actor 함수",
        "text": "PostInitializeComponents, BeginPlay, Destroyed, EndPlay를 헤더에 선언했다. 각 시점에 할 일은 cpp에서 작성한다."
      }
    ],
    "related_ids": [
      "20260810-001"
    ],
    "topics": [
      "unreal"
    ],
    "publication": "reference"
  }
];
