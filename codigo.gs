var SHEET_NAME = 'Inscricoes';
var SHEET_VAGAS = 'Vagas';
var SHEET_FUNCOES = 'Funcoes';
var SHEET_MUNICIPIOS = 'Municípios';

// Planilha externa onde os municípios pendentes são extraídos periodicamente
var SHEET_DESTINO_ID = '1rttg1mDIBJK-8qyBbgLOxBDY0_p-T28xcTofF53yAB8';
var SHEET_PENDENTES_DESTINO = 'Pendentes';

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

// Mapeamento de cada município ao número do seu NTE (Núcleo Territorial de Educação)
var MUNICIPIO_NTE = {
  "Abaíra": 3,
  "Abaré": 24,
  "Acajutiba": 18,
  "Adustina": 17,
  "Água Fria": 19,
  "Aiquara": 22,
  "Alagoinhas": 18,
  "Alcobaça": 7,
  "Almadina": 5,
  "Amargosa": 9,
  "Amélia Rodrigues": 19,
  "América Dourada": 1,
  "Anagé": 20,
  "Andaraí": 3,
  "Andorinha": 25,
  "Angical": 11,
  "Anguera": 19,
  "Antas": 17,
  "Antônio Cardoso": 19,
  "Antônio Gonçalves": 25,
  "Aporá": 18,
  "Apuarema": 22,
  "Araçás": 18,
  "Aracatu": 20,
  "Araci": 4,
  "Aramari": 18,
  "Arataca": 5,
  "Aratuípe": 6,
  "Aurelino Leal": 5,
  "Baianópolis": 11,
  "Baixa Grande": 15,
  "Banzaê": 17,
  "Barra": 2,
  "Barra da Estiva": 3,
  "Barra do Choça": 20,
  "Barra do Mendes": 1,
  "Barra do Rocha": 22,
  "Barreiras": 11,
  "Barro Alto": 1,
  "Barro Preto": 5,
  "Barrocas": 4,
  "Belmonte": 27,
  "Belo Campo": 20,
  "Biritinga": 4,
  "Boa Nova": 22,
  "Boa Vista do Tupim": 14,
  "Bom Jesus da Lapa": 2,
  "Bom Jesus da Serra": 20,
  "Boninal": 3,
  "Bonito": 3,
  "Boquira": 12,
  "Botuporã": 12,
  "Brejões": 9,
  "Brejolândia": 23,
  "Brotas de Macaúbas": 2,
  "Brumado": 13,
  "Buerarema": 5,
  "Buritirama": 11,
  "Caatiba": 8,
  "Cabaceiras do Paraguaçu": 21,
  "Cachoeira": 21,
  "Caculé": 13,
  "Caém": 16,
  "Caetanos": 20,
  "Caetité": 13,
  "Cafarnaum": 1,
  "Cairu": 6,
  "Caldeirão Grande": 25,
  "Camacan": 5,
  "Camaçari": 26,
  "Camamu": 6,
  "Campo Alegre de Lourdes": 10,
  "Campo Formoso": 25,
  "Canápolis": 23,
  "Canarana": 1,
  "Canavieiras": 5,
  "Candeal": 4,
  "Candeias": 26,
  "Candiba": 13,
  "Cândido Sales": 20,
  "Cansanção": 4,
  "Canudos": 10,
  "Capela do Alto Alegre": 15,
  "Capim Grosso": 15,
  "Caraíbas": 20,
  "Caravelas": 7,
  "Cardeal da Silva": 18,
  "Carinhanha": 2,
  "Casa Nova": 10,
  "Castro Alves": 21,
  "Catolândia": 11,
  "Catu": 18,
  "Caturama": 12,
  "Central": 1,
  "Chorrochó": 24,
  "Cícero Dantas": 17,
  "Cipó": 17,
  "Coaraci": 5,
  "Cocos": 23,
  "Conceição da Feira": 19,
  "Conceição do Almeida": 21,
  "Conceição do Coité": 4,
  "Conceição do Jacuípe": 19,
  "Conde": 18,
  "Condeúba": 20,
  "Contendas do Sincorá": 13,
  "Coração de Maria": 19,
  "Cordeiros": 20,
  "Coribe": 23,
  "Coronel João Sá": 17,
  "Correntina": 23,
  "Cotegipe": 11,
  "Cravolândia": 9,
  "Crisópolis": 18,
  "Cristópolis": 11,
  "Cruz das Almas": 21,
  "Curaçá": 10,
  "Dário Meira": 22,
  "Dias d'Ávila": 26,
  "Dom Basílio": 13,
  "Dom Macedo Costa": 21,
  "Elísio Medrado": 9,
  "Encruzilhada": 20,
  "Entre Rios": 18,
  "Érico Cardoso": 12,
  "Esplanada": 18,
  "Euclides da Cunha": 17,
  "Eunápolis": 27,
  "Fátima": 17,
  "Feira da Mata": 2,
  "Feira de Santana": 19,
  "Filadélfia": 25,
  "Firmino Alves": 8,
  "Floresta Azul": 5,
  "Formosa do Rio Preto": 11,
  "Gandu": 6,
  "Gavião": 15,
  "Gentio do Ouro": 1,
  "Glória": 24,
  "Gongogi": 22,
  "Governador Mangabeira": 21,
  "Guajeru": 20,
  "Guanambi": 13,
  "Guaratinga": 27,
  "Heliópolis": 17,
  "Iaçu": 14,
  "Ibiassucê": 13,
  "Ibicaraí": 5,
  "Ibicoara": 3,
  "Ibicuí": 8,
  "Ibipeba": 1,
  "Ibipitanga": 12,
  "Ibiquera": 14,
  "Ibirapitanga": 6,
  "Ibirapuã": 7,
  "Ibirataia": 22,
  "Ibitiara": 3,
  "Ibititá": 1,
  "Ibotirama": 2,
  "Ichu": 4,
  "Igaporã": 2,
  "Igrapiúna": 6,
  "Iguaí": 8,
  "Ilhéus": 5,
  "Inhambupe": 18,
  "Ipecaetá": 19,
  "Ipiaú": 22,
  "Ipirá": 15,
  "Ipupiara": 1,
  "Irajuba": 9,
  "Iramaia": 3,
  "Iraquara": 3,
  "Irará": 19,
  "Irecê": 1,
  "Itabela": 27,
  "Itaberaba": 14,
  "Itabuna": 5,
  "Itacaré": 5,
  "Itaeté": 3,
  "Itagi": 22,
  "Itagibá": 22,
  "Itagimirim": 27,
  "Itaguaçu da Bahia": 1,
  "Itaju do Colônia": 5,
  "Itajuípe": 5,
  "Itamaraju": 7,
  "Itamari": 22,
  "Itambé": 8,
  "Itanagra": 18,
  "Itanhém": 7,
  "Itaparica": 26,
  "Itapé": 5,
  "Itapebi": 27,
  "Itapetinga": 8,
  "Itapicuru": 18,
  "Itapitanga": 5,
  "Itaquara": 9,
  "Itarantim": 8,
  "Itatim": 14,
  "Itiruçu": 9,
  "Itiúba": 4,
  "Itororó": 8,
  "Ituaçu": 13,
  "Ituberá": 6,
  "Iuiú": 13,
  "Jaborandi": 23,
  "Jacaraci": 20,
  "Jacobina": 16,
  "Jaguaquara": 9,
  "Jaguarari": 25,
  "Jaguaripe": 6,
  "Jandaíra": 18,
  "Jequié": 22,
  "Jeremoabo": 17,
  "Jiquiriçá": 9,
  "Jitaúna": 22,
  "João Dourado": 1,
  "Juazeiro": 10,
  "Jucuruçu": 7,
  "Jussara": 1,
  "Jussari": 5,
  "Jussiape": 3,
  "Lafaiete Coutinho": 9,
  "Lagoa Real": 13,
  "Laje": 9,
  "Lajedão": 7,
  "Lajedinho": 14,
  "Lajedo do Tabocal": 9,
  "Lamarão": 4,
  "Lapão": 1,
  "Lauro de Freitas": 26,
  "Lençóis": 3,
  "Licínio de Almeida": 20,
  "Livramento de Nossa Senhora": 13,
  "Luís Eduardo Magalhães": 11,
  "Macajuba": 14,
  "Macarani": 8,
  "Macaúbas": 12,
  "Macururé": 24,
  "Madre de Deus": 26,
  "Maetinga": 20,
  "Maiquinique": 8,
  "Mairi": 15,
  "Malhada": 2,
  "Malhada de Pedras": 13,
  "Manoel Vitorino": 22,
  "Mansidão": 11,
  "Maracás": 9,
  "Maragogipe": 21,
  "Maraú": 5,
  "Marcionílio Souza": 3,
  "Mascote": 5,
  "Mata de São João": 26,
  "Matina": 2,
  "Medeiros Neto": 7,
  "Miguel Calmon": 16,
  "Milagres": 9,
  "Mirangaba": 16,
  "Mirante": 20,
  "Monte Santo": 4,
  "Morpara": 2,
  "Morro do Chapéu": 3,
  "Mortugaba": 20,
  "Mucugê": 3,
  "Mucuri": 7,
  "Mulungu do Morro": 1,
  "Mundo Novo": 14,
  "Muniz Ferreira": 21,
  "Muquém de São Francisco": 2,
  "Muritiba": 21,
  "Mutuípe": 9,
  "Nazaré": 21,
  "Nilo Peçanha": 6,
  "Nordestina": 4,
  "Nova Canaã": 8,
  "Nova Fátima": 15,
  "Nova Ibiá": 22,
  "Nova Itarana": 9,
  "Nova Redenção": 3,
  "Nova Soure": 17,
  "Nova Viçosa": 7,
  "Novo Horizonte": 3,
  "Novo Triunfo": 17,
  "Olindina": 18,
  "Oliveira dos Brejinhos": 2,
  "Ouriçangas": 18,
  "Ourolândia": 16,
  "Palmas de Monte Alto": 13,
  "Palmeiras": 3,
  "Paramirim": 12,
  "Paratinga": 2,
  "Paripiranga": 17,
  "Pau Brasil": 5,
  "Paulo Afonso": 24,
  "Pé de Serra": 15,
  "Pedrão": 18,
  "Pedro Alexandre": 17,
  "Piatã": 3,
  "Pilão Arcado": 10,
  "Pindaí": 13,
  "Pindobaçu": 25,
  "Pintadas": 15,
  "Piraí do Norte": 6,
  "Piripá": 20,
  "Piritiba": 14,
  "Planaltino": 9,
  "Planalto": 20,
  "Poções": 20,
  "Pojuca": 26,
  "Ponto Novo": 25,
  "Porto Seguro": 27,
  "Potiraguá": 8,
  "Prado": 7,
  "Presidente Dutra": 1,
  "Presidente Jânio Quadros": 20,
  "Presidente Tancredo Neves": 6,
  "Queimadas": 4,
  "Quijingue": 4,
  "Quixabeira": 15,
  "Rafael Jambeiro": 14,
  "Remanso": 10,
  "Retirolândia": 4,
  "Riachão das Neves": 11,
  "Riachão do Jacuípe": 15,
  "Riacho de Santana": 2,
  "Ribeira do Amparo": 17,
  "Ribeira do Pombal": 17,
  "Ribeirão do Largo": 20,
  "Rio Real": 18,
  "Rio de Contas": 3,
  "Rio do Antônio": 13,
  "Rio do Pires": 12,
  "Rodelas": 24,
  "Ruy Barbosa": 14,
  "Salinas da Margarida": 21,
  "Salvador": 26,
  "Santa Bárbara": 19,
  "Santa Brígida": 17,
  "Santa Cruz Cabrália": 27,
  "Santa Cruz da Vitória": 8,
  "Santa Inês": 9,
  "Santa Luzia": 5,
  "Santa Maria da Vitória": 23,
  "Santa Rita de Cássia": 11,
  "Santa Teresinha": 14,
  "Santaluz": 4,
  "Santana": 23,
  "Santanópolis": 19,
  "Santo Amaro": 21,
  "Santo Antônio de Jesus": 21,
  "Santo Estêvão": 19,
  "São Desidério": 11,
  "São Domingos": 4,
  "São Felipe": 21,
  "São Félix": 21,
  "São Félix do Coribe": 23,
  "São Francisco do Conde": 26,
  "São Gabriel": 1,
  "São Gonçalo dos Campos": 19,
  "São José da Vitória": 5,
  "São José do Jacuípe": 15,
  "São Miguel das Matas": 9,
  "São Sebastião do Passé": 26,
  "Sapeaçu": 21,
  "Sátiro Dias": 18,
  "Saubara": 21,
  "Saúde": 16,
  "Seabra": 3,
  "Sebastião Laranjeiras": 13,
  "Senhor do Bonfim": 25,
  "Sento Sé": 10,
  "Serra Dourada": 23,
  "Serra Preta": 15,
  "Serra do Ramalho": 2,
  "Serrinha": 4,
  "Serrolândia": 16,
  "Simões Filho": 26,
  "Sítio do Mato": 2,
  "Sítio do Quinto": 17,
  "Sobradinho": 10,
  "Souto Soares": 3,
  "Tabocas do Brejo Velho": 23,
  "Tanhaçu": 13,
  "Tanque Novo": 13,
  "Tanquinho": 19,
  "Taperoá": 6,
  "Tapiramutá": 14,
  "Teixeira de Freitas": 7,
  "Teodoro Sampaio": 19,
  "Teofilândia": 4,
  "Teolândia": 6,
  "Terra Nova": 19,
  "Tremedal": 20,
  "Tucano": 4,
  "Uauá": 10,
  "Ubaíra": 9,
  "Ubaitaba": 5,
  "Ubatã": 22,
  "Uibaí": 1,
  "Umburanas": 16,
  "Una": 5,
  "Urandi": 13,
  "Uruçuca": 5,
  "Utinga": 3,
  "Valença": 6,
  "Valente": 4,
  "Várzea Nova": 16,
  "Várzea da Roça": 15,
  "Várzea do Poço": 15,
  "Varzedo": 21,
  "Vera Cruz": 26,
  "Vereda": 7,
  "Vitória da Conquista": 20,
  "Wagner": 3,
  "Wanderley": 11,
  "Wenceslau Guimarães": 6,
  "Xique-Xique": 1
};

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
    .addSeparator()
    .addItem('📤 Extrair Pendentes Agora', 'extrairPendentesParaOutraPlanilhaManual')
    .addItem('⏱️ Configurar Trigger de Extração (10min)', 'configurarTriggerExtracaoPendentes')
    .addToUi();
}

// Lê a aba Municípios desta planilha, filtra os pendentes e grava na planilha externa
// (SHEET_DESTINO_ID), sobrescrevendo o snapshot anterior e registrando data/hora da extração.
function extrairPendentesParaOutraPlanilha() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_MUNICIPIOS);
  if (!sheet) return;

  var dados = sheet.getDataRange().getValues();
  var pendentes = [];
  for (var i = 1; i < dados.length; i++) {
    if (String(dados[i][2]).trim() === 'Pendente') {
      pendentes.push([dados[i][0], dados[i][1]]);
    }
  }

  var ssDestino = SpreadsheetApp.openById(SHEET_DESTINO_ID);
  var sheetDestino = ssDestino.getSheetByName(SHEET_PENDENTES_DESTINO);
  if (!sheetDestino) {
    sheetDestino = ssDestino.insertSheet(SHEET_PENDENTES_DESTINO);
  } else {
    sheetDestino.clearContents();
    sheetDestino.clearFormats();
  }

  var agora = new Date();
  var timestamp = Utilities.formatDate(agora, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm:ss');

  sheetDestino.getRange(1, 1, 1, 2).merge()
    .setValue('Extraído em: ' + timestamp)
    .setFontWeight('bold')
    .setBackground('#1a3a8a')
    .setFontColor('#ffffff');

  sheetDestino.getRange(2, 1, 1, 2).setValues([['NTE', 'Município']])
    .setFontWeight('bold')
    .setBackground('#fce8e8');

  if (pendentes.length > 0) {
    sheetDestino.getRange(3, 1, pendentes.length, 2).setValues(pendentes);
  }

  sheetDestino.setColumnWidth(1, 80);
  sheetDestino.setColumnWidth(2, 220);
  sheetDestino.setFrozenRows(2);
}

function extrairPendentesParaOutraPlanilhaManual() {
  extrairPendentesParaOutraPlanilha();
  SpreadsheetApp.getUi().alert('✅ Pendentes extraídos para a planilha externa!');
}

// Roda uma vez (ou sempre que quiser recriar) para agendar a extração automática a cada 10 minutos
function configurarTriggerExtracaoPendentes() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'extrairPendentesParaOutraPlanilha') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  ScriptApp.newTrigger('extrairPendentesParaOutraPlanilha')
    .timeBased()
    .everyMinutes(10)
    .create();
  SpreadsheetApp.getUi().alert('✅ Trigger configurado: extração automática a cada 10 minutos.');
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
    var nteDoMunicipio = MUNICIPIO_NTE[mun] !== undefined ? ('NTE ' + String(MUNICIPIO_NTE[mun]).padStart(2, '0')) : '-';
    if (repMunicipal[mun]) {
      inscritos.push([nteDoMunicipio, mun, 'Inscrito', repMunicipal[mun].funcao, repMunicipal[mun].nome]);
    } else {
      pendentes.push([nteDoMunicipio, mun, 'Pendente', '-', '-']);
    }
  }

  // Cabeçalho
  sheet.getRange(1, 1, 1, 5)
    .setValues([['NTE', 'Município', 'Status', 'Função', 'Representante']])
    .setFontWeight('bold')
    .setBackground('#1a3a8a')
    .setFontColor('#ffffff');

  // Pendentes primeiro, depois inscritos
  var rows = pendentes.concat(inscritos);
  if (rows.length > 0) {
    sheet.getRange(2, 1, rows.length, 5).setValues(rows);
    for (var r = 0; r < pendentes.length; r++) {
      sheet.getRange(r + 2, 1, 1, 5).setBackground('#fce8e8');
    }
    for (var s = 0; s < inscritos.length; s++) {
      sheet.getRange(pendentes.length + s + 2, 1, 1, 5).setBackground('#e8f5e9');
    }
  }

  // Rodapé com totais
  var totalRow = rows.length + 2;
  sheet.getRange(totalRow, 1, 1, 5)
    .setValues([['', 'TOTAL: ' + TODOS_MUNICIPIOS.length + ' municípios', 'Pendentes: ' + pendentes.length, 'Inscritos: ' + inscritos.length, '']])
    .setFontWeight('bold')
    .setBackground('#e8edf5');

  sheet.setColumnWidth(1, 80);
  sheet.setColumnWidth(2, 220);
  sheet.setColumnWidth(3, 90);
  sheet.setColumnWidth(4, 210);
  sheet.setColumnWidth(5, 260);
  sheet.setFrozenRows(1);
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
