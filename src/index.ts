import * as fs from 'fs';
console.log('Hello world');

const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' });

console.log(matches);
