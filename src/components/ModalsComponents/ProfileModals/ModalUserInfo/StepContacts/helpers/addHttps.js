const addHttps = (url) => {
  if (url && !/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
};

export default addHttps;
