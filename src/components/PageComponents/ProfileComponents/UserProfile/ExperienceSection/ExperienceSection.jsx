import React from 'react';
import { Box, styled, Tab, Tabs } from '@mui/material';
import styles from './ExperienceSection.styles';
import Education from '../../UserProfile/ExperienceSection/Education';
import Skills from '../../UserProfile/ExperienceSection/Skills';
import Achievement from '../../UserProfile/ExperienceSection/Achievement';
import { useTranslation } from 'react-i18next';
import WorkExperience from './WorkExperience';
import PropTypes from 'prop-types';

const ExperienceSection = ({ id }) => {
  const [value, setValue] = React.useState('openExperience');
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tab = {
    openExperience: <WorkExperience id={id} tab={'workExperience'}/>,
    achievement: <Achievement id={id} tab={'achievement'}/>,
    skills: <Skills id={id} tab={'skills'}/>,
    education: <Education id={id} tab={'education'}/>,
  };

  const StyledTabs = styled(Tabs)(({ theme }) => ({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.palette.primary[200],
    },
    '& .MuiTabs-indicatorSpan': {
      width: '100%',
      backgroundColor: theme.palette.primary[200],
    },
  }));

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    '&.Mui-selected': {
      color: theme.palette.primary[200],
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }));
  return (
    <Box sx={styles.experienceContainer}>
      <Box style={styles.tabsContainer}>
        <StyledTabs sx={styles.wrapperTab} value={value} onChange={handleChange} textColor="primary"
                    indicatorColor="primary[200]">
          <StyledTab value="openExperience" label={t('profile.experience.workExperience.tabName')}
                     sx={styles.tabItem} />
          <StyledTab value="achievement" label={t('profile.experience.achievement.tabName')} sx={styles.tabItem} />
          <StyledTab value="skills" label={t('profile.experience.skills.tabName')} sx={styles.tabItem} />
          <StyledTab value="education" label={t('profile.experience.education.tabName')} sx={styles.tabItem} />
        </StyledTabs>
      </Box>
      <Box sx={styles.experienceItemContainer}>{tab[value]}</Box>
    </Box>
  );
};

ExperienceSection.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};


export default ExperienceSection;
