window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/11/2026-11-05.js"] = [
  {
    "id": "20261105-dont-drop",
    "date": "2026-11-05",
    "date_end": null,
    "date_label": "2026-11-05",
    "title": "Don’t Drop · 방어구 무게와 이동 가속, 공격 입력 연결",
    "summary": "방어구 무게로 최대 속도를 계산하고, 입력 경과 시간으로 이동 세기를 조절했다. BP에서 테스트한 공격 요청을 캐릭터 C++ 코드에 연결했다.",
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
    "date_basis": "11-05.txt의 팀 공통 튜터 피드백과 11월 5일 feature-character의 본인 커밋.",
    "study_content": "## 방어구 무게로 최대 보행 속도 계산하기\n\n어제는 데이터 테이블에서 기본 이동 값을 읽어 왔다. 오늘은 방어구 무게가 바뀌었을 때 속도를 다시 계산할 수 있도록 ApplyArmorWeightToMovement를 추가했다. 기본 최대 속도에서 ‘방어구 무게 × 속도 감소 계수’를 빼고, 결과가 150보다 작으면 150을 CharacterMovement의 MaxWalkSpeed에 넣도록 했다.\n\n## 이동 키를 누른 시간에 따라 입력 세기 바꾸기\n\n키를 누르자마자 최대 세기로 이동 입력이 들어가는 대신, 누르고 있는 동안 세기가 커지도록 했다. 이동 입력을 받을 때 GetElapsedTime()으로 키를 누른 시간을 읽고, 가속 기준 시간으로 나눈 값을 0.3에서 1 사이로 제한했다. 방어구 무게 쪽에서는 최대 보행 속도를 바꾸고, 여기서는 이동 입력의 세기를 바꾼다.\n\n처음에는 Move()가 다시 호출될 때마다 지역 변수가 새로 생기는데 어떻게 가속이 이어지는지 헷갈렸다. 이어지는 값은 입력 액션이 관리하는 경과 시간이다. Move()에서는 그때마다 Alpha를 다시 구하고 이동 입력에 Alpha × Alpha를 곱한다. Alpha가 0.5면 입력에는 0.25가 곱해지고, 1이면 원래 입력 세기에 도달한다.\n\n기존 Move()는 입력값만 받는데 Instance를 참조해서 빌드가 막혔다. 대화에서 매개변수를 FInputActionInstance로 맞추는 수정을 요청했다. 처음에는 가속 기준 시간을 5초로 두었다가 1.5초로 줄였다. 오늘 마지막 커밋에서는 2초로 조정했다.\n\n## 캐릭터에서 전투 쪽으로 공격 요청 보내기\n\nBP에서 전투 컴포넌트로 요청을 넘기는 테스트 연결은 동작을 확인했다. 데이터 테이블 행을 찾듯 이미 붙어 있는 컴포넌트를 찾아야 할지, 캐릭터에서 직접 만들어 둘지 살펴봤다. 전투 브랜치를 합친 뒤 캐릭터에 전투 컴포넌트와 넉백 컴포넌트를 붙였다. 어제는 공격 키를 누르면 캐릭터의 Attack()에서 BPAttack() 이벤트를 호출하는 데까지 연결했다. 오늘은 같은 공격 입력에서 CombatComponent->RequestAttack()을 호출해 전투 쪽으로 요청을 넘기도록 했다.\n\n## 다이어그램과 지금 연결한 범위\n\n다이어그램에는 이동 입력부터 방어구와 넉백, 동기화까지 이어서 그려 뒀다. 지금 캐릭터 코드에서 따라갈 수 있는 건 이동 설정을 적용하는 부분과 공격 키를 전투 컴포넌트에 전달하는 부분이다. 무게에 따른 이동 속도가 멀티플레이에서도 양쪽에 맞게 적용되는지는 더 확인하고 싶다.\n\n## 팀 공통 튜터 피드백 · 이동 예측과 넉백\n\n팀 피드백에서는 클라이언트에서 이동을 먼저 보여 주고 서버가 결과를 보정하는 흐름을 짚었다. 넉백을 서버에서만 적용하면 반응이 늦어 보일지, LaunchCharacter를 쓸 때 어떻게 동작할지, 방어구 상태를 복제할지도 함께 논의한 항목이다.",
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
      "11-05.txt · 팀 공통 튜터 피드백",
      "Don’t Drop · feature-character 커밋",
      "프로젝트 대화 · 이전 프로젝트 대화 정리 / 기능 명세서 양식 작성"
    ]
  }
];
