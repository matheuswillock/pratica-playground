let express = require('express');

let router = express.Router();

let ProdutoController = require('../controllers/ProdutoController');

router.get('/:id/editar', ProdutoController.viewAttForm);
router.put('/editar', ProdutoController.editar);
router.get('/', ProdutoController.listarProdutos);
router.delete('/deletar/:id', ProdutoController.deletarProduto)

module.exports = router