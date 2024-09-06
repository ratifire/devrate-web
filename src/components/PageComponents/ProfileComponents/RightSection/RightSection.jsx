import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { openModal } from '../../../../redux/modal/modalSlice';
import { setStep } from '../../../../redux/modal/modalStepSlice';
import { useGetUserContactsQuery } from '../../../../redux/user/contacts/contactsApiSlice';
import { useGetLanguageUserQuery } from '../../../../redux/user/language/languageApiSlice';
import { useGetPersonalUserQuery } from '../../../../redux/user/personal/personalApiSlice';
import LanguagesList from '../../../UI/LanguagesList';
import SocialsLinkList from '../../../UI/SocialsLinkList';
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
          <Typography variant='h6' sx={styles.title}>
            {t('profile.right.contact')}
          </Typography>
          <Box>
            <IconButton sx={styles.btnIcon} aria-label='Edit user information' onClick={handleOpenInfo}>
              <EditIcon />
            </IconButton>
          </Box>
        </Box>
        <Box gap={3} sx={styles.wrapperLink}>
          <SocialsLinkList socials={userContacts} componentStyles={styles} />
        </Box>
      </Box>
        <Box sx={styles.wrapperBox}>
          <Box sx={styles.box}>
            <Typography variant='h6' sx={styles.title}>
              {t('profile.right.languages')}
            </Typography>
            <Box>
              <IconButton sx={styles.btnIcon} aria-label='Edit user information' onClick={handleOpenLanguage}>
                <EditIcon />
              </IconButton>
            </Box>
          </Box>
          <Box gap={2} sx={styles.wrapperLanguages}>
            <LanguagesList data={languages.data} />
          </Box>
        </Box>
      <Box sx={styles.wrapperBox}>
        <Typography variant='h6' sx={styles.title}>
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
