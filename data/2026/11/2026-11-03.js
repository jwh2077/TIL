window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/11/2026-11-03.js"] = [
  {
    "id": "20261103-dont-drop",
    "date": "2026-11-03",
    "date_end": null,
    "date_label": "2026-11-03",
    "title": "Don’t Drop · 캐릭터 이동 데이터와 Steam 세션 테스트 준비",
    "summary": "이동 속도와 방어구 무게에 따른 보정값을 FPlayerDataRow에 묶었다. 오전 회의 뒤에는 임시 프로젝트의 Steam 세션 설정과 친구 초대 수락 흐름을 살펴봤다.",
    "project": "Don’t Drop",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "C++",
      "멀티플레이",
      "협업"
    ],
    "activity": "team",
    "date_start": "2026-11-03",
    "date_basis": "11-3.txt의 회의·피드백 메모와 feature-character의 11월 3일 작업 기록.",
    "study_content": "## 다이어그램에서 데이터 테이블로\n\n어제 그림에 적어 둔 캐릭터 이동 값을 오늘은 FPlayerDataRow로 묶었다. 최대 속도, 가속도, 감속도, 지면 마찰력을 따로 두고, 방어구 무게에 따른 속도 감소 계수와 최대 중력 배율, 시점 감도도 넣었다. 오늘 커밋한 범위는 데이터 테이블 한 행의 구조까지다.\n\n기본 캐릭터와 플레이어 컨트롤러 파일은 Character 폴더로 옮겼다. 로컬에서는 기존 Move가 입력을 받아 컨트롤러의 Yaw를 기준으로 앞과 옆 방향을 구한 뒤 AddMovementInput에 넘기는 부분을 따라가며 주석을 정리했다.\n\n## 로비 테스트에서 살펴본 것\n\n오전 회의 뒤 UE 5.6 임시 프로젝트에서 Advanced Sessions를 살펴봤다. Standalone Game 실행 인자에 -log를 넣어 시작할 때부터 로그 창을 볼 수 있게 했다. Steam에 프로젝트 이름 대신 Spacewar가 뜨는 이유도 물어봤는데, 테스트용 앱 ID가 480으로 잡혀 있었다.\n\n친구 초대는 게임 인스턴스에서 수락 이벤트를 받아야 한다는 피드백을 들었다. 다음에 볼 부분은 OnSessionInviteAccepted가 들어오는지, 거기서 받은 세션으로 실제 참가하는지다. 강제 종료 뒤 세션 생성이나 검색이 안 되는 경우에는 플러그인의 C++ 코드에서 어느 단계가 실패하는지 살펴보라는 조언도 받았다.\n\n## 팀에서 맞춘 작업 범위\n\nGameMode, GameState, PlayerState, GameInstance는 여러 담당이 같이 쓰게 돼서 필요한 인터페이스와 작업할 사람을 문서에 적고 협의했다. 관전 모드는 플레이어 컨트롤러에서 로컬로 처리하는 방향을 이야기했다. 에셋은 각자 로컬에서 테스트하고, 적용할 파일은 담당자가 모아서 전달하기로 했다.",
    "references": [
      {
        "label": "캐릭터·컨트롤러 파일 이동",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project/commit/6ea494f4face200baebab385b1baf231bc1e21dc"
      },
      {
        "label": "FPlayerDataRow 구조체 추가",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project/commit/93525ef07798f7511783e13d50fa0e1807db5fc0"
      },
      {
        "label": "Unreal 프로젝트·에디터 설정",
        "url": "#material=unreal-play-settings"
      },
      {
        "label": "Advanced Sessions · Steam 세션 테스트 (초안)",
        "url": "#material=unreal-advanced-sessions"
      }
    ],
    "source": [
      "11-3.txt · 회의와 튜터 피드백",
      "Test 프로젝트 설정 · feature-character 커밋과 캐릭터 작업 파일"
    ]
  }
];
