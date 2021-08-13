let ProdutoController = {
    viewForm: (req, res) => {
        res.render('produto')
    },
    saveForm: (req,res) => {
       let {nomeProduto, precoProduto} = req.body;
        /*
       if(idade <= 1) {
        res.send(`Olá ${nome} ${idade} ano.`)
       } else {
        res.send(`Olá ${nome} ${idade} anos.`)
       }
        */
       //salvar no banco

       //res.send(`O produto: ${nomeProduto}. Foi criado com sucesso!`)

       res.redirect('sucesso')
    },
    sucesso: (req, res) => {
        res.render('sucesso')
    }
}

module.exports = ProdutoController