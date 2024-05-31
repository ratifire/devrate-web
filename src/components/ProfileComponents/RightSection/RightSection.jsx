import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './RightSection.styles';

import SocialsLinkList from '../../UI/SocialsLinkList';
import { useTranslation } from 'react-i18next';
import LanguagesList from '../../UI/LanguagesList';
import userSocials from '../../../utils/constants/userSocials';
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../../redux/auth/authSlice";
import {useFetchLanguagesQuery} from "../../../redux/services/languagesApiSlice";

const RightSection = () => {
  const { t } = useTranslation();
  const currentUser = useSelector(selectCurrentUser);
  const languages = useFetchLanguagesQuery(currentUser.data.id);

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
          <LanguagesList data={languages.data || []} />
        </Box>
      </Box>
      <Box sx={styles.wrapperBox}>
        <Typography variant='h6' sx={styles.title}>
          {t('profile.right.aboutMe')}
        </Typography>
        <Typography variant='subtitle2' sx={styles.aboutMe}>
          {currentUser.data.description}
        </Typography>
      </Box>
    </Box>
  );
};
export default RightSection;
