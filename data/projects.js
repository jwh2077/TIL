// Project pages connect existing records. They do not replace their original dates or text.
window.TIL_PROJECTS = [{
  id:'priest', record_project:'ProjectPriest', title:'Project Priest', activity:'team',
  subtitle:'적 AI와 무기 파츠를 만들면서',
  summary:'마을을 위협하는 몬스터를 물리치고 배후의 악마와 대면하는 Unreal Engine 5 기반 3D 액션 게임.',
  period:'2026.09.03–09.29', period_end:'2026-09-29', period_note:'과정 일정표의 CH3 팀 프로젝트 기간. 팀 발표 자료와 실제 발표일도 일치한다.',
  team:'Two Gether · 4명', technology:'Unreal Engine 5 · C++',
  roles:['근접·원거리 적 AI와 순찰·감지·추적·공격 흐름','무기 파츠 장착, 능력치 적용과 데이터 관리','UI 담당자와 파츠 데이터 연결','공격 판정과 적 사망 시 Mesh·효과·소리 처리'],
  role_summary:'적 AI / 무기 파츠',
    cover: { src: "assets/images/priest-enemy.webp", alt: "마을 우물 옆에서 플레이어와 마주친 일반 적" },
  highlights:[{label:'적 AI',summary:'순찰 → 감지 → 추적 → 공격',work:0},{label:'공격 판정',summary:'프레임에 따라 누락되던 판정 수정 과정',work:1},{label:'무기 파츠',summary:'슬롯별 장착과 능력치·UI 데이터 연결',work:2}],
  tags:['적 AI','공격 판정','무기 파츠'],
  media:{url:'https://youtu.be/K-JEzHUtySc',label:'Project Priest 플레이 영상'},
  links:[{label:'프로젝트 저장소',url:'https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project'},{label:'팀 발표 자료',url:'https://docs.google.com/presentation/d/1b_W1kbDZu-cMUC6ZDLqhuG17Zhep3hMxRE7rCtPCxQI/edit'}],
  result:'일반 전투와 인벤토리, 구역 이동, 보스전이 플레이 영상에 담겨 있다. 발표는 9월 29일에 마쳤다.',
  result_note:'플레이 영상 원본: Project (1).mp4 · 로컬 보관. 영상은 YouTube 일부 공개로 연결했습니다. 발표 자료는 팀이 함께 준비한 자료입니다.',
  work:[
    {title:'순찰에서 추적, 공격으로 넘어가기',text:'Behavior Tree와 Blackboard로 적의 행동을 나눴다. 플레이어를 놓치면 마지막으로 알고 있던 위치 주변을 최대 세 번 수색하고, 찾지 못하면 순찰로 돌아가도록 했다.',ids:['20260907-priest','20260908-priest','20260909-priest','20260925-priest-ai']},
    {title:'공격 모션은 나오는데 피해가 들어가지 않았다',text:'손에 붙인 Sphere로 시작해 Box로 바꾸고, Overlap에서 플레이어를 저장하는 방식도 시도했다. 프레임이 낮아지면 판정이 빠지는 문제가 있었다.',note:'발표 자료 12–15쪽에는 ApplyAttack Notify 시점에 공격 범위를 직접 검사하는 방식으로 해결한 내용을 담았다. 당시 수정하면서 적어 둔 내용이라, 마지막 코드와는 조금 다를 수 있다. 마지막 범위 설정은 이 메모에 없다.',
      figures:[
        {src:'assets/images/priest-melee-10fps.png',alt:'10 FPS에서 몬스터가 팔을 휘두르기 전과 후의 손 위치',caption:'손의 충돌체가 두 프레임 사이에 대상을 지나쳐 판정이 누락됐다. 팀 발표 PDF 14쪽.'},
        {src:'assets/images/priest-melee-notify.png',alt:'몬스터 전방의 공격 판정 범위를 표시한 에디터 화면',caption:'ApplyAttack Notify가 발생하면 몬스터 앞의 범위 안에 플레이어가 있는지 검사했다. 팀 발표 PDF 15쪽.'}
      ],ids:['20260910-priest','20260921-priest']},
    {title:'파츠 데이터를 무기 능력치와 화면에 연결하기',text:'스테이지 클리어 보상으로 받은 파츠를 다음 스테이지 시작 전 UI에서 장착해 무기 능력치를 바꾸도록 했다. 파츠는 슬롯별로 장착·교체할 수 있다. DataTable과 GameInstance에서 파츠 정보를 다뤘고, UI 담당 팀원과 화면에 필요한 값과 연결할 부분을 맞췄다.',note:'PartSubsystem으로 옮기는 과정도 적어 뒀다. 당시 수정하면서 적어 둔 내용이라, 마지막 코드와는 조금 다를 수 있다. 정확히 언제, 어디까지 옮겼는지는 기록에 없다.',ids:['20260917-priest','20260921-priest']},
    {title:'숨기려던 Mesh와 실제 보이는 Mesh가 달랐다',text:'GetMesh()로 숨기려던 컴포넌트와 BP의 Real Mesh가 달랐다. OnDeath()를 통해 BP에서 실제 Mesh를 숨기도록 바꿨다. Particle을 바로 제거하면 효과가 끊겨서 정리 시점도 따로 다뤘다.',note:'당시 수정하면서 적어 둔 내용이라, 마지막 코드와는 조금 다를 수 있다. 정확한 작업일과 마지막 Particle 설정은 기록에 없다.',ids:['20260914-priest','20260915-priest']}
  ],
  reflection:{title:'Project Priest 돌아보기',summary:'2026-09-30 정리 · AI의 행동을 연결하면서 막힌 부분과 팀원의 UI에 파츠 데이터를 연결했던 과정.',sections:[
    {title:'각 행동보다 행동 사이의 연결이 어려웠다',text:'처음에는 순찰, 추적, 공격이 각각 동작하는 게 중요했다. 실제로 플레이해보니 순찰 중 플레이어를 발견하고, 공격 거리에 들어가면 멈추는 흐름이 자연스럽게 이어져야 했다. Behavior Tree와 Blackboard, Decorator, Task가 서로 영향을 줘서 실행 흐름을 따라가며 봐야 했다. 행동 전환이 이상하면 Blackboard 값과 조건을 다시 보고 테스트하는 일을 반복했다.'},
    {title:'프레임이 달라지면 공격 판정도 달라졌다',text:'공격 모션은 나오는데 피해가 들어가지 않는 경우가 있었다. 프레임이 바뀌었을 때도 같은 결과가 나오게 만드는 게 어려웠다. 문서에서 본 내용과 실제 엔진 동작이 달라 로직을 다시 구성하기도 했다. 예상하지 못한 조건에서 문제가 남아 있어, 한 번 동작하는 것만으로 끝내기는 어려웠다.'},
    {title:'내 파츠 데이터와 팀원의 화면 연결하기',text:'UI와 파츠 시스템을 연결할 때 담당 팀원과 필요한 값과 연결할 부분을 같이 봤다. 각자 만든 뒤 마지막에 합치기보다, 어떤 값을 주고받을지 작업하면서 맞추는 게 도움이 됐다.'},
    {title:'공부와 구현을 같이 진행했던 부분',text:'연휴와 주말을 빼면 실제 작업 기간은 약 15일이었다. 그 안에서 Behavior Tree, Blackboard, MVC처럼 익숙하지 않은 개념을 공부하면서 구현해야 했다. 공부에 예상보다 시간이 많이 들어 구현하고 다듬을 시간이 부족했다. 다시 AI를 만든다면 감지부터 Blackboard, Behavior Tree, 이동, 애니메이션과 공격 판정까지 연결되는 흐름을 먼저 정리하고 싶다.'}
  ],sources:['ProjectPriest_프로젝트_돌아보기.md · 로컬 원자료','ProjectPriest_개발_원자료.md · 로컬 원자료','팀 발표 PDF 34쪽 · 정우혁 돌아보기','2026-09-30 ProjectPriest 대화 · 실제 작업 기간과 파츠 기능 설명'],notice:'9월 29일 발표를 마치고, 9월 30일에 작업을 돌아보며 적었다. 날짜를 적지 않은 작업도 있어 정확한 수정일은 구분하기 어렵다. 당시 수정하면서 적어 둔 내용은 마지막 코드와 조금 다를 수 있다.'}
}];

// Optional project media and grouped entry points; daily records remain unchanged.
window.TIL_PROJECTS.push(...[
  {
    id: 'chapter-4-team',
    cover: {src: 'assets/images/dont-drop-demo.webp', alt: '짙은 남색과 청록색 배경에 노란 Don’t Drop 로고가 놓인 타이틀 화면'},
    media: {label: 'Don’t Drop 팀 시연 영상', url: 'https://www.youtube.com/watch?v=Z17FAkNCGB4'},
    links: [{label: '팀 프로젝트 저장소', url: 'https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project'}],
    record_project: 'Don’t Drop',
    roles: [
      '캐릭터의 이동·점프 설정을 DataTable에서 읽고 방어구 무게가 바뀔 때 이동 속도를 갱신했다.',
      '공격·가드 입력을 전투 컴포넌트에 전달하고, 가드 상태 변경을 받아 캐릭터의 이동과 회전에 반영했다.',
      '캐릭터 외형 파츠를 연결하고, 이동 중에 가드와 공격 포즈가 어떻게 겹치는지 확인했다.'
    ],
    work: [
      {
        topic: '이동과 입력',
        title: '출발 속도와 키를 누르는 동안의 가속을 분리했다',
        text: '출발 속도만 높였더니 캐릭터가 대시하듯 튀어나갔다가 급하게 느려졌다. 입력을 처음 받았을 때의 속도와 키를 누르고 있는 동안 커지는 이동 세기를 나눠 조절했다. 방어구 무게가 바뀌면 이동 설정도 다시 적용하도록 연결했다.',
        figures: [{src:'assets/images/dont-drop-movement.webp', still:'assets/images/dont-drop-movement-preview.webp', alt:'발판을 따라 이동하는 캐릭터의 시연. 원본 크기로 열기', caption:'발판 위 캐릭터 이동'}],
        ids: ['20261106-dont-drop', '20261109-dont-drop']
      },
      {
        topic: '이동과 입력',
        title: '가드를 풀면 방어구 무게에 맞춰 속도를 다시 계산했다',
        text: '가드를 풀 때 기본 속도를 그대로 넣으면 무거운 방어구 때문에 낮아진 속도까지 덮어쓸 수 있었다. CombatComponent의 OnBlockStateChanged를 받아 실제 가드 상태가 바뀔 때 현재 방어구 무게와 가드 여부로 이동 속도를 다시 계산하도록 바꿨다.',
        ids: ['20261117-dont-drop']
      },
      {
        topic: '애니메이션',
        title: '일반 공격 중에도 걷도록 상체와 하체 포즈를 나눴다',
        text: '이동 중에 일반 공격을 하면 다리까지 공격 포즈를 따라가서 발이 멈춰 보였다. AI에 블렌딩 수정을 요청하고, spine_01을 기준으로 상체에는 공격 포즈가, 하체에는 이동 포즈가 들어가는 구성을 살펴봤다.',
        ids: ['20261119-dont-drop', '20261120-dont-drop']
      },
      {
        topic: '애니메이션',
        title: '숨긴 메시의 본을 계속 갱신하자 흔들림이 사라졌다',
        text: 'Set Leader Pose Component로 외형 파츠가 기준 메시의 본을 따르도록 했다. 플레이 중에 기준 메시만 숨기자 캐릭터가 위아래로 흔들렸다. 기준 메시의 설정을 Always Tick Pose and Refresh Bones로 바꾸고 같은 맵에서 다시 실행했더니 흔들림이 사라졌다.',
        ids: ['20261111-dont-drop']
      },
      {
        topic: '방어구와 외형',
        title: '방어구가 깨지면 해당 부위의 파츠를 숨기도록 연결했다',
        text: '머리, 몸통과 양팔, 양다리를 각각 한 부위로 묶었다. 복원할 때 메시를 다시 만들 필요가 없도록 기존 컴포넌트를 두고 표시 여부만 바꾸기로 했다. UpdateArmorAppearance()에서 남은 부위를 확인해 SetVisibility()를 호출하고, 블루프린트에서 외형 행 이름과 방어구 부위를 연결했다.',
        note: '11월 18일에 확인한 범위는 부위 연결 설정까지다. 다른 플레이어의 화면에서도 파괴와 복원이 동기화되는지는 당시 기록으로 확인하기 어렵다.',
        ids: ['20261118-dont-drop']
      },
      {
        topic: '방어구와 외형',
        title: '외형 선택 코드는 일부 구현했고, 쓸 수 있는 모델은 확보하지 못했다',
        text: '외형을 선택하면 해당 파츠를 적용하는 코드까지 일부 구현했다. 3D 모델 제작도 처음부터 Codex만으로 시도했는데, 게임에 쓸 품질의 에셋을 확보하지 못해 커스터마이징을 완성하지 못했다.',
        ids: ['20261112-dont-drop', '20261113-dont-drop', '20261123-dont-drop']
      }
    ],
    result: '팀 시연 영상으로 링 위에서 상대를 밀어내는 플레이를 소개하고 11월 23일 최종 발표를 마쳤다.',
    period: "2026.10.29–11.23", period_end: "2026-11-23",
    period_note: "11월 23일에 개발과 발표를 마치고, 25일에 팀 회고를 정리했다.",
    title: 'Don’t Drop', featured: true,
    archive: true,
    activity: 'team',
    summary: '점점 좁아지는 링에서 상대를 밀어내고 끝까지 살아남는 멀티플레이 액션 게임이다. 캐릭터 조작을 맡아 방어구 무게에 따른 이동과 공격·가드 입력을 연결했다.',
    team: '어E가없네 · 5명',
    technology: 'Unreal Engine 5.6 · C++',
    role_summary: '캐릭터·조작 / 서기',
    tags: ['Unreal', '멀티플레이', '캐릭터 이동'],
    reflection: {
      title: 'Don’t Drop 돌아보기',
      summary: '이동 중 공격할 때 발이 멈춘 문제와 무기가 손에서 어긋난 문제, 최종 발표에서 팀이 받은 피드백을 돌아봤다.',
      sections: [
        {title:'공격 중에도 걸음이 보여야 했다', text:'일반 공격을 하면 캐릭터는 계속 이동하는데 화면에서는 발이 멈췄다. AI에 블렌딩 수정을 요청하고, Layered Blend per Bone에서 상체는 공격을 따라가고 하체는 걸음을 이어 가도록 나눈 구성을 확인했다. 발까지 함께 돌아야 하는 회전 공격은 일반 공격과 따로 살펴봤다.'},
        {title:'같은 손 소켓에 붙여도 무기마다 위치가 달랐다', text:'소켓을 옮긴 뒤 실행 화면에서 손과 손잡이가 여전히 어긋나는 걸 봤다. 무기마다 메시의 기준점이 달라 소켓 위치만으로는 맞추기 어려웠다. 보정을 요청했고 AI가 부착 기준과 무기별 위치·회전 오프셋을 조정했다.'},
        {title:'발표 영상에서 타격 순간이 어떻게 보였나', text:'최종 발표에서 튜터님은 망치 머리가 닿는 순간과 상대가 맞는 순간이 어긋나 보인다고 했다. 공격 애니메이션의 Notify로 판정 시점을 맞추거나 맞은 부위에 효과를 표시해 보라는 의견이었다. 매니저님은 구현한 기능에 비해 발표에서 보여준 장면이 적었다고 짚었다.'}
      ],
      sources: ['팀 회고 자료', '11월 19일 캐릭터 작업 일지', '11.23발표 피드백.txt'],
      notice: '무기 장착 보정 후 회전 공격 내내 손잡이가 맞았는지는 당시 일지에서 확인되지 않는다. 타격 판정과 연출에 관한 의견은 발표 후 팀이 받은 피드백이다.'
    }
  },
  {
    "id": "archive-cc55-d130-20-33-20-ac1c-c778-20-d504-b85c-c81d-d2b8",
    "record_project": "챕터 3 개인 프로젝트",
    period: "2026.08.06–09.02", period_end: "2026-09-02",
    period_note: "과정 일정표의 CH3 개인 과제 기간. 세 영상은 이 기간 안의 작업으로 함께 묶었다.",
    "title": "챕터 3 개인 프로젝트",
    "archive": true,
    "activity": "personal",
    "summary": "움직이는 발판, Pawn 조작 캐릭터, 개인 종합 과제의 영상과 작업 기록.",
    "tags": [
      "Unreal",
      "C++"
    ],
    "parts": [
      {
        "title": "움직이는 발판",
        "video": "https://youtu.be/rjz2aWgR3Z8",
        "ids": [
          "project-ch3-1"
        ]
      },
      {
        "title": "Pawn 조작 캐릭터",
        "video": "https://youtu.be/VVnRpv5ToAg",
        "ids": [
          "project-ch3-2"
        ]
      },
      {
        "title": "개인 종합 과제",
        "video": "https://youtu.be/OXW5o3VBEGw",
        "ids": [
          "20260818-ch3",
          "20260825-ch3",
          "20260902-ch3"
        ]
      }
    ],
    "aliases": [
      "archive-43-48-33-20-ac1c-c778-20-d504-b85c-c81d-d2b8",
      "archive-43-48-33-5f-31-20-ac1c-c778-20-d504-b85c-c81d-d2b8",
      "archive-43-48-33-5f-32-20-ac1c-c778-20-d504-b85c-c81d-d2b8"
    ]
  },
  {
    "id": "archive-46-69-72-73-74-46-50-53-20-b7-20-ccab-20-c8fc-20-42-6c-75-65-70-72-69-6e-74-20-d504-b85c-c81d-d2b8",
    "record_project": "FirstFPS · 첫 주 Blueprint 프로젝트",
    period: "2026.07.03 마감", period_end: "2026-07-03",
    period_note: "과정 일정표의 과제 마감·미니 발표일. 시작일은 일정표에 따로 적혀 있지 않다.",
    "title": "FirstFPS",
    cover: { src: "assets/images/firstfps-play.webp", alt: "조준점과 탄약, 남은 적 수가 보이는 FirstFPS 플레이 화면" },
    "archive": true,
    "activity": "personal",
    "summary": "Blueprint로 이동·발사, 적 추적, 아이템과 HUD를 연결한 FPS 실습.",
    "tags": [
      "Unreal",
      "Blueprint"
    ],
    "media": {
      "url": "https://youtu.be/QkZXdj-Wmzo",
      "label": "FirstFPS 플레이 영상"
    }
  }
]);

window.TIL_PROJECTS.push(...[
  {
    "id": "archive-ac1c-c778-20-54-65-78-74-52-50-47",
    "record_project": "개인 TextRPG",
    period: "2026.07.13–07.28", period_end: "2026-07-28",
    period_note: "과정 일정표의 CH2 개인 과제 발제부터 제출 마감까지.",
    "title": "개인 TextRPG",
    "archive": true,
    "activity": "personal",
    "summary": "직업 선택과 Player 구조에 상속·다형성을 적용하고, C++와 STL을 함께 공부한 기록.",
    "tags": [
      "C++",
      "직업 선택",
      "상속·다형성"
    ]
  },
  {
    "id": "archive-d300-20-54-65-78-74-52-50-47",
    "record_project": "팀 TextRPG",
    period: "2026.07.28–08.05", period_end: "2026-08-05",
    period_note: "과정 일정표의 CH2 팀 프로젝트 발제부터 마감·발표까지.",
    "title": "제13 던전",
    cover: { src: "assets/images/team-textrpg-shop-stats.png", alt: "제13 던전의 탕비실 자판기 구매 화면, 보급품 회수소 판매 화면, 아이템·골드 집계 화면" },
    "archive": true,
    "activity": "team",
    "summary": "상점의 아이템 구매·판매와 Item 관리, Logger를 통한 게임 데이터 집계 작업.",
    "tags": [
      "C++",
      "상점·아이템",
      "Logger"
    ]
  },
  {
    "id": "chapter-4",
    "record_project": "챕터 4 개인 프로젝트",
    period: "2026.10.01–10.28", period_end: "2026-10-28",
    period_note: "과정 일정표 기준. 숫자 야구는 10월 1일 발제·12일 마감, 분노의 질주는 10월 28일 마감이다. 분노의 질주의 별도 시작일은 명시되지 않았다.",
    "record_projects": [
      "ChatX",
      "CX"
    ],
    "title": "챕터 4 개인 프로젝트",
    cover: { src: "assets/images/cx-cars.webp", alt: "분노의 질주에서 나란히 달리는 코스 위의 차량 두 대" },
    "archive": true,
    "activity": "personal",
    "summary": "ChatX 숫자 야구와 분노의 질주(CX)의 영상·멀티플레이 작업 기록.",
    "tags": [
      "Unreal",
      "C++",
      "멀티플레이"
    ],
    "parts": [
      {
        "title": "ChatX · 숫자 야구",
        "video": "https://youtu.be/powPv4J4LEI",
        "ids": [
          "20261002-chatx",
          "20261005-chatx",
          "20261006-chatx",
          "20261007-chatx",
          "20261008-chatx",
          "20261011-chatx",
          "20261012-chatx"
        ]
      },
      {
        "title": "분노의 질주 · CX",
        "video": "https://youtu.be/-iS0zHFAwEs",
        "ids": [
          "20261019-cx",
          "20261026-cx",
          "20261027-cx",
          "20261028-cx"
        ]
      }
    ],
    "aliases": [
      "archive-43-68-61-74-58",
      "cx",
      "archive-43-58"
    ]
  }
]);
