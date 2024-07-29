const {Pokemon} = require('./pokemon')

class FireType extends Pokemon {
    constructor(
        name,
        hitPoints,
        attackDamage,
        move,
        type = "fire"
    ){
        super(name, hitPoints, attackDamage, move)
        this.type = type
    }
    isEffectiveAgainst(pokemon){
        return pokemon.type === "grass" ? true : false
    }
    isWeakTo(pokemon){
        return pokemon.type === "water" ? true : false
    }
}

module.exports = {FireType}