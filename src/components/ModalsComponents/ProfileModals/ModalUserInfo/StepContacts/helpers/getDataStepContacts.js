import { SOCIAL_TYPES } from '../../../../../UI/SocialsLinkList/SocialTypes';

const typeNameMap = {
  [SOCIAL_TYPES.TELEGRAM_LINK]: 'telegram',
  [SOCIAL_TYPES.EMAIL]: 'mail',
  [SOCIAL_TYPES.LINKEDIN_LINK]: 'linkedIn',
  [SOCIAL_TYPES.GITHUB_LINK]: 'gitHub',
  [SOCIAL_TYPES.BEHANCE_LINK]: 'behance',
  [SOCIAL_TYPES.PHONE_NUMBER]: 'phone',
};

const getDataStepContacts = (data) => {
  return Object.fromEntries(data.map((contact) => [typeNameMap[contact.type], contact.value]));
};

export default getDataStepContacts;
