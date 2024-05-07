import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './RightSection.styles';

import SocialsLinkList from '../../UI/SocialsLinkList';
import { useTranslation } from 'react-i18next';
import LanguagesList from '../../UI/LanguagesList';
import userSocials from '../../../utils/constants/userSocials';

const RightSection = () => {
  const { t } = useTranslation();
  const languagesList = [
    {
      id: 1,
      language: 'UK',
      level: 'Native: C1',
    },
    {
      id: 2,
      language: 'EN',
      level: 'Upper-intermediate: B2',
    },
    {
      id: 3,
      language: 'FR',
      level: 'Intermediate: B1',
    },
  ];
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperBox}>
        <Typography variant='h6' sx={styles.title}>
          {t('profile.right.contact')}
        </Typography>
        <Box gap={3} sx={styles.wrapperLink}>
          <SocialsLinkList socials={userSocials} componentStyles={styles} />
        </Box>
      </Box>
      <Box sx={styles.wrapperBox}>
        <Typography variant='h6' sx={styles.title}>
          {t('profile.right.languages')}
        </Typography>
        <Box gap={2} sx={styles.wrapperLanguages}>
          <LanguagesList data={languagesList} />
        </Box>
      </Box>
      <Box sx={styles.wrapperBox}>
        <Typography variant='h6' sx={styles.title}>
          {t('profile.right.aboutMe')}
        </Typography>
        <Typography variant='subtitle2' sx={styles.aboutMe}>
          Кваліфікований Senior back-end розробник із 5-річним досвідом. Працювала з базами даних: MySQL, MariaDB,
          MongoDB, MVC Framework (CakePHP). Робота з тестовою середовищем для PHP (PHPUnit). TV Archive, написання
          методів панелі управління / методів SOAP. Робота з тестовою середовищем для PHP (PHPUnit). TV Archive,
          написання методів панелі управління / методів SOAP. Робота з тестовою середовищем для PHP (PHPUnit). TV
          Archive, написання методів панелі управління / методів SOAP.
        </Typography>
      </Box>
    </Box>
  );
};
export default RightSection;
