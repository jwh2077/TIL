window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/07/2026-07-03.js"] = [
  {
    "id": "20260703-001",
    "date": "2026-07-03-a",
    "title": "아이템과 게임 진행 기능",
    "project": "FirstFPS · 첫 주 Blueprint 프로젝트",
    "phase": "따라 해봄",
    "tags": [
      "Unreal",
      "Blueprint",
      "실습"
    ],
    "study_content": "기존 FPS 프로젝트에 회복·탄약 아이템, 제한 시간, 게임 클리어와 게임 오버 UI, 남은 몬스터 수를 추가했다.",
    "learning_process": "아이템과 충돌하면 종류에 따라 체력이나 탄약을 올리고 HUD를 갱신한 뒤 아이템을 지웠다. 제한 시간이 끝나면 게임 오버 UI를 띄우고, 몬스터 수가 0이 되면 클리어 UI가 나오도록 이벤트를 나눴다.",
    "questions": [],
    "mistakes_or_difficulties": [],
    "application": "아이템 획득 결과와 남은 시간·몬스터 수가 화면에 바로 반영되게 연결했다.",
    "result": "전투만 있던 프로젝트에 시작과 종료 조건이 생겨서 게임 한 판의 흐름이 만들어졌다.",
    "code_reference": null,
    "understanding": "예제 기반 실습",
    "related_topics": [
      "Item",
      "Ammo",
      "Game Over",
      "UI Event"
    ],
    "later_connection": "이후 TextRPG에서 아이템과 게임 상태를 관리하는 구조를 학습할 때 연결되었다.",
    "next_learning": "Actor 배치와 Reload, Item Spawner",
    "images": [
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/37d5b900-77ec-4b37-93d8-192fd85c4150/image.png",
        "caption": "아이템 충돌 뒤 캐릭터 상태를 바꾸고 아이템을 지우는 흐름"
      },
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/44670af3-81b2-451e-a39f-d9c3a251c106/image.png",
        "caption": "회복 아이템 획득과 HUD 갱신을 연결한 Blueprint"
      },
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/44a3535d-0b3d-41c6-b7d2-a3ff11b0e458/image.png",
        "caption": "제한 시간이 끝났을 때 게임 종료 UI를 실행한 부분"
      }
    ],
    "velog": "https://velog.io/@jwh4410/7.2",
    "repository": "https://github.com/jwh2077/FirstFPS",
    "source": [
      "Velog",
      "사용자 확인: 첫 주 Blueprint 프로젝트는 FirstFPS"
    ],
    "primary_topic": "unreal",
    "summary": "회복·탄약 아이템과 제한 시간, 클리어·게임 오버 UI를 연결해 한 판의 진행 흐름을 만들었다.",
    "date_start": "2026-07-03",
    "date_label": "2026-07-03",
    "references": [
      {
        "label": "FirstFPS 원본 저장소",
        "url": "https://github.com/jwh2077/FirstFPS"
      }
    ],
    "repository_verification": "사용자가 제공한 저장소 연결 정보 기준. 로컬 FirstFPS 경로를 현재 읽을 수 없어 Git 이력과 Blueprint 노드·실행 결과는 대조하지 않았다.",
    "activity": "personal"
  },
  {
    "id": "20260703-002",
    "date": "2026-07-03-b",
    "title": "Actor 배치와 아이템 Spawner",
    "project": "FirstFPS · 첫 주 Blueprint 프로젝트",
    "phase": "따라 해봄",
    "tags": [
      "Unreal",
      "Blueprint",
      "실습"
    ],
    "study_content": "맵에 Actor를 배치하고 Reload와 Item Spawner를 붙이면서 첫 주 FPS 프로젝트를 마무리했다.",
    "learning_process": "Reload 입력이 들어오면 남은 탄약을 확인해 장전되도록 연결했다. Item Spawner에서는 정해둔 위치에 아이템을 생성하고, 획득된 뒤 다시 나올 수 있게 흐름을 만들었다.",
    "questions": [],
    "mistakes_or_difficulties": [],
    "application": "플레이 공간에 필요한 Actor와 아이템 생성 지점을 놓고 재장전까지 실제 플레이 흐름에 넣었다.",
    "result": "이동과 발사부터 HUD, 적, 아이템, 재장전까지 첫 FPS에 필요한 기능을 한 프로젝트에서 확인했다.",
    "code_reference": null,
    "understanding": "예제 기반 실습",
    "related_topics": [
      "Actor",
      "Reload",
      "Item Spawner"
    ],
    "later_connection": "이후 게임 내 아이템을 관리하는 구조를 공부하면서 다시 연결되었다.",
    "next_learning": "C 배열과 포인터",
    "images": [
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/049b7655-f4f6-411d-a9b8-05c691ede130/image.png",
        "caption": "맵에 액터를 배치하고 동작을 확인한 화면"
      },
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/24ce8c78-d89f-483e-8e85-6f944af92599/image.png",
        "caption": "Reload 입력과 탄약 상태를 연결한 Blueprint"
      },
      {
        "url": "https://velog.velcdn.com/images/jwh4410/post/511d1cb2-2c74-468f-b6e0-a3acdb6c0194/image.png",
        "caption": "아이템을 생성하도록 만든 Item Spawner"
      }
    ],
    "velog": "https://velog.io/@jwh4410/7.3",
    "repository": "https://github.com/jwh2077/FirstFPS",
    "source": [
      "Velog",
      "사용자 확인: 첫 주 Blueprint 프로젝트는 FirstFPS"
    ],
    "primary_topic": "unreal",
    "summary": "Actor 배치와 재장전, Item Spawner를 붙여 첫 주 FPS 프로젝트를 마무리했다.",
    "date_start": "2026-07-03",
    "date_label": "2026-07-03",
    "references": [
      {
        "label": "FirstFPS 원본 저장소",
        "url": "https://github.com/jwh2077/FirstFPS"
      }
    ],
    "repository_verification": "사용자가 제공한 저장소 연결 정보 기준. 로컬 FirstFPS 경로를 현재 읽을 수 없어 Git 이력과 Blueprint 노드·실행 결과는 대조하지 않았다.",
    "activity": "personal"
  }
];
