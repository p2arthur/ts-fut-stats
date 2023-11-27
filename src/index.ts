import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader();

const matches = csvFileReader.read('football.csv');
console.log(matches[0][0]);

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
