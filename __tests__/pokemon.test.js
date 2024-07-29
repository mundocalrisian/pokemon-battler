const {Pokemon} = require('../classes/pokemon');
const { FireType, Charmander } = require('../classes/fire-type');
const { GrassType, Bulbasaur } = require('../classes/grass-type');
const { WaterType, Squirtle } = require('../classes/water-type');
const { NormalType, Eevee } = require('../classes/normal-type');
const { Pokeball } = require('../classes/pokeball');

describe('POKEMON CLASS', () => {
    test('should create a new pokemon with appropriate properties', async () => {
        const testPokemon = new Pokemon("Tester", 100, 25, "test move")
        const expectedPokemon = {
            name: "Tester",
            hitPoints: 100,
            attackDamage: 25,
            move: "test move"
        }
        expect(testPokemon).toMatchObject(expectedPokemon)
    });
    test('should return a default move of tackle when no move is supplied', () => {
        const testPokemon = new Pokemon("Tester", 100, 25)
        const expectedPokemon = {
            name: "Tester",
            hitPoints: 100,
            attackDamage: 25,
            move: "tackle"
        }
        expect(testPokemon).toMatchObject(expectedPokemon)
    }); 
    test('takeDamage: should reduce the hitpoints of a pokemon by a supplied number', () => {
        const testPokemon = new Pokemon("Tester", 100, 25)
        testPokemon.takeDamage(50)
        expect(testPokemon.hitPoints).toEqual(50)
    });
    test('useMove: should return the pokemon attack damage', () => {
        const testPokemon = new Pokemon("Tester", 100, 50, "test move")
        const output = testPokemon.useMove()
        expect(output).toEqual(50)
    });
    test('useMove: should return a console log of what move was used', () => {
        const testPokemon = new Pokemon("Tester", 100, 25, "test move")
        const logSpy = jest.spyOn(global.console, 'log');
        testPokemon.useMove()
        expect(logSpy).toHaveBeenCalled()
        expect(logSpy).toHaveBeenCalledWith("Tester used test move!")
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
        test('should create a Charmander pokemon with appropriate properties', () => {
            const testCharmander = new Charmander(44, 17)
            const expectedCharmander = {
                name: "Charmander",
                hitPoints: 44,
                attackDamage: 17,
                move: "Ember",
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
        test('should create a Squirtle pokemon with appropriate properties', () => {
            const testSquirtle = new Squirtle(44, 16)
            const expectedSquirtle = {
                name: "Squirtle",
                hitPoints: 44,
                attackDamage: 16,
                move: "Bubble",
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
        test('should create a Bulbasaur pokemon with appropriate properties', () => {
            const testBulbasaur = new Bulbasaur(45, 16)
            const expectedBulbasaur = {
                name: "Bulbasaur",
                hitPoints: 45,
                attackDamage: 16,
                move: "Vine Whip",
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
        test('should create an Eevee pokemon with appropriate properties', () => {
            const testEevee = new Eevee(55, 12)
            const expectedEevee = {
                name: "Eevee",
                hitPoints: 55,
                attackDamage: 12,
                move: "Tackle",
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
            
        });
        test('should return a message and not capture a supplied Pokemon if the Pokeball is not empty', () => {
            
        });
        test('should return the stored Pokemon when no Pokemon is supplied and there is a Pokemon stored', () => {
            
        });
        test('should return a message when no Pokemon is supplied and there is no Pokemon stored', () => {
            
        });
    });
    describe('ISEMPTY', () => {
        test('should return true if a pokemon is stored in the Pokeball', () => {
            
        });
        test('should return false if the Pokeball is empty', () => {
            
        });
    });
    describe('CONTAINS', () => {
        test('should return the name of the Pokemon if a Pokemon is stored', () => {
            
        });
        test('should return a message if the Pokeball storeage is emptty', () => {
            
        });
    });
});