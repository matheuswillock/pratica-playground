const HomeController = {

    index: (req, res) => {

        let info = {

            tripulacao: 'Chapéus de Palha',

            membros: [
                'Monkey D. Luffy',
                'Roronoa Zoro',
                'Nami',
                'Usopp',
                'Vinsmoke Sanji',
                'Tony Tony Chopper',
                'Nico Robin',
                'Franky',
                'Brook',
                'Jinbe',
                'Yamato',
                'Nefertari Vivi' ,              
            ],

            navios: [
                'Going Merry (Falecido)',
                'Thousand Sunny'
            ],

            aliados: [
                'Piratas Heart',
                'Clã Kouzuki',
                'Tribo Mink',
                'Piratas Fire Tank'
            ],

            frota: [
                'Piratas Belos',
                'Barto club',
                'Armada Happo',
                'Piratas Ideo',
                'Piratas tontatta',
                'Novos Piratas Gueirreiros Gigantes',
                'Grande Frota do Yonta Maria'
            ]
        
        }        

        return res.render('index', info);
    }
};

module.exports = HomeController;