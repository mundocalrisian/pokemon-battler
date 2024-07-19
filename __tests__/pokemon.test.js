const {Pokemon, FireType, GrassType, WaterType, NormalType} = require('../pokemon')

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