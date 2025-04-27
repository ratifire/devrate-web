import { Box, Divider, Link, Typography } from '@mui/material';
import googleIcon from '@assets/icons/AuthLogo/google.svg';
import linkedInIcon from '@assets/icons/AuthLogo/linkedin.svg';
import { useTranslation } from 'react-i18next';
import { styles } from './OAuthSection.styles.js';

const OAuthSection = () => {
  const { t } = useTranslation();
  const url = import.meta.env.VITE_API_DEV_URL || import.meta.env.VITE_API_URL;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.selectingAuth}>
        <Divider sx={styles.divider} />
        <Typography sx={styles.subtitle}>{t('modal.registration.selecting_auth')}</Typography>
        <Divider sx={styles.divider} />
      </Box>
      <Box sx={styles.authLinks}>
        <Link href={`${url}/auth/oauth/redirect/linkedIn`} sx={styles.authLink}>
          <Box alt='LinkedIn' component={'img'} src={linkedInIcon} />
          LinkedIn
        </Link>
        <Link href={`${url}/auth/oauth/redirect/google`} sx={styles.authLink}>
          <Box alt='Google' component={'img'} src={googleIcon} />
          Google
        </Link>
      </Box>
    </Box>
  );
};

export default OAuthSection;
