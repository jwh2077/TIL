window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/11/2026-11-04.js"] = [
  {
    "id": "20261104-dont-drop",
    "date": "2026-11-04",
    "date_end": null,
    "date_label": "2026-11-04",
    "title": "Don’t Drop · 이동 데이터 적용과 공격 입력 연결",
    "summary": "데이터 테이블에서 이동 값을 읽어 적용했다. 컨트롤러 생성과 입력 설정을 살펴보고, 공격 키를 블루프린트 이벤트에 연결했다.",
    "project": "Don’t Drop",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "C++",
      "입력",
      "멀티플레이"
    ],
    "activity": "team",
    "date_start": "2026-11-04",
    "date_basis": "11-4.txt 회의 메모와 11월 4일 feature-character의 본인 커밋.",
    "study_content": "## 데이터 테이블 값을 캐릭터 이동에 적용하기\n\n어제는 FPlayerDataRow에 어떤 값을 넣을지 정했다. 오늘은 PlayerData에 지정한 행 이름으로 FindRow를 호출하고, 행을 찾으면 최대 보행 속도, 가속도, 보행 감속도, 지면 마찰력을 CharacterMovement에 넣도록 했다. 방어구 무게까지 반영하는 계산과는 별개로, 우선 기본 이동 값을 테이블에서 읽는 부분을 연결했다.\n\n플레이를 눌렀을 때 플레이어 컨트롤러를 생성하지 못한다는 오류가 났다. 게임모드가 추상 C++ 컨트롤러를 가리키고 있어 어떤 블루프린트를 지정해야 하는지 살펴봤다. 그다음에는 이동 입력이 들어오지 않아 캐릭터의 입력 액션과 컨트롤러의 매핑 컨텍스트 설정을 확인했다. 이동 데이터 필드에는 초기값을 넣고, PlayerDataTable 에셋을 캐릭터용 폴더로 옮겼다.\n\n## 공격 키에서 블루프린트까지\n\nIA_Attack을 입력 매핑에 추가하고, 캐릭터의 Attack()에서 BPAttack()을 호출하도록 했다. 블루프린트에서 이 이벤트를 받아 다음 동작을 붙일 수 있다. 입력이 들어오는지 구분하려고 화면에 ‘공격 입력’을 띄우는 코드도 넣었다. 오늘 연결한 범위는 공격 입력을 전달하는 지점까지다.\n\n## 팀 회의 · 초대 수락과 닉네임 확인\n\n팀에서는 Steam 친구 초대 수락 이벤트를 연결했는데도 방에 들어가지 못하는 문제가 남아 있었다. 팀에서 확인할 항목으로 UE 5.6 설정 파일과 Steam Sockets가 나왔다.\n\n메인 화면에서 닉네임을 정하고 리슨 서버에 접속하는 흐름도 이야기했다. 서버에서 이름이 비었거나 허용하지 않는 문자가 들어 있으면 클라이언트에 다시 요청하고, 정해진 시간 안에 유효한 값을 받지 못하면 접속 실패로 처리하는 안이다.",
    "references": [
      {
        "label": "이동 데이터 적용과 입력 매핑 정리",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project/commit/d64d1edc1da709762a701124a24ed01a675c1a1f"
      },
      {
        "label": "캐릭터 입력 액션과 컨트롤러 설정",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project/commit/396b72b947c29fcead14bc4b78c9f57c9eb15bd5"
      },
      {
        "label": "이동 필드 초기화와 테이블 이동",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project/commit/c973632dd65037375acc50e9d84353a94257db8f"
      },
      {
        "label": "공격 입력과 BPAttack 이벤트",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project/commit/7425e2b28d1001f08035aa793738562e6465744f"
      },
      {
        "label": "Advanced Sessions · Steam 세션 테스트",
        "url": "#material=unreal-advanced-sessions"
      }
    ],
    "source": [
      "11-4.txt · 회의 메모",
      "Don’t Drop · feature-character 커밋",
      "프로젝트 대화 · 이전 프로젝트 대화 정리"
    ]
  }
];
