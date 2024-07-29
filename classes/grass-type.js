const {Pokemon} = require('./pokemon')

class GrassType extends Pokemon {
    constructor(
        name,
        hitPoints,
        attackDamage,
        move,
        type = "grass"
    ){
        super(name, hitPoints, attackDamage, move)
        this.type = type
    }
    isEffectiveAgainst(pokemon){
        return pokemon.type === "water" ? true : false
    }
    isWeakTo(pokemon){
        return pokemon.type === "fire" ? true : false
    }
}

module.exports = {GrassType}