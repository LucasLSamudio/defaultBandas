const bandasInfo = require('../db/index')

// res.render('Nombre de la view',{datos necesarios para mostrar en la vista: 'lo que yo quiera(ordenados)'});

const bandasIdController = {
    index: (req, res) => {
        const idArr = bandasInfo.lista.filter(banda => (banda.id));
        res.render('id', {
            title: 'Buscar por ID',
            banda: idArr
        });        
    },

    /* ---------------------------------------------------  */
    porId: (req, res) => {
        const newArr = bandasInfo.lista.map(banda => banda.id);
        if(!newArr.includes(Number(req.params.id))){
            res.status(404).send('No hay bandas con este ID.');
        }
        const banda = bandasInfo.lista.find(banda => banda.id == req.params.id)
        res.render('id', {banda});
        
    },
}

module.exports = bandasIdController; 
