# Middlewares: teoria

## Como realmente o Express funciona por dentro?

A seguir, vamos ver o que acontece por debaixo do "capô", para que finalmente possamos 
visualizar que toda essa "magia" que se cria com as rotas, models e controllers, não são tão 
mágicas assim, mas sim que têm algumas boas doses de lógica e outras de processamento 
imperativo.

Um middleware, em palavras simples, não é nada mais que um intermediário de processamento 
lógico entre o request e o response.