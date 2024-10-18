import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './RightSection.styles';
import SocialsLinkList from '../../../../UI/SocialsLinkList';
import { useTranslation } from 'react-i18next';
import LanguagesList from '../../../../UI/LanguagesList';
import { useGetLanguageUserQuery } from '../../../../../redux/user/language/languageApiSlice';
import { useGetUserContactsQuery } from '../../../../../redux/user/contacts/contactsApiSlice';
import { useGetPersonalUserQuery } from '../../../../../redux/user/personal/personalApiSlice';
import PropTypes from 'prop-types';

const RightSection = ({id}, profileType) => {
  const { t } = useTranslation();
  const languages = useGetLanguageUserQuery(id);
  const { data: userContacts } = useGetUserContactsQuery(id);
  const { data: personalData } = useGetPersonalUserQuery(id);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperBox}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={styles.title}>
            {t('profile.right.contact')}
          </Typography>
        </Box>
        <Box gap={2} sx={styles.wrapperLink}>
          <SocialsLinkList socials={userContacts} componentStyles={styles} />
        </Box>
      </Box>
      {Boolean(languages.data?.length) && profileType !== 'user' && (
        <Box sx={styles.wrapperBox}>
          <Typography variant="h6" sx={styles.title}>
            {t('profile.right.languages')}
          </Typography>
          <Box gap={2} sx={styles.wrapperLanguages}>
            <LanguagesList data={languages.data} />
          </Box>
        </Box>
      )}
      {personalData?.description && (
        <Box sx={styles.wrapperBox}>
          <Typography variant="h6" sx={styles.title}>
            {t('profile.right.aboutMe')}
          </Typography>
          <Typography variant="subtitle2" sx={styles.aboutMe}>
            {personalData.description}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

RightSection.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default RightSection;
