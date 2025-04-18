const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  const pdfFile = path.join(__dirname, '../myfile.pdf');
  const outputFile = path.join(__dirname, '../output.html');

  // Check if PDF exists
  if (!fs.existsSync(pdfFile)) {
    return res.status(404).send('PDF file not found.');
  }

  // Run pdf2htmlEX to convert PDF to HTML
  exec(`pdf2htmlEX ${pdfFile} ${outputFile}`, (err, stdout, stderr) => {
    if (err) {
      return res.status(500).send(`Error: ${stderr}`);
    }
    const html = fs.readFileSync(outputFile, 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });
};
