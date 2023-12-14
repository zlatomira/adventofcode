import {
    isNumberAdjacentToSymbol,
    isSymbol,
    processNumbersAdjacentToSymbol,
} from './engine';

describe("isNumberAdjacentToSymbol", () => {
	test("should return true when a symbol is adjacent", () => {
        const rows = ['123', '4*6', '789'];
        const result = isNumberAdjacentToSymbol(rows, 0, 0);
        expect(result).toBe(true);
    });

    test("should return false when no symbol is adjacent", () => {
        const rows = ['123', '456', '789'];
        const result = isNumberAdjacentToSymbol(rows, 0, 0);
        expect(result).toBe(false);
    });

    test("should return true when a symbol is diagonally adjacent", () => {
        const rows = ['1*3', '456', '789'];
        const result = isNumberAdjacentToSymbol(rows, 0, 0);
        expect(result).toBe(true);
    });
});

describe('isSymbol', () => {
    test("should return true when cell contains a symbol", () => {
        const rows = ['123', '4*6', '789'];
        expect(isSymbol(rows, 1, 1)).toBe(true);
    });

    test("should return false when cell contains a digit", () => {
        const rows = ['123', '456', '789'];
        expect(isSymbol(rows, 1, 1)).toBe(false);
    });

    test("should return false when cell contains a dot", () => {
        const rows = ['1.3', '456', '789'];
        expect(isSymbol(rows, 0, 1)).toBe(false);
    });
});