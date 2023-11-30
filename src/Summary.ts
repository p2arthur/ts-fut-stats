import { MatchData } from './MatchData';
import { AverageGoalsAnalyzer } from './analyzers/AverageGoalsAnalyzer';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { ConsoleReporter } from './reporters/ConsoleReporter';
import { HtmlReporter } from './reporters/HtmlReporter';

export interface Analyzer {
  run(matches: MatchData[], team?: string): string;
}

export interface OutputTarget {
  print(report: string, fileName?: string): void;
}

type ReportFormat = {
  reportFormat: 'html' | 'console';
};
type AnalysisType = {
  analysisType: 'wins' | 'averageGoals';
};

export class Summary {
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  static reportInstance(
    { reportFormat }: ReportFormat,
    { analysisType }: AnalysisType
  ): Summary {
    const winsAnalyzer = new WinsAnalyzer();
    const averageGoalsAnalyzer = new AverageGoalsAnalyzer();
    const consoleReporter = new ConsoleReporter();
    const htmlReporter = new HtmlReporter();

    if (reportFormat === 'console' && analysisType === 'wins') {
      return new Summary(winsAnalyzer, consoleReporter);
    } else if (reportFormat === 'console' && analysisType === 'averageGoals') {
      return new Summary(averageGoalsAnalyzer, consoleReporter);
    } else if (reportFormat === 'html' && analysisType === 'wins') {
      return new Summary(winsAnalyzer, htmlReporter);
    } else if (reportFormat === 'html' && analysisType === 'averageGoals') {
      return new Summary(averageGoalsAnalyzer, htmlReporter);
    } else {
      return new Summary(averageGoalsAnalyzer, consoleReporter);
    }
  }

  public buildAndPrintReport(
    matches: MatchData[],
    team?: string,
    fileName?: string
  ): void {
    const report = this.analyzer.run(matches, team);
    this.outputTarget.print(report, fileName);
  }
}
