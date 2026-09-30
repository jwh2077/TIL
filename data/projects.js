// Project pages connect existing records. They do not replace their original dates or text.
window.TIL_PROJECTS = [{
  id:'priest', record_project:'ProjectPriest', title:'Project Priest', featured:true,
  subtitle:'적 AI와 무기 파츠를 만들면서',
  summary:'마을을 위협하는 몬스터를 물리치고 배후의 악마와 대면하는 Unreal Engine 5 기반 3D 액션 게임.',
  period:'2026.09.03–09.29', period_note:'팀 발표 자료의 기획부터 발표까지 일정. 개별 작업일은 각 TIL에 따로 표시했습니다.',
  team:'Two Gether · 4명', technology:'Unreal Engine 5 · C++',
  roles:['근접·원거리 적 AI와 순찰·감지·추적·공격 흐름','무기 파츠 장착, 능력치 적용과 데이터 관리','UI 담당자와 파츠 데이터 연결','공격 판정과 적 사망 시 Mesh·효과·소리 처리'],
  tags:['적 AI','공격 판정','무기 파츠'],
  links:[{label:'프로젝트 저장소',url:'https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project'},{label:'팀 발표 자료',url:'https://docs.google.com/presentation/d/1b_W1kbDZu-cMUC6ZDLqhuG17Zhep3hMxRE7rCtPCxQI/edit'}],
  result:'일반 전투와 인벤토리, 구역 이동, 보스전이 플레이 영상에 담겨 있다. 발표는 9월 29일에 마쳤다.',
  result_note:'플레이 영상 원본: Project (1).mp4 · 로컬 보관. 공개 영상 링크는 아직 없습니다. 팀 발표 자료는 팀의 결과이며 개인이 전부 제작한 자료가 아닙니다.',
  work:[
    {title:'순찰에서 추적, 공격으로 넘어가기',text:'Behavior Tree와 Blackboard로 적의 행동을 나눴다. 플레이어를 놓치면 마지막으로 알고 있던 위치 주변을 최대 세 번 수색하고, 찾지 못하면 순찰로 돌아가도록 했다.',ids:['20260907-priest','20260908-priest','20260909-priest','20260925-priest-ai']},
    {title:'공격 모션은 나오는데 피해가 들어가지 않았다',text:'손에 붙인 Sphere로 시작해 Box로 바꾸고, Overlap에서 플레이어를 저장하는 방식도 시도했다. 프레임이 낮아지면 판정이 빠지는 문제가 있었다.',note:'발표 자료 12–15쪽에는 ApplyAttack Notify 시점에 공격 범위를 직접 검사하는 방식으로 해결했다고 설명되어 있습니다. 최종 코드와 범위 설정까지 확인한 것은 아닙니다.',ids:['20260910-priest','20260921-priest']},
    {title:'파츠 데이터를 무기 능력치와 화면에 연결하기',text:'DataTable과 GameInstance에서 파츠 정보를 다뤘다. UI 담당자와 필요한 데이터와 연결 지점을 맞추면서 파츠 시스템을 연결했다.',note:'추가 원자료에는 PartSubsystem으로 옮기는 구조가 있습니다. 변경일과 최종 반영 범위가 미확인이라 기존 TIL의 당시 구조는 유지했습니다.',ids:['20260917-priest','20260921-priest']},
    {title:'숨기려던 Mesh와 실제 보이는 Mesh가 달랐다',text:'GetMesh()로 숨기려던 컴포넌트와 BP의 Real Mesh가 달랐다. OnDeath()를 통해 BP에서 실제 Mesh를 숨기도록 바꿨다. Particle을 바로 제거하면 효과가 끊겨서 정리 시점도 따로 다뤘다.',note:'이 과정의 정확한 작업일과 Particle 최종 설정은 미확인입니다. 관련 사망 처리 기록과 함께 프로젝트 과정으로 묶었습니다.',ids:['20260914-priest','20260915-priest']}
  ],
  reflection:{title:'Project Priest 돌아보기',summary:'AI의 행동을 연결하면서 막힌 부분과 팀원의 UI에 파츠 데이터를 연결했던 과정.',sections:[
    {title:'각 행동보다 행동 사이의 연결이 어려웠다',text:'처음에는 순찰, 추적, 공격이 각각 동작하는 게 중요했다. 실제로 플레이해보니 순찰 중 플레이어를 발견하고, 공격 거리에 들어가면 멈추는 흐름이 자연스럽게 이어져야 했다. Behavior Tree와 Blackboard, Decorator, Task가 서로 영향을 줘서 실행 흐름을 따라가며 봐야 했다.'},
    {title:'프레임이 달라지면 공격 판정도 달라졌다',text:'공격 모션은 나오는데 피해가 들어가지 않는 경우가 있었다. 프레임이 바뀌었을 때도 같은 결과가 나오게 만드는 게 어려웠다. 문서에서 본 내용과 실제 엔진 동작이 달라 로직을 다시 구성하기도 했다. 예상하지 못한 조건에서 문제가 남아 있어, 한 번 동작하는 것만으로 끝내기는 어려웠다.'},
    {title:'내 파츠 데이터와 팀원의 화면 연결하기',text:'UI와 파츠 시스템을 연결할 때 담당 팀원과 필요한 데이터와 연결 지점을 공유했다. 각자 만든 뒤 마지막에 합치는 것보다, 어떤 값을 주고받을지 작업하면서 맞추는 과정이 필요했다.'},
    {title:'공부와 구현을 같이 진행했던 부분',text:'Behavior Tree, Blackboard, MVC처럼 익숙하지 않은 개념을 공부하면서 구현해야 했다. 공부에 예상보다 시간이 많이 들었다. 다시 AI를 만든다면 감지부터 Blackboard, Behavior Tree, 이동, 애니메이션과 공격 판정까지 연결되는 흐름을 먼저 정리하고 싶다.'}
  ],sources:['ProjectPriest_프로젝트_돌아보기.md · 로컬 원자료','ProjectPriest_개발_원자료.md · 로컬 원자료','팀 발표 PDF 34쪽 · 정우혁 돌아보기'],notice:'프로젝트 종료 후 제공한 돌아보기 자료와 팀 발표를 바탕으로 정리했습니다. 개별 작업일이나 모든 문제의 최종 해결을 확정하는 기록은 아닙니다.'}
}];
