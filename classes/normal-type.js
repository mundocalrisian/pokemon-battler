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

class Rattata extends NormalType {
    constructor(hitPoints = 30, attackDamage = 15, move = "quick attack"){
        super(hitPoints, attackDamage)
        this.name  = "Rattata"
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
}

class Zigzagoon extends NormalType {
    constructor(hitPoints = 38, attackDamage = 18, move = "covet"){
        super(hitPoints, attackDamage)
        this.name  = "Zigzagoon"
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
}

// Additional - 
// Slakoth - 60, 14, scratch
// Bidoof - 59, 13, rollout


module.exports = { NormalType, Eevee, Pidgey, Rattata, Zigzagoon }