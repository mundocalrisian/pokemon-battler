const { Eevee, Pidgey } = require('../classes/normal-type');
const { Bulbasaur, Oddish } = require('../classes/grass-type');
const { Squirtle, Psyduck } = require('../classes/water-type');
const { Charmander, Growlithe } = require('../classes/fire-type');

function getRandomPokemonArray() {

    function shuffle(array) {
        let currentIndex = array.length;
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
    }

    function altShuffle (array) { 
        for (let i = array.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
    }; 

    const pokemonChoices = [
        new Eevee, 
        new Charmander, 
        new Squirtle, 
        new Bulbasaur, 
        new Growlithe, 
        new Psyduck,
        new Oddish, 
        new Pidgey
    ]

    // shuffle(pokemonChoices)
    altShuffle(pokemonChoices)
    return pokemonChoices
}

module.exports = {getRandomPokemonArray}