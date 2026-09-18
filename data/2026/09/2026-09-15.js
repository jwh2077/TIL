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
    "understanding": "구현과 구조 개선 경험",
    "date_basis": "Git 커밋 작성일",
    "result": "코드 변경 이력 확인",
    "date": "2026-09-15",
    "title": "몬스터 사망 후 이동을 멈추도록 수정",
    "summary": "사망 함수에 컨트롤러 검사·이동 중지·UnPossess를 추가했다.",
    "study_content": "사망한 몬스터가 계속 움직이는 문제를 다룬 변경이다. Die 함수에서 AI 컨트롤러를 검사하고 StopMovement와 UnPossess를 호출하는 코드를 추가했다.",
    "learning_process": "문제 이름이 명시된 커밋과 실제 diff를 대조했다. 날짜 없는 메모에는 컨트롤러를 유지한 채 중지하는 방향도 기록돼 있지만, 9월 15일 변경에는 UnPossess가 포함돼 있어 두 설명을 같은 상태로 합치지 않았다.",
    "application": "컨트롤러가 없을 때의 반환 검사, StopMovement, UnPossess 추가가 diff로 확인된다. 실행 성공을 입증하는 영상·로그는 이번 검토에 포함하지 않았다.",
    "commits": [
      "6f5661a"
    ],
    "references": [
      {
        "label": "Git 변경 근거 · 6f5661a",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project/commit/6f5661a"
      }
    ],
    "repository": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project",
    "source": [
      "jwh2077 작성자 Git 변경 이력"
    ],
    "verification_note": "날짜는 커밋 작성일이며 실제 학습 시작일이나 실행 성공일을 뜻하지 않는다.",
    "date_start": "2026-09-15",
    "date_label": "2026-09-15"
  }
];
