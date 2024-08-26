import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Footer.styles';
import { Box, Container, Icon, Link, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { ReactComponent as LogoBoy } from '../../../assets/icons/logo-boy.svg';
import Logo from '../../UI/Logo';
import LinkList from '../../UI/LinkList';
import legalInfoLinks from '../../../utils/constants/legalInfoLinks';
import { Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const { t } = useTranslation();

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
            <LinkList links={legalInfoLinks} componentStyles={styles} />
            <Box sx={styles.socialGroup}>
              <Link href={'href'} target='_blank'>
                <Instagram sx={styles.icon}/>
              </Link>
              <Link href={'href'} target='_blank'>
                <LinkedIn sx={styles.icon}/>
              </Link>
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
