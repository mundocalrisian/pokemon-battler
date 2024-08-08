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

class Eevee extends NormalType {
    constructor(hitPoints = 55, attackDamage = 18, move = "tackle"){
        super(hitPoints, attackDamage)
        this.name  = "Eevee"
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
}

class Pidgey extends NormalType {
    constructor(hitPoints = 40, attackDamage = 12, move = "tackle"){
        super(hitPoints, attackDamage)
        this.name  = "Pidgey"
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
}

module.exports = { NormalType, Eevee, Pidgey }