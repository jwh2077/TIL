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
        "code": "int a = 10;\nint* p = &a;\n// p: a의 주소, &p: p 자체의 주소, *p: a의 값",
        "html": "<table><thead><tr><th scope=\"col\">표현</th><th scope=\"col\">의미</th></tr></thead><tbody><tr><td>a</td><td>변수 값</td></tr><tr><td>&amp;a</td><td>변수 주소</td></tr><tr><td>p</td><td>포인터에 저장된 주소</td></tr><tr><td>*p</td><td>그 주소에 있는 값</td></tr></tbody></table>"
      },
      {
        "title": "배열의 위치",
        "text": "int a[5]는 int 다섯 개를 담는 배열이다. 첫 값은 a[0], 마지막 값은 a[4]로 읽는다. &a[1]과 a + 1은 같은 원소를 가리킨다.",
        "html": "<pre><code>인덱스   0    1    2    3    4\n배열    [  ][  ][  ][  ][  ]\n        처음               마지막</code></pre>"
      }
    ],
    "related_ids": [
      "20260706-001"
    ],
    "topics": [
      "cpp",
      "memory"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "C++ 동적 메모리 — 할당·해제·복사",
        "url": "https://jwh2077.github.io/TIL/#material=velog-20260710-001"
      }
    ]
  }
];
