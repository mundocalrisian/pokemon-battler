
class Pokemon {
    constructor(
        name,
        hitPoints,
        attackDamage,
        move = "tackle"
    ) {
        this.name = name
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }

    takeDamage(damage){
        this.hitPoints -= damage
    }

    useMove(){
        console.log(`${this.name} used ${this.move}!`)
        return this.attackDamage
    }

    hasFainted(){
        return this.hitPoints === 0 ? true : false
    }
}

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
        return pokemon.type === "" ? true : false
    }
}


module.exports = {Pokemon, FireType, GrassType, WaterType, NormalType}