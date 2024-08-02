const { Pokeball } = require('./pokeball')

class Trainer {

    constructor (name) {
        this.name = name
        this.belt = [...Array(6)].map(() => new Pokeball())
        this.pokemonCount = 0
    }

    catch(pokemon) {
        
        if (this.pokemonCount >= 6) {
            console.log(`Sorry, you don't have any empty pokeballs!`);
        } else {

            for (const pokeball of this.belt) {
                if (!pokeball.storedPokemon.name){
                    pokeball.throw = pokemon
                    this.pokemonCount ++
                    break;
                }
            }
        }

    }

    getPokemon(pokemon) {

        let isPokemonStored = false
        for (const pokeball of this.belt){
            if (pokeball.storedPokemon.name === pokemon.name){
                pokeball.throw
                isPokemonStored = true
                break;
            }
        }
        if (!isPokemonStored) console.log("Sorry, you don't have this pokemon in your belt");
    }

}


// getPokemon

// Takes the name of a Pokemon.
// Will search for the the Pokemon with that name in the belt.
// Use the Pokeball's throw to return that specific Pokemon.

module.exports = { Trainer }