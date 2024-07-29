const {Pokemon} = require('./pokemon')

class NormalType extends Pokemon {
    constructor(
        name,
        hitPoints,
        attackDamage,
        move,
        type = "normal"
    ){
        super(name, hitPoints, attackDamage, move)
        this.type = type
    }
    isEffectiveAgainst(pokemon){
        return false
    }
    isWeakTo(pokemon){
        return false
    }
}

module.exports = {NormalType}