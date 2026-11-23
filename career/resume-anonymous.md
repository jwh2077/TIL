# 기술 이력서

C++ · Unreal Engine 게임플레이 개발

적 AI·무기 파츠, 캐릭터 조작, 서버 게임 규칙을 프로젝트에서 다뤘습니다. 함수와 데이터를 연결하고, 예상과 다른 동작을 테스트하며 수정한 경험을 중심으로 정리했습니다.

## 기술과 사용 경험

| 분야 | 실제 사용 |
| --- | --- |
| C++ | 상속·다형성, STL, unique_ptr, 클래스 책임 분리 |
| Unreal Engine | C++·Blueprint 연동, Actor·Component, Enhanced Input |
| 적 AI | Behavior Tree·Blackboard, 감지·추적·공격 전환 |
| 캐릭터 | CharacterMovement, DataTable 이동값, Leader Pose 외형 연결 |
| 멀티플레이 | GameMode·PlayerState 역할, Server·Client RPC, Replication |
| 협업 | Git 브랜치·PR·병합, 파츠·UI 및 이동·전투 연결 |

## 프로젝트

### Project Priest · 팀 액션 게임

2026.09.03–09.29 · 4인 · Unreal Engine 5 / C++

- 적 AI의 순찰·감지·추적·공격 흐름을 연결했습니다.
- 무기 파츠 장착과 능력치 반영을 맡고 UI 담당자와 데이터를 연결했습니다.
- 공격 판정 누락을 Overlap·대상·Notify·충돌 범위로 나눠 조사했습니다.

[담당 기능과 결과물](../index.html#career=case-priest)

### Don’t Drop · 팀 멀티플레이 게임

2026.10.29–11.23 · 발표 완료 · 5인 · Unreal Engine 5.6 / C++

- 이동·점프 설정을 DataTable에서 읽고 방어구 무게 변화와 속도 갱신을 연결했습니다.
- 공격·가드 입력을 팀원의 전투 컴포넌트에 전달했습니다.
- 숨긴 기준 메시의 본 자세 갱신 설정을 바꿔 외형 파츠가 흔들리던 현상을 테스트 맵에서 해결했습니다.

[작업 과정과 테스트](../index.html#career=case-dontdrop)

### ChatX · 개인 멀티플레이 실습

2026.10 · Unreal Engine / C++

- GameMode의 숫자 야구 판정, PlayerState의 공유 값, PlayerController의 채팅 RPC를 작성했습니다.

[시연과 기술 사례](../index.html#career=case-chatx)

### 제13 던전 · C++

2026.07.28–08.05

- 상점 구매·판매와 아이템 관리, Logger를 통한 데이터 집계를 다뤘습니다.
- Shop·Item을 분리하고 unique_ptr를 이용해 아이템을 관리했습니다.

[담당 작업](../index.html#career=case-textrpg)

## AI 협업

개발 기록 사이트의 요구사항·탐색 방식을 정하고, AI가 수정한 화면과 내용을 검토하며 개선했습니다. 게임에서 직접 작업한 코드와 AI가 작성한 사이트 코드는 구분합니다.

[AI 협업 사례](ai-workflow.md)

이 문서는 기술 경험을 소개하는 공개용 이력서입니다. 학력·경력·개인정보와 지원 자격은 제출용 문서에 별도로 기입합니다.
