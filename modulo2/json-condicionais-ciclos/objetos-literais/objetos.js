const carro = {
    nome: "Fox",
    ano: 2012,
    ligar: function() {
        console.log("O carro " + this.nome + " está ligado")
    }
}

console.log(carro)
console.log(carro.nome + " e o seu ano é: " + carro.ano)
carro.ligar()

// Instanciar uma função construtora
function Carro(nomeCarro, anoCarro){
    this.nome = nomeCarro;
    this.ano = anoCarro
}

let civic = new Carro('Civic', 2020)
let gol = new Carro('Gol', 2010)
console.log(civic)
console.log(gol)






