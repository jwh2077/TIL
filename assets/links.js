(() => {
  'use strict';
  // Saved public-site URLs should keep readers in the current preview or site.
  function resolve(value) {
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
  window.TIL_LINKS = { resolve };
})();
