import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import { styles } from './SpecialisationPage.style';
import SpecializationTemplate from '../../Templates/SpecializationTemplate';
import ProfileHeader from '../../components/ProfileComponents/ProfileHeader';
import SpecialisationCategories from '../../components/SpecializationComponents/SpecializationCategories';
import SpecializationLevel from '../../components/SpecializationComponents/SpecializationLevel/SpecializationLevel'

const SpecializationPage = () => {
  return (
    <SpecializationTemplate>
      <ProfileHeader/>
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.specialisationTaxonomy}>
            <SpecialisationCategories />
          </Paper>
          <Paper sx={styles.specializationLevel}>
            <SpecializationLevel />
          </Paper>
          <Paper sx={styles.specialisationInterviewParticipation}>
            <div>Specialization: Interview Participation</div>
          </Paper>
          <Paper sx={styles.specialisationHardSkills}>
            <div>Hard Skills</div>
          </Paper>
          <Paper sx={styles.specialisationSoftSkills}>
            <div>Soft Skills</div>
          </Paper>
          <Paper sx={styles.specialisationStatistics}>
            <div>Statistics</div>
            <Box sx={styles.statisticWrapper}>
              <Paper sx={styles.level}>
                <div>Statistic Level</div>
              </Paper>
              <Paper sx={styles.averageSkillsScore}>
                <div>Average score of skills</div>
              </Paper>
              <Paper sx={styles.hardSkillsByProductivity}>
                <div>Hard Skills by productivity</div>
              </Paper>
              <Paper sx={styles.interview}>
                <div>Interview Statistics</div>
              </Paper>
            </Box>
          </Paper>
        </Box>
      </Container>
    </SpecializationTemplate>
  );
};

export default SpecializationPage;