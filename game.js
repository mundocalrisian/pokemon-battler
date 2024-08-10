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
    let randomPokemon7 = pokemonChoices[6]
    let randomPokemon8 = pokemonChoices[7]
    
    let firstBattle = ""
    let secondBattle = ""
    let thirdBattle = ""

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
                {name: 'Not right now', value: null} 
            ],
            message: () => {
                return `\x1B[92;1m${player1.name}\x1B[m - A wild ${randomPokemon5.name} appeared. Would you like to catch it?`
            },
            name: 'player1Pokemon3',
            
        },
    ]
    const p2ThirdCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon6},
                {name: 'Not right now', value: null}
            ],
            message: () => {
                return `\x1B[92;1m${player2.name}\x1B[m - A wild ${randomPokemon6.name} appeared. Would you like to catch it?`
            },
            name: 'player2Pokemon3',
            
        },
    ]
    const p1ForthCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon7}, 
            ],
            message: () => {
                return `\x1B[92;1m${player1.name}\x1B[m - You still have an empty pokeball and a wild ${randomPokemon7.name} appeared.`
            },
            name: 'player1Pokemon4',
            
        },
    ]
    const p2ForthCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon8}, 
            ],
            message: () => {
                return `\x1B[92;1m${player2.name}\x1B[m - You still have an empty pokeball and a wild ${randomPokemon8.name} appeared.`
            },
            name: 'player2Pokemon4',
            
        },
    ]
    const jointForthCatch = [
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon7}, 
            ],
            message: () => {
                return `\x1B[92;1m${player1.name}\x1B[m - You still have an empty pokeball and a wild ${randomPokemon7.name} appeared.`
            },
            name: 'player1Pokemon4',
            
        },
        {
            type: 'list',
            choices: [
                {name: 'Catch it!', value: randomPokemon8}, 
            ],
            message: () => {
                return `\x1B[92;1m${player2.name}\x1B[m - You still have an empty pokeball and a wild ${randomPokemon8.name} appeared.`
            },
            name: 'player2Pokemon4',
            
        },
    ]
    const commenceBattle1 = [
        {
            type: 'list',
            choices: () => {
                return [
                `${p1PokemonAvailable[0]}`, 
                `${p1PokemonAvailable[1]}`,
                `${p1PokemonAvailable[2]}`
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
                `${p2PokemonAvailable[1]}`,
                `${p2PokemonAvailable[2]}`
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
                `${p1PokemonAvailable[0]}`,
                `${p1PokemonAvailable[1]}`,
                'No thanks'
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
                `${p2PokemonAvailable[0]}`,
                `${p2PokemonAvailable[1]}`,
                'No thanks'
            ]},
            message: () => {
                return `\x1B[92;1m${player2.name}\x1B[m - Do you want to battle again?`
            },
            name: 'player2BattleChoice2',
        },
    ]
    const commenceBattle3 = [
        {
            type: 'list',
            choices: () => {
                return [
                `${p1PokemonAvailable[0]}`,
                'No thanks'
            ]},
            message: () => {
                return `\x1B[92;1m${player1.name}\x1B[m - Do you want to battle again?`
            },
            name: 'player1BattleChoice3',
        },
        {
            type: 'list',
            choices: () => {
                return [
                `${p2PokemonAvailable[0]}`,
                'No thanks'
            ]},
            message: () => {
                return `\x1B[92;1m${player2.name}\x1B[m - Do you want to battle again?`
            },
            name: 'player2BattleChoice3',
        },
    ]

    const playAgain = [
        {
            type: 'list',
            choices: ['Of course!', 'Not this time'],
            message: 'Play again?',
            name: 'playAgain',
        },
    ]
    
    inquirer.prompt(playerNames)
        .then((playerNamesAnswers) => {

            player1 = new Trainer(`${playerNamesAnswers.trainer1}`)
            player2 = new Trainer(`${playerNamesAnswers.trainer2}`)

            return inquirer.prompt(p1FirstCatch)
        })
        .then((p1FirstCatchPokemon) => {

            if (p1FirstCatchPokemon.player1Pokemon){
                player1.catch(p1FirstCatchPokemon.player1Pokemon)
                p1PokemonAvailable.push(p1FirstCatchPokemon.player1Pokemon.name)
            }

            return inquirer.prompt(p2FirstCatch)
        })
        .then((p2FirstCatchPokemon) => {

            if (p2FirstCatchPokemon.player2Pokemon){
                player2.catch(p2FirstCatchPokemon.player2Pokemon)
                p2PokemonAvailable.push(p2FirstCatchPokemon.player2Pokemon.name)
            }

            return inquirer.prompt(p1SecondCatch)
        })
        .then((p1SecondCatchPokemon) => {

            if (p1SecondCatchPokemon.player1Pokemon2){
                player1.catch(p1SecondCatchPokemon.player1Pokemon2)
                p1PokemonAvailable.push(p1SecondCatchPokemon.player1Pokemon2.name)
            }
            
            return inquirer.prompt(p2SecondCatch)
        })
        .then((p2SecondCatchPokemon) => {

            if (p2SecondCatchPokemon.player2Pokemon2){
                player2.catch(p2SecondCatchPokemon.player2Pokemon2)
                p2PokemonAvailable.push(p2SecondCatchPokemon.player2Pokemon2.name)
            }
            return inquirer.prompt(p1ThirdCatch)
        })
        .then((p1ThirdCatchPokemon) => {
            
            if (p1ThirdCatchPokemon.player1Pokemon3){
                player1.catch(p1ThirdCatchPokemon.player1Pokemon3)
                p1PokemonAvailable.push(p1ThirdCatchPokemon.player1Pokemon3.name)
            }
            
            return inquirer.prompt(p2ThirdCatch)
        })
        .then((p2ThirdCatchPokemon) => {

            if (p2ThirdCatchPokemon.player2Pokemon3){
                player2.catch(p2ThirdCatchPokemon.player2Pokemon3)
                p2PokemonAvailable.push(p2ThirdCatchPokemon.player2Pokemon3.name)
            }

            if (!player1.isBeltFull() && player2.isBeltFull()){
                return inquirer.prompt(p1ForthCatch)
            }
            if (!player2.isBeltFull() && player1.isBeltFull()){
                return inquirer.prompt(p2ForthCatch)
            }
            if (!player1.isBeltFull() && !player2.isBeltFull()){
                return inquirer.prompt(jointForthCatch)
            }
            if (player1.isBeltFull() && player2.isBeltFull()){
                return inquirer.prompt(commenceBattle1)
            }
        })
        .then((forthCatchOutcome) => {

            if (forthCatchOutcome.player1Pokemon4) {
                player1.catch(forthCatchOutcome.player1Pokemon4)
                p1PokemonAvailable.push(forthCatchOutcome.player1Pokemon4.name)
            }
            if (forthCatchOutcome.player2Pokemon4) {
                player2.catch(forthCatchOutcome.player2Pokemon4)
                p2PokemonAvailable.push(forthCatchOutcome.player2Pokemon4.name)
            }
            if (!forthCatchOutcome.player1BattleChoice1 || !forthCatchOutcome.player2BattleChoice1) {
                return inquirer.prompt(commenceBattle1)
            }
            if (forthCatchOutcome.player1BattleChoice1 || forthCatchOutcome.player2BattleChoice1) {
                return forthCatchOutcome
            }
        })
        .then((battle1Choices) => {

            const pokemon1 = player1.getPokemon(battle1Choices.player1BattleChoice1)
            const pokemon2 = player2.getPokemon(battle1Choices.player2BattleChoice1)

            firstBattle = new Battle(player1, player2, pokemon1, pokemon2)
            firstBattle.coinToss()
            firstBattle.fight(firstBattle.currentPokemon)

            if (p1PokemonAvailable.includes(firstBattle.winner)) player1WinCount ++
            if (p2PokemonAvailable.includes(firstBattle.winner)) player2WinCount ++

            // removeAvailablePokemon(p1PokemonAvailable, firstBattle.loser, firstBattle.winner)
            // removeAvailablePokemon(p2PokemonAvailable, firstBattle.loser, firstBattle.winner)

            p1PokemonAvailable = p1PokemonAvailable.filter((pokemon) => (pokemon !== firstBattle.winner) && (pokemon !== firstBattle.loser))
            p2PokemonAvailable = p2PokemonAvailable.filter((pokemon) => (pokemon !== firstBattle.winner) && (pokemon !== firstBattle.loser))

            console.log(`\x1B[93;1mThe scores are... \x1B[97;1m${player1.name} - \x1B[93;1m${player1WinCount}\x1B[97;1m || ${player2.name} - \x1B[93;1m${player2WinCount} \x1B[m\n`)
            
            return inquirer.prompt(commenceBattle2)

        })
        .then((battle2Choices) => {

            if (battle2Choices.player1BattleChoice2 === "No thanks" || battle2Choices.player2BattleChoice2 === "No thanks" ) {
                console.log(`\n\x1B[93;1mFinal scores... \x1B[97;1m${player1.name} - \x1B[93;1m${player1WinCount}\x1B[97;1m || ${player2.name} - \x1B[93;1m${player2WinCount} \x1B[m\n`)
                console.log("\x1B[95;1mThanks for playing!!\n");
                console.log(`\x1B[36;1m-----------------------------------------------------------------------\x1B[m\n`);
                process.exit();
            }

            const pokemon1 = player1.getPokemon(battle2Choices.player1BattleChoice2)
            const pokemon2 = player2.getPokemon(battle2Choices.player2BattleChoice2)

            secondBattle = new Battle(player1, player2, pokemon1, pokemon2)
            secondBattle.coinToss()
            secondBattle.fight(secondBattle.currentPokemon)

            if (p1PokemonAvailable.includes(secondBattle.winner)) player1WinCount ++
            if (p2PokemonAvailable.includes(secondBattle.winner)) player2WinCount ++

            p1PokemonAvailable = p1PokemonAvailable.filter((pokemon) => (pokemon !== secondBattle.winner) && (pokemon !== secondBattle.loser))
            p2PokemonAvailable = p2PokemonAvailable.filter((pokemon) => (pokemon !== secondBattle.winner) && (pokemon !== secondBattle.loser))

            console.log(`\x1B[93;1mThe scores after two rounds are... \x1B[97;1m${player1.name} - \x1B[93;1m${player1WinCount}\x1B[97;1m || ${player2.name} - \x1B[93;1m${player2WinCount} \x1B[m\n`)

            return inquirer.prompt(commenceBattle3)

        })
        .then((battle3Choices) => {

            if (battle3Choices.player1BattleChoice3 === "No thanks" || battle3Choices.player2BattleChoice3 === "No thanks" ) {
                console.log(`\n\x1B[93;1mFinal scores... \x1B[97;1m${player1.name} - \x1B[93;1m${player1WinCount}\x1B[97;1m || ${player2.name} - \x1B[93;1m${player2WinCount} \x1B[m\n`)
                console.log("\x1B[95;1mThanks for playing!!\n");
                console.log(`\x1B[36;1m-----------------------------------------------------------------------\x1B[m\n`);
                process.exit();
            }

            const pokemon1 = player1.getPokemon(p1PokemonAvailable[0])
            const pokemon2 = player2.getPokemon(p2PokemonAvailable[0])

            thirdBattle = new Battle(player1, player2, pokemon1, pokemon2)
            thirdBattle.coinToss()
            thirdBattle.fight(thirdBattle.currentPokemon)

            if (p1PokemonAvailable.includes(thirdBattle.winner)) player1WinCount ++
            if (p2PokemonAvailable.includes(thirdBattle.winner)) player2WinCount ++

            console.log(`\x1B[93;1mThe final scores are... \x1B[97;1m${player1.name} - \x1B[93;1m${player1WinCount}\x1B[97;1m || ${player2.name} - \x1B[93;1m${player2WinCount} \x1B[m\n`)

            if (player1WinCount > player2WinCount) {
                console.log(`\x1B[95;1m${player1.name} wins!!!\x1B[m\n`);
            }

            if (player1WinCount < player2WinCount) {
                console.log(`\x1B[95;1m${player2.name} wins!!!\x1B[m\n`);
            }

            return inquirer.prompt(playAgain)

        })
        .then((playAgainResult) => {

            if (playAgainResult.playAgain === 'Of course!') {

                console.log(`\n\x1B[36;1m-----------------------------------------------------------------------\x1B[m\n`);
                playGame()

            } else {
                console.log("\n\x1B[1mThanks for playing!!\n");
                console.log(`\x1B[36;1m-----------------------------------------------------------------------\x1B[m\n`);
            }



        })
        .catch((error) => {
            if (error.isTtyError, "-----Prompt error") {
                // Prompt couldn't be rendered in the current environment
                console.log(error);
            } else {
                console.log(error, "-----Error");
                // Something else went wrong
            }
        })
}

    console.log(`\n\x1B[36;1m-----------------------------------------------------------------------\x1B[m`);
    console.log(`\x1B[3m`);
    console.log(`\x1B[1mWelcome to Mundo's Pokemon Battler!`);
    console.log("\x1B[0m");
    console.log(`You have 4 opportunities to catch 3 random Pokemon so choose wisely.`);
    console.log(`After that you can battle each one against your opponent.`);
    console.log(`Winner is the best of 3.`);
    console.log(`\x1B[3m`);
    console.log(`\x1B[1mGood luck!\n`);
    console.log(`\x1B[36;1m-----------------------------------------------------------------------\x1B[m\n`);

playGame()

