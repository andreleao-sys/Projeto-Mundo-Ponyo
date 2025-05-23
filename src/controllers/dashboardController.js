var dashboardModel = require("../models/dashboardModel");

function cadastrarPartida(req, res) {
    //VARIÁVEL DE PONTUAÇÃO
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

module.exports = {
    cadastrarPartida,
}