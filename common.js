(function() {
  var lang = document.documentElement.lang || 'ja';
  var isJa = lang === 'ja';
  var currentFile = location.pathname.split('/').pop();
  var otherFile = currentFile === 'en.html' ? 'index.html' : 'en.html';

  var tocText = isJa ? '他の作品を読んでみる' : 'More Stories';
  var switchText = isJa ? 'English version' : 'Japanese version';

  var style = document.createElement('style');
  style.textContent =
    '.story-nav { text-align: center; font-size: 0.9em; margin-bottom: 32px; }' +
    '.story-nav:last-child { margin-bottom: 0; margin-top: 32px; }' +
    '.story-nav a { color: #4c97ff; text-decoration: none; border-bottom: 1px dashed #4c97ff; }' +
    '.story-nav a:hover { color: #1a5276; border-bottom-color: #1a5276; }';
  document.head.appendChild(style);

  function createNav() {
    var p = document.createElement('p');
    p.className = 'story-nav';
    p.innerHTML =
      '<a href="../index.html">' + tocText + '</a> | ' +
      '<a href="' + otherFile + '">' + switchText + '</a>';
    return p;
  }

  var container = document.querySelector('.container');
  if (container) {
    container.insertBefore(createNav(), container.firstChild);
    container.appendChild(createNav());

    var shareLabel = isJa ? 'この作品をシェアする' : 'Share this story';
    var pageUrl = encodeURIComponent(location.href);
    var pageTitle = encodeURIComponent(document.title);
    var descMeta = document.querySelector('meta[name="description"]');
    var pageDesc = descMeta ? descMeta.content : '';
    var shareText = pageDesc
      ? encodeURIComponent(document.title + '\n' + pageDesc)
      : pageTitle;

    var shareDiv = document.createElement('div');
    shareDiv.className = 'share-buttons';
    shareDiv.innerHTML =
      '<p class="share-buttons-label">' + shareLabel + '</p>' +
      '<div class="share-buttons-list">' +
        '<a class="share-btn share-btn--x" href="https://x.com/intent/tweet?url=' + pageUrl + '&text=' + shareText + '" target="_blank" rel="noopener" aria-label="Share on X">' +
          '<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' +
        '</a>' +
        '<a class="share-btn share-btn--facebook" href="https://www.facebook.com/sharer/sharer.php?u=' + pageUrl + '" target="_blank" rel="noopener" aria-label="Share on Facebook">' +
          '<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' +
        '</a>' +
        '<a class="share-btn share-btn--line" href="https://social-plugins.line.me/lineit/share?url=' + pageUrl + '" target="_blank" rel="noopener" aria-label="Share on LINE">' +
          '<svg viewBox="0 0 24 24"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>' +
        '</a>' +
        '<a class="share-btn share-btn--hatena" href="https://b.hatena.ne.jp/add?mode=confirm&url=' + pageUrl + '&title=' + shareText + '" target="_blank" rel="noopener" aria-label="Share on Hatena Bookmark">' +
          '<svg viewBox="0 0 24 24"><path d="M20.47 0C22.42 0 24 1.58 24 3.53v16.94c0 1.95-1.58 3.53-3.53 3.53H3.53C1.58 24 0 22.42 0 20.47V3.53C0 1.58 1.58 0 3.53 0h16.94zm-3.705 14.47c-.78 0-1.41.63-1.41 1.41s.63 1.414 1.41 1.414 1.41-.634 1.41-1.414-.63-1.41-1.41-1.41zm.255-9.036h-2.37v8.595h2.37V5.434zM13.22 5.44H8.665v2.25h1.77v6.705H8.665v2.25h6.09v-2.25h-1.535V5.44z"/></svg>' +
        '</a>' +
      '</div>';
    container.appendChild(shareDiv);

    var footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = '<a href="https://x.com/jishiha" target="_blank" rel="noopener">Junya Ishihara</a> — authored with generative AI';
    container.appendChild(footer);
  }
})();
