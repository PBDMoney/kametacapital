(function () {
  var mount = document.getElementById('site-header');
  if (!mount) return;

  var navItems = [
    { href: './flagshipfund', label: 'Flagship Fund', match: ['flagshipfund'] },
    { href: './portfolios', label: 'Portfolios', match: ['portfolios'] },
    { href: './aboutpage', label: 'About', match: ['aboutpage'] },
    { href: './contactpage', label: 'Contact', match: ['contactpage'] }
  ];

  var normalizedPath = window.location.pathname.toLowerCase().replace(/\/+$/, '');

  function isActive(matchers) {
    return matchers.some(function (slug) {
      return normalizedPath.endsWith('/' + slug) || normalizedPath.endsWith('/' + slug + '.html');
    });
  }

  var navHtml = navItems
    .map(function (item) {
      var activeClass = isActive(item.match) ? ' is-active' : '';
      return '<a class="site-nav-link' + activeClass + '" href="' + item.href + '">' + item.label + '</a>';
    })
    .join('');

  mount.innerHTML =
    '<header class="site-header">' +
    '  <a class="site-logo-link" href="/" aria-label="Kameta Capital home">' +
    '    <img class="site-logo" src="https://cdn.shopify.com/s/files/1/0621/0637/0260/files/Kameda_no_background.png?v=1665267772" alt="Kameta Capital">' +
    '  </a>' +
    '  <nav class="site-nav" aria-label="Primary">' + navHtml + '</nav>' +
    '</header>';
})();
