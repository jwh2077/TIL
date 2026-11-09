window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-advanced-sessions.js"] = [
  {
    "id": "unreal-advanced-sessions",
    "title": "Advanced Sessions · Steam 세션 테스트",
    "summary": "UE 5.6 테스트 프로젝트의 Steam 앱 ID와 친구 초대 노드 정리. 초대를 보내는 위젯과 수락 이벤트를 받는 게임 인스턴스의 연결 위치를 나눴다.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "draft",
    "status": "게시 준비 초안 · 초대 수락과 참가 테스트 전",
    "source_name": "11-3.txt · 팀 공통 튜터 피드백 · Test 프로젝트의 DefaultEngine.ini, AdvancedFriendsLibrary.h, AdvancedFriendsGameInstance.h",
    "source_url": "",
    "related_ids": [
      "20261103-dont-drop",
      "20261102-dont-drop",
      "20261104-dont-drop"
    ],
    "sections": [
      {
        "title": "Standalone Game으로 실행",
        "text": "Advanced Sessions 플러그인을 넣은 Test 프로젝트에서 플레이 메뉴의 Standalone Game을 선택한다. 시작부터 로그 창을 열려면 관련 문서의 추가 실행 인자(-log) 설정을 참고한다."
      },
      {
        "title": "Steam에 Spacewar로 표시될 때",
        "text": "Config/DefaultEngine.ini에서 온라인 서비스와 테스트 앱 ID를 확인한다. 이 프로젝트는 SteamDevAppId에 Spacewar 테스트 앱 ID인 480을 사용한다.",
        "code": "[OnlineSubsystem]\nDefaultPlatformService=Steam\n\n[OnlineSubsystemSteam]\nbEnabled=true\nSteamDevAppId=480"
      },
      {
        "title": "친구 초대 · 로비 위젯에서 초대 보내기",
        "html": "<p>예를 들어 로비 위젯 블루프린트의 <strong>Event Graph</strong>에서 빈 곳을 우클릭하고 <code>Send Session Invite to Friend</code>를 검색한다. 초대 버튼의 <code>OnClicked</code> 실행 핀을 이 노드에 연결한다. <code>Player Controller</code>에는 위젯의 <code>Get Owning Player</code>를, <code>Friend Unique Net Id</code>에는 초대할 친구의 고유 ID를 넣는다.</p>"
      },
      {
        "title": "초대 수락 · 게임 인스턴스에서 세션 참가",
        "html": "<ol><li><code>AdvancedFriendsGameInstance</code>를 부모로 쓰는 게임 인스턴스 블루프린트를 연다. 새로 만들 때는 콘텐츠 브라우저에서 <strong>Blueprint Class → All Classes</strong>를 열고 이 부모 클래스를 검색한다.</li><li>왼쪽 <strong>My Blueprint → Functions → Override</strong> 목록에서 <code>On Session Invite Accepted</code>를 선택한다. Event Graph에 수락 이벤트가 생긴다.</li><li>이벤트의 실행 핀에서 끌어 <code>Join Session</code>을 검색한다. 이벤트의 <code>Session to Join</code> 출력을 <code>Search Result</code> 입력에, 참가할 로컬 플레이어의 컨트롤러를 <code>Player Controller</code> 입력에 연결한다.</li></ol><p>이벤트가 목록에 없으면 <strong>Class Settings → Parent Class</strong>를 확인한다. 실행할 때 이 블루프린트를 쓰려면 <strong>Project Settings → Maps &amp; Modes → Game Instance Class</strong>에 지정한다.</p><p>팀에서 다음에 확인할 지점은 두 곳이다. 초대 수락 이벤트가 들어왔는지, 그 뒤 Join Session이 성공했는지를 각각 확인한다.</p>"
      }
    ],
    "references": [
      {
        "label": "프로젝트·에디터 설정과 시작 로그",
        "url": "#material=unreal-play-settings"
      },
      {
        "label": "Advanced Sessions · 엔진 버전별 플러그인",
        "url": "https://vreue4.com/advanced-sessions-binaries"
      }
    ],
    "quick_links": [
      {
        "label": "Steam 앱 ID",
        "section": "Steam에 Spacewar로 표시될 때"
      },
      {
        "label": "친구 초대",
        "section": "친구 초대 · 로비 위젯에서 초대 보내기"
      },
      {
        "label": "수락·참가",
        "section": "초대 수락 · 게임 인스턴스에서 세션 참가"
      }
    ],
    "notice": "팀 공통 피드백에서 나온 초대 수락 방법과 임시 Test 프로젝트의 플러그인 선언을 함께 정리했다. 11월 4일 팀 회의에서는 초대를 수락한 뒤 방에 들어가지 못하는 문제가 남아 있었다."
  }
];
