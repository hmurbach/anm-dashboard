# Dicionário de Dados — ANM + ComexStat

## SCM — Sistema de Cadastro Mineiro

| Campo | Tipo | Descrição | Exemplo |
|-------|------|-----------|---------|
| `num_processo` | String | Identificador único do processo minerário | `850.001/2024` |
| `cpf_cnpj` | String | Documento do titular (CPF ou CNPJ) | `00000000000191` |
| `nome_titular` | String | Razão social ou nome do titular | `Vale S.A.` |
| `fase` | String | Fase atual do processo | `Autorização de Pesquisa` |
| `uf` | String | Unidade da Federação | `MG` |
| `municipio` | String | Município do processo | `Mariana` |
| `substancia` | String | Substância mineral principal | `FERRO` |
| `area_ha` | Float | Área do processo em hectares | `8200.5` |
| `data_protocolo` | Date | Data de entrada do requerimento | `2024-01-15` |
| `data_validade` | Date | Data de validade do título | `2029-01-15` |

**Fases possíveis:**
- Requerimento de Pesquisa
- Autorização de Pesquisa
- Requerimento de Lavra
- Concessão de Lavra
- Licenciamento
- Lavra Garimpeira
- Registro de Extração
- Disponibilidade

---

## SIGMINE — Sistema de Informações Geográficas da Mineração

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `PROCESSO` | String | Número do processo (chave para JOIN com SCM) |
| `FASE` | String | Fase atual |
| `TITULAR` | String | Nome do titular |
| `CPF_CNPJ` | String | Documento do titular |
| `SUBS` | String | Substância mineral |
| `UF` | String | Estado |
| `MUNICIPIO` | String | Município |
| `AREA_HA` | Double | Área em hectares |
| `DSC_REGIAO` | String | Macrorregião |
| `geometry` | Polygon | Polígono georreferenciado (SIRGAS2000) |

---

## RAL — Relatório Anual de Lavra

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `num_processo` | String | Número do processo (JOIN com SCM) |
| `cpf_cnpj` | String | Documento do titular |
| `ano_base` | Integer | Ano de referência da declaração |
| `substancia` | String | Substância declarada |
| `uf` | String | Estado |
| `qt_producao_bruta` | Float | Quantidade produzida bruta (t ou m³) |
| `qt_producao_beneficiada` | Float | Quantidade beneficiada |
| `qt_agua_mineral` | Float | Produção de água mineral (m³) |
| `qt_mao_obra` | Integer | Número de empregados declarados |
| `vl_investimento` | Float | Investimento total declarado (R$) |

---

## CFEM — Compensação Financeira pela Exploração Mineral

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `num_processo` | String | Número do processo |
| `cpf_cnpj` | String | Documento do titular |
| `ano` | Integer | Ano de referência |
| `mes` | Integer | Mês de referência |
| `municipio` | String | Município de origem |
| `uf` | String | Estado |
| `substancia` | String | Substância |
| `vl_receita_bruta` | Float | Receita bruta declarada (R$) |
| `vl_cfem` | Float | Valor de CFEM recolhido (R$) |
| `aliquota` | Float | Alíquota aplicada (%) |

**Alíquotas CFEM (vigentes):**
| Substância | Alíquota |
|------------|----------|
| Minério de ferro | 3,5% |
| Ouro | 1,5% |
| Diamante | 2,0% |
| Manganês, bauxita, potássio | 3,0% |
| Demais substâncias | 2,0% |
| Água mineral | 2,0% |
| Garimpo | 1,0% |

---

## SIGBM — Sistema Integrado de Gestão de Barragens de Mineração

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id_barragem` | Integer | Identificador único da barragem |
| `num_processo` | String | Processo ANM associado |
| `cpf_cnpj` | String | Titular |
| `nome_barragem` | String | Nome da barragem |
| `municipio` | String | Município |
| `uf` | String | Estado |
| `latitude` | Float | Coordenada geográfica |
| `longitude` | Float | Coordenada geográfica |
| `dpa` | String | Dano Potencial Associado (Alto / Médio / Baixo) |
| `categoria_risco` | String | Classificação de risco estrutural |
| `tipo_rejeito` | String | Tipo de rejeito armazenado |
| `volume_total_m3` | Float | Capacidade total em m³ |
| `altura_m` | Float | Altura da barragem em metros |
| `dce_validade` | Date | Validade da Declaração de Condição de Estabilidade |
| `dce_status` | String | `Válida` / `Vencida` / `Não declarada` |

---

## TAH — Taxa Anual por Hectare

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `num_processo` | String | Número do processo |
| `cpf_cnpj` | String | Titular |
| `ano` | Integer | Ano de referência |
| `area_ha` | Float | Área tributável |
| `vl_cobrado` | Float | Valor cobrado (R$) |
| `vl_pago` | Float | Valor efetivamente pago (R$) |
| `status` | String | `Pago` / `Em aberto` / `Parcelado` |

---

## DIPEM — Declaração de Investimento em Pesquisa Mineral

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `num_processo` | String | Processo em fase de Autorização de Pesquisa |
| `cpf_cnpj` | String | Titular |
| `ano_base` | Integer | Ano de referência |
| `municipio` | String | Município |
| `uf` | String | Estado |
| `substancia` | String | Substância pesquisada |
| `vl_investimento` | Float | Valor total investido em pesquisa (R$) |
| `fase_pesquisa` | String | Etapa da pesquisa (prospecção, mapeamento, sondagem...) |

---

## ComexStat — MDIC

### Exportação (`flow: "export"`)

| Campo CSV | Campo API | Tipo | Descrição |
|-----------|-----------|------|-----------|
| `CO_ANO` | `year` | Integer | Ano |
| `CO_MES` | `month` | Integer | Mês (1–12) |
| `CO_NCM` | `ncm` | String | Código NCM 8 dígitos |
| `CO_UNID` | — | String | Unidade estatística |
| `CO_PAIS` | `country` | String | Código do país destino |
| `SG_UF_NCM` | `state` | String | UF de origem do produto |
| `CO_VIA` | `via` | String | Via de transporte |
| `CO_URF` | `urf` | String | Unidade da Receita Federal |
| `QT_ESTAT` | — | Float | Quantidade estatística |
| `KG_LIQUIDO` | `metricKG` | Float | Peso líquido (kg) |
| `VL_FOB` | `metricFOB` | Float | Valor FOB (US$) |

### Importação (campos adicionais)

| Campo CSV | Campo API | Tipo | Descrição |
|-----------|-----------|------|-----------|
| `VL_FRETE` | `metricFrete` | Float | Valor do frete (US$) |
| `VL_SEGURO` | `metricSeguro` | Float | Valor do seguro (US$) |
| — | `metricCIF` | Float | Valor CIF = FOB + Frete + Seguro (US$) |

### Vias de transporte (`CO_VIA`)

| Código | Descrição |
|--------|-----------|
| 1 | Marítima |
| 2 | Fluvial |
| 3 | Lacustre |
| 4 | Aérea |
| 5 | Postal |
| 6 | Ferroviária |
| 7 | Rodoviária |
| 8 | Conduto/Oleoduto |
| 9 | Meios próprios |
| 10 | Linha de transmissão |
| 11 | Em mãos |

---

## Chaves de JOIN entre bases

| Bases | Campo de ligação | Observação |
|-------|-----------------|------------|
| SCM ↔ SIGMINE | `num_processo` = `PROCESSO` | Chave principal de todos os cruzamentos |
| SCM ↔ RAL | `num_processo` + `ano_base` | JOIN por processo e ano |
| SCM ↔ CFEM | `num_processo` ou `cpf_cnpj` | Por processo ou por empresa |
| SCM ↔ TAH | `num_processo` + `ano` | Por processo e ano |
| SCM ↔ DIPEM | `num_processo` + `ano_base` | Por processo e ano |
| SCM ↔ SIGBM | `num_processo` | Barragem → processo ANM |
| RAL ↔ CFEM | `num_processo` + `substancia` + `ano_base` | Verificação de consistência |
| CFEM ↔ ComexStat | `substancia` ↔ `CO_NCM` + `uf` ↔ `SG_UF_NCM` + `ano` | Via tabela de-para NCM→substância |
| RAL ↔ ComexStat | `substancia` ↔ `CO_NCM` + `uf` ↔ `SG_UF_NCM` + `ano_base` | Produção vs. exportação |
| SIGBM ↔ IBGE | `latitude`/`longitude` → geocódigo IBGE | Cálculo de população na ZAS |
| CFEM ↔ IBGE | `municipio` ↔ `cod_ibge` | CFEM distribuída vs. IDH |
