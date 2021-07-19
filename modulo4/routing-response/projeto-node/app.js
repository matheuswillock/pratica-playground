const express = require('express');

const app = express();

const port = 5000;

// Criando rota
app.get('/', (req, res) => res.send("Bem vindo ao Multiverso!"));

// Criando servidor
app.listen(port, () => console.log(`Rodando o servidor NEXUS: http://localhost:${port}`));