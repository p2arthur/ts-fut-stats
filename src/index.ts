import { AverageGoalsAnalyzer } from './AverageGoalsAnalyzer';
import { ConsoleReport } from './ConsoleReport';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

//Create an object that satisfies the 'DataReader interface' to be used on the MatchReader - Information source
const csvFileReader = new CsvFileReader();

const matchReader = new MatchReader(csvFileReader);
matchReader.load('football.csv'); //parsed data in MatchResult format

const averageGoalAnalyzer = new AverageGoalsAnalyzer();
const consoleReport = new ConsoleReport();

const summaryBuilder = new Summary(averageGoalAnalyzer, consoleReport);

summaryBuilder.buildAndPrintReport(matchReader.matches);
