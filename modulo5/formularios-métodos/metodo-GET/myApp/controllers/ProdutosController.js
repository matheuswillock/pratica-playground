const celulares = [
    {
        nome: 'Motorola Moto E6 Plus',
        preco: 14999
    },
    {
        nome: 'Motorola Moto G7',
        preco: 19999
    },
    {
        nome: 'Alcatel 5033A',
        preco: 6999
    },
    {
        nome: 'Samsung Galaxy A50',
        preco: 33499
    }
];



let ProdutosController = {
    viewProdutos: (req, res) => {
        res.render('produtos', {title: 'Produtos'})
    },    
    viewCelulares: (req, res) => {
        let {max, min} = req.query;

        const celularFiltrado = 
            celulares.filter(
                celular => celular.preco <= max
            )
        ;
        
        res.send(celularFiltrado)
    }


}



module.exports = ProdutosController;