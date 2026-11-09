window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/cpp-smart-pointers.js"] = [
  {
    "id": "cpp-smart-pointers",
    "title": "C++ 스마트 포인터 — unique_ptr, shared_ptr, weak_ptr",
    "summary": "객체를 한 곳에서 소유할 때, 소유권을 공유할 때, 소유권 없이 참조할 때의 차이. 팀 TextRPG의 Item 관리 사례.",
    "kind": "note",
    "topic": "memory",
    "topics": [
      "cpp",
      "memory"
    ],
    "publication": "reference",
    "status": "소유권과 객체 수명",
    "source_name": "7월 10일 Velog · 팀 TextRPG 상점 작업 기록",
    "source_url": "https://velog.io/@jwh4410/7.10",
    "sections": [
      {
        "title": "unique_ptr — 한 곳에서 소유",
        "text": "한 객체의 해제를 한 곳에서 맡는다. unique_ptr는 복사할 수 없고, std::move로 다른 unique_ptr에 소유권을 넘길 수 있다. 넘겨받은 쪽이 객체를 소유하며 기존 포인터는 비게 된다. 팀 TextRPG에서는 상점의 Item을 std::unique_ptr<Item>으로 관리했다."
      },
      {
        "title": "shared_ptr — 마지막 소유자가 놓을 때 해제",
        "text": "여러 곳에서 같은 객체를 소유해야 할 때 쓴다. shared_ptr를 복사하면 소유자가 늘고, 마지막 소유자가 사라지면 객체가 해제된다. 두 객체가 shared_ptr로 서로를 소유하면 바깥에서 더는 사용하지 않아도 소유자 수가 0이 되지 않을 수 있다."
      },
      {
        "title": "weak_ptr — 수명을 늘리지 않고 참조",
        "text": "shared_ptr가 관리하는 객체를 소유하지 않고 가리킨다. 서로를 참조하는 두 객체 중 한쪽이 다른 쪽의 수명을 책임질 필요가 없다면 그 연결에 weak_ptr를 쓸 수 있다. 사용할 때는 lock()으로 shared_ptr를 얻는다. 이미 객체가 해제됐다면 빈 shared_ptr가 돌아온다."
      }
    ],
    "related_ids": [
      "20260710-001",
      "20260731-001",
      "20260803-001"
    ],
    "references": [
      {
        "label": "스택과 힙 — 메모리 수명·해제·복사",
        "url": "#material=velog-20260710-001"
      },
      {
        "label": "팀 TextRPG 원본 저장소",
        "url": "https://github.com/raimei2000/Ch2_TextRPG_Group5"
      }
    ]
  }
];
