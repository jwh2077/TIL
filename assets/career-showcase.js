(() => {
  'use strict';
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const cases=[
    {
      id:'case-priest',index:'01',title:'Project Priest',kind:'팀 액션 게임',status:'발표 기록 확인',
      period:'2026.09',engine:'Unreal Engine 5 · C++',role:'적 AI · 무기 파츠 · UI 데이터 연동',
      lead:'적의 행동 전환과 공격 판정을 구현하면서, 상태가 연결되는 구간의 문제를 추적했습니다.',
      summary:'순찰부터 추적·공격까지 이어지는 AI와 무기 파츠 정보를 게임 및 UI에 전달하는 기능을 담당했습니다.',
      tags:['Behavior Tree','Blackboard','DataTable'],
      projectName:'Project Priest',placeholder:'AI / COMBAT',
      own:['근접·원거리 적의 순찰, 감지, 추적, 공격 조건 연결','파츠 장착과 능력치 데이터·UI 연동','공격 판정 및 사망 Mesh 처리 점검'],
      challenge:'공격 애니메이션은 실행되지만 조건에 따라 피해가 적용되지 않았습니다. AI는 플레이어를 놓친 순간 대상 정보를 비우면 전투 흐름이 갑자기 끊기는 문제도 있었습니다.',
      approach:'Behavior Tree와 Blackboard의 조건을 나눠 확인하고, 공격에서는 Box Overlap, 저장된 대상, Anim Notify 실행 시점을 순서대로 점검했습니다. 충돌 Box의 높이를 조정했을 때 판정이 더 안정적으로 들어오는 현상을 확인했습니다.',
      outcome:'팀 발표와 플레이 영상에 일반 전투, 인벤토리, 구역 이동, 보스전이 담겼습니다. 발표 자료에는 Notify 시점에 공격 범위를 검사하는 개선 과정도 정리되어 있습니다.',
      caution:'충돌 Box 조정 기록과 발표 자료의 범위 검사 방식이 최종 소스에서 어떻게 결합되었는지는 추가 검증이 필요합니다.',
      steps:[['구조 설계','EnemyCharacter와 AIController, Behavior Tree, Blackboard의 책임을 나눴습니다.'],['조건 디버깅','감지 상실·공격 범위·Notify 시점을 분리해 점검했습니다.'],['데이터 연결','GameInstance와 파츠 데이터가 UI로 전달되는 경로를 확인했습니다.']],
      evidence:'TIL 2026.09.07~09.30 / 팀 발표 및 플레이 기록',record:'20260925-priest-ai'
    },
    {
      id:'case-dontdrop',index:'02',title:'Don’t Drop',kind:'팀 멀티플레이 게임',status:'개발 진행 기록',
      period:'2026.10~11',engine:'Unreal Engine 5.6 · C++',role:'캐릭터 이동 · 입력 · 전투 연결',
      lead:'방어구 무게와 입력 유지 시간에 따라 달라지는 이동감을 데이터로 제어했습니다.',
      summary:'이동 설정을 DataTable에서 읽고, 무게 변화 이벤트와 공격·가드 입력을 캐릭터 코드에 연결했습니다.',
      tags:['CharacterMovement','Enhanced Input','DataTable'],
      placeholder:'MOVEMENT / INPUT',
      own:['이동·점프·가속·감속 값을 데이터와 연동','방어구 상태 변경 이벤트를 받아 속도 재계산','공격·가드 입력을 전투 컴포넌트에 전달'],
      challenge:'출발 속도를 높였더니 처음 빠르게 움직인 뒤 급격히 느려져 대시처럼 보였습니다. 테이블에 있는 값이 실제 이동 컴포넌트에 적용되지 않는 구간도 확인했습니다.',
      approach:'시작 순간의 속도와 입력을 누르는 동안 증가하는 이동 세기를 분리했습니다. CharacterMovementComponent에 값을 적용하고, 무게가 바뀌면 최대 속도 등을 다시 계산하는 흐름을 정리했습니다.',
      outcome:'DataTable 이동값 적용, 방어구 무게와 이동 연동, 공격·가드 요청 연결의 작업 기록이 있습니다. 조작 수치를 직접 테스트하며 이상한 이동감을 관찰했습니다.',
      caution:'리슨 서버 외부 접속과 모든 클라이언트의 이동 일치가 검증됐다는 의미는 아닙니다. 관전 기능의 개인 테스트 코드는 동작하지 않아 삭제했고, 엑셀 연동은 구상 단계입니다.',
      steps:[['기본 이동 구성','FPlayerDataRow와 이동 보정값으로 입력·Movement 설정을 분리했습니다.'],['상태 연결','방어구 무게 변경 알림을 받아 이동 속도 갱신에 연결했습니다.'],['조작 테스트','출발 속도와 누적 입력의 관계를 관찰하고 조정했습니다.']],
      evidence:'TIL 2026.11.04~11.09 / 캐릭터 이동·가드 작업 기록',record:'20261109-dont-drop'
    },
    {
      id:'case-chatx',index:'03',title:'ChatX · 숫자 야구',kind:'개인 멀티플레이 실습',status:'학습·구현 기록',
      period:'2026.10',engine:'Unreal Engine · C++',role:'게임 규칙 · 채팅 RPC · 상태 복제',
      lead:'서버에서 규칙을 판정하고 클라이언트에 필요한 정보를 전달하는 흐름을 작성했습니다.',
      summary:'GameMode의 숫자 야구 규칙과 PlayerController별 메시지 전달, PlayerState 복제를 다뤘습니다.',
      tags:['GameMode','RPC','Replication'],
      placeholder:'SERVER / RPC',
      own:['중복 없는 세 숫자 생성 및 입력·Strike·Ball 판정','PlayerController별 채팅 전달 경로 작성','PlayerState 이름·시도 횟수 복제 설정'],
      challenge:'PlayerController는 모든 클라이언트에서 동일하게 존재하지 않으므로, 한 대상에 NetMulticast를 호출하는 것만으로 메시지 전달을 해결하기 어렵다는 점을 학습했습니다.',
      approach:'서버에서 PlayerController를 순회해 필요한 Client RPC를 호출하는 흐름을 작성했습니다. 숫자 야구 규칙은 GameMode에, 플레이어별 공유 값은 PlayerState에 배치했습니다.',
      outcome:'숫자 생성·판정 함수와 RPC·프로퍼티 복제 코드를 작성한 학습 기록이 있습니다.',
      caution:'코드 작성 이력이 곧 외부 네트워크 환경에서의 완전한 안정성 검증을 의미하지는 않습니다.',
      steps:[['역할 구분','GameMode·PlayerController·PlayerState의 실행 위치와 책임을 정리했습니다.'],['통신 구현','Server·Client RPC와 프로퍼티 복제 흐름을 작성했습니다.'],['규칙 연결','입력 검사, Strike·Ball 판정, 승패·시도 횟수를 서버 흐름에 연결했습니다.']],
      evidence:'TIL 2026.10.12 / RPC·숫자 야구 실습 기록',record:'20261012-chatx'
    },
    {
      id:'case-textrpg',index:'04',title:'팀 TextRPG',kind:'C++ 콘솔 팀 프로젝트',status:'팀 과제 마무리',
      period:'2026.07~08',engine:'C++ · STL',role:'상점 · 아이템 · Logger',
      lead:'상점 기능을 구현하고 아이템 소유권과 클래스 책임을 분리했습니다.',
      summary:'아이템 구매·판매와 데이터 기록, unique_ptr을 이용한 Item 관리 구조를 다뤘습니다.',
      tags:['C++','std::unique_ptr','Git 협업'],
      projectName:'팀 TextRPG',placeholder:'C++ / ITEM',
      own:['Shop 구매·판매 기능과 Item 클래스 분리','std::unique_ptr<Item> 기반 관리','Logger 데이터 집계 및 Git 협업'],
      challenge:'아이템 관리와 상점 처리를 한 구조에 계속 추가하면 책임이 섞이기 쉬웠습니다. 팀 작업에서는 병합과 작업 범위 조율도 필요했습니다.',
      approach:'Shop과 Item을 분리하고 unique_ptr을 통해 아이템의 소유권을 관리했습니다. Git 브랜치, PR, 병합·충돌 해결을 경험했습니다.',
      outcome:'상점 구매·판매, 아이템 관리, Logger 작업과 팀 프로젝트 마무리 기록이 있습니다.',
      caution:'고도화된 메모리 최적화나 성능 수치를 측정했다는 의미는 아닙니다.',
      steps:[['기능 구현','상점에서 아이템을 구매하고 판매하는 기능을 다뤘습니다.'],['구조 분리','Shop과 Item을 분리하고 unique_ptr로 관리했습니다.'],['팀 통합','브랜치·PR·병합과 충돌 해결 과정에서 역할 경계를 점검했습니다.']],
      evidence:'TIL 2026.07.29~08.05 / 팀 상점·협업 기록',record:'20260803-001'
    }
  ];
  const projectFor=item=>(window.TIL_PROJECTS||[]).find(p=>p.title===item.projectName);
  const cover=item=>{
    const image=projectFor(item)?.cover;
    return image?.src
      ?'<div class="career-project-image"><img src="'+esc(image.src)+'" alt="'+esc(image.alt||item.title+' 프로젝트 화면')+'" loading="lazy"></div>'
      :'<div class="career-project-image career-project-fallback" aria-hidden="true"><span>'+esc(item.placeholder)+'</span><strong>'+esc(item.title)+'</strong></div>';
  };
  const tags=item=>'<div class="career-showcase-tags">'+item.tags.map(tag=>'<span>'+esc(tag)+'</span>').join('')+'</div>';
  function card(item,primary){
    return '<a href="#career='+esc(item.id)+'" class="career-project-card'+(primary?' career-project-primary':'')+'">'+
      cover(item)+'<div class="career-project-copy"><div class="career-project-meta"><span>'+esc(item.index)+' / '+esc(item.kind)+'</span><span>'+esc(item.status)+'</span></div>'+
      '<h3>'+esc(item.title)+'</h3><p class="career-project-lead">'+esc(item.lead)+'</p>'+
      '<div class="career-project-role"><span>담당</span><strong>'+esc(item.role)+'</strong></div>'+tags(item)+
      '<span class="career-project-more">문제 해결 과정 보기 <span aria-hidden="true">→</span></span></div></a>';
  }
  function hub(docList){
    return '<div class="career-overview">'+
      '<header class="career-showcase-hero"><div class="career-showcase-head"><div class="eyebrow">C++ / UNREAL ENGINE · GAMEPLAY PORTFOLIO</div>'+
      '<h1>구현한 기능보다<br><em>어떻게 연결하고 해결했는지</em><br>보여주겠습니다.</h1>'+
      '<p class="intro">C++과 Unreal Engine을 공부하며 적 AI, 캐릭터 이동, 게임 규칙과 멀티플레이 구조를 다뤘습니다. 각 프로젝트에서 맡은 부분과 확인한 문제를 중심으로 정리했습니다.</p>'+
      '<div class="career-showcase-cta"><a class="button" href="#career=case-priest">대표 작업 살펴보기</a><a class="career-subtle-link" href="#career=portfolio">문서형 포트폴리오</a></div></div>'+
      '<div class="career-showcase-focus" aria-label="주요 경험 분야"><div class="career-focus-kicker">TECHNICAL FOCUS</div>'+
      '<div><span>01 / AI & COMBAT</span><strong>행동 전환 · 공격 판정</strong><small>Project Priest</small></div>'+
      '<div><span>02 / MOVEMENT</span><strong>이동 데이터 · 입력 연동</strong><small>Don’t Drop</small></div>'+
      '<div><span>03 / NETWORKING</span><strong>RPC · 서버 규칙</strong><small>ChatX</small></div></div></header>'+
      '<section class="career-selected-work"><div class="career-showcase-section-head"><div><span class="eyebrow">SELECTED WORK</span><h2>대표 프로젝트</h2></div><p>팀 작업에서는 실제 담당한 기능을, 개인 실습에서는 직접 작성한 로직을 구분했습니다.</p></div>'+
      '<div class="career-selected-grid">'+cases.map((item,i)=>card(item,i===0)).join('')+'</div></section>'+
      '<section class="career-practice"><div class="career-showcase-section-head"><div><span class="eyebrow">HOW I WORK</span><h2>문제를 다루는 방식</h2></div><p>과장된 성과 수치보다 실제 기록에서 확인되는 과정을 중심으로 정리했습니다.</p></div>'+
      '<div class="career-practice-grid">'+[
        ['01','역할과 실행 위치','서버·클라이언트, Actor·Component 사이의 책임을 먼저 나눕니다.'],
        ['02','재현 조건과 데이터','입력 시점, 상태 변화, 충돌 범위와 로그를 나누어 점검합니다.'],
        ['03','확인한 결과만 기록','시도·작업 완료·최종 검증을 구분하고 남은 문제를 명시합니다.']
      ].map(a=>'<div class="career-practice-item"><span>'+a[0]+'</span><h3>'+a[1]+'</h3><p>'+a[2]+'</p></div>').join('')+'</div></section>'+
      '<section class="career-resources"><div class="career-showcase-section-head"><div><span class="eyebrow">DOCUMENTS & NOTES</span><h2>기술 문서와 지원 자료</h2></div><p>필요한 문서를 사이트 안에서 읽거나 A4/PDF로 출력할 수 있습니다.</p></div>'+
      '<label class="career-search-label" for="careerQuery">문서 검색</label><input id="careerQuery" type="search" placeholder="예: C++, 이동, 면접" aria-label="포트폴리오 문서 검색">'+
      '<div id="careerCatalog">'+docList+'</div></section>'+
      '<p class="career-end-note">모든 내용은 공개 가능한 프로젝트·학습 기록을 근거로 작성했습니다. 개인정보와 미확인 경력·성과는 포함하지 않았습니다.</p></div>';
  }
  function detail(id){
    const item=cases.find(c=>c.id===id);
    if(!item)return '<div class="career-case"><a href="#career">← 포트폴리오</a><h1>프로젝트를 찾을 수 없습니다.</h1></div>';
    const facts=[['형태',item.kind],['기간',item.period],['기술',item.engine],['담당',item.role]];
    return '<div class="career-case"><nav class="career-case-back"><a href="#career">← 포트폴리오</a><span>'+esc(item.index)+' / '+esc(item.status)+'</span></nav>'+
      '<header class="career-case-hero"><div class="eyebrow">PROJECT CASE STUDY · '+esc(item.index)+'</div><h1>'+esc(item.title)+'</h1><p>'+esc(item.lead)+'</p>'+
      '<div class="career-case-facts">'+facts.map(([key,value])=>'<div><dt>'+esc(key)+'</dt><dd>'+esc(value)+'</dd></div>').join('')+'</div></header>'+
      '<div class="career-case-visual">'+cover(item)+'</div>'+
      '<section class="career-case-section career-case-overview"><div><span class="eyebrow">MY CONTRIBUTION</span><h2>내가 맡은 부분</h2><p>'+esc(item.summary)+'</p></div><ul>'+item.own.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></section>'+
      '<section class="career-case-section"><div class="career-case-section-title"><span class="eyebrow">TECHNICAL DECISIONS</span><h2>문제와 해결 과정</h2></div>'+
      '<div class="career-case-decision"><article><span>문제 상황</span><p>'+esc(item.challenge)+'</p></article><article><span>조사 및 적용</span><p>'+esc(item.approach)+'</p></article></div></section>'+
      '<section class="career-case-section"><div class="career-case-section-title"><span class="eyebrow">WORKFLOW</span><h2>작업 흐름</h2></div>'+
      '<ol class="career-case-steps">'+item.steps.map(([title,description],i)=>'<li><span>'+String(i+1).padStart(2,'0')+'</span><div><h3>'+esc(title)+'</h3><p>'+esc(description)+'</p></div></li>').join('')+'</ol></section>'+
      '<section class="career-case-section"><div class="career-case-section-title"><span class="eyebrow">OUTCOME & LIMITATIONS</span><h2>확인된 결과와 남은 검증</h2></div>'+
      '<div class="career-case-results"><div><h3>확인된 내용</h3><p>'+esc(item.outcome)+'</p></div><div><h3>아직 단정하지 않는 내용</h3><p>'+esc(item.caution)+'</p></div></div></section>'+
      '<footer class="career-case-footer"><span>근거 · '+esc(item.evidence)+'</span><a href="#record='+encodeURIComponent(item.record)+'">원본 작업 기록 보기 →</a></footer>'+
      '<div class="career-case-next"><span>다음 프로젝트</span><a href="#career='+esc(cases[(cases.indexOf(item)+1)%cases.length].id)+'">'+esc(cases[(cases.indexOf(item)+1)%cases.length].title)+' →</a></div></div>';
  }
  window.TIL_SHOWCASE={hub,detail,has:id=>cases.some(c=>c.id===id),allCases:cases,cases:cases.map(({id,index,title,kind,status,period,engine,role,lead,summary,tags,projectName,placeholder})=>({id,index,title,kind,status,period,engine,role,lead,summary,tags,projectName,placeholder}))};
})();