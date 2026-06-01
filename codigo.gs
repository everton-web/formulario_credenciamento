var SHEET_NAME = 'Inscricoes';

var FUNCOES_MUNICIPIO = ['Secretário Municipal', 'Gestor Escolar', 'Diretor de NTE', 'Técnico Municipal', 'Técnico NTE'];

function doGet(e) {
  var action = e.parameter.action;

  if (action === 'getDadosIniciais') {
    var sheet = getSheet();
    var dados = sheet.getDataRange().getValues();
    var municipiosOcupados = [];
    var contagemVagas = {};

    for (var i = 1; i < dados.length; i++) {
      var funcao = String(dados[i][6] || '').trim();
      var municipio = String(dados[i][4] || '').trim();

      if (FUNCOES_MUNICIPIO.indexOf(funcao) !== -1) {
        // Função municipal: registra município como ocupado
        if (municipio && municipiosOcupados.indexOf(municipio) === -1) {
          municipiosOcupados.push(municipio);
        }
      } else if (funcao) {
        // Função institucional: conta vagas
        contagemVagas[funcao] = (contagemVagas[funcao] || 0) + 1;
      }
    }

    return jsonResponse({ municipiosOcupados: municipiosOcupados, contagemVagas: contagemVagas });
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
    var ehFuncaoMunicipal = FUNCOES_MUNICIPIO.indexOf(payload.funcao) !== -1;

    // Verifica município duplicado (apenas para funções municipais)
    if (ehFuncaoMunicipal && payload.municipio) {
      for (var i = 1; i < dados.length; i++) {
        if (String(dados[i][4]).trim() === payload.municipio &&
            FUNCOES_MUNICIPIO.indexOf(String(dados[i][6]).trim()) !== -1) {
          return jsonResponse({
            success: false,
            message: 'O município "' + payload.municipio + '" já possui inscrição.'
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

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
