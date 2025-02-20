import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@redux/slices/auth/authSlice.js';
import { useGetLanguageUserQuery } from '@redux/api/slices/user/language/languageApiSlice';
import { useGetPersonalUserQuery } from '@redux/api/slices/user/personal/personalApiSlice';
import { modalNames } from '@utils/constants/modalNames.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import LanguagesList from '../../../../UI/LanguagesList';
import SocialsLinkList from '../../../../UI/SocialsLinkList';
import { styles } from './RightSection.styles';

const RightSection = () => {
  const { t } = useTranslation();
  const currentUser = useSelector(selectCurrentUser);
  const languages = useGetLanguageUserQuery(currentUser.data.id);
  const { data: personalData } = useGetPersonalUserQuery(currentUser.data.id);
  const { openModal } = useModalController();

  const handleOpenContactInfo = () => {
    openModal(modalNames.userInfoModal, null, 1);
  };

  const handleOpenLanguage = () => {
    openModal(modalNames.userInfoModal, null, 3);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperBox}>
        <Box sx={styles.box}>
          <Typography sx={styles.title} variant='h6'>
            {t('profile.right.contact')}
          </Typography>
          <Box>
            <IconButton aria-label='Edit user information' sx={styles.btnIcon} onClick={handleOpenContactInfo}>
              <EditIcon />
            </IconButton>
          </Box>
        </Box>
        <SocialsLinkList componentStyles={styles} />
      </Box>
      <Box sx={styles.wrapperBox}>
        <Box sx={styles.box}>
          <Typography sx={styles.title} variant='h6'>
            {t('profile.right.languages')}
          </Typography>
          <Box>
            <IconButton aria-label='Edit user information' sx={styles.btnIcon} onClick={handleOpenLanguage}>
              <EditIcon />
            </IconButton>
          </Box>
        </Box>
        <Box gap={2} sx={styles.wrapperLanguages}>
          {languages.data && languages.data.length > 0 ? (
            <LanguagesList data={languages.data} />
          ) : (
            <Typography variant='body1'>{t('profile.right.empty.emptyLanguages')}</Typography>
          )}
        </Box>
      </Box>
      <Box sx={styles.wrapperBox}>
        <Typography sx={styles.title} variant='h6'>
          {t('profile.right.aboutMe')}
        </Typography>
        {personalData && personalData.description ? (
          <Typography sx={styles.aboutMe} variant='subtitle2'>
            {personalData.description}
          </Typography>
        ) : (
          <Typography variant='body1'>{t('profile.right.empty.emptyAboutMe')}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default RightSection;
