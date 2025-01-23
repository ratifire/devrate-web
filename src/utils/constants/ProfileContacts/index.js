import { Link } from 'react-router';
import { linkTypes } from '../../helpers/urlHelpers.js';
import DarkTG from '../../../assets/icons/ProfileRightSection/BlackThemeIcons/telegram.svg?react';
import DarkLN from '../../../assets/icons/ProfileRightSection/BlackThemeIcons/linkedin.svg?react';
import DarkGH from '../../../assets/icons/ProfileRightSection/BlackThemeIcons/github.svg?react';
import DarkBH from '../../../assets/icons/ProfileRightSection/BlackThemeIcons/behance.svg?react';
import DarkEM from '../../../assets/icons/ProfileRightSection/BlackThemeIcons/mail.svg?react';
import DarkPH from '../../../assets/icons/ProfileRightSection/BlackThemeIcons/phone.svg?react';

import LightTG from '../../../assets/icons/ProfileRightSection/WhiteThemeIcons/telegram.svg?react';
import LightLN from '../../../assets/icons/ProfileRightSection/WhiteThemeIcons/linkedin.svg?react';
import LightGH from '../../../assets/icons/ProfileRightSection/WhiteThemeIcons/github.svg?react';
import LightBH from '../../../assets/icons/ProfileRightSection/WhiteThemeIcons/behance.svg?react';
import LightEM from '../../../assets/icons/ProfileRightSection/WhiteThemeIcons/mail.svg?react';
import LightPH from '../../../assets/icons/ProfileRightSection/WhiteThemeIcons/phone.svg?react';

export const darkIcons = {
  [linkTypes.TELEGRAM_LINK]: DarkTG,
  [linkTypes.LINKEDIN_LINK]: DarkLN,
  [linkTypes.GITHUB_LINK]: DarkGH,
  [linkTypes.BEHANCE_LINK]: DarkBH,
  [linkTypes.EMAIL]: DarkEM,
  [linkTypes.PHONE_NUMBER]: DarkPH,
  DEFAULT: Link,
};

export const lightIcons = {
  [linkTypes.TELEGRAM_LINK]: LightTG,
  [linkTypes.LINKEDIN_LINK]: LightLN,
  [linkTypes.GITHUB_LINK]: LightGH,
  [linkTypes.BEHANCE_LINK]: LightBH,
  [linkTypes.EMAIL]: LightEM,
  [linkTypes.PHONE_NUMBER]: LightPH,
  DEFAULT: Link,
};

export const getIconsByType = (type, iconsSet) => {
  const [key] = Object.entries(linkTypes).find(([, value]) => value === type);

  if (!linkTypes[key]) {
    return iconsSet.DEFAULT;
  }

  return iconsSet[key];
};
