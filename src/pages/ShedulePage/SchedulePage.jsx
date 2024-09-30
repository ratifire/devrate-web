import React from 'react';
import {Box, Container,Paper, Switch, Typography} from '@mui/material';
import { styles } from './SchedulePage.styles';
import ProfileHeader from '../../components/PageComponents/ProfileHeader';
import Schedule from '../../components/PageComponents/ScheduleComponents';

import ScheduleTemplate from '../../Templates/ScheduleTemplate';
import { useTranslation } from 'react-i18next';

const SchedulePage = () => {
  const { t } = useTranslation();
  
  return (
    <ScheduleTemplate>
      <ProfileHeader />
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.scheduleWrapper}>
            <Typography variant='h4' sx={styles.scheduleTitle}>
              {t('schedule.title')}
            </Typography>
            <Paper sx={styles.calendarWrapper}>
              <Schedule />
            </Paper>
          </Paper>
        </Box>
      </Container>
    </ScheduleTemplate>
  );
};

export default SchedulePage;
