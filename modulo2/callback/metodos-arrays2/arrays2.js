let numerosPares = [2,4,6,8,10];

// map
let numerosParesDobro = numerosPares.map(function(valor) {
    return valor*2
})

// console.log(numerosParesDobro)
    //[4,8,12,16,20]

// filter
    // Se o valor for maior que 6 não irá para a nossa nova array
let numerosFiltrados = numerosPares.filter(function(valor) {
    return valor < 6
})
//console.log(numerosFiltrados)
    //[2,4]

//reduce
    // Para somar todos os numeros da array
let somaPares = numerosPares.reduce(function(acumulativo, valor){
    return acumulativo + valor
    
})
// console.log(somaPares)
    //30

//forEach
    //Realizar uma interação para cada elemento dentro da Array.

let cadaElemento = numerosPares.forEach(function(valor, i, array) {
    console.log("O índice:" + i + " tem o valor:" + valor + ". " + array[i])
})  

let ninjas = ['Sasuke', 'Naruto', 'Kakashi', 'Sakura']

let cadaNinja = ninjas.forEach(function(nome, i, array) {
    console.log("O ninja:" + nome + " está no índice:" + i + ". " + array)
}) 

console.log(cadaElemento)
console.log(cadaNinja)
