var SHEET_NAME = 'Inscricoes';
var SHEET_VAGAS = 'Vagas';
var SHEET_FUNCOES = 'Funcoes';

function getFuncoesSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_FUNCOES);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_FUNCOES);
    sheet.appendRow(['Nome', 'Limite', 'Tipo']);
    sheet.getRange(1, 1, 1, 3).setFontWeight('bold').setBackground('#1a3a8a').setFontColor('#ffffff');

    var defaults = [
      ['Secretário Municipal', 0, 'Municipal'],
      ['Gestor Escolar', 0, 'Municipal'],
      ['Diretor de NTE', 0, 'Municipal'],
      ['Técnico Municipal', 0, 'Municipal'],
      ['Técnico NTE', 0, 'Municipal'],
      ['CAV/DIE/SGINF', 8, 'Institucional'],
      ['Agentes Pedagógicos Municipais', 417, 'Institucional'],
      ['NTE', 54, 'Institucional'],
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
  var funcoesMunicipais = [];
  var vagasLimites = {};
  for (var i = 1; i < dados.length; i++) {
    var nome = String(dados[i][0] || '').trim();
    var limite = parseInt(dados[i][1]) || 0;
    var tipo = String(dados[i][2] || '').trim();
    if (!nome) continue;
    if (tipo === 'Municipal') {
      funcoesMunicipais.push(nome);
    } else {
      vagasLimites[nome] = limite;
    }
  }
  return { funcoesMunicipais: funcoesMunicipais, vagasLimites: vagasLimites };
}

function doGet(e) {
  var action = e.parameter.action;

  if (action === 'getDadosIniciais') {
    var funcoes = carregarFuncoes();
    var sheet = getSheet();
    var dados = sheet.getDataRange().getValues();
    var municipiosOcupados = {};
    var contagemVagas = {};

    for (var i = 1; i < dados.length; i++) {
      var funcao = String(dados[i][6] || '').trim();
      var municipio = String(dados[i][4] || '').trim();

      if (funcoes.funcoesMunicipais.indexOf(funcao) !== -1) {
        if (municipio) {
          if (!municipiosOcupados[funcao]) municipiosOcupados[funcao] = [];
          if (municipiosOcupados[funcao].indexOf(municipio) === -1) {
            municipiosOcupados[funcao].push(municipio);
          }
        }
      } else if (funcao) {
        contagemVagas[funcao] = (contagemVagas[funcao] || 0) + 1;
      }
    }

    return jsonResponse({
      municipiosOcupados: municipiosOcupados,
      contagemVagas: contagemVagas,
      funcoesMunicipais: funcoes.funcoesMunicipais,
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

    var funcoes = carregarFuncoes();
    var sheet = getSheet();
    var dados = sheet.getDataRange().getValues();
    var ehFuncaoMunicipal = funcoes.funcoesMunicipais.indexOf(payload.funcao) !== -1;

    // Verifica município duplicado por função (uma inscrição por função por município)
    if (ehFuncaoMunicipal && payload.municipio) {
      for (var i = 1; i < dados.length; i++) {
        if (String(dados[i][4]).trim() === payload.municipio &&
            String(dados[i][6]).trim() === payload.funcao) {
          return jsonResponse({
            success: false,
            message: 'O município "' + payload.municipio + '" já possui um(a) "' + payload.funcao + '" inscrito(a).'
          });
        }
      }
    }

    // Verifica CPF duplicado
    for (var j = 1; j < dados.length; j++) {
      if (String(dados[j][2]).trim() === payload.cpf) {
        return jsonResponse({ success: false, message: 'Este CPF já está inscrito.' });
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
      payload.funcao
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

  // Cabeçalho
  var header = [['Função / Instituição', 'Limite', 'Inscritos', 'Disponíveis']];
  sheet.getRange(1, 1, 1, 4).setValues(header)
    .setFontWeight('bold')
    .setBackground('#1a3a8a')
    .setFontColor('#ffffff');

  // Conta inscrições por função na aba Inscricoes
  var inscSheet = getSheet();
  var dados = inscSheet.getDataRange().getValues();
  var contagem = {};
  for (var i = 1; i < dados.length; i++) {
    var f = String(dados[i][6] || '').trim();
    if (f) contagem[f] = (contagem[f] || 0) + 1;
  }

  // Monta linhas
  var rows = [];
  var funcoesData = carregarFuncoes();
  var funcoes = Object.keys(funcoesData.vagasLimites);
  for (var k = 0; k < funcoes.length; k++) {
    var nome = funcoes[k];
    var limite = funcoesData.vagasLimites[nome];
    var inscritos = contagem[nome] || 0;
    var disponíveis = Math.max(0, limite - inscritos);
    rows.push([nome, limite, inscritos, disponíveis]);
  }

  if (rows.length > 0) {
    var dataRange = sheet.getRange(2, 1, rows.length, 4);
    dataRange.setValues(rows);

    // Destaca vagas esgotadas em vermelho
    for (var r = 0; r < rows.length; r++) {
      var cor = rows[r][3] === 0 ? '#fce8e8' : (rows[r][3] <= 2 ? '#fff3cd' : '#ffffff');
      sheet.getRange(r + 2, 1, 1, 4).setBackground(cor);
    }
  }

  // Linha de totais
  var totalRow = rows.length + 2;
  var totalInscritos = rows.reduce(function(s, r) { return s + r[2]; }, 0);
  var totalLimite = rows.reduce(function(s, r) { return s + r[1]; }, 0);
  var totalDisp = rows.reduce(function(s, r) { return s + r[3]; }, 0);
  sheet.getRange(totalRow, 1, 1, 4)
    .setValues([['TOTAL', totalLimite, totalInscritos, totalDisp]])
    .setFontWeight('bold')
    .setBackground('#e8edf5');

  sheet.setColumnWidth(1, 280);
  sheet.setColumnWidth(2, 80);
  sheet.setColumnWidth(3, 90);
  sheet.setColumnWidth(4, 100);
  sheet.setFrozenRows(1);
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
