import React from 'react';
import { Box, IconButton, styled, Tab, Tabs } from '@mui/material';
import styles from './ExperienceSection.styles';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Achievment from './Achievement/Achievment';
import { useTranslation } from 'react-i18next';
import WorkExperience from './WorkExperience/WorkExperience';
import { Add } from '@mui/icons-material';
import { openModal } from '../../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';

const ExperienceSection = () => {
  const [value, setValue] = React.useState('openExperience');

  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const handleAddFeature = () => dispatch(openModal({ modalName: value }));
  const renderAdditionalInfo = (value) => {
    {
      switch (value) {
        case 'openExperience':
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

  const StyledTabs = styled(Tabs)(({ theme }) => ({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.palette.primary[200],
    },
    '& .MuiTabs-indicatorSpan': {
      width: '100%',
      backgroundColor: theme.palette.primary.primary200,
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
        <StyledTabs
          value={value}
          onChange={handleChange}
          // sx={styles.tabsHeader}
          textColor='primary'
          indicatorColor='primary[200]'
        >
          <StyledTab value='openExperience' label={t('profile.experience.workExperience')} sx={styles.tabItem} />
          <StyledTab value='achievement' label={t('profile.experience.achievement')} sx={styles.tabItem} />
          <StyledTab value='skills' label={t('profile.experience.skills')} sx={styles.tabItem} />
          <StyledTab value='education' label={t('profile.experience.education')} sx={styles.tabItem} />
        </StyledTabs>
        <IconButton aria-label='Edit Work Experience' onClick={handleAddFeature}>
          <Add sx={styles.icon} />
        </IconButton>
      </Box>
      <Box sx={styles.experienceItemContainer}>{renderAdditionalInfo(value)}</Box>
    </Box>
  );
};
export default ExperienceSection;