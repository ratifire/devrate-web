import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ItemSkill } from '../SkillsItem';
import { ErrorComponent } from '../../Exceptions';
import { SkillsSkeleton } from '../../Skeleton';
import HardMascot from '../../../../assets/icons/skillsMascot/hardSkillsMascot.svg?react';
import SoftMascot from '../../../../assets/icons/skillsMascot/softSkillsMascot.svg?react';
import { styles } from './SpecializationSkills.styles';

const SpecializationSkills = ({ isFetching, isError, skills, averageMark, openModal, title, subTitle }) => {
  const { activeSpecialization, mainSpecialization } = useSelector((state) => state.specialization);
  const isDisabled = !activeSpecialization && !mainSpecialization;
  const { t } = useTranslation();

  if (isFetching) {
    return <SkillsSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }
  const EmptySkills = ({ title }) => {
    if (title === 'Hard skills') {
      return (
        <Box sx={styles.emptyHardSkills}>
          <Box sx={styles.mascotHardsBox}>
            <HardMascot />
          </Box>
          <Typography sx={styles.emptyHardsText} variant={'subtitle2'}>
            {t('specialization.hardSkills.emptySkills')}
          </Typography>
        </Box>
      );
    }
    if (title === 'Soft skills') {
      return (
        <Box sx={styles.emptySoftSkills}>
          <Box sx={styles.mascotSoftsBox}>
            <SoftMascot />
          </Box>
          <Typography variant={'subtitle2'}>{t('specialization.softSkills.emptySkills')}</Typography>
        </Box>
      );
    }
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>
        <Typography variant='h6'>{title}</Typography>
        {openModal && (
          <IconButton aria-label='Edit user information' disabled={isDisabled} sx={styles.btnIcon} onClick={openModal}>
            <EditIcon />
          </IconButton>
        )}
      </Box>
      <Box>
        {skills.length > 0 ? (
          <Box sx={[styles.skillsContainer, title === 'Hard skills' ? styles.hardSkills : styles.softSkills]}>
            {skills.map((skill) => (
              <ItemSkill
                key={skill.id}
                grows={skill.grows}
                name={skill.name}
                value={Math.round(skill.averageMark * 10) / 10}
              />
            ))}
          </Box>
        ) : (
          <EmptySkills title={title} />
        )}
      </Box>
      <Box sx={styles.markWrapper}>
        <Typography variant='h6'>{subTitle}</Typography>
        <Typography sx={styles.mark} variant='h6'>{`${averageMark}/10`}</Typography>
      </Box>
    </Box>
  );
};

SpecializationSkills.propTypes = {
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      averageMark: PropTypes.number.isRequired,
      grows: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
  averageMark: PropTypes.string.isRequired,
  openModal: PropTypes.func,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default SpecializationSkills;
