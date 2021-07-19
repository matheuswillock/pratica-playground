let carro = {
    nome: "fox",
    ano: 2011
}

// FOR IN
for(let prop in carro) {
    console.log(carro[prop])
}

let pessoa = {
    nome: "Shanks",
    idade: 42,
    posição: "Yonkou"
}

for (let caracteristica in pessoa) {
    console.log(pessoa[caracteristica])
}

// FOR OF
let series = ['Friends', 'Game Of Thrones', 'Breaking Bad'];

for(let serie of series){
   console.log(serie)
}

let frase = "Essa semana vou no colearning";

for (palavra of frase) {
    console.log(palavra)
}