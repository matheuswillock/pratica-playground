const express = require("express");
const app = express();
const port = 3000;

// importando o módulo da rota produtos
const rotasProdutos = require("./routes/rotasProdutos");

// importando o módulo da rota series
const rotasSeries = require("./routes/rotasSeries");

// Rota padrão
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Rota modulada (produtos)
app.use("/produtos", rotasProdutos);

// Rota modulada (series)
app.use("/series", rotasSeries);

// Criando um server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
