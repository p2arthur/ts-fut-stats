import * as fs from 'fs';

export abstract class CsvFileReader<T> {
  public data: T[] = [];

  abstract mapRow(row: string[]): T;

  public read(fileName: string): T[] {
    const data = fs
      .readFileSync(fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row) => this.mapRow(row));

    console.log(data);
    return data;
  }
}
