
class Pokeball {

    constructor () {
        this.storedPokemon = {}
    }

    set throw(pokemon){
        if (!this.storedPokemon.name) {
            this.storedPokemon = pokemon
            console.log(`You caught ${this.storedPokemon.name}!`)
        } else {
            console.log('This pokeball is full!');
        }
    }

    get throw(){
        if (this.storedPokemon.name) {
            console.log (`GO ${this.storedPokemon.name}!`)
        } else {
            console.log('This pokeball is empty! Why not try and catch another?')
        }
    }

    // isEmpty

    // Should return a boolean representing whether or not a Pokemon is stored inside it.


    // contains

    // Should return the name of the Pokemon that is stored or
    // If the pokeball is empty is should return "empty ...".
}

module.exports = {Pokeball}