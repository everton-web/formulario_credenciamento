var SHEET_NAME = 'Inscricoes';
var SHEET_VAGAS = 'Vagas';
var SHEET_FUNCOES = 'Funcoes';
var SHEET_MUNICIPIOS = 'Municípios';

var TODOS_MUNICIPIOS = ["Abaíra","Abaré","Acajutiba","Adustina","Água Fria","Aiquara","Alagoinhas","Alcobaça","Almadina","Amargosa","Amélia Rodrigues","América Dourada","Anagé","Andaraí","Andorinha","Angical","Anguera","Antas","Antônio Cardoso","Antônio Gonçalves","Aporá","Apuarema","Araçás","Aracatu","Araci","Aramari","Arataca","Aratuípe","Aurelino Leal","Baianópolis","Baixa Grande","Banzaê","Barra","Barra da Estiva","Barra do Choça","Barra do Mendes","Barra do Rocha","Barreiras","Barro Alto","Barro Preto","Barrocas","Belmonte","Belo Campo","Biritinga","Boa Nova","Boa Vista do Tupim","Bom Jesus da Lapa","Bom Jesus da Serra","Boninal","Bonito","Boquira","Botuporã","Brejões","Brejolândia","Brotas de Macaúbas","Brumado","Buerarema","Buritirama","Caatiba","Cabaceiras do Paraguaçu","Cachoeira","Caculé","Caém","Caetanos","Caetité","Cafarnaum","Cairu","Caldeirão Grande","Camacan","Camaçari","Camamu","Campo Alegre de Lourdes","Campo Formoso","Canápolis","Canarana","Canavieiras","Candeal","Candeias","Candiba","Cândido Sales","Cansanção","Canudos","Capela do Alto Alegre","Capim Grosso","Caraíbas","Caravelas","Cardeal da Silva","Carinhanha","Casa Nova","Castro Alves","Catolândia","Catu","Caturama","Central","Chorrochó","Cícero Dantas","Cipó","Coaraci","Cocos","Conceição da Feira","Conceição do Almeida","Conceição do Coité","Conceição do Jacuípe","Conde","Condeúba","Contendas do Sincorá","Coração de Maria","Cordeiros","Coribe","Coronel João Sá","Correntina","Cotegipe","Cravolândia","Crisópolis","Cristópolis","Cruz das Almas","Curaçá","Dário Meira","Dias d'Ávila","Dom Basílio","Dom Macedo Costa","Elísio Medrado","Encruzilhada","Entre Rios","Érico Cardoso","Esplanada","Euclides da Cunha","Eunápolis","Fátima","Feira da Mata","Feira de Santana","Filadélfia","Firmino Alves","Floresta Azul","Formosa do Rio Preto","Gandu","Gavião","Gentio do Ouro","Glória","Gongogi","Governador Mangabeira","Guajeru","Guanambi","Guaratinga","Heliópolis","Iaçu","Ibiassucê","Ibicaraí","Ibicoara","Ibicuí","Ibipeba","Ibipitanga","Ibiquera","Ibirapitanga","Ibirapuã","Ibirataia","Ibitiara","Ibititá","Ibotirama","Ichu","Igaporã","Igrapiúna","Iguaí","Ilhéus","Inhambupe","Ipecaetá","Ipiaú","Ipirá","Ipupiara","Irajuba","Iramaia","Iraquara","Irará","Irecê","Itabela","Itaberaba","Itabuna","Itacaré","Itaeté","Itagi","Itagibá","Itagimirim","Itaguaçu da Bahia","Itaju do Colônia","Itajuípe","Itamaraju","Itamari","Itambé","Itanagra","Itanhém","Itaparica","Itapé","Itapebi","Itapetinga","Itapicuru","Itapitanga","Itaquara","Itarantim","Itatim","Itiruçu","Itiúba","Itororó","Ituaçu","Ituberá","Iuiú","Jaborandi","Jacaraci","Jacobina","Jaguaquara","Jaguarari","Jaguaripe","Jandaíra","Jequié","Jeremoabo","Jiquiriçá","Jitaúna","João Dourado","Juazeiro","Jucuruçu","Jussara","Jussari","Jussiape","Lafaiete Coutinho","Lagoa Real","Laje","Lajedão","Lajedinho","Lajedo do Tabocal","Lamarão","Lapão","Lauro de Freitas","Lençóis","Licínio de Almeida","Livramento de Nossa Senhora","Luís Eduardo Magalhães","Macajuba","Macarani","Macaúbas","Macururé","Madre de Deus","Maetinga","Maiquinique","Mairi","Malhada","Malhada de Pedras","Manoel Vitorino","Mansidão","Maracás","Maragogipe","Maraú","Marcionílio Souza","Mascote","Mata de São João","Matina","Medeiros Neto","Miguel Calmon","Milagres","Mirangaba","Mirante","Monte Santo","Morpara","Morro do Chapéu","Mortugaba","Mucugê","Mucuri","Mulungu do Morro","Mundo Novo","Muniz Ferreira","Muquém de São Francisco","Muritiba","Mutuípe","Nazaré","Nilo Peçanha","Nordestina","Nova Canaã","Nova Fátima","Nova Ibiá","Nova Itarana","Nova Redenção","Nova Soure","Nova Viçosa","Novo Horizonte","Novo Triunfo","Olindina","Oliveira dos Brejinhos","Ouriçangas","Ourolândia","Palmas de Monte Alto","Palmeiras","Paramirim","Paratinga","Paripiranga","Pau Brasil","Paulo Afonso","Pé de Serra","Pedrão","Pedro Alexandre","Piatã","Pilão Arcado","Pindaí","Pindobaçu","Pintadas","Piraí do Norte","Piripá","Piritiba","Planaltino","Planalto","Poções","Pojuca","Ponto Novo","Porto Seguro","Potiraguá","Prado","Presidente Dutra","Presidente Jânio Quadros","Presidente Tancredo Neves","Queimadas","Quijingue","Quixabeira","Rafael Jambeiro","Remanso","Retirolândia","Riachão das Neves","Riachão do Jacuípe","Riacho de Santana","Ribeira do Amparo","Ribeira do Pombal","Ribeirão do Largo","Rio Real","Rio de Contas","Rio do Antônio","Rio do Pires","Rodelas","Ruy Barbosa","Salinas da Margarida","Salvador","Santa Bárbara","Santa Brígida","Santa Cruz Cabrália","Santa Cruz da Vitória","Santa Inês","Santa Luzia","Santa Maria da Vitória","Santa Rita de Cássia","Santa Teresinha","Santaluz","Santana","Santanópolis","Santo Amaro","Santo Antônio de Jesus","Santo Estêvão","São Desidério","São Domingos","São Felipe","São Félix","São Félix do Coribe","São Francisco do Conde","São Gabriel","São Gonçalo dos Campos","São José da Vitória","São José do Jacuípe","São Miguel das Matas","São Sebastião do Passé","Sapeaçu","Sátiro Dias","Saubara","Saúde","Seabra","Sebastião Laranjeiras","Senhor do Bonfim","Sento Sé","Serra Dourada","Serra Preta","Serra do Ramalho","Serrinha","Serrolândia","Simões Filho","Sítio do Mato","Sítio do Quinto","Sobradinho","Souto Soares","Tabocas do Brejo Velho","Tanhaçu","Tanque Novo","Tanquinho","Taperoá","Tapiramutá","Teixeira de Freitas","Teodoro Sampaio","Teofilândia","Teolândia","Terra Nova","Tremedal","Tucano","Uauá","Ubaíra","Ubaitaba","Ubatã","Uibaí","Umburanas","Una","Urandi","Uruçuca","Utinga","Valença","Valente","Várzea Nova","Várzea da Roça","Várzea do Poço","Varzedo","Vera Cruz","Vereda","Vitória da Conquista","Wagner","Wanderley","Wenceslau Guimarães","Xique-Xique"];

// Atualizar com a lista completa de NTEs
var NTE_LISTA = [
  'NTE 01', 'NTE 02', 'NTE 03', 'NTE 04', 'NTE 05',
  'NTE 06', 'NTE 07', 'NTE 08', 'NTE 09', 'NTE 10',
  'NTE 11', 'NTE 12', 'NTE 13', 'NTE 14', 'NTE 15',
  'NTE 16', 'NTE 17', 'NTE 18', 'NTE 19', 'NTE 20',
  'NTE 21', 'NTE 22', 'NTE 23', 'NTE 24', 'NTE 25',
  'NTE 26', 'NTE 27'
];

function getFuncoesSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_FUNCOES);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_FUNCOES);
    sheet.appendRow(['Nome', 'Limite', 'Tipo']);
    sheet.getRange(1, 1, 1, 3).setFontWeight('bold').setBackground('#1a3a8a').setFontColor('#ffffff');

    var defaults = [
      ['CAV/DIE/SGINF', 8, 'Institucional'],
      ['Secretário(a) Municipal', 417, 'Institucional'],
      ['Técnico Municipal', 417, 'Institucional'],
      ['IAT', 10, 'Institucional'],
      ['SUPED', 10, 'Institucional'],
      ['SUPROT', 5, 'Institucional'],
      ['SGINF', 20, 'Institucional'],
      ['SUPEC', 2, 'Institucional'],
      ['SUDEP', 2, 'Institucional'],
      ['APG', 2, 'Institucional'],
      ['GAB/SEC', 2, 'Institucional'],
      ['TCE', 3, 'Institucional'],
      ['TCM', 3, 'Institucional'],
      ['SEFAZ', 3, 'Institucional'],
      ['SEI', 3, 'Institucional'],
      ['FEEBA', 4, 'Institucional'],
      ['CEE', 4, 'Institucional'],
      ['UNCME', 4, 'Institucional'],
      ['UNDIME', 4, 'Institucional'],
      ['CEEPE/ Universidades Estaduais e Federais', 10, 'Institucional'],
      ['IFs', 4, 'Institucional'],
      ['IRDEB', 2, 'Institucional'],
      ['APLB', 3, 'Institucional'],
      ['FTE', 3, 'Institucional'],
      ['UPB', 3, 'Institucional'],
      ['FGV/DGPE', 5, 'Institucional']
    ];

    // Entradas NTE: 1 Diretor(a) + 1 Ponto Focal por NTE; NTE 19 tem 2 Ponto Focal
    for (var n = 0; n < NTE_LISTA.length; n++) {
      var nte = NTE_LISTA[n];
      defaults.push([nte + ' - Diretor(a)', 1, 'NTE']);
      defaults.push([nte + ' - Ponto Focal', nte === 'NTE 19' ? 2 : 1, 'NTE']);
    }

    sheet.getRange(2, 1, defaults.length, 3).setValues(defaults);
    sheet.setColumnWidth(1, 300);
    sheet.setColumnWidth(2, 80);
    sheet.setColumnWidth(3, 120);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function carregarFuncoes() {
  var sheet = getFuncoesSheet();
  var dados = sheet.getDataRange().getValues();
  var vagasLimites = {};
  var nteLimites = {};
  var munCompartilhado = { nomes: [], limite: 417 };

  for (var i = 1; i < dados.length; i++) {
    var nome = String(dados[i][0] || '').trim();
    var limite = parseInt(dados[i][1]) || 0;
    var tipo = String(dados[i][2] || '').trim();
    if (!nome) continue;

    if (nome === 'Secretário(a) Municipal' || nome === 'Técnico Municipal') {
      munCompartilhado.nomes.push(nome);
      if (munCompartilhado.nomes.length === 1) munCompartilhado.limite = limite;
    } else if (tipo === 'Institucional') {
      vagasLimites[nome] = limite;
    } else if (tipo === 'NTE') {
      nteLimites[nome] = limite;
    }
  }
  return { vagasLimites: vagasLimites, nteLimites: nteLimites, munCompartilhado: munCompartilhado };
}

function doGet(e) {
  var action = e.parameter.action;

  if (action === 'getDadosIniciais') {
    var funcoes = carregarFuncoes();
    var sheet = getSheet();
    var dados = sheet.getDataRange().getValues();
    var contagemVagas = {};
    var contagemNte = {};

    var municipiosOcupados = [];

    for (var i = 1; i < dados.length; i++) {
      var funcao    = String(dados[i][6] || '').trim();
      var nteColuna = String(dados[i][7] || '').trim();
      var municipio = String(dados[i][4] || '').trim();
      if (!funcao) continue;
      if (nteColuna) {
        contagemNte[funcao] = (contagemNte[funcao] || 0) + 1;
      } else {
        contagemVagas[funcao] = (contagemVagas[funcao] || 0) + 1;
      }
      if ((funcao === 'Secretário(a) Municipal' || funcao === 'Técnico Municipal') && municipio) {
        municipiosOcupados.push(municipio);
      }
    }

    return jsonResponse({
      contagemVagas: contagemVagas,
      contagemNte: contagemNte,
      vagasLimites: funcoes.vagasLimites,
      nteLimites: funcoes.nteLimites,
      municipiosOcupados: municipiosOcupados
    });
  }

  return jsonResponse({ status: 'API funcionando' });
}

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);

    if (payload.action !== 'inscrever') {
      return jsonResponse({ success: false, message: 'Acao invalida.' });
    }

    var sheet = getSheet();
    var dados = sheet.getDataRange().getValues();
    var funcoes = carregarFuncoes();

    // Verifica CPF duplicado
    for (var j = 1; j < dados.length; j++) {
      if (String(dados[j][2]).trim() === payload.cpf) {
        return jsonResponse({ success: false, message: 'Este CPF já está inscrito.' });
      }
    }

    var funcaoFinal;

    if (payload.nteNumero && payload.nteFuncao) {
      funcaoFinal = payload.nteNumero + ' - ' + payload.nteFuncao; // "NTE 01 - Diretor(a)"
      var nteKey = funcaoFinal;
      var limite = funcoes.nteLimites[nteKey] !== undefined ? funcoes.nteLimites[nteKey] : 1;
      var countNte = 0;
      for (var i = 1; i < dados.length; i++) {
        if (String(dados[i][6]).trim() === funcaoFinal) countNte++;
      }
      if (countNte >= limite) {
        return jsonResponse({
          success: false,
          message: 'Vaga esgotada para ' + payload.nteFuncao + ' do ' + payload.nteNumero + '.'
        });
      }
    } else {
      funcaoFinal = payload.funcao;

      if (funcaoFinal === 'Secretário(a) Municipal' || funcaoFinal === 'Técnico Municipal') {
        // Apenas 1 representante (de qualquer uma das 2 funções) por município
        if (!payload.municipio) {
          return jsonResponse({ success: false, message: 'Selecione o município.' });
        }
        for (var m = 1; m < dados.length; m++) {
          var funcaoM = String(dados[m][6]).trim();
          if ((funcaoM === 'Secretário(a) Municipal' || funcaoM === 'Técnico Municipal') &&
              String(dados[m][4]).trim() === payload.municipio) {
            return jsonResponse({
              success: false,
              message: 'O município "' + payload.municipio + '" já possui um representante municipal inscrito(a).'
            });
          }
        }
        // Limite combinado compartilhado entre as duas funções municipais
        var limComp = funcoes.munCompartilhado.limite;
        var countComp = 0;
        for (var c = 1; c < dados.length; c++) {
          var fc = String(dados[c][6]).trim();
          if (fc === 'Secretário(a) Municipal' || fc === 'Técnico Municipal') countComp++;
        }
        if (countComp >= limComp) {
          return jsonResponse({ success: false, message: 'Vagas esgotadas para representante municipal.' });
        }
      } else {
        var limiteInst = funcoes.vagasLimites[funcaoFinal];
        if (limiteInst !== undefined && limiteInst > 0) {
          var countInst = 0;
          for (var k = 1; k < dados.length; k++) {
            if (String(dados[k][6]).trim() === funcaoFinal) countInst++;
          }
          if (countInst >= limiteInst) {
            return jsonResponse({
              success: false,
              message: 'Vagas esgotadas para "' + funcaoFinal + '".'
            });
          }
        }
      }
    }

    var agora = new Date();
    sheet.appendRow([
      Utilities.formatDate(agora, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm:ss'),
      payload.nome,
      payload.cpf,
      payload.telefone,
      payload.municipio || '',
      payload.email,
      funcaoFinal,
      payload.nteNumero || ''
    ]);

    atualizarTudo();
    return jsonResponse({ success: true });

  } catch (err) {
    return jsonResponse({ success: false, message: 'Erro: ' + err.message });
  }
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Data/Hora', 'Nome', 'CPF', 'Telefone', 'Municipio', 'E-mail', 'Funcao', 'NTE']);
    sheet.getRange(1, 1, 1, 8)
      .setFontWeight('bold')
      .setBackground('#1a3a8a')
      .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function atualizarPainelVagas() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_VAGAS);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_VAGAS);
  } else {
    sheet.clearContents();
  }

  var header = [['Função / Instituição', 'Limite', 'Inscritos', 'Disponíveis']];
  sheet.getRange(1, 1, 1, 4).setValues(header)
    .setFontWeight('bold')
    .setBackground('#1a3a8a')
    .setFontColor('#ffffff');

  var inscSheet = getSheet();
  var dadosInsc = inscSheet.getDataRange().getValues();
  var contagem = {};
  for (var i = 1; i < dadosInsc.length; i++) {
    var f   = String(dadosInsc[i][6] || '').trim();
    if (!f) continue;
    contagem[f] = (contagem[f] || 0) + 1;
  }

  var funcoesData = carregarFuncoes();
  var rows = [];

  // Funções institucionais
  var nomesInst = Object.keys(funcoesData.vagasLimites);
  for (var k = 0; k < nomesInst.length; k++) {
    var nome = nomesInst[k];
    var limiteInst = funcoesData.vagasLimites[nome];
    var inscInst = contagem[nome] || 0;
    rows.push([nome, limiteInst, inscInst, Math.max(0, limiteInst - inscInst)]);
  }

  // Representantes municipais: Secretário(a) Municipal + Técnico Municipal (pool compartilhado)
  var munComp = funcoesData.munCompartilhado;
  if (munComp.nomes.length > 0) {
    var inscComp = 0;
    for (var p = 0; p < munComp.nomes.length; p++) inscComp += (contagem[munComp.nomes[p]] || 0);
    rows.push(['Secretário(a) / Técnico Municipal', munComp.limite, inscComp, Math.max(0, munComp.limite - inscComp)]);
  }

  // Entradas NTE (lidas da aba Funcoes)
  var nomesNte = Object.keys(funcoesData.nteLimites).sort();
  for (var m = 0; m < nomesNte.length; m++) {
    var nomeNte = nomesNte[m];
    var limiteNte = funcoesData.nteLimites[nomeNte];
    var inscNte = contagem[nomeNte] || 0;
    rows.push([nomeNte, limiteNte, inscNte, Math.max(0, limiteNte - inscNte)]);
  }

  if (rows.length > 0) {
    sheet.getRange(2, 1, rows.length, 4).setValues(rows);
    for (var r = 0; r < rows.length; r++) {
      var cor = rows[r][3] === 0 ? '#fce8e8' : (rows[r][3] <= 2 ? '#fff3cd' : '#ffffff');
      sheet.getRange(r + 2, 1, 1, 4).setBackground(cor);
    }
  }

  var totalRow = rows.length + 2;
  var totalLimite   = rows.reduce(function(s, r) { return s + r[1]; }, 0);
  var totalInscritos = rows.reduce(function(s, r) { return s + r[2]; }, 0);
  var totalDisp     = rows.reduce(function(s, r) { return s + r[3]; }, 0);
  sheet.getRange(totalRow, 1, 1, 4)
    .setValues([['TOTAL', totalLimite, totalInscritos, totalDisp]])
    .setFontWeight('bold')
    .setBackground('#e8edf5');

  sheet.setColumnWidth(1, 300);
  sheet.setColumnWidth(2, 80);
  sheet.setColumnWidth(3, 90);
  sheet.setColumnWidth(4, 100);
  sheet.setFrozenRows(1);
}

function onOpen() {
  getFuncoesSheet();
  SpreadsheetApp.getUi()
    .createMenu('⚙️ Gestão')
    .addItem('🔄 Atualizar Painéis', 'atualizarTudoManual')
    .addSeparator()
    .addItem('🔁 Resetar Aba Funções', 'resetarFuncoesSheet')
    .addItem('🔧 Migrar Funções NTE', 'migrarFuncoesNTE')
    .addToUi();
}

function atualizarTudo() {
  atualizarPainelVagas();
  atualizarPainelMunicipios();
}

function atualizarTudoManual() {
  atualizarTudo();
  SpreadsheetApp.getUi().alert('✅ Painéis de vagas e municípios atualizados!');
}

function onEdit(e) {
  if (!e || !e.source) return;
  var sheetName = e.range.getSheet().getName();
  if (sheetName === SHEET_NAME || sheetName === SHEET_FUNCOES) {
    atualizarTudo();
  }
}

// Rodar uma vez para corrigir entradas NTE que foram salvas sem o número do NTE na coluna Funcao
function migrarFuncoesNTE() {
  var sheet = getSheet();
  var dados = sheet.getDataRange().getValues();
  var corrigidas = 0;

  for (var i = 1; i < dados.length; i++) {
    var funcao = String(dados[i][6] || '').trim();
    var nte    = String(dados[i][7] || '').trim();

    // Linha NTE antiga: tem NTE preenchido, mas Funcao não começa com "NTE"
    if (nte && !funcao.startsWith('NTE')) {
      var novaFuncao = nte + ' - ' + funcao;
      sheet.getRange(i + 1, 7).setValue(novaFuncao);
      corrigidas++;
    }
  }

  atualizarTudo();
  SpreadsheetApp.getUi().alert(corrigidas + ' linha(s) corrigida(s) com sucesso!');
}

// Rodar uma vez no Apps Script para recriar a aba Funcoes com os dados atualizados
function resetarFuncoesSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_FUNCOES);
  if (sheet) ss.deleteSheet(sheet);
  getFuncoesSheet();
  atualizarTudo();
  SpreadsheetApp.getUi().alert('Aba Funções atualizada com sucesso!');
}

function atualizarPainelMunicipios() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_MUNICIPIOS);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_MUNICIPIOS);
  } else {
    sheet.clearContents();
    sheet.clearFormats();
  }

  // Mapeia municípios que já têm representante inscrito
  var inscSheet = getSheet();
  var dadosInsc = inscSheet.getDataRange().getValues();
  var repMunicipal = {};
  for (var i = 1; i < dadosInsc.length; i++) {
    var funcao    = String(dadosInsc[i][6] || '').trim();
    var municipio = String(dadosInsc[i][4] || '').trim();
    var nome      = String(dadosInsc[i][1] || '').trim();
    if ((funcao === 'Secretário(a) Municipal' || funcao === 'Técnico Municipal') && municipio) {
      repMunicipal[municipio] = { funcao: funcao, nome: nome };
    }
  }

  var pendentes = [];
  var inscritos = [];
  for (var j = 0; j < TODOS_MUNICIPIOS.length; j++) {
    var mun = TODOS_MUNICIPIOS[j];
    if (repMunicipal[mun]) {
      inscritos.push([mun, 'Inscrito', repMunicipal[mun].funcao, repMunicipal[mun].nome]);
    } else {
      pendentes.push([mun, 'Pendente', '-', '-']);
    }
  }

  // Cabeçalho
  sheet.getRange(1, 1, 1, 4)
    .setValues([['Município', 'Status', 'Função', 'Representante']])
    .setFontWeight('bold')
    .setBackground('#1a3a8a')
    .setFontColor('#ffffff');

  // Pendentes primeiro, depois inscritos
  var rows = pendentes.concat(inscritos);
  if (rows.length > 0) {
    sheet.getRange(2, 1, rows.length, 4).setValues(rows);
    for (var r = 0; r < pendentes.length; r++) {
      sheet.getRange(r + 2, 1, 1, 4).setBackground('#fce8e8');
    }
    for (var s = 0; s < inscritos.length; s++) {
      sheet.getRange(pendentes.length + s + 2, 1, 1, 4).setBackground('#e8f5e9');
    }
  }

  // Rodapé com totais
  var totalRow = rows.length + 2;
  sheet.getRange(totalRow, 1, 1, 4)
    .setValues([['TOTAL: ' + TODOS_MUNICIPIOS.length + ' municípios', 'Pendentes: ' + pendentes.length, 'Inscritos: ' + inscritos.length, '']])
    .setFontWeight('bold')
    .setBackground('#e8edf5');

  sheet.setColumnWidth(1, 240);
  sheet.setColumnWidth(2, 90);
  sheet.setColumnWidth(3, 210);
  sheet.setColumnWidth(4, 260);
  sheet.setFrozenRows(1);
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
