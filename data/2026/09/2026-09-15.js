window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/09/2026-09-15.js"] = [
  {
    "id": "20260915-priest",
    "project": "ProjectPriest",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "C++"
    ],
    "phase": "직접 구현",
    "date_basis": "Git 커밋 작성일",
    "date": "2026-09-15",
    "title": "몬스터 사망 후 이동을 멈추도록 수정",
    "summary": "몬스터가 죽은 뒤에도 움직이는 문제 때문에 Die의 제어 코드를 바꿨다.",
    "study_content": "몬스터가 죽은 뒤에도 움직이는 문제 때문에 Die의 제어 코드를 바꿨다.",
    "learning_process": "AIController가 없으면 반환하고, 있으면 StopMovement로 이동을 멈춘 뒤 UnPossess를 호출하도록 추가했다.",
    "commits": [
      "6f5661a"
    ],
    "references": [
      {
        "label": "변경 코드 · 6f5661a",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/6f5661a"
      }
    ],
    "repository": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project",
    "source": [
      "jwh2077 작성자 Git 변경 이력"
    ],
    "verification_note": "날짜는 커밋 작성일이며 실제 학습 시작일이나 실행 성공일을 뜻하지 않는다.",
    "date_start": "2026-09-15",
    "date_label": "2026-09-15",
    "activity": "team",
    "notice": "코드 변경 기록을 바탕으로 적었다. 게임 실행 결과는 확인되지 않았다."
  }
];
