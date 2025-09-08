import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { DARK_THEME } from '@utils/constants/Theme/theme';
import { SKILLS_TYPES } from '@utils/constants/skillsTypes';
import HardSkillsDarkSvg from '../../../../assets/pictures/emptySkillsAndLayersPictures/skillsMascot/hardSkillsMascotDark.svg?react';
import SoftSkillsDarkSvg from '../../../../assets/pictures/emptySkillsAndLayersPictures/skillsMascot/softSkillsMascotDark.svg?react';
import HardSkillsLightSvg from '../../../../assets/pictures/emptySkillsAndLayersPictures/skillsMascot/hardSkillsMascotLight.svg?react';
import SoftSkillsLightSvg from '../../../../assets/pictures/emptySkillsAndLayersPictures/skillsMascot/softSkillsMascotLight.svg?react';
import { styles } from './EmptySkills.styles';

const EmptySkills = ({ skillType }) => {
  const { t } = useTranslation();
  const { mode } = useSelector((state) => state.theme);

  if (skillType === SKILLS_TYPES.HARD_SKILL) {
    return (
      <Box sx={styles.emptyHardSkills}>
        <Box sx={styles.mascotHardsBox}>{mode === DARK_THEME ? <HardSkillsDarkSvg /> : <HardSkillsLightSvg />}</Box>
        <Typography sx={styles.emptyHardsText} variant={'subtitle2'}>
          {t('specialization.hardSkills.emptySkills')}
        </Typography>
      </Box>
    );
  }
  if (skillType === SKILLS_TYPES.SOFT_SKILL) {
    return (
      <Box sx={styles.emptySoftSkills}>
        <Box sx={styles.mascotSoftsBox}>{mode === DARK_THEME ? <SoftSkillsDarkSvg /> : <SoftSkillsLightSvg />}</Box>
        <Typography variant={'subtitle2'}>{t('specialization.softSkills.emptySkills')}</Typography>
      </Box>
    );
  }
};

EmptySkills.propTypes = {
  skillType: PropTypes.oneOf([SKILLS_TYPES.HARD_SKILL, SKILLS_TYPES.SOFT_SKILL]),
};

export default EmptySkills;
