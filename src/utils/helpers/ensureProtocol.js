export const ensureProtocol = (url) => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.href;
  } catch {
    const sanitizedUrl = `https://${url.replace(/^(https?:\/\/)+/, '')}`;
    try {
      const validatedUrl = new URL(sanitizedUrl);
      return validatedUrl.href;
    } catch {
      throw new Error('Invalid URL');
    }
  }
};
