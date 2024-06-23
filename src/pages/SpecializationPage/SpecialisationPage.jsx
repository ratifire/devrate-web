import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import { styles } from './SpecialisationPage.style';
import SpecializationTemplate from '../../Templates/SpecializationTemplate';
import ProfileHeader from '../../components/ProfileComponents/ProfileHeader';
import SpecializationLevel from '../../components/SpecializationComponents/SpecializationLevel/SpecializationLevel';
import HardSkills from '../../components/SpecializationComponents/HardSkills/HardSkills';
import SpecialisationCategories from '../../components/SpecializationComponents/SpecializationCategories';
import Interviews from '../../components/SpecializationComponents/Interviews'

const SpecializationPage = () => {
  return (
    <SpecializationTemplate>
      <ProfileHeader/>
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.specialisationTaxonomy}>
            <SpecialisationCategories />
          </Paper>
          <Paper sx={styles.specialisationLevel}>
            <SpecializationLevel />
          </Paper>
          <Paper sx={styles.specialisationInterviewParticipation}>
            <Interviews />
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
    </SpecializationTemplate>
  );
};

export default SpecializationPage;