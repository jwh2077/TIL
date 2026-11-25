(() => {
'use strict';
const docs=window.TIL_CAREER_DOCUMENTS||[];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byPath=new Map(docs.map(d=>[d.path,d]));
function inline(s,doc){
  const format=text=>esc(text).replace(/\x60([^\x60]+)\x60/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
  let end=0,html='';
  for(const match of String(s).matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)){
    html+=format(String(s).slice(end,match.index));
    let href=match[2];
    if(!/^(?:https?:\/\/|#)/i.test(href)){
      const url=new URL(href,'https://local.invalid/'+doc.path);
      const target=byPath.get(url.pathname.slice(1));
      href=target?'#career='+target.id:url.pathname==='/index.html'&&url.hash?url.hash:'';
    }
    html+=href?'<a href="'+esc(href)+'"'+(/^https?:/i.test(href)?' target="_blank" rel="noopener noreferrer"':'')+'>'+format(match[1])+'</a>':format(match[1]);
    end=match.index+match[0].length;
  }
  return html+format(String(s).slice(end));
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

const primaryIds=['portfolio','resume','projects','ai-workflow'];
const groups=[
  {title:'포트폴리오',items:primaryIds.map(id=>docs.find(d=>d.id===id)).filter(Boolean)},
  {title:'지원 준비',items:docs.filter(d=>d.category==='지원 자료'&&!primaryIds.includes(d.id))},
  {title:'기술 노트',items:docs.filter(d=>d.category==='기술 노트'&&!primaryIds.includes(d.id))}
];
const remaining=docs.filter(d=>!groups.some(g=>g.items.includes(d)));
if(remaining.length)groups.push({title:'기타 문서',items:remaining});
const matches=(d,q)=>[d.title,d.summary,d.markdown].join(' ').toLocaleLowerCase().includes(q.trim().toLocaleLowerCase());
const matchingDocuments=q=>docs.filter(d=>matches(d,q));
function catalog(q){
  const html=groups.map(group=>{
    const found=group.items.filter(d=>matches(d,q));
    if(!found.length)return '';
    return '<section class="document-group"><div class="document-group-heading"><h2>'+esc(group.title)+'</h2><span class="caption">'+found.length+'개 문서</span></div><ul class="document-list">'+found.map(d=>'<li><a href="#career='+encodeURIComponent(d.id)+'"><span><strong>'+esc(d.title)+'</strong><small>'+esc(d.summary)+'</small></span><span class="document-open">문서 열기 →</span></a></li>').join('')+'</ul></section>';
  }).join('');
  return '<p class="document-count caption" role="status">'+matchingDocuments(q).length+'개 문서</p>'+(html||'<p class="empty">일치하는 문서가 없습니다.</p>');
}
function hub(){
  return '<div class="document-hub"><header class="document-hub-header"><h1>문서</h1><p class="intro">포트폴리오, 지원 준비 자료와 기술 노트. 문서를 열어 읽거나 PDF로 저장할 수 있습니다.</p></header>'+
    '<label class="sr-only" for="careerQuery">문서 검색</label><input id="careerQuery" type="search" placeholder="문서 제목·기술·본문 검색" aria-label="문서 검색">'+
    '<div id="careerCatalog">'+catalog('')+'</div></div>';
}
function detail(id){
  const doc=docs.find(d=>d.id===id);
  if(!doc)return '<a class="source" href="#documents">← 문서 목록</a><h1>문서를 찾을 수 없습니다</h1>';
  return '<div class="career-document-page"><div class="career-toolbar"><a class="career-back" href="#documents">← 문서 목록</a><button type="button" class="career-print">PDF로 저장 · 인쇄</button></div><div class="career-document">'+
    '<header class="career-doc-head"><div class="eyebrow">'+esc(doc.category)+' / C++ · Unreal Engine</div><h1>'+esc(doc.title)+'</h1><p class="intro">'+esc(doc.summary)+'</p></header>'+
    '<article class="career-prose">'+markdown(doc)+'</article>'+
    '</div></div>';
}
window.TIL_CAREER={
  render:id=>window.TIL_SHOWCASE?.has(id)?window.TIL_PORTFOLIO?.detail(id)||window.TIL_SHOWCASE.detail(id):id?detail(id):hub(),
  matchingDocuments,
  primaryDocuments:()=>groups[0].items.slice(),
  attach:root=>{
    const input=root.querySelector('#careerQuery');
    if(input)input.addEventListener('input',()=>{const target=root.querySelector('#careerCatalog');if(target)target.innerHTML=catalog(input.value);});
    const print=root.querySelector('.career-print');
    if(print)print.addEventListener('click',()=>window.print());
  }
};
})();
