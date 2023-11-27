import * as fs from 'fs';
import { DataReader } from './MatchReader';

export class CsvFileReader implements DataReader {
  public data: string[][] = [];

  public read(fileName: string) {
    const data = fs
      .readFileSync(fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));

    this.data = data;
    return this.data;
  }
}
