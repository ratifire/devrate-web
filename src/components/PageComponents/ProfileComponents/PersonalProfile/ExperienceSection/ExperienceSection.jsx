import { useEffect, useState } from 'react';
import { Box, IconButton, Tab, Tabs } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Add } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router';
import { useModalController } from '@utils/hooks/useModalController.js';
import CustomTooltip from '@components/UI/CustomTooltip/index.js';
import styles from './ExperienceSection.styles';
import Education from './Education/Education';
import Skills from './Skills';
import Achievement from './Achievement';
import WorkExperience from './WorkExperience/WorkExperience';
import Video from './Video';

const ExperienceSection = () => {
  const { t } = useTranslation();
  const buttonStates = useSelector((state) => state.button);
  const [value, setValue] = useState('workExperience');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { openModal } = useModalController();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSearchParams({ tab: newValue });
  };

  useEffect(() => {
    if (location.pathname === '/profile' && location.search === '') {
      setSearchParams({ tab: value });
    }

    const tab = searchParams.get('tab');

    setValue(tab ? tab : 'workExperience');
  }, []);

  const tab = {
    workExperience: <WorkExperience tab={'workExperience'} />,
    achievement: <Achievement tab={'achievement'} />,
    video: <Video tab={'video'} />,
    skills: <Skills tab={'skills'} />,
    education: <Education tab={'education'} />,
  };

  const tabButtonPlus = {
    workExperience: (
      <CustomTooltip title={t('profile.experience.workExperience.emptyTabName.button')}>
        <IconButton sx={styles.iconBtn} onClick={() => openModal('workExperienceModal')}>
          <Add />
        </IconButton>
      </CustomTooltip>
    ),
    achievement: (
      <IconButton sx={styles.iconBtn} onClick={() => openModal('achievementModal')}>
        <Add />
      </IconButton>
    ),
    skills: <></>,
    video: <></>,
    education: (
      <IconButton sx={styles.iconBtn} onClick={() => openModal('educationModal')}>
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
          <Tab disableRipple label={t('profile.experience.video.tabName')} sx={styles.tabItem} value='video' />
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
