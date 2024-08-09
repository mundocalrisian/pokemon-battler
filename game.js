const inquirer = require('inquirer');
const { getRandomPokemonArray, removeAvailablePokemon } = require('./utils/utils');
const { Trainer } = require('./classes/trainer');
const { Battle } = require('./battle');

function playGame () {

    let player1 = ""
    let p1PokemonAvailable = []
    let player1WinCount = 0
    let player2 = ""
    let p2PokemonAvailable = []
    let player2WinCount = 0

    const pokemonChoices = getRandomPokemonArray()
    let randomPokemon1 = pokemonChoices[0]
    let randomPokemon2 = pokemonChoices[1]
    let randomPokemon3 = pokemonChoices[2]
    let randomPokemon4 = pokemonChoices[3]
    let randomPokemon5 = pokemonChoices[4]
    let randomPokemon6 = pokemonChoices[5]
    
    let firstBattle = ""
    let secondBattle = ""

    const playerNames = [
        {   type: 'input',
            message: "What's your name?",
            name: 'trainer1',
            default: 'Player 1'
        },
        {   type: 'input',
            message: "What's your name?",
            name: 'trainer2',
            default: 'Player 2'
        },
    ]

    const p1FirstCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon1}, 
                {name: 'Not right now', value: null}
            ],
            message: () => {
                return `\x1B[92;1m${player1.name}\x1B[m - A wild ${randomPokemon1.name} appeared. Would you like to catch it?`
            },
            name: 'player1Pokemon',
            
        },
    ]

    const p2FirstCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon2}, 
                {name: 'Not right now', value: null}
            ],
            message: () => {
                return `\x1B[92;1m${player2.name}\x1B[m - A wild ${randomPokemon2.name} appeared. Would you like to catch it?`
            },
            name: 'player2Pokemon',
            
        },
    ]

    const p1SecondCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon3}, 
                {name: 'Not right now', value: null}
            ],
            message: () => {
                return `\x1B[92;1m${player1.name}\x1B[m - A wild ${randomPokemon3.name} appeared. Would you like to catch it?`
            },
            name: 'player1Pokemon2',
            
        },
    ]
    const p2SecondCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon4}, 
                {name: 'Not right now', value: null}
            ],
            message: () => {
                return `\x1B[92;1m${player2.name}\x1B[m - A wild ${randomPokemon4.name} appeared. Would you like to catch it?`
            },
            name: 'player2Pokemon2',
            
        },
    ]
    const p1ThirdCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon5}, 
            ],
            message: () => {
                return `\x1B[92;1m${player1.name}\x1B[m - You still have an empty pokeball and a wild ${randomPokemon5.name} appeared.`
            },
            name: 'player1Pokemon3',
            
        },
    ]
    const p2ThirdCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon6}, 
            ],
            message: () => {
                return `\x1B[92;1m${player2.name}\x1B[m - You still have an empty pokeball and a wild ${randomPokemon6.name} appeared.`
            },
            name: 'player2Pokemon3',
            
        },
    ]
    const jointThirdCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon5}, 
            ],
            message: () => {
                return `\x1B[92;1m${player1.name}\x1B[m - You still have an empty pokeball and a wild ${randomPokemon5.name} appeared.`
            },
            name: 'player1Pokemon3',
            
        },
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon6}, 
            ],
            message: () => {
                return `\x1B[92;1m${player2.name}\x1B[m - You still have an empty pokeball and a wild ${randomPokemon6.name} appeared.`
            },
            name: 'player2Pokemon3',
            
        },
    ]
    const commenceBattle1 = [
        {
            type: 'list',
            choices: () => {
                return [
                `${p1PokemonAvailable[0]}`, 
                `${p1PokemonAvailable[1]}`
            ]},
            message: () => {
                return `\x1B[92;1m${player1.name}\x1B[m - Are you ready to battle? Which Pokemon do you want to choose?`
            },
            name: 'player1BattleChoice1',
        },
        {
            type: 'list',
            choices: () => {
                return [
                `${p2PokemonAvailable[0]}`, 
                `${p2PokemonAvailable[1]}`
            ]},
            message: () => {
                return `\x1B[92;1m${player2.name}\x1B[m - Are you ready to battle? Which Pokemon do you want to choose?`
            },
            name: 'player2BattleChoice1',
        },

    ]
    const commenceBattle2 = [
        {
            type: 'list',
            choices: () => {
                return [
                `${p1PokemonAvailable[0]}`
            ]},
            message: () => {
                return `\x1B[92;1m${player1.name}\x1B[m - Do you want to battle again?`
            },
            name: 'player1BattleChoice2',
        },
        {
            type: 'list',
            choices: () => {
                return [
                `${p2PokemonAvailable[0]}`
            ]},
            message: () => {
                return `\x1B[92;1m${player2.name}\x1B[m - Do you want to battle again?`
            },
            name: 'player2BattleChoice2',
        },

    ]
    
    inquirer.prompt(playerNames)
        // After player names input
        .then((playerNamesAnswers) => {

            player1 = new Trainer(`${playerNamesAnswers.trainer1}`)
            player2 = new Trainer(`${playerNamesAnswers.trainer2}`)

            return inquirer.prompt(p1FirstCatch)
        })
        // After player 1's first pokemon encounter
        .then((p1FirstCatchPokemon) => {

            if (p1FirstCatchPokemon.player1Pokemon){
                player1.catch(p1FirstCatchPokemon.player1Pokemon)
                p1PokemonAvailable.push(p1FirstCatchPokemon.player1Pokemon.name)
            }

            return inquirer.prompt(p2FirstCatch)
        })
        // After player 2's first pokemon encounter
        .then((p2FirstCatchPokemon) => {

            if (p2FirstCatchPokemon.player2Pokemon){
                player2.catch(p2FirstCatchPokemon.player2Pokemon)
                p2PokemonAvailable.push(p2FirstCatchPokemon.player2Pokemon.name)
            }

            return inquirer.prompt(p1SecondCatch)
        })
        // After player 1's second pokemon encounter
        .then((p1SecondCatchPokemon) => {

            if (p1SecondCatchPokemon.player1Pokemon2){
                player1.catch(p1SecondCatchPokemon.player1Pokemon2)
                p1PokemonAvailable.push(p1SecondCatchPokemon.player1Pokemon2.name)
            }
            
            return inquirer.prompt(p2SecondCatch)
        })
        // After player 2's second pokemon encounter
        .then((p2SecondCatchPokemon) => {

            if (p2SecondCatchPokemon.player2Pokemon2){
                player2.catch(p2SecondCatchPokemon.player2Pokemon2)
                p2PokemonAvailable.push(p2SecondCatchPokemon.player2Pokemon2.name)
            }
            
            if (!player1.isBeltFull() && player2.isBeltFull()){
                return inquirer.prompt(p1ThirdCatch)
            }
            if (!player2.isBeltFull() && player1.isBeltFull()){
                return inquirer.prompt(p2ThirdCatch)
            }
            if (!player1.isBeltFull() && !player2.isBeltFull()){
                return inquirer.prompt(jointThirdCatch)
            }
            if (player1.isBeltFull() && player2.isBeltFull()){
                return inquirer.prompt(commenceBattle1)
            }
        })
        // If there is a player 1 or player 2 third pokemon encounter, deal with this, otherwise skip to the next step
        .then((thirdCatchOutcome) => {

            if (thirdCatchOutcome.player1Pokemon3) {
                player1.catch(thirdCatchOutcome.player1Pokemon3)
                p1PokemonAvailable.push(thirdCatchOutcome.player1Pokemon3.name)
            }
            if (thirdCatchOutcome.player2Pokemon3) {
                player2.catch(thirdCatchOutcome.player2Pokemon3)
                p2PokemonAvailable.push(thirdCatchOutcome.player2Pokemon3.name)
            }
            // This runs if a third catch was done - 
            if (!thirdCatchOutcome.player1BattleChoice1 || !thirdCatchOutcome.player2BattleChoice1) {
                return inquirer.prompt(commenceBattle1)
            }

            // This runs if come from battle commence so needs to skip to next then block
            if (thirdCatchOutcome.player1BattleChoice1 || thirdCatchOutcome.player2BattleChoice1) {
                return thirdCatchOutcome
            }
        })
        .then((battleChoices) => {

            // use battle choices to getPokemon then create new Battle
            const pokemon1 = player1.getPokemon(battleChoices.player1BattleChoice1)
            const pokemon2 = player2.getPokemon(battleChoices.player2BattleChoice1)

            firstBattle = new Battle(player1, player2, pokemon1, pokemon2)
            firstBattle.coinToss()
            firstBattle.fight(firstBattle.currentPokemon)

            if (p1PokemonAvailable.includes(firstBattle.winner)) player1WinCount ++
            if (p2PokemonAvailable.includes(firstBattle.winner)) player2WinCount ++

            console.log(player1WinCount, "-----p1 wins");
            console.log(player2WinCount, "-----p2 wins");

            console.log(p1PokemonAvailable, "-----before");
            console.log(p2PokemonAvailable, "-----before");

            // remove battled pokemon from available pokemon
            // removeAvailablePokemon(p1PokemonAvailable, firstBattle.loser, firstBattle.winner)
            // removeAvailablePokemon(p2PokemonAvailable, firstBattle.loser, firstBattle.winner)

            p1PokemonAvailable = p1PokemonAvailable.filter((pokemon) => (pokemon !== firstBattle.winner) && (pokemon !== firstBattle.loser))
            p2PokemonAvailable = p2PokemonAvailable.filter((pokemon) => (pokemon !== firstBattle.winner) && (pokemon !== firstBattle.loser))

            console.log(p1PokemonAvailable, "-----after");
            console.log(p2PokemonAvailable, "-----after");

            console.log(`\x1B[93;1mThe scores Are... \x1B[97;1m${player1.name} - \x1B[93;1m${player1WinCount}\x1B[97;1m || ${player2.name} - \x1B[93;1m${player2WinCount} \x1B[m`)
            
            return inquirer.prompt(commenceBattle2)

        })
        .then((nextChoices) => {
            const pokemon1 = player1.getPokemon(p1PokemonAvailable[0])
            const pokemon2 = player2.getPokemon(p2PokemonAvailable[0])

            secondBattle = new Battle(player1, player2, pokemon1, pokemon2)
            secondBattle.coinToss()
            secondBattle.fight(secondBattle.currentPokemon)

            if (p1PokemonAvailable.includes(secondBattle.winner)) player1WinCount ++
            if (p2PokemonAvailable.includes(secondBattle.winner)) player2WinCount ++

            console.log(`\x1B[93;1mThe scores after two rounds are... \x1B[97;1m${player1.name} - \x1B[93;1m${player1WinCount}\x1B[97;1m || ${player2.name} - \x1B[93;1m${player2WinCount} \x1B[m`)

            // Go a third time?
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.log(error);
            } else {
                console.log(error);
                // Something else went wrong
            }
        })
}

playGame()

