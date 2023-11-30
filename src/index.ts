import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

//Create an object that satisfies the 'DataReader interface' to be used on the MatchReader - Information source
const matchReader = MatchReader.newDataReader({ fileReaderFormat: 'csv' });
matchReader.load('football.csv'); //parsed data in MatchResult format

//Create report instances with report format and analysis type for each type of report
const winsSummaryWithConsoleReport = Summary.reportInstance(
  { reportFormat: 'console' },
  { analysisType: 'wins' }
);
const averageGoalsWithConsoleReport = Summary.reportInstance(
  { reportFormat: 'console' },
  { analysisType: 'averageGoals' }
);
const winsSummaryWithHtmlReport = Summary.reportInstance(
  { reportFormat: 'html' },
  { analysisType: 'wins' }
);
const averageGoalsSummaryWithHtmlReport = Summary.reportInstance(
  { reportFormat: 'html' },
  { analysisType: 'averageGoals' }
);

//Generate reports with provided options
averageGoalsWithConsoleReport.buildAndPrintReport(matchReader.matches);
winsSummaryWithConsoleReport.buildAndPrintReport(
  matchReader.matches,
  'Man City'
);

winsSummaryWithHtmlReport.buildAndPrintReport(
  matchReader.matches,
  'Man United',
  'wins-report.html'
);

averageGoalsSummaryWithHtmlReport.buildAndPrintReport(
  matchReader.matches,
  '',
  'average-goals-report.html'
);
