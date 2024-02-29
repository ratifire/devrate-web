import React from 'react';
import { Box, Card, Grid, ListItem, Typography, List, Container } from '@mui/material';
import { styles } from './AboutSection.styles';

// TODO: add translations
const AboutSection = () => {
  return (
    <Box sx={styles.wrapper}>
      <Container maxWidth='xl' sx={styles.container}>
        <Grid container alignItems='center' justifyContent='center' sx={styles.gridContainer}>
          <Grid item xs={12} md={6}>
            <Box sx={styles.textBox}>
              <Typography sx={styles.title}>Як це працює</Typography>
              <List sx={styles.list}>
                <ListItem disablePadding sx={styles.listItem}>
                  <Typography sx={styles.text}>Замовляйте співбесіди, коли захочете.</Typography>
                </ListItem>
                <ListItem disablePadding sx={styles.listItem}>
                  <Typography sx={styles.text}>Проведіть співдесіду зі своїм інтерв’юером чи респондентом.</Typography>
                </ListItem>
                <ListItem disablePadding sx={styles.listItem}>
                  <Typography sx={styles.text}>
                    Отримайте докладний, дієвий відгук про те, над чим саме вам потрібно працювати, щоб отримати роботу,
                    на яку ви заслуговуєте.
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={styles.videoBox}>
            <Card sx={styles.card}>
              {/*<CardMedia*/}
              {/*    component="video"*/}
              {/*    height="100%"*/}
              {/*    width={'auto'}*/}
              {/*    image="../assets/videos/....."*/}
              {/*    title="Contemplative Reptile"*/}
              {/*    autoPlay*/}
              {/*    controls*/}
              {/*/>*/}
              {/* TODO: move to separate component */}
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/j942wKiXFu8?si=9TUX9p6tlF3izLa6'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
