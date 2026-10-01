// Light/dark toggle and the Topics filter. No libraries needed.
(function () {
  var root = document.documentElement;

  // ---- Theme toggle ----
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.dataset.theme ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      document.dispatchEvent(new CustomEvent('themechange'));
    });
  }

  // ---- Topics filter ----
  var chips = document.querySelectorAll('.filter .chip');
  if (!chips.length) return;
  var cards = document.querySelectorAll('#topic-results .card');
  var empty = document.getElementById('no-results');

  function apply(tag) {
    var shown = 0;
    chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c.dataset.filter === tag)); });
    cards.forEach(function (card) {
      var tags = (card.dataset.tags || '').split('|');
      var match = tag === 'all' || tags.indexOf(tag) !== -1;
      card.hidden = !match;
      if (match) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var tag = chip.dataset.filter;
      apply(tag);
      var url = new URL(window.location);
      if (tag === 'all') url.searchParams.delete('tag'); else url.searchParams.set('tag', tag);
      history.replaceState(null, '', url);
    });
  });

  var start = new URLSearchParams(window.location.search).get('tag');
  var known = Array.prototype.some.call(chips, function (c) { return c.dataset.filter === start; });
  apply(start && known ? start : 'all');
})();
