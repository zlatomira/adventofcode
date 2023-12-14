const fs = require('fs');
const filePath = "./tasks/day2/cube_games.txt";
let gameIds = [];
let powerOfSets = 0;
const availableCubs = {
	"red": 12,
	"green": 13,
	"blue": 14
};

export function getPowerOfSet(game: string): number {
	let sets = game.split(';');
	let colorCounts = {};
	let result = 1;
	sets.forEach(set => {
		set.trim();
		let colorPairs = set.split(',');
		colorPairs.forEach(pair => {
			let [count, color] = pair.trim().split(' ');
			const intCount = parseInt(count);
			if (colorCounts.hasOwnProperty(color)) {
				colorCounts[color] = Math.max(intCount, colorCounts[color]);
			} else {
				colorCounts[color] = intCount;
			}
		});
	});
	for (let key in colorCounts) {
		if (colorCounts.hasOwnProperty(key)) {
			result *= colorCounts[key];
		}
	}
	return result;
};

export function isGamePossible(game: string, gameId: number): number {
	const subsets = game.split(';');
	for (const s of subsets) {
		const colorCountPairs = s.split(',').map(pair => pair.trim().split(' '));
		for (const [countString, color] of colorCountPairs) {
			const count = parseInt(countString) || 0;
			if (availableCubs[color] !== undefined) {
				if (availableCubs[color] < count) {
					return 0;
				}
			}
		}
	}
	return gameId;
};

function getGameId(line) {
	const pattern = /Game (\d+):/;
	const match = line.match(pattern);
	if (match) {
		const gameId = match[1];
		return parseInt(gameId);
	} else {
		return 0;
	}
};

export function processLine(line): string {
	let game = line.indexOf(':');
	game = line.substring(game + 1).trim();
	return game;
}

fs.readFile(filePath, 'utf8', (err, data) => {
	if (err) {
		console.error('Error reading the file:', err);
		return;
	}
	const lines = data.split('\n');
	lines.forEach(line => {
		const trimmedLine = line.trim();
		if (trimmedLine.length > 0) {
			const gameId = getGameId(trimmedLine);
			const game = processLine(trimmedLine);
			gameIds.push(isGamePossible(game, gameId));
			powerOfSets += getPowerOfSet(game);
		}
	});
	const sum = gameIds.reduce((acc, current) => acc + current, 0);
	console.log("sum ", sum);
	console.log("powerOfSets ", powerOfSets);
});
