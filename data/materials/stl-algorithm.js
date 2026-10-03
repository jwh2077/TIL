window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/stl-algorithm.js"] = [
  {
    "id": "stl-algorithm",
    "title": "C++ 문자열·STL 알고리즘",
    "summary": "string 파싱, sort·find·reverse 사용 예시와 컨테이너별 정렬.",
    "kind": "file",
    "topic": "stl",
    "status": "개념 정리 · 기존 문서에서 분리",
    "source_name": "자료구조.html",
    "source_url": "data/guides/stl-reference.html",
    "sections": [
      {
        "title": "String / 파싱",
        "html": "\n<h3>1. 개념</h3>\n<p><code>std::string</code>은 문자열을 저장하는 표준 컨테이너이다. 내부적으로 연속적인 문자 저장을 사용하며 인덱스로 접근할 수 있다.</p>\n<h3>2. 주요 명령어 + Big-O</h3>\n<table><tr><th>명령어</th><th>기능</th><th>대략적인 Big-O</th></tr>\n<tr><td><code>str[index]</code></td><td>문자 접근</td><td>O(1)</td></tr>\n<tr><td><code>find()</code></td><td>문자열/문자 탐색</td><td>O(n) 수준</td></tr>\n<tr><td><code>substr(pos, count)</code></td><td>부분 문자열 생성</td><td>O(count)</td></tr>\n<tr><td><code>reverse()</code></td><td>문자열 뒤집기</td><td>O(n)</td></tr>\n<tr><td><code>size()</code></td><td>문자열 길이</td><td>O(1)</td></tr>\n</table>\n<h3>3. 파싱</h3>\n<p>문자열을 원하는 단위로 나누어 데이터를 추출하는 작업이다.</p>\n<pre><code>string str = \"HP:100\";\n\nauto pos = str.find(':');\nstring key = str.substr(0, pos);\nstring value = str.substr(pos + 1);</code></pre>\n<h3>4. 뒤집기</h3>\n<pre><code>reverse(str.begin(), str.end());</code></pre>\n<blockquote><code>find()</code>는 위치를 반환하며 찾지 못하면 <code>string::npos</code>를 반환한다.</blockquote>\n\n"
      },
      {
        "title": "STL Algorithm",
        "html": "\n<h3>1. sort</h3>\n<pre><code>sort(vec.begin(), vec.end()); // 기본 오름차순\nsort(vec.begin(), vec.end(), greater&lt;&gt;()); // 내림차순</code></pre>\n<p>일반적으로 O(n log n)이다.</p>\n<h3>2. find / reverse</h3>\n<pre><code>find(vec.begin(), vec.end(), value); // O(n)\nreverse(vec.begin(), vec.end());     // O(n)</code></pre>\n<h3>3. 컨테이너별 정렬</h3>\n<pre><code>sort(vec.begin(), vec.end()); // vector 등 Random Access Iterator가 필요한 경우\n\nlst.sort();                   // list는 자체 sort 사용</code></pre>\n<blockquote><code>list</code>는 임의 접근(Random Access)이 불가능하기 때문에 일반적인 <code>std::sort()</code>를 사용할 수 없고, 멤버 함수 <code>list::sort()</code>를 사용한다.</blockquote>\n\n"
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
        "label": "vector / list / deque",
        "url": "https://jwh2077.github.io/TIL/#material=stl-sequence"
      },
      {
        "label": "stack / queue / priority_queue",
        "url": "https://jwh2077.github.io/TIL/#material=stl-adaptor"
      },
      {
        "label": "그래프·트리 — 구조와 탐색",
        "url": "https://jwh2077.github.io/TIL/#material=graph-tree"
      }
    ]
  }
];
