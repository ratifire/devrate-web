import React from 'react';
import {Box, Card, Container, Grid, List, ListItem, Typography} from '@mui/material';
import {styles} from './AboutSection.styles';
import {YoutubeEmbed} from '../../UI/YoutubeEmbed/YoutubeEmbed';
import {useTranslation} from 'react-i18next';

// TODO: add translations
const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.wrapper}>
      <Container maxWidth='xl' sx={styles.container}>
        <Grid container alignItems='center' justifyContent='center' sx={styles.gridContainer}>
          <Grid item xs={12} md={6}>
            <Box sx={styles.textBox}>
              <Typography sx={styles.title}>{t('about.title')}</Typography>
              <List sx={styles.list}>
                <ListItem disablePadding sx={styles.listItem}>
                  <Typography sx={styles.text}>{t('about.text1')}</Typography>
                </ListItem>
                <ListItem disablePadding sx={styles.listItem}>
                  <Typography sx={styles.text}>{t('about.text2')}</Typography>
                </ListItem>
                <ListItem disablePadding sx={styles.listItem}>
                  <Typography sx={styles.text}>{t('about.text3')}</Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={styles.videoBox}>
            <Card sx={styles.card}>
              <YoutubeEmbed
                title='YouTube video player'
                link='https://www.youtube.com/embed/j942wKiXFu8?si=9TUX9p6tlF3izLa6'
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
