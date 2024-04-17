import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { useTranslation } from 'react-i18next';

import WorkExperience from './WorkExperience/WorkExperience';
import Achievment from './Achievement/Achievment';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import styles from './ExperienceSection.styles';
import { Add } from '@mui/icons-material';

const ExperienceSection = () => {
  const [value, setValue] = React.useState('workExperience');

  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderAdditionalInfo = (value) => {
    {
      switch (value) {
        case 'workExperience':
          return <WorkExperience />;
        case 'achievement':
          return <Achievment />;
        case 'skills':
          return <Skills />;
        case 'education':
          return <Education />;
        default:
          return <WorkExperience />;
      }
    }
  };

  return (
    <Box sx={styles.experienceContainer}>
      <Box style={styles.tabsContainer}>
        <Tabs value={value} onChange={handleChange} aria-label='secondary tabs example' sx={styles.tabsHeader}>
          <Tab value='workExperience' label={t('profile.experience.workExperience')} sx={styles.tabItem} />
          <Tab value='achievement' label={t('profile.experience.achievement')} sx={styles.tabItem} />
          <Tab value='skills' label={t('profile.experience.skills')} sx={styles.tabItem} />
          <Tab value='education' label={t('profile.experience.education')} sx={styles.tabItem} />
        </Tabs>
        <Add sx={styles.icon} />
      </Box>
      <Box sx={styles.experienceItemContainer}>{renderAdditionalInfo(value)}</Box>
    </Box>
  );
};
export default ExperienceSection;
