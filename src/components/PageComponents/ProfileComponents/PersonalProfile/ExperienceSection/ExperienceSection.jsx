import React, { useState } from 'react';
import { Box, IconButton, Tab, Tabs } from '@mui/material';
import styles from './ExperienceSection.styles';
import Education from './Education/Education';
import Skills from './Skills';
import Achievement from './Achievement';
import { useTranslation } from 'react-i18next';
import WorkExperience from './WorkExperience/WorkExperience';
import { Add } from '@mui/icons-material';
import { openModal } from '../../../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

const ExperienceSection = () => {
  const [value, setValue] = useState('workExperience');
  const { t } = useTranslation();
  const buttonStates  = useSelector((state) => state.button);
  const dispatch = useDispatch();


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAddFeature = () => {
    dispatch(openModal({ modalName: value }));
  };


  const tab = {
    workExperience: <WorkExperience tab={'workExperience'}/>,
    achievement: <Achievement tab={'achievement'}/>,
    skills: <Skills tab={'skills'}/>,
    education: <Education tab={'education'} />,
  };


  const tabButtonPlus = {
    workExperience:
      <IconButton
        sx={styles.iconBtn}
        onClick={handleAddFeature}
      >
        <Add />
      </IconButton>,
    achievement:
      <IconButton
        sx={styles.iconBtn}
        onClick={handleAddFeature}
      >
        <Add />
      </IconButton>,
    skills: <></>,
    education:
      <IconButton
        sx={styles.iconBtn}
        onClick={handleAddFeature}
      >
        <Add />
      </IconButton>,
  };

  return (
    <Box sx={styles.experienceContainer}>
      <Box sx={styles.tabsContainer}>
        <Tabs sx={styles.wrapperTab} value={value} onChange={handleChange}>
          <Tab disableRipple value="workExperience" label={t('profile.experience.workExperience.tabName')}
                     sx={styles.tabItem} />
          <Tab disableRipple value="achievement" label={t('profile.experience.achievement.tabName')} sx={styles.tabItem} />
          <Tab disableRipple value="skills" label={t('profile.experience.skills.tabName')} sx={styles.tabItem} />
          <Tab disableRipple value="education" label={t('profile.experience.education.tabName')} sx={styles.tabItem} />
        </Tabs>
        {buttonStates[value] && tabButtonPlus[value]}
      </Box>
      <Box sx={styles.experienceItemContainer}>{tab[value]}</Box>
    </Box>
  );
};

export default ExperienceSection;
