import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analyzer } from '../Summary';

export class WinsAnalyzer implements Analyzer {
  constructor(private team: string) {}
  run(matches: MatchData[]): string {
    let counter = 0;
    console.log(this.team);
    for (let match of matches) {
      if (
        (match[1] === this.team && match[5] === MatchResult.homeWin) ||
        (match[2] === this.team && match[5] === MatchResult.awayWin)
      ) {
        counter++;
      }
    }

    return `${this.team} won ${counter} times`;
  }
}
