const express = require("express");

// Ativando o recurso express para podermos utilizar rotas em um arquivo diferente de onde está o nosso entry point.
const router = express.Router();

// Não precisamos mais colocar '/produtos/criar' na rota pois isso já vai estar no entry point. Ou seja vamos passar somente as informações após '/produto/.../'

// Rota criando um produto
router.get("/criar", (req, res) => {
  res.send("Criando um produto");
});

// Rota deletando um produto
router.get("/deletar", (req, res) => {
  res.send("Deletando um produto");
});

module.exports = router;
