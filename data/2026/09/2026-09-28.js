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
    "title": "플레이 영상 정리와 에셋 되돌리기 오류",
    "summary": "플레이 영상에 일반 전투와 인벤토리 화면, 구역 이동과 보스전이 담겼다. 에셋을 되돌리는 중 발생한 Git 오류는 따로 남겼다.",
    "study_content": "프로젝트 플레이 영상을 준비하면서 수류탄 사용 장면도 보여주려고 했다. 처음에는 우클릭이라고 적었는데 Q키라서 정정했다. 영상 편집 방법과 구간을 자르는 도구도 물어봤다.\n\n남겨둔 Project (1).mp4는 약 4분 2초 분량이다. 시작 메뉴에서 일반 전투로 넘어가고, 인벤토리 화면과 다음 구역 이동, 보스전이 담겨 있다. 적 수가 0이 되면 교회 문과 상호작용하라는 안내가 뜨는 장면도 있다.",
    "learning_process": "영상에서는 체력과 탄약, 남은 적 수가 표시되는 상태로 전투가 이어진다. 중간에 Stage·Inventory·Craft 메뉴가 보이고, 보스전 뒤에는 석궁 전투와 여러 적이 모인 장면도 이어진다. 플레이 장면은 남았지만 사용한 편집 도구나 최종 제출본인지 여부는 따로 확인되지 않았다.\n\n같은 날 에셋을 되돌리는 과정에서는 여러 .uasset 파일에 unable to unlink old와 Invalid argument가 뜨고, 마지막에 Could not reset index file to revision 'HEAD' 오류가 났다. BP_Revenant뿐 아니라 UI와 입력 에셋에서도 같은 오류가 보였다. 영상이 있다는 것과 이 Git 오류가 해결됐는지는 별개로 남겨뒀다.",
    "mistakes_or_difficulties": [
      "수류탄 조작을 우클릭으로 잘못 적었다가 Q키로 바로잡았다.",
      "Git에서 에셋을 되돌리지 못했다. Unreal Editor 등의 파일 잠금 가능성을 안내받았지만 원인과 해결 결과는 아직 확인되지 않았다."
    ],
    "repository": "https://github.com/NBcampUnrealTrack/10th-Team2-CH3-Project",
    "references": [],
    "source": [
      "ChatGPT 대화 · ProjectPriest · 2026-09-28 17:02~20:23 KST",
      "Git 오류 첨부 이미지 · project-priest-git-error-2026-09-28.png (로컬 원본)",
      "Project (1).mp4 · 사용자 제공 로컬 영상 · 2026-09-29 주요 장면 확인"
    ],
    "notice": "9/28 대화 기록에 제공된 영상을 9/29 대조해 보강했다. 영상의 촬영·편집일은 확인되지 않았다. 원본: Project (1).mp4 (로컬 보관). 영상에 보이는 전투만으로 공격 판정 오류의 완전한 해결이나 최종 클리어를 단정하지 않는다."
  }
];
