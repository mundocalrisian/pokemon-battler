const { Eevee, Pidgey, Rattata, Zigzagoon } = require('../classes/normal-type');
const { Bulbasaur, Oddish, Hoppip, Turtwig } = require('../classes/grass-type');
const { Squirtle, Psyduck, Poliwag, Krabby } = require('../classes/water-type');
const { Charmander, Growlithe, Vulpix, Torchic } = require('../classes/fire-type');

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
        new Pidgey, 
        new Rattata, 
        new Zigzagoon,
        new Hoppip, 
        new Turtwig, 
        new Poliwag, 
        new Krabby, 
        new Vulpix, 
        new Torchic
    ]

    // shuffle(pokemonChoices)
    altShuffle(pokemonChoices)
    return pokemonChoices
}

function removeAvailablePokemon(availablePokemon, pokemon1ToRemove, pokemon2ToRemove){

    let index = availablePokemon.indexOf(pokemon1ToRemove)

    if (index > -1) {
        availablePokemon.splice(index, 1)
    } else {
        index = availablePokemon.indexOf(pokemon2ToRemove)
        availablePokemon.splice(index, 1)
    }

    return availablePokemon

}

module.exports = {getRandomPokemonArray, removeAvailablePokemon}