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

class Squirtle extends WaterType {
    constructor(hitPoints = 44, attackDamage = 16, move = "bubble"){
        super(hitPoints, attackDamage)
        this.name  = "Squirtle"
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
}
class Psyduck extends WaterType {
    constructor(hitPoints = 50, attackDamage = 12, move = "water gun"){
        super(hitPoints, attackDamage)
        this.name  = "Psyduck"
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
}

module.exports = { WaterType, Squirtle, Psyduck }