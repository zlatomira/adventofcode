import { isGamePossible, getPowerOfSet } from "./cubes";

describe("isGamePossible", () => {
    test("should return the game ID if the game is possible", () => {
        const game = "2 red, 3 blue; 1 green, 2 yellow";
        const gameId = 1;
        const result = isGamePossible(game, gameId);
        expect(result).toBe(gameId);
    });

    test("should return 0 if the game is not possible due to insufficient cubes", () => {
        const game = "22 red, 3 blue; 1 green, 5 yellow";
        const gameId = 2;
        const result = isGamePossible(game, gameId);
        expect(result).toBe(0);
    });
});

describe("getPowerOfSet", () => {
    test("should return the correct power when the game has multiple sets with the same colors but different counts", () => {
        const game = "2 red, 3 blue; 3 red, 2 blue";
        const expectedPower = 9;
        const result = getPowerOfSet(game);
        expect(result).toBe(expectedPower);
    });
    test("should return the correct power when the game has only one set", () => {
        const game = "2 red, 3 blue";
        const expectedPower = 6;
        const result = getPowerOfSet(game);
        expect(result).toBe(expectedPower);
    });
});

