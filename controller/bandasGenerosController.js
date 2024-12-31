const bandasInfo = require('../db/index')

// res.render('Nombre de la view',{datos necesarios para mostrar en la vista: 'lo que yo quiera(ordenados)'});

const bandasGenerosController = {
    index: (req, res) => {
        const generos = bandasInfo.lista.filter(banda => (banda.genero));        
        res.render('genero',{g: generos})
    },

    /* ----------------------------------------------------- */
    
    porGenero: (req, res) => {
        const generos = bandasInfo.lista.map(banda => (banda.genero).toLowerCase());
        if(!generos.includes((req.params.genero).toLowerCase())){
            return res.status(404).send('No hay bandas de este género');
        }
        const genre = bandasInfo.lista.filter(banda => (banda.genero).toLowerCase() == (req.params.genero).toLowerCase());
        res.render('genero', {g: genre});
        
        // function(req, res, next) {
        //     res.render('index', { title: 'Music' });
        //   });
        // res.send(bandasInfo.lista.filter(banda => (banda.genero).toLowerCase() == (req.params.genero).toLowerCase()));
    }, 

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


module.exports = bandasGenerosController; 
