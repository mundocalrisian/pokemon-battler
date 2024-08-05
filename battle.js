
class Battle {

    constructor (trainer1, trainer2, pokemon1, pokemon2) {
        this.trainer1 = trainer1
        this.trainer2 = trainer2
        this.pokemon1 = pokemon1
        this.pokemon2 = pokemon2
    }

    fight(pokemon){

    }

}

// Finally, you will need a way to battle the Pokemon. The battle should take two trainers and the names of the Pokemon they wish to battle.

// fight

// This should take the Pokemon whose turn it is,
// Attack the defending Pokemon (deducting attacker's attack damage from the defender's hit points)
// End their turn
// Should take each Pokemon's strengths and weaknesses into account
// If a defender is strong against the attacking type, the attacking type's damage should be multiplied by 0.75.
// If a defender is weak against the attacking type, the attacking type's damage should be multiplied by 1.25.
// Each attack should be followed by an attack message
// The message will vary depending on the defender's weakness/strength.
// If the defending Pokemon faints (depletes all hit points), the attacker wins.

module.exports = { Battle }