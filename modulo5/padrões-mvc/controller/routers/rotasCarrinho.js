const express = require("express");

const router = express.Router();

const CarrinhoController = require("../controllers/CarrinhoController");

router.get("/add/:id", CarrinhoController.addItem);

module.exports = router;
