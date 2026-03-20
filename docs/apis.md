# Documentação das APIs — ANM + ComexStat

## 1. ANM · SIGMINE (ArcGIS REST)

**Base URL:** `https://geo.anm.gov.br/arcgis/rest/services/SIGMINE/dados_anm/MapServer`  
**Autenticação:** nenhuma  
**Formatos:** JSON, GeoJSON, PBF  

### Layers disponíveis

| Layer ID | Conteúdo |
|----------|----------|
| 0 | Processos minerários ativos |
| 1 | Áreas de proteção de fonte |
| 2 | Arrendamentos |
| 3 | Áreas de bloqueio |
| 4 | Reservas garimpeiras |

### Campos da Layer 0 (Processos)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| PROCESSO | String | Número único do processo |
| FASE | String | Fase atual (req. pesquisa, aut. pesquisa, concessão lavra…) |
| TITULAR | String | Nome do titular |
| CPF_CNPJ | String | Documento do titular |
| SUBS | String | Substância mineral principal |
| UF | String | Unidade da Federação |
| MUNICIPIO | String | Município |
| AREA_HA | Double | Área em hectares |
| DSC_REGIAO | String | Macrorregião geográfica |

### Exemplos de query

```http
# Todos os processos de ouro no Pará
GET /0/query?where=UF='PA' AND SUBS='OURO'&outFields=*&f=geojson&resultRecordCount=500

# Processos por titular (CNPJ)
GET /0/query?where=CPF_CNPJ='00000000000191'&outFields=PROCESSO,FASE,SUBS,UF&f=json

# Contagem por fase
GET /0/query?where=1=1&groupByFieldsForStatistics=FASE&outStatistics=[{"statisticType":"count","onStatisticField":"PROCESSO","outStatisticFieldName":"TOTAL"}]&f=json
```

---

## 2. ANM · Downloads diretos

### Processos minerários (Shapefile / KMZ)
```
https://app.anm.gov.br/dadosabertos/SIGMINE/PROCESSOS_MINERARIOS/{UF}.zip
https://app.anm.gov.br/dadosabertos/SIGMINE/PROCESSOS_MINERARIOS/{UF}.kmz
https://app.anm.gov.br/dadosabertos/SIGMINE/PROCESSOS_MINERARIOS/BRASIL.zip
```
UFs disponíveis: AC AL AM AP BA CE DF ES GO MA MG MS MT PA PB PE PI PR RJ RN RO RR RS SC SE SP TO + BRASIL

### Dados abertos tabulares (CKAN)

| Dataset | URL dados.gov.br |
|---------|-----------------|
| SCM — Cadastro Mineiro | `/conjuntos-dados/cadastro-mineiro` |
| RAL — Anuário Mineral | `/conjuntos-dados/anuario-mineral-brasileiro-amb` |
| CFEM | `/conjuntos-dados/sistema-arrecadacao` |
| SIGBM — Barragens | `/conjuntos-dados/barragens-de-mineracao` |
| TAH | `/conjuntos-dados/taxa-anual-por-hectare-tah` |
| DIPEM | `/conjuntos-dados/declaracao-de-investimento-em-pesquisa-mineral-dipem` |

---

## 3. ComexStat · MDIC

**Base URL:** `https://api-comexstat.mdic.gov.br`  
**Documentação:** `https://api-comexstat.mdic.gov.br/docs`  
**Autenticação:** nenhuma  
**Idiomas:** `?language=pt` | `en` | `es`  

### Endpoints

#### `POST /general` — Exportação/Importação geral

```json
{
  "flow": "export",
  "monthStart": 1,
  "monthEnd": 12,
  "yearStart": 2020,
  "yearEnd": 2024,
  "details": ["ncm", "country", "state", "via", "urf"],
  "filters": {
    "ncm": ["26011100"],
    "country": ["160"],
    "state": ["MG", "PA"]
  },
  "metrics": ["metricFOB", "metricKG", "metricCIF", "metricFrete", "metricSeguro"]
}
```

**Campos de `details` disponíveis:**
`ncm`, `sh6`, `sh4`, `chapter`, `section`, `isic`, `cgce`, `cuci`, `country`, `block`, `state`, `via`, `urf`

**Métricas disponíveis:**
- `metricFOB` — Valor FOB em US$
- `metricKG` — Peso líquido em kg
- `metricCIF` — Valor CIF em US$ (apenas importação)
- `metricFrete` — Frete em US$ (apenas importação)
- `metricSeguro` — Seguro em US$ (apenas importação)

#### `POST /cities` — Por município do exportador/importador

```json
{
  "flow": "export",
  "monthStart": 1,
  "monthEnd": 12,
  "yearStart": 2023,
  "yearEnd": 2024,
  "details": ["sh4", "country", "state", "city"],
  "filters": {
    "sh4": ["2601", "2616"],
    "state": ["MG"]
  },
  "metrics": ["metricFOB", "metricKG"]
}
```

#### `GET /general/filters/{filter}` — Listas de referência

```
GET /general/filters/ncm?language=pt
GET /general/filters/country?language=pt
GET /general/filters/block?language=pt
GET /general/filters/via?language=pt
GET /general/filters/urf?language=pt
GET /general/filters/state?language=pt
```

#### `GET /general/details?language=pt` — Campos disponíveis para agrupamento

#### `GET /general/metrics?language=pt` — Métricas disponíveis

#### `GET /general/dates/years` — Intervalo de anos disponível

---

## 4. Integra Comex · SERPRO (pago / restrito)

**Uso:** operações individuais de importação/exportação por empresa  
**Autenticação:** OAuth 2.0 + certificado digital e-CNPJ ICP-Brasil  
**Contratação:** `loja.serpro.gov.br/integracomex`

### APIs disponíveis

| API | Dados |
|-----|-------|
| DU-E | Declaração Única de Exportação por chave de acesso |
| DI | Declaração de Importação + adições NCM |
| DUIMP | Declaração Única de Importação |
| CE-Mercante | Conhecimentos de embarque, manifestos, escalas |
| LPCO | Licenças, Permissões, Certificados e Outros |
| Recintos | Eventos de carga e descarga aduaneira |

---

## 5. NCMs relevantes para mineração (Seção V)

| Capítulo/NCM | Descrição |
|--------------|-----------|
| **Cap. 25** | Sal, enxofre, terras, pedras, gesso, cal, cimento |
| 25010010 | Sal marinho |
| 25010020 | Sal-gema |
| 25030000 | Enxofre |
| 25210000 | Calcário |
| **Cap. 26** | Minérios, escórias e cinzas |
| 26011100 | Minério de ferro não aglomerado |
| 26011200 | Minério de ferro aglomerado (pellets) |
| 26020000 | Minério de manganês |
| 26030000 | Minério de cobre |
| 26060000 | Minério de alumínio (bauxita) |
| 26070000 | Minério de chumbo |
| 26080000 | Minério de zinco |
| 26130000 | Minério de molibdênio |
| 26140000 | Minério de titânio |
| 26150000 | Minério de nióbio/zircônio/vanádio |
| 26159000 | Minério de nióbio |
| 26160000 | Minério de metais preciosos (ouro, prata) |
| 26171000 | Minério de cromo |
| **Cap. 27** | Combustíveis minerais, óleos minerais |
| 27011100 | Hulha antracita |
| 27040000 | Coque de carvão |
