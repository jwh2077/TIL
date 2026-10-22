(() => {
  'use strict';
  const keywords = new Set(('alignas alignof asm auto bool break case catch char char8_t char16_t char32_t class concept const consteval constexpr constinit const_cast continue co_await co_return co_yield decltype default delete do double dynamic_cast else enum explicit export extern false float for friend goto if inline int long mutable namespace new noexcept nullptr operator private protected public register reinterpret_cast requires return short signed sizeof static static_assert static_cast struct switch template this thread_local throw true try typedef typeid typename union unsigned using virtual void volatile wchar_t while and or not').split(' '));
  const escape = text => text.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  // Tokenize the original text once: comments and literals must not be highlighted inside.
  const tokens = /\/\/[^\r\n]*|\/\*[\s\S]*?(?:\*\/|$)|(?:u8|u|U|L)?R"([^ ()\\\t\r\n]{0,16})\([\s\S]*?\)\1"|(?:u8|u|U|L)?"(?:\\[\s\S]|[^"\\])*"|(?:u8|u|U|L)?'(?:\\[\s\S]|[^'\\\r\n])*'|\b(?:0[xX][\da-fA-F']+(?:\.[\da-fA-F']*)?(?:[pP][+-]?\d+)?|0[bB][01']+|\d[\d']*(?:\.[\d']*)?(?:[eE][+-]?\d+)?)[uUlLfF]*\b|\b[A-Za-z_]\w*\b/g;
  window.TIL_CPP_HIGHLIGHT = source => {
    const text = String(source ?? '');
    let html = '', end = 0;
    for (const match of text.matchAll(tokens)) {
      const token = match[0];
      const kind = token.startsWith('//') || token.startsWith('/*') ? 'comment'
        : /^(?:u8|u|U|L)?(?:R?"|')/.test(token) ? 'string'
        : /^\d/.test(token) ? 'number'
        : keywords.has(token) ? 'keyword' : '';
      html += escape(text.slice(end, match.index));
      html += kind ? `<span class="cpp-${kind}">${escape(token)}</span>` : escape(token);
      end = match.index + token.length;
    }
    return html + escape(text.slice(end));
  };
})();
