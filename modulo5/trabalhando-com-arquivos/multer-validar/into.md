# validação de Multer

Vamos pensar por um momento num processo de cadastro de usuários.

Certamente, nos demos conta de que cada pessoa que se registra deve completar certas informações 
como seu nome, e-mail e outros. E possivelmente dentre estas informações, também havíamos 
decidido dar a possibilidade de que a pessoa possa enviar uma imagem de perfil.

Agora, o que aconteceria se nosso sistema estiver esperando receber da parte de cada usuário uma 
imagem, mas alguém acaba enviando um arquivo Excel?

Com certeza nosso sistema teria problemas, não acha?

É por isso que o processo de validação é algo de extrema importância, já que permitirá escapar 
desse tipo de erro e fazer com que a informação que será guardada em nosso servidor seja a que 
realmente queremos e estamos esperando.

Vamos ver como o Multer nos permite validar os arquivos que desejamos guardar do lado do 
servidor.