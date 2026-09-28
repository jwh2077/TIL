window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/09/2026-09-28.js"] = [
  {
    "id": "20260928-priest",
    "project": "ProjectPriest",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "Git",
      "시연 영상"
    ],
    "phase": "마무리 준비",
    "date_basis": "원문 대화 시각 · 한국 시간",
    "date": "2026-09-28",
    "date_start": "2026-09-28",
    "date_end": null,
    "date_label": "2026-09-28",
    "activity": "team",
    "title": "플레이 영상 준비와 에셋 되돌리기 오류",
    "summary": "플레이 영상에서 보여줄 수류탄 조작을 Q키로 정정하고 컷 편집 방법을 찾아봤다. 에셋을 되돌리는 중에는 Git 오류가 났다.",
    "study_content": "프로젝트 플레이 영상을 준비하면서 수류탄 사용 장면도 보여주려고 했다. 처음에는 우클릭이라고 적었는데 Q키라서 정정했다. 영상 편집 방법과 구간을 자르는 도구도 물어봤다.",
    "learning_process": "영상에서 어떤 장면을 남기고 잘라낼지 이야기했다. 반복되는 전투나 이동 구간을 줄이는 방법을 안내받았지만, 실제로 어떤 도구를 골라 편집했는지와 영상 완성 여부는 아직 기록에 없다.\n\n같은 날 에셋을 되돌리는 과정에서 여러 .uasset 파일에 unable to unlink old와 Invalid argument가 뜨고, 마지막에 Could not reset index file to revision 'HEAD' 오류가 났다. BP_Revenant뿐 아니라 UI와 입력 에셋에서도 같은 오류가 보였다.",
    "mistakes_or_difficulties": [
      "수류탄 조작을 우클릭으로 잘못 적었다가 Q키로 바로잡았다.",
      "Git에서 에셋을 되돌리지 못했다. Unreal Editor 등의 파일 잠금 가능성을 안내받았지만 원인과 해결 결과는 아직 확인되지 않았다."
    ],
    "repository": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project",
    "references": [],
    "source": [
      "ChatGPT 대화 · ProjectPriest · 2026-09-28 17:02~20:23 KST",
      "Git 오류 첨부 이미지 · project-priest-git-error-2026-09-28.png (로컬 원본)"
    ],
    "notice": "영상 준비와 오류 발생까지 남긴 작업 메모다. 영상 편집 완료, Git 오류 해결, 프로젝트 종료 결과는 아직 확인되지 않았다."
  }
];
