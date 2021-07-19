let pessoa = {
    nome: "Matheus",
    idade: 23,
    altura: 1.75
}

let json = JSON.stringify(pessoa);
console.log(json)

console.log(json.nome)

let objetoDeNovo = JSON.parse(json);
console.log(objetoDeNovo)

console.log(objetoDeNovo.nome)