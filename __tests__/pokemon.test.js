const { Pokemon } = require('../classes/pokemon');
const { FireType, Charmander } = require('../classes/fire-type');
const { GrassType, Bulbasaur } = require('../classes/grass-type');
const { WaterType, Squirtle } = require('../classes/water-type');
const { NormalType, Eevee } = require('../classes/normal-type');
const { Pokeball } = require('../classes/pokeball');
const { Trainer } = require('../classes/trainer');
const { Battle } = require('../classes/battle');

beforeEach(() => {logSpy = jest.spyOn(global.console, 'log')})
afterEach(() => {logSpy.mockRestore()})

describe('POKEMON CLASS', () => {
    test('should create a new pokemon with appropriate properties',() => {
        const testPokemon = new Pokemon("Test Pokemon", 100, 25, "test move")
        const expectedPokemon = {
            name: "Test Pokemon",
            hitPoints: 100,
            attackDamage: 25,
            move: "test move"
        }
        expect(testPokemon).toMatchObject(expectedPokemon)
    });
    test('should return a default move of tackle when no move is supplied', () => {
        const testPokemon = new Pokemon("Test Pokemon", 100, 25)
        const expectedPokemon = {
            name: "Test Pokemon",
            hitPoints: 100,
            attackDamage: 25,
            move: "tackle"
        }
        expect(testPokemon).toMatchObject(expectedPokemon)
    }); 
    test('takeDamage: should reduce the hitpoints of a pokemon by a supplied number', () => {
        const testPokemon = new Pokemon("Test Pokemon", 100, 25)
        testPokemon.takeDamage(50)
        expect(testPokemon.hitPoints).toEqual(50)
    });
    test('useMove: should return the pokemon attack damage', () => {
        const testPokemon = new Pokemon("Test Pokemon", 100, 50, "test move")
        const output = testPokemon.useMove()
        expect(output).toEqual(50)
    });
    test('useMove: should return a console log of what move was used', () => {
        const testPokemon = new Pokemon("Test Pokemon", 100, 25, "test move")
        testPokemon.useMove()
        expect(logSpy).toHaveBeenCalled()
        expect(logSpy).toHaveBeenCalledWith("Test Pokemon used test move!")
    });
    test('hasFainted: should return true when a pokemon has 0 hitPoints', () => {
        const testPokemon = new Pokemon("Tester", 100, 25)
        testPokemon.takeDamage(100)
        const output = testPokemon.hasFainted()
        expect(output).toEqual(true)
    });
    test('hasFainted: should return false when a pokemons hitPoints is not 0', () => {
        const testPokemon = new Pokemon("Tester", 100, 25)
        const output = testPokemon.hasFainted()
        expect(output).toEqual(false)
    });
});
describe('FIRE CLASS', () => {
    test('should create a new fire type pokemon with appropriate properties', () => {
        const testFireType = new FireType("TestFire", 100, 50, "fire move")
        const expectedPokemon = {
            name: "TestFire",
            hitPoints: 100,
            attackDamage: 50,
            move: "fire move",
            type: "fire"
        }
        expect(testFireType).toMatchObject(expectedPokemon)
    });
    test('should extend the pokemon class', () => {
        const testFireType = new FireType()
        expect(testFireType).toBeInstanceOf(Pokemon)
    });
    test('isEffectiveAgainst: should return true when a grass type pokemon is supplied', () => {
        const fireTypePokemon = new FireType()
        const grassTypePokemon = new GrassType()
        const output = fireTypePokemon.isEffectiveAgainst(grassTypePokemon)
        expect(output).toEqual(true)
    });
    test('isEffectiveAgainst: should return false when a water, fire or normal type pokemon is supplied', () => {
        const fireTypePokemon = new FireType()
        const waterTypePokemon = new WaterType()
        const normalTypePokemon = new NormalType()
        const output1 = fireTypePokemon.isEffectiveAgainst(waterTypePokemon)
        const output2 = fireTypePokemon.isEffectiveAgainst(normalTypePokemon)
        const output3 = fireTypePokemon.isEffectiveAgainst(fireTypePokemon)
        expect(output1).toEqual(false)
        expect(output2).toEqual(false)
        expect(output3).toEqual(false)
    });
    test('isWeakTo: should return true when a water type pokemon is supplied', () => {
        const fireTypePokemon = new FireType()
        const waterTypePokemon = new WaterType()
        const output = fireTypePokemon.isWeakTo(waterTypePokemon)
        expect(output).toEqual(true)

    });
    test('isWeakTo: should return false when a fire, grass or normal type pokemon is supplied', () => {
        const fireTypePokemon = new FireType()
        const grassTypePokemon = new GrassType()
        const normalTypePokemon = new NormalType()
        const output1 = fireTypePokemon.isWeakTo(grassTypePokemon)
        const output2 = fireTypePokemon.isWeakTo(normalTypePokemon)
        const output3 = fireTypePokemon.isWeakTo(fireTypePokemon)
        expect(output1).toEqual(false)
        expect(output2).toEqual(false)
        expect(output3).toEqual(false)
    });
});
describe('GRASS CLASS', () => {
    test('should create a new grass type pokemon with appropriate properties', () => {
        const testGrassType = new GrassType("TestGrass", 100, 50, "grass move")
        const expectedPokemon = {
            name: "TestGrass",
            hitPoints: 100,
            attackDamage: 50,
            move: "grass move",
            type: "grass"
        }
        expect(testGrassType).toMatchObject(expectedPokemon)
    });
    test('should extend the pokemon class', () => {
        const testGrassType = new GrassType()
        expect(testGrassType).toBeInstanceOf(Pokemon)
    });
    test('isEffectiveAgainst: should return true when a water type pokemon is supplied', () => {
        const grassTypePokemon = new GrassType()
        const waterTypePokemon = new WaterType()
        const output = grassTypePokemon.isEffectiveAgainst(waterTypePokemon)
        expect(output).toEqual(true)
    });
    test('isEffectiveAgainst: should return false when a fire, grass or normal type pokemon is supplied', () => {
        const grassTypePokemon = new GrassType()
        const fireTypePokemon = new FireType()
        const normalTypePokemon = new NormalType()
        const output1 = grassTypePokemon.isEffectiveAgainst(grassTypePokemon)
        const output2 = grassTypePokemon.isEffectiveAgainst(fireTypePokemon)
        const output3 = grassTypePokemon.isEffectiveAgainst(normalTypePokemon)
        expect(output1).toEqual(false)
        expect(output2).toEqual(false)
        expect(output3).toEqual(false)
    });
    test('isWeakTo: should return true when a fire type pokemon is supplied', () => {
        const grassTypePokemon = new GrassType()
        const fireTypePokemon = new FireType()
        const output = grassTypePokemon.isWeakTo(fireTypePokemon)
        expect(output).toEqual(true)

    });
    test('isWeakTo: should return false when a water, normal or grass type pokemon is supplied', () => {
        const grassTypePokemon = new GrassType()
        const waterTypePokemon = new WaterType()
        const normalTypePokemon = new NormalType()
        const output1 = grassTypePokemon.isWeakTo(waterTypePokemon)
        const output2 = grassTypePokemon.isWeakTo(normalTypePokemon)
        const output3 = grassTypePokemon.isWeakTo(grassTypePokemon)
        expect(output1).toEqual(false)
        expect(output2).toEqual(false)
        expect(output3).toEqual(false)
    });
});
describe('WATER CLASS', () => {
    test('should create a new water type pokemon with appropriate properties', () => {
        const testWaterType = new WaterType("TestWater", 100, 50, "water move")
        const expectedPokemon = {
            name: "TestWater",
            hitPoints: 100,
            attackDamage: 50,
            move: "water move",
            type: "water"
        }
        expect(testWaterType).toMatchObject(expectedPokemon)
    });
    test('should extend the pokemon class', () => {
        const testWaterType = new WaterType()
        expect(testWaterType).toBeInstanceOf(Pokemon)
    });
    test('isEffectiveAgainst: should return true when a fire type pokemon is supplied', () => {
        const waterTypePokemon = new WaterType()
        const fireTypePokemon = new FireType()
        const output = waterTypePokemon.isEffectiveAgainst(fireTypePokemon)
        expect(output).toEqual(true)
    });
    test('isEffectiveAgainst: should return false when a water, grass or normal type pokemon is supplied', () => {
        const waterTypePokemon = new WaterType()
        const grassTypePokemon = new GrassType()  
        const normalTypePokemon = new NormalType()
        const output1 = waterTypePokemon.isEffectiveAgainst(grassTypePokemon)
        const output2 = waterTypePokemon.isEffectiveAgainst(normalTypePokemon)
        const output3 = waterTypePokemon.isEffectiveAgainst(waterTypePokemon)
        expect(output1).toEqual(false)
        expect(output2).toEqual(false)
        expect(output3).toEqual(false)
    });
    test('isWeakTo: should return true when a grass type pokemon is supplied', () => {
        const waterTypePokemon = new WaterType()
        const grassTypePokemon = new GrassType()
        const output = waterTypePokemon.isWeakTo(grassTypePokemon)
        expect(output).toEqual(true)

    });
    test('isWeakTo: should return false when a fire, water or normal type pokemon is supplied', () => {
        const waterTypePokemon = new WaterType()
        const fireTypePokemon = new FireType()
        const normalTypePokemon = new NormalType()
        const output1 = waterTypePokemon.isWeakTo(fireTypePokemon)
        const output2 = waterTypePokemon.isWeakTo(normalTypePokemon)
        const output3 = waterTypePokemon.isWeakTo(waterTypePokemon)
        expect(output1).toEqual(false)
        expect(output2).toEqual(false)
        expect(output3).toEqual(false)
    });
});
describe('NORMAL CLASS', () => {
    test('should create a new noraml type pokemon with appropriate properties', () => {
        const testNormalType = new NormalType("TestNormal", 100, 50, "normal move")
        const expectedPokemon = {
            name: "TestNormal",
            hitPoints: 100,
            attackDamage: 50,
            move: "normal move",
            type: "normal"
        }
        expect(testNormalType).toMatchObject(expectedPokemon)
    });
    test('should extend the pokemon class', () => {
        const testNormalType = new NormalType()
        expect(testNormalType).toBeInstanceOf(Pokemon)
    });
    test('isEffectiveAgainst: should return false when any typepokemon is supplied', () => {
        const normalTypePokemon = new NormalType()
        const fireTypePokemon = new FireType()
        const waterTypePokemon = new WaterType()
        const grassTypePokemon = new GrassType()
        const output1 = normalTypePokemon.isEffectiveAgainst(fireTypePokemon)
        const output2 = normalTypePokemon.isEffectiveAgainst(waterTypePokemon)
        const output3 = normalTypePokemon.isEffectiveAgainst(grassTypePokemon)
        const output4 = normalTypePokemon.isEffectiveAgainst(normalTypePokemon)
        expect(output1).toEqual(false)
        expect(output2).toEqual(false)
        expect(output3).toEqual(false)
        expect(output4).toEqual(false)
    });
    test('isWeakTo: should return false when any typepokemon is supplied', () => {
        const normalTypePokemon = new NormalType()
        const fireTypePokemon = new FireType()
        const waterTypePokemon = new WaterType()
        const grassTypePokemon = new GrassType()
        const output1 = normalTypePokemon.isEffectiveAgainst(fireTypePokemon)
        const output2 = normalTypePokemon.isEffectiveAgainst(waterTypePokemon)
        const output3 = normalTypePokemon.isEffectiveAgainst(grassTypePokemon)
        const output4 = normalTypePokemon.isEffectiveAgainst(normalTypePokemon)
        expect(output1).toEqual(false)
        expect(output2).toEqual(false)
        expect(output3).toEqual(false)
        expect(output4).toEqual(false)
    });
});
describe('INDIVIDUAL POKEMON', () => {
    describe('CHARMANDER', () => {
        test('should create a Charmander Pokemon with appropriate properties', () => {
            const testCharmander = new Charmander(44, 17)
            const expectedCharmander = {
                name: "Charmander",
                hitPoints: 44,
                attackDamage: 17,
                move: "ember",
                type: "fire"
            }
            expect(testCharmander).toMatchObject(expectedCharmander)
        });
        test('Charmander should be effective against Bulbasaur and not against Squirtle or Eevee', () => {
            const testCharmander = new Charmander(44, 17)
            const testBulbasaur = new Bulbasaur(45, 16)
            const testSquirtle = new Squirtle(44, 16)
            const testEevee = new Eevee(55, 12)
            const actual1 = testCharmander.isEffectiveAgainst(testBulbasaur)
            expect(actual1).toEqual(true)
            const actual2 = testCharmander.isEffectiveAgainst(testSquirtle)
            expect(actual2).toEqual(false)
            const actual3 = testCharmander.isEffectiveAgainst(testEevee)
            expect(actual3).toEqual(false)
        });
        test('Charmander should be weak to Squirtle but not Bulbasaur or Eevee', () => {
            const testCharmander = new Charmander(44, 17)
            const testSquirtle = new Squirtle(44, 16)
            const testBulbasaur = new Bulbasaur(45, 16)
            const testEevee = new Eevee(55, 12)
            const actual1 = testCharmander.isWeakTo(testSquirtle)
            expect(actual1).toEqual(true)
            const actual2 = testCharmander.isWeakTo(testBulbasaur)
            expect(actual2).toEqual(false)
            const actual3 = testCharmander.isWeakTo(testEevee)
            expect(actual3).toEqual(false)
        }); 
    });
    describe('SQUIRTLE', () => {
        test('should create a Squirtle Pokemon with appropriate properties', () => {
            const testSquirtle = new Squirtle(44, 16)
            const expectedSquirtle = {
                name: "Squirtle",
                hitPoints: 44,
                attackDamage: 16,
                move: "aqua jet",
                type: "water"
            }
            expect(testSquirtle).toMatchObject(expectedSquirtle)
        });
        test('Squirtle should be effective against Charmander and not against Bulbasaur or Eevee', () => {
            const testSquirtle = new Squirtle(44, 16)
            const testCharmander = new Charmander(44, 17)
            const testBulbasaur = new Bulbasaur(45, 16)
            const testEevee = new Eevee(55, 12)
            const actual1 = testSquirtle.isEffectiveAgainst(testCharmander)
            expect(actual1).toEqual(true)
            const actual2 = testSquirtle.isEffectiveAgainst(testBulbasaur)
            expect(actual2).toEqual(false)
            const actual3 = testSquirtle.isEffectiveAgainst(testEevee)
            expect(actual3).toEqual(false)
        });
        test('Squirtle should be weak to Bulbasaur but not Charmander or Eevee', () => {
            const testSquirtle = new Squirtle(44, 16)
            const testBulbasaur = new Bulbasaur(45, 16)
            const testCharmander = new Charmander(44, 17)
            const testEevee = new Eevee(55, 12)
            const actual1 = testSquirtle.isWeakTo(testBulbasaur)
            expect(actual1).toEqual(true)
            const actual2 = testSquirtle.isWeakTo(testCharmander)
            expect(actual2).toEqual(false)
            const actual3 = testSquirtle.isWeakTo(testEevee)
            expect(actual3).toEqual(false)
        });
    });
    describe('BULBASAUR', () => {
        test('should create a Bulbasaur Pokemon with appropriate properties', () => {
            const testBulbasaur = new Bulbasaur(45, 16)
            const expectedBulbasaur = {
                name: "Bulbasaur",
                hitPoints: 45,
                attackDamage: 16,
                move: "vine whip",
                type: "grass"
            }
            expect(testBulbasaur).toMatchObject(expectedBulbasaur)
        });
        test('Bulbasaur should be effective against Squirtle and not against Charmander or Eevee', () => {
            const testBulbasaur = new Bulbasaur(45, 16)
            const testSquirtle = new Squirtle(44, 16)
            const testCharmander = new Charmander(44, 17)
            const testEevee = new Eevee(55, 12)
            const actual1 = testBulbasaur.isEffectiveAgainst(testSquirtle)
            expect(actual1).toEqual(true)
            const actual2 = testBulbasaur.isEffectiveAgainst(testCharmander)
            expect(actual2).toEqual(false)
            const actual3 = testBulbasaur.isEffectiveAgainst(testEevee)
            expect(actual3).toEqual(false)
        });
        test('Bulbasaur should be weak to Charmander but not Squirtle or Eevee', () => {
            const testBulbasaur = new Bulbasaur(45, 16)
            const testCharmander = new Charmander(44, 17)
            const testSquirtle = new Squirtle(44, 16)
            const testEevee = new Eevee(55, 12)
            const actual1 = testBulbasaur.isWeakTo(testCharmander)
            expect(actual1).toEqual(true)
            const actual2 = testBulbasaur.isWeakTo(testSquirtle)
            expect(actual2).toEqual(false)
            const actual3 = testBulbasaur.isWeakTo(testEevee)
            expect(actual3).toEqual(false)
        });
    });
    describe('EEVEE', () => {
        test('should create an Eevee Pokemon with appropriate properties', () => {
            const testEevee = new Eevee(55, 12)
            const expectedEevee = {
                name: "Eevee",
                hitPoints: 55,
                attackDamage: 12,
                move: "tackle",
                type: "normal"
            }
            expect(testEevee).toMatchObject(expectedEevee)
        });
        test('Bulbasaur should not be effective against any other Pokemon', () => {
            const testEevee = new Eevee(55, 12)
            const testBulbasaur = new Bulbasaur(45, 16)
            const testSquirtle = new Squirtle(44, 16)
            const testCharmander = new Charmander(44, 17)
            const actual1 = testEevee.isEffectiveAgainst(testSquirtle)
            expect(actual1).toEqual(false)
            const actual2 = testEevee.isEffectiveAgainst(testCharmander)
            expect(actual2).toEqual(false)
            const actual3 = testEevee.isEffectiveAgainst(testBulbasaur)
            expect(actual3).toEqual(false)
        });
        test('Bulbasaur should not be weak to any other Pokemon', () => {
            const testEevee = new Eevee(55, 12)
            const testCharmander = new Charmander(44, 17)
            const testSquirtle = new Squirtle(44, 16)
            const testBulbasaur = new Bulbasaur(45, 16)
            const actual1 = testEevee.isWeakTo(testCharmander)
            expect(actual1).toEqual(false)
            const actual2 = testEevee.isWeakTo(testSquirtle)
            expect(actual2).toEqual(false)
            const actual3 = testEevee.isWeakTo(testBulbasaur)
            expect(actual3).toEqual(false)
        });
    });
});
describe('POKEBALL', () => {
    test('should create a new empty Pokeball', () => {
        const testPokeball = new Pokeball()
        expect(testPokeball).toBeInstanceOf(Pokeball)
        expect(testPokeball).toBeInstanceOf(Object)
        expect(Object.keys(testPokeball.storedPokemon).length).toEqual(0)
    });
    describe('THROW', () => {
        test('should capture a supplied Pokemon if the Pokeball is empty', () => {
            const testPokemon = new Pokemon("Test Pokemon", 100, 50)
            const testPokeball = new Pokeball()
            testPokeball.throw = testPokemon
            const expectedObject = {
                name: 'Test Pokemon',
                hitPoints: 100, 
                attackDamage: 50, 
                move: 'tackle'
            }
            expect(testPokeball.storedPokemon).toMatchObject(expectedObject)
            expect(logSpy).toHaveBeenCalled()
            expect(logSpy).toHaveBeenCalledWith(`You caught ${testPokemon.name}!`)
        });
        test('should return a message and not capture a supplied Pokemon if the Pokeball is already full', () => {
            const testPokemon1 = new Pokemon("Test Pokemon", 100, 50)
            const testPokemon2 = new Pokemon("Another Pokemon")
            const testPokeball = new Pokeball()
            testPokeball.throw = testPokemon1
            testPokeball.throw = testPokemon2
            expect(testPokeball.storedPokemon.name).not.toEqual("Another Pokemon")
            expect(logSpy).toHaveBeenCalledWith("This pokeball is full!")
        });
        test('should return the stored Pokemon when no Pokemon is supplied and there is a Pokemon stored', () => {
            const testPokemon = new Pokemon("Test Pokemon", 100, 50)
            const testPokeball = new Pokeball()
            testPokeball.throw = testPokemon
            testPokeball.throw
            expect(logSpy).toHaveBeenCalled()
            expect(logSpy).toHaveBeenCalledWith(`\n\x1B[31;3mGO ${testPokemon.name}!\x1B[m`)
        });
        test('should return a message when no Pokemon is supplied and there is no Pokemon stored', () => {
            const testPokeball = new Pokeball()
            testPokeball.throw
            expect(logSpy).toHaveBeenCalled()
            expect(logSpy).toHaveBeenCalledWith('This pokeball is empty! Why not try and catch another?')
        });
    });
    describe('ISEMPTY', () => {
        test('should return true if a Pokemon is stored in the Pokeball', () => {
            const testPokeball = new Pokeball()
            const actual = testPokeball.isEmpty
            expect(actual).toEqual(true)
        });
        test('should return false if the Pokeball is empty', () => {
            const testPokeball = new Pokeball()
            const testPokemon = new Pokemon("Test Pokemon")
            testPokeball.throw = testPokemon
            const actual = testPokeball.isEmpty
            expect(actual).toEqual(false)
        });
    });
    describe('CONTAINS', () => {
        test('should return the name of the Pokemon if a Pokemon is stored', () => {
            const testPokeball = new Pokeball()
            const testPokemon = new Pokemon("Test Pokemon")
            testPokeball.throw = testPokemon
            const actual = testPokeball.contains
            expect(actual).toEqual("Test Pokemon")
        });
        test('should return a message if the Pokeball storeage is empty', () => {
            const testPokeball = new Pokeball()
            const testPokemon = new Pokemon("Test Pokemon")
            const actual = testPokeball.contains
            expect(actual).toEqual("empty...")
        });
    });
});
describe('TRAINER', () => {
    test('should create a new trainer with name and belt property', () => {
        const testTrainer = new Trainer("Test Trainer")
        expect(testTrainer).toHaveProperty('name')
        expect(testTrainer.name).toEqual('Test Trainer')
        expect(testTrainer).toHaveProperty('belt')
    });
    xtest('belt property should have 6 empty Pokeballs nested', () => {
        const testTrainer = new Trainer("Test Trainer")
        const belt = testTrainer.belt
        expect(belt.length).toEqual(6)
        belt.forEach((pokeball) => {
            expect(pokeball).toHaveProperty("storedPokemon")
            expect(pokeball.storedPokemon).not.toHaveProperty("name")
        })

    });
    describe('CATCH', () => {
        test('should use an empty Pokeball throw method to catch a Pokemon', () => {
            const testTrainer = new Trainer ("Test Trainer")
            const testPokemon = new Pokemon ("Test Pokemon")
            testTrainer.catch(testPokemon)
            expect(logSpy).toHaveBeenCalledWith("You caught Test Pokemon!")
            expect(testTrainer.belt[0].storedPokemon.name).toEqual("Test Pokemon")
            expect(testTrainer.pokemonCount).toEqual(1)
            expect(testTrainer.belt[1].storedPokemon.name).not.toEqual("Test Pokemon")
        });
        test('should capture subsequent Pokemon in a different Pokeball ', () => {
            const testTrainer = new Trainer ("Test Trainer")
            const testPokemon1 = new Pokemon ("Test Pokemon 1", 100, 50)
            const testPokemon2 = new Pokemon ("Test Pokemon 2", 100, 50)
            testTrainer.catch(testPokemon1)
            testTrainer.catch(testPokemon2)
            expect(logSpy).toHaveBeenCalled()
            expect(logSpy).toHaveBeenCalledTimes(2)
            expect(testTrainer.belt[0].storedPokemon.name).toEqual("Test Pokemon 1")
            expect(testTrainer.belt[1].storedPokemon.name).toEqual("Test Pokemon 2")
            expect(testTrainer.pokemonCount).toEqual(2)
        });
        test('should return a message if more Pokemon than the maximum of pokeballs are caught', () => {
            const testTrainer = new Trainer ("Test Trainer")
            const testPokemon = new Pokemon ("Test Pokemon", 100, 50)
            testTrainer.catch(testPokemon)
            testTrainer.catch(testPokemon)
            testTrainer.catch(testPokemon)
            testTrainer.catch(testPokemon)
            testTrainer.catch(testPokemon)
            testTrainer.catch(testPokemon)
            testTrainer.catch(testPokemon)
            expect(logSpy).toHaveBeenCalled()
            expect(logSpy).toHaveBeenCalledTimes(7)
            expect(logSpy).toHaveBeenCalledWith("Sorry, you don't have any empty pokeballs!")
        });
    });
    describe('GETPOKEMON', () => {
        test('should search trainer belt for the supplied Pokemon name and use the throw method', () => {
            const testTrainer = new Trainer ("Test Trainer")
            const testPokemon1 = new Pokemon ("Test Pokemon 1", 100, 50)
            const testPokemon2 = new Pokemon ("Test Pokemon 2", 100, 50)
            testTrainer.catch(testPokemon1)
            testTrainer.catch(testPokemon2)
            testTrainer.getPokemon(testPokemon2.name)
            expect(logSpy).toHaveBeenCalledTimes(3)
            expect(logSpy).toHaveBeenCalledWith(`\n\x1B[31;3mGO ${testPokemon2.name}!\x1B[m`)
        });
        test('should return the pokemon whos name has been supplied', () => {
            const testTrainer = new Trainer ("Test Trainer")
            const testPokemon1 = new Pokemon ("Test Pokemon 1", 100, 50)
            const testPokemon2 = new Pokemon ("Test Pokemon 2", 100, 50)
            testTrainer.catch(testPokemon1)
            testTrainer.catch(testPokemon2)
            const actual = testTrainer.getPokemon(testPokemon2.name)
            expect(actual.name).toEqual(testPokemon2.name)
            expect(actual.hitPoints).toEqual(testPokemon2.hitPoints)
            expect(actual.attackDamage).toEqual(testPokemon2.attackDamage)
            expect(actual.move).toEqual(testPokemon2.move)
            expect(actual).toBeInstanceOf(Pokemon)
        });
        test('should return a message if the supplied Pokemon name is not in the belt', () => {
            const testTrainer = new Trainer ("Test Trainer")
            const testPokemon1 = new Pokemon ("Test Pokemon 1", 100, 50)
            const testPokemon2 = new Pokemon ("Test Pokemon 2", 100, 50)
            testTrainer.catch(testPokemon1)
            testTrainer.getPokemon(testPokemon2.name)
            expect(logSpy).toHaveBeenCalledTimes(2)
            expect(logSpy).toHaveBeenCalledWith("Sorry, you don't have this pokemon in your belt")
        });
    });
    describe('ISBELTFULL', () => {
        test('should return true if belt is full ie. has a Pokemon in each pokeball', () => {
            const testTrainer = new Trainer('Test Trainer')
            const testCharmander = new Charmander()
            const testBulbasaur = new Bulbasaur()
            const testSquirtle = new Squirtle()
            testTrainer.catch(testCharmander)
            testTrainer.catch(testBulbasaur)
            testTrainer.catch(testSquirtle)
            const actual = testTrainer.isBeltFull()
            expect(actual).toEqual(true)
        });
        test('should return false if belt is not full', () => {
            const testTrainer = new Trainer('Test Trainer')
            const testCharmander = new Charmander()
            testTrainer.catch(testCharmander)
            const actual = testTrainer.isBeltFull()
            expect(actual).toEqual(false)
        });
    });
});
describe('BATTLE', () => {
    test('should take 2 trainers and 2 pokemon', () => {
        const trainer1 = new Trainer('Trainer 1')
        const trainer2 = new Trainer('Trainer 2')
        const testCharmander = new Charmander(44, 17)
        const testBulbasaur = new Bulbasaur(45, 16)
        const testBattle = new Battle(trainer1, trainer2, testCharmander, testBulbasaur)
        expect(testBattle.trainer1).toBeInstanceOf(Trainer)
        expect(testBattle.trainer2).toBeInstanceOf(Trainer)
        expect(testBattle.pokemon1).toBeInstanceOf(Charmander)
        expect(testBattle.pokemon2).toBeInstanceOf(Bulbasaur)
    });
    test('coinToss should randomly assign one of the Pokemon to current player and current Pokemon', () => {
        const trainer1 = new Trainer('Trainer 1')
        const trainer2 = new Trainer('Trainer 2')
        const testBattle = new Battle(trainer1, trainer2)
        testBattle.coinToss()
        expect(logSpy).toHaveBeenCalledTimes(1)
        expect(testBattle.currentPlayer.name).toContain("Trainer ")
        expect(testBattle.currentPlayer.name).not.toEqual("")
        expect(testBattle.currentPokemon).not.toEqual("")
    });
    test('switchTurn should alternate the player', () => {
        const trainer1 = new Trainer('Trainer 1')
        const trainer2 = new Trainer('Trainer 2')
        const testBattle = new Battle(trainer1, trainer2)
        testBattle.coinToss()
        const currentPlayer = testBattle.currentPlayer.name
        if (currentPlayer === "Trainer 1"){
            testBattle.switchTurn()
            expect(testBattle.currentPlayer.name).toEqual("Trainer 2")
            expect(logSpy).toHaveBeenCalledTimes(2)
            expect(logSpy).toHaveBeenCalledWith("Trainer 2's turn now...")
        } else {
            testBattle.switchTurn()
            expect(testBattle.currentPlayer.name).toEqual("Trainer 1")
            expect(logSpy).toHaveBeenCalledTimes(2)
            expect(logSpy).toHaveBeenCalledWith("Trainer 1's turn now...")
        }
    });
    describe('FIGHT', () => {
        test('should take the current Pokemon whos turn it is as the attacker and the other Pokemon as the defender', () => {
            const trainer1 = new Trainer('Trainer 1')
            const trainer2 = new Trainer('Trainer 2')
            const testCharmander = new Charmander(44, 17)
            const testBulbasaur = new Bulbasaur(45, 16)
            const testBattle = new Battle(trainer1, trainer2, testCharmander, testBulbasaur)
            testBattle.currentPlayer = trainer1 
            testBattle.currentPokemon = testCharmander
            testBattle.fight(testBattle.currentPokemon)
            expect(testBattle.attacker.name).toEqual("Charmander")
            expect(testBattle.attacker).toBeInstanceOf(Charmander)
            expect(testBattle.defender.name).toEqual("Bulbasaur")
            expect(testBattle.defender).toBeInstanceOf(Bulbasaur)
        });
        test('should deduct the attackers attack damage from the defenders hit points', () => {
            const trainer1 = new Trainer('Trainer 1')
            const trainer2 = new Trainer('Trainer 2')
            const testCharmander = new Charmander(44, 17)
            // is not effective or weak against
            const testEevee = new Eevee(55, 18)
            const testBattle = new Battle(trainer1, trainer2, testCharmander, testEevee)
            testBattle.currentPlayer = trainer1 
            testBattle.currentPokemon = testCharmander
            expect(testEevee.hitPoints).toEqual(55)
            testBattle.fight(testCharmander)
            expect(testEevee.hitPoints).not.toEqual(55)
            expect(logSpy).toHaveBeenCalledWith(`${testEevee.name} lost ${testCharmander.attackDamage}HP`)
            // expect(testEevee.hitPoints).toEqual(38)
            // expect(testCharmander.hitPoints).toEqual(44)
        });
        test('should multiple damage by 0.75 if the defender is strong against the attacker and return an effectiveness message', () => {
            const trainer1 = new Trainer('Trainer 1')
            const trainer2 = new Trainer('Trainer 2')
            const testSquirtle = new Squirtle(44, 16)
            // is effective against
            const testCharmander = new Charmander(44, 17)
            const testBattle = new Battle(trainer1, trainer2, testCharmander, testSquirtle)
            testBattle.currentPlayer = trainer1 
            testBattle.currentPokemon = testCharmander
            expect(testSquirtle.hitPoints).toEqual(44)
            testBattle.fight(testCharmander)
            expect(testSquirtle.hitPoints).not.toEqual(44)
            // expect(testSquirtle.hitPoints).toEqual(31.25)
            expect(logSpy).toHaveBeenCalledWith(`${testCharmander.name}'s ${testCharmander.move} was not very effective against Squirtle`)
        });
        test('should multiple damage by 1.25 if the defender is weak against the attacker and return an effectiveness message', () => {
            const trainer1 = new Trainer('Trainer 1')
            const trainer2 = new Trainer('Trainer 2')
            const testCharmander = new Charmander(44, 17)
            // is effective against
            const testBulbasaur = new Bulbasaur(45, 16)
            const testBattle = new Battle(trainer1, trainer2, testCharmander, testBulbasaur)
            testBattle.currentPlayer = trainer1 
            testBattle.currentPokemon = testCharmander
            testBattle.fight(testCharmander)
            expect(testBulbasaur.hitPoints).not.toEqual(45)
            // expect(testBulbasaur.hitPoints).toEqual(23.75)
            expect(logSpy).toHaveBeenCalledWith(`${testCharmander.name}'s ${testCharmander.move} was super effective against Bulbasaur!`)
        });
        test('should return the attacker as the winner if the defending Pokemon faints', () => {
            const trainer1 = new Trainer('Trainer 1')
            const trainer2 = new Trainer('Trainer 2')
            const testCharmander = new Charmander(44, 17)
            const testEevee = new Eevee(15, 18)
            const testBattle = new Battle(trainer1, trainer2, testCharmander, testEevee)
            testBattle.currentPlayer = trainer1 
            testBattle.currentPokemon = testCharmander
            expect(testEevee.hitPoints).toEqual(15)
            testBattle.fight(testCharmander)
            expect(logSpy).toHaveBeenCalledWith(`\n\x1B[91;1m${testEevee.name} fainted. \x1B[92;1m${trainer1.name}'s ${testCharmander.name} is the winner!\x1B[m\n`)
        });
        test('should end the players turn if the defending Pokemon has not fainted and the attacking and defending roles should swap', () => {
            const trainer1 = new Trainer('Trainer 1')
            const trainer2 = new Trainer('Trainer 2')
            const testCharmander = new Charmander(44, 17)
            const testEevee = new Eevee(55, 18)
            const testBattle = new Battle(trainer1, trainer2, testCharmander, testEevee)
            testBattle.currentPlayer = trainer1 
            testBattle.currentPokemon = testCharmander
            testBattle.fight(testCharmander)
            expect(testBattle.currentPlayer).not.toBe(trainer1)
            expect(testBattle.currentPokemon).not.toBe(testCharmander)
            expect(logSpy).toHaveBeenCalledWith(`${trainer2.name}'s turn now...`)
        });
        test('should declare the winner when a defending Pokemon faints', () => {
            const trainer1 = new Trainer('Trainer 1')
            const trainer2 = new Trainer('Trainer 2')
            const testCharmander = new Charmander(40, 10)
            const testEevee = new Eevee(40, 20)
            const testBattle = new Battle(trainer1, trainer2, testCharmander, testEevee)
            testBattle.currentPlayer = trainer1 
            testBattle.currentPokemon = testCharmander
            testBattle.fight(testCharmander)
            expect(testBattle.winner).toBe(`${testEevee.name}`)
            expect(testBattle.loser).toBe(`${testCharmander.name}`)
            expect(logSpy).toHaveBeenCalledTimes(12)
            expect(logSpy).toHaveBeenCalledWith(`\n\x1B[91;1m${testCharmander.name} fainted. \x1B[92;1m${trainer2.name}'s ${testEevee.name} is the winner!\x1B[m\n`)
        });
    });
});