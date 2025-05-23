var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/cadastrarPartida", function (req, res) {
    dashboardController.cadastrarPartida(req, res);
});

module.exports = router;