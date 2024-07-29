const {Pokemon} = require('./pokemon')

class WaterType extends Pokemon {
    constructor(
        name,
        hitPoints,
        attackDamage,
        move,
        type = "water"
    ){
        super(name, hitPoints, attackDamage, move)
        this.type = type
    }
    isEffectiveAgainst(pokemon){
        return pokemon.type === "fire" ? true : false
    }
    isWeakTo(pokemon){
        return pokemon.type === "grass" ? true : false
    }
}

module.exports = {WaterType}