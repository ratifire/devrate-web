const addTelegram = (url) => {
  if (url && !/^https?:\/\/t\.me\//i.test(url)) {
    if (url.startsWith('@')) {
      return `https://t.me/${url.replace(/^@/, '')}`;
    } else {
      return `https://t.me/${url}`;
    }
  }

  return url;
};

export default addTelegram;
