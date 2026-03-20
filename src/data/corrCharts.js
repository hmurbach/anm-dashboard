export const CORR_CHARTS = [
  // 1 · Evasão fiscal — gap preço implícito vs mercado
  { type:'bar', title:'Gap fiscal estimado (%)', rows:[
    {lbl:'Ouro',   val:42, color:'#d4860f', num:'42%'},
    {lbl:'Cobre',  val:31, color:'#b83a1f', num:'31%'},
    {lbl:'Nióbio', val:18, color:'#0f6357', num:'18%'},
    {lbl:'Ferro',  val:8,  color:'#1a4d8f', num:'8%'},
  ]},
  // 2 · Inadimplência TAH — % titulares por UF
  { type:'bar', title:'Inadimplência por UF (%)', rows:[
    {lbl:'PA', val:45, color:'#9a1f5e', num:'45%'},
    {lbl:'AM', val:38, color:'#9a1f5e', num:'38%'},
    {lbl:'RO', val:30, color:'#9a1f5e', num:'30%'},
    {lbl:'MG', val:22, color:'#9a1f5e', num:'22%'},
    {lbl:'GO', val:17, color:'#9a1f5e', num:'17%'},
  ]},
  // 3 · CFEM vs produção — série temporal normalizada
  { type:'line', title:'Produção vs CFEM · 2018–2024', series:[
    {label:'Produção (norm.)', color:'#d4860f', pts:[62,68,72,80,74,86,100]},
    {label:'CFEM (norm.)',     color:'#b83a1f', pts:[49,58,66,72,63,86,100]},
  ], labels:['18','19','20','21','22','23','24']},
  // 4 · Carga fiscal total — top titulares
  { type:'bar', title:'Carga fiscal consolidada', rows:[
    {lbl:'Vale',     val:92, color:'#9a1f5e', num:'R$ 4,1bi'},
    {lbl:'Glencore', val:65, color:'#9a1f5e', num:'R$ 2,9bi'},
    {lbl:'Anglo',    val:52, color:'#9a1f5e', num:'R$ 2,3bi'},
    {lbl:'Kinross',  val:38, color:'#9a1f5e', num:'R$ 1,7bi'},
    {lbl:'CSN',      val:28, color:'#9a1f5e', num:'R$ 1,2bi'},
  ]},
  // 5 · Sobreposição áreas protegidas — donut por tipo
  { type:'donut', title:'Área minerária em zonas protegidas', slices:[
    {lbl:'TI',         val:31, color:'#b83a1f'},
    {lbl:'UC',         val:28, color:'#1a4d8f'},
    {lbl:'APP',        val:24, color:'#1a6e3c'},
    {lbl:'Quilombola', val:17, color:'#4c3db0'},
  ]},
  // 6 · Calor fiscal — CFEM por município
  { type:'bar', title:'CFEM por município (top 5)', rows:[
    {lbl:'Parauapebas', val:95, color:'#b83a1f', num:'R$ 2,1bi'},
    {lbl:'Mariana',     val:72, color:'#b83a1f', num:'R$ 1,6bi'},
    {lbl:'Canaã (PA)',  val:54, color:'#b83a1f', num:'R$ 1,2bi'},
    {lbl:'Itabira',     val:38, color:'#b83a1f', num:'R$ 840M'},
    {lbl:'Congonhas',   val:28, color:'#b83a1f', num:'R$ 620M'},
  ]},
  // 7 · Densidade por bioma
  { type:'bar', title:'Processos minerários por bioma', rows:[
    {lbl:'Amazônia',    val:42, color:'#1a6e3c', num:'42%'},
    {lbl:'Cerrado',     val:35, color:'#d4860f', num:'35%'},
    {lbl:'M. Atlântica',val:13, color:'#4c3db0', num:'13%'},
    {lbl:'Caatinga',    val:6,  color:'#b83a1f', num:'6%'},
    {lbl:'Pampa',       val:4,  color:'#0f6357', num:'4%'},
  ]},
  // 8 · Barragens vs hidrografia — por nível de risco
  { type:'bar', title:'Barragens em ZAS hídrica · por risco', rows:[
    {lbl:'Alto',  val:33, color:'#b83a1f', num:'78'},
    {lbl:'Médio', val:67, color:'#d4860f', num:'156'},
    {lbl:'Baixo', val:100,color:'#1a6e3c', num:'234'},
  ]},
  // 9 · Risco financeiro — scatter DPA × CFEM
  { type:'scatter', title:'Risco × capacidade financeira', pts:[
    {x:85, y:20, lbl:'Samarco'},
    {x:72, y:65, lbl:'Vale-MG'},
    {x:60, y:80, lbl:'Vale-PA'},
    {x:45, y:55, lbl:'Anglo'},
    {x:30, y:40, lbl:'Kinross'},
    {x:20, y:75, lbl:'Glencore'},
    {x:15, y:30, lbl:'CSN'},
    {x:55, y:15, lbl:'Sigma'},
  ], xLabel:'DPA (risco↑)', yLabel:'CFEM (cap.↑)'},
  // 10 · Retenção especulativa — por faixa de tempo
  { type:'bar', title:'Processos em pesquisa s/ DIPEM', rows:[
    {lbl:'> 15 anos', val:88, color:'#b83a1f', num:'12.400'},
    {lbl:'10–15a',    val:62, color:'#d4860f', num:'8.700'},
    {lbl:'5–10a',     val:40, color:'#92560a', num:'5.600'},
    {lbl:'< 5a',      val:18, color:'#6b7166', num:'2.500'},
  ]},
  // 11 · Volume rejeito vs capacidade — % utilização
  { type:'bar', title:'Capacidade de barragem utilizada (%)', rows:[
    {lbl:'Site A', val:95, color:'#b83a1f', num:'95%'},
    {lbl:'Site B', val:88, color:'#b83a1f', num:'88%'},
    {lbl:'Site C', val:74, color:'#d4860f', num:'74%'},
    {lbl:'Site D', val:61, color:'#d4860f', num:'61%'},
    {lbl:'Site E', val:43, color:'#1a6e3c', num:'43%'},
  ]},
  // 12 · Processos sem atividade — donut
  { type:'donut', title:'Atividade declarada por processo', slices:[
    {lbl:'RAL+DIPEM',    val:54, color:'#1a6e3c'},
    {lbl:'Só TAH',       val:29, color:'#d4860f'},
    {lbl:'Sem atividade',val:17, color:'#b83a1f'},
  ]},
  // 13 · Preço implícito — CFEM ÷ RAL
  { type:'bar', title:'Preço implícito CFEM ÷ RAL', rows:[
    {lbl:'Ouro',   val:88, color:'#d4860f', num:'R$ 312k/t'},
    {lbl:'Nióbio', val:72, color:'#0f6357', num:'R$ 28k/t'},
    {lbl:'Cobre',  val:55, color:'#b83a1f', num:'R$ 42/kg'},
    {lbl:'Ferro',  val:30, color:'#1a4d8f', num:'R$ 480/t'},
  ]},
  // 14 · HHI concentração de mercado
  { type:'bar', title:'Índice HHI por substância', rows:[
    {lbl:'Nióbio', val:95, color:'#4c3db0', num:'9.400'},
    {lbl:'Ouro',   val:72, color:'#d4860f', num:'6.800'},
    {lbl:'Cobre',  val:58, color:'#b83a1f', num:'5.500'},
    {lbl:'Ferro',  val:42, color:'#1a4d8f', num:'3.900'},
    {lbl:'Areia',  val:15, color:'#1a6e3c', num:'1.400'},
  ]},
  // 15 · ROI de pesquisa — CFEM ÷ DIPEM
  { type:'bar', title:'ROI de pesquisa (CFEM / DIPEM)', rows:[
    {lbl:'Ouro',   val:88, color:'#0f6357', num:'9,2×'},
    {lbl:'Nióbio', val:72, color:'#0f6357', num:'7,5×'},
    {lbl:'Cobre',  val:58, color:'#0f6357', num:'6,1×'},
    {lbl:'Ferro',  val:42, color:'#0f6357', num:'4,4×'},
    {lbl:'Outros', val:22, color:'#6b7166', num:'2,3×'},
  ]},
  // 16 · Fronteira mineral inexplorada — área sem RAL
  { type:'bar', title:'Área em pesquisa sem produção RAL', rows:[
    {lbl:'Lítio',    val:88, color:'#4c3db0', num:'2,1 Mha'},
    {lbl:'T. Raras', val:72, color:'#0f6357', num:'1,7 Mha'},
    {lbl:'Cobre',    val:55, color:'#b83a1f', num:'1,3 Mha'},
    {lbl:'Nióbio',   val:38, color:'#d4860f', num:'0,9 Mha'},
    {lbl:'Ouro',     val:28, color:'#d4860f', num:'0,7 Mha'},
  ]},
  // 17 · CFEM vs IDH — scatter municipal
  { type:'scatter', title:'CFEM vs IDH municipal', pts:[
    {x:82, y:72, lbl:'Parauapebas'},
    {x:68, y:65, lbl:'Itabira'},
    {x:55, y:71, lbl:'Mariana'},
    {x:40, y:58, lbl:'Itaituba'},
    {x:28, y:52, lbl:'Oriximiná'},
    {x:72, y:69, lbl:'Canaã Metais'},
    {x:20, y:48, lbl:'Alta Floresta'},
    {x:35, y:60, lbl:'Corumbá'},
  ], xLabel:'CFEM distribuída', yLabel:'IDH-M ×100'},
  // 18 · TIs e garimpo — processos por UF
  { type:'bar', title:'Processos garimpo em TIs por UF', rows:[
    {lbl:'PA', val:92, color:'#b83a1f', num:'3.200'},
    {lbl:'AM', val:78, color:'#b83a1f', num:'2.700'},
    {lbl:'RO', val:52, color:'#d4860f', num:'1.800'},
    {lbl:'MT', val:35, color:'#d4860f', num:'1.200'},
    {lbl:'AC', val:22, color:'#92560a', num:'760'},
  ]},
  // 19 · Emprego vs produção — declarado vs formal
  { type:'bar', title:'Empregos declarados vs formais', rows:[
    {lbl:'RAL declarado', val:88, color:'#1a6e3c', num:'142k'},
    {lbl:'RAIS formal',   val:62, color:'#1a4d8f', num:'98k'},
    {lbl:'Gap estimado',  val:30, color:'#b83a1f', num:'44k'},
  ]},
  // 20 · Risco barragem vs população
  { type:'bar', title:'Pop. exposta em ZAS por nível', rows:[
    {lbl:'Alto risco',  val:88, color:'#b83a1f', num:'1,2M hab.'},
    {lbl:'Médio risco', val:62, color:'#d4860f', num:'840k'},
    {lbl:'Baixo risco', val:38, color:'#1a6e3c', num:'510k'},
  ]},
  // 21 · Ciclo de vida do processo — duração por fase
  { type:'bar', title:'Duração média por fase (anos)', rows:[
    {lbl:'Req→Aut Pesq.', val:22,  color:'#4c3db0', num:'1,8a'},
    {lbl:'Pesquisa',      val:100, color:'#1a4d8f', num:'8,2a'},
    {lbl:'Aut→Lavra',     val:63,  color:'#d4860f', num:'5,2a'},
    {lbl:'Implantação',   val:40,  color:'#1a6e3c', num:'3,3a'},
  ]},
  // 22 · Ciclos de commodities — CFEM vs LME
  { type:'line', title:'CFEM vs preços LME · 2010–2023', series:[
    {label:'CFEM (norm.)', color:'#b83a1f', pts:[32,38,41,55,48,58,65,72,68,82,76,88,92,80]},
    {label:'LME (norm.)',  color:'#1a4d8f', pts:[40,45,42,62,50,60,70,78,65,85,72,90,88,75]},
  ], labels:['10','11','12','13','14','15','16','17','18','19','20','21','22','23']},
  // 23 · Tempo de maturação — mediana DIPEM→RAL
  { type:'bar', title:'Mediana DIPEM→1º RAL por substância', rows:[
    {lbl:'Nióbio',   val:95, color:'#0f6357', num:'11,2a'},
    {lbl:'Ouro',     val:80, color:'#d4860f', num:'9,5a'},
    {lbl:'Cobre',    val:72, color:'#b83a1f', num:'8,6a'},
    {lbl:'Ferro',    val:55, color:'#1a4d8f', num:'6,5a'},
    {lbl:'Calcário', val:35, color:'#1a6e3c', num:'4,2a'},
  ]},
  // 24 · Evolução risco de barragens — série histórica
  { type:'line', title:'Evolução risco e estoque · 2010–2023', series:[
    {label:'Alto risco (%)',  color:'#b83a1f', pts:[12,14,15,17,22,28,25,31,34,38,35,42,45,48]},
    {label:'Estoque (norm.)', color:'#1a4d8f', pts:[42,48,52,58,64,72,68,78,82,88,84,90,96,100]},
  ], labels:['10','11','12','13','14','15','16','17','18','19','20','21','22','23']},
];
