window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/09/2026-09-24_2026-09-25.js"] = [
  {
    "id": "20260924-priest-concepts",
    "project": "ProjectPriest",
    "primary_topic": "unreal",
    "tags": ["Unreal", "AI", "Behavior Tree", "Blackboard", "개념정리"],
    "phase": "개념 정리",
    "date_basis": "원문 대화 시각 · 한국 시간",
    "date": "2026-09-24",
    "date_end": null,
    "title": "Behavior Tree 구성요소 역할 나누기",
    "summary": "Behavior Tree 안의 Composite, Task, Decorator, Service를 나누고 AI Perception과 Blackboard가 연결되는 위치를 정리했다.",
    "study_content": "AI 정리를 객체지향 개념과 별도 파일로 나누면서 Behavior Tree 자체의 구성요소를 다시 봤다. Composite의 Selector와 Sequence가 흐름을 만들고, Decorator는 실행 조건을 검사하며, Service는 활성화된 Branch의 상태를 주기적으로 갱신하고, Task가 실제 행동을 수행한다.",
    "learning_process": "처음 만든 정리에서는 AIController, AI Perception, Blackboard, NavMesh와 Behavior Tree 내부 요소가 한데 묶여 있었다. Behavior Tree와 Blackboard의 관계를 따로 두고, AI Perception은 외부 상황을 감지해 AIController 등을 통해 Blackboard를 갱신하는 쪽으로 구분했다. 이미 옆에 목차가 있는데 본문에 목차를 또 넣은 부분과 마크다운 흔적, 깊게 파지 않은 리팩토링 기준도 덜어냈다.",
    "questions": [
      "Behavior Tree 안에서 Selector와 Sequence는 어떤 순서로 자식 노드를 실행하는가?",
      "Decorator, Service, Task는 각각 조건·상태 갱신·행동 중 무엇을 맡는가?",
      "AI Perception과 Blackboard를 Behavior Tree 내부 개념으로 봐도 되는가?"
    ],
    "mistakes_or_difficulties": [
      "처음 정리에서는 Behavior Tree 내부 구성요소와 외부 AI 시스템의 역할이 섞였다.",
      "실제로 깊게 다루지 않은 개념까지 넣으면서 나중에 TIL 근거로 쓰기 어려운 내용이 늘었다."
    ],
    "references": [],
    "repository": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project",
    "source": [
      "ChatGPT 대화 · 언리얼 개념 정리 · 2026-09-24",
      "ProjectPriest_Unreal_OOP_Concepts.html · 대화에서 생성된 로컬 파일",
      "ProjectPriest_Unreal_AI_BT_Notes.html · 대화에서 생성된 로컬 파일"
    ],
    "verification_note": "대화에서 나눈 개념 정리와 파일 분리 과정을 바탕으로 적었다. 대화에서 깊게 다루지 않은 개념은 추가하지 않았다.",
    "date_start": "2026-09-24",
    "date_label": "2026-09-24",
    "activity": "team"
  },
  {
    "id": "20260925-priest-ai",
    "project": "ProjectPriest",
    "primary_topic": "unreal",
    "tags": ["Unreal", "C++", "AI Perception", "Collision", "디버깅"],
    "phase": "설계 점검 · 디버깅",
    "date_basis": "원문 대화 시각 · 한국 시간",
    "date": "2026-09-25",
    "date_end": null,
    "title": "감지 상실 처리와 근접 공격 판정 점검",
    "summary": "시야가 끊겼을 때 Player를 바로 지우는 흐름을 다시 보고, 간헐적으로 빠지는 근접 공격 판정은 Collision의 높이와 실제 Overlap을 확인했다.",
    "study_content": "AI Perception에서 플레이어를 놓치자마자 Player를 nullptr로 바꾸면 공격과 전투가 바로 끊겼다. Player, 지금 보이는지 여부, 마지막 위치를 나누고 기존 PlayerVector 주변 3회 수색이 끝난 뒤 전투를 종료하는 방향을 정리했다. 피격 방향을 보는 기능에는 Sight와 Damage Sense의 역할을 나누는 방법도 살펴봤다. 근접 공격은 Begin/End Overlap과 Anim Notify의 ApplyDamage 흐름에 로그를 넣어 어느 단계에서 끊기는지 확인했고, AttackCollision Box의 높이를 키우자 피해가 조금 더 안정적으로 들어왔다.",
    "learning_process": "처음에는 감지를 놓치면 Player와 전투 상태를 바로 지우는 흐름을 유지한 채 지연만 넣을지 고민했다. 하지만 Player가 있다는 것과 현재 보인다는 것을 분리하고, 마지막 PlayerVector를 기존 수색에 넘기는 편이 현재 구조와 더 맞았다. Damage Sense는 피격 위치를 PlayerVector에 넣고 수색 카운터를 초기화하는 방식까지 이야기했지만 실제 적용 결과는 확인되지 않았다. 공격 판정은 Player 포인터부터 의심했지만 Box 높이를 키웠을 때 달라져 Player Capsule과 AttackCollision의 Z축 겹침도 함께 보게 됐다.",
    "questions": [
      "플레이어가 시야에서 사라졌을 때 전투를 바로 끝내지 않고 기존 수색으로 어떻게 넘길 것인가?",
      "Damage Sense로 피격 방향을 얻되 Sight에서 실제로 발견한 상태와 어떻게 구분할 것인가?",
      "Player가 공격 Box 가장자리에 걸쳤을 때 피해가 빠지는 이유가 포인터 처리인지 Collision 크기인지 어떻게 구분할 것인가?"
    ],
    "mistakes_or_difficulties": [
      "감지 실패와 전투 종료를 같은 사건으로 처리해 공격 중 잠깐 시야가 끊겨도 몬스터가 바로 떠났다.",
      "여러 Player Component가 Overlap한다면 일부 Component의 EndOverlap에서 Player를 너무 일찍 지울 가능성이 남아 있었다.",
      "눈으로 Box에 걸쳐 보이는 것과 실제 Player Capsule이 Overlap 상태인 것은 다를 수 있었다.",
      "Box 높이를 키운 뒤 피해가 더 잘 들어왔지만 최종 원인과 수정 완료 여부는 대화에서 확인되지 않았다."
    ],
    "references": [],
    "repository": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project",
    "source": ["ChatGPT 대화 · ProjectPriest · 2026-09-25"],
    "verification_note": "대화에서 확인한 증상과 코드 점검 흐름을 바탕으로 적었다. Damage Sense와 감지 상태 분리의 실제 구현, Collision 문제의 최종 해결은 확인되지 않았다.",
    "date_start": "2026-09-25",
    "date_label": "2026-09-25",
    "activity": "team",
    "notice": "설계 제안과 실제 적용 결과를 구분했다. 완료가 확인되지 않은 기능은 구현 완료로 표시하지 않았다."
  }
];
