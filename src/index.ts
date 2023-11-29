import { AverageGoalsAnalyzer } from './analyzers/AverageGoalsAnalyzer';
import { ConsoleReporter } from './reporters/ConsoleReporter';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { HtmlReporter } from './reporters/HtmlReporter';

//Create an object that satisfies the 'DataReader interface' to be used on the MatchReader - Information source
const csvFileReader = new CsvFileReader();

const matchReader = new MatchReader(csvFileReader);
matchReader.load('football.csv'); //parsed data in MatchResult format

const averageGoalAnalyzer = new AverageGoalsAnalyzer();
const winsAnalyzer = new WinsAnalyzer();
const consoleReport = new ConsoleReporter();
const htmlReport = new HtmlReporter();

const summaryBuilder = new Summary(averageGoalAnalyzer, consoleReport);
const summaryBuilder2 = new Summary(winsAnalyzer, consoleReport);
const summaryBuilder3 = new Summary(winsAnalyzer, htmlReport);
const summaryBuilder4 = new Summary(averageGoalAnalyzer, htmlReport);

summaryBuilder.buildAndPrintReport(matchReader.matches);
summaryBuilder2.buildAndPrintReport(matchReader.matches, 'Man City');

summaryBuilder3.buildAndPrintReport(
  matchReader.matches,
  'Man United',
  'wins-reports.html'
);
summaryBuilder4.buildAndPrintReport(
  matchReader.matches,
  '_',
  'average-goals-reports.html'
);
