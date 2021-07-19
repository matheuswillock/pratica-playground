const express = require('express');

let app = express();
let port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world')
});

app.get('/contato', (req, res) => {
    res.send({
        nome: "Matheus",
        idade: 23,
        profissão: "Programador"

    })
})

app.get('/contato/animes', (req, res) => res.send(['One Piece', 'Naruto', 'Demon Slayer']))

app.listen(port, () => {
    console.log(`Servidor rodando at port:${port}`)
})