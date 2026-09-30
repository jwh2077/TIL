(() => {
  const labels = {cpp:'C++',unreal:'Unreal',ds:'자료구조',stl:'STL',oop:'객체지향',memory:'포인터·메모리',array:'배열·좌표',tree:'트리·탐색',queue:'큐',string:'문자열',simulation:'시뮬레이션',math:'수학',greedy:'그리디',dp:'동적 계획법',bruteforce:'완전 탐색',implementation:'구현'};
  const tags=(r,kind)=>[...new Set([...(r.tags||[]),...(kind==='material'?(r.topics||[r.topic]).filter(Boolean).map(t=>labels[t]||t):kind==='algorithm'?[labels[r.group]||r.group]:[])])];
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
    if(!(state.tags||[]).every(t=>tags(r,kind).includes(t)))return false;
    if(kind==='record'&&state.query&&!([r.title,r.summary,r.project,...tags(r,kind)].join(' ').toLocaleLowerCase().includes(state.query.trim().toLocaleLowerCase())))return false;
    return true;
  }
  function compare(a,b,sort='desc'){if(!a.date||!b.date)return !a.date&&!b.date?0:!a.date?1:-1;return (sort==='asc'?1:-1)*a.date.localeCompare(b.date);}
  window.TIL_FILTERS={tags,matches,compare,labels,categories,categoriesOf};
})();
