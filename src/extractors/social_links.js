function normalizeMatch(url) {
  if (!url) return null;
  // Strip trailing punctuation and quotes that might come from HTML attributes/text
  return url.replace(/[)"'\s,;]+$/g, '');
}

function findFirstMatch(html, pattern) {
  const regex = new RegExp(pattern, 'i');
  const match = html.match(regex);
  if (!match) return null;
  return normalizeMatch(match[0]);
}

/**
 * Extracts basic social media profile URLs from HTML.
 *
 * @param {string} html
 * @param {string} baseUrl
 * @returns {{facebook: string|null, instagram: string|null, twitter: string|null, linkedin: string|null}}
 */
function extractSocialLinks(html, baseUrl) {
  if (typeof html !== 'string') {
    return {
      facebook: null,
      instagram: null,
      twitter: null,
      linkedin: null,
    };
  }

  const facebook = findFirstMatch(
    html,
    /https?:\/\/(www\.)?facebook\.com\/[a-z0-9_.\-/?=&%]+/
  );
  const instagram = findFirstMatch(
    html,
    /https?:\/\/(www\.)?instagram\.com\/[a-z0-9_.\-/?=&%]+/
  );
  const twitter = findFirstMatch(
    html,
    /https?:\/\/(www\.)?(x|twitter)\.com\/[a-z0-9_.\-/?=&%]+/
  );
  const linkedin = findFirstMatch(
    html,
    /https?:\/\/(www\.)?linkedin\.com\/[a-z0-9_.\-/?=&%]+/
  );

  return {
    facebook,
    instagram,
    twitter,
    linkedin,
  };
}

module.exports = {
  extractSocialLinks,
};