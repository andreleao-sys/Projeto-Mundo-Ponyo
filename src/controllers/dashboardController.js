var dashboardModel = require("../models/dashboardModel");
// var usuarioModel = require('../models/usuarioModel');

function cadastrarPartida(req, res) {
    //VARIÁVEIS
    var fkUsuario = req.body.fkUsuarioServer;
    var pontuacao = req.body.pontuacaoServer;

    dashboardModel.cadastrarPartida(fkUsuario, pontuacao)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao cadastrar Erro:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    )
}

function buscarRecorde(req, res) {

    var fkUsuario = req.query.fkUsuario;

    if (!fkUsuario) {
        res.status(400).send("Seu recorde está undefined!");
    } else {

        dashboardModel.buscarRecorde(fkUsuario)
            .then(function (resultadoBuscar) {
                console.log(`\nResultados encontrados: ${resultadoBuscar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoBuscar)}`); // transforma JSON em String
                console.log(resultadoBuscar);

                var recorde = resultadoBuscar[0].maiorPontuacao;
                res.json({ recorde });
                    
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar busca! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    cadastrarPartida,
    buscarRecorde,
}