// Array
let frutas = ['Maçã', 'Banana', 'Uva'];
let frutasDois = ['Laranja', 'Abacate', 'Goiaba'];

let listaCompleta = [...frutas, ...frutasDois]

console.log(listaCompleta);
// [ 'Maçã', 'Banana', 'Uva', 'Laranja', 'Abacate', 'Goiaba' ]

// Objetos literais
let pessoa = {
    nome: 'Matheus',
    idade: 23
}

let infoPessoal = {
    tel: '1234567899',
    rg: 12345678,
    ...pessoa
}
console.log(infoPessoal);

let pessoaCompleta = {
    endereco: "Ruas dos bobos",
    ...infoPessoal
}

console.log(pessoaCompleta);

// funções

function letras(...params) {
    console.log(params)
}

letras('a','b', 'c', 'e', 'z', 'w')

function enderecoWeb(...params) {
    for(param of params) {
        console.log('https://' + param)
    }
}

enderecoWeb('www.google.com', 'www.youtube.com', 'www.amazon.com', 'www.mercadolivre.com')