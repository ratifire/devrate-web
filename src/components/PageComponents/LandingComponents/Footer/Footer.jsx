import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Footer.styles';
import {
    Box,
    Container,
    Link,
    Typography
} from '@mui/material';
import {Trans, useTranslation} from 'react-i18next';
// import { ReactComponent as LogoBoy } from '../../../../assets/icons/logo-boy.svg';
import Logo from '../../../UI/Logo';
// import LinkList from '../../../UI/LinkList';
// import legalInfoLinks from '../../../../utils/constants/legalInfoLinks';
import { Instagram, LinkedIn } from '@mui/icons-material';
import TextField from "@mui/material/TextField";

const Footer = () => {
  const { t } = useTranslation();

  return (
      <Container maxWidth='xl' sx={styles.container}>
        <Box component='footer' sx={styles.footer} >
          <Box sx={styles.wrapper}>
              <Box sx={styles.content}>
                  <Box sx={styles.socialGroup}>
                      <Link to={`/`} component={RouterLink}>
                          <Logo width={'187'} height={'22'} />
                      </Link>
                      <Box sx={styles.socialLinks}>
                          <Link href={'href'} target='_blank'>
                              <Instagram sx={styles.icon}/>
                          </Link>
                          <Link href={'href'} target='_blank'>
                              <LinkedIn sx={styles.icon}/>
                          </Link>
                      </Box>
                  </Box>
                  <Box component='p' sx={styles.description}>
                      {t('Technical interview training platform: elevate your skills with both beginners and experienced professionals. Our platform is designed to make the interview preparation process smoother and less stressful for everyone.')}
                  </Box>
                  <Box sx={styles.developed}>
                      <Typography component='h1' sx={styles.developTitle}>
                          Developed By
                      </Typography>
                      <Link to={`/`} component={RouterLink}>
                          <Logo width={'187'} height={'22'} />
                      </Link>
                  </Box>
                  <Box sx={styles.ratifireLink}>
                      <Link sx={styles.defaultStylesLinks}>ratifire.org</Link>
                  </Box>
                  <Box sx={styles.legalInformation}>
                      <Link sx={styles.defaultStylesLinks}>Terms and conditions</Link>
                      <Link sx={styles.defaultStylesLinks}>Privacy Policy</Link>
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
              <Box sx={styles.contactForm}>
                  <Typography component='h2' sx={styles.contactFormTitle}>
                      <span style={styles.spanStyle}>Get</span> In Touch</Typography>
                  <Box component="form" xs={styles.formInfo}>
                      <TextField sx={styles.inputStyles}
                                 id="outlined-user-name"
                                 name='name'
                                 label='Name Surname'
                                 type='text'
                                 autoComplete='off'
                                 fullWidth={true}
                      />
                      <TextField sx={styles.inputStyles}
                                 id="outlined-user-email"
                                 name='email'
                                 label='Enter your email'
                                 type='email'
                                 autoComplete="current-email"
                                 fullWidth={true}
                      />
                      <TextField sx={styles.inputStyles}
                                 id="outlined-user-request"
                                 name='request'
                                 label='Enter your request...'
                                 type='text'
                                 rows={4}
                                 multiline
                                 autoComplete="off"
                                 fullWidth={true}
                      />
                  </Box>
              </Box>
          </Box>
        </Box>
      </Container>

  );
};
export default Footer;
// <Container maxWidth='xl' sx={styles.container}>
//   <Box component='footer' sx={styles.footer}>
//     <Box sx={styles.wrapper}>
//       <Link to={`/`} component={RouterLink}>
//         <Logo width={'187'} height={'22'} />
//       </Link>
//       <Box sx={styles.wrapperNav}>
//         <Icon sx={styles.logoBoy}>
//           <LogoBoy />
//         </Icon>
//         <LinkList links={legalInfoLinks} componentStyles={styles} />
//         <Box sx={styles.socialGroup}>
//           <Link href={'href'} target='_blank'>
//             <Instagram sx={styles.icon}/>
//           </Link>
//           <Link href={'href'} target='_blank'>
//             <LinkedIn sx={styles.icon}/>
//           </Link>
//         </Box>
//       </Box>
//     </Box>
//     <Box>
//       <Typography level='body-md' sx={styles.copyright}>
//         {t('home.footer.copyright')}
//       </Typography>
//       <Typography level='body-md' sx={styles.trademarks}>
//         <Trans i18nKey='multiline'>{t('home.footer.trademarks')}</Trans>
//       </Typography>
//     </Box>
//   </Box>
// </Container>
