const CarrinhoController = {
  addItem: (req, res) => {
    let { id } = req.params;
    res.send(`Item id ${id} adicionado com sucesso!`);
  },
};

module.exports = CarrinhoController;
