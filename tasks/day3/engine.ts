const fs = require('fs');
const filePath = "./tasks/day3/engine.txt";

let sumPartNumbers = 0;
let sumPartGears = 0;
const directions = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];

function isDigitOrDot(c) {
    return c >= '0' && c <= '9' || c == '.';
}
export function isSymbol(rows, rowIndex, colIndex) {
    if (rowIndex < 0 || rowIndex >= rows.length || colIndex < 0 || colIndex >= rows[rowIndex].length) {
        return false;
    }
    return !isDigitOrDot(rows[rowIndex][colIndex]);
}

function isGear(row, r, c) {
    return row[r][c] === "*";
}

export function isNumberAdjacentToSymbol(rows: Array<string>, rowIndex: number, colIndex: number): boolean {
    for (const [dx, dy] of directions) {
        if (isSymbol(rows, rowIndex + dx, colIndex + dy)) {
            return true;
        }
    }

    return false;
}

interface NumberCollection {
    combinedNumber: string;
    nextIndex: number;
}

function collectNumber(row: string, position: number): NumberCollection {
    let combinedNumber = "";
    let nextIndex = position + 1;
    for (let i = position; i >= 0; i--) {
        const char = row[i];
        if (/\d/.test(char)) {
            combinedNumber = char + combinedNumber;
        } else {
            break;
        }
    }
    
    for (let i = position + 1; i < row.length; i++) {
        const char = row[i];
        
        if (/\d/.test(char)) {
            combinedNumber += char;
            nextIndex++;
        } else {
            break;
        }
    }
    
    return {combinedNumber, nextIndex};
}

export function processNumbersAdjacentToSymbol(row: string, rowIndex: number, rows: string[]) {
    for (let j = 0; j < row.length; j++) {
        const currentChar = row[j];
        if (!isNaN(parseInt(currentChar)) && isNumberAdjacentToSymbol(rows, rowIndex, j)) {
            const { combinedNumber, nextIndex} = collectNumber(row, j);
            j = nextIndex;
            sumPartNumbers += Number(combinedNumber);
        }
    }
}

export function adjacentNumbers(rows: string[], rowIndex: number, colIndex: number): string[] {
    let result: string[] = [];
    const positions = new Set();
    for (const [dx, dy] of directions) {
        const [neighbourR, neighbourC] = [rowIndex + dx, colIndex + dy];
        if (!isNaN(parseInt(rows[rowIndex + dx][colIndex + dy]))) {
            const { combinedNumber} = collectNumber(rows[neighbourR], neighbourC);
            const positionString = `${neighbourR},${combinedNumber}`;
            if (!positions.has(positionString)) {
                positions.add(positionString);
                result.push(combinedNumber);
            }
        }
    }
    return result;
}

export function processGearAdjacentToTwoNumbers(row: string, rowIndex: number, rows: string[]) {
    for (let j = 0; j < row.length; j++) {
        if (isGear(rows, rowIndex, j)) {
            const arrayOfNumbers = adjacentNumbers(rows, rowIndex,j);
            if (arrayOfNumbers.length === 2) {
                sumPartGears += arrayOfNumbers.reduce((acc, currentNumber) => acc * parseInt(currentNumber), 1);
            }
        }
    }
}

fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const rows = data.split('\n').map((n) => n.trim());
    rows.forEach(function (row, i) {
        processNumbersAdjacentToSymbol(row, i, rows);
        processGearAdjacentToTwoNumbers(row, i, rows);
    });
    console.log("sumPartNumbers:", sumPartNumbers);
    console.log("sumPartGears:", sumPartGears);
});
