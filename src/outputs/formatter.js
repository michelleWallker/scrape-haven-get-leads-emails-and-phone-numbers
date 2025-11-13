onst fs = require('fs');
const path = require('path');

function ensureDirSync(dirPath) {
if (!fs.existsSync(dirPath)) {
fs.mkdirSync(dirPath, { recursive: true });
}
}

function toCsvRow(values) {
return values
.map((v) => {
if (v === null || v === undefined) return '';
const s = String(v);
if (/[",\n]/.test(s)) {
return `"${s.replace(/"/g, '""')}"`;
}
return s;
})
.join(',');
}

function toCsv(data) {
if (!Array.isArray(data) || data.length === 0) {
return '';
}

const headers = [
'name',
'address',
'phone_number',
'email',
'website',
'facebook',
'instagram',
'twitter',
'linkedin',
'reviews_average',
];

const lines = [];
lines.push(toCsvRow(headers));

for (const item of data) {
const row = headers.map((h) =>
Object.prototype.hasOwnProperty.call(item, h) ? item[h] : ''
);
lines.push(toCsvRow(row));
}

return lines.join('\n');
}

/**
* Saves results to disk in the requested formats.
*
* @param {Array<object>} results
* @param {{baseDir: string, outputDir: string, formats: string[]}} options
*/
async function saveResults(results, options) {
const baseDir = options.baseDir;
const outputDir = path.isAbsolute(options.outputDir)
? options.outputDir
: path.join(baseDir, options.outputDir);

ensureDirSync(outputDir);

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const formats = Array.isArray(options.formats) ? options.formats : ['json'];

if (formats.includes('json')) {
const jsonPath = path.join(outputDir, `scrape_results_${timestamp}.json`);
await fs.promises.writeFile(
jsonPath,
JSON.stringify(results, null, 2),
'utf8'
);
console.log(`Saved JSON results to ${jsonPath}`);
}

if (formats.includes('csv')) {
const csvPath = path.join(outputDir, `scrape_results_${timestamp}.csv`);
const csv = toCsv(results);
await fs.promises.writeFile(csvPath, csv, 'utf8');
console.log(`Saved CSV results to ${csvPath}`);
}
}

module.exports = {
saveResults,
};