let IndexController = {
    viewContato: (req, res) => {
        let {nome, sobrenome, idade} = req.query;

        var content;
        
        if(idade >= 18) {
            var content = 'Vejo que você é maior de idade. Pode acessar o conteúdo.'
        } else {
            var content = 'Vejo que você é menor de idade. Vou redirecionar você para o canal do Lucas Neto.'
        };

        res.render('contato', {nomeUsuario:nome, sobrenomeUsuario:sobrenome, conteudoPage: content, idadeUsuario:idade});
    },

    confirmarContato: (req, res) => {
        let {nome, email} = req.query;

        res.send(`Recebido com sucesso ${nome}!!`)
    }
}

module.exports = IndexController;

