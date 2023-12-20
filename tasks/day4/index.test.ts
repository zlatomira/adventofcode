import { calculatePoints } from './index';

describe("calculatePoints", () => {
    test("should return 0 when matches array is empty", () => {
        const result = calculatePoints([]);
        expect(result).toBe(0);
    });

    test("should return 8 when 4 matches", () => {
        const result = calculatePoints(["2", "3", "4", "8"]);
        expect(result).toBe(8);
    });

	test("should return 16 when 5 matches", () => {
        const result = calculatePoints(["2", "3", "4", "8", "1"]);
        expect(result).toBe(16);
    });

});