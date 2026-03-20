/* ─────────────────────────────────────────────────────────────
   api.js — integrações com as APIs do gov.br
   ANM (SIGMINE ArcGIS REST) + ComexStat (MDIC)
   ───────────────────────────────────────────────────────────── */

const API = {

  /* ── ANM · SIGMINE ─────────────────────────────────────── */
  SIGMINE_BASE: 'https://geo.anm.gov.br/arcgis/rest/services/SIGMINE/dados_anm/MapServer',

  /**
   * Consulta processos minerários ativos com filtros opcionais.
   * @param {object} opts - { uf, substancia, fase, limit }
   * @returns {Promise<object>} GeoJSON FeatureCollection
   */
  async queryProcessos({ uf = '', substancia = '', fase = '', regime = '', bioma = '', limit = 200 } = {}) {
    const where = buildWhere({ uf, substancia, fase, regime, bioma });
    const params = new URLSearchParams({
      where,
      outFields: 'PROCESSO,FASE,TITULAR,SUBS,UF,MUNICIPIO,AREA_HA,DSC_REGIAO',
      f: 'geojson',
      resultRecordCount: limit,
      returnGeometry: false,
    });
    const res = await fetch(`${API.SIGMINE_BASE}/0/query?${params}`);
    if (!res.ok) throw new Error(`SIGMINE error: ${res.status}`);
    return res.json();
  },

  /**
   * Download shapefile de processos por estado.
   * @param {string} uf - sigla da UF (ex: 'MG'). 'BRASIL' para nacional.
   * @returns {string} URL direta para download do .zip
   */
  shapefileUrl(uf = 'BRASIL') {
    const slug = uf.toUpperCase();
    return `https://app.anm.gov.br/dadosabertos/SIGMINE/PROCESSOS_MINERARIOS/${slug}.zip`;
  },

  /* ── ComexStat · MDIC ───────────────────────────────────── */
  COMEX_BASE: 'https://api-comexstat.mdic.gov.br',

  /**
   * Consulta exportações ou importações gerais.
   * @param {object} body - payload ComexStat /general
   * @returns {Promise<object>} JSON com array de registros
   *
   * Exemplo de body:
   * {
   *   flow: 'export',          // 'export' | 'import'
   *   monthStart: 1,
   *   monthEnd: 12,
   *   yearStart: 2022,
   *   yearEnd: 2024,
   *   details: ['ncm', 'country', 'state'],
   *   filters: { ncm: ['26011100', '26011200'] },
   *   metrics: ['metricFOB', 'metricKG']
   * }
   */
  async queryGeneral(body) {
    const res = await fetch(`${API.COMEX_BASE}/general?language=pt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`ComexStat error: ${res.status}`);
    return res.json();
  },

  /**
   * Consulta exportações/importações por município.
   * @param {object} body - payload ComexStat /cities
   */
  async queryCities(body) {
    const res = await fetch(`${API.COMEX_BASE}/cities?language=pt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`ComexStat /cities error: ${res.status}`);
    return res.json();
  },

  /**
   * Lista filtros disponíveis (países, blocos, NCMs, vias, URFs).
   * @param {'country'|'block'|'ncm'|'via'|'urf'|'state'} filterType
   */
  async getFilters(filterType) {
    const res = await fetch(`${API.COMEX_BASE}/general/filters/${filterType}?language=pt`);
    if (!res.ok) throw new Error(`ComexStat filters error: ${res.status}`);
    return res.json();
  },

  /* ── ANM · Dados Abertos (Portal CKAN) ─────────────────── */
  DADOS_BASE: 'https://dados.gov.br/api/3/action',

  /**
   * Busca conjuntos de dados da ANM no Portal Dados Abertos.
   * @param {string} query - termo de busca
   * @param {number} rows  - número de resultados
   */
  async searchDatasets(query = 'ANM mineração', rows = 10) {
    const params = new URLSearchParams({ q: query, rows, fq: 'organization:agencia-nacional-de-mineracao-anm' });
    const res = await fetch(`${API.DADOS_BASE}/package_search?${params}`);
    if (!res.ok) throw new Error(`Dados.gov.br error: ${res.status}`);
    return res.json();
  },
};

/* ── helpers internos ───────────────────────────────────── */
function buildWhere({ uf, substancia, fase, regime, bioma }) {
  const parts = [];
  if (uf)         parts.push(`UF='${uf.toUpperCase()}'`);
  if (substancia) parts.push(`UPPER(SUBS) LIKE '%${substancia.toUpperCase()}%'`);
  if (fase)       parts.push(`UPPER(FASE) LIKE '%${fase.toUpperCase()}%'`);
  if (regime)     parts.push(`UPPER(DSC_REGIAO) LIKE '%${regime.toUpperCase()}%'`);
  if (bioma)      parts.push(`UPPER(BIOMA) LIKE '%${bioma.toUpperCase()}%'`);
  return parts.length ? parts.join(' AND ') : '1=1';
}

/* ── NCMs relevantes para mineração (Seção V SH) ────────── */
const NCM_MINERAIS = {
  ferro:    ['26011100', '26011200'],
  ouro:     ['26160000'],
  cobre:    ['26030000'],
  niobio:   ['26159000'],
  bauxita:  ['26060000'],
  manganes: ['26020000'],
  chumbo:   ['26070000'],
  zinco:    ['26080000'],
  calcario: ['25210000', '25221000'],
  sal:      ['25010010', '25010020'],
  fosfato:  ['25101000', '25102000'],
};

export { API, NCM_MINERAIS };
