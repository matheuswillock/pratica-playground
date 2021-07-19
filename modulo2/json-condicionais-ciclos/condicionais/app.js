// if ternário
let dia = 'sexta';
let resultado = dia == "domingo" ? "Vou a praia" : "Fico em casa";

//console.log(resultado);

switch(dia) {
    case "segunda":
        console.log("Vou trabalhar");
    break;

    case "terça":
        console.log("Vou comprar café");
    break;

    case "quarta":
        console.log("Vou entregar mais um dia de trabalho")
    break;

    case "quinta":
        console.log("Happy hour mellincidade")
    break;

    case "sexta":
        console.log("Sextou minha gente")
    break;

    case "sábado":
        console.log("dia de sair");
    break;

    case "domingo":
        console.log("Comer churrasco")
    break;

    default:
        console.log("Estou em outra realidade")

}