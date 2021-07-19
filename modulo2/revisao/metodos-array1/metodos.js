let pessoas = ['Matheus']
console.log(pessoas)

// push
    pessoas.push(23);
    console.log(pessoas)
// pop
    let excluido = pessoas.pop()
    console.log(pessoas)    
    console.log(excluido)
// unshift
    let adicionado = pessoas.unshift('23');
    console.log(pessoas)
//shift
    let retiradoInicio = pessoas.shift()
    console.log(pessoas)
    console.log(retiradoInicio)

let pessoa = ["matheus", 1.80, "matheus"]

console.log(pessoa)

// indexOf
    console.log(pessoa.indexOf('Matheus'))
    console.log(pessoa.indexOf('matheus'))
// lastIndexOf
    console.log(pessoa.lastIndexOf('matheus'))
//join
    console.log(pessoa.join(' - '))
