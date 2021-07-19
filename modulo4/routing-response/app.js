const express = require('express');

const app = express();

const port = 8080

app.get('/', (req, res) => res.send("Bem vindo a Konoha!"));

app.get('/contato', (req, res) => res.send({nome: "Matheus", idade:"23"}));


app.listen(port, () => {
    console.log(`Servidor rodando. Acesse http://localhost:${port}`)
}); 

