var dashboardModel = require("../models/dashboardModel");
// const { buscarMedidasPartidas } = require("./medidaController");
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

function buscarMediaPontuacao(req, res) {

    var fkUsuario = req.params.fkUsuario;

    if (!fkUsuario) {
        res.status(400).send("A média está undefined!");
    } else {

        dashboardModel.buscarMediaPontuacao(fkUsuario)
            .then(function (resultadoBuscar) {
                console.log(`\nResultados encontrados: ${resultadoBuscar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoBuscar)}`); // transforma JSON em String
                console.log(resultadoBuscar);

                var media = resultadoBuscar[0].mediaPontuacao;
                res.json({ media });
                    
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar busca da média! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function buscarTotalPartidas(req, res) {

    var fkUsuario = req.params.fkUsuario;

    if (!fkUsuario) {
        res.status(400).send("O total de partidas está undefined!");
    } else {

        dashboardModel.buscarTotalPartidas(fkUsuario)
            .then(function (resultadoBuscar) {
                console.log(`\nResultados encontrados: ${resultadoBuscar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoBuscar)}`); // transforma JSON em String
                console.log(resultadoBuscar);

                var total = resultadoBuscar[0].totalPartidas;
                res.json({ total });
                console.log('COUNT: ' + total);
                    
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar busca da média! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function buscarUltimasPartidas(req, res) {

    const limite_linhas = 10;

    var fkUsuario = req.params.fkUsuario;

    console.log(`Recuperando as ultimas ${limite_linhas} partidas`);

    dashboardModel.buscarUltimasPartidas(fkUsuario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas partidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPartidasEmTempoReal(req, res) {

    var fkUsuario = req.params.fkUsuario;

    console.log(`Recuperando partidas em tempo real`);

    dashboardModel.buscarPartidasEmTempoReal(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas partidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrarPartida,
    buscarRecorde,
    buscarMediaPontuacao,
    buscarTotalPartidas,
    buscarUltimasPartidas,
    buscarPartidasEmTempoReal,
}