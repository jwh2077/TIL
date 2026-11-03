window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-play-settings.js"] = [
  {
    "id": "unreal-play-settings",
    "title": "Unreal 프로젝트·에디터 설정 — 시작 맵, 실행 로그, 멀티플레이 테스트",
    "summary": "Maps & Modes에서 기본 맵과 GameMode 고르기, Standalone 실행 시 -log로 로그 창 열기, PIE에서 서버·클라이언트와 늦은 참가 테스트하기.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "reference",
    "status": "실행·테스트 설정",
    "source_name": "Test 프로젝트의 DefaultEngine.ini와 EditorPerProjectUserSettings.ini · 기존 PIE 설정 기록",
    "source_url": "",
    "related_ids": [
      "20261103-dont-drop",
      "20261006-chatx"
    ],
    "sections": [
      {
        "title": "시작 맵과 기본 GameMode 고르기",
        "html": "<p><strong>Edit → Project Settings → Maps &amp; Modes</strong></p><ul><li><strong>Editor Startup Map</strong> — 에디터에서 프로젝트를 열었을 때 처음 띄울 맵.</li><li><strong>Game Default Map</strong> — 맵을 따로 지정하지 않고 게임을 실행했을 때 열 맵.</li><li><strong>Default GameMode</strong> — 프로젝트의 기본 게임 규칙. 특정 맵에서 다른 규칙이 적용되면 그 맵의 World Settings → GameMode Override도 확인한다.</li></ul><p>임시 Test 프로젝트에서는 두 시작 맵을 모두 Lvl_ThirdPerson으로 지정했다. 맵 설정값은 Config/DefaultEngine.ini에서 GameDefaultMap과 EditorStartupMap으로 찾을 수 있다.</p>"
      },
      {
        "title": "Standalone Game을 켤 때 로그 창도 열기",
        "html": "<p><strong>Edit → Editor Preferences → Level Editor → Play</strong></p><ol><li>검색창에 <code>Additional Launch Parameters</code>를 입력한다.</li><li>Standalone Game의 추가 실행 인자 칸에 <code>-log</code>를 넣는다.</li><li>플레이 버튼 옆 메뉴에서 <strong>Standalone Game</strong>을 선택해 새로 실행한다. 게임 창과 함께 뜨는 로그 창에서 시작 시점의 메시지를 볼 수 있다.</li></ol><p>임시 프로젝트의 <code>EditorPerProjectUserSettings.ini</code>에 저장된 값:</p><pre><code>AdditionalLaunchParameters=-log</code></pre><p>이 값은 게임 프로세스를 시작할 때 전달한다. 실행 중인 에디터 안에서 로그만 볼 때는 <strong>Output Log</strong>를 연다.</p>"
      },
      {
        "title": "멀티플레이 테스트 모드와 늦은 참가",
        "html": "<ul><li><strong>서버와 클라이언트 화면을 비교할 때</strong> — 플레이 메뉴에서 플레이어 수를 고르고 Play Net Mode를 Play as Client로 둔다. 전용 서버에 접속한 클라이언트로 시작한다.</li><li><strong>서버 프로세스에 디버거를 붙일 때</strong> — Level Editor → Play에서 Run Under One Process를 끄고 연결할 프로세스를 구분한다.</li><li><strong>PIE 실행 도중 참가를 시험할 때</strong> — Editor Preferences에서 Allow Late Joining을 검색한다.</li></ul><p>실제 PIE 설정 화면과 서버·클라이언트의 객체 배치는 관련 문서의 전용 서버 노트에 있다.</p>"
      }
    ],
    "references": [
      {
        "label": "Advanced Sessions · Steam 세션 테스트 (초안)",
        "url": "#material=unreal-advanced-sessions"
      },
      {
        "label": "전용 서버 테스트와 PIE 설정 화면",
        "url": "#material=unreal-network-testing"
      },
      {
        "label": "Epic · 프로젝트 설정과 Maps & Modes",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/project-section-of-the-unreal-engine-project-settings"
      },
      {
        "label": "Epic · 추가 실행 인자",
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/command-line-arguments-in-unreal-engine"
      }
    ],
    "quick_links": [
      {
        "label": "시작 맵",
        "section": "시작 맵과 기본 GameMode 고르기"
      },
      {
        "label": "시작 로그",
        "section": "Standalone Game을 켤 때 로그 창도 열기"
      },
      {
        "label": "PIE 테스트",
        "section": "멀티플레이 테스트 모드와 늦은 참가"
      }
    ]
  }
];
