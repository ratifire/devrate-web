import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { DARK_THEME } from '@utils/constants/Theme/theme.js';

import HardSkillsDarkSvg from '../../../../assets/pictures/emptySkillsAndLayersPictures/skillsMascot/hardSkillsMascotDark.svg?react';
import SoftSkillsDarkSvg from '../../../../assets/pictures/emptySkillsAndLayersPictures/skillsMascot/softSkillsMascotDark.svg?react';

import HardSkillsLightSvg from '../../../../assets/pictures/emptySkillsAndLayersPictures/skillsMascot/hardSkillsMascotLight.svg?react';
import SoftSkillsLightSvg from '../../../../assets/pictures/emptySkillsAndLayersPictures/skillsMascot/softSkillsMascotLight.svg?react';
import { styles } from './EmptySkills.styles.js';

const EmptySkills = ({ title }) => {
  const { t } = useTranslation();
  const { mode } = useSelector((state) => state.theme);

  if (title === 'Hard skills') {
    return (
      <Box sx={styles.emptyHardSkills}>
        <Box sx={styles.mascotHardsBox}>{mode === DARK_THEME ? <HardSkillsDarkSvg /> : <HardSkillsLightSvg />}</Box>
        <Typography sx={styles.emptyHardsText} variant={'subtitle2'}>
          {t('specialization.hardSkills.emptySkills')}
        </Typography>
      </Box>
    );
  }
  if (title === 'Soft skills') {
    return (
      <Box sx={styles.emptySoftSkills}>
        <Box sx={styles.mascotSoftsBox}>{mode === DARK_THEME ? <SoftSkillsDarkSvg /> : <SoftSkillsLightSvg />}</Box>
        <Typography variant={'subtitle2'}>{t('specialization.softSkills.emptySkills')}</Typography>
      </Box>
    );
  }
};

EmptySkills.propTypes = {
  title: PropTypes.string.isRequired,
};

export default EmptySkills;
