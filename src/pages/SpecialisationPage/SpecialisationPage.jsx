import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import { styles } from './SpecialisationPage.style';
import SpecialisationTemplate from '../../Templates/SpecialisationTemplate';
import ProfileHeader from '../../components/ProfileComponents/ProfileHeader';
import SpecializationLevel from '../../components/SpecializationComponents/SpecializationLevel/SpecializationLevel';
import HardSkills from '../../components/SpecializationComponents/HardSkills/HardSkills';


const SpecialisationPage = () => {
  return (
    <SpecialisationTemplate>
      <ProfileHeader/>
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.specialisationTaxonomy}>
            <div>Specialization Taxonomy</div>
          </Paper>
          <Paper sx={styles.specializationLevel}>
            <SpecializationLevel />
          </Paper>
          <Paper sx={styles.specialisationInterviewParticipation}>
            <div>Specialization: Interview Participation</div>
          </Paper>
          <Paper sx={styles.specialisationHardSkills}>
            <HardSkills />
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
    </SpecialisationTemplate>
  );
};

export default SpecialisationPage;