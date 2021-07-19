const somar = () => {
    console.log("estou em uma arrow function")
}
somar()

const somar2 = () => console.log("estou em uma arrow function também")
somar2()

const somar3 = numero => console.log("estou em uma arrow function também e recebi o número: " + numero)
somar3(5)

const somar4 = (a, b) => console.log(a + b)
somar4(2,2)

let cincoNumeros = () => [1,2,3,4,5];
cincoNumeros()

let multiplicarPorDois = () => 123 * 2 ;
multiplicarPorDois()

let mostrarNome = () =>  "Meu nome é Ryan Dahl";
mostrarNome()