import { useEffect, useState } from 'react';
import { Box, IconButton, Tab, Tabs } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Add } from '@mui/icons-material';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router';
// import { openModal } from '../../../../../redux/modal/modalSlice';
import { useModalQueryParams } from '../../../../../utils/hooks/useModalQueryParams.js';
import styles from './ExperienceSection.styles';
import Education from './Education/Education';
import Skills from './Skills';
import Achievement from './Achievement';
import WorkExperience from './WorkExperience/WorkExperience';

const ExperienceSection = () => {
  const { t } = useTranslation();
  const buttonStates = useSelector((state) => state.button);
  // const dispatch = useDispatch();
  const [value, setValue] = useState('workExperience');
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSearchParams({ tab: newValue });
  };

  const { openModal } = useModalQueryParams();

  const handleAddFeature = (modalType) => {
    // dispatch(openModal({ modalType: modal }));
    openModal(modalType);
  };

  useEffect(() => {
    const tab = searchParams.get('tab');

    setValue(tab ? tab : 'workExperience');
  }, []);

  const tab = {
    workExperience: <WorkExperience tab={'workExperience'} />,
    achievement: <Achievement tab={'achievement'} />,
    skills: <Skills tab={'skills'} />,
    education: <Education tab={'education'} />,
  };

  const tabButtonPlus = {
    workExperience: (
      <IconButton sx={styles.iconBtn} onClick={() => handleAddFeature('workExperienceModal')}>
        <Add />
      </IconButton>
    ),
    achievement: (
      <IconButton sx={styles.iconBtn} onClick={() => handleAddFeature('achievementModal')}>
        <Add />
      </IconButton>
    ),
    skills: <></>,
    education: (
      <IconButton sx={styles.iconBtn} onClick={() => handleAddFeature('educationModal')}>
        <Add />
      </IconButton>
    ),
  };

  return (
    <Box sx={styles.experienceContainer}>
      <Box sx={styles.tabsContainer}>
        <Tabs sx={styles.wrapperTab} value={value} onChange={handleChange}>
          <Tab
            disableRipple
            label={t('profile.experience.workExperience.tabName')}
            sx={styles.tabItem}
            value='workExperience'
          />
          <Tab
            disableRipple
            label={t('profile.experience.achievement.tabName')}
            sx={styles.tabItem}
            value='achievement'
          />
          <Tab disableRipple label={t('profile.experience.skills.tabName')} sx={styles.tabItem} value='skills' />
          <Tab disableRipple label={t('profile.experience.education.tabName')} sx={styles.tabItem} value='education' />
        </Tabs>
        {buttonStates[value] && tabButtonPlus[value]}
      </Box>
      <Box sx={styles.experienceItemContainer}>{tab[value]}</Box>
    </Box>
  );
};

export default ExperienceSection;
