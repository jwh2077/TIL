// 자료실 색인: 문서 ID와 기존 소제목으로 연결합니다. 본문을 복사하지 않습니다.
window.TIL_LIBRARY_NAVIGATION = [
  {
    "id": "cpp",
    "title": "C++",
    "hint": "문법·메모리·클래스와 설계",
    "topics": [
      {
        "id": "syntax",
        "title": "문법·함수",
        "documents": [
          "file-continue",
          "velog-20260712-001",
          "velog-20260716-001"
        ]
      },
      {
        "id": "memory",
        "title": "배열·메모리",
        "documents": [
          "velog-20260706-001",
          "velog-20260710-001"
        ]
      },
      {
        "id": "design",
        "title": "클래스·설계",
        "documents": [
          "velog-20260709-001",
          "project-priest-oop-notes"
        ]
      }
    ]
  },
  {
    "id": "stl",
    "title": "자료구조·STL",
    "hint": "선택 기준·컨테이너·문자열과 탐색",
    "topics": [
      {
        "id": "selection",
        "title": "개념·선택 기준",
        "documents": [
          "stl-foundation",
          "concept-bigo",
          "stl-selection"
        ]
      },
      {
        "id": "containers",
        "title": "컨테이너 사용법",
        "documents": [
          "stl-sequence",
          "stl-associative",
          "stl-adaptor"
        ]
      },
      {
        "id": "strings",
        "title": "문자열·정렬·검색",
        "documents": [
          "stl-algorithm"
        ]
      },
      {
        "id": "graph",
        "title": "그래프·트리",
        "documents": [
          "graph-tree"
        ]
      }
    ]
  },
  {
    "id": "unreal",
    "title": "Unreal",
    "hint": "빌드·Actor·멀티플레이·AI",
    "topics": [
      {
        "id": "build",
        "title": "빌드·헤더 설정",
        "documents": [
          "unreal-build-flow",
          "unreal-build-settings"
        ]
      },
      {
        "id": "actor",
        "title": "Actor·컴포넌트",
        "documents": [
          "velog-20260810-001"
        ]
      },
      {
        "id": "unreal-containers",
        "title": "컨테이너",
        "documents": [
          "unreal-containers"
        ]
      },
      {
        "id": "network",
        "title": "멀티플레이",
        "documents": [
          "unreal-multiplayer-basics",
          "unreal-network-testing"
        ],
        "shortcuts": [
          [
            "서버 종류와 접속 과정",
            "unreal-multiplayer-basics",
            "P2P·Listen Server·Dedicated Server"
          ],
          [
            "GameMode·PlayerState 역할",
            "unreal-multiplayer-basics",
            "클래스별 역할"
          ],
          [
            "전용 서버 테스트 설정",
            "unreal-network-testing",
            "전용 서버 테스트 — PIE 설정"
          ],
          [
            "내 화면에만 UI 띄우기",
            "unreal-network-testing",
            "내 화면에만 UI 표시 — IsLocalController()"
          ],
          [
            "서버·클라이언트 실행 구분",
            "unreal-network-testing",
            "서버인지 클라이언트인지 구분 — GetNetMode()"
          ],
          [
            "연결을 관리하는 구조",
            "unreal-network-testing",
            "연결 구조 — NetDriver와 NetConnection"
          ],
          ["전용 서버와 두 클라이언트", "unreal-network-testing", "전용 서버와 두 클라이언트 — 각자 월드를 가진다"],
          ["Owner에서 연결 찾기", "unreal-network-testing", "GetNetConnection() — Owner에서 연결까지"]
        ]
      },
      {
        "id": "ai",
        "title": "AI·행동 제어",
        "documents": [
          "project-priest-ai-notes"
        ]
      }
    ]
  }
];
