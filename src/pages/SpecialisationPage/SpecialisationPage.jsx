import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import { styles } from './SpecialisationPage.style';
import SpecialisationTemplate from '../../Templates/SpecialisationTemplate';
import ProfileHeader from '../../components/ProfileComponents/ProfileHeader';

const SpecialisationPage = () => {
  const name = 'Alina Ostapenko';
  return (
    <SpecialisationTemplate>
      <ProfileHeader userName={name} />
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.specialisationTaxonomy}>
            <div>Specialization Taxonomy</div>
          </Paper>
          <Paper sx={styles.specialisationLevel}>
            <div>Specialization Level</div>
          </Paper>
          <Paper sx={styles.specialisationInterviewParticipation}>
            <div>Specialization: Interview Participation</div>
          </Paper>
          <Paper sx={styles.specialisationVideoInterview}>
            <div>Specialization: Interview Participation</div>
          </Paper>
          <Paper sx={styles.specialisationSkills}>
            <div>Skills</div>
          </Paper>
          <Paper sx={styles.specialisationStatistics}>
            <div>Statistics</div>
          </Paper>
        </Box>
      </Container>
    </SpecialisationTemplate>
  );
};

export default SpecialisationPage;