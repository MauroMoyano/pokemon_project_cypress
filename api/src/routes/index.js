const { Router } = require('express');
const Pokemon = require('../routes/pokemon');
const type = require('../routes/type');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
    router.use('/pokemon', Pokemon);
    router.use('/type', type);

module.exports = router;