import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  public buildAndPrintReport(matchData: MatchData[]): void {
    const report = this.analyzer.run(matchData);
    this.outputTarget.print(report);
  }
}
