let akatsuki = [
    {   
        nome: "Itachi",
        cla: "Uchiha",
        aldeia: "Folha",
        status: "Morto"    
    },

    {
        nome: "Sasuke",
        cla: "Uchiha",
        aldeia: "Folha",
        status: "Renegado"  
    },

    {
        nome: "Madara",
        cla: "Uchiha",
        aldeia: "Folha",
        status: "Morto"  
    },

    {
        nome: "Obito",
        cla: "Uchiha",
        aldeia: "Folha",
        status: "Morto"  
    },

    {
        nome: "Deidara",
        cla: " ",
        aldeia: "Pedra",
        status: "Morto"  
    },

    {
        nome: "Sasori",
        cla: " ",
        aldeia: "Areira",
        status: "Morto"
    }
]

console.log(akatsuki)

let akatsukiJson = JSON.stringify(akatsuki)

console.log(akatsukiJson)

let akatsukiObjeto = JSON.parse(akatsukiJson)
console.log(akatsukiObjeto)
