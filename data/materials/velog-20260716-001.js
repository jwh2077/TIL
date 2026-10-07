window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/velog-20260716-001.js"] = [
  {
    "id": "velog-20260716-001",
    "title": "함수 템플릿과 템플릿 클래스",
    "summary": "T로 타입을 바꿔 쓰는 함수와 Array 클래스 예제.",
    "kind": "velog",
    "topic": "oop",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.16-gndjynps",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "함수 템플릿 — 두 값 교환",
        "text": "타입 매개변수 T를 사용하는 값 교환 함수다. T&로 받아 원래 변수의 값을 바꾼다.",
        "code": "template <typename T>\nvoid swapValuse(T& a, T& b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}"
      },
      {
        "title": "클래스 템플릿 — 타입을 정해 객체 선언",
        "text": "T data[100]을 가진 Array 템플릿 클래스에 int를 지정하는 예다. 타입 인수에는 괄호가 아니라 꺾쇠를 쓴다.",
        "code": "Array<int> arr;"
      }
    ],
    "related_ids": [
      "20260716-001"
    ],
    "topics": [
      "cpp",
      "oop"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "클래스와 객체지향 기초",
        "url": "https://jwh2077.github.io/TIL/#material=velog-20260709-001"
      }
    ]
  }
];
