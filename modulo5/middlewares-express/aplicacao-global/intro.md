# Middlewares: aplicação global

Como mencionamos nos blocos anteriores, um middleware é um bloco de código que vai ser 
executado no "meio" de uma determinada solicitação e, em algumas ocasiões, certamente 
precisaremos que esse código seja executado em toda a aplicação. É aí que os middlewares de 
aplicativos globais assumem um papel especial. Eles SEMPRE estarão presentes e vão SEMPRE
rodar, não importa onde o visitante vá em nosso aplicativo.

Neste ponto, podemos ter implementado a pasta de recursos estáticos, certo? Bem, isso sem dúvida 
é um middleware global. Nesse caso particular, nosso interesse é disponibilizar os arquivos ali 
presentes para que qualquer view possa utilizá-los.

Portanto, vamos entrar neste conceito específico de middleware de aplicativo global.

app.use(function(req, res, next) => {
    next();
});