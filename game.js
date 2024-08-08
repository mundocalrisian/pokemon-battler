// import inquirer from 'inquirer';
const inquirer = require('inquirer');
const { getRandomPokemonArray } = require('./utils/getPokemon');
const { Trainer } = require('./classes/trainer');
const { Battle } = require('./battle');

function playGame () {
    let player1 = ""
    let player2 = ""
    const pokemonChoices = getRandomPokemonArray()
    let randomPokemon1 = pokemonChoices[0]
    let randomPokemon2 = pokemonChoices[1]
    let randomPokemon3 = pokemonChoices[2]
    let randomPokemon4 = pokemonChoices[3]

    const playerNames = [
        {   type: 'input',
            message: "What's your name?",
            name: 'trainer1',
            default: 'Trainer 1'
        },
        {   type: 'input',
            message: "What's your name?",
            name: 'trainer2',
            default: 'Trainer 2'
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
            name: 'trainer1Pokemon',
            
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
            name: 'trainer2Pokemon',
            
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
            name: 'trainer1Pokemon2',
            
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
            name: 'trainer1Pokemon2',
            
        },
    ]
    
    inquirer.prompt(playerNames)
        .then((playerNamesAnswers) => {
            player1 = new Trainer(`${playerNamesAnswers.trainer1}`)
            player2 = new Trainer(`${playerNamesAnswers.trainer2}`)

            return inquirer.prompt(player1FirstCatch)
        })
        .then((player1FirstCaught) => {
            if (player1FirstCaught.trainer1Pokemon){
                player1.catch(player1FirstCaught.trainer1Pokemon)
            }
            return inquirer.prompt(player2FirstCatch)
        })
        .then((player2FirstCaught) => {

            if (player2FirstCaught.trainer2Pokemon){
                player2.catch(player2FirstCaught.trainer2Pokemon)
            }

            return inquirer.prompt(player1SecondCatch)
        })
        .then((player1SecondCaught) => {
            if (player1SecondCaught.trainer1Pokemon2){
                player1.catch(player1SecondCaught.trainer1Pokemon2)
            }
            return inquirer.prompt(player2SecondCatch)
        })
        .then((player2SecondCaught) => {
            if (player2SecondCaught.trainer1Pokemon2){
                player2.catch(player2SecondCaught.trainer1Pokemon2)
            }
            // return inquirer.prompt()
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

