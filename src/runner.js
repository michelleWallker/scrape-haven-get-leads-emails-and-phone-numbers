onst path = require('path');
const fs = require('fs');
const { searchBusinesses } = require('./extractors/maps_parser');
const { scanWebsite } = require('./extractors/website_scanner');
const { saveResults } = require('./outputs/formatter');

async function loadJsonFile(filePath) {
const resolved = path.resolve(filePath);
const raw = await fs.promises.readFile(resolved, 'utf8');
return JSON.parse(raw);
}

async function enrichBusinesses(businesses, settings) {
const enriched = [];
const concurrency = settings.concurrency || 5;
let index = 0;

async function worker() {
while (index < businesses.length) {
const currentIndex = index++;
const biz = businesses[currentIndex];

try {
const enrichedBiz = await scanWebsite(biz, {
timeoutMs: settings.http?.timeoutMs || 10000,
});
enriched[currentIndex] = enrichedBiz;
} catch (err) {
console.error(`Error enriching business "${biz.name}":`, err.message || err);
enriched[currentIndex] = biz;
}
}
}

const workers = [];
for (let i = 0; i < concurrency; i++) {
workers.push(worker());
}

await Promise.all(workers);
return enriched;
}

async function main() {
const baseDir = path.resolve(__dirname, '..');

const settingsPath = path.join(baseDir, 'src', 'config', 'settings.example.json');
const inputsPath = path.join(baseDir, 'data', 'inputs.sample.json');

const settings = await loadJsonFile(settingsPath);
const inputs = await loadJsonFile(inputsPath);

if (!Array.isArray(inputs) || inputs.length === 0) {
console.error('No input search tasks found in data/inputs.sample.json');
process.exitCode = 1;
return;
}

const allBusinesses = [];
for (const task of inputs) {
try {
console.log(
`Searching businesses for query="${task.query}" in location="${task.location}"...`
);
const results = await searchBusinesses(task, settings);
console.log(`  -> Found ${results.length} businesses`);
allBusinesses.push(...results);
} catch (err) {
console.error(
`Failed to search businesses for query "${task.query}" in location "${task.location}":`,
err.message || err
);
}
}

if (allBusinesses.length === 0) {
console.warn('No businesses to process. Exiting.');
return;
}

console.log(`Enriching ${allBusinesses.length} businesses with website data...`);
const enriched = await enrichBusinesses(allBusinesses, settings);

await saveResults(enriched, {
baseDir,
outputDir: settings.output?.directory || './data',
formats: settings.output?.formats || ['json'],
});

console.log('Scraping pipeline finished.');
}

if (require.main === module) {
main().catch((err) => {
console.error('Fatal error in runner:', err);
process.exitCode = 1;
});
}

module.exports = {
main,
};