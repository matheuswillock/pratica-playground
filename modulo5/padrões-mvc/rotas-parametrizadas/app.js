const express = require("express");

let app = express();

const port = 3000;

// Rota comum -> Raiz do projeto
app.get("/", (req, res) => res.send("hello world!"));

app.get("/produtos/", (req, res) => {
  res.send(`<h1>Aqui temos uma lista com 150 produtos.<h1/> 
    <h2>Indique o id do produto na URL<h2/>`);
});

/*
// Rota parametrizada 
    //Devemos passar (:) antes da variável que desejamos que seja dinâmica.
    // Se quisermos que não seja obrigatório passar o id inserimos ? ao final da variável na rota.
app.get('/produtos/:id', (req, res) => {
    // destruction
        //req.params.id => let {id}
    let {id} = req.params
    
    res.send(`Produto id: ${id} encontrado`)
})
*/

// Rota parametrizada passando um objeto para retorno
const series = [
  {
    id: 1,
    nome: "Irmão do Jorel",
  },

  {
    id: 2,
    nome: "Um maluco no pedaço",
  },

  {
    id: 3,
    nome: "Breaking Bad",
  },
];

app.get("/produtos/:id", (req, res) => {
  let { id } = req.params;

  const foundSeries = series.find((serie) => {
    return serie.id == id;
  });

  res.send(foundSeries);
});

// Servidor criado
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
