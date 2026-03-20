const DATA = {
  barSubs: [
    { lbl:"Ferro", num:"28.4%", val:28.4, color:"var(--amber)" },
    { lbl:"Areia", num:"18.7%", val:18.7, color:"var(--blue)" },
    { lbl:"Calcário", num:"12.3%", val:12.3, color:"var(--teal)" },
    { lbl:"Ouro", num:"9.8%", val:9.8, color:"var(--green)" },
    { lbl:"Cobre", num:"7.2%", val:7.2, color:"var(--coral)" },
    { lbl:"Nióbio", num:"5.6%", val:5.6, color:"var(--purple)" },
    { lbl:"Diamante", num:"4.1%", val:4.1, color:"var(--pink)" },
    { lbl:"Outros", num:"13.9%", val:13.9, color:"var(--muted)" }
  ],
  barUF: [
    { lbl:"MG", num:"24.1%", val:24.1, color:"var(--green)" },
    { lbl:"PA", num:"18.3%", val:18.3, color:"var(--amber)" },
    { lbl:"MT", num:"12.7%", val:12.7, color:"var(--blue)" },
    { lbl:"GO", num:"9.4%", val:9.4, color:"var(--purple)" },
    { lbl:"BA", num:"8.9%", val:8.9, color:"var(--coral)" },
    { lbl:"AM", num:"7.2%", val:7.2, color:"var(--teal)" },
    { lbl:"SP", num:"6.8%", val:6.8, color:"var(--pink)" },
    { lbl:"RS", num:"5.6%", val:5.6, color:"var(--muted)" },
    { lbl:"RO", num:"4.3%", val:4.3, color:"var(--dim)" },
    { lbl:"Outros", num:"2.7%", val:2.7, color:"var(--bg4)" }
  ],
  barTempo: [
    { lbl:"Req. pesquisa", num:"2.1 anos", val:21, color:"var(--purple)" },
    { lbl:"Aut. pesquisa", num:"3.8 anos", val:38, color:"var(--teal)" },
    { lbl:"Concessão lavra", num:"5.2 anos", val:52, color:"var(--amber)" },
    { lbl:"Licenciamento", num:"7.9 anos", val:79, color:"var(--coral)" },
    { lbl:"Garimpeira", num:"1.4 anos", val:14, color:"var(--green)" }
  ],
  barProd: [
    { lbl:"Ferro", num:"820 Mt", val:82, color:"var(--amber)" },
    { lbl:"Areia", num:"450 Mt", val:45, color:"var(--blue)" },
    { lbl:"Calcário", num:"320 Mt", val:32, color:"var(--teal)" },
    { lbl:"Ouro", num:"85 t", val:8.5, color:"var(--green)" },
    { lbl:"Cobre", num:"1.2 Mt", val:12, color:"var(--coral)" },
    { lbl:"Nióbio", num:"28 kt", val:2.8, color:"var(--purple)" },
    { lbl:"Diamante", num:"1.8 M ct", val:18, color:"var(--pink)" }
  ],
  barPreco: [
    { lbl:"Ferro", num:"R$ 45/t", val:45, color:"var(--amber)" },
    { lbl:"Areia", num:"R$ 12/m³", val:12, color:"var(--blue)" },
    { lbl:"Calcário", num:"R$ 28/t", val:28, color:"var(--teal)" },
    { lbl:"Ouro", num:"R$ 180/g", val:180, color:"var(--green)" },
    { lbl:"Cobre", num:"R$ 8.2/kg", val:82, color:"var(--coral)" },
    { lbl:"Nióbio", num:"R$ 95/kg", val:95, color:"var(--purple)" },
    { lbl:"Diamante", num:"R$ 120/ct", val:120, color:"var(--pink)" }
  ],
  barCfemUF: [
    { lbl:"MG", num:"R$ 3.9 bi", val:39, color:"var(--green)" },
    { lbl:"PA", num:"R$ 2.1 bi", val:21, color:"var(--amber)" },
    { lbl:"MT", num:"R$ 1.8 bi", val:18, color:"var(--blue)" },
    { lbl:"GO", num:"R$ 1.2 bi", val:12, color:"var(--purple)" },
    { lbl:"BA", num:"R$ 0.9 bi", val:9, color:"var(--coral)" },
    { lbl:"AM", num:"R$ 0.7 bi", val:7, color:"var(--teal)" },
    { lbl:"SP", num:"R$ 0.6 bi", val:6, color:"var(--pink)" },
    { lbl:"RS", num:"R$ 0.5 bi", val:5, color:"var(--muted)" },
    { lbl:"RO", num:"R$ 0.3 bi", val:3, color:"var(--dim)" }
  ],
  barTAH: [
    { lbl:"MG", num:"R$ 89 M", val:89, color:"var(--green)" },
    { lbl:"PA", num:"R$ 52 M", val:52, color:"var(--amber)" },
    { lbl:"MT", num:"R$ 41 M", val:41, color:"var(--blue)" },
    { lbl:"GO", num:"R$ 38 M", val:38, color:"var(--purple)" },
    { lbl:"BA", num:"R$ 32 M", val:32, color:"var(--coral)" },
    { lbl:"AM", num:"R$ 28 M", val:28, color:"var(--teal)" },
    { lbl:"SP", num:"R$ 19 M", val:19, color:"var(--pink)" },
    { lbl:"RS", num:"R$ 13 M", val:13, color:"var(--muted)" }
  ],
  barCarga: [
    { lbl:"Vale S.A.", num:"R$ 45 M", val:45, color:"var(--amber)" },
    { lbl:"Mineração Pará", num:"R$ 28 M", val:28, color:"var(--green)" },
    { lbl:"Glencore Brasil", num:"R$ 22 M", val:22, color:"var(--coral)" },
    { lbl:"CBMM", num:"R$ 18 M", val:18, color:"var(--purple)" },
    { lbl:"Votorantim", num:"R$ 15 M", val:15, color:"var(--blue)" }
  ],
  barDipem: [
    { lbl:"Ferro", num:"R$ 1.2 bi", val:120, color:"var(--amber)" },
    { lbl:"Ouro", num:"R$ 0.8 bi", val:80, color:"var(--green)" },
    { lbl:"Cobre", num:"R$ 0.6 bi", val:60, color:"var(--coral)" },
    { lbl:"Nióbio", num:"R$ 0.4 bi", val:40, color:"var(--purple)" },
    { lbl:"Diamante", num:"R$ 0.3 bi", val:30, color:"var(--blue)" }
  ],
  barCiclo: [
    { lbl:"Req. pesquisa", num:"3.2 anos", val:32, color:"var(--purple)" },
    { lbl:"Aut. pesquisa", num:"5.8 anos", val:58, color:"var(--teal)" },
    { lbl:"Concessão lavra", num:"8.1 anos", val:81, color:"var(--amber)" },
    { lbl:"Licenciamento", num:"12.4 anos", val:124, color:"var(--coral)" }
  ],
  barExpSub: [
    { lbl:"Ferro", num:"320 Mt", val:32, color:"var(--amber)" },
    { lbl:"Soja", num:"180 Mt", val:18, color:"var(--green)" },
    { lbl:"Milho", num:"150 Mt", val:15, color:"var(--blue)" },
    { lbl:"Café", num:"45 Mt", val:4.5, color:"var(--purple)" },
    { lbl:"Açúcar", num:"38 Mt", val:3.8, color:"var(--coral)" }
  ],
  barExpPais: [
    { lbl:"China", num:"42%", val:42, color:"var(--amber)" },
    { lbl:"EUA", num:"18%", val:18, color:"var(--blue)" },
    { lbl:"Japão", num:"12%", val:12, color:"var(--green)" },
    { lbl:"Europa", num:"15%", val:15, color:"var(--purple)" },
    { lbl:"Outros", num:"13%", val:13, color:"var(--muted)" }
  ],
  barExpUF: [
    { lbl:"MT", num:"28%", val:28, color:"var(--green)" },
    { lbl:"RS", num:"22%", val:22, color:"var(--blue)" },
    { lbl:"GO", num:"18%", val:18, color:"var(--amber)" },
    { lbl:"MG", num:"15%", val:15, color:"var(--purple)" },
    { lbl:"SP", num:"12%", val:12, color:"var(--coral)" },
    { lbl:"PR", num:"5%", val:5, color:"var(--teal)" }
  ],
  barExpVia: [
    { lbl:"Marítima", num:"68%", val:68, color:"var(--blue)" },
    { lbl:"Rodoviária", num:"22%", val:22, color:"var(--green)" },
    { lbl:"Ferroviária", num:"8%", val:8, color:"var(--amber)" },
    { lbl:"Aérea", num:"2%", val:2, color:"var(--purple)" }
  ],
  processos: [
    { proc:"850.001/2024", sub:"Ouro", uf:"PA", mun:"Parauapebas", area:"1.247 ha", fase:"st-pesq", txt:"Aut. pesquisa", tit:"Mineração Pará S.A." },
    { proc:"849.887/2024", sub:"Ferro", uf:"MG", mun:"Congonhas", area:"892 ha", fase:"st-lavra", txt:"Lavra", tit:"Vale S.A." },
    { proc:"849.720/2024", sub:"Cobre", uf:"GO", mun:"Goiânia", area:"654 ha", fase:"st-req", txt:"Req. pesquisa", tit:"Glencore Brasil Ltda" },
    { proc:"849.501/2024", sub:"Nióbio", uf:"AM", mun:"Manaus", area:"432 ha", fase:"st-susp", txt:"Suspensão", tit:"CBMM" },
    { proc:"849.330/2024", sub:"Calcário", uf:"MT", mun:"Cuiabá", area:"789 ha", fase:"st-lavra", txt:"Lavra", tit:"Votorantim Cimentos" }
  ]
};

const CORRELACOES = [
  { cat:"fiscal", bases:["RAL","CFEM"], impact:"high", title:"Preço implícito vs. mercado", desc:"Correlação entre receita CFEM e volume RAL indica sub-declaração em metais preciosos.", key:"ral-cfem-preco" },
  { cat:"geo", bases:["SIGMINE","SIGBM"], impact:"med", title:"Barragens próximas a processos ativos", desc:"Processos de lavra dentro de 5km de barragens críticas aumentam risco de acidente.", key:"sigmine-sigbm-dist" },
  { cat:"risco", bases:["SIGBM","CFEM"], impact:"high", title:"Risco estrutural vs. porte financeiro", desc:"Titulares pequenos com barragens críticas têm maior exposição regulatória.", key:"sigbm-cfem-porte" },
  { cat:"social", bases:["CFEM","IBGE"], impact:"med", title:"Arrecadação CFEM vs. IDH municipal", desc:"Municípios com alta CFEM não necessariamente têm alto desenvolvimento.", key:"cfem-idh" },
  { cat:"temporal", bases:["SCM","RAL"], impact:"low", title:"Tempo de concessão vs. produção", desc:"Processos mais rápidos geram maior produção por hectare.", key:"scm-ral-tempo" },
  { cat:"mercado", bases:["RAL","EXT"], impact:"med", title:"Produção vs. exportações", desc:"Correlação entre volume RAL e dados de comércio exterior.", key:"ral-ext-vol" },
  { cat:"fiscal", bases:["TAH","SCM"], impact:"high", title:"Inadimplência TAH por titular", desc:"Titulares com múltiplos processos têm maior passivo fiscal.", key:"tah-scm-inad" },
  { cat:"geo", bases:["SIGMINE","IBGE"], impact:"low", title:"Processos em áreas indígenas", desc:"Sobreposição com terras indígenas aumenta complexidade regulatória.", key:"sigmine-ibge-ind" },
  { cat:"risco", bases:["SIGBM","TAH"], impact:"med", title:"Barragens sem DCE vs. inadimplência", desc:"Titulares inadimplentes têm maior chance de não renovar DCE.", key:"sigbm-tah-dce" },
  { cat:"social", bases:["CFEM","EXT"], impact:"low", title:"Royalties vs. empregos gerados", desc:"Correlação entre arrecadação e geração de empregos diretos.", key:"cfem-ext-emprego" },
  { cat:"temporal", bases:["DIPEM","RAL"], impact:"med", title:"Investimento pesquisa vs. produção futura", desc:"ROI de investimentos em pesquisa mineral.", key:"dipem-ral-roi" },
  { cat:"mercado", bases:["RAL","IBGE"], impact:"low", title:"Produção vs. PIB setorial", desc:"Contribuição da mineração para o PIB regional.", key:"ral-ibge-pib" },
  { cat:"fiscal", bases:["CFEM","TAH"], impact:"high", title:"Carga fiscal total por titular", desc:"Soma de CFEM e TAH por empresa revela passivo consolidado.", key:"cfem-tah-total" },
  { cat:"geo", bases:["SIGBM","IBGE"], impact:"med", title:"Barragens vs. população afetada", desc:"Estimativa de pessoas em zona de autossalvamento.", key:"sigbm-ibge-pop" },
  { cat:"risco", bases:["SCM","SIGBM"], impact:"high", title:"Processos ativos vs. barragens", desc:"Titulares com barragens críticas têm processos mais antigos.", key:"scm-sigbm-proc" },
  { cat:"social", bases:["TAH","IBGE"], impact:"low", title:"Inadimplência vs. desenvolvimento", desc:"Regiões com baixo IDH têm maior inadimplência TAH.", key:"tah-ibge-dev" },
  { cat:"temporal", bases:["SCM","TAH"], impact:"med", title:"Idade do processo vs. inadimplência", desc:"Processos antigos têm maior chance de inadimplência.", key:"scm-tah-idade" },
  { cat:"mercado", bases:["EXT","IBGE"], impact:"low", title:"Exportações vs. infraestrutura", desc:"Correlação entre volume exportado e qualidade de infraestrutura.", key:"ext-ibge-infra" },
  { cat:"fiscal", bases:["RAL","TAH"], impact:"med", title:"Produção vs. taxa de fiscalização", desc:"Maior produção atrai mais fiscalização e multas.", key:"ral-tah-fisc" },
  { cat:"geo", bases:["SIGMINE","EXT"], impact:"low", title:"Processos vs. rotas de exportação", desc:"Localização influencia vias de escoamento.", key:"sigmine-ext-rota" },
  { cat:"risco", bases:["SIGBM","EXT"], impact:"med", title:"Barragens vs. cadeias de suprimento", desc:"Interrupções em barragens afetam exportações.", key:"sigbm-ext-sup" },
  { cat:"social", bases:["DIPEM","IBGE"], impact:"low", title:"Pesquisa vs. educação local", desc:"Investimentos em pesquisa correlacionam com educação.", key:"dipem-ibge-edu" },
  { cat:"temporal", bases:["RAL","EXT"], impact:"med", title:"Produção histórica vs. demanda futura", desc:"Tendências de produção influenciam preços futuros.", key:"ral-ext-dem" },
  { cat:"mercado", bases:["CFEM","EXT"], impact:"high", title:"Royalties vs. preços internacionais", desc:"Flutuações no mercado afetam arrecadação CFEM.", key:"cfem-ext-preco" }
];

const IMPACT_LABEL = { high:"Alto impacto", med:"Médio impacto", low:"Exploratório" };
const BPILL_CLASS  = { SCM:"bp-scm", SIGMINE:"bp-sig", RAL:"bp-ral", CFEM:"bp-cfem", SIGBM:"bp-sigbm", TAH:"bp-tah", DIPEM:"bp-dipem", EXT:"bp-ext" };

function renderBars(containerId, rows) {
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

function renderCorrs(cat) {
  const filtered = cat === 'all' ? CORRELACOES : CORRELACOES.filter(c => c.cat === cat);
  document.getElementById('corr-grid').innerHTML = filtered.map(c => `
    <div class="corr-card">
      <div class="corr-top">
        <div class="corr-bases">${c.bases.map(b => `<span class="bpill ${BPILL_CLASS[b]||'bp-ext'}">${b}</span>`).join('')}</div>
        <span class="impact-badge imp-${c.impact}">${IMPACT_LABEL[c.impact]}</span>
      </div>
      <div class="corr-title">${c.title}</div>
      <div class="corr-desc">${c.desc}</div>
      <div class="corr-key">${c.key}</div>
    </div>`).join('');
}

function renderProcessos() {
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

renderBars('bar-subs', DATA.barSubs);