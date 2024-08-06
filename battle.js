class Battle {

    constructor (trainer1, trainer2, pokemon1, pokemon2) {
        this.trainer1 = trainer1
        this.trainer2 = trainer2
        this.pokemon1 = pokemon1
        this.pokemon2 = pokemon2
        this.currentPlayer = ""
        this.currentPokemon = ""
    }

    coinToss(){
        if (Math.random() <=0.5){
            console.log(`${this.trainer1.name} won the coin toss and will go first!`);
            this.currentPlayer = this.trainer1
            this.currentPokemon = this.pokemon1
        } else {
            console.log(`${this.trainer2.name} won the coin toss and will go first!`);
            this.currentPlayer = this.trainer2
            this.currentPokemon = this.pokemon2
        }
    }

    switchTurn(){
        // console.log(this.currentPlayer.name, "-----player");
        if (this.currentPlayer.name === this.trainer1.name){
            this.currentPlayer = this.trainer2
            this.currentPokemon = this.pokemon2
            console.log(`${this.currentPlayer.name}'s turn now!`);
        } else {
            this.currentPlayer = this.trainer1
            this.currentPokemon = this.pokemon1
            console.log(`${this.currentPlayer.name}'s turn now!`);
        }
    }
    
    fight(pokemonToPlay){

        this.attacker = pokemonToPlay
        this.defender = ""
        // assign the defender
        if (pokemonToPlay === this.pokemon1){
            this.defender = this.pokemon2            
        } else {
            this.defender = this.pokemon1
        }

        // attacker use Pokemon useMove() to return attack damage number
        // use pokemon takeDamage() on defender with damage number
        // use pokemon isEffectiveAgainst() to see if defender is string against the attacker. if so multiply damage number by 0.75
        // use pokemon isWeakTo() to see if defender is weak against attacker. if so then multiply damage number by 1.25
        // log .....'s move was effective/not effective against ....
        // if defender's faints then attacker wins

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