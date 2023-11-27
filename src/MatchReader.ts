import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export interface DataReader {
  read(fileName: string): string[][];
  data: string[][];
}

export class MatchReader {
  public matches: MatchData[] = [];

  constructor(private reader: DataReader) {}

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
