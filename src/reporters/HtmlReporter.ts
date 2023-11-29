import { OutputTarget } from '../Summary';
import * as fs from 'fs';

export class HtmlReporter implements OutputTarget {
  print(report: string, fileName: string): void {
    const htmlMarkup = `
<div>
<h1>Analysis Output:</h1>
<h2>${report}</h2>
</div>
`;

    fs.writeFileSync(fileName, htmlMarkup);
  }
}
