
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

module.exports = {Pokemon}