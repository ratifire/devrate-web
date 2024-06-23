import React from 'react';
import {Box, Container, Paper, Typography} from '@mui/material';
import { styles } from './SpecialisationPage.style';
import SpecializationTemplate from '../../Templates/SpecializationTemplate';
import ProfileHeader from '../../components/ProfileComponents/ProfileHeader';
import SpecializationLevel from '../../components/SpecializationComponents/SpecializationLevel/SpecializationLevel';
import HardSkills from '../../components/SpecializationComponents/HardSkills/HardSkills';
import SpecialisationCategories from '../../components/SpecializationComponents/SpecializationCategories';
import LevelChart from "../../components/SpecializationComponents/Statistics/LevelChart/LevelChart";
import SkillsAssessmentChart
  from "../../components/SpecializationComponents/Statistics/SkillAssessmentChart/SkillsAssessmentChart";
import HardSkillsChart from "../../components/SpecializationComponents/Statistics/HardSkillsChart/HardSkillsChart";
import InterviewChart from "../../components/SpecializationComponents/Statistics/InteviewChart/InterviewChart";
import {useTranslation} from "react-i18next";

const SpecializationPage = () => {
  const { t } = useTranslation();
  
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
            <HardSkills />
          </Paper>
          <Paper sx={styles.specialisationSoftSkills}>
            <div>Soft Skills</div>
          </Paper>
          <Paper sx={styles.specialisationStatistics}>
            <Typography sx={styles.statisticTitle}>
              {t('specialisation.statistics.title')}
            </Typography>
            <Box sx={styles.statisticWrapper}>
              <Paper sx={styles.level}>
                <LevelChart/>
              </Paper>
              <Paper sx={styles.averageSkillsScore}>
                <SkillsAssessmentChart/>
              </Paper>
              <Paper sx={styles.hardSkillsByProductivity}>
                <HardSkillsChart/>
              </Paper>
              <Paper sx={styles.interview}>
                <InterviewChart/>
              </Paper>
            </Box>
          </Paper>
        </Box>
      </Container>
    </SpecializationTemplate>
  );
};

export default SpecializationPage;
