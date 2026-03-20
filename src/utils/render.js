import { DATA } from '../data/chartData.js';
import { CORRELACOES, IMPACT_LABEL, BPILL_CLASS } from '../data/correlacoes.js';

/* Mini-chart SVG helpers */
export function miniBar(chart) {
  const rows = chart.rows;
  const max = Math.max(...rows.map(r => r.val));
  const rH = 14, pad = 2;
  const h = rows.length * rH + pad;
  const lblW = 60, valW = 52, barX = lblW + 2, barW = 200 - lblW - valW - 4;
  const items = rows.map((r, i) => {
    const cy = pad + i * rH + rH / 2;
    const bw = +((r.val / max) * barW).toFixed(1);
    return [
      `<text x="${lblW}" y="${cy + 3}" text-anchor="end" font-size="8" fill="var(--muted)" font-family="IBM Plex Mono,monospace">${r.lbl}</text>`,
      `<rect x="${barX}" y="${cy - 3.5}" width="${barW}" height="7" rx="1.5" fill="var(--bg4)"/>`,
      `<rect x="${barX}" y="${cy - 3.5}" width="${bw}" height="7" rx="1.5" fill="${r.color || 'var(--accent)'}" opacity="0.82"/>`,
      `<text x="${barX + barW + 3}" y="${cy + 3}" font-size="8" fill="var(--muted)" font-family="IBM Plex Mono,monospace">${r.num}</text>`,
    ].join('');
  }).join('');
  return `<svg width="100%" viewBox="0 0 200 ${h}">${items}</svg>`;
}

export function miniLine(chart) {
  const W = 200, H = 48;
  const allPts = chart.series.flatMap(s => s.pts);
  const minY = Math.min(...allPts), maxY = Math.max(...allPts);
  const yR = maxY - minY || 1;
  const n = chart.series[0].pts.length;
  const px = i => +(4 + (i / Math.max(n - 1, 1)) * (W - 8)).toFixed(1);
  const py = v => +(H - 4 - ((v - minY) / yR) * (H - 10)).toFixed(1);
  const lines = chart.series.map(s => {
    const pts = s.pts.map((v, i) => `${px(i)},${py(v)}`).join(' ');
    return `<polyline points="${pts}" fill="none" stroke="${s.color}" stroke-width="1.5" stroke-linejoin="round" opacity="0.85"/>`;
  }).join('');
  const labels = chart.labels || [];
  const xLabels = labels.length >= 2 ? [
    `<text x="${px(0)}" y="${H + 10}" text-anchor="start" font-size="7" fill="var(--dim)" font-family="IBM Plex Mono,monospace">${labels[0]}</text>`,
    `<text x="${px(labels.length - 1)}" y="${H + 10}" text-anchor="end" font-size="7" fill="var(--dim)" font-family="IBM Plex Mono,monospace">${labels[labels.length - 1]}</text>`,
  ].join('') : '';
  const legend = chart.series.map((s, i) =>
    `<rect x="${i * 92}" y="0" width="7" height="4" rx="1" fill="${s.color}" opacity="0.82"/>` +
    `<text x="${i * 92 + 10}" y="4.5" font-size="7" fill="var(--muted)" font-family="IBM Plex Mono,monospace">${s.label}</text>`
  ).join('');
  return `<svg width="100%" viewBox="0 0 ${W} ${H + 16}"><g transform="translate(0,12)">${lines}${xLabels}</g><g>${legend}</g></svg>`;
}

export function miniDonut(chart) {
  const slices = chart.slices;
  const sum = slices.reduce((a, s) => a + s.val, 0);
  const cx = 36, cy = 36, r = 28;
  let angle = -Math.PI / 2;
  const paths = slices.map(s => {
    const a = (s.val / sum) * 2 * Math.PI;
    const x1 = +(cx + r * Math.cos(angle)).toFixed(2);
    const y1 = +(cy + r * Math.sin(angle)).toFixed(2);
    angle += a;
    const x2 = +(cx + r * Math.cos(angle)).toFixed(2);
    const y2 = +(cy + r * Math.sin(angle)).toFixed(2);
    const large = a > Math.PI ? 1 : 0;
    return `<path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} Z" fill="${s.color}" opacity="0.82"/>`;
  }).join('');
  const hole = `<circle cx="${cx}" cy="${cy}" r="${Math.round(r * 0.55)}" fill="var(--bg2)"/>`;
  const legend = slices.map((s, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 76 + col * 62, y = 12 + row * 18;
    const pct = Math.round(s.val / sum * 100);
    return `<rect x="${x}" y="${y}" width="7" height="7" rx="1.5" fill="${s.color}" opacity="0.82"/>` +
           `<text x="${x + 10}" y="${y + 6.5}" font-size="8" fill="var(--muted)" font-family="IBM Plex Mono,monospace">${s.lbl} ${pct}%</text>`;
  }).join('');
  return `<svg width="100%" viewBox="0 0 200 72">${paths}${hole}${legend}</svg>`;
}

export function miniScatter(chart) {
  const W = 200, H = 76;
  const px = v => +(14 + (v / 100) * (W - 28)).toFixed(1);
  const py = v => +(H - 8 - (v / 100) * (H - 20)).toFixed(1);
  const grid = [
    `<line x1="${px(0)}" y1="${py(50)}" x2="${px(100)}" y2="${py(50)}" stroke="var(--line2)" stroke-width="0.5" stroke-dasharray="2,3"/>`,
    `<line x1="${px(50)}" y1="${py(0)}" x2="${px(50)}" y2="${py(100)}" stroke="var(--line2)" stroke-width="0.5" stroke-dasharray="2,3"/>`,
  ].join('');
  const dots = chart.pts.map(p =>
    `<circle cx="${px(p.x)}" cy="${py(p.y)}" r="3.5" fill="var(--coral)" opacity="0.72"><title>${p.lbl}</title></circle>`
  ).join('');
  const axLabels = [
    `<text x="${px(0)}" y="${H + 6}" font-size="7" fill="var(--dim)" font-family="IBM Plex Mono,monospace">${chart.xLabel}</text>`,
    `<text x="${px(100)}" y="${H + 6}" text-anchor="end" font-size="7" fill="var(--dim)" font-family="IBM Plex Mono,monospace">→</text>`,
  ].join('');
  return `<svg width="100%" viewBox="0 0 ${W} ${H + 8}">${grid}${dots}${axLabels}</svg>`;
}

export function renderMiniChart(chart) {
  if (!chart) return '';
  if (chart.type === 'bar')     return miniBar(chart);
  if (chart.type === 'line')    return miniLine(chart);
  if (chart.type === 'donut')   return miniDonut(chart);
  if (chart.type === 'scatter') return miniScatter(chart);
  return '';
}

export function renderBars(containerId, rows) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = rows.map(r => `
    <div class="bar-row">
      <div class="bar-lbl">${r.lbl}</div>
      <div class="bar-track"><div class="bar-fill" style="width:0%;background:${r.color}" data-w="${r.val}"></div></div>
      <div class="bar-val">${r.num}</div>
    </div>`).join('');
  setTimeout(() => {
    el.querySelectorAll('.bar-fill').forEach(f => { f.style.width = f.dataset.w + '%'; });
  }, 80);
}

export function renderCorrs(cat) {
  const filtered = cat === 'all' ? CORRELACOES : CORRELACOES.filter(c => c.cat === cat);
  document.getElementById('corr-grid').innerHTML = filtered.map(c => `
    <div class="corr-card">
      <div class="corr-top">
        <div class="corr-bases">${c.bases.map(b => `<span class="bpill ${BPILL_CLASS[b]||'bp-ext'}">${b}</span>`).join('')}</div>
        <span class="impact-badge imp-${c.impact}">${IMPACT_LABEL[c.impact]}</span>
      </div>
      <div class="corr-title">${c.title}</div>
      <div class="corr-desc">${c.desc}</div>
      ${c.chart ? `<div class="corr-chart"><div class="corr-chart-lbl">${c.chart.title}</div>${renderMiniChart(c.chart)}</div>` : ''}
      <div class="corr-key">${c.key}</div>
    </div>`).join('');
}

export function renderProcessos() {
  const tb = document.getElementById('proc-tbody');
  if (!tb) return;
  tb.innerHTML = DATA.processos.map(p => `
    <tr>
      <td style="font-family:var(--font-mono);font-size:11px;color:var(--text)">${p.proc}</td>
      <td>${p.sub}</td><td>${p.uf}</td><td>${p.mun}</td>
      <td style="font-family:var(--font-mono)">${p.area}</td>
      <td><span class="st ${p.fase}">${p.txt}</span></td>
      <td>${p.tit}</td>
    </tr>`).join('');
}
