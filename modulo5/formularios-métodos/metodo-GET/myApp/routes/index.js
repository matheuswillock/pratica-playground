var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/IndexController');
var ProdutosController = require('../controllers/ProdutosController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//**** Rota contato e confirmar contato
router.get('/contato', IndexController.viewContato);
router.get('/confirmarcontato', IndexController.confirmarContato);

router.get('/produtos', ProdutosController.viewProdutos)
  
//**** Rotas Celulares
router.get('/celulares', ProdutosController.viewCelulares);

module.exports = router;