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

class Bulbasaur extends GrassType {
    constructor(hitPoints, attackDamage, move = "Vine Whip"){
        super(hitPoints, attackDamage)
        this.name  = "Bulbasaur"
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
}

module.exports = {GrassType, Bulbasaur}