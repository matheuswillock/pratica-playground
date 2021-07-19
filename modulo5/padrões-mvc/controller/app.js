const express = require("express");
const app = express();
const PORT = 3030;
const rotasProdutos = require("./routers/rotasProdutos");
const rotasContatos = require("./routers/rotasContatos");
const rotasCarrinho = require("./routers/rotasCarrinho");

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.use("/produtos", rotasProdutos);

app.use("/contato", rotasContatos);

app.use("/carrinho", rotasCarrinho);

//app.use("/perfil", rotasCarrinhos);

app.listen(PORT, () => {
  console.log(`Running http://localhost:${PORT}`);
});
