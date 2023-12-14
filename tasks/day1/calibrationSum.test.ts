import { calculateSumOfCalibrations } from "./calibrationSum";

describe("calculateSumOfCalibrations ", () => {
  test("calculateSumOfCalibrations with 2 digitals in strings", () => {
    const lines = ["btbcs2rsrcrshzp8six89", "5tg578fldlcxponefourtwonet"];
    const expectedOutput = 29 + 51;
  
    expect(calculateSumOfCalibrations(lines)).toBe(expectedOutput);
  });
  test("calculateSumOfCalibrations with 2 digitals in first string and one in second", () => {
    const lines = ["btbcs2rsrcrshzp8six89", "tgfldlcxpone"];
    const expectedOutput = 29 + 11;
  
    expect(calculateSumOfCalibrations(lines)).toBe(expectedOutput);
  });
  test("calculateSumOfCalibrations with 2 digitals in first string and 0 in second", () => {
    const lines = ["btbcs2rsrcrshzp8six89", "tgfldlcx"];
    const expectedOutput = 29 + 0;
  
    expect(calculateSumOfCalibrations(lines)).toBe(expectedOutput);
  });
  test("calculateSumOfCalibrations with 0 digits in both strings", () => {
    const lines = ["btbhijj", "tgfldlcx"];
    const expectedOutput = 0 + 0;
  
    expect(calculateSumOfCalibrations(lines)).toBe(expectedOutput);
  });
  test("calculateSumOfCalibrations with numerical words", () => {
    const lines = ["btbcs2rsrcrshzp8six89", "5tg578fldlcxponeoneight"];
    const expectedOutput = 29 + 58;
  
    expect(calculateSumOfCalibrations(lines)).toBe(expectedOutput);
  });
  test("calculateSumOfCalibrations with numerical one after another", () => {
    const lines = ["btbcs2rsrcrshzp8six89", "tgfldlcxponefouroneight"];
    const expectedOutput = 29 + 18;
  
    expect(calculateSumOfCalibrations(lines)).toBe(expectedOutput);
  });
});