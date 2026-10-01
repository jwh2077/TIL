window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/velog-20260710-001.js"] = [
  {
    "id": "velog-20260710-001",
    "title": "스택·힙과 동적 메모리",
    "summary": "메모리 할당과 해제, 주소 복사와 데이터 복사의 차이.",
    "kind": "velog",
    "topic": "memory",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.10",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "new / delete",
        "text": "new로 만든 메모리는 delete로 해제한다. 해제한 주소를 계속 가리키는 것이 댕글링 포인터이고, 쓰지 않는 메모리를 해제하지 않고 남겨두는 것이 메모리 누수다."
      },
      {
        "title": "주소만 복사하는 것과 데이터를 복사하는 것",
        "text": "얕은 복사는 포인터의 주소를 복사해서 같은 곳을 가리킨다. 깊은 복사는 데이터를 다른 공간에 복사한다. 원본 메모리의 해제와 복사한 쪽의 관계가 헷갈렸던 부분이다."
      },
      {
        "title": "스마트 포인터",
        "text": "unique_ptr, shared_ptr, weak_ptr도 원문에 정리했다. 소유권과 참조 수 설명은 적었지만 당시에는 제대로 이해하지 못했다."
      }
    ],
    "related_ids": [
      "20260710-001"
    ],
    "topics": [
      "cpp",
      "memory"
    ],
    "publication": "reference"
  }
];
