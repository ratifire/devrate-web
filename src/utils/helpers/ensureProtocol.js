export const ensureProtocol = (url) => {
  if (typeof url !== 'string' || url.trim() === '') {
    throw new Error('Invalid URL: must be a non-empty string');
  }

  if (!/^[a-z][a-z\d+\-.]*:\/\//i.test(url)) {
    return `https://${url}`;
  }

  return url;
};
