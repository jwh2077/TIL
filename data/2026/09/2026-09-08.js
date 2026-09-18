window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/09/2026-09-08.js"] = [
  {
    "id": "20260908-priest",
    "project": "ProjectPriest",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "C++"
    ],
    "phase": "직접 구현",
    "understanding": "구현과 구조 개선 경험",
    "date_basis": "Git 커밋 작성일",
    "result": "코드 변경 이력 확인",
    "date": "2026-09-08",
    "title": "순찰 위치 탐색과 시각 기반 플레이어 감지",
    "summary": "랜덤 순찰 태스크를 추가하고 거리 기반 감지를 시각 기반 감지로 바꾸었다.",
    "study_content": "FindRandomPatrol과 캐릭터 탐색 작업을 추가하고, 몬스터 감지 방식을 거리에서 시야 중심으로 변경했다. 순찰과 플레이어 탐지를 함께 구성해 AI가 주변 상황을 반영하도록 확장했다.",
    "learning_process": "변경 이력의 감지 방식 전환과 현재 AI Perception 코드를 대조했다. 시각 설정과 감지 이벤트에서 대상 참조를 관리하는 코드가 연결된다. 현재 설정값은 후속 변경이 포함될 수 있어 당시 수치로 소급하지 않았다.",
    "application": "순찰 태스크와 감지 관련 컨트롤러·서비스 소스 변경이 확인된다.",
    "commits": [
      "3e4d906",
      "edecb38",
      "82b51e2"
    ],
    "references": [
      {
        "label": "Git 변경 근거 · 3e4d906",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/3e4d906"
      },
      {
        "label": "Git 변경 근거 · edecb38",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/edecb38"
      },
      {
        "label": "Git 변경 근거 · 82b51e2",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/82b51e2"
      }
    ],
    "repository": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project",
    "source": [
      "jwh2077 작성자 Git 변경 이력"
    ],
    "verification_note": "날짜는 커밋 작성일이며 실제 학습 시작일이나 실행 성공일을 뜻하지 않는다.",
    "date_start": "2026-09-08",
    "date_label": "2026-09-08"
  }
];
