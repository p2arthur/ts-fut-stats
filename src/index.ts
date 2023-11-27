import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './inheritance-refactor/MatchReader';
import { MatchResult } from './MatchResult';

const matchReader = new MatchReader();

const matches = matchReader.read('football.csv');

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
