const { Pokeball } = require('./pokeball')

const maxPokeballs = 3

class Trainer {


    constructor (name) {
        this.name = name
        this.belt = [...Array(maxPokeballs)].map(() => new Pokeball())
        this.pokemonCount = 0
    }

    catch(pokemon) {
        
        if (this.pokemonCount >= maxPokeballs) {
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
            if (pokeball.storedPokemon.name === pokemon){
                pokeball.throw
                isPokemonStored = true
                return pokeball.storedPokemon
                break;
            }
        }
        if (!isPokemonStored) console.log("Sorry, you don't have this pokemon in your belt");
    }

    isBeltFull () {

        const currentStoredPokemon = []
        const beltLength = this.belt.length
        this.belt.forEach((pokeball) => {
            if (pokeball.storedPokemon.name){
                currentStoredPokemon.push(pokeball.storedPokemon.name)
            }
        })

        return beltLength === currentStoredPokemon.length
    }

}

module.exports = { Trainer }