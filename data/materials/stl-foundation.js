window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/stl-foundation.js"] = [
  {
    "id": "stl-foundation",
    "title": "자료구조의 기본 · 저장 방식 · STL",
    "summary": "데이터를 저장하는 방식과 STL의 컨테이너, 반복자, 알고리즘.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "자료구조",
        "html": "\n<h3>1. 개념</h3>\n<p>자료구조는 데이터를 <strong>저장, 삽입, 삭제, 접근, 탐색</strong> 등 효율적으로 관리하기 위한 방법이다.</p>\n\n"
      },
      {
        "title": "메모리에서의 저장",
        "html": "\n<h3>1. 연속적인 저장</h3>\n<p>데이터를 서로 붙어 있는 연속된 메모리 공간에 저장한다.</p>\n<pre>[10][20][30][40]</pre>\n<p>예: 배열, <code>vector</code></p>\n<h3>2. 불연속적인 저장</h3>\n<p>데이터가 메모리상에서 서로 붙어 있지 않아도 되며, 노드와 포인터 등을 이용해 연결한다.</p>\n<pre>[10] → [20] → [30]</pre>\n<p>예: <code>list</code>, 연결 기반 Tree</p>\n<blockquote>연속적인 저장과 인덱스 접근 가능 여부는 같은 개념이 아니다. 저장 방식과 접근 방식을 구분해서 생각한다.</blockquote>\n\n"
      },
      {
        "title": "STL이란?",
        "html": "\n<h3>1. 핵심 구성</h3>\n<table><tr><th>구성</th><th>역할</th><th>예시</th></tr>\n<tr><td>Container</td><td>데이터 저장</td><td>vector, list, set, map</td></tr>\n<tr><td>Iterator</td><td>컨테이너의 원소를 가리키고 이동</td><td>begin(), end()</td></tr>\n<tr><td>Algorithm</td><td>정렬/탐색/변경 등의 작업</td><td>sort(), find(), reverse()</td></tr>\n</table>\n<pre><code>vector&lt;int&gt; vec = {3, 1, 2};\nsort(vec.begin(), vec.end());</code></pre>\n\n"
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
    "publication": "reference",
    "references": [
      {
        "label": "관련 Velog · STL과 vector 기초",
        "url": "https://velog.io/@jwh4410/7.17"
      },
      {
        "label": "자료구조 선택 기준",
        "url": "https://jwh2077.github.io/TIL/#material=stl-selection"
      },
      {
        "label": "Big-O · 시간 복잡도",
        "url": "https://jwh2077.github.io/TIL/#material=concept-bigo"
      }
    ]
  }
];
