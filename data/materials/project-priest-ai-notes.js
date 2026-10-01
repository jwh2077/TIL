window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/project-priest-ai-notes.js"] = [
  {
    "id": "project-priest-ai-notes",
    "title": "AI와 Behavior Tree의 역할 나누기",
    "summary": "감지, Blackboard에 저장할 값, Behavior Tree에서 실행할 행동을 나눠 봤다.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "로컬 개념 문서에서 정리",
    "source_name": "ProjectPriest_Unreal_AI_BT_Notes.html",
    "source_url": "",
    "project": "ProjectPriest",
    "notice": "원본: ProjectPriest_Unreal_AI_BT_Notes.html, Project (1).mp4 (로컬 보관). 공격 판정과 감지 상실 처리의 최종 해결 여부는 미확인.",
    "sections": [
      {
        "title": "감지와 행동을 나눠 보기",
        "text": "AI Perception은 주변을 감지하고, Blackboard는 판단에 쓸 상태를 보관한다. Behavior Tree는 그 상태를 보고 어떤 행동을 할지 정한다. AI Perception과 Blackboard를 모두 Behavior Tree 안의 노드로 묶지 않고 역할을 나눠 봤다."
      },
      {
        "title": "AIController와 Blackboard",
        "text": "Enemy Character가 실제 몸체라면 AIController는 그 캐릭터의 AI 제어를 맡는다. 감지한 내용을 Blackboard에 넣고 Behavior Tree를 실행하는 흐름으로 나눠 봤다. Player는 현재 목표, PlayerVector는 목표 위치, IsCombat은 전투 상태로 두었다. Blackboard가 직접 이동하거나 공격하는 것은 아니다."
      },
      {
        "title": "Selector와 Sequence",
        "items": [
          "Sequence는 자식 노드를 순서대로 실행한다. 중간에 하나라도 실패하면 전체 흐름도 실패한다. 플레이어 확인 → 바라보기 → 공격처럼 이어지는 행동을 묶는다.",
          "Selector는 자식 노드를 순서대로 시도하다가 하나가 성공하면 성공한다. 공격할 수 있으면 공격하고, 아니면 추적하고, 그것도 안 되면 순찰하는 식으로 볼 수 있다."
        ]
      },
      {
        "title": "Task·Decorator·Service",
        "items": [
          "Task: 실제로 할 행동. 이동하거나 공격하고, 순찰 위치를 정하는 부분이다.",
          "Decorator: 지금 이 Branch를 실행해도 되는지 조건을 검사한다.",
          "Service: 연결된 Branch가 활성화된 동안 일정 주기로 상태를 확인하거나 Blackboard 값을 바꾼다."
        ]
      },
      {
        "title": "이동과 공격 시점",
        "text": "Blackboard에 목표 Actor나 위치를 두고 Move To로 이동을 요청한다. 이동할 수 있는 영역은 NavMesh로 잡는다. 근접 공격은 공격 시작과 실제 피해를 주는 시점을 나눠 봤다. Montage의 타격 프레임에서 Anim Notify를 호출하고, Player가 있는지 확인한 뒤 ApplyDamage로 이어지는 흐름이다."
      },
      {
        "title": "개념 정리와 이후 작업",
        "text": "우선 순찰 → 감지 → 추적 → 공격으로 기본 흐름을 나눴다. 이후에는 플레이어를 놓쳤을 때 바로 전투를 끝낼지, 마지막 위치를 수색할지 고민했다. 이 부분은 9/25 작업 기록에 따로 적었다."
      },
      {
        "title": "공격 범위와 피해를 주는 시점",
        "text": "9/23 변경 코드에서는 손에 붙인 Sphere 대신 AttackCollision Box를 두었다. BeginOverlap에서 Player를 기억하고 EndOverlap에서 비운다. 실제 피해는 OnNotifyApplyDamage에서 Player가 있을 때 준다. 범위 안에 있다는 것과 공격 애니메이션의 타격 시점은 따로 처리하는 흐름이다."
      },
      {
        "title": "플레이 영상",
        "text": "남겨둔 Project (1).mp4에는 일반 적과 보스의 전투가 나온다. 전투 중에는 체력과 탄약, 남은 적 수가 표시된다. 감지 상실 처리와 간헐적으로 빠지던 공격 판정은 9/25 기록에 남겨뒀다."
      }
    ],
    "related_ids": [
      "20260924-priest-concepts",
      "20260907-priest",
      "20260910-priest",
      "20260925-priest-ai",
      "20260928-priest"
    ],
    "references": [
      {
        "label": "공격 범위와 Notify 피해 적용 · 49c42fc",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/49c42fc0c144d3b137fc0b3e9e2c8b169d462c8d"
      },
      {
        "label": "이후 공격 범위 에셋 변경 · 6f40359",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/6f40359179126e90655ef8a201a21d9799513170"
      }
    ]
  }
];
