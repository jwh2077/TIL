window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/undated/note-tem-016.js"] = [
  {
    "id": "note-tem-016",
    "date": null,
    "project": null,
    "topic": "Unreal·입력과 카메라",
    "title": "비행체 회전과 카메라 회전 분리 설계",
    "summary": "Roll 고정 시 화면 회전 이상을 기록하고 비행체와 카메라의 회전을 분리하는 방향을 고민했다.",
    "learning_process": "일정 속도 이상으로 화면을 돌릴 때 비정상적으로 빠르게 회전하는 것처럼 보이는 현상을 기록했다. 카메라가 Roll의 영향을 받지 않도록 하고 별도 조작을 두는 방향을 결정했다고 메모했다.",
    "study_content": "드론 형태 비행체, 정지 시 수평 복귀, Yaw만 공유하는 카메라, 방향 입력에 따른 기울기를 기획했다.",
    "application": null,
    "status": "문제 관찰·설계 후보",
    "source": [
      "롤값을 고정시키니까 화면을 일정속도 이상으로 돌렸을때.txt"
    ],
    "unresolved": [
      "프로젝트와 날짜 확인",
      "좌표 축 메모와 실제 입력·회전 구현 대조",
      "최종 수정 결과 미확인"
    ],
    "primary_topic": "unreal",
    "understanding": "학습·설계 메모",
    "verification_note": "학습 날짜가 확인되지 않은 기록이다. 계획과 현재 구현을 구분해 읽는다.",
    "date_start": null,
    "date_label": "날짜 미확인"
  }
];
