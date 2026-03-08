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

    var footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = '<a href="https://x.com/jishiha" target="_blank" rel="noopener">Junya Ishihara</a> — authored with generative AI';
    container.appendChild(footer);
  }
})();
