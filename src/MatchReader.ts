import { CsvFileReader } from './CsvFileReader';
import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

export interface DataReader {
  read(fileName: string): string[][];
  data: string[][];
}

type FileReaderFormat = {
  fileReaderFormat: 'csv';
};

export class MatchReader {
  public matches: MatchData[] = [];

  constructor(private reader: DataReader) {}

  static newDataReader({ fileReaderFormat }: FileReaderFormat) {
    const csvFileReader = new CsvFileReader();
    if (fileReaderFormat === 'csv') {
      return new MatchReader(csvFileReader);
    } else {
      return new MatchReader(csvFileReader);
    }
  }

  load(fileName: string): MatchData[] {
    this.reader.read(fileName);
    this.matches = this.reader.data.map((row) => [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ]);

    return this.matches;
  }
}
