import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

//Create an object that satisfies the 'DataReader interface' to be used on the MatchReader
const csvFileReader = new CsvFileReader();

const matchReader = new MatchReader(csvFileReader);
matchReader.load('football.csv');
let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.homeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.awayWin)
  ) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} times`);
