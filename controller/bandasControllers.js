const bandasInfo = require('../db/index')

const bandasController = {
    index: function(req, res, next) {
        return res.render('bandas', { info: bandasInfo.lista });
    },
    // index: function(req, res, next){
    //     const allBandas = req.params.allBandas;
    //     const banda = bandasInfo.lista;
    //     return res.render('bandas', {bandas: bandasInfo})
    // },

    /* ---------------------------------------------------  */


    porId: function(req, res, next) {
        const id = parseInt(req.params.id, 10);
        const banda = bandasInfo.lista.find(b => b.id === id);
        if (banda) {
            return res.render('id', { banda });
        } else {
            return res.status(404).send('Banda no encontrada');
        }
    },
    // porId: function(req, res, next){
    //     return res.render('id', {id: bandasInfo.lista[i].id})
    // },
    
    // porGenero: function(req, res, next){
    //     return res.render ('genero', {genre: bandasInfo.lista[i].genero})
    // }

    /* ----------------------------------------------------- */
    
    porGenero: function(req, res, next) {
        const genero = req.params.genero.toLowerCase();
        const bandasPorGenero = bandasInfo.lista.filter(b => b.genero.toLowerCase() === genero);
        if (bandasPorGenero.length > 0) {
            return res.render('genero', { genero, bandasInfo: bandasPorGenero });
        } else {
            return res.status(404).send('No hay bandas de este género');
        }
    }
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


module.exports = bandasController; 