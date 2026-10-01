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
        "title": "값 교환 함수",
        "text": "T에 타입을 넣어 같은 함수를 쓴다. T&로 받으면 함수 안에서 원래 변수의 값을 바꿀 수 있다. 아래는 원문에 있는 값 교환 부분이다.",
        "code": "template <typename T>\nvoid swapValuse(T& a, T& b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}"
      },
      {
        "title": "Array 객체 만들기",
        "text": "Array 클래스에 T data[100]을 두었다. 원문에는 Array(int)arr로 적었는데 객체 선언은 Array<int> arr처럼 꺾쇠를 쓴다. auto와 템플릿에서 타입을 정하는 방식은 더 헷갈렸던 부분이다."
      }
    ],
    "related_ids": [
      "20260716-001"
    ],
    "topics": [
      "cpp",
      "oop"
    ],
    "publication": "reference"
  }
];
