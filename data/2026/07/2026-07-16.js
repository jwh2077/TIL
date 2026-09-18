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
    "study_content": "함수 템플릿과 템플릿 클래스를 학습했다. 하나의 함수나 클래스가 여러 자료형에서 동작하도록 만드는 방법을 접했다.",
    "learning_process": "template <typename T>를 사용해 배열 출력 함수와 값 교환 함수를 작성했다. T&를 이용해 값을 교환하는 함수도 작성했다. 이후 T를 사용하는 Array 템플릿 클래스를 작성해 자료형을 지정하여 객체를 생성하는 방식을 학습했다.",
    "questions": [
      "auto와 템플릿은 어떤 차이가 있는가?",
      "템플릿을 사용할 때 왜 자료형을 지정해야 하는가?"
    ],
    "mistakes_or_difficulties": [
      "템플릿의 자료형 추론과 명시적인 자료형 지정의 관계를 완전히 이해하지 못했다.",
      "템플릿 클래스 객체 생성 문법에서 실수가 있었다."
    ],
    "application": "printarr<T>(), swapValuse(T&, T&)와 Array<T> 형태의 템플릿 예제를 작성했다.",
    "result": "자료형에 따라 같은 코드를 재사용하는 템플릿의 기본 개념을 실습했다.",
    "code_reference": "template <typename T> void printarr(); / template <typename T> void swapValuse(T& a, T& b); / template <typename T> class Array",
    "understanding": "핵심 흐름 이해",
    "related_topics": [
      "typename",
      "T&",
      "auto",
      "generic programming"
    ],
    "later_connection": "이후 STL의 vector와 같은 템플릿 기반 컨테이너를 이해하는 데 연결되었다.",
    "next_learning": "STL과 컨테이너",
    "velog": "https://velog.io/@jwh4410/7.16-gndjynps",
    "repository": "https://github.com/jwh2077/text-rpg",
    "source": [
      "Velog",
      "개인 학습 코드"
    ],
    "primary_topic": "oop",
    "summary": "함수 템플릿과 템플릿 클래스를 학습했다.",
    "date_start": "2026-07-16",
    "date_label": "2026-07-16",
    "activity": "personal"
  }
];
