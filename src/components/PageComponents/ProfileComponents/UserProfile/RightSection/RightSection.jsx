import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import SocialsLinkList from '../../../../UI/SocialsLinkList';
import LanguagesList from '../../../../UI/LanguagesList';
import { useGetLanguageUserQuery } from '../../../../../redux/user/language/languageApiSlice';
import { useGetUserContactsQuery } from '../../../../../redux/user/contacts/contactsApiSlice';
import { useGetPersonalUserQuery } from '../../../../../redux/user/personal/personalApiSlice';
import { styles } from './RightSection.styles';

const RightSection = ({ id }, profileType) => {
  const { t } = useTranslation();
  const languages = useGetLanguageUserQuery(id);
  const { data: userContacts } = useGetUserContactsQuery(id);
  const { data: personalData } = useGetPersonalUserQuery(id);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperBox}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={styles.title} variant='h6'>
            {t('profile.right.contact')}
          </Typography>
        </Box>
        <Box gap={2} sx={styles.wrapperLink}>
          <SocialsLinkList componentStyles={styles} id={id} socials={userContacts} />
        </Box>
      </Box>
      {Boolean(languages.data?.length) && profileType !== 'user' && (
        <Box sx={styles.wrapperBox}>
          <Typography sx={styles.title} variant='h6'>
            {t('profile.right.languages')}
          </Typography>
          <Box gap={2} sx={styles.wrapperLanguages}>
            <LanguagesList data={languages.data} />
          </Box>
        </Box>
      )}
      {personalData?.description && (
        <Box sx={styles.wrapperBox}>
          <Typography sx={styles.title} variant='h6'>
            {t('profile.right.aboutMe')}
          </Typography>
          <Typography sx={styles.aboutMe} variant='subtitle2'>
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
