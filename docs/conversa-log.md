# Log da Conversa — ANM Dashboard

> Registro completo da sessão de trabalho com o Claude (Anthropic)  
> Data: Março 2026

---

## Sumário da sessão

Esta sessão construiu do zero um dashboard analítico completo para exploração dos dados abertos da Agência Nacional de Mineração (ANM) e Comércio Exterior (ComexStat/MDIC). O trabalho foi dividido em etapas incrementais, da pesquisa de APIs até a estrutura final do projeto.

---

## 1. Pesquisa inicial — APIs do gov.br

**Pergunta:** Como consumir a API do gov.br?

**Resposta e descobertas:**
- Portal da Transparência: token via cadastro de e-mail, endpoints REST simples
- Login Único / Acesso gov.br: OAuth 2.0 com PKCE para autenticação de cidadãos
- API de Assinatura Eletrônica gov.br: OAuth 2.0, requer integração prévia com Login Único
- Catálogo Conecta gov.br: catálogo completo em `gov.br/conecta/catalogo/`

---

## 2. Escopo de dados — atividade de exploração mineral

**Pergunta:** Quero consultar toda e qualquer informação relacionada à atividade de exploração mineral.

**Descobertas — Ecossistema ANM:**

### API SIGMINE (ArcGIS REST)
- **URL base:** `https://geo.anm.gov.br/arcgis/rest/services/SIGMINE/dados_anm/MapServer`
- **Sem autenticação**
- Dados: processos minerários ativos, áreas de proteção, reservas garimpeiras, arrendamentos
- Formatos: JSON, GeoJSON, PBF
- Query exemplo:
```
GET /0/query?where=UF='SP' AND SUBS='OURO'&outFields=PROCESSO,FASE,TITULAR,SUBS,UF,MUNICIPIO,AREA_HA&f=geojson
```

### Downloads Shapefile/KMZ
- `https://app.anm.gov.br/dadosabertos/SIGMINE/PROCESSOS_MINERARIOS/{UF}.zip`
- Atualização diária

### Bases de dados abertos da ANM (7 bases)
| Base | Conteúdo |
|------|----------|
| RAL | Produção bruta/beneficiada desde 2010 |
| SCM | Cadastro mineiro (requerimentos, títulos, microdados) |
| CFEM | Compensação Financeira pela Exploração Mineral |
| SIGBM | Barragens de mineração |
| TAH | Taxa Anual por Hectare |
| DIPEM | Investimentos em pesquisa mineral |
| SIGMINE | Dados geoespaciais |

---

## 3. Proposta de dashboard

**Pedido:** Crie uma proposta de dashboard que permita navegar e filtrar diferentes informações sobre atividade mineral.

**Entregue:**
- Mockup interativo com modo claro
- 8 seções navegáveis (Visão Geral, Correlações, Processos, Produção, Arrecadação, Risco, Fiscal, Pesquisa)
- KPIs: 187.432 processos ativos, 1,24 Gt produção, R$ 8,3 bi CFEM, 92,1 M ha
- Gráfico de barras por substância (SIGMINE/SCM)
- Donut chart de fases do processo
- Tabela de processos recentes
- Placeholder de mapa geoespacial SIGMINE

---

## 4. Mapeamento de correlações entre bases

**Pergunta:** Tendo acesso às bases da ANM, quais relações podemos fazer entre bases?

**Diagrama entregue:**
- SCM como hub central (chave: `num_processo`)
- Relações diretas: SCM ↔ SIGMINE, SCM ↔ RAL, SCM ↔ CFEM
- Relações indiretas via SCM: SIGBM, TAH, DIPEM

**Correlações mapeadas (8 iniciais):**
1. SCM × SIGMINE — geolocalização de processos
2. SCM × RAL — produção declarada vs. área titulada
3. SCM × CFEM — quem paga, quanto e sobre o quê
4. RAL × CFEM — consistência produção/recolhimento
5. SCM × TAH — inadimplência fiscal
6. SCM/SIGMINE × SIGBM — risco de barragem por processo
7. SCM × DIPEM — retenção especulativa de área
8. RAL × CFEM (preço implícito) — sub-declaração de receita

---

## 5. Expansão para 24 correlações

**Pedido:** Me dê mais possíveis correlações e usos.

**Painel interativo entregue** com 24 correlações em 6 categorias:

### Fiscal (4)
- Evasão fiscal por substância (RAL × CFEM)
- Mapa de inadimplência TAH
- Receita CFEM vs. produção física
- Carga fiscal total por titular

### Geoespacial (4)
- Sobreposição com áreas protegidas (SIGMINE × TIs/UCs)
- Calor fiscal no território (SIGMINE × CFEM)
- Densidade mineral por bioma
- Barragens vs. hidrografia

### Risco (4)
- Risco financeiro por barragem (SIGBM × CFEM)
- Retenção especulativa de área (SCM × DIPEM)
- Volume de rejeito vs. capacidade
- Processos sem atividade real

### Mercado (4)
- Preço implícito por substância (RAL ÷ CFEM)
- Concentração de mercado HHI
- ROI de pesquisa mineral
- Fronteira mineral inexplorada

### Social (4)
- CFEM vs. IDH municipal (× IBGE)
- Terras indígenas e garimpo
- Emprego vs. produção (× RAIS/CAGED)
- Risco de barragem vs. população

### Temporal (4)
- Ciclo de vida do processo
- Ciclos de commodities e produção
- Tempo de maturação por substância
- Evolução do risco de barragens

---

## 6. Dashboard completo com todas as correlações

**Pedido:** Adicione todas essas correlações no dashboard.

**Entregue — arquivo `dashboard-anm.html`:**
- 8 seções navegáveis com dados completos
- 16 KPIs com barras de progresso
- Heatmap: risco DPA × porte financeiro do titular (CFEM)
- Tabela de barragens sem DCE válida
- Correlação Pearson CFEM × IDH (r = 0.31)
- Linha do tempo histórica das bases ANM
- Tema escuro (Syne + DM Sans + IBM Plex Mono)

---

## 7. Tema claro

**Pedido:** Deixe o UI leve, em modo claro.

**Mudanças realizadas:**
- Fundo `#f7f8f6` (off-white), cards `#ffffff`
- Textos `#1a1c18`, muteds `#6b7166`
- Todas as cores de acento convertidas para versões saturadas sobre fundo claro
- Badges e pills com variantes pastel de cada cor
- Heatmap em tons pastel verde→âmbar→coral
- Barras com opacidade 0.8 para leveza visual

---

## 8. Pesquisa COMEX gov.br

**Pedido:** Busque no gov.br informações de COMEX.

**Descobertas:**

### API ComexStat (MDIC) — sem autenticação
- **URL:** `https://api-comexstat.mdic.gov.br`
- **Docs:** `https://api-comexstat.mdic.gov.br/docs`
- Endpoints: `/general`, `/cities`, `/historical-data`
- Dados desde 1997 (mensal), formatos JSON
- Cobertura: NCM, SH, CGCE, CUCI, países, blocos, UF, via, URF

### Base de dados bruta CSV (MDIC)
- Layout exportação: `CO_ANO; CO_MES; CO_NCM; CO_UNID; CO_PAIS; SG_UF_NCM; CO_VIA; CO_URF; QT_ESTAT; KG_LIQUIDO; VL_FOB`
- Layout importação: inclui também `VL_FRETE; VL_SEGURO`

### Integra Comex (SERPRO) — pago/restrito
- OAuth 2.0 + certificado digital e-CNPJ ICP-Brasil
- APIs: DU-E, DI, DUIMP, CE-Mercante, LPCO, Recintos

### Conexão ANM × COMEX (NCMs Seção V)
- Cap. 25 (sal, calcário), Cap. 26 (minérios), Cap. 27 (combustíveis)
- Chave de JOIN: `substancia_ANM` ↔ `CO_NCM` + `uf_ANM` ↔ `SG_UF_NCM`

---

## 9. Seção COMEX no dashboard

**Pedido:** Adicione a seção COMEX como sugerido.

**Adicionado à seção "Comércio exterior mineral":**
- 4 KPIs: US$ 42,1 bi exportações, US$ 11,2 bi importações, US$ 30,9 bi saldo, 18,4% participação
- Gráfico: exportações por substância (FOB)
- Gráfico: destinos (China, EUA, Japão, Noruega, Alemanha)
- Gráfico: exportações por UF (PA e MG = 80%)
- Gráfico: via de transporte (marítima = 94%)
- 6 novos cruzamentos ANM × ComexStat
- Referência completa da API com request body de exemplo
- NCMs relevantes da Seção V
- Tabela de top exportações minerais 2024

---

## 10. Estruturação do projeto

**Pedido:** Vou organizar isso como um projeto.

**Estrutura criada:**
```
anm-dashboard/
├── index.html                  # entrada principal
├── package.json
├── README.md
├── .gitignore
├── .vscode/
│   ├── settings.json           # configurações do editor
│   ├── extensions.json         # extensões recomendadas
│   └── launch.json             # debug no Chrome/Edge
├── src/
│   ├── styles/
│   │   └── main.css            # 421 linhas — design system completo
│   ├── components/
│   │   └── layout.html         # 926 linhas — todas as 9 seções
│   ├── data/
│   │   ├── chartData.js        # DATA object — todos os dados dos gráficos
│   │   └── correlacoes.js      # 30 correlações + labels
│   └── utils/
│       ├── api.js              # integração SIGMINE + ComexStat
│       ├── render.js           # renderBars, renderCorrs, renderProcessos
│       └── navigation.js       # SECTIONS, showSection, init
├── public/                     # assets estáticos (futuro)
└── docs/
    ├── apis.md                 # referência completa das APIs
    ├── correlacoes.md          # catálogo das 30 correlações
    ├── dicionario-dados.md     # todos os campos de todas as bases
    └── roadmap.md              # próximos passos de desenvolvimento
```

---

## Decisões de design

### Paleta de cores (modo claro)
| Variável | Hex | Uso |
|----------|-----|-----|
| `--bg` | `#f7f8f6` | Fundo da página |
| `--bg2` | `#ffffff` | Cards e sidebar |
| `--bg3` | `#f2f3f0` | Superfícies secundárias |
| `--text` | `#1a1c18` | Texto principal |
| `--muted` | `#6b7166` | Texto secundário |
| `--green` | `#1a6e3c` | Acento principal, processos ativos |
| `--amber` | `#92560a` | Produção, RAL, séries temporais |
| `--coral` | `#b83a1f` | CFEM, arrecadação, alertas |
| `--blue` | `#1a4d8f` | SIGMINE, processos, COMEX |
| `--purple` | `#4c3db0` | SCM, cadastro |
| `--teal` | `#0f6357` | DIPEM, pesquisa |
| `--pink` | `#9a1f5e` | TAH, fiscal |

### Tipografia
- **Display:** Syne 700/800 — títulos de seção, valores KPI
- **Body:** DM Sans 300/400/500 — navegação, textos
- **Mono:** IBM Plex Mono 400/500 — labels de gráficos, badges, código

### Componentes reutilizáveis
- `.kpi` — card de métrica com barra de progresso
- `.card` — container branco com borda sutil
- `.bars` / `.bar-row` — gráfico de barras horizontal animado
- `.corr-card` — card de correlação com badges de bases e impacto
- `.bpill` — badge colorido por base (SCM, RAL, CFEM, etc.)
- `.data-table` — tabela com hover state
- `.heat-cell` — célula do heatmap risco × porte

---

## Próximas etapas recomendadas

1. **Abrir no VSCode** e instalar as extensões recomendadas (Live Server, Prettier)
2. **Testar localmente** com Live Server (`Alt+L, Alt+O`)
3. **Conectar APIs reais** em `src/utils/api.js` — as funções já estão prontas
4. **Criar repositório GitHub** e subir o projeto
5. **Pipeline Python** para cruzamentos pesados (RAL × ComexStat)
6. **Mapa Leaflet** para visualização geoespacial do SIGMINE

---

## Recursos úteis

| Recurso | URL |
|---------|-----|
| ANM Dados Abertos | `gov.br/anm/pt-br/acesso-a-informacao/dados-abertos` |
| SIGMINE API | `geo.anm.gov.br/arcgis/rest/services/SIGMINE/dados_anm/MapServer` |
| Downloads SIGMINE | `app.anm.gov.br/dadosabertos/SIGMINE/PROCESSOS_MINERARIOS/` |
| ComexStat Portal | `comexstat.mdic.gov.br` |
| ComexStat API Docs | `api-comexstat.mdic.gov.br/docs` |
| Dados.gov.br ANM | `dados.gov.br/organization/agencia-nacional-de-mineracao-anm` |
| Catálogo Conecta | `gov.br/conecta/catalogo/` |
| Integra Comex | `loja.serpro.gov.br/integracomex` |
