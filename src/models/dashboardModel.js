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
        SELECT MAX(pontuacao) as maiorPontuacao FROM partida WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarPartida,
    buscarRecorde,
};