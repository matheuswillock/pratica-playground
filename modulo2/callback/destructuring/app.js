let pessoa = {
    nome: "Matheus",
    altura: 1.80,
    idade: 23,   
    animes: [
        'One Piece', 
        'Naruto',
        'Fairy tail',
        'My Hero Academia'
    ] 
}

const {nome, altura, animes} = pessoa;

console.log(nome)
console.log(altura)
console.log(animes[3])

let listasCompras = ['pão', 'leite', 'açúcar']

const [item1, item2, item3] = listasCompras;

console.log(item1)
console.log(item2)
console.log(item3)

let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grécia']
const [ , bariloche, , china] = destinosIncriveis;

console.log(bariloche)
console.log(china)


