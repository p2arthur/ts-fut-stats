import * as fs from 'fs';
import { dateStringToDate } from './utils';

export class CsvFileReader {
  public data: string[][] = [];

  public read(fileName: string): string[][] {
    const data = fs
      .readFileSync(fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): any => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5],
          row[6],
        ];
      });

    this.data = data;
    console.log(this.data);

    return this.data;
  }
}
