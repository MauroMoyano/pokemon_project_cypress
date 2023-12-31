const { Pokemon } = require('../../db');
const axios = require('axios');

const getAllPokemon = async () => {

    let { data } = await axios('https://pokeapi.co/api/v2/pokemon')
    console.log(data);
    return data
}
module.exports = getAllPokemon;