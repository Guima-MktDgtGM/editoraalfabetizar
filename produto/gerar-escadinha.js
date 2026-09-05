/* Gera o PDF "Escadinha de Histórias" — 40 histórias em progressão.
   Uso: node gerar-escadinha.js  →  abre escadinha-de-historias.html no Chrome →
        Imprimir → Salvar como PDF (A4, margens padrão, com gráficos de fundo). */
const fs = require('path') && require('fs');

const DEGRAUS = [
  { n:1, nome:'Sílabas simples',        cor:'#FF5D87', dica:'Frases curtas, só com sílabas simples.' },
  { n:2, nome:'Sílabas travadas',       cor:'#3FB8A4', dica:'Aparecem sílabas terminadas em R, L, S, M e N.' },
  { n:3, nome:'Encontros consonantais', cor:'#5B8DEF', dica:'Aparecem PR, TR, BR, CR, FL, BL, GL, VR.' },
  { n:4, nome:'Dígrafos',               cor:'#8B5CF6', dica:'Aparecem CH, LH, NH e RR.' },
  { n:5, nome:'Sons nasais e fluência', cor:'#E8A33D', dica:'Aparecem ÃO, ÃE, AM, EM e textos mais longos.' },
];

const H = [
/* ---------------- DEGRAU 1 — sílabas simples ---------------- */
{d:1,t:'O Gato Tito',x:['O gato Tito é bonito.','Ele gosta de leite.','Tito pula na cama.','A vovó dá comida.','Tito fica feliz.'],
 p:['Qual é o nome do gato?','Do que o Tito gosta?']},
{d:1,t:'A Bola do Beto',x:['O Beto tem uma bola.','A bola é amarela.','Ele joga a bola.','A bola cai no mato.','O Beto pega a bola.'],
 p:['De que cor é a bola?','Onde a bola caiu?']},
{d:1,t:'O Pato Peteco',x:['O pato Peteco vive no lago.','Ele nada o dia todo.','O Peteco come milho.','A pata Lili é amiga dele.','Os dois nadam juntos.'],
 p:['Onde o Peteco vive?','Quem é a amiga do Peteco?']},
{d:1,t:'A Casa da Fada',x:['A fada mora numa casa.','A casa fica no meio do mato.','Ela tem uma janela azul.','A fada rega o vaso.','A casa fica bonita.'],
 p:['Onde fica a casa da fada?','De que cor é a janela?']},
{d:1,t:'O Sapo Saci',x:['O sapo Saci é pequeno.','Ele pula bem alto.','O Saci mora no lago.','Ele come mosca.','O Saci é feliz.'],
 p:['Como é o sapo Saci?','O que o Saci come?']},
{d:1,t:'A Boneca Nina',x:['A Duda tem uma boneca.','A boneca se chama Nina.','A Nina usa vestido rosa.','A Duda penteia o cabelo dela.','As duas vão dormir.'],
 p:['Qual é o nome da boneca?','O que a Duda faz com o cabelo da Nina?']},
{d:1,t:'O Bolo da Vovó',x:['A vovó fez um bolo.','O bolo é de coco.','A casa toda cheira bem.','O Lipe come um pedaço.','Ele pede mais.'],
 p:['De que é o bolo?','Quem come o bolo?']},
{d:1,t:'A Lua e o Sapo',x:['O sapo olha a lua.','A lua é bonita.','Ele fica quieto.','A lua some de vagar.','O sapo vai dormir.'],
 p:['O que o sapo olha?','O que o sapo faz no fim?']},

/* ---------------- DEGRAU 2 — sílabas travadas ---------------- */
{d:2,t:'O Urso Forte',x:['O urso mora perto do rio.','Ele é grande e forte.','Todo dia o urso procura mel.','Ele sobe na árvore devagar.','Quando acha o favo, come tudo.','Depois volta para a toca e dorme.'],
 p:['Onde o urso mora?','O que o urso procura?']},
{d:2,t:'A Porta Verde',x:['A casa do Artur tem uma porta verde.','A porta range quando abre.','O Artur pinta a porta de novo.','Ele usa um pincel curto.','Agora a porta está linda.','A mãe dele adorou.'],
 p:['De que cor é a porta?','O que o Artur usou para pintar?']},
{d:2,t:'O Barco do Vovô',x:['O vovô tem um barco pequeno.','O barco é branco e verde.','Eles saem cedo para pescar.','O sol nasce sobre o mar.','O vovô pesca cinco peixes.','Voltam antes do almoço.'],
 p:['Como é o barco do vovô?','Quantos peixes ele pescou?']},
{d:2,t:'O Garfo Perdido',x:['A Marta pôs a mesa para o jantar.','Faltava um garfo.','Ela procurou perto do fogão.','Procurou dentro do armário.','O garfo estava embaixo do pano.','Todos riram muito.'],
 p:['O que faltava na mesa?','Onde estava o garfo?']},
{d:2,t:'A Bolsa da Mãe',x:['A bolsa da mãe é enorme.','Dentro dela cabe tudo.','Tem carteira, chave e batom.','Tem até um doce guardado.','A Sofia pede o doce.','A mãe dá com um sorriso.'],
 p:['O que tem dentro da bolsa?','O que a Sofia pede?']},
{d:2,t:'O Martelo do Marcos',x:['O Marcos ajuda o pai na oficina.','Ele segura o martelo com força.','O prego entra torto na madeira.','O pai mostra o jeito certo.','O Marcos tenta outra vez.','Agora o prego entrou reto.'],
 p:['Onde o Marcos ajuda o pai?','O que aconteceu na primeira tentativa?']},
{d:2,t:'A Ponte do Parque',x:['No parque tem uma ponte de madeira.','Embaixo dela passa um riacho.','O Vitor gosta de correr na ponte.','A ponte faz barulho quando ele corre.','Ele para no meio e olha a água.','Vê um monte de peixinhos.'],
 p:['Do que é feita a ponte?','O que o Vitor vê da ponte?']},
{d:2,t:'O Campo de Bola',x:['Perto de casa tem um campo grande.','Toda tarde a turma joga bola lá.','O Bernardo é o goleiro do time.','Hoje ele pegou quatro bolas.','O time dele ganhou de dois a um.','Todos voltaram cantando.'],
 p:['Qual a posição do Bernardo?','Como terminou o jogo?']},

/* ---------------- DEGRAU 3 — encontros consonantais ---------------- */
{d:3,t:'O Tigre Tigrinho',x:['O tigre corre pela grama alta.','Ele é forte, mas gosta de brincar.','De manhã ele bebe água no riacho.','Depois procura sombra embaixo de uma árvore.','À tarde, treina os pulos com o irmão.','Quando o sol se põe, os dois voltam juntos.','O tigre dorme perto da mãe.'],
 p:['O que o tigre faz de manhã?','Com quem ele treina os pulos?']},
{d:3,t:'O Prato Quebrado',x:['A Cristina levava um prato para a mesa.','O prato escorregou da mão dela.','Fez um barulho enorme no chão.','Ela ficou parada, com medo da bronca.','Mas a mãe só perguntou se ela se machucou.','Depois as duas limparam tudo juntas.','A Cristina prometeu ter mais cuidado.'],
 p:['O que aconteceu com o prato?','O que a mãe perguntou?']},
{d:3,t:'O Trem de Ferro',x:['O trem passa perto da fazenda às três horas.','O Breno corre até a cerca para ver.','O apito é tão forte que ele tapa o ouvido.','O maquinista sempre acena para ele.','Um dia, o Breno acenou de volta.','Desde então, os dois se cumprimentam.','É o melhor momento do dia dele.'],
 p:['A que horas o trem passa?','O que o maquinista faz?']},
{d:3,t:'A Flor da Clara',x:['A Clara plantou uma flor no vaso.','Ela rega todo dia, sem esquecer.','No começo, só apareceu uma folha.','A Clara achou que não ia dar certo.','Mas na terça de manhã, viu um broto.','Uma semana depois, a flor abriu.','Era branca com o miolo amarelo.'],
 p:['O que a Clara plantou?','Como era a flor quando abriu?']},
{d:3,t:'O Livro do Pedro',x:['O Pedro ganhou um livro de aniversário.','A capa tinha um dragão azul.','Ele leu a primeira página devagar.','Depois leu a segunda, mais rápido.','Sem perceber, chegou ao fim do livro.','Foi a primeira vez que ele leu sozinho.','O Pedro pediu outro livro no dia seguinte.'],
 p:['O que tinha na capa do livro?','O que aconteceu de especial?']},
{d:3,t:'A Blusa Branca',x:['A Bruna ganhou uma blusa branca.','Ela quis usar logo no primeiro dia.','No recreio, tomou suco de uva.','O copo entornou na blusa nova.','A mancha ficou enorme.','Em casa, a mãe lavou com sabão.','A blusa voltou a ficar branquinha.'],
 p:['O que a Bruna derrubou na blusa?','Quem lavou a blusa?']},
{d:3,t:'O Cravo do Vizinho',x:['O vizinho cultiva cravos no quintal.','São flores fortes, de cheiro bom.','Ele cuida delas de manhã cedo.','A Priscila olha por cima do muro.','Um dia, o vizinho cortou um cravo.','Deu de presente para ela.','A Priscila guardou num livro grosso.'],
 p:['O que o vizinho cultiva?','O que a Priscila fez com o cravo?']},
{d:3,t:'A Fruta do Prato',x:['Na mesa tinha um prato com frutas.','Tinha uva, pera e uma fruta estranha.','O Fred nunca tinha visto aquela fruta.','Ele cheirou primeiro, com cuidado.','Depois provou um pedaço pequeno.','Era doce e um pouco azeda.','O Fred comeu a fruta inteira.'],
 p:['Quais frutas tinha no prato?','Como era o gosto da fruta?']},

/* ---------------- DEGRAU 4 — dígrafos ---------------- */
{d:4,t:'O Cachorro Chico',x:['O Chico é um cachorro esperto.','Ele mora numa casa de telhado vermelho.','Todo dia corre atrás do carrinho do vizinho.','Gosta de cavar a terra e achar minhoca.','À tarde, brinca com a galinha do quintal.','Quando chega visita, ele late alto.','Mas balança o rabo o tempo todo.'],
 p:['Como é o telhado da casa?','Com quem o Chico brinca?']},
{d:4,t:'A Chave Perdida',x:['A Rachel perdeu a chave de casa.','Procurou na mochila e não achou.','Olhou embaixo do banco da escola.','Achou que ia dormir na rua.','Na hora do lanche, ouviu um barulho.','A chave estava no bolso do casaco.','Ela riu sozinha de alívio.'],
 p:['O que a Rachel perdeu?','Onde estava a chave?']},
{d:4,t:'O Ninho da Andorinha',x:['No galho mais alto tem um ninho.','A andorinha carregou palha o dia inteiro.','Ela trabalhou sem parar por uma semana.','Depois, botou três ovinhos brancos.','O Nicolas olhava tudo da janela.','Um dia, os filhotes nasceram.','Ele contou para a turma inteira da escola.'],
 p:['O que a andorinha carregou?','Quantos ovos ela botou?']},
{d:4,t:'O Galho Caído',x:['A chuva derrubou um galho enorme.','O galho caiu no meio do quintal.','O pai do Guilherme pegou o serrote.','Os dois cortaram o galho em pedaços.','Empilharam a lenha perto do muro.','No inverno, aquela lenha aqueceu a casa.','O Guilherme ficou orgulhoso do trabalho.'],
 p:['O que derrubou o galho?','Para que serviu a lenha?']},
{d:4,t:'O Carrinho de Rolimã',x:['O Murilo montou um carrinho de rolimã.','Usou madeira velha e quatro rodas.','O carrinho ficou meio torto.','Mesmo assim, descia a ladeira voando.','A turma toda quis andar nele.','Cada um desceu uma vez.','Foi a melhor tarde do mês.'],
 p:['Com o que o Murilo montou o carrinho?','Como o carrinho descia a ladeira?']},
{d:4,t:'A Chuva de Domingo',x:['Choveu o domingo inteiro sem parar.','O Chico ficou trancado dentro de casa.','Ele achou um velho jogo no armário.','Chamou a irmã para jogar com ele.','Jogaram a tarde toda na sala.','Quando a chuva passou, nem ligaram.','Continuaram jogando até a noite.'],
 p:['Quanto tempo choveu?','O que o Chico achou no armário?']},
{d:4,t:'A Minhoca do Canteiro',x:['A Manoela cavou a terra do canteiro.','Encontrou uma minhoca comprida.','Teve nojo no primeiro momento.','A avó explicou que a minhoca ajuda a planta.','Ela faz caminhos na terra para o ar passar.','A Manoela devolveu a minhoca com cuidado.','Depois plantou as sementes por cima.'],
 p:['O que a Manoela encontrou?','Por que a minhoca ajuda a planta?']},
{d:4,t:'O Telhado da Escola',x:['O telhado da escola estava com goteira.','A água pingava bem no meio da sala.','A turma colocou um balde no chão.','O barulho do pingo atrapalhava a aula.','Na sexta, o pedreiro veio consertar.','Trocou as telhas quebradas por novas.','Na segunda, a sala estava seca.'],
 p:['O que estava acontecendo na sala?','Quem consertou o telhado?']},

/* ---------------- DEGRAU 5 — nasais e fluência ---------------- */
{d:5,t:'O Leão e o Ratinho',x:['O leão dormia à sombra de uma árvore grande.','Um ratinho passou correndo e acordou o rei da selva.','O leão prendeu o ratinho embaixo da pata pesada.','O bichinho implorou pela vida e prometeu ajudar um dia.','O leão achou aquilo engraçado e resolveu soltar o rato.','Semanas depois, o leão caiu numa armadilha de corda.','Ele rugiu tão alto que assustou toda a mata.','O ratinho ouviu, veio correndo e roeu as cordas.','O leão saiu livre e nunca mais riu de quem era pequeno.'],
 p:['Por que o leão prendeu o ratinho?','Como o ratinho salvou o leão?']},
{d:5,t:'O Pão da Manhã',x:['Todo domingo o pai da Manuela faz pão em casa.','Ele mistura a farinha com a água morna e o fermento.','Depois sova a massa com as duas mãos, com paciência.','A Manuela ajuda a dar o formato dos pãezinhos.','A massa descansa coberta por um pano limpo.','Quando cresce, vai para o forno bem quente.','A casa inteira fica com cheiro de padaria.','Eles comem o pão ainda morno, com manteiga.','É o momento preferido da semana dos dois.'],
 p:['O que o pai faz todo domingo?','Qual é a parte que a Manuela ajuda?']},
{d:5,t:'O Limão Azedo',x:['O Simão colheu um limão do pé do quintal.','Ele achou que fosse doce como a laranja.','Mordeu um pedaço grande, com vontade.','Na mesma hora fechou os olhos e fez careta.','A irmã dele riu tanto que sentou no chão.','A avó veio ver o que estava acontecendo.','Explicou que limão serve para temperar, não para comer puro.','Fez uma limonada com açúcar e gelo.','O Simão bebeu tudo e pediu mais um copo.'],
 p:['O que o Simão achou que o limão seria?','O que a avó fez com o limão?']},
{d:5,t:'A Mão na Massa',x:['A professora avisou que a aula seria diferente.','Cada aluno ia plantar um feijão no algodão.','O Ramon molhou o algodão e colocou o grão em cima.','Escreveu o nome dele no copinho com caneta.','Todo dia ele olhava, e nada acontecia.','No quarto dia, apareceu um fiozinho branco.','Na semana seguinte, já era uma plantinha verde.','O Ramon levou o copo para casa com cuidado.','Plantou no quintal e continua regando até hoje.'],
 p:['O que a turma plantou?','O que apareceu no quarto dia?']},
{d:5,t:'O Coração da Vovó',x:['A vovó do Alan mora numa cidade pequena e distante.','Eles se veem só nas férias, duas vezes por ano.','Mas toda semana ela liga no mesmo horário.','Conta histórias da época em que era menina.','Fala do cavalo, do rio e da escola de uma sala só.','O Alan escuta tudo sem interromper nenhuma vez.','No fim da ligação, ela sempre diz a mesma frase.','Diz que ele mora no coração dela.','O Alan desliga o telefone sorrindo toda vez.'],
 p:['Com que frequência a vovó liga?','O que ela diz no fim da ligação?']},
{d:5,t:'A Canção da Chuva',x:['Começou a chover forte no meio da tarde.','A Antônia estava lendo perto da janela.','Ela parou o livro e ficou escutando a água.','Cada pingo no telhado fazia um som diferente.','Ela percebeu que aquilo parecia uma música.','Pegou um lápis e escreveu uma canção sobre a chuva.','No dia seguinte, cantou para a turma na escola.','Todos bateram palmas quando ela terminou.','A professora pediu para ela cantar de novo.'],
 p:['O que a Antônia estava fazendo quando começou a chover?','O que ela escreveu?']},
{d:5,t:'A Coruja Sábia',x:['A coruja mora no galho mais alto da floresta.','Todos os bichos vão até ela quando têm dúvida.','Um dia, o coelho chegou muito nervoso.','Disse que era o mais lento de todos e queria desistir.','A coruja perguntou desde quando ele estava tentando.','O coelho respondeu que fazia apenas três dias.','A coruja explicou que ninguém aprende em três dias.','Disse que o segredo era subir um degrau de cada vez.','O coelho voltou no mês seguinte, correndo mais que todos.'],
 p:['Por que o coelho queria desistir?','Qual foi o conselho da coruja?']},
{d:5,t:'O Grande Dia',x:['A Bianca levou um mês inteiro treinando a leitura.','No começo, travava em quase todas as palavras.','A mãe sentava com ela dez minutos por dia, sem pressa.','Aos poucos, as palavras difíceis foram ficando fáceis.','Um dia, ela pegou um livro na estante sozinha.','Sentou no sofá e começou a ler em voz alta.','Leu a história inteira, do começo ao fim.','A mãe ficou parada na porta, escutando tudo calada.','Quando a Bianca terminou, as duas se abraçaram sem dizer nada.'],
 p:['Quanto tempo a Bianca treinou?','O que aconteceu no grande dia?']},
];

/* ------------------------- monta o HTML ------------------------- */
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const contaPalavras = arr => arr.join(' ').split(/\s+/).filter(Boolean).length;

let paginas = '';
H.forEach((h,i)=>{
  const g = DEGRAUS[h.d-1];
  const linhas = h.x.map(l=>`<p class="linha">${esc(l)}</p>`).join('');
  const perg = h.p.map((q,k)=>`<div class="perg"><b>${k+1}.</b> ${esc(q)}<span class="pauta"></span><span class="pauta"></span></div>`).join('');
  paginas += `
  <section class="pag">
    <header class="topo">
      <span class="selo" style="background:${g.cor}">DEGRAU ${g.n}</span>
      <span class="cab">${esc(g.nome)}</span>
      <span class="num">História ${i+1} de 40</span>
    </header>
    <h2 class="titulo" style="color:${g.cor}">${esc(h.t)}</h2>
    <div class="ilustra" style="border-color:${g.cor}33">
      <span>espaço para a ilustração</span>
    </div>
    <div class="texto">${linhas}</div>
    <div class="bloco-perg" style="border-color:${g.cor}55">
      <p class="rot" style="color:${g.cor}">Responda:</p>
      ${perg}
    </div>
    <footer class="rodape">
      <span>Palavras lidas: <b>${contaPalavras(h.x)}</b></span>
      <span>Escadinha de Histórias</span>
    </footer>
  </section>`;
});

const indice = DEGRAUS.map(g=>{
  const its = H.map((h,i)=>({h,i})).filter(o=>o.h.d===g.n);
  return `<div class="ig">
    <div class="ig-t"><span class="selo" style="background:${g.cor}">DEGRAU ${g.n}</span> <b>${g.nome}</b></div>
    <p class="ig-d">${g.dica}</p>
    <ol start="${its[0].i+1}">${its.map(o=>`<li>${esc(o.h.t)}</li>`).join('')}</ol>
  </div>`;
}).join('');

const html = `<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="utf-8">
<title>Escadinha de Histórias — 40 histórias que sobem um degrau de cada vez</title>
<style>
@page{size:A4 portrait;margin:14mm}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:"Verdana","DejaVu Sans",sans-serif;color:#2b2b2b;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.pag{page-break-after:always;height:265mm;display:flex;flex-direction:column;overflow:hidden}
.topo{display:flex;align-items:center;gap:8px;border-bottom:2px solid #eee;padding-bottom:6px;margin-bottom:14px;font-size:9pt;color:#8a8a8a}
.selo{color:#fff;font-weight:bold;font-size:8pt;padding:3px 9px;border-radius:20px;letter-spacing:.04em}
.cab{flex:1}
.titulo{font-size:19pt;text-align:center;margin:4px 0 10px}
.ilustra{border:2px dashed;border-radius:10px;height:36mm;display:flex;align-items:center;justify-content:center;color:#c9c9c9;font-size:9pt;margin-bottom:11px;flex:0 0 auto}
.texto{flex:1}
.linha{font-size:13pt;line-height:1.75;margin-bottom:3px;border-bottom:1px dotted #ddd;padding-bottom:2px}
.bloco-perg{border:2px solid;border-radius:10px;padding:9px 12px;margin-top:10px;flex:0 0 auto}
.rot{font-size:10pt;font-weight:bold;margin-bottom:8px}
.perg{font-size:10.5pt;margin-bottom:7px}
.pauta{display:block;border-bottom:1px solid #bbb;height:6.5mm}
.rodape{display:flex;justify-content:space-between;font-size:8pt;color:#aaa;border-top:1px solid #eee;padding-top:5px;margin-top:8px;flex:0 0 auto}
/* capa e indice */
.capa{page-break-after:always;height:263mm;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.capa h1{font-size:40pt;line-height:1.05;color:#FF5D87}
.capa .sub{font-size:14pt;color:#666;margin-top:14px}
.capa .deg{display:flex;gap:6px;margin-top:34px}
.capa .deg i{display:block;width:34px;border-radius:4px;background:#eee}
.idx{page-break-after:always}
.idx h2{font-size:20pt;color:#FF5D87;margin-bottom:16px}
.ig{margin-bottom:16px}
.ig-t{display:flex;align-items:center;gap:8px;font-size:11pt}
.ig-d{font-size:9pt;color:#888;margin:3px 0 5px 0}
.ig ol{margin-left:22px;font-size:10pt;line-height:1.7}
</style></head><body>

<div class="capa">
  <h1>Escadinha<br>de Histórias</h1>
  <p class="sub">40 histórias que sobem um degrau de cada vez</p>
  <div class="deg">
    ${DEGRAUS.map((g,k)=>`<i style="background:${g.cor};height:${18+k*10}px"></i>`).join('')}
  </div>
  <p class="sub" style="margin-top:40px;font-size:10pt">Da primeira frase de três palavras<br>até o texto completo.</p>
</div>

<div class="idx">
  <h2>Como usar</h2>
  <p style="font-size:11pt;line-height:1.7">As histórias sobem de dificuldade na mesma ordem em que a leitura se constrói.
  Comece no degrau que o diagnóstico apontou — não precisa fazer da primeira à última.
  Peça para a criança ler em voz alta, sem corrigir no meio. Corrija só no fim, e elogie o esforço, não o acerto.
  Ao terminar, anote quantas palavras ela leu sozinha: é assim que vocês dois enxergam o progresso.</p>
  <h2 style="margin-top:22px">As 40 histórias</h2>
  ${indice}
</div>

${paginas}
</body></html>`;

fs.writeFileSync(__dirname + '/escadinha-de-historias.html', html, 'utf8');
const total = H.reduce((s,h)=>s+contaPalavras(h.x),0);
console.log(`OK — ${H.length} histórias, ${total} palavras.`);
console.log(`   menor: ${Math.min(...H.map(h=>contaPalavras(h.x)))} palavras · maior: ${Math.max(...H.map(h=>contaPalavras(h.x)))} palavras`);
console.log(`   arquivo: produto/escadinha-de-historias.html`);
