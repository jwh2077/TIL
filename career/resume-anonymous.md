# 기술 이력서

**지원 분야** C++ · Unreal Engine 게임 클라이언트 개발  
**작성 범위** 공개 가능한 개발 경험과 학습·프로젝트 내용

## 핵심 역량

C++ 기반 객체지향 설계와 Unreal Engine 게임플레이 개발을 학습하고, 팀 프로젝트에서 AI·데이터 연동 및 캐릭터 조작 기능을 맡았습니다. 실제 작업 중 발생한 문제를 실행 위치·데이터 흐름·컴포넌트 상태 관점에서 확인한 기록이 있습니다.

| 분야 | 사용·학습 기술 | 실제 작업 |
| --- | --- | --- |
| C++ | 상속·다형성, STL, `std::unique_ptr` | 개인·팀 TextRPG |
| Unreal Engine 5 | C++, Blueprint, Actor·Component | 팀 액션 게임·개인 실습 |
| 게임 AI | Behavior Tree, Blackboard, AI Perception | Project Priest |
| 캐릭터·입력 | Enhanced Input, CharacterMovementComponent | Don't Drop |
| 데이터·UI 연계 | DataTable, GameInstance | 파츠·이동 데이터 |
| 멀티플레이 | RPC, Replication, GameMode·PlayerState | ChatX·Don't Drop 학습 |

## 프로젝트 경험

### Project Priest · Unreal Engine 5 팀 액션 게임
**2026.09 | 담당: 적 AI, 무기 파츠, UI 연동**

- 순찰·감지·추적·공격 흐름을 Behavior Tree와 Blackboard로 연결했습니다.
- 파츠 장착 정보와 능력치·UI 전달 경로를 다뤘습니다.
- 공격 피해 누락 문제에서 Overlap·Notify 실행 경로와 Collision Box를 점검했습니다.
- 사망 처리에서 C++ Mesh와 Blueprint의 실제 표시 Mesh가 다른 문제를 확인했습니다.

**결과 범위:** 팀 발표와 플레이 영상이 존재합니다. 최종 공격 판정 방식과 세부 구현은 추가 확인이 필요합니다.

### Don't Drop · Unreal Engine 5.6 팀 대전 게임
**2026.10~11 | 담당: 캐릭터 이동·입력**

- DataTable의 이동 값을 CharacterMovementComponent에 적용했습니다.
- 방어구 무게 변경을 이동 속도 계산과 연결했습니다.
- 가속·감속·마찰·출발 속도를 조정하고, 공격·가드 입력을 전투 컴포넌트에 연결했습니다.
- 출발 속도를 높였을 때 대시처럼 움직이는 문제를 테스트하고 원인을 나눠 검토했습니다.

**상태:** 진행 중인 개발 기록입니다. 외부 멀티플레이 검증 성공을 뜻하지 않습니다.

### ChatX · Unreal C++ 멀티플레이 숫자 야구 실습
**2026.10 | 개인 실습**

- GameMode에 숫자 생성, 입력 검증, Strike·Ball 판정과 승패 처리를 작성했습니다.
- PlayerController별 RPC 메시지 전달과 PlayerState 데이터 복제를 다뤘습니다.
- 서버 실행 위치, Ownership, UI 표시 범위를 학습했습니다.

### 팀 TextRPG · C++ 콘솔 팀 프로젝트
**2026.07~08 | 담당: 상점·아이템·Logger**

- 구매·판매 기능과 Shop·Item의 책임 분리를 작업했습니다.
- `std::unique_ptr<Item>`으로 아이템 관리 구조를 다뤘습니다.
- Git 브랜치·PR·병합 및 충돌 해결을 경험했습니다.

## 관련 개인 작업

개인 TextRPG에서는 상속·다형성과 `Player*`를, FirstFPS에서는 Blueprint 기반 발사·HUD·아이템을, 챕터 3 개인 프로젝트에서는 Pawn·아이템·웨이브·레벨 진행을 다뤘습니다.

## 기술 문제 해결

**공격 판정:** 공격 모션과 피해 적용이 불일치한 상황에서 충돌 영역·Notify·대상 참조를 각각 확인했습니다.

**데이터 적용:** 설정값이 DataTable에 존재하는 것과 실제 MovementComponent에 적용되는 것은 다르다는 점을 확인했습니다.

**협업:** 파츠↔UI, 방어구 상태↔캐릭터 이동처럼 다른 담당 기능 사이에서 전달 값과 호출 시점을 맞췄습니다.

---

*공개용 기술 이력서입니다. 성명·학력·연락처·지원 이력 등 개인 식별 정보는 의도적으로 제외했습니다. 실제 지원서에는 검증된 공식 이력만 별도로 작성해야 합니다.*
