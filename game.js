// import inquirer from 'inquirer';
const inquirer = require('inquirer');
const { getRandomPokemonArray } = require('./utils/utils');
const { Trainer } = require('./classes/trainer');
const { Battle } = require('./battle');

function playGame () {
    let player1 = ""
    let plater2 = ""
    const pokemonChoices = getRandomPokemonArray()
    let randomPokemon1 = pokemonChoices[0]
    let randomPokemon2 = pokemonChoices[1]
    let randomPokemon3 = pokemonChoices[2]
    let randomPokemon4 = pokemonChoices[3]

    const firstStage = [
        {   type: 'input',
            message: "What's your name?",
            name: 'trainer1',
            default: 'Trainer 1'
        },
        {
            type: 'list',
            choices: [
                {name: 'Yes', value: randomPokemon1}, 
                {name: 'No', value: null}
            ],
            message: (responses) => {
                return `Welcome ${responses.trainer1}! A wild Pokemon appeared. Would you like to catch it?`
            },
            name: 'trainer1Pokemon',
            
        },
        {   type: 'input',
            message: "What's your name?",
            name: 'trainer2Name',
            default: 'Trainer 2'
        },
        {
            type: 'list',
            choices: [
                {name: 'Yes', value: randomPokemon2}, 
                {name: 'No', value: null}
            ],
            message: (responses) => {
                return `Welcome ${responses.trainer2}! A wild Pokemon appeared. Would you like to catch it?`
            },
            name: 'trainer2Pokemon',
            
        },
    ]

    const secondStage = [
        // 
    ]
    
    inquirer.prompt(firstStage)
        .then((firstAnswers) => {
            player1 = new Trainer(`${firstAnswers.trainer1Name}`)
            player2 = new Trainer(`${firstAnswers.trainer2Name}`)
            console.log(firstAnswers);
            return inquirer.prompt(secondStage)
        })
        .then((secondAnswers) => {
            console.log(secondAnswers);
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

