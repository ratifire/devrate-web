export const linkTypes = Object.freeze({
  EMAIL: 'EMAIL',
  PHONE_NUMBER: 'PHONE_NUMBER',
  TELEGRAM_LINK: 'TELEGRAM_LINK',
  LINKEDIN_LINK: 'LINKEDIN_LINK',
  GITHUB_LINK: 'GITHUB_LINK',
  BEHANCE_LINK: 'BEHANCE_LINK',
});

export const urlPrefixes = Object.freeze({
  [linkTypes.PHONE_NUMBER]: 'tel:',
  [linkTypes.EMAIL]: 'mailto:',
});

const typeNameMap = Object.freeze({
  [linkTypes.TELEGRAM_LINK]: 'telegram',
  [linkTypes.EMAIL]: 'mail',
  [linkTypes.LINKEDIN_LINK]: 'linkedIn',
  [linkTypes.GITHUB_LINK]: 'gitHub',
  [linkTypes.BEHANCE_LINK]: 'behance',
  [linkTypes.PHONE_NUMBER]: 'phone',
});

export const normalizeUrl = (input) => {
  if (typeof input !== 'string') {
    throw new TypeError('Argument "input" must be a string.');
  }

  let url = input.trim();

  if (!url) {
    return '';
  }

  if (!/^https?:\/\//i.test(url)) {
    url = `http://${url}`;
  }

  let parsed;
  try {
    parsed = new URL(url);
  } catch (err) {
    throw new Error(`URL "${url}" is invalid. Error: ${err.message}`);
  }

  return parsed.toString();
};

export const addTelegram = (url) => {
  if (!url) return '';

  let result = url;
  if (!/^https?:\/\/t\.me\//i.test(url)) {
    if (url.startsWith('@')) {
      result = `https://t.me/${url.replace(/^@/, '')}`;
    } else {
      result = `https://t.me/${url}`;
    }
  }

  return normalizeUrl(result);
};

export const addPhone = (phone) => {
  if (!phone) return '';

  const cleanedPhone = phone.replace(/\D/g, '');
  return phone.trim().startsWith('+') ? phone : `+${cleanedPhone}`;
};

export const getDataStepContacts = (data) => {
  if (!Array.isArray(data)) return {};

  return Object.fromEntries(data.map((contact) => [typeNameMap[contact.type], contact.value]));
};

export const constructUrlByType = (type, href) => {
  const [key, value] = Object.entries(linkTypes).find(([, value]) => value === type);

  if (!linkTypes[key]) {
    return normalizeUrl(href);
  }

  if (Object.keys(urlPrefixes).includes(type)) {
    return urlPrefixes[value] + href;
  }

  return normalizeUrl(href);
};
