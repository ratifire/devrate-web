import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './RightSection.style';
import SocialsLinkList from '../../../UI/SocialsLinkList';
import { useTranslation } from 'react-i18next';
import LanguagesList from '../../../UI/LanguagesList';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { useGetLanguageUserQuery } from '../../../../redux/user/language/languageApiSlice';
import { useGetUserContactsQuery } from '../../../../redux/user/contacts/contactsApiSlice';
import { useGetPersonalUserQuery } from '../../../../redux/user/personal/personalApiSlice';

const RightSection = () => {
  const { t } = useTranslation();
  const currentUser = useSelector(selectCurrentUser);
  const languages = useGetLanguageUserQuery(currentUser.data.id);
  const { data: userContacts } = useGetUserContactsQuery(currentUser.data.id);
  const { data: personalData } = useGetPersonalUserQuery(currentUser.data.id);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperBox}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={styles.title}>
            {t('profile.right.contact')}
          </Typography>
        </Box>
        <Box gap={3} sx={styles.wrapperLink}>
          <SocialsLinkList socials={userContacts} componentStyles={styles} />
        </Box>
      </Box>
      {Boolean(languages.data?.length) && <Box sx={styles.wrapperBox}>
        <Typography variant="h6" sx={styles.title}>
          {t('profile.right.languages')}
        </Typography>
        <Box gap={2} sx={styles.wrapperLanguages}>
          <LanguagesList data={languages.data} />
        </Box>
      </Box>}
      <Box sx={styles.wrapperBox}>
        <Typography variant="h6" sx={styles.title}>
          {t('profile.right.aboutMe')}
        </Typography>
        <Typography variant='subtitle2' sx={styles.aboutMe}>
          {personalData && personalData.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default RightSection;
