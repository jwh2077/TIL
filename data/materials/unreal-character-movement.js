window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-character-movement.js"] = [
  {
    "id": "unreal-character-movement",
    "title": "Unreal Character Movement — 이동 속도·가속·감속·회전",
    "summary": "최대 속도, 가속, 방향 전환, 입력을 놓은 뒤 감속에 영향을 주는 값을 상황별로 찾는 노트.",
    "kind": "note",
    "topic": "unreal",
    "topics": [
      "unreal"
    ],
    "publication": "draft",
    "status": "초안",
    "source_name": "Epic Games 공식 API 문서 · 11월 6일·9일·10일 Don’t Drop 이동 작업 기록",
    "source_url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/UCharacterMovementComponent",
    "related_ids": [
      "20261106-dont-drop",
      "20261109-dont-drop",
      "20261110-dont-drop"
    ],
    "sections": [
      {
        "title": "걷기 속도와 출발 가속",
        "html": "<p>캐릭터 블루프린트의 컴포넌트 목록에서 <strong>Character Movement</strong>를 선택하고 Details에서 필요한 설정 이름을 검색한다. C++의 <code>ACharacter</code>에서는 <code>GetCharacterMovement()</code>로 접근한다.</p><h3>속도와 가속 설정</h3><table><thead><tr><th>확인할 상황</th><th>설정</th><th>역할</th></tr></thead><tbody><tr><td>계속 걸을 때 얼마나 빠른가</td><td><code>MaxWalkSpeed</code></td><td>지상 보행 속도의 상한</td></tr><tr><td>입력을 넣으면 얼마나 빨리 속도가 붙는가</td><td><code>MaxAcceleration</code></td><td>입력으로 적용할 수 있는 가속도의 상한</td></tr><tr><td>움직이는 중 방향을 얼마나 빨리 바꾸는가</td><td><code>GroundFriction</code></td><td>지상에서 방향 전환에 영향을 주는 마찰</td></tr><tr><td>입력을 놓으면 얼마나 빨리 멈추는가</td><td><code>BrakingDecelerationWalking</code></td><td>보행 중 가속 입력이 없을 때 적용되는 감속. 정지 거리에는 제동 마찰도 영향을 준다.</td></tr></tbody></table><h3>출발 속도 조정</h3><p>Don’t Drop의 <code>StartMoveSpeed</code>는 프로젝트에서 별도로 추가한 출발 속도다. 이 값만 높였을 때 출발 직후 급하게 느려져 대시처럼 보였다. 출발이 튀는 경우에는 커스텀 출발 속도와 <code>MaxAcceleration</code>을 따로 확인한다.</p>"
      },
      {
        "title": "입력을 놓은 뒤 감속과 미끄러짐",
        "html": "<p>지상에서 입력을 놓으면 <code>BrakingDecelerationWalking</code>에 의한 감속과 제동 마찰이 함께 속도를 줄인다. 제동에 쓰는 마찰은 <code>Use Separate Braking Friction</code> 설정에 따라 달라진다.</p><h3>제동 마찰 선택</h3><ul><li><strong>꺼짐</strong> · 보행 중에는 <code>GroundFriction</code>을 제동에도 사용한다.</li><li><strong>켜짐</strong> · 제동에는 별도로 설정한 <code>BrakingFriction</code>을 사용한다.</li></ul><p>두 경우 모두 제동에 쓰는 마찰 값에는 <code>BrakingFrictionFactor</code>가 곱해진다. 방향 전환은 유지하면서 멈추는 느낌만 바꾸고 싶다면 제동에 쓰는 값을 따로 조정하고, 같은 속도에서 키를 놓아 멈추는 거리를 비교한다.</p>"
      },
      {
        "title": "이동 방향과 컨트롤러 방향으로 회전",
        "html": "<h3>회전 방향 설정</h3><ul><li><code>Orient Rotation to Movement</code> · 이동 입력으로 생기는 가속 방향으로 캐릭터를 돌린다.</li><li><code>Use Controller Desired Rotation</code> · 컨트롤러가 바라보려는 방향으로 캐릭터를 돌린다. 두 옵션이 모두 켜져 있으면 <code>Orient Rotation to Movement</code>가 우선한다.</li><li><code>Rotation Rate</code> · 이 회전 방식에서 캐릭터가 돌아가는 속도를 조절한다.</li></ul><p>Don’t Drop에서는 평소 이동 방향을 향하게 하고, 가드 중에는 컨트롤러 방향을 따르도록 바꿨다. 가드를 풀면 회전과 이동 속도·가속도를 기존 설정으로 되돌렸다.</p>"
      }
    ],
    "quick_links": [
      {
        "label": "이동 속도·가속",
        "section": "걷기 속도와 출발 가속"
      },
      {
        "label": "정지·미끄러짐",
        "section": "입력을 놓은 뒤 감속과 미끄러짐"
      },
      {
        "label": "회전 방향",
        "section": "이동 방향과 컨트롤러 방향으로 회전"
      }
    ]
  }
];
