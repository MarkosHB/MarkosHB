import fs from 'fs';
import { convert } from 'pdf-to-html';

const input = 'MarcosHidalgoCV.pdf';
const output = 'index.html';

convert(input, { format: 'html' })
  .then(html => {
    fs.writeFileSync(output, html);
    console.log('Conversion complete');
  })
  .catch(err => console.error('Error converting PDF:', err));
