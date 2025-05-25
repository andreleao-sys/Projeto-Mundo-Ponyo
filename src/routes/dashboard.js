var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/cadastrarPartida", function (req, res) {
    dashboardController.cadastrarPartida(req, res);
});
router.get("/buscarRecorde", function (req, res) {
    dashboardController.buscarRecorde(req, res);
})

module.exports = router;