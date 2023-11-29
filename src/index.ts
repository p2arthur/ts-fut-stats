import { AverageGoalsAnalyzer } from './AverageGoalsAnalyzer';
import { ConsoleReport } from './ConsoleReport';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalyzer } from './WinsAnalyzer';

//Create an object that satisfies the 'DataReader interface' to be used on the MatchReader - Information source
const csvFileReader = new CsvFileReader();

const matchReader = new MatchReader(csvFileReader);
matchReader.load('football.csv'); //parsed data in MatchResult format

const averageGoalAnalyzer = new AverageGoalsAnalyzer();
const winsAnalyzer = new WinsAnalyzer('Man City');
const consoleReport = new ConsoleReport();

const summaryBuilder = new Summary(averageGoalAnalyzer, consoleReport);
const summaryBuilder2 = new Summary(winsAnalyzer, consoleReport);

summaryBuilder.buildAndPrintReport(matchReader.matches);
summaryBuilder2.buildAndPrintReport(matchReader.matches);
