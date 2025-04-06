import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ItemSkill } from '../SkillsItem';
import { ErrorComponent } from '../../Exceptions';
import { SkillsSkeleton } from '../../Skeleton';
import EmptySkills from '../EmptySkills/index.js';
import { styles } from './SpecializationSkills.styles';

const SpecializationSkills = ({ isFetching, isError, skills, averageMark, openModal, title, subTitle }) => {
  const { activeSpecialization, mainSpecialization } = useSelector((state) => state.specialization);
  const isDisabled = !activeSpecialization && !mainSpecialization;
  if (isFetching) {
    return <SkillsSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

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
