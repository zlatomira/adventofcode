const fs = require('fs');
const filePath = "./tasks/day4/input.txt";
let pileWorth = 0;

export function calculatePoints(matches)  {
	if (matches.length === 0) {
		return 0;
	}
	let points = 1;
	for (let i = 0; i < matches.length; i++) {
	  	points *= i === 0 ? 1 : 2;
	}
	return points;
}
fs.readFile(filePath, 'utf8', (err, data) => {
	if (err) {
		console.error('Error reading the file:', err);
		return;
	}
	const lines = data.split('\n');
	lines.forEach(line => {
		const splitStrings = line.split(":");
		const onlyNumbers = splitStrings[1].split("|")
		const winningNumbers = onlyNumbers[0].trim().split(/\s+/).map(Number);
		const numbersToCompare = onlyNumbers[1].trim().split(/\s+/).map(Number);
		const commonNumbers = winningNumbers.filter(num => numbersToCompare.includes(num));
		pileWorth += calculatePoints(commonNumbers);
	});
	console.log("pileWorth:", pileWorth);
});