window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/velog-20260706-001.js"] = [
  {
    "id": "velog-20260706-001",
    "title": "C 배열과 포인터",
    "summary": "배열 인덱스, 변수의 값과 주소, 포인터로 값 읽기.",
    "kind": "velog",
    "topic": "memory",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.6",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "값과 주소",
        "text": "a는 변수의 값, &a는 그 변수가 있는 주소다. 포인터 p에는 주소를 넣고 *p로 그곳의 값을 읽는다.",
        "code": "int a = 10;\nint* p = &a;\n// p: a의 주소, &p: p 자체의 주소, *p: a의 값"
      },
      {
        "title": "배열의 위치",
        "text": "int a[5]는 int 다섯 개를 담는 배열이다. 첫 값은 a[0], 마지막 값은 a[4]로 읽는다. &a[1]과 a + 1은 같은 원소를 가리킨다."
      }
    ],
    "related_ids": [
      "20260706-001"
    ],
    "topics": [
      "cpp",
      "memory"
    ],
    "publication": "reference"
  }
];
