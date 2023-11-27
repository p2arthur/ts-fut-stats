import * as fs from 'fs';

export class CsvFileReader {
  public data: string[][] = [];

  public read(fileName: string): string[][] {
    const data = fs
      .readFileSync(fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));

    this.data = data;
    console.log(this.data);
    return this.data;
  }
}
