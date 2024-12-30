const bandas = require('../db/index');
const bandasInfo = require('../db/index')

// res.render('Nombre de la view',{datos necesarios para mostrar en la vista: 'lo que yo quiera(ordenados)'});

const bandasIdController = {
    index: (req, res) => {
        res.send(bandasInfo.lista)
    },

    // index: function(req, res, next) {
    //     return res.render('bandas', { info: bandasInfo.lista });
    // },
    // index: function(req, res, next){
    //     const allBandas = req.params.allBandas;
    //     const banda = bandasInfo.lista;
    //     return res.render('bandas', {bandas: bandasInfo})
    // },

    /* ---------------------------------------------------  */
    porId: (req, res) => {
        const newArr = bandasInfo.lista.map(banda => banda.id);
        if(!newArr.includes(Number(req.params.id))){
            res.status(404).send('No hay bandas con este ID.');
        }
        res.send(bandasInfo.lista.find(banda => banda.id == req.params.id));
        
    },

    // porId: function(req, res, next) {
    //     const id = parseInt(req.params.id, 10);
    //     const banda = bandasInfo.lista.find(b => b.id === id);
    //     if (banda) {
    //         return res.render('id', { banda });
    //     } else {
    //         return res.status(404).send('Banda no encontrada');
    //     }
    // },
    // porId: function(req, res, next){
    //     return res.render('id', {id: bandasInfo.lista[i].id})
    // },
    
    // porGenero: function(req, res, next){
    //     return res.render ('genero', {genre: bandasInfo.lista[i].genero})
    // }

    /* ----------------------------------------------------- */
    // porGenero: function(req, res, next) {
    //     const genero = req.params.genero.toLowerCase();
    //     const bandasPorGenero = bandasInfo.lista.filter(b => b.genero.toLowerCase() === genero);
    //     if (bandasPorGenero.length > 0) {
    //         return res.render('genero', { genero, bandasInfo: bandasPorGenero });
    //     } else {
    //         return res.status(404).send('No hay bandas de este género');
    //     }
    // }
}

// const bandasController = {
//     listadoBandas:(req,res,next) => {
//         res.render("index", {info: bandasInfo.lista})
//     },
//     porId:(req, res, next) => {
//         res.render('id', {id: bandasInfo.lista[i].id})
//     },
//     porGenero:(req, res, next) => {
//         res.render('genero', {genre: bandasInfo.lista[i].genero})
//     }
// }


module.exports = bandasIdController; 
