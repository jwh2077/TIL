window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/materials/unreal-multiplayer-basics.js"] = [
  {
    "id": "unreal-multiplayer-basics",
    "title": "멀티플레이에서 값과 판정을 나누기",
    "summary": "숫자 야구 과제를 앞두고 GameMode, GameState, PlayerState, GameInstance의 역할과 서버 구분을 적어 봤다.",
    "kind": "note",
    "topic": "unreal",
    "topics": ["unreal"],
    "publication": "reference",
    "status": "CH4 과제 발제 · 2026-10-01",
    "source_name": "CH4개인과제10.1발제.txt / UE_Multiplayer_Server_TIL.md",
    "source_url": "",
    "notice": "10월 1일 과제 발제를 들으며 적어 둔 내용이다. 과제 안내와 멀티플레이 개념을 함께 정리했다.",
    "sections": [
      {
        "title": "이번 개인 과제",
        "text": "3자리 숫자를 사용하는 클라이언트 간 숫자 야구 과제다. 숫자 야구 다음에는 분노의 질주를 진행한다고 적어 뒀다. 이번에는 멀티 서버 관리가 들어가서 난이도가 높게 느껴졌다. 에셋은 사용할 수 있지만 너무 무겁거나 비싼 것은 피하기로 했다."
      },
      {
        "title": "판정은 서버에서",
        "text": "숫자를 입력하는 쪽과 정답을 판정하는 쪽을 나눠서 생각했다. 클라이언트가 입력을 보내면 서버에서 정답과 비교해 Strike와 Ball을 계산하고, 클라이언트는 결과를 표시하는 흐름이다. 값을 어디에 둘지 정할 때도 다른 플레이어가 알아야 하는 값인지 먼저 구분한다."
      },
      {
        "title": "클래스마다 두는 값",
        "items": [
          "GameMode: 게임 규칙과 판정. 서버에만 있으므로 클라이언트에서 직접 가져와 쓰려고 하면 안 된다.",
          "GameState: 현재 라운드나 팀 점수처럼 모두가 알아야 하는 게임 상태. 서버에서 관리한 값을 클라이언트에 복제할 수 있다.",
          "PlayerState: 닉네임이나 개인 점수처럼 다른 플레이어도 알아야 하는 플레이어 정보.",
          "GameInstance: 각 실행 프로세스에 따로 있는 값. 맵을 바꿔도 유지할 로컬 설정 등을 담지만, 다른 클라이언트와 자동으로 동기화되지는 않는다."
        ]
      },
      {
        "title": "복제와 권한",
        "text": "처음 메모에는 State만 복제할 수 있다고 적었지만, GameState와 PlayerState가 공유 상태를 담는 대표적인 클래스라는 뜻으로 구분해야 한다. Actor와 그 변수, Component 등도 복제 대상이 될 수 있다. HasAuthority()는 현재 Actor의 권한을 가지고 있는지 확인한다. 단순히 서버인지 표시하는 말과 완전히 같은 뜻으로 쓰지는 않는다."
      },
      {
        "title": "리슨 서버와 전용 서버",
        "items": [
          "Listen Server: 방장이 플레이하면서 서버 역할도 맡는다. 방장이 나갔을 때의 처리도 생각해야 한다.",
          "Dedicated Server: 플레이어 화면을 그리지 않고 서버 역할을 맡는다. 화면에 띄우는 디버그 메시지만으로는 서버 상태를 확인하기 어렵다.",
          "멀티를 공부할 때는 서버와 클라이언트 두 개를 그림으로 나눠 놓고, 어느 쪽에서 코드가 실행되고 값이 바뀌는지 따라가 보기."
        ]
      },
      {
        "title": "통신과 로그 메모",
        "text": "TCP는 전달과 순서를 보장하기 위한 재전송이 있고, UDP 자체는 전달과 순서를 보장하지 않는다. TCP는 웹, UDP는 게임이라고만 외우기보다는 어떤 데이터를 주고받는지 나눠 봐야 한다. 언리얼 RPC의 Reliable과 Unreliable도 전달이 필요한 정도를 구분해서 사용한다. 서버 쪽은 화면 메시지 대신 로그를 확인하고, LogTemp만 쓰기보다 프로젝트용 로그 카테고리로 구분하라는 내용도 적어 뒀다."
      }
    ],
    "related_ids": ["20261001-study"]
  }
];
