import React from 'react';
import { Box, IconButton, styled, Tab, Tabs } from '@mui/material';
import styles from './ExperienceSection.styles';
import Education from './Education/Education';
import Skills from './Skills';
import Achievement from './Achievement';
import { useTranslation } from 'react-i18next';
import WorkExperience from './WorkExperience/WorkExperience';
import { Add } from '@mui/icons-material';
import { openModal } from '../../../../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { emptyPersonalTabsPictures } from '../../../../../utils/constants/emptyTabsPictures';

const ExperienceSection = () => {
  const [value, setValue] = React.useState('workExperience');
  const { t } = useTranslation();

  const profileType = 'personal';

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const handleAddFeature = () => dispatch(openModal({ modalName: value }));
  const tab = {
    workExperience: <WorkExperience tab={'workExperience'} profileType={profileType}
                                    imgUrl={emptyPersonalTabsPictures.emptyWorkExperiencePic} />,
    achievement: <Achievement tab={'achievement'} profileType={profileType}
                              imgUrl={emptyPersonalTabsPictures.emptyAchievementPic} />,
    skills: <Skills tab={'skills'} profileType={profileType} imgUrl={emptyPersonalTabsPictures.emptySkillsPic} />,
    education: <Education tab={'education'} profileType={profileType}
                          imgUrl={emptyPersonalTabsPictures.emptyEducationPic} />,
  };


  const renderBtn = (value) => {
    const tab = {
      workExperience: (
        <IconButton sx={styles.iconBtn} aria-label="Edit Work Experience" onClick={handleAddFeature}>
          <Add />
        </IconButton>
      ),
      achievement: (
        <IconButton sx={styles.iconBtn} aria-label="Edit Achievement" onClick={handleAddFeature}>
          <Add />
        </IconButton>
      ),
      skills: <></>,
      education: (
        <IconButton sx={styles.iconBtn} aria-label="Edit Education" onClick={handleAddFeature}>
          <Add />
        </IconButton>
      ),
    };

    return tab[value] ? (
      tab[value]
    ) : (
      <IconButton sx={styles.iconBtn} aria-label="Edit Work Experience" onClick={handleAddFeature}>
        <Add />
      </IconButton>
    );
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
      <Box sx={styles.tabsContainer}>
        <StyledTabs sx={styles.wrapperTab} value={value} onChange={handleChange} textColor="primary"
                    indicatorColor="primary[200]">
          <StyledTab value="workExperience" label={t('profile.experience.workExperience.tabName')}
                     sx={styles.tabItem} />
          <StyledTab value="achievement" label={t('profile.experience.achievement.tabName')} sx={styles.tabItem} />
          <StyledTab value="skills" label={t('profile.experience.skills.tabName')} sx={styles.tabItem} />
          <StyledTab value="education" label={t('profile.experience.education.tabName')} sx={styles.tabItem} />
        </StyledTabs>
        {renderBtn(value)}
      </Box>
      <Box sx={styles.experienceItemContainer}>{tab[value]}</Box>
    </Box>
  );
};
export default ExperienceSection;
