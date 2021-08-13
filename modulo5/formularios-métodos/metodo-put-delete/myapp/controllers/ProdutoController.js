let ProdutoController = {
    viewAttForm: (req, res) => {
        let {id} = req.params;

        let produtos = [
            {
                id: 1, 
                nome: 'Produto x', 
                preco: 10
            },
            {
                id: 2, 
                nome: 'Produto y', 
                preco: 10
            },
            {
                id: 3, 
                nome: 'Produto z', 
                preco: 10
            },
        ]


       res.render('editarProduto', {produto: produtos[id]})
    },
    editar: (req, res) => {
        let {nomeProduto, precoProduto } = req.body
        res.send(`Você editou o produto ${nomeProduto}`)
    },
    listarProdutos: (req, res) => {

        let produtos = [
            {
                id: 1, 
                nome: 'Produto x', 
                preco: 10
            },
            {
                id: 2, 
                nome: 'Produto y', 
                preco: 10
            },
            {
                id: 3, 
                nome: 'Produto z', 
                preco: 10
            },
        ]

        res.render('listarProdutos', {listaProdutos:produtos})
    },
    deletarProduto: (req, res) => {
        let {id} = req.params

        res.send(`Estou deletando o produto com o id: ${id}.`)
    }
}

module.exports = ProdutoController;