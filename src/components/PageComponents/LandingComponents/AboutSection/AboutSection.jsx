import { Box, Card, Container, Grid, List, ListItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import YoutubeEmbed from '../../../UI/YoutubeEmbed/YoutubeEmbed';
import ConfirmationModal from '../../../ModalsComponents/AuthModals/ConfirmationModal';
import { styles } from './AboutSection.styles';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.wrapper}>
      <Container maxWidth='xl' sx={styles.container}>
        <Grid container alignItems='center' justifyContent='center' sx={styles.gridContainer}>
          <Grid item md={6} xs={12}>
            <Box sx={styles.textBox}>
              <Typography sx={styles.title}>{t('home.about.title')}</Typography>
              <List sx={styles.list}>
                <ListItem disablePadding sx={styles.listItem}>
                  <Typography sx={styles.text} variant='subtitle1'>
                    {t('home.about.text1')}
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={styles.listItem}>
                  <Typography sx={styles.text} variant='subtitle1'>
                    {t('home.about.text2')}
                  </Typography>
                </ListItem>
                <ListItem disablePadding sx={styles.listItem}>
                  <Typography sx={styles.text} variant='subtitle1'>
                    {t('home.about.text3')}
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card sx={styles.card}>
              <YoutubeEmbed
                link='https://www.youtube.com/embed/j942wKiXFu8?si=9TUX9p6tlF3izLa6'
                title='YouTube video player'
              />
            </Card>
          </Grid>
        </Grid>
        <ConfirmationModal />
      </Container>
    </Box>
  );
};

export default AboutSection;
