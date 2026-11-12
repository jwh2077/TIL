window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/11/2026-11-12.js"] = [
  {
    "id": "20261112-dont-drop",
    "date": "2026-11-12",
    "date_end": null,
    "date_label": "2026-11-12",
    "title": "Don’t Drop · 외형 테이블 구성과 스틱맨 에셋 검토",
    "summary": "캐릭터 외형을 데이터 테이블로 구성하고 고정 파츠와 선택 파츠, 좌우 신발을 함께 적용하는 방식을 정리했다. 스틱맨 에셋은 애니메이션 호환과 체형 표현을 살펴보며 계속 검토 중이다.",
    "project": "Don’t Drop",
    "primary_topic": "unreal",
    "tags": [
      "Unreal",
      "C++",
      "데이터 테이블",
      "애니메이션",
      "협업"
    ],
    "activity": "team",
    "date_start": "2026-11-12",
    "date_basis": "11월 12일 프로젝트 대화, feature-character 커밋 기록과 사용자의 스틱맨 에셋 검토 중이라는 설명.",
    "study_content": "## 외형을 테이블로 구성하기\n\n캐릭터 외형을 데이터 테이블에서 읽어 적용하는 작업을 진행했다. 몸통 메시를 먼저 적용하고, 나머지 파츠는 기본 메시의 본 자세를 따라가도록 연결했다. 파츠 ID와 메시를 묶어 관리하고, 같은 파츠를 바꿀 때는 기존 컴포넌트를 다시 사용하는 구조다.\n\n외형 선택은 파츠마다 함수를 늘리기보다 선택한 값들을 배열로 모아 한 번에 적용하는 방향으로 정리했다. 캐릭터가 다시 생성될 때 선택 정보가 사라지지 않도록 PlayerState에 두고 캐릭터에서 받아오는 구성도 작업에 포함했다.\n\n## 고정 파츠와 함께 바뀌는 파츠\n\n모든 부위를 커스터마이징 대상으로 만들면 항목이 너무 많아질 것 같았다. 기본으로 적용할 파츠와 선택할 수 있는 파츠를 구분하도록 했다. 신발처럼 좌우 메시가 따로 있는 경우에는 하나를 선택했을 때 두 메시를 함께 적용할 수 있게 구성했다.\n\n## 스틱맨 에셋 검토\n\n스틱맨 에셋도 후보로 살펴보고 있다. 키까지 함께 커지는 방식보다는 높이는 유지하고 몸의 폭과 두께가 달라지는 모습을 생각했다. 무게나 체력에 따라 체형을 바꾸는 방법도 질문했다.\n\n스켈레톤만 바꿔서는 기존 애니메이션이 적용되지 않아 리타게팅 방법을 살펴봤다. 걷기와 공격 애니메이션을 사용할 수 있는지, 비슷한 무료 에셋은 어떤 것이 있는지도 비교했다. 스틱맨은 아직 채택을 확정하지 않았고 계속 검토 중이다.",
    "references": [
      {
        "label": "외형 구조와 파츠 구성 커밋",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project/commit/3844c39"
      },
      {
        "label": "기본 외형 적용 커밋",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project/commit/ad73d65"
      },
      {
        "label": "외형 선택과 파츠 적용 커밋",
        "url": "https://github.com/NBcampUnrealTrack/10th-Team2-CH4-Project/commit/6136b22"
      },
      {
        "label": "이전 기록 · 캐릭터 외형 연결과 흔들림 수정",
        "url": "#record=20261111-dont-drop"
      }
    ],
    "source": [
      "11월 12일 프로젝트 대화와 사용자 확인",
      "feature-character의 11월 12일 커밋 기록"
    ]
  }
];
