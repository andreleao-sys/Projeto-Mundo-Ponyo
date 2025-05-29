var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/cadastrarPartida", function (req, res) {
    dashboardController.cadastrarPartida(req, res);
});
router.get("/buscarRecorde", function (req, res) {
    dashboardController.buscarRecorde(req, res);
});
router.get("/buscarMediaPontuacao/:fkUsuario", function (req, res) {
    dashboardController.buscarMediaPontuacao(req, res);
});
router.get("/buscarTotalPartidas/:fkUsuario", function (req, res) {
    dashboardController.buscarTotalPartidas(req, res);
});

module.exports = router;