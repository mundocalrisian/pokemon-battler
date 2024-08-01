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

}

// catch

// Takes a Pokemon as an argument.
// It should use one of its empty Pokeball's throw method to catch the Pokemon.
// Should do something if you don't have any empty Pokeballs, what and how is up to you.


// getPokemon

// Takes the name of a Pokemon.
// Will search for the the Pokemon with that name in the belt.
// Use the Pokeball's throw to return that specific Pokemon.

module.exports = { Trainer }