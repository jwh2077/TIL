window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/file-continue.js"] = [
  {
    "id": "file-continue",
    "title": "C++ continue — 반복문 실행 흐름",
    "summary": "continue가 건너뛰는 범위와 짝수·홀수 분기 예시.",
    "kind": "note",
    "topic": "cpp",
    "source_name": "26.08.24.txt",
    "status": "원본 예제 보존 · 질문 별도 표시",
    "sections": [
      {
        "title": "continue의 동작",
        "text": "현재 반복의 남은 문장을 건너뛰고 다음 반복으로 진행한다. 아래 for문에서는 증감식 i++ 이후 조건을 다시 검사한다.",
        "html": "<ol class=\"reference-flow\"><li>강아지 출력</li><li>짝수: 숫자 출력 → continue</li><li>다음 반복으로 이동</li></ol>"
      },
      {
        "title": "분기별 출력",
        "html": "<table><thead><tr><th scope=\"col\">조건</th><th scope=\"col\">이번 반복에서 출력</th><th scope=\"col\">고양이 출력</th></tr></thead><tbody><tr><td>i가 짝수</td><td>강아지, i 값</td><td>건너뜀</td></tr><tr><td>i가 홀수</td><td>강아지, 고양이</td><td>실행</td></tr></tbody></table>",
        "code": "int main()\r\n{\r\n\tfor (int i = 0; i < 10; i++)\r\n\t{\r\n\t\tstd::cout << \"강아지\\n\";\r\n\t\tif (i % 2 == 0)\r\n\t\t{\r\n\t\t\tstd::cout << i <<std::endl;\r\n\t\t\tcontinue;\r\n\t\t}\r\n\t\tstd::cout << \"고양이\\n\";\r\n\t}\r\n}"
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
    "publication": "reference",
    "notice": "원본 파일의 주석 표기 메모는 사용 도구와 처리 결과가 확인되지 않아 로컬 검토 메모에 별도로 보관했다."
  }
];
