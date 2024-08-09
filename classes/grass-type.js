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
    constructor(hitPoints = 45, attackDamage = 16, move = "vine whip"){
        super(hitPoints, attackDamage)
        this.name  = "Bulbasaur"
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
}

class Oddish extends GrassType {
    constructor(hitPoints = 45, attackDamage = 16, move = "razor leaf"){
        super(hitPoints, attackDamage)
        this.name  = "Oddish"
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
}

class Hoppip extends GrassType {
    constructor(hitPoints = 35, attackDamage = 16, move = "mega drain"){
        super(hitPoints, attackDamage)
        this.name  = "Hoppip"
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
}

class Turtwig extends GrassType {
    constructor(hitPoints = 55, attackDamage = 15, move = "grassy glide"){
        super(hitPoints, attackDamage)
        this.name  = "Turtwig"
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
}

// Additional - 
// Exeggcute - 60, 13, bullet seed
// Tangela - 65, 14, mega drain
// Treecko - 40, 15, leafage
// Lotad - 40, 16, trailblaze

module.exports = { GrassType, Bulbasaur, Oddish, Hoppip, Turtwig }