const express =  require('express');

const app = express();

const port = 2025;

// Criando rota
app.get('/',  (req, res) => res.send("I'm inevitable! I'm Iron-man! "))

// Criando side-server
app.listen(port, () => {
    console.log(`Novo estalar de dedos: http://localhost:${port}`)
})