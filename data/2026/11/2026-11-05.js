window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/11/2026-11-05.js"] = [
  {
    "id": "20261105-dont-drop",
    "date": "2026-11-05",
    "date_end": null,
    "date_label": "2026-11-05",
    "title": "Don’t Drop · 방어구 무게와 이동 가속, 공격 입력 연결",
    "summary": "방어구 무게로 최대 보행 속도를 계산하고, 이동 키를 누른 시간에 따라 입력 세기를 조정했다. 공격 입력은 전투 컴포넌트의 RequestAttack()으로 연결했다.",
    "project": "Don’t Drop",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "C++",
      "입력",
      "멀티플레이"
    ],
    "activity": "team",
    "date_start": "2026-11-05",
    "date_basis": "11-05.txt의 튜터 피드백과 11월 5일 feature-character의 본인 커밋.",
    "study_content": "## 방어구 무게로 최대 보행 속도 계산하기\n\n어제는 데이터 테이블에서 기본 이동 값을 읽어 왔다. 오늘은 방어구 무게가 바뀌었을 때 속도를 다시 계산할 수 있도록 ApplyArmorWeightToMovement를 추가했다. 기본 최대 속도에서 ‘방어구 무게 × 속도 감소 계수’를 빼고, 결과가 150보다 작으면 150을 CharacterMovement의 MaxWalkSpeed에 넣도록 했다.\n\n## 이동 키를 누른 시간에 따라 입력 세기 바꾸기\n\n키를 누르자마자 최대 세기로 이동 입력이 들어가는 대신, 누르고 있는 동안 세기가 커지도록 했다. 이동 입력을 받을 때 GetElapsedTime()으로 키를 누른 시간을 읽고, 가속 기준 시간으로 나눈 값을 0.3에서 1 사이로 제한했다. 방어구 무게 쪽에서는 최대 보행 속도를 바꾸고, 여기서는 이동 입력의 세기를 바꾼다.\n\n처음에는 가속 기준 시간을 5초로 두었다가 1.5초로 줄였다. 오늘 마지막 커밋에서는 2초로 조정했다.\n\n## 캐릭터에서 전투 쪽으로 공격 요청 보내기\n\n전투 브랜치를 합친 뒤 캐릭터에 전투 컴포넌트와 넉백 컴포넌트를 붙였다. 어제는 공격 키를 누르면 캐릭터의 Attack()에서 BPAttack() 이벤트를 호출하는 데까지 연결했다. 오늘은 같은 공격 입력에서 CombatComponent->RequestAttack()을 호출해 전투 쪽으로 요청을 넘기도록 했다.\n\n## 넉백은 어느 시점에 보여줄까?\n\n튜터 피드백에서는 이동 키를 누른 플레이어의 화면이 먼저 반응하고, 서버가 이동을 검증해 필요하면 위치를 보정하는 흐름을 짚었다. 넉백도 서버 판정을 기다린 뒤에만 화면에 보이면 밀리는 반응이 늦게 느껴질지 궁금했다. LaunchCharacter를 쓸 때 실제 두 플레이어 화면에서 넉백이 언제 보이는지는 더 확인해 봐야 한다. 방어구 상태를 프로퍼티 리플리케이션으로 공유하는 방향도 이야기했다.",
    "references": [
      {
        "label": "방어구 무게에 따른 이동 속도 계산",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project/commit/4a73f9f69d095184919d9b17f5a5c815cfa4b8db"
      },
      {
        "label": "입력 유지 시간으로 점진적 가속 추가",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project/commit/dfa86615f4e3991dbc9d94d617a9936bf561f833"
      },
      {
        "label": "가속 기준 시간 조정",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project/commit/60a3bf512c7f5bc73a0fafed0cbe33c1820460f8"
      },
      {
        "label": "전투·넉백 컴포넌트와 공격 입력 연결",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project/commit/5473751d44c3ede4490ff980128110cf8e559bf0"
      }
    ],
    "source": [
      "11-05.txt · 튜터 피드백",
      "Don’t Drop · feature-character 커밋"
    ]
  }
];
