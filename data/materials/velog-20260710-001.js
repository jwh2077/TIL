window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/velog-20260710-001.js"] = [
  {
    "id": "velog-20260710-001",
    "title": "C++ 동적 메모리 — 할당·해제·복사",
    "summary": "new/delete, 댕글링 포인터와 메모리 누수, 얕은 복사와 깊은 복사.",
    "kind": "velog",
    "topic": "memory",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.10",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "할당과 해제",
        "html": "<table><thead><tr><th scope=\"col\">항목</th><th scope=\"col\">의미</th></tr></thead><tbody><tr><td>new / delete</td><td>동적 할당 / 해제</td></tr><tr><td>댕글링 포인터</td><td>해제된 메모리 주소 등을 계속 가리키는 포인터</td></tr><tr><td>메모리 누수</td><td>더 이상 쓰지 않는 할당 메모리를 해제하지 못하고 남김</td></tr></tbody></table>"
      },
      {
        "title": "얕은 복사와 깊은 복사",
        "html": "<pre><code>얕은 복사: 원본 포인터 ─┐\n                      ├→ 같은 데이터\n           복사 포인터 ─┘\n\n깊은 복사: 원본 포인터 ──→ 원본 데이터\n           복사 포인터 ──→ 별도 공간의 데이터</code></pre>",
        "text": "여기서는 포인터가 가리키는 데이터를 복사하는 경우를 비교한다."
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
    "notice": "스마트 포인터와 복사 방식에서 헷갈렸던 부분은 7월 10일 학습 기록에 남겼다. 스마트 포인터 사용법은 이 문서에서 다루지 않는다.",
    "references": [
      {
        "label": "C 배열과 포인터",
        "url": "https://jwh2077.github.io/TIL/#material=velog-20260706-001"
      }
    ]
  }
];
