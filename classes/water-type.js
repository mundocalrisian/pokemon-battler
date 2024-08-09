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
    constructor(hitPoints = 44, attackDamage = 16, move = "aqua jet"){
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

class Poliwag extends WaterType {
    constructor(hitPoints = 40, attackDamage = 18, move = "bubble beam"){
        super(hitPoints, attackDamage)
        this.name  = "Poliwag"
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
}

class Krabby extends WaterType {
    constructor(hitPoints = 30, attackDamage = 19, move = "water pulse"){
        super(hitPoints, attackDamage)
        this.name  = "Krabby"
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
}

// Additional - 
// Shellder - 30, 17, razor shell
// Piplup - 53, 16, chilling water


module.exports = { WaterType, Squirtle, Psyduck, Poliwag, Krabby }