const {Pokemon} = require('../pokemon')

describe('POKEMON', () => {
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