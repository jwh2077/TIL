window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/concept-bigo.js"] = [
  {
    "id": "concept-bigo",
    "title": "Big-O · 시간 복잡도",
    "summary": "데이터가 많아질 때 처리할 일이 얼마나 늘어나는지.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "Big-O 표기법",
        "html": "\n<h3>1. 개념</h3>\n<p>입력 크기 <code>n</code>이 커질 때 알고리즘의 실행 시간이나 필요한 공간이 어떻게 증가하는지를 나타내는 표기법이다.</p>\n<table><tr><th>표기</th><th>의미</th><th>예시</th></tr>\n<tr><td>O(1)</td><td>입력 크기와 관계없이 일정</td><td>vector 인덱스 접근, stack top</td></tr>\n<tr><td>O(log n)</td><td>범위를 줄여가며 처리</td><td>set/map 탐색</td></tr>\n<tr><td>O(n)</td><td>데이터 수에 비례</td><td>순차 탐색</td></tr>\n<tr><td>O(n log n)</td><td>효율적인 정렬에서 자주 등장</td><td>sort()</td></tr>\n<tr><td>O(n²)</td><td>데이터 수의 제곱에 비례</td><td>중첩 반복문</td></tr>\n</table>\n<blockquote>Big-O는 실제 시간이 몇 초인지가 아니라, 입력 크기가 증가할 때 성능이 증가하는 정도를 표현한다.</blockquote>\n\n"
      }
    ],
    "related_ids": [
      "20260717-001",
      "20260727-001",
      "20260728-001"
    ],
    "topics": [
      "ds"
    ],
    "publication": "reference",
    "references": [
      {
        "label": "자료구조 선택 기준",
        "url": "https://jwh2077.github.io/TIL/#material=stl-selection"
      }
    ]
  }
];
