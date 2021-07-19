let data = new Date();

console.log(data);

// dia da semana
let diaSemana = data.getDay();

// Tratamento para visualizar o nome do dia da semana
switch(diaSemana) {
    case 0: 
        diaSemana = 'Domingo';
    break;
    case 1: 
        diaSemana = 'Segunda';
    break;
    case 2: 
        diaSemana = 'Terça';
    break;
    case 3: 
        diaSemana = 'quarta';
    break;
    case 4: 
        diaSemana = 'Quinta';
    break;
    case 5: 
        diaSemana = 'Sexta';
    break   
    case 6:
        diaSemana = 'Sábado'
    break
}

// Tratamento a mais 
switch(diaSemana) {
    case 'Sexta':
        diaSemana = 'sexta, aaaahhh mulek!'
    break
    case 'Sábado':
        diaSemana = 'sábado, vamos dar rolê.'
    break
    case 'Domingo':
        diaSemana = 'domingo, bora pro culto.'
    break;

    default:
        diaSemana = 'dia de trabalho de segunda à quinta.'
    break
}

// Dia do mês
let diaMes = data.getDate();
 
// Mês
let mes = data.getMonth();

switch(mes) {
    case 0: 
        mes = 'Janeiro';
    break
    case 1: 
        mes = 'Fevereiro';
    break
    case 2: 
        mes = 'Março';
    break
    case 3: 
        mes = 'Abril';
    break
    case 4: 
        mes = 'Maio';
    break
    case 5: 
        mes = 'Junho';
    break
    case 6: 
        mes = 'Julho';
    break
    case 7: 
        mes = 'Agosto';
    break
    case 8: 
        mes = 'Setembro';
    break
    case 9: 
        mes = 'Outubro';
    break
    case 10: 
        mes = 'Novembro';
    break
    case 11: 
        mes = 'Dezembro';
    break
}

// Ano
let ano = data.getFullYear();

console.log('Hoje é ' + diaSemana + ' ' + diaMes + ' de ' + mes + ' de ' + ano);

//Data específica
let dataEspecifica = new Date('07-11-1997')

console.log(dataEspecifica)

let dataEspecifica2 = new Date(1997,10,07)
console.log(dataEspecifica2)