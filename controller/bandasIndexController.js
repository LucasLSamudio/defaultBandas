const bandasInfo = require('../db/index')

// res.render('Nombre de la view',{datos necesarios para mostrar en la vista: 'lo que yo quiera(ordenados)'});

const bandasIndexController = {
    index: (req, res) => {
        res.render('bandas',{
            bandasInfo: bandasInfo.lista,
            title: 'Todas las bandas'
        })
    }
}

module.exports = bandasIndexController; 
