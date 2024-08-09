// import inquirer from 'inquirer';
const inquirer = require('inquirer');
const { getRandomPokemonArray } = require('./utils/utils');
const { Trainer } = require('./classes/trainer');
const { Battle } = require('./battle');

function playGame () {
    let player1 = ""
    const player1PokemonAvailable = []
    let player2 = ""
    const player2PokemonAvailable = []
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

    const player1FirstCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon1}, 
                {name: 'Not right now', value: null}
            ],
            message: () => {
                return `${player1.name} - A wild ${randomPokemon1.name} appeared. Would you like to catch it?`
            },
            name: 'player1Pokemon',
            
        },
    ]

    const player2FirstCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon2}, 
                {name: 'Not right now', value: null}
            ],
            message: () => {
                return `${player2.name} - A wild ${randomPokemon2.name} appeared. Would you like to catch it?`
            },
            name: 'player2Pokemon',
            
        },
    ]

    const player1SecondCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon3}, 
                {name: 'Not right now', value: null}
            ],
            message: () => {
                return `${player1.name} - A wild ${randomPokemon3.name} appeared. Would you like to catch it?`
            },
            name: 'player1Pokemon2',
            
        },
    ]
    const player2SecondCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon4}, 
                {name: 'Not right now', value: null}
            ],
            message: () => {
                return `${player2.name} - A wild ${randomPokemon4.name} appeared. Would you like to catch it?`
            },
            name: 'player2Pokemon2',
            
        },
    ]
    const player1ThirdCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon5}, 
            ],
            message: () => {
                return `${player1.name} - You still have an empty pokeball and a wild ${randomPokemon5.name} appeared.`
            },
            name: 'player1Pokemon3',
            
        },
    ]
    const player2ThirdCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon6}, 
            ],
            message: () => {
                return `${player2.name} - You still have an empty pokeball and a wild ${randomPokemon6.name} appeared.`
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
                return `${player1.name} - You still have an empty pokeball and a wild ${randomPokemon5.name} appeared.`
            },
            name: 'player1Pokemon3',
            
        },
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon6}, 
            ],
            message: () => {
                return `${player2.name} - You still have an empty pokeball and a wild ${randomPokemon6.name} appeared.`
            },
            name: 'player2Pokemon3',
            
        },
    ]
    const commenceBattle = [
        {
            type: 'list',
            choices: () => {
                return [
                `${player1PokemonAvailable[0]}`, 
                `${player1PokemonAvailable[1]}`
            ]},
            message: () => {
                return `${player1.name} - Are you ready to battle? Which Pokemon do you want to choose?`
            },
            name: 'player1BattleChoice1',
        },
        {
            type: 'list',
            choices: () => {
                return [
                `${player2PokemonAvailable[0]}`, 
                `${player2PokemonAvailable[1]}`
            ]},
            message: () => {
                return `${player2.name} - Are you ready to battle? Which Pokemon do you want to choose?`
            },
            name: 'player2BattleChoice1',
        },

    ]
    
    inquirer.prompt(playerNames)
        // After player names input
        .then((playerNamesAnswers) => {
            player1 = new Trainer(`${playerNamesAnswers.trainer1}`)
            player2 = new Trainer(`${playerNamesAnswers.trainer2}`)

            return inquirer.prompt(player1FirstCatch)
        })
        // After player 1's first pokemon encounter
        .then((player1FirstCatchPokemon) => {
            if (player1FirstCatchPokemon.player1Pokemon){
                player1.catch(player1FirstCatchPokemon.player1Pokemon)
                player1PokemonAvailable.push(player1FirstCatchPokemon.player1Pokemon.name)
            }
            console.log(player1PokemonAvailable, "-----after 1st catch");
            return inquirer.prompt(player2FirstCatch)
        })
        // After player 2's first pokemon encounter
        .then((player2FirstCatchPokemon) => {
            if (player2FirstCatchPokemon.player2Pokemon){
                player2.catch(player2FirstCatchPokemon.player2Pokemon)
                player2PokemonAvailable.push(player2FirstCatchPokemon.player2Pokemon.name)
            }

            return inquirer.prompt(player1SecondCatch)
        })
        // After player 1's second pokemon encounter
        .then((player1SecondCatchPokemon) => {
            if (player1SecondCatchPokemon.player1Pokemon2){
                player1.catch(player1SecondCatchPokemon.player1Pokemon2)
                player1PokemonAvailable.push(player1SecondCatchPokemon.player1Pokemon2.name)
            }
            console.log(player1PokemonAvailable, "-----P1 after 2nd catch");
            
            return inquirer.prompt(player2SecondCatch)
        })
        // After player 2's second pokemon encounter
        .then((player2SecondCatchPokemon) => {
            if (player2SecondCatchPokemon.player2Pokemon2){
                player2.catch(player2SecondCatchPokemon.player2Pokemon2)
                player2PokemonAvailable.push(player2SecondCatchPokemon.player2Pokemon2.name)
            }
            console.log(player2PokemonAvailable, "-----P2 after 2nd catch");
            console.log(player1.isBeltFull(), "-----player1 belt");
            console.log(player2.isBeltFull(), "-----player2 belt");
            
            if (!player1.isBeltFull() && player2.isBeltFull()){
                return inquirer.prompt(player1ThirdCatch)
            }
            if (!player2.isBeltFull() && player1.isBeltFull()){
                return inquirer.prompt(player2ThirdCatch)
            }
            if (!player1.isBeltFull() && !player2.isBeltFull()){
                return inquirer.prompt(jointThirdCatch)
            }
            if (player1.isBeltFull() && player2.isBeltFull()){
                // move on to the next stage
                return inquirer.prompt(commenceBattle)
            }
        })
        // If there is a player 1 or player 2 third pokemon encounter, deal with this, otherwise skip to the next step
        .then((thirdCatchOutcome) => {
            // console.log(thirdCatchOutcome, "-----ThirdCatchOutcome");
            if (thirdCatchOutcome.player1Pokemon3) {
                player1.catch(thirdCatchOutcome.player1Pokemon3)
                player1PokemonAvailable.push(thirdCatchOutcome.player1Pokemon3.name)
            }
            if (thirdCatchOutcome.player2Pokemon3) {
                player2.catch(thirdCatchOutcome.player2Pokemon3)
                player2PokemonAvailable.push(thirdCatchOutcome.player2Pokemon3.name)
            }
            // This runs if a third catch was done - 
            if (!thirdCatchOutcome.player1BattleChoice1 || !thirdCatchOutcome.player2BattleChoice1) {
                // console.log("Third catch sorted...");
                return inquirer.prompt(commenceBattle)
            }

            // This runs if come from battle commence so needs to skip to next then block
            if (thirdCatchOutcome.player1BattleChoice1 || thirdCatchOutcome.player2BattleChoice1) {
                // console.log("No third catch so moving on...");
                return thirdCatchOutcome
            }
        })
        .then((battleChoices) => {
            console.log(battleChoices, "-----battle choices in next then block");
            // console.log(player1.belt, "----player1 belt");
            // console.log(player2.belt, "----player2 belt");
            // use battle choices to getPokemon then create new Battle
            const pokemon1 = player1.getPokemon(battleChoices.player1BattleChoice1)
            const pokemon2 = player2.getPokemon(battleChoices.player2BattleChoice1)
            console.log(pokemon1);
            console.log(pokemon2);
            // console.log(`${player1} - ${player1.getPokemon(pokemon1)}`, "----p1 getPokemon");
            // console.log(player2.getPokemon(pokemon2), "----p2 getPokemon");
            firstBattle = new Battle(player1, player2, pokemon1, pokemon2)
            // coin toss
            firstBattle.coinToss()
            // .fight and pass in pokemon to go first
            firstBattle.fight(firstBattle.currentPokemon)
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

