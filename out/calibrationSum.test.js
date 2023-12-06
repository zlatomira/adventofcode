"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calibrationSum_1 = require("./calibrationSum"); // Update the path accordingly
describe("calculateSumOfCalibrations ", function () {
    test("calculateSumOfCalibrations with 2 digitals in strings", function () {
        var lines = ["btbcs2rsrcrshzp8six89", "5tg578fldlcxponefourtwonet"];
        var expectedOutput = 29 + 51;
        expect((0, calibrationSum_1.calculateSumOfCalibrations)(lines)).toBe(expectedOutput);
    });
    test("calculateSumOfCalibrations with 2 digitals in first string and one in second", function () {
        var lines = ["btbcs2rsrcrshzp8six89", "tgfldlcxpone"];
        var expectedOutput = 29 + 11;
        expect((0, calibrationSum_1.calculateSumOfCalibrations)(lines)).toBe(expectedOutput);
    });
    test("calculateSumOfCalibrations with 2 digitals in first string and 0 in second", function () {
        var lines = ["btbcs2rsrcrshzp8six89", "tgfldlcx"];
        var expectedOutput = 29 + 0;
        expect((0, calibrationSum_1.calculateSumOfCalibrations)(lines)).toBe(expectedOutput);
    });
    test("calculateSumOfCalibrations with 0 digits in both strings", function () {
        var lines = ["btbhijj", "tgfldlcx"];
        var expectedOutput = 0 + 0;
        expect((0, calibrationSum_1.calculateSumOfCalibrations)(lines)).toBe(expectedOutput);
    });
    test("calculateSumOfCalibrations with numerical words", function () {
        var lines = ["btbcs2rsrcrshzp8six89", "5tg578fldlcxponeoneight"];
        var expectedOutput = 29 + 58;
        expect((0, calibrationSum_1.calculateSumOfCalibrations)(lines)).toBe(expectedOutput);
    });
    test("calculateSumOfCalibrations with numerical oneafter another", function () {
        var lines = ["btbcs2rsrcrshzp8six89", "tgfldlcxponefouroneight"];
        var expectedOutput = 29 + 18;
        expect((0, calibrationSum_1.calculateSumOfCalibrations)(lines)).toBe(expectedOutput);
    });
});
//# sourceMappingURL=calibrationSum.test.js.map