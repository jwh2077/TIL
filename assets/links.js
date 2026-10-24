(() => {
  'use strict';
  // Saved public-site URLs should keep readers in the current preview or site.
  function resolve(value) {
    // Published source copies also work when index.html is opened as a local file.
    if (typeof value === 'string' && /^data\/guides\/[a-zA-Z0-9_-]+\.html$/.test(value)) {
      return { href: value, internal: false };
    }
    try {
      const url = new URL(value, location.href);
      const base = new URL(location.href);
      const webLink = ['http:', 'https:'].includes(url.protocol);
      const localPage = url.protocol === base.protocol && url.host === base.host && url.pathname === base.pathname;
      const publicPage = url.hostname === 'jwh2077.github.io' && /^\/TIL\/(?:index\.html)?$/.test(url.pathname);
      const filePage = base.protocol === 'file:' && url.protocol === 'file:' && localPage;
      if (((webLink && (localPage || publicPage)) || filePage) && /^#(?:material|record|algorithm|project|reflection)=[\w-]+$/.test(url.hash)) {
        return { href: url.hash, internal: true };
      }
      if (!webLink) return null;
      return { href: url.href, internal: false };
    } catch { return null; }
  }
  function references(record) {
    return [...(record.references || []), ...(record.source_url
      ? [{ label: record.source_name || '원본 자료', url: record.source_url }] : [])];
  }
  window.TIL_LINKS = { resolve, references };
})();
