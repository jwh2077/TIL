# 게임 개발 포트폴리오

C++과 Unreal Engine으로 게임플레이 기능을 만들고 있습니다. 팀 프로젝트에서는 적 AI·무기 파츠와 캐릭터 조작을 맡았고, 개인 실습에서는 서버의 게임 규칙과 클라이언트 메시지 전달을 다뤘습니다.

## 대표 작업

| 프로젝트 | 내 담당 | 살펴볼 내용 |
| --- | --- | --- |
| Project Priest · 4인 팀 | 적 AI · 무기 파츠 | 행동 전환, 공격 판정 조사, 파츠와 UI 연결 |
| Don’t Drop · 5인 팀 · 발표 완료 | 캐릭터 이동 · 입력 | 이동 데이터 적용, 무게 연동, 외형 흔들림 수정 |
| ChatX · 개인 실습 | 숫자 야구 · 채팅 | 서버 규칙, RPC와 플레이어 상태 복제 |
| 제13 던전 | 상점 · 아이템 · Logger | 구매·판매, 책임 분리, 데이터 집계 |

## Project Priest — 적 AI와 무기 파츠

**기간** 2026.09.03–09.29 · **기술** Unreal Engine 5 / C++

Behavior Tree와 Blackboard로 순찰·감지·추적·공격을 연결했습니다. 대상을 놓치면 마지막 위치 주변을 수색하고 순찰로 돌아가는 흐름도 다뤘습니다. 무기 파츠는 슬롯별 장착과 능력치 적용을 맡아, UI 담당 팀원과 화면에 전달할 데이터를 맞췄습니다.

공격 모션은 나오는데 피해가 적용되지 않는 문제가 있었습니다. Overlap 이벤트, 저장한 대상, 공격 Notify의 실행 시점과 충돌 범위를 나눠 살폈습니다. Box 높이를 조정했을 때 판정이 더 안정적으로 들어오는 것을 관찰했습니다. 팀 발표 자료에는 Notify 시점에 범위를 직접 검사한 과정도 담았습니다.

**덧붙임** 두 방식이 마지막 코드에서 어떻게 결합됐는지는 아직 대조하지 못했습니다. 영상은 팀 전체 결과물이며, 제 담당은 적 AI와 무기 파츠입니다.

[기술 사례](../index.html#career=case-priest) · [플레이 영상](https://youtu.be/K-JEzHUtySc) · [팀 저장소](https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project) · [팀 발표 자료](https://docs.google.com/presentation/d/1b_W1kbDZu-cMUC6ZDLqhuG17Zhep3hMxRE7rCtPCxQI/edit)

## Don’t Drop — 캐릭터 조작과 외형 연결

**기간** 2026.10.29–11.23 · 발표 완료 · **기술** Unreal Engine 5.6 / C++ / Blueprint

이동·점프 설정을 DataTable에서 읽어 CharacterMovementComponent에 적용했습니다. 방어구 무게가 바뀌면 이동 속도를 다시 계산하도록 연결하고, 공격·가드 입력을 팀원의 전투 컴포넌트로 전달했습니다.

출발 속도만 높이면 처음에 빠르게 움직이다 급격히 느려지는 문제가 있었습니다. 시작 순간의 속도와 입력을 유지하는 동안의 이동 세기를 구분하며 조정했습니다.

외형 파츠를 Leader Pose로 연결한 뒤 기준 메시를 숨기자 캐릭터가 위아래로 흔들렸습니다. 처음에는 물리 설정을 의심했지만, 기준 메시의 설정을 Always Tick Pose and Refresh Bones로 바꾼 뒤 같은 테스트 맵에서 흔들림이 사라지는 것을 확인했습니다.

**작업 범위** 이동 조정과 외형 테스트까지의 결과입니다. 모든 클라이언트의 이동 일치를 검증한 것은 아니며, 엑셀 연동은 구상만 했습니다.

캐릭터 외형 선택과 파츠 적용 코드는 일부 구현했습니다. 3D 모델 제작도 처음부터 Codex만으로 시도했으나 원하는 품질의 에셋을 확보하지 못해 커스터마이징 기능은 완성하지 못했습니다.

[제작 시도와 최종 결과](../index.html#record=20261123-dont-drop) · [기술 사례](../index.html#career=case-dontdrop) · [외형 연결과 테스트](../index.html#record=20261111-dont-drop) · [팀 저장소](https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project)

## ChatX — 서버 규칙과 채팅 전달

**형태** Unreal C++ 개인 멀티플레이 실습 · 2026.10

숫자 생성과 Strike·Ball 판정은 GameMode에, 플레이어별 이름과 시도 횟수는 PlayerState에 두었습니다. PlayerController가 클라이언트마다 존재하는 범위가 다르다는 점을 살피며, 서버에서 각 PlayerController의 Client RPC를 호출하는 채팅 전달 흐름을 작성했습니다.

외부 접속 환경 전체의 안정성까지 검증한 결과는 아닙니다.

[기술 사례](../index.html#career=case-chatx) · [시연 영상](https://youtu.be/powPv4J4LEI)

## 제13 던전 — 상점과 아이템 관리

**기간** 2026.07.28–08.05 · **기술** C++

구매·판매 기능을 만들고 Shop과 Item의 책임을 나눴습니다. 아이템은 unique_ptr로 관리하고, Logger로 전투·아이템·골드 데이터를 집계했습니다. 팀 작업에서는 브랜치·PR·병합과 충돌 해결을 경험했습니다.

[기술 사례와 결과 화면](../index.html#career=case-textrpg)

## AI 협업과 기록 관리

이 사이트의 화면과 글 정리에는 AI를 활용했습니다. 요구사항과 분류 기준을 정하고 실제 화면을 보며 수정 방향을 전달했습니다. 사이트 구현 코드와 게임에서 직접 작업한 기능은 구분합니다.

[AI 협업 과정](ai-workflow.md) · [기술 이력서](resume-anonymous.md) · [상세 기술 경험](projects.md)
