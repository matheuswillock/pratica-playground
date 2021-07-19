const express = require("express");

const ContatoController = require("../controllers/ContatoController");

const router = express.Router();

router.get("/criar", ContatoController.criarContato);

router.get("/deletar/:id", ContatoController.deletarContato);

module.exports = router;
