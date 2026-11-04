window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/velog-20260710-001.js"] = [
  {
    "id": "velog-20260710-001",
    "title": "C++ 스택과 힙 — 메모리 수명·해제·복사",
    "summary": "스택의 지역 변수와 힙에 할당한 객체의 수명, 직접 해제할 때 생기는 문제, 얕은 복사와 깊은 복사.",
    "kind": "note",
    "topic": "memory",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.10",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "스택 메모리 — 범위를 벗어나면 정리되는 지역 변수",
        "text": "보통 함수 안에서 선언한 지역 변수는 스택에 놓이고, 선언한 범위를 벗어나면 수명이 끝난다. for문의 본문 안에서 만든 변수는 매 반복이 끝날 때, 초기화식에서 만든 변수는 반복문을 빠져나갈 때 정리된다. 직접 해제할 필요가 없지만 스택 크기는 제한되어 있고, 지역 변수를 그 범위가 끝난 뒤까지 쓸 수는 없다."
      },
      {
        "title": "힙 메모리 — 필요한 동안 유지하고 직접 해제하기",
        "text": "new로 만든 객체는 그것을 가리키던 지역 포인터가 범위를 벗어나도 남는다. 함수 밖에서도 계속 쓸 수 있지만, 누가 마지막에 해제할지 정해야 한다. 유일한 주소를 잃어버리면 해제할 길이 없어 메모리가 새고, 반대로 먼저 해제하고 남은 포인터를 사용하면 이미 수명이 끝난 객체에 접근하게 된다."
      },
      {
        "title": "new·delete — 할당·해제와 메모리 문제",
        "html": "<table><thead><tr><th scope=\"col\">항목</th><th scope=\"col\">의미</th></tr></thead><tbody><tr><td>new / delete</td><td>동적 할당 / 해제</td></tr><tr><td>댕글링 포인터</td><td>해제된 메모리 주소 등을 계속 가리키는 포인터</td></tr><tr><td>메모리 누수</td><td>더 이상 쓰지 않는 할당 메모리를 해제하지 못하고 남김</td></tr></tbody></table>"
      },
      {
        "title": "얕은 복사와 깊은 복사",
        "html": "<p><strong>얕은 복사</strong> — 주소를 복사한다. 두 포인터가 같은 데이터를 가리킨다.</p><p><strong>깊은 복사</strong> — 데이터를 별도 공간에 복사한다. 두 포인터가 각각 원본과 복사본을 가리킨다.</p>"
      }
    ],
    "related_ids": [
      "20260710-001"
    ],
    "topics": [
      "cpp",
      "memory"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "스마트 포인터 — 소유권과 약한 참조",
        "url": "#material=cpp-smart-pointers"
      },
      {
        "label": "C 배열과 포인터",
        "url": "#material=velog-20260706-001"
      }
    ]
  }
];
