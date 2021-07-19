const express = require('express');

let app = express();

console.log(app)

// Criando uma rota
app.get('/', (req, res) => res.send("Olá mundo!") );

// Criando um servidor
app.listen(1308, () => console.log("Servidor da Nathiele"));