/*

//console.log("I'm here in file.js")


// módulo nativo do node (file System)

// const fs = require('fs');

// let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf-8');

// console.log(dados)

// módulo baixado pelo npm (moment)

// let moment = require('moment');

// let data = moment().format('llll')

// console.log(data)

// Agrupando o código em functions



function leitura() {

    const fs = require('fs');

    let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf-8')

    console.log(dados) 


}

function hora() {
    let moment = require('moment');

    let data = moment().format('llll')

    leitura()

    console.log(data)
}


hora()

*/

// Exportando um módulo criado

const time7 = require('../modulos/ninjasKonoha');

console.log(time7[0])