
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

    get isEmpty(){
        return !this.storedPokemon.name ? true : false
    }

    get contains(){
        return this.storedPokemon.name ? this.storedPokemon.name : 'empty...'
    }

    // maybe have a release method?
    // when called returns this.storeedPokemon back to {}

}

module.exports = { Pokeball }