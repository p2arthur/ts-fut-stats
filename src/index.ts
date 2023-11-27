import { CsvFileReader } from './CsvFileReader';

enum MatchResult {
  homeWin = 'H',
  awayWin = 'A',
  draw = 'D',
}

const csvFileReader = new CsvFileReader();

const matches = csvFileReader.read('football.csv');

let manUnitedWins = 0;

for (let match of matches) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.homeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.awayWin)
  ) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} times`);
