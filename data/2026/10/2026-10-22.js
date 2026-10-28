window.TIL_FILES = window.TIL_FILES || {};
window.TIL_FILES["data/2026/10/2026-10-22.js"] = [
  {
    "id": "20261022-study",
    "date": "2026-10-22",
    "title": "Unreal · 서버 프로세스 디버깅과 DDC 메모",
    "project": "개인 공부",
    "activity": "study",
    "tags": [
      "Unreal",
      "디버깅",
      "프로세스",
      "DDC"
    ],
    "summary": "PID로 서버 프로세스를 구분해 디버거를 연결하는 방법을 적고, 공유 DDC와 실행 파일 로드에 관한 질문을 남겼다.",
    "study_content": "서버와 클라이언트를 별도 프로세스로 실행하면 디버거도 나눠서 연결할 수 있다는 내용을 적었다. PID로 프로세스를 구분하고, 서버 프로세스에 연결해서 중단점을 잡는 방식이었다. 직접 디버깅을 끝낸 결과까지 적어 둔 것은 아니다.\n\n액터를 서버에서 생성하는 경우와 클라이언트에서만 생성하는 경우에 보이는 범위가 달라진다는 내용도 함께 메모했다.\n\n공유 DDC 폴더를 NAS 같은 곳에 두고 데이터를 받아오면 더 빠르게 실행할 수 있는지 궁금했다. EXE·DLL이 디스크에 저장되어 있다가 메모리에 올라오는 흐름도 적어 봤지만, 코드가 변환되는 과정과 실행되는 과정을 더 구분해서 볼 필요가 있었다. 패킷, 기본 게이트웨이, 공인 IP는 키워드만 남겼다.",
    "questions": [
      "공유 DDC에 저장되는 데이터와 C++ 컴파일 결과는 어떻게 다를까?",
      "EXE·DLL이 디스크에서 메모리로 올라오는 과정은 어떻게 이어질까?"
    ],
    "references": [
      {
        "label": "멀티플레이 테스트와 연결 구조",
        "url": "#material=unreal-network-testing"
      },
      {
        "label": "C++·Unreal 빌드 과정과 빌드 구성",
        "url": "#material=unreal-build-flow"
      }
    ],
    "source": [
      "10-22.txt"
    ],
    "date_basis": "사용자가 제공한 10-22.txt의 날짜 표기. 연도는 기존 2026년 학습 기록 문맥에 따르며, 파일 작성·이동일을 학습일로 사용하지 않음.",
    "date_start": "2026-10-22",
    "date_end": null,
    "date_label": "2026-10-22",
    "primary_topic": "unreal"
  }
];
