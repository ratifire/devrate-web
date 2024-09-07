import React from 'react';
import { Box, styled, Tab, Tabs } from '@mui/material';
import styles from './ExperienceSection.styles';
import Education from '../../OtherProfileComponents/ExperienceSection/Education';
// import Skills from '../../OtherProfileComponents/ExperienceSection/Skills';
import Achievement from '../../OtherProfileComponents/ExperienceSection/Achievement';
import { useTranslation } from 'react-i18next';
import WorkExperience from './WorkExperience';
import PropTypes from 'prop-types';

const ExperienceSection = ({id}) => {
  const [value, setValue] = React.useState('openExperience');
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderAdditionalInfo = (value) => {
    const tab = {
      openExperience: <WorkExperience id={id}/>,
      achievement: <Achievement id={id}/>,
      // skills: <Skills id={id}/>,
      education: <Education id={id}/>,
    };

    return tab[value] ? tab[value] : <WorkExperience />;
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
        <StyledTabs value={value} onChange={handleChange} textColor='primary' indicatorColor='primary[200]'>
          <StyledTab value='openExperience' label={t('profile.experience.workExperience')} sx={styles.tabItem} />
          <StyledTab value='achievement' label={t('profile.experience.achievement')} sx={styles.tabItem} />
          {/*<StyledTab value='skills' label={t('profile.experience.skills')} sx={styles.tabItem} />*/}
          <StyledTab value='education' label={t('profile.experience.education')} sx={styles.tabItem} />
        </StyledTabs>
      </Box>
      <Box sx={styles.experienceItemContainer}>{renderAdditionalInfo(value)}</Box>
    </Box>
  );
};

ExperienceSection.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};


export default ExperienceSection;
