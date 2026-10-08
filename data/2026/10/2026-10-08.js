window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/10/2026-10-08.js"] = [
  {
    "id": "20261008-chatx",
    "date": "2026-10-08",
    "date_start": "2026-10-08",
    "date_end": null,
    "date_label": "2026-10-08",
    "date_basis": "10-8.txt 본문 날짜와 오늘 일일 기록 작성 요청",
    "title": "ChatX · NetMode에서 NetRole로 이어 보기",
    "project": "ChatX",
    "primary_topic": "unreal",
    "activity": "personal",
    "tags": [
      "Unreal",
      "멀티플레이",
      "NetRole",
      "NetMode"
    ],
    "summary": "월드를 구분하는 NetMode와 액터의 역할을 나타내는 NetRole을 이어서 봤다. LocalRole과 RemoteRole, 두 Proxy의 차이는 아직 헷갈렸다.",
    "study_content": "오늘은 NetRole을 봤다. 중요한 게임 로직은 서버에서 처리해야 하니 실행 위치를 구분해야 했다. 이전에는 NetMode로 월드가 서버인지 클라이언트인지 봤는데, 실제 작성하는 코드는 액터나 컴포넌트의 멤버 함수라 액터 기준으로는 어떻게 봐야 하는지 헷갈렸다.\n\nAuthority와 Proxy를 서버의 액터와 클라이언트의 복제본에 연결해서 적어 봤다. 처음에는 진짜와 가짜, 혹은 약한 복사 같은 느낌으로 생각했지만, 이렇게 이해해도 되는지는 확실하지 않았다.\n\nLocalRole과 RemoteRole을 나누고 None, Authority, Autonomous Proxy, Simulated Proxy도 함께 정리했다. 내 캐릭터와 내 화면에 보이는 다른 플레이어의 캐릭터를 예로 두 Proxy를 구분해 보려 했다. 다만 역할을 단순히 송신·수신 가능 여부로 나눠도 되는지, 로컬과 리모트가 어느 쪽 기준인지 아직 헷갈린다.\n\n어제 소유 관계를 나눠 본 것처럼, 서버와 각 클라이언트에 있는 액터에 역할을 붙여서 보고 싶었다. 오늘은 메모를 남기고, 자료실에 이어 정리할 내용은 따로 보관해 뒀다.",
    "questions": [
      "LocalRole과 RemoteRole은 같은 액터를 어느 쪽에서 볼 때의 역할인가?",
      "Autonomous Proxy와 Simulated Proxy를 송신·수신 가능 여부만으로 나눠도 되는가?",
      "Authority와 Proxy를 진짜·가짜나 약한 복사처럼 생각해도 되는가?"
    ],
    "repository": "https://github.com/jwh2077/ChatX",
    "references": [
      {
        "label": "앞서 정리한 전용 서버의 연결·소유 관계",
        "url": "#material=unreal-network-testing"
      }
    ],
    "source": [
      "10-8.txt · local/reference/chatx/에 원본 보관, NetRole 자료실 정리는 대기"
    ]
  }
];
