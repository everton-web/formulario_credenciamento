var SHEET_NAME = 'Inscricoes';
var SHEET_VAGAS = 'Vagas';
var SHEET_FUNCOES = 'Funcoes';

// Atualizar com a lista completa de NTEs
var NTE_LISTA = [
  'NTE 01', 'NTE 02', 'NTE 03', 'NTE 04', 'NTE 05',
  'NTE 06', 'NTE 07', 'NTE 08', 'NTE 09', 'NTE 10',
  'NTE 11', 'NTE 12', 'NTE 13', 'NTE 14', 'NTE 15',
  'NTE 16', 'NTE 17', 'NTE 18', 'NTE 19', 'NTE 20',
  'NTE 21', 'NTE 22', 'NTE 23', 'NTE 24', 'NTE 25',
  'NTE 26', 'NTE 27'
];

function getNteLimite(nteNumero, nteFuncao) {
  if (nteNumero === 'NTE 19' && nteFuncao === 'Ponto Focal') return 2;
  return 1;
}

function getFuncoesSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_FUNCOES);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_FUNCOES);
    sheet.appendRow(['Nome', 'Limite', 'Tipo']);
    sheet.getRange(1, 1, 1, 3).setFontWeight('bold').setBackground('#1a3a8a').setFontColor('#ffffff');
    var defaults = [
      ['CAV/DIE/SGINF', 8, 'Institucional'],
      ['Secretário Municipal', 417, 'Institucional'],
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
  for (var i = 1; i < dados.length; i++) {
    var nome = String(dados[i][0] || '').trim();
    var limite = parseInt(dados[i][1]) || 0;
    var tipo = String(dados[i][2] || '').trim();
    if (!nome || tipo !== 'Institucional') continue;
    // NTE é tratado separadamente via NTE_LISTA
    if (/^NTE/.test(nome)) continue;
    vagasLimites[nome] = limite;
  }
  return { vagasLimites: vagasLimites };
}

// Rodar uma vez no Apps Script para limpar entradas antigas da aba Funcoes
function resetarFuncoesSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_FUNCOES);
  if (sheet) ss.deleteSheet(sheet);
  getFuncoesSheet();
  SpreadsheetApp.getUi().alert('Aba Funcoes atualizada com sucesso!');
}

function doGet(e) {
  var action = e.parameter.action;

  if (action === 'getDadosIniciais') {
    var funcoes = carregarFuncoes();
    var sheet = getSheet();
    var dados = sheet.getDataRange().getValues();
    var contagemVagas = {};
    var contagemNte = {};

    for (var i = 1; i < dados.length; i++) {
      var funcao = String(dados[i][6] || '').trim();
      if (!funcao) continue;
      if (/^NTE \d+/.test(funcao)) {
        contagemNte[funcao] = (contagemNte[funcao] || 0) + 1;
      } else {
        contagemVagas[funcao] = (contagemVagas[funcao] || 0) + 1;
      }
    }

    return jsonResponse({
      contagemVagas: contagemVagas,
      contagemNte: contagemNte,
      vagasLimites: funcoes.vagasLimites
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

    // Verifica CPF duplicado
    for (var j = 1; j < dados.length; j++) {
      if (String(dados[j][2]).trim() === payload.cpf) {
        return jsonResponse({ success: false, message: 'Este CPF já está inscrito.' });
      }
    }

    var funcaoFinal;

    if (payload.nteNumero && payload.nteFuncao) {
      funcaoFinal = payload.nteNumero + ' - ' + payload.nteFuncao;
      var limite = getNteLimite(payload.nteNumero, payload.nteFuncao);
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
      var funcoes = carregarFuncoes();
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

    var agora = new Date();
    sheet.appendRow([
      Utilities.formatDate(agora, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm:ss'),
      payload.nome,
      payload.cpf,
      payload.telefone,
      '',
      payload.email,
      funcaoFinal
    ]);

    atualizarPainelVagas();
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
    sheet.appendRow(['Data/Hora', 'Nome', 'CPF', 'Telefone', 'Municipio', 'E-mail', 'Funcao']);
    sheet.getRange(1, 1, 1, 7)
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
  var dados = inscSheet.getDataRange().getValues();
  var contagem = {};
  for (var i = 1; i < dados.length; i++) {
    var f = String(dados[i][6] || '').trim();
    if (f) contagem[f] = (contagem[f] || 0) + 1;
  }

  var rows = [];

  // Funções institucionais
  var funcoesData = carregarFuncoes();
  var funcoes = Object.keys(funcoesData.vagasLimites);
  for (var k = 0; k < funcoes.length; k++) {
    var nome = funcoes[k];
    var limiteInst = funcoesData.vagasLimites[nome];
    var inscInst = contagem[nome] || 0;
    var dispInst = Math.max(0, limiteInst - inscInst);
    rows.push([nome, limiteInst, inscInst, dispInst]);
  }

  // Entradas NTE (Diretor e Ponto Focal por número)
  var nteFuncoes = ['Diretor', 'Ponto Focal'];
  for (var n = 0; n < NTE_LISTA.length; n++) {
    var nte = NTE_LISTA[n];
    for (var fn = 0; fn < nteFuncoes.length; fn++) {
      var funcaoNte = nteFuncoes[fn];
      var keyNte = nte + ' - ' + funcaoNte;
      var limiteNte = getNteLimite(nte, funcaoNte);
      var inscNte = contagem[keyNte] || 0;
      var dispNte = Math.max(0, limiteNte - inscNte);
      rows.push([keyNte, limiteNte, inscNte, dispNte]);
    }
  }

  if (rows.length > 0) {
    var dataRange = sheet.getRange(2, 1, rows.length, 4);
    dataRange.setValues(rows);
    for (var r = 0; r < rows.length; r++) {
      var cor = rows[r][3] === 0 ? '#fce8e8' : (rows[r][3] <= 2 ? '#fff3cd' : '#ffffff');
      sheet.getRange(r + 2, 1, 1, 4).setBackground(cor);
    }
  }

  var totalRow = rows.length + 2;
  var totalInscritos = rows.reduce(function(s, r) { return s + r[2]; }, 0);
  var totalLimite = rows.reduce(function(s, r) { return s + r[1]; }, 0);
  var totalDisp = rows.reduce(function(s, r) { return s + r[3]; }, 0);
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
}

function onEdit(e) {
  if (!e || !e.source) return;
  var sheetName = e.range.getSheet().getName();
  if (sheetName === SHEET_NAME || sheetName === SHEET_FUNCOES) {
    atualizarPainelVagas();
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
