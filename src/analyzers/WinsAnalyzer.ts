import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analyzer } from '../Summary';

export class WinsAnalyzer implements Analyzer {
  run(matches: MatchData[], team: string): string {
    let counter = 0;
    console.log(team);
    for (let match of matches) {
      if (
        (match[1] === team && match[5] === MatchResult.homeWin) ||
        (match[2] === team && match[5] === MatchResult.awayWin)
      ) {
        counter++;
      }
    }

    return `${team} won ${counter} times`;
  }
}
