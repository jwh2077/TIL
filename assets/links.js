(() => {
  'use strict';
  // Saved public-site URLs should keep readers in the current preview or site.
  function resolve(value) {
    try {
      const url = new URL(value, location.href);
      if (!['http:', 'https:'].includes(url.protocol)) return null;
      const localPage = url.origin === location.origin && url.pathname === location.pathname;
      const publicPage = url.hostname === 'jwh2077.github.io' && /^\/TIL\/(?:index\.html)?$/.test(url.pathname);
      if ((localPage || publicPage) && /^#(?:material|record|algorithm|project|reflection)=[\w-]+$/.test(url.hash)) {
        return { href: url.hash, internal: true };
      }
      return { href: url.href, internal: false };
    } catch { return null; }
  }
  window.TIL_LINKS = { resolve };
})();
