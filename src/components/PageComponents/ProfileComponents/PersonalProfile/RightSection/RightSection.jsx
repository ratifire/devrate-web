import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice';
import { openModal } from '../../../../../redux/modal/modalSlice';
import { setStep } from '../../../../../redux/modal/modalStepSlice';
import { useGetUserContactsQuery } from '../../../../../redux/user/contacts/contactsApiSlice';
import { useGetLanguageUserQuery } from '../../../../../redux/user/language/languageApiSlice';
import { useGetPersonalUserQuery } from '../../../../../redux/user/personal/personalApiSlice';
import LanguagesList from '../../../../UI/LanguagesList';
import SocialsLinkList from '../../../../UI/SocialsLinkList';
import { styles } from './RightSection.styles';

const RightSection = () => {
  const { t } = useTranslation();
  const currentUser = useSelector(selectCurrentUser);
  const languages = useGetLanguageUserQuery(currentUser.data.id);
  const dispatch = useDispatch();
  const { data: userContacts } = useGetUserContactsQuery(currentUser.data.id);
  const { data: personalData } = useGetPersonalUserQuery(currentUser.data.id);

  const handleOpenInfo = () => {
    dispatch(setStep(1));
    dispatch(openModal({ modalName: 'openUserInfo' }));
  };

  const handleOpenLanguage = () => {
    dispatch(setStep(3));
    dispatch(openModal({ modalName: 'openUserInfo' }));
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperBox}>
        <Box sx={styles.box}>
          <Typography sx={styles.title} variant='h6'>
            {t('profile.right.contact')}
          </Typography>
          <Box>
            <IconButton aria-label='Edit user information' sx={styles.btnIcon} onClick={handleOpenInfo}>
              <EditIcon />
            </IconButton>
          </Box>
        </Box>
        <Box gap={2} sx={styles.wrapperLink}>
          {userContacts && userContacts.length > 0 ? (
            <SocialsLinkList componentStyles={styles} socials={userContacts} />
          ) : (
            <Typography variant='body1'>{t('profile.right.empty.emptyContacts')}</Typography>
          )}
        </Box>
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
