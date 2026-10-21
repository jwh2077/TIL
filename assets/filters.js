(() => {
  const labels = {cpp:'C++',unreal:'Unreal',ds:'자료구조',stl:'STL',oop:'객체지향',memory:'포인터·메모리',array:'배열·좌표',tree:'트리·탐색',queue:'큐',string:'문자열',simulation:'시뮬레이션',math:'수학',greedy:'그리디',dp:'동적 계획법',bruteforce:'완전 탐색',implementation:'구현'};
  const algorithmTagAliases = {'깊이 우선 탐색':'DFS','너비 우선 탐색':'BFS','동적 계획법':'DP','sort':'정렬','나머지 연산':'나머지','최소값':'최솟값','방문 여부':'방문 처리','배열·좌표':'배열','트리·탐색':'경로 탐색'};
  const normalizeAlgorithmTag=t=>algorithmTagAliases[t]||t;
  const algorithmTagLabel=t=>({DFS:'DFS · 깊이 우선 탐색',BFS:'BFS · 너비 우선 탐색',DP:'DP · 동적 계획법'})[normalizeAlgorithmTag(t)]||normalizeAlgorithmTag(t);
  function algorithmTagGroups(values) {
    const sites=new Set(['LeetCode','프로그래머스','SWEA']);
    const techniques=new Set(['DFS','BFS','DP','백트래킹','정렬','완전 탐색','선형 탐색','경로 탐색','탐색','재귀','그리디','시뮬레이션','구현']);
    const structures=new Set(['배열','2차원 배열','문자열','스택','큐','트리','이진 트리','해시','vector']);
    const groups=[{title:'문제 사이트',expanded:true,tags:[]},{title:'풀이 기법',expanded:true,tags:[]},{title:'자료구조',expanded:false,tags:[]},{title:'세부 개념',expanded:false,tags:[]}];
    for(const t of [...new Set(values.map(normalizeAlgorithmTag))])groups[sites.has(t)?0:techniques.has(t)?1:structures.has(t)?2:3].tags.push(t);
    return groups.filter(g=>g.tags.length);
  }
  const rawTags=(r,kind)=>[...new Set([...(r.tags||[]),...(kind==='material'?(r.topics||[r.topic]).filter(Boolean).map(t=>labels[t]||t):kind==='algorithm'?[labels[r.group]||r.group]:[])])];
  const tags=(r,kind)=>kind==='algorithm'?[...new Set(rawTags(r,kind).map(normalizeAlgorithmTag))]:rawTags(r,kind);
  const categories = {cpp:'C++ 기초',structures:'자료구조·알고리즘',unreal:'Unreal',project:'프로젝트·협업'};
  function categoriesOf(r,kind) {
    const topics=[r.primary_topic,...(r.topics||[r.topic])].filter(Boolean);
    const found=[];
    if(topics.some(t=>['cpp','oop','memory'].includes(t)))found.push('cpp');
    if(kind==='algorithm'||topics.some(t=>['ds','stl'].includes(t)))found.push('structures');
    if(topics.includes('unreal'))found.push('unreal');
    if(topics.includes('project'))found.push('project');
    return found;
  }
  function matches(r,state,kind) {
    if(state.category&&state.category!=='all'&&!categoriesOf(r,kind).includes(state.category))return false;
    if(state.from&&state.to&&state.from>state.to)return false;
    if((state.from||state.to)&&(!r.date||(state.from&&(r.date_end||r.date)<state.from)||(state.to&&r.date>state.to)))return false;
    if(!(state.tags||[]).every(t=>tags(r,kind).includes(kind==='algorithm'?normalizeAlgorithmTag(t):t)))return false;
    if(kind==='record'&&state.query&&!([r.title,r.summary,r.project,...tags(r,kind)].join(' ').toLocaleLowerCase().includes(state.query.trim().toLocaleLowerCase())))return false;
    return true;
  }
  function compare(a,b,sort='desc'){if(!a.date||!b.date)return !a.date&&!b.date?0:!a.date?1:-1;return (sort==='asc'?1:-1)*a.date.localeCompare(b.date);}
  window.TIL_FILTERS={tags,matches,compare,labels,categories,categoriesOf,normalizeAlgorithmTag,algorithmTagLabel,algorithmTagGroups};
})();
