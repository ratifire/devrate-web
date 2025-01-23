import { SOCIAL_TYPES } from '../../components/UI/SocialsLinkList/SocialTypes';

const typeNameMap = {
  [SOCIAL_TYPES.TELEGRAM_LINK]: 'telegram',
  [SOCIAL_TYPES.EMAIL]: 'mail',
  [SOCIAL_TYPES.LINKEDIN_LINK]: 'linkedIn',
  [SOCIAL_TYPES.GITHUB_LINK]: 'gitHub',
  [SOCIAL_TYPES.BEHANCE_LINK]: 'behance',
  [SOCIAL_TYPES.PHONE_NUMBER]: 'phone',
};

export const normalizeUrl = (input) => {
  // 1. Ensure that "input" is a string
  if (typeof input !== 'string') {
    throw new TypeError('Argument "input" must be a string.');
  }

  // 2. Trim whitespace
  let url = input.trim();

  // 3. Check if it's an empty string
  if (!url) {
    throw new Error('URL cannot be an empty string.');
  }

  // 4. If the string does not start with http:// or https://, prepend http://
  if (!/^https?:\/\//i.test(url)) {
    url = `http://${url}`;
  }

  // 5. Validate and normalize via the URL constructor
  let parsed;
  try {
    parsed = new URL(url);
  } catch (err) {
    throw new Error(`URL "${url}" is invalid. Error: ${err.message}`);
  }

  // 6. Return the canonical string (e.g., https://example.com/ becomes canonical)
  return parsed.toString();
};

export const addTelegram = (url) => {
  let result = url;
  if (url && !/^https?:\/\/t\.me\//i.test(url)) {
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
