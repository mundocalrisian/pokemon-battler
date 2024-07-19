const {Pokemon} = require('../pokemon')

describe('POKEMON', () => {
    describe('CONSTRUCTOR', () => {
        test('should create a new pokemon with appropriate properties', async () => {
            const testPokemon = new Pokemon("Tester", 100, 25, "Test Move")
            const expectedPokemon = {
                name: "Tester",
                hitPoints: 100,
                attackDamage: 25,
                move: "Test Move"
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
    });
    describe('METHODS', () => {
        describe('TAKEDAMAGE', () => {
            test('should reduce the hitpoints of a pokemon by a supplied number', () => {
                const testPokemon = new Pokemon("Tester", 100, 25)
                testPokemon.takeDamage(50)
                expect(testPokemon.hitPoints).toEqual(50)
            });
        });
        describe('USEMOVE', () => {
            test('should return the pokemon attack damage', () => {
                const testPokemon = new Pokemon("Tester", 100, 50, "testMove")
                const output = testPokemon.useMove()
                expect(output).toEqual(50)
            });
            test('should return a console log of what move was used', () => {
                const testPokemon = new Pokemon("Tester", 100, 25, "testMove")
                const logSpy = jest.spyOn(global.console, 'log');
                testPokemon.useMove()
                expect(logSpy).toHaveBeenCalled()
                expect(logSpy).toHaveBeenCalledWith("Tester used testMove!")
            });
        });
        describe('HASFAINTED', () => {
            test('should return true when a pokemon has 0 hitPoints', () => {
                const testPokemon = new Pokemon("Tester", 100, 25)
                testPokemon.takeDamage(100)
                const output = testPokemon.hasFainted()
                expect(output).toEqual(true)
            });
            test('should return false when a pokemons hitPoints is not 0', () => {
                const testPokemon = new Pokemon("Tester", 100, 25)
                const output = testPokemon.hasFainted()
                expect(output).toEqual(false)
            });
        });
    });
});