# Roadmap — ANM Dashboard

## Fase 1 — Base estática ✅ Concluída

- [x] Layout completo (topbar, sidebar, main)
- [x] 9 seções navegáveis
- [x] 16 KPIs com variação anual
- [x] Gráficos de barras animados
- [x] Donut chart de fases
- [x] Heatmap risco × porte (SIGBM)
- [x] Seção COMEX com 4 gráficos + 6 cruzamentos + API reference
- [x] 30 correlações ANM × COMEX categorizadas e filtráveis
- [x] Design system light mode (CSS tokens, tipografia Syne + DM Sans + IBM Plex Mono)
- [x] Módulo `api.js` com funções para SIGMINE e ComexStat
- [x] Documentação completa (README, apis.md, correlacoes.md)

---

## Fase 2 — Dados reais (próximos passos)

### 2.1 Conectar SIGMINE
```js
// src/utils/api.js — já implementado, basta chamar:
import { API } from './utils/api.js';

const processos = await API.queryProcessos({ uf: 'PA', substancia: 'OURO' });
```
- [ ] Substituir tabela de processos por dados reais do SIGMINE
- [ ] Conectar filtros globais (UF, substância, fase) ao `API.queryProcessos()`
- [ ] Atualizar KPI "Processos ativos" com contagem real via `1=1` + `returnCountOnly=true`

### 2.2 Conectar ComexStat
```js
const exp = await API.queryGeneral({
  flow: 'export',
  yearStart: 2023, yearEnd: 2024,
  monthStart: 1,   monthEnd: 12,
  details: ['ncm', 'country', 'state'],
  filters: { ncm: Object.values(NCM_MINERAIS).flat() },
  metrics: ['metricFOB', 'metricKG']
});
```
- [ ] Popular gráficos COMEX com dados reais
- [ ] Implementar seleção dinâmica de ano/período nos filtros

### 2.3 Download e cache de CSVs ANM
- [ ] Script Python para baixar RAL, CFEM, TAH, SCM do dados.gov.br
- [ ] Conversão para JSON leve para consumo no browser
- [ ] Atualização semanal via GitHub Actions

---

## Fase 3 — Mapa geoespacial

- [ ] Integrar Leaflet.js (`unpkg.com/leaflet`)
- [ ] Renderizar polígonos do SIGMINE como GeoJSON
- [ ] Camadas toggleáveis: processos, barragens, TIs, UCs
- [ ] Colorir polígonos por fase / substância / DPA

```html
<!-- Adicionar no <head> -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
```

```js
// Substituir .map-ph por:
const map = L.map('mapa').setView([-14, -52], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const geojson = await API.queryProcessos({ uf: 'PA' });
// reativar geometria: returnGeometry: true no queryProcessos
L.geoJSON(geojson, { style: f => ({ color: colorByFase(f.properties.FASE) }) }).addTo(map);
```

---

## Fase 4 — Pipeline analítico Python

Cruzamentos pesados que o browser não comporta:

```
anm-dashboard/
└── pipeline/
    ├── requirements.txt
    ├── ingest/
    │   ├── download_anm.py       # baixa CSVs do dados.gov.br
    │   └── download_comex.py     # chama API ComexStat e salva parquet
    ├── transform/
    │   ├── join_ral_comex.py     # correlação #25: produção × exportação
    │   ├── preco_implicito.py    # correlação #26: CFEM vs FOB
    │   └── hhi_substancia.py    # correlação #14: índice de concentração
    └── export/
        └── to_json.py            # gera JSON para o dashboard consumir
```

**Dependências sugeridas:**
```
pandas>=2.0
geopandas>=0.14
requests>=2.31
pyarrow>=14.0
```

---

## Fase 5 — Autenticação e deploy

- [ ] Configurar GitHub Actions para CI (lint + build)
- [ ] Deploy no GitHub Pages (`gh-pages` branch)
- [ ] Ou deploy no Vercel/Netlify (arrastar pasta)
- [ ] Adicionar variável de ambiente para tokens futuros (ex: Integra Comex Serpro)

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```
