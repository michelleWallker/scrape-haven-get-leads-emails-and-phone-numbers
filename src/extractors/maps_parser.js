onst fs = require('fs');
const path = require('path');

async function readMockData(baseDir) {
const mockPath = path.join(baseDir, 'data', 'sample_output.json');
try {
const raw = await fs.promises.readFile(mockPath, 'utf8');
const parsed = JSON.parse(raw);
if (!Array.isArray(parsed)) {
throw new Error('Mock data must be an array of businesses');
}
console.warn(
'Using mock data from data/sample_output.json. ' +
'Provide a Google Maps API key in settings.example.json to enable live scraping.'
);
return parsed;
} catch (err) {
console.error('Failed to load mock data from data/sample_output.json:', err.message || err);
return [];
}
}

/**
* Calls Google Places Text Search API to fetch businesses for a single task.
* This requires a valid API key in settings.googleApiKey.
*/
async function fetchFromGoogle(task, settings) {
const apiKey = settings.googleApiKey;
if (!apiKey || apiKey.trim() === '' || apiKey === 'YOUR_GOOGLE_PLACES_API_KEY') {
throw new Error('Missing or placeholder googleApiKey. Cannot call Google Places API.');
}

const query = encodeURIComponent(`${task.query} in ${task.location}`);
const radius = task.radius || settings.radius || 1500;
const maxResults = settings.maxResultsPerQuery || 20;

const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&radius=${radius}&key=${apiKey}`;

const controller = new AbortController();
const timeout = settings.http?.timeoutMs || 10000;
const timeoutId = setTimeout(() => controller.abort(), timeout);

try {
const res = await fetch(url, { signal: controller.signal });
if (!res.ok) {
throw new Error(`Google Places API responded with status ${res.status}`);
}
const data = await res.json();
const results = Array.isArray(data.results) ? data.results : [];
return results.slice(0, maxResults).map((r) => ({
name: r.name || '',
address: r.formatted_address || '',
phone_number: '', // requires additional Place Details call; left empty here
email: '', // will be filled by website scanner
website: r.website || '',
facebook: '',
instagram: '',
twitter: '',
linkedin: '',
reviews_average: typeof r.rating === 'number' ? r.rating : null,
place_id: r.place_id || null,
source: 'google_places_api',
}));
} finally {
clearTimeout(timeoutId);
}
}

/**
* Public entry: returns an array of business objects for a single search task.
*
* @param {{query: string, location: string, radius?: number}} task
* @param {object} settings
* @returns {Promise<Array<object>>}
*/
async function searchBusinesses(task, settings) {
const baseDir = path.resolve(__dirname, '..', '..');

if (settings.useMockData) {
return readMockData(baseDir);
}

try {
const liveResults = await fetchFromGoogle(task, settings);
if (liveResults.length === 0) {
console.warn(
'Google Places API returned no results. Falling back to mock data from sample_output.json.'
);
return readMockData(baseDir);
}
return liveResults;
} catch (err) {
console.error(
'Error when querying Google Places API. Falling back to mock data:',
err.message || err
);
return readMockData(baseDir);
}
}

module.exports = {
searchBusinesses,
};