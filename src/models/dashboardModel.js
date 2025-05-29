var database = require("../database/config")

function cadastrarPartida(fkUsuario, pontuacao) {
    console.log("ACESSEI A DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPartida():", fkUsuario, pontuacao);

    var instrucaoSql = `
        INSERT INTO partida (fkUsuario, fkJogo, pontuacao) VALUES ('${fkUsuario}', 1, '${pontuacao}');
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}   

function buscarRecorde(fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recordePonyoRun(): ", fkUsuario)
    var instrucaoSql = `
        SELECT IFNULL(MAX(pontuacao), '0') as maiorPontuacao FROM partida WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMediaPontuacao(fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mediaPontuacaoPonyoRun(): ", fkUsuario)
    var instrucaoSql = `
        SELECT IFNULL(TRUNCATE(AVG(pontuacao), 0), '0') as mediaPontuacao FROM partida WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTotalPartidas(fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mediaPontuacaoPonyoRun(): ", fkUsuario)
    var instrucaoSql = `
        SELECT IFNULL(COUNT(*), '0') as totalPartidas FROM partida WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarPartida,
    buscarRecorde,
    buscarMediaPontuacao,
    buscarTotalPartidas,
};