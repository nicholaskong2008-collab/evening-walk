// Turns every <canvas data-chart> (made by _includes/chart.html) into a Chart.js chart,
// styled to match the site and redrawn when the reader switches light/dark mode.
(function () {
  if (!window.Chart) return;
  var charts = [];

  function css(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function list(str) {
    return (str || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  }
  function nums(str) {
    return list(str).map(Number);
  }

  function build(canvas) {
    var d = canvas.dataset;
    var type = d.chart || 'bar';
    var unit = d.unit || '';
    var prefix = d.prefix || '';
    var fmt = function (v) { return prefix + Number(v).toLocaleString('en-GB') + unit; };
    var ink = css('--ink-soft');
    var grid = css('--chart-grid');
    var c1 = css('--chart-1');
    var c2 = css('--chart-2');
    var pie = type === 'pie' || type === 'doughnut';

    var datasets = [{
      label: d.series || '',
      data: nums(d.values),
      backgroundColor: pie ? [c1, c2, css('--muted'), css('--rule')] : c1,
      borderColor: pie ? css('--paper') : c1,
      borderWidth: pie ? 2 : (type === 'line' ? 2.5 : 0),
      pointRadius: type === 'line' ? 3 : 0,
      tension: 0.25
    }];
    if (d.values2) {
      datasets.push({
        label: d.series2 || '',
        data: nums(d.values2),
        backgroundColor: c2, borderColor: c2,
        borderWidth: type === 'line' ? 2.5 : 0, pointRadius: type === 'line' ? 3 : 0, tension: 0.25
      });
    }

    Chart.defaults.font.family = 'Inter, system-ui, sans-serif';
    Chart.defaults.font.size = 12;
    Chart.defaults.color = ink;

    var axis = {
      grid: { color: grid, drawTicks: false },
      border: { display: false },
      ticks: { padding: 8, maxTicksLimit: 5, maxRotation: 0, callback: function (v) { return fmt(v); } }
    };
    var cat = { grid: { display: false }, border: { color: ink }, ticks: { padding: 6 } };
    var horizontal = d.horizontal === 'true';

    return new Chart(canvas, {
      type: type,
      data: { labels: list(d.labels), datasets: datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: horizontal ? 'y' : 'x',
        animation: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? false : { duration: 500 },
        plugins: {
          legend: {
            display: pie || datasets.length > 1,
            position: 'top', align: 'start',
            labels: { boxWidth: 10, boxHeight: 10, usePointStyle: true, pointStyle: 'rectRounded' }
          },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                var v = ctx.parsed && typeof ctx.parsed === 'object' ? (horizontal ? ctx.parsed.x : ctx.parsed.y) : ctx.parsed;
                return (ctx.dataset.label ? ctx.dataset.label + ': ' : '') + fmt(v);
              }
            }
          }
        },
        scales: pie ? {} : (horizontal ? { x: axis, y: cat } : { x: cat, y: axis }),
        datasets: { bar: { borderRadius: 2, maxBarThickness: 48 } }
      }
    });
  }

  function renderAll() {
    charts.forEach(function (c) { c.destroy(); });
    charts = Array.prototype.map.call(document.querySelectorAll('canvas[data-chart]'), build);
  }

  renderAll();
  document.addEventListener('themechange', renderAll);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', renderAll);
})();
