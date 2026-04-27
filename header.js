(function mountSharedHeader() {
  const mountNode = document.getElementById('site-header');
  if (!mountNode) return;

  const navItems = [
    { label: 'Flagship Fund', href: './flagshipfund', match: ['/flagshipfund', '/flagshipfund.html'] },
    { label: 'Portfolios', href: './portfolios', match: ['/portfolios', '/portfolios.html'] },
    { label: 'About', href: './aboutpage', match: ['/aboutpage', '/aboutpage.html'] },
    { label: 'Contact', href: './contactpage', match: ['/contactpage', '/contactpage.html'] }
  ];

  const path = (window.location.pathname || '').toLowerCase();

  const linksMarkup = navItems
    .map((item) => {
      const isActive = item.match.some((route) => path.endsWith(route));
      const activeClass = isActive ? ' is-active' : '';
      return `<li class="site-header__item"><a class="site-header__link${activeClass}" href="${item.href}">${item.label}</a></li>`;
    })
    .join('');

  mountNode.innerHTML = `
    <header class="site-header">
      <a class="site-header__brand" href="./index" aria-label="Kameta Capital Home">
        <img class="site-header__logo" src="./kameta-logo.png" alt="Kameta Capital">
      </a>
      <div class="site-header__nav" role="navigation" aria-label="Primary">
        <ul class="site-header__list">
          ${linksMarkup}
        </ul>
      </div>
    </header>
  `;
})();
