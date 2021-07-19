const express = require('express');

const app = express();

const port = 6160;

// Criando rota
app.get('/', (req, res) => res.send('Loki, você está preso!'));

app.get('/contato', (req, res) => res.send([{heroi:'Homem-aranha', status:'vivo'}, {heroi:'Homem de Ferro', status:'morto'},{heroi:'Capitão América', satus:'Aposentado'}]))

// Criando server-side
app.listen(port, () => console.log(`Outra linha do tempo está sendo criada: http://localhost:${port}`));