import { Link as RouterLink } from 'react-router';
import { Box, Container, Icon, Link, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { Instagram, LinkedIn } from '@mui/icons-material';
import legalInfoLinks from '@utils/constants/legalInfoLinks';
import { ReactComponent as LogoBoy } from '@assets/icons/logo-boy.svg';
import Logo from '@components/UI/Logo';
import LinkList from '@components/UI/LinkList';
import styles from './Footer.styles';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box component='footer' sx={styles.footer}>
        <Box sx={styles.wrapper}>
          <Link component={RouterLink} to={`/`}>
            <Logo height={'22'} width={'187'} />
          </Link>
          <Box sx={styles.wrapperNav}>
            <Icon sx={styles.logoBoy}>
              <LogoBoy />
            </Icon>
            <LinkList componentStyles={styles} links={legalInfoLinks} />
            <Box sx={styles.socialGroup}>
              <Link href={'href'} target='_blank'>
                <Instagram sx={styles.icon} />
              </Link>
              <Link href={'href'} target='_blank'>
                <LinkedIn sx={styles.icon} />
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
