import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Footer.styles';

import { Box, Icon, Link, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';

import { ReactComponent as Instagram } from '../../../assets/icons/instagram.svg';
import { ReactComponent as Linkedin } from '../../../assets/icons/linkedin.svg';
import { ReactComponent as LogoBoy } from '../../../assets/icons/logo-boy.svg';
// import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import Logo from '../../UI/Logo/Logo';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box component='footer' sx={styles.footer}>
      <Box sx={styles.wrapper}>
        <Link to={`/`} component={RouterLink}>
          <Logo />
        </Link>
        <Box sx={styles.wrapperNav}>
          <Icon sx={styles.logoBoy}>
            <LogoBoy />
          </Icon>
          <Link to={`/`} component={RouterLink} sx={styles.link}>
            {t('links.terms_and_conditions')}
          </Link>
          <Link to={`/`} component={RouterLink} sx={styles.link}>
            {t('links.privacy_policy')}
          </Link>
          <Box sx={styles.socialGroup}>
            <Link to={`https://www.instagram.com/`} component={RouterLink} sx={styles.link} target='_blank'>
              <Instagram />
            </Link>
            <Link to={`https://www.linkedin.com/`} component={RouterLink} sx={styles.link} target='_blank'>
              <Linkedin />
            </Link>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography level='body-md' sx={styles.copyright}>
          {t('footer.copyright')}
        </Typography>
        <Typography level='body-md' sx={styles.trademarks}>
          <Trans i18nKey='multiline'>{t('footer.trademarks')}</Trans>
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
