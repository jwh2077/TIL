window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/project-priest-ai-notes.js"] = [
  {
    "id": "project-priest-ai-notes",
    "title": "Unreal AI — Perception·Blackboard·Behavior Tree",
    "summary": "감지·상태·행동의 역할, Selector·Sequence 비교, Task·Decorator·Service와 공격 시점.",
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
    "notice": "ProjectPriest에서 사용한 이름과 흐름을 예로 든다. 작업 경과와 플레이 영상 설명은 관련 학습 기록에 남겼다.",
    "sections": [
      {
        "title": "감지에서 행동까지",
        "html": "<ol class=\"reference-flow\"><li>AI Perception: 감지</li><li>AIController: AI 제어</li><li>Blackboard: 판단용 상태</li><li>Behavior Tree: 행동 선택</li><li>Character: 이동·공격</li></ol>"
      },
      {
        "title": "구성요소 역할",
        "html": "<table><thead><tr><th scope=\"col\">요소</th><th scope=\"col\">역할</th></tr></thead><tbody><tr><td>AIController</td><td>캐릭터의 AI 제어, Behavior Tree 실행</td></tr><tr><td>AI Perception</td><td>외부 상황 감지</td></tr><tr><td>Blackboard</td><td>목표·위치·상태 보관. 직접 이동·공격하지 않음</td></tr><tr><td>Behavior Tree</td><td>상태와 조건을 보고 행동 실행</td></tr><tr><td>NavMesh</td><td>이동 가능한 영역</td></tr></tbody></table>"
      },
      {
        "title": "Blackboard 값 예시",
        "html": "<table><thead><tr><th scope=\"col\">키</th><th scope=\"col\">의미</th></tr></thead><tbody><tr><td>Player</td><td>현재 목표</td></tr><tr><td>PlayerVector</td><td>목표 위치</td></tr><tr><td>IsCombat</td><td>전투 상태</td></tr></tbody></table>",
        "text": "ProjectPriest에서 사용한 이름이며 고정된 엔진 키가 아니다."
      },
      {
        "title": "Selector와 Sequence",
        "html": "<table><thead><tr><th scope=\"col\">노드</th><th scope=\"col\">진행 방식</th><th scope=\"col\">예</th></tr></thead><tbody><tr><td>Sequence</td><td>순서대로 진행, 자식 하나가 실패하면 실패</td><td>플레이어 확인 → 바라보기 → 공격</td></tr><tr><td>Selector</td><td>순서대로 시도, 자식 하나가 성공하면 성공</td><td>공격 가능 여부 → 추적 → 순찰</td></tr></tbody></table>"
      },
      {
        "title": "Task·Decorator·Service",
        "html": "<table><thead><tr><th scope=\"col\">요소</th><th scope=\"col\">담당</th></tr></thead><tbody><tr><td>Task</td><td>이동·공격·순찰 위치 지정 등 행동</td></tr><tr><td>Decorator</td><td>Branch 실행 조건 검사</td></tr><tr><td>Service</td><td>Branch 활성 중 일정 주기로 상태 확인·갱신</td></tr></tbody></table>"
      },
      {
        "title": "공격 범위와 타격 시점 분리",
        "html": "<ol class=\"reference-flow\"><li>범위 검사: 대상 보관</li><li>공격 Montage 재생</li><li>타격 프레임: Anim Notify</li><li>대상 유효 여부 확인</li><li>피해 적용</li></ol>",
        "text": "범위 안에 있다는 것과 실제 피해를 주는 시점은 별도로 처리한다. Overlap에서 대상을 보관하고 Notify에서 사용하는 흐름의 예시이며, 모든 공격 판정에 적용하는 단일 정답은 아니다."
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
      },
      {
        "label": "객체지향 설계 — 상속·Component·Interface",
        "url": "https://jwh2077.github.io/TIL/#material=project-priest-oop-notes"
      }
    ]
  }
];
