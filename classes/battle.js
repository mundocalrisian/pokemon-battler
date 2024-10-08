class Battle {

    constructor (trainer1, trainer2, pokemon1, pokemon2) {
        this.trainer1 = trainer1
        this.trainer2 = trainer2
        this.pokemon1 = pokemon1
        this.pokemon2 = pokemon2
        this.currentPlayer = ""
        this.currentPokemon = ""
        this.winner = ""
        this.loser = ""
    }

    coinToss(){
        if (Math.random() <=0.5){
            console.log(`\n${this.trainer1.name} won the coin toss and will go first!\n`);
            this.currentPlayer = this.trainer1
            this.currentPokemon = this.pokemon1
        } else {
            console.log(`\n${this.trainer2.name} won the coin toss and will go first!\n`);
            this.currentPlayer = this.trainer2
            this.currentPokemon = this.pokemon2
        }
    }

    switchTurn(){

        if (this.currentPlayer.name === this.trainer1.name){
            this.currentPlayer = this.trainer2
            this.currentPokemon = this.pokemon2
            console.log(`${this.currentPlayer.name}'s turn now...`);
        } else {
            this.currentPlayer = this.trainer1
            this.currentPokemon = this.pokemon1
            console.log(`${this.currentPlayer.name}'s turn now...`);
        }
    }
    
    fight(pokemonToPlay){

        this.attacker = pokemonToPlay
        this.defender = ""

        if (pokemonToPlay === this.pokemon1){
            this.defender = this.pokemon2            
        } else {
            this.defender = this.pokemon1
        }

        let attackerDamage = this.attacker.useMove()

        if (this.defender.isEffectiveAgainst(this.attacker)) {
            console.log(`${this.attacker.name}'s ${this.attacker.move} was not very effective against ${this.defender.name}`);
            attackerDamage = attackerDamage * 0.75
        }

        if (this.defender.isWeakTo(this.attacker)){
            console.log(`${this.attacker.name}'s ${this.attacker.move} was super effective against ${this.defender.name}!`);
            attackerDamage = attackerDamage * 1.25
        }

        console.log(`${this.defender.name} lost ${attackerDamage}HP`)
        this.defender.takeDamage(attackerDamage)

        if (this.defender.hasFainted()){
            console.log(`\n\x1B[91;1m${this.defender.name} fainted. \x1B[92;1m${this.currentPlayer.name}'s ${this.attacker.name} is the winner!\x1B[m\n`);
            this.winner = this.attacker.name
            this.loser = this.defender.name
        } else {
            this.switchTurn()
            this.fight(this.currentPokemon)
        }

    }
    
}

module.exports = { Battle }