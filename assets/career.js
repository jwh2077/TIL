(() => {
'use strict';
const docs=window.TIL_CAREER_DOCUMENTS||[];
const shortTitle=t=>t.replace(/^게임 클라이언트 개발 포트폴리오$/,'게임 클라이언트 개발 포트폴리오');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byPath=new Map(docs.map(d=>[d.path,d]));
function inline(s,doc){
  // Printed documents keep citations as readable labels, not embedded navigation.
  s=String(s).replace(/\[([^\]]+)\]\(([^)]+)\)/g,'$1');
  return esc(s).replace(/\x60([^\x60]+)\x60/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
}
function markdown(doc){
  const lines=doc.markdown.replace(/\r\n/g,'\n').split('\n'),out=[];
  let paragraph=[],items=[],table=[],code=[],fenced=false;
  const flush=()=>{
    if(paragraph.length){out.push('<p>'+inline(paragraph.join(' '),doc)+'</p>');paragraph=[];}
    if(items.length){out.push('<ul>'+items.map(x=>'<li>'+inline(x,doc)+'</li>').join('')+'</ul>');items=[];}
    if(table.length){
      const rows=table.filter((row,i)=>i!==1||!/^\|?[\s:|\-]+\|?$/.test(row));
      out.push('<div class="career-table-wrap"><table>'+rows.map((row,i)=>'<tr>'+row.replace(/^\||\|$/g,'').split('|').map(c=>'<'+(i?'td':'th')+'>'+inline(c.trim(),doc)+'</'+(i?'td':'th')+'>').join('')+'</tr>').join('')+'</table></div>');
      table=[];
    }
  };
  for(const line of lines){
    if(line.startsWith('\x60\x60\x60')){if(fenced){out.push('<pre><code>'+esc(code.join('\n'))+'</code></pre>');code=[];fenced=false;}else{flush();fenced=true;}continue;}
    if(fenced){code.push(line);continue;}
    if(!line.trim()){flush();continue;}
    if(line.startsWith('|')){if(paragraph.length||items.length)flush();table.push(line);continue;}
    if(table.length)flush();
    const heading=line.match(/^(#{1,6})\s+(.+)$/);
    if(heading){flush();if(heading[1].length===1)continue;const level=Math.min(4,heading[1].length);out.push('<h'+level+'>'+inline(heading[2],doc)+'</h'+level+'>');continue;}
    if(/^---+$/.test(line.trim())){flush();out.push('<hr>');continue;}
    const li=line.match(/^\s*(?:[-*]|\d+\.)\s+(.+)$/);
    if(li){if(paragraph.length)flush();items.push(li[1].replace(/^\[([ x])\]\s*/,(m,v)=>v==='x'?'☑ ':'☐ '));continue;}
    if(items.length)flush();
    if(line.startsWith('>')){flush();out.push('<blockquote>'+inline(line.replace(/^>\s?/,''),doc)+'</blockquote>');continue;}
    if(/^\*\*[^*]+\*\*\s+/.test(line)&&paragraph.length){flush();}
    paragraph.push(line.trim());
  }
  flush();if(fenced)out.push('<pre><code>'+esc(code.join('\n'))+'</code></pre>');
  return out.join('');
}
const groups=['대표 문서','지원 자료','기술 노트'];
function catalog(q){
  q=q.trim().toLocaleLowerCase();
  const html=groups.map(group=>{
    const found=docs.filter(d=>d.category===group&&[d.title,d.summary,d.markdown].join(' ').toLocaleLowerCase().includes(q));
    if(!found.length)return '';
    return '<section class="career-category"><div class="section-head"><h2>'+esc(group)+'</h2><span class="caption">'+found.length+'개 문서</span></div><div class="career-cards">'+found.map(d=>'<a class="career-card" href="#career='+d.id+'"><span class="meta">'+esc(d.category)+'</span><h3>'+esc(d.title)+'</h3><p>'+esc(d.summary)+'</p><span class="source">읽어보기 →</span></a>').join('')+'</div></section>';
  }).join('');
  return html||'<p class="empty">일치하는 문서가 없습니다.</p>';
}
function hub(){
  return '<header class="career-intro"><div class="eyebrow">Career / C++ · Unreal Engine</div><h1>포트폴리오 · 취업 준비</h1><p class="intro">프로젝트에서 맡은 작업과 문제 해결 과정, 기술 학습 내용을 정리했습니다. 기존 학습 기록과 연결되는 공개용 자료입니다.</p></header>'+
    '<div class="career-actions"><a class="button" href="#career=portfolio">대표 포트폴리오 보기</a></div>'+
    '<label class="career-search-label" for="careerQuery">문서 찾기</label><input id="careerQuery" type="search" placeholder="문서 이름·기술·내용 검색" aria-label="취업 준비 문서 검색">'+
    '<div id="careerCatalog">'+catalog('')+'</div><p class="caption">개인 신상정보는 포함하지 않았습니다. 기술·프로젝트의 최종 구현 상태는 원본 기록과 함께 확인해 주세요.</p>';
}
function detail(id){
  const doc=docs.find(d=>d.id===id);
  if(!doc)return '<a class="source" href="#career">← 취업 준비</a><h1>문서를 찾을 수 없습니다</h1>';
  const related=docs.filter(d=>d.id!==id&&d.category===doc.category).slice(0,3);
  return '<div class="career-document-page"><div class="career-toolbar"><a class="career-back" href="#career">← 문서 목록</a><button type="button" class="career-print">PDF로 저장 · 인쇄</button></div><div class="career-document">'+
    '<header class="career-doc-head"><div class="eyebrow">'+esc(doc.category)+' / C++ · Unreal Engine</div><h1>'+esc(shortTitle(doc.title))+'</h1><p class="intro">'+esc(doc.summary)+'</p></header>'+
    '<article class="career-prose">'+markdown(doc)+'</article>'+
    '</div></div>';
}
window.TIL_CAREER={
  render:id=>window.TIL_SHOWCASE?.has(id)?window.TIL_PORTFOLIO?.detail(id)||window.TIL_SHOWCASE.detail(id):id?detail(id):(window.TIL_PORTFOLIO?.hub?.()||window.TIL_SHOWCASE?.hub(catalog(''))||hub()),
  attach:root=>{
    const input=root.querySelector('#careerQuery');
    if(input)input.addEventListener('input',()=>{const target=root.querySelector('#careerCatalog');if(target)target.innerHTML=catalog(input.value);});
    const print=root.querySelector('.career-print');
    if(print)print.addEventListener('click',()=>window.print());
  }
};
})();
