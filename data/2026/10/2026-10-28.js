window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/10/2026-10-28.js"] = [
  {
    "id": "20261028-cx",
    "date": "2026-10-28",
    "date_start": "2026-10-28",
    "date_end": null,
    "date_label": "2026-10-28",
    "date_basis": "사용자가 제공한 TIL_CX/2026-10-28.md의 당일 질문·학습 기록. 커밋일이나 영상 업로드일로 정한 날짜가 아님.",
    "title": "CX · 서버 실행과 PlayerState 설정 확인",
    "project": "CX",
    "primary_topic": "unreal",
    "activity": "personal",
    "tags": ["Unreal", "멀티플레이", "PlayerState", "PIE"],
    "summary": "서버 실행 모드, PlayerState 클래스 지정과 초기화 시점, 맵의 외부 액터 파일을 구분해서 봤다.",
    "study_content": "CX 프로젝트를 실행하면서 서버 콘솔이 뜨는 조건과 PlayerState 관련 오류를 물어봤다.\n\n리슨 서버는 플레이어가 참여하면서 서버 역할도 맡고, 전용 서버는 플레이 화면 없이 서버 역할을 한다. 에디터의 Play As Client와 별도 서버 실행에 사용하는 -server -log를 구분해서 봤다. Run Under One Process는 서버 종류가 아니라 실행 인스턴스를 같은 프로세스에서 돌릴지 정하는 옵션이었다.\n\n헤더를 포함해서 타입을 사용할 수 있게 하는 것과, GameMode의 PlayerStateClass에 실제로 생성할 클래스를 지정하는 것도 다른 일이었다. 컨트롤러가 있다고 해서 커스텀 PlayerState까지 준비된 것은 아니었다. 위젯에서 Accessed None이 나왔을 때도 참조가 아직 준비되지 않은 것인지, 예상한 타입으로 가져오지 못한 것인지 나눠서 봐야 했다.\n\n맵의 __ExternalActors__ 폴더에는 이름을 알아보기 어려운 .uasset 파일들이 있었다. 액터를 별도 패키지로 저장한 맵 구성 데이터라서, 이름이 낯설다고 임시 파일로 생각하면 안 됐다.",
    "notice": "시연 영상은 과제 결과물로 함께 연결했다. 이 글에는 내가 질문하며 정리한 내용을 적었고, 영상 속 후반 기능 구현·자동 검증·영상 제작을 직접 수행한 학습 성과로 적지는 않았다.",
    "references": [
      {"label": "분노의 질주 · CX 필수기능 시연", "url": "https://youtu.be/-iS0zHFAwEs"},
      {"label": "멀티플레이 구조와 실행 위치", "url": "#material=unreal-multiplayer-basics"}
    ],
    "source": ["TIL_CX/2026-10-28.md · 사용자 제공 학습 메모", "TIL_CX/README.md · 날짜 근거와 작성 범위"]
  }
];
