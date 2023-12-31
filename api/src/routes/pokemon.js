const express = require('express');
const router = express.Router();
const getAllPokemon = require('./controllers/getAllPokemon')

router.get('/', async (req, res) => {
    try {
        const result = await getAllPokemon();
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
} )

module.exports = router;