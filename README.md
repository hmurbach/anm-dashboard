# ANM Dashboard — Painel de Atividade Mineral Brasileira

Dashboard analítico para exploração e visualização dos dados abertos da Agência Nacional de Mineração (ANM) e comércio exterior mineral (ComexStat/MDIC).

---

## Fontes de dados

| Base | Órgão | Acesso | Atualização |
|------|-------|--------|-------------|
| SCM — Cadastro Mineiro | ANM | Aberto | Diária |
| SIGMINE — Geodados | ANM | Aberto (ArcGIS REST) | Diária |
| RAL — Relatório Anual de Lavra | ANM | Aberto (CSV) | Diária |
| CFEM — Arrecadação | ANM | Aberto | Mensal |
| SIGBM — Barragens | ANM | Aberto | Tempo real |
| TAH — Taxa anual por hectare | ANM | Aberto | Anual |
| DIPEM — Inv. em pesquisa | ANM | Aberto | Anual |
| ComexStat — Exp/Imp | MDIC | Aberto (REST) | Mensal |

---

## Estrutura do projeto

```
anm-dashboard/
├── index.html                  # Entrada principal (monta tudo)
├── package.json
├── README.md
│
├── src/
│   ├── styles/
│   │   └── main.css            # Design tokens + todos os componentes CSS
│   │
│   ├── components/
│   │   └── layout.html         # HTML das seções (topbar, sidebar, todas as views)
│   │
│   ├── data/
│   │   ├── chartData.js        # DATA — séries para os gráficos de barras
│   │   └── correlacoes.js      # CORRELACOES — 24+6 cruzamentos analíticos
│   │
│   └── utils/
│       ├── api.js              # Integração ANM (SIGMINE) + ComexStat (MDIC)
│       ├── render.js           # renderBars(), renderCorrs(), renderProcessos()
│       └── navigation.js       # SECTIONS, showSection(), init
│
├── public/
│   └── (assets estáticos futuros — ícones, mapas base, etc.)
│
└── docs/
    ├── apis.md                 # Documentação das APIs utilizadas
    └── correlacoes.md          # Catálogo completo das correlações analíticas
```

---

## Como rodar

```bash
# Opção 1 — abrir direto no navegador (sem servidor)
open index.html

# Opção 2 — servidor local simples (Python)
python3 -m http.server 8080
# Acesse: http://localhost:8080

# Opção 3 — com live reload (Node)
npx serve .
```

---

## Seções do dashboard

| Seção | Bases | Descrição |
|-------|-------|-----------|
| Visão geral | Todas | KPIs consolidados e gráficos de resumo |
| Correlações | Todas | 30 cruzamentos analíticos categorizados |
| Processos | SCM + SIGMINE | Processos minerários ativos, fases, titulares |
| Produção (RAL) | RAL | Volume bruto/beneficiado por substância e UF |
| Arrecadação (CFEM) | CFEM + IBGE | Receita por substância, UF e município |
| Risco (SIGBM) | SIGBM + SCM | Barragens, DPA, DCE, heatmap risco × porte |
| Fiscal (TAH) | TAH + SCM | Inadimplência fiscal por titular e UF |
| Pesquisa (DIPEM) | DIPEM + RAL | Ciclo de maturação, ROI de pesquisa |
| Comércio exterior | ComexStat | Exportações/importações minerais, NCMs, países |

---

## Integrações de API

### ANM · SIGMINE (ArcGIS REST — sem autenticação)
```
GET https://geo.anm.gov.br/arcgis/rest/services/SIGMINE/dados_anm/MapServer/0/query
  ?where=UF='PA' AND SUBS='OURO'
  &outFields=PROCESSO,FASE,TITULAR,SUBS,UF,MUNICIPIO,AREA_HA
  &f=geojson
  &resultRecordCount=200
```

### ComexStat · MDIC (REST — sem autenticação)
```
POST https://api-comexstat.mdic.gov.br/general?language=pt
Content-Type: application/json

{
  "flow": "export",
  "monthStart": 1, "monthEnd": 12,
  "yearStart": 2022, "yearEnd": 2024,
  "details": ["ncm", "country", "state"],
  "filters": { "ncm": ["26011100", "26011200"] },
  "metrics": ["metricFOB", "metricKG"]
}
```

### Downloads CSV · ANM
```
# Processos por estado (Shapefile)
https://app.anm.gov.br/dadosabertos/SIGMINE/PROCESSOS_MINERARIOS/{UF}.zip

# Dados abertos (CKAN)
https://dados.gov.br/organization/agencia-nacional-de-mineracao-anm
```

---

## Próximos passos sugeridos

- [ ] Conectar `src/utils/api.js` aos gráficos — substituir dados estáticos por chamadas reais
- [ ] Implementar filtros globais (UF, substância, período) com re-fetch das APIs
- [ ] Integrar mapa Leaflet/Mapbox com polígonos do SIGMINE
- [ ] Adicionar camadas geoespaciais: TIs, UCs, Cerrado, Amazônia Legal
- [ ] Pipeline Python para cruzamentos pesados (RAL × ComexStat × CFEM)
- [ ] Cache local dos CSVs anuais da ANM (evitar re-download)

---

## Licença dos dados

Todos os dados utilizados são de domínio público, disponibilizados sob a [Política de Dados Abertos do Poder Executivo Federal](https://www.gov.br/cgu/pt-br/governo-aberto/a-ogp/planos-de-acao/4o-plano-de-acao-brasileiro/compromisso-2-docs/decreto-8777-2016.pdf) (Decreto 8.777/2016).
