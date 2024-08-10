# Mundo's Pokemon Battler

## Welcome Trainer!

This Pokemon battler is a simple CLI (command line interface) game based on the popular Pokemon franchise.

Firstly, players have 4 opportunities to catch 3 random Pokemon. Following that is the chance to battle each of them against their opponent. The overall winner is the best of 3 battles.

![pokeball](/assets/pokeball.png)

## Installation

To start playing the game, first clone the repository in your terminal using - 

    git clone https://github.com/mundocalrisian/pokemon-battler.git

Then navigate into the folder with - 

    cd pokemon-battler

Next you'll need to install the dependencies using - 

    npm install

Then to run the game enter -  

    node game.js

Follow the on screen prompts and enjoy!

***NB*** *- make sure that the version of Inquirer is 8.** and not 9 or above. If it is, run the following commands -* 

    npm uninstall inquirer
    npm install inquirer@^8.0.0

## Technologies Used

- [NodeJS](https://nodejs.org/en) - Version 20.10.0
- [Inquirer](https://www.npmjs.com/package/inquirer) - Version 8.2.6
- [Jest](https://jestjs.io/) - Version 29.7.0

Pokeball image generated at https://www.text-image.com/convert/

This project was part of the Software Development Bootcamp with [Northcoders](https://northcoders.com/our-courses/coding-bootcamp).



