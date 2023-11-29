import { MatchData } from './MatchData';
import { Analyzer } from './Summary';

export class AverageGoalsAnalyzer implements Analyzer {
  run(matchData: MatchData[]): string {
    let accumulator = 0;

    for (let match of matchData) {
      if (match[3] || match[4]) {
        accumulator += match[3];
        accumulator += match[4];
      }
    }

    const average = accumulator / matchData.length;

    return `The average goals on this championship is ${average.toFixed(2)}`;
  }
}
