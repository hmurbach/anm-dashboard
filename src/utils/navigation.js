const SECTIONS = ['overview','correlacoes','processos','producao','arrecadacao','risco','fiscal','pesquisa','comex'];

function showSection(id, el) {
  SECTIONS.forEach(s => {
    document.getElementById('sec-' + s).style.display = s === id ? '' : 'none';
  });
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (el) el.classList.add('active');
  if (id === 'correlacoes') renderCorrs('all');
  if (id === 'processos')   { renderBars('bar-uf', DATA.barUF); renderBars('bar-tempo', DATA.barTempo); renderProcessos(); }
  if (id === 'producao')    { renderBars('bar-prod', DATA.barProd); renderBars('bar-preco', DATA.barPreco); }
  if (id === 'arrecadacao') { renderBars('bar-cfem-uf', DATA.barCfemUF); }
  if (id === 'fiscal')      { renderBars('bar-tah', DATA.barTAH); renderBars('bar-carga', DATA.barCarga); }
  if (id === 'pesquisa')    { renderBars('bar-dipem', DATA.barDipem); renderBars('bar-ciclo', DATA.barCiclo); }
  if (id === 'comex')       { renderBars('bar-exp-sub', DATA.barExpSub); renderBars('bar-exp-pais', DATA.barExpPais); renderBars('bar-exp-uf', DATA.barExpUF); renderBars('bar-exp-via', DATA.barExpVia); }
}

document.getElementById('corr-tabs').addEventListener('click', e => {
  const t = e.target.closest('.ctab');
  if (!t) return;
  document.querySelectorAll('.ctab').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  renderCorrs(t.dataset.cat);
});

