import { SOCIAL_TYPES } from '../../components/UI/SocialsLinkList/SocialTypes';

const typeNameMap = {
  [SOCIAL_TYPES.TELEGRAM_LINK]: 'telegram',
  [SOCIAL_TYPES.EMAIL]: 'mail',
  [SOCIAL_TYPES.LINKEDIN_LINK]: 'linkedIn',
  [SOCIAL_TYPES.GITHUB_LINK]: 'gitHub',
  [SOCIAL_TYPES.BEHANCE_LINK]: 'behance',
  [SOCIAL_TYPES.PHONE_NUMBER]: 'phone',
};

export const addHttps = (url) => {
  if (url && !/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
};

export const addTelegram = (url) => {
  if (url && !/^https?:\/\/t\.me\//i.test(url)) {
    if (url.startsWith('@')) {
      return `https://t.me/${url.replace(/^@/, '')}`;
    } else {
      return `https://t.me/${url}`;
    }
  }

  return url;
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
