onst { extractSocialLinks } = require('./social_links');

function extractFirstEmail(html) {
if (typeof html !== 'string' || html.length === 0) return null;

const emailRegex =
/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
const matches = html.match(emailRegex);
if (!matches || matches.length === 0) return null;

// Filter out very generic addresses if possible (keep the first meaningful one)
const preferred = matches.find((e) => !/noreply|no-reply|example/i.test(e));
return (preferred || matches[0]).trim();
}

async function fetchWithTimeout(url, timeoutMs) {
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

try {
const res = await fetch(url, {
redirect: 'follow',
signal: controller.signal,
headers: {
'User-Agent':
'ScrapeHavenBot/1.0 (+https://bitbash.dev; contact: sale@bitbash.dev)',
Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
},
});

if (!res.ok) {
throw new Error(`HTTP ${res.status}`);
}

const text = await res.text();
return text;
} finally {
clearTimeout(timeoutId);
}
}

/**
* Enriches a business object by visiting its website and extracting email + social links.
*
* @param {object} business
* @param {{timeoutMs?: number}} options
* @returns {Promise<object>}
*/
async function scanWebsite(business, options = {}) {
const timeoutMs = options.timeoutMs || 10000;
const website = business.website;

if (!website || typeof website !== 'string' || website.trim() === '') {
// Nothing to do
return {
...business,
email: business.email || null,
facebook: business.facebook || null,
instagram: business.instagram || null,
twitter: business.twitter || null,
linkedin: business.linkedin || null,
};
}

let html = '';
try {
console.log(`Fetching website: ${website}`);
html = await fetchWithTimeout(website, timeoutMs);
} catch (err) {
console.error(`Failed to fetch website "${website}":`, err.message || err);
return {
...business,
email: business.email || null,
facebook: business.facebook || null,
instagram: business.instagram || null,
twitter: business.twitter || null,
linkedin: business.linkedin || null,
};
}

const emailFromSite = extractFirstEmail(html);
const socials = extractSocialLinks(html, website);

return {
...business,
email: emailFromSite || business.email || null,
facebook: socials.facebook || business.facebook || null,
instagram: socials.instagram || business.instagram || null,
twitter: socials.twitter || business.twitter || null,
linkedin: socials.linkedin || business.linkedin || null,
};
}

module.exports = {
scanWebsite,
};