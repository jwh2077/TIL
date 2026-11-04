window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/file-continue.js"] = [
  {
    "id": "file-continue",
    "title": "C++ 반복문 — for, while, break, continue",
    "summary": "for와 while의 반복 순서, break와 continue를 만난 뒤 어디서 실행을 이어가는지 비교한다.",
    "kind": "note",
    "topic": "cpp",
    "source_name": "26.08.24.txt",
    "status": "원본 예제 보존 · 질문 별도 표시",
    "sections": [
      {
        "title": "for와 while — 조건을 확인하는 위치",
        "text": "둘 다 본문을 실행하기 전에 조건을 확인한다. for는 시작값·조건·증감식을 한 줄에 모으고, while은 조건만 괄호 안에 쓴다. 아래 두 반복문은 각각 0, 1, 2를 출력한다.",
        "code": "for (int i = 0; i < 3; ++i) {\n    std::cout << i << ' ';\n}\n\nint i = 0;\nwhile (i < 3) {\n    std::cout << i << ' ';\n    ++i;\n}"
      },
      {
        "title": "break와 continue — 끝내기와 건너뛰기",
        "html": "<p><strong>break</strong> — 현재 반복문을 끝내고 반복문 바로 다음 문장으로 간다. 중첩 반복문 안이라면 가장 안쪽 반복문만 끝난다.</p><p><strong>continue</strong> — 이번 반복에서 남은 문장만 건너뛴다. <code>for</code>에서는 증감식으로 가고, <code>while</code>에서는 조건을 다시 검사한다. 그래서 <code>while</code> 본문의 증가문 앞에서 계속 건너뛰면 같은 값으로 반복할 수 있다.</p>",
        "text": "예를 들어 0부터 4까지 출력하는 for문에서 출력 직전에 i == 2를 검사하면, break일 때는 0 1, continue일 때는 0 1 3 4가 출력된다."
      },
      {
        "title": "원본 예제 — 짝수에서 continue를 만나면",
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
