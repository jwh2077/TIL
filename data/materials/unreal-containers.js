window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-containers.js"] = [
  {
    "id": "unreal-containers",
    "title": "Unreal 자료구조 · TArray / TMap / TSet",
    "summary": "TArray, TMap, TSet의 용도와 기본 예제. 아직 실행 전인 초안.",
    "kind": "file",
    "topic": "unreal",
    "status": "게시 준비 초안 · 예제 실행 확인 필요",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Unreal Engine 자료구조",
        "html": "\n<table><tr><th>C++ STL</th><th>Unreal</th><th>기본 용도</th></tr>\n<tr><td><code>vector</code></td><td><code>TArray</code></td><td>동적 배열</td></tr>\n<tr><td><code>map</code></td><td><code>TMap</code></td><td>Key - Value</td></tr>\n<tr><td><code>set</code></td><td><code>TSet</code></td><td>중복 없는 집합</td></tr>\n</table>\n<blockquote>Unreal의 컨테이너는 STL과 내부 구현이 완전히 같은 것은 아니지만, 기본적인 용도를 비교하면 이해하기 쉽다.</blockquote>\n\n"
      },
      {
        "title": "STL과 비교하기",
        "text": "TArray는 같은 타입의 값 목록, TMap은 key와 value, TSet은 중복 없는 값을 담는다. vector, map, set과 용도는 비교할 수 있지만 정렬 순서나 내부 구조까지 같은 것은 아니다."
      },
      {
        "title": "기본 문법 예제 · 실행 전",
        "code": "TArray<int32> Scores;\nScores.Add(10);\nScores.Add(20);\n\nTMap<FName, int32> Stats;\nStats.Add(FName(TEXT(\"Damage\")), 10);\nif (const int32* Damage = Stats.Find(FName(TEXT(\"Damage\"))))\n{\n    // *Damage로 저장된 값 확인\n}\n\nTSet<int32> UniqueIds;\nUniqueIds.Add(1);\nUniqueIds.Add(1); // 같은 값 중복 추가를 비교할 예제"
      },
      {
        "title": "예제 확인 항목",
        "items": [
          "사용 중인 Unreal 버전에서 예제 컴파일하기",
          "TArray의 Num과 인덱스 범위 살펴보기",
          "TMap에서 없는 key를 Find했을 때 반환값 살펴보기",
          "TSet에 같은 값을 두 번 넣어보기"
        ]
      }
    ],
    "related_ids": [
      "20260825-ch3",
      "20260910-priest",
      "20260917-priest",
      "note-tem-011"
    ],
    "topics": [
      "unreal",
      "ds"
    ],
    "publication": "draft",
    "notice": "아래 예제는 Unreal에서 컴파일·실행 확인 전인 초안이다.",
    "references": [
      {
        "label": "TArray 공식 문서",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/array-containers-in-unreal-engine"
      },
      {
        "label": "TMap 공식 문서",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/map-containers-in-unreal-engine"
      },
      {
        "label": "TSet 공식 문서",
        "url": "https://dev.epicgames.com/documentation/unreal-engine/set-containers-in-unreal-engine"
      },
      {
        "label": "vector / list / deque",
        "url": "https://jwh2077.github.io/TIL/#material=stl-sequence"
      },
      {
        "label": "set / map · 중복과 정렬",
        "url": "https://jwh2077.github.io/TIL/#material=stl-associative"
      }
    ]
  }
];
