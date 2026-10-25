# 개발·학습 기록

C++ / Unreal 프로젝트와 학습 기록을 모은 정적 사이트다. [사이트 열기](https://jwh2077.github.io/TIL/) · [작업 규칙](AGENTS.md)

별도 빌드 없이 `index.html`을 브라우저에서 열 수 있다. 저장소 이름과 GitHub Pages의 `/TIL/` 주소는 유지한다.

<!-- TIL_STATS_START -->
현재 등록된 기록: **학습 기록 66개 · 알고리즘 풀이 기록 90개 · 자료실 노트 19개**
알고리즘 수에는 미완성 풀이도 포함합니다. 학습 일수나 통과 횟수가 아닙니다.
<!-- TIL_STATS_END -->

## 화면에서 찾기

| 화면 | 내용 | 주소 |
| --- | --- | --- |
| 홈 | 대표 프로젝트, 전체 검색, 기록 입구 | `#home` |
| 프로젝트 | 소개·담당 역할·작업과 연결된 기록 | `#projects` |
| 학습 기록 | 날짜·프로젝트·태그로 찾는 공부와 작업 과정 | `#list` |
| 알고리즘 | 문제별 풀이·코드·날짜·채점 상태 | `#algorithms` |
| 자료실 | 옆 분야 목록, 문서 고정, 제목·본문·코드 검색과 절 바로 이동 | `#library` |

상세 주소는 `#record=기록ID`, `#material=자료ID`, `#algorithm=문제ID`다. Project Priest는 `#project=priest`, 돌아보기는 `#reflection=priest`에서 연다.

검색·날짜·태그·정렬과 추가 조건으로 범위를 좁힐 수 있다. 기간 기록은 선택한 날짜와 겹치면 표시하며 정확한 학습일과 구분한다. PC 본문 목차는 옆에 두고 모바일에서는 접어 볼 수 있다.

학습 기록의 활동 표시는 정확한 날짜가 있는 학습·알고리즘 기록을 함께 보여준다. 알고리즘은 풀이 상태와 사이트·개념 태그로 찾거나 다시 풀 문제를 모아 볼 수 있다. 자료실의 고정 목록은 방문자의 브라우저에만 저장한다.

## 공개 파일 위치

| 위치 | 내용 |
| --- | --- |
| `index.html` | 공통 화면·기본 스타일 |
| `assets/app.js`, `assets/filters.js` | 학습 기록과 검색·날짜·태그 조건 |
| `assets/library.js`, `assets/algorithms.js` | 자료실·알고리즘 화면 |
| `assets/activity.js`, `assets/links.js`, `assets/cpp-highlight.js` | 학습 활동, 내부 문서·외부 출처 링크, C++ 코드 문법 강조 |
| `assets/learning-demos.js`, `assets/learning-demo-data.js` | 자료실의 접이식 동작 예제·코드 강조·단계별 상태 (vector·이진 탐색은 각각의 demo 파일) |
| `assets/site.js`, `assets/site.css` | 홈·프로젝트·돌아보기·공통 메뉴·목차 |
| `data/projects.js` | 프로젝트 소개·역할·작업·돌아보기 |
| `data/manifest.js` | 학습 기록 목록 |
| `data/연도/월/날짜.js` | 날짜별 본문 |
| `data/undated/`, `data/project-period/` | 날짜 미상·기간별 기록 |
| `data/materials/`, `data/library-index.js` | 자료실 본문·생성된 목록 |
| `data/library-navigation.js` | 자료실 주제별 색인 |
| `data/algorithms/`, `data/algorithms.js` | 문제별 본문·생성된 목록 |
| `data/guides/stl-reference.html` | 자료구조 원문 공개용 사본 |

## 개인 PC에서 작업하기

공개 저장소만 받으면 사이트를 볼 수 있다. 관리 도구와 원본은 별도 비공개 저장소를 `local/`에 배치한 개인 환경에서 사용한다. 아래 문서는 공개 저장소에 포함되지 않는다.

| 할 일 | 위치 |
| --- | --- |
| 자주 쓰는 곳 열기 | `00 시작하기/`의 바로가기 |
| 로컬 환경 배치·폴더 확인 | `local/README.md` |
| 새 자료 넣기 | `local/inbox/README.md` |
| 파일 직접 편집·목록 갱신 | `local/rules/TIL_GUIDE.md` |
| 목록·README 통계 함께 갱신 | `node local/tools/sync-data.cjs --write` (검사만: `--check`) |
| 관리 화면에서 글 편집 | `local/manage/start.cmd`, 사용법은 `local/manage/README.md` |
| 변경에 맞는 검사 선택 | `local/tools/README.md` |

검증 범위와 커밋·푸시 권한은 [공통 규칙](AGENTS.md#6-검증과-git)을 따른다. 프로젝트 소개·돌아보기는 현재 파일에서 편집하며 관리 화면의 글 편집 대상에는 포함되지 않는다.

위 통계는 등록된 목록에서 생성한다. 관리 화면에서는 글 추가 시 통계 변경도 초안 비교·적용에 포함한다. 직접 파일을 편집했다면 학습 기록 목록을 맞춘 뒤 통합 갱신 명령을 실행한다. README의 설명 문장은 자동으로 고치지 않는다.
