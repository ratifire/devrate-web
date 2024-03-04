import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Footer.styles';

import { Box, Container, Icon, Link, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';

import { ReactComponent as LogoBoy } from '../../../assets/icons/logo-boy.svg';

import Logo from '../../UI/Logo/Logo';
import socials from '../../../utils/constants/socials';

const Footer = () => {
  const { t } = useTranslation();
  const socialLinks = socials.map((social, index) => (
    <Link key={index} to={social.url} component={RouterLink} sx={styles.link} target={social.target}>
      <social.icon />
    </Link>
  ))
  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box component='footer' sx={styles.footer}>
        <Box sx={styles.wrapper}>
          <Link to={`/`} component={RouterLink}>
            <Logo width={'187'} height={'22'} />
          </Link>
          <Box sx={styles.wrapperNav}>
            <Icon sx={styles.logoBoy}>
              <LogoBoy />
            </Icon>
            <Link to={`/`} component={RouterLink} sx={styles.link}>
              {t('home.links.terms_and_conditions')}
            </Link>
            <Link to={`/`} component={RouterLink} sx={styles.link}>
              {t('home.links.privacy_policy')}
            </Link>
            <Box sx={styles.socialGroup}>
              {socialLinks}
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography level='body-md' sx={styles.copyright}>
            {t('home.footer.copyright')}
          </Typography>
          <Typography level='body-md' sx={styles.trademarks}>
            <Trans i18nKey='multiline'>{t('home.footer.trademarks')}</Trans>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
export default Footer;
