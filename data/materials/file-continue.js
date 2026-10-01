window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/file-continue.js"] = [
  {
    "id": "file-continue",
    "title": "C++ 실습 노트 · continue와 주석",
    "summary": "continue를 만나면 어떤 출력문을 건너뛰는지 써본 코드.",
    "kind": "note",
    "topic": "cpp",
    "source_name": "26.08.24.txt",
    "status": "원본 예제 보존 · 질문 별도 표시",
    "sections": [
      {
        "title": "continue 써보기",
        "text": "짝수일 때 continue를 만나면 뒤의 출력문을 건너뛰는지 보려고 코드를 썼다."
      },
      {
        "title": "직접 작성한 예제",
        "code": "int main()\r\n{\r\n\tfor (int i = 0; i < 10; i++)\r\n\t{\r\n\t\tstd::cout << \"강아지\\n\";\r\n\t\tif (i % 2 == 0)\r\n\t\t{\r\n\t\t\tstd::cout << i <<std::endl;\r\n\t\t\tcontinue;\r\n\t\t}\r\n\t\tstd::cout << \"고양이\\n\";\r\n\t}\r\n}"
      },
      {
        "title": "주석 메모",
        "text": "//, /* */, /// 형태와 @param, XML 형태의 주석을 같이 적었다. 도구에서 어떻게 표시되는지는 아직 확인하지 않았다."
      }
    ],
    "related_ids": [
      "20260618-001",
      "20260619-001",
      "20260622-001"
    ],
    "topics": [
      "cpp"
    ],
    "publication": "reference"
  }
];
