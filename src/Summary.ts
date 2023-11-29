import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[], team?: string): string;
}

export interface OutputTarget {
  print(report: string, fileName?: string): void;
}

export class Summary {
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  public buildAndPrintReport(
    matches: MatchData[],
    team?: string,
    fileName?: string
  ): void {
    const report = this.analyzer.run(matches, team);
    this.outputTarget.print(report, fileName);
  }
}
