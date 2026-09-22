window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/07/2026-07-16.js"] = [
  {
    "id": "20260716-001",
    "date": "2026-07-16",
    "title": "함수 템플릿과 템플릿 클래스",
    "project": "개인 TextRPG",
    "phase": "직접 구현",
    "tags": [
      "C++",
      "템플릿",
      "함수",
      "클래스",
      "자료형",
      "실습"
    ],
    "study_content": "template <typename T>로 배열 출력 함수와 값 교환 함수를 써봤다. swapValuse는 T&로 받아 원래 두 변수의 값을 바꾼다.",
    "learning_process": "Array 클래스에도 T를 쓰고 객체를 만들 때 타입을 지정하려 했다. auto가 값을 보고 타입을 정하는 것과 템플릿에 타입을 지정하는 것이 헷갈렸고, 객체를 만드는 문법에서도 실수가 있었다.",
    "code_reference": "template <typename T> void printarr(); / template <typename T> void swapValuse(T& a, T& b); / template <typename T> class Array",
    "related_topics": [
      "typename",
      "T&",
      "auto",
      "generic programming"
    ],
    "velog": "https://velog.io/@jwh4410/7.16-gndjynps",
    "repository": "https://github.com/jwh2077/text-rpg",
    "source": [
      "Velog",
      "개인 학습 코드"
    ],
    "primary_topic": "oop",
    "summary": "template <typename T>로 배열 출력 함수와 값 교환 함수를 써봤다.",
    "date_start": "2026-07-16",
    "date_label": "2026-07-16",
    "activity": "personal"
  }
];
