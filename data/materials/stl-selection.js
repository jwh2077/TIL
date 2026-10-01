window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/stl-selection.js"] = [
  {
    "id": "stl-selection",
    "title": "자료구조 선택 기준",
    "summary": "인덱스로 읽을지, 중간에서 지울지에 따라 골라보기.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "자료구조 선택 기준",
        "html": "\n<table><tr><th>필요한 상황</th><th>추천 자료구조</th><th>이유</th></tr>\n<tr><td>인덱스 접근</td><td>vector</td><td>임의 접근 O(1)</td></tr>\n<tr><td>끝에서 추가/삭제</td><td>vector</td><td>평균 O(1)</td></tr>\n<tr><td>양쪽 끝에서 추가/삭제</td><td>deque</td><td>양쪽 O(1)</td></tr>\n<tr><td>중간 삽입/삭제 + 위치 iterator 보유</td><td>list</td><td>연결 변경으로 처리</td></tr>\n<tr><td>중복 없는 정렬 데이터</td><td>set</td><td>정렬 + 중복 X</td></tr>\n<tr><td>중복 없는 빠른 검색</td><td>unordered_set</td><td>Hash Table 평균 O(1)</td></tr>\n<tr><td>Key-Value + 정렬</td><td>map</td><td>Key 기준 정렬</td></tr>\n<tr><td>Key-Value + 빠른 검색</td><td>unordered_map</td><td>Hash Table 평균 O(1)</td></tr>\n<tr><td>Key 중복 + 정렬</td><td>multimap</td><td>같은 Key 여러 개 가능</td></tr>\n<tr><td>후입선출</td><td>stack</td><td>LIFO</td></tr>\n<tr><td>선입선출</td><td>queue</td><td>FIFO</td></tr>\n<tr><td>최소/최대 우선 처리</td><td>priority_queue</td><td>Heap</td></tr>\n</table>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "topics": [
      "cpp",
      "ds",
      "stl"
    ],
    "publication": "reference"
  }
];
