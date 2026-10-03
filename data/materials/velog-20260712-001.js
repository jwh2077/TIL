window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/velog-20260712-001.js"] = [
  {
    "id": "velog-20260712-001",
    "title": "함수 오버로딩과 타입 변환",
    "summary": "함수 오버로딩 조건과 승격·표준 변환 예시.",
    "kind": "velog",
    "topic": "oop",
    "source_name": "Velog 원문",
    "source_url": "https://velog.io/@jwh4410/7.13",
    "status": "개념 중심 발췌 · 원문 링크",
    "sections": [
      {
        "title": "오버로딩 가능 여부",
        "html": "<table><thead><tr><th scope=\"col\">차이</th><th scope=\"col\">구분 가능 여부</th></tr></thead><tbody><tr><td>매개변수 타입</td><td>가능</td></tr><tr><td>매개변수 개수</td><td>가능</td></tr><tr><td>반환 타입만 다름</td><td>불가능</td></tr></tbody></table>"
      },
      {
        "title": "기본 타입 변환 예시",
        "html": "<table><thead><tr><th scope=\"col\">예</th><th scope=\"col\">분류</th></tr></thead><tbody><tr><td>char / short → int</td><td>원래 값을 int로 표현할 수 있는 경우 정수 승격</td></tr><tr><td>float → double</td><td>부동소수점 승격</td></tr><tr><td>int → double</td><td>일반적인 표준 변환</td></tr></tbody></table>",
        "text": "승격도 표준 변환에 속한다. 위 표는 승격과 그 밖의 변환을 구분하는 예시이며 전체 오버로드 결정 규칙을 나열한 것은 아니다."
      }
    ],
    "related_ids": [
      "20260712-001"
    ],
    "topics": [
      "cpp",
      "oop"
    ],
    "publication": "reference"
  }
];
