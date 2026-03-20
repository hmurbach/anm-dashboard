import { DATA } from './data/chartData.js';
import { CORRELACOES } from './data/correlacoes.js';
import { CORR_CHARTS } from './data/corrCharts.js';
import { renderBars } from './utils/render.js';
import { initNavigation } from './utils/navigation.js';

const SECTIONS = ['overview','correlacoes','processos','producao','arrecadacao','risco','fiscal','pesquisa','comex'];

async function loadSections() {
  const main = document.getElementById('main-content');
  for (const id of SECTIONS) {
    const res = await fetch(`src/sections/${id}.html`);
    const html = await res.text();
    main.insertAdjacentHTML('beforeend', html);
  }
}

async function init() {
  await loadSections();
  CORRELACOES.forEach((c, i) => { c.chart = CORR_CHARTS[i]; });
  renderBars('bar-subs', DATA.barSubs);
  initNavigation();
}

init();
