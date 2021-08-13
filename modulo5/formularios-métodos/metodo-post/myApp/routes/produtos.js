let express = require('express');
let router = express.Router();

let ProdutosController = require('../controllers/ProdutosController');

router.get('/criar', ProdutosController.viewForm);
router.post('/criar', ProdutosController.saveForm);
router.get('/sucesso', ProdutosController.sucesso);


module.exports = router