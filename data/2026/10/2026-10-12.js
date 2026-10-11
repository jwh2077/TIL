window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/10/2026-10-12.js"] = [
  {
    "id": "20261012-chatx",
    "date": "2026-10-12",
    "date_start": "2026-10-12",
    "date_end": null,
    "date_label": "2026-10-12",
    "date_basis": "10-12.txt 날짜별 메모 파일명",
    "title": "ChatX · RPC의 호출 위치와 실행 위치",
    "project": "ChatX",
    "primary_topic": "unreal",
    "activity": "personal",
    "tags": [
      "Unreal",
      "멀티플레이",
      "RPC",
      "Ownership"
    ],
    "summary": "Server·Client·NetMulticast의 호출 조건을 나눠 보고, 소유 관계와 검증·전달 옵션을 정리했다.",
    "study_content": "오늘은 RPC를 봤다. 호출하는 곳과 실행하는 곳이 다를 수 있어서 Server와 Client가 어느 쪽을 가리키는지 처음에는 헷갈렸다. 서버에서 호출한다는 뜻이 아니라 서버에서 실행하도록 요청한다는 식으로 방향을 나눠 적었다.\n\n공식 문서의 한글 표와 영어 표를 같이 보며 호출 위치와 Actor 소유 관계를 비교했다. 내 Actor인지 다른 클라이언트의 Actor인지에 따라 실행이 달라지고, NetMulticast도 클라이언트에서 호출하면 그 클라이언트에서만 실행된다는 조건을 적어 뒀다.\n\nWithValidation을 붙이면 _Validate 결과에 따라 _Implementation 실행 여부가 나뉜다. 마지막에는 기본값인 Unreliable과 Reliable의 차이도 봤다. 오늘은 호출 조건을 나눠 보는 데까지 정리했다.",
    "questions": [
      "Owner가 없는 Actor와 서버 소유 Actor는 어떻게 나눠 봐야 할까?"
    ],
    "repository": "https://github.com/jwh2077/ChatX",
    "references": [
      {
        "label": "RPC — Server·Client·NetMulticast 호출 조건",
        "url": "#material=unreal-rpc"
      }
    ],
    "source": [
      "10-12.txt · local/reference/chatx/ 원본 보관"
    ]
  }
];
