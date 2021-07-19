const ContatoController = {
  criarContato: (req, res) => {
    res.send("Criando contato");
  },

  deletarContato: (req, res) => {
    const { id } = req.params;
    res.send(`Deletando contato id: ${id}`);
  },
};

module.exports = ContatoController;
