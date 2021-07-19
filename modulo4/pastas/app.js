// Respondendo com um arquivo no Express

// Para gerar as rotas de envio de arquivo exportamos o método nativo path
const path = require('path')

// Gerando rotas para responder com um arquivo.
app.get('/', (req, res) => {

    // Utilizamos o método sendFile para enviar um arquivo existente em nosso servidor, que aceita como parâmetro um Caminho absoluto.
    res.sendFile(path.join(__dirname, '/views/index.html'))
                // Usamos o método join(), que nos fornece.
                        // o __dirname é uma const Node.Js que se refere ao diretório arquivo que está sendo executado.
                                    // Caminho relativo para o arquivo queremos enviar. Neste caso dentro da pasta visualizações, o arquivo index.html.
});