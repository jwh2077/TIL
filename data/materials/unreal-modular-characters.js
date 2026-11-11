window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-modular-characters.js"] = [
  {
    "id": "unreal-modular-characters",
    "title": "Unreal 모듈형 캐릭터 — Leader Pose 연결과 숨긴 메시의 본 갱신",
    "summary": "외형 파츠를 기본 Mesh에 연결하는 방법과 기본 메시를 숨겼을 때 본 자세를 계속 갱신하는 설정.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "draft",
    "status": "초안",
    "source_name": "Epic Games 공식 문서 · 11월 11일 Don’t Drop 테스트",
    "source_url": "https://dev.epicgames.com/documentation/unreal-engine/working-with-modular-characters-in-unreal-engine?lang=ko",
    "related_ids": [
      "20261111-dont-drop"
    ],
    "sections": [
      {
        "title": "기준 메시와 외형 파츠",
        "text": "모듈형 캐릭터는 몸통·얼굴·의상처럼 나뉜 스켈레탈 메시를 조합한다. Leader Pose를 쓰면 외형 파츠가 기준 메시의 본 자세를 공유한다. 파츠마다 애니메이션을 따로 계산할 필요는 줄지만 렌더링은 메시별로 이루어진다. 파츠의 본 계층은 기준 메시에서 대응하는 본과 구조가 맞아야 한다."
      },
      {
        "title": "블루프린트에서 Leader Pose 연결",
        "html": "<h3>파츠와 기준 메시 연결</h3><ol><li>캐릭터 블루프린트의 <strong>Construction Script</strong>에서 <code>Set Leader Pose Component</code>를 추가한다.</li><li>자세를 따라갈 외형 파츠를 <code>Target</code>에 연결한다.</li><li>기준이 되는 기본 <code>Mesh</code>를 <code>New Leader Bone Component</code>에 연결한다.</li></ol><figure><a href=\"assets/images/dont-drop-leader-pose-20261111.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/images/dont-drop-leader-pose-20261111.png\" alt=\"외형 파츠를 Target에, 기본 Mesh를 New Leader Bone Component에 연결한 블루프린트\" loading=\"lazy\" width=\"619\" height=\"432\" style=\"display:block;max-width:100%;height:auto\"></a><figcaption class=\"caption\">Don’t Drop 테스트에서 외형 파츠를 기본 Mesh에 연결한 화면.</figcaption></figure>"
      },
      {
        "title": "기본 메시를 숨긴 뒤 흔들릴 때",
        "html": "<p>기준 메시를 <code>Hidden in Game</code>으로 숨긴 뒤 외형 파츠가 흔들린다면, 기준 메시 컴포넌트의 <code>Visibility Based Anim Tick Option</code>을 확인한다.</p><h3>숨긴 메시의 본 갱신</h3><p><strong>기준 Mesh 선택 → Visibility Based Anim Tick Option → Always Tick Pose and Refresh Bones</strong></p><p>이 설정은 기준 메시가 화면에 보이지 않아도 애니메이션과 본 자세를 계속 갱신한다. 11월 11일 테스트에서는 <code>SKM_Default_Sidekick</code>을 숨긴 채 이 옵션만 바꿔 다시 실행하니 흔들림이 사라졌다.</p>"
      },
      {
        "title": "Leader Pose·Copy Pose·Mesh Merge 비교",
        "html": "<table><thead><tr><th>방법</th><th>언제 쓰는가</th><th>고려할 점</th></tr></thead><tbody><tr><td>Leader Pose</td><td>파츠가 기준 자세를 그대로 따라갈 때</td><td>구성이 간단하다. 파츠별 독립 애니메이션과 물리 시뮬레이션에는 제한이 있다.</td></tr><tr><td>Copy Pose from Mesh</td><td>기준 자세에 파츠별 애니메이션이나 물리를 추가할 때</td><td>일치하는 본의 자세를 복사한다. 파츠마다 애니메이션 그래프를 평가한다.</td></tr><tr><td>Skeletal Mesh Merge</td><td>파츠를 한 메시로 합쳐 렌더링 비용을 줄일 때</td><td>병합 준비와 생성 비용이 든다. 모프 타깃은 기본 병합에서 전달되지 않는다.</td></tr></tbody></table><p>구성 방식 비교는 Epic Games 공식 문서를 바탕으로 정리했다.</p>"
      }
    ],
    "quick_links": [
      {
        "label": "BP 연결",
        "section": "블루프린트에서 Leader Pose 연결"
      },
      {
        "label": "숨긴 메시 흔들림",
        "section": "기본 메시를 숨긴 뒤 흔들릴 때"
      },
      {
        "label": "구성 방식 비교",
        "section": "Leader Pose·Copy Pose·Mesh Merge 비교"
      }
    ]
  }
];
