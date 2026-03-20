# Catálogo de Correlações Analíticas — ANM + ComexStat

30 cruzamentos mapeados entre as 8 bases de dados.  
Organizados por dimensão analítica e nível de impacto.

---

## Fiscal (4 correlações)

| # | Título | Bases | Impacto | Chave de JOIN |
|---|--------|-------|---------|---------------|
| 1 | Evasão fiscal por substância | SCM + RAL + CFEM | 🔴 Alto | `num_processo + ano_base + substancia` |
| 2 | Mapa de inadimplência TAH | SCM + TAH | 🔴 Alto | `num_processo + cpf_cnpj + ano` |
| 3 | Receita CFEM vs. produção física | SCM + CFEM + RAL | 🔴 Alto | `substancia + uf + ano_base` |
| 4 | Carga fiscal total por titular | SCM + TAH + CFEM | 🟡 Médio | `cpf_cnpj + num_processo` |

---

## Geoespacial (4 correlações)

| # | Título | Bases | Impacto | Chave de JOIN |
|---|--------|-------|---------|---------------|
| 5 | Sobreposição com áreas protegidas | SCM + SIGMINE | 🔴 Alto | `geometria · ST_Intersects` |
| 6 | Calor fiscal no território | SIGMINE + CFEM | 🟡 Médio | `municipio + geometria` |
| 7 | Densidade mineral por bioma | SIGMINE + SCM + RAL | 🟡 Médio | `geometria + substancia + uf` |
| 8 | Barragens vs. hidrografia | SIGMINE + SIGBM | 🔴 Alto | `geometria · buffer + ST_Within` |

---

## Risco (4 correlações)

| # | Título | Bases | Impacto | Chave de JOIN |
|---|--------|-------|---------|---------------|
| 9 | Risco financeiro por barragem | SIGBM + SCM + CFEM | 🔴 Alto | `num_processo + cpf_cnpj` |
| 10 | Retenção especulativa de área | SCM + DIPEM | 🟡 Médio | `num_processo + fase + data_protocolo` |
| 11 | Volume de rejeito vs. capacidade | SIGBM + RAL | 🔴 Alto | `num_processo + ano_base` |
| 12 | Processos sem atividade real | SCM + TAH + DIPEM | 🟡 Médio | `num_processo + ano_base` |

---

## Mercado (4 correlações)

| # | Título | Bases | Impacto | Chave de JOIN |
|---|--------|-------|---------|---------------|
| 13 | Preço implícito por substância | RAL + CFEM | 🔴 Alto | `substancia + ano_base + uf` |
| 14 | Concentração de mercado (HHI) | SCM + RAL | 🟡 Médio | `cpf_cnpj + substancia + volume_RAL` |
| 15 | ROI de pesquisa mineral | DIPEM + RAL + CFEM | 🟡 Médio | `num_processo + ano_base` |
| 16 | Fronteira mineral inexplorada | SCM + SIGMINE + RAL | 🟢 Exploratório | `geometria + substancia + fase` |

---

## Social (4 correlações)

| # | Título | Bases | Impacto | Chave de JOIN |
|---|--------|-------|---------|---------------|
| 17 | CFEM vs. IDH municipal | SIGMINE + CFEM + IBGE | 🔴 Alto | `municipio + cod_ibge` |
| 18 | Terras indígenas e garimpo | SIGMINE + FUNAI | 🔴 Alto | `geometria + tipo_regime` |
| 19 | Emprego vs. produção mineral | RAL + RAIS/CAGED | 🟡 Médio | `cpf_cnpj + municipio + ano` |
| 20 | Risco de barragem vs. população | SIGBM + Censo IBGE | 🔴 Alto | `geometria (buffer ZAS) + censo IBGE` |

---

## Temporal (4 correlações)

| # | Título | Bases | Impacto | Chave de JOIN |
|---|--------|-------|---------|---------------|
| 21 | Ciclo de vida do processo | SCM + RAL | 🟡 Médio | `num_processo + datas + ano_base` |
| 22 | Ciclos de commodities e produção | CFEM + RAL + LME/USGS | 🔴 Alto | `substancia + ano_base + preco_externo` |
| 23 | Tempo de maturação por substância | SCM + DIPEM + RAL | 🟢 Exploratório | `num_processo + ano_base` |
| 24 | Evolução do risco de barragens | SIGBM + SCM | 🟡 Médio | `num_processo + data_classificacao` |

---

## COMEX × ANM (6 correlações)

| # | Título | Bases | Impacto | Chave de JOIN |
|---|--------|-------|---------|---------------|
| 25 | Produção extraída vs. volume exportado | RAL + CFEM + ComexStat | 🔴 Alto | `CO_NCM ↔ substancia + SG_UF_NCM + ano_base` |
| 26 | Preço declarado vs. preço FOB exportado | CFEM + ComexStat | 🔴 Alto | `VL_FOB/KG ↔ receita_CFEM/producao_RAL + substancia` |
| 27 | Processos ativos por UF vs. fluxo de exportação | SIGMINE + ComexStat | 🟡 Médio | `SG_UF_NCM ↔ UF_processo + substancia` |
| 28 | Ciclos de commodities e abertura de processos | SCM + ComexStat + LME | 🔴 Alto | `VL_FOB por ano ↔ novos_processos_SCM + substancia` |
| 29 | Taxa de exportação por substância | RAL + ComexStat | 🟡 Médio | `KG_LIQUIDO_COMEX / KG_LIQUIDO_RAL por CO_NCM + ano` |
| 30 | Risco de barragem e dependência exportadora | SIGBM + ComexStat | 🟡 Médio | `cpf_cnpj ↔ exportador + substancia + DPA_SIGBM` |

---

## Legenda

| Símbolo | Significado |
|---------|-------------|
| 🔴 Alto | Impacto direto em política pública, fiscalização ou segurança |
| 🟡 Médio | Relevante para análise setorial e gestão regulatória |
| 🟢 Exploratório | Análise prospectiva, inteligência de mercado |
