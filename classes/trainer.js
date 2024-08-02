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

        for (const pokeball of this.belt){
            if (pokeball.storedPokemon.name === pokemon.name){
                pokeball.throw
                break;
            }
        }

    }

}


// getPokemon

// Takes the name of a Pokemon.
// Will search for the the Pokemon with that name in the belt.
// Use the Pokeball's throw to return that specific Pokemon.

module.exports = { Trainer }