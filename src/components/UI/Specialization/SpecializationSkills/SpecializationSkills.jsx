import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { styles } from './SpecializationSkills.styles';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { ItemSkill } from '../SkillsItem';

const SpecializationSkills = ({ isLoading, isError, skills, averageMark, openModal, errorTitle, title, subTitle }) => {
  const { t } = useTranslation()

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography variant="h6">{t(errorTitle)}</Typography>;
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>
        <Typography variant="h6">{t(title)}</Typography>
        <IconButton sx={styles.btnIcon} aria-label="Edit user information" onClick={openModal}>
          <EditIcon />
        </IconButton>
      </Box>
      <Box sx={styles.skillsContainer}>
        {skills?.map((skill) => (
          <ItemSkill key={skill.id} name={skill.name} value={Math.round(skill.averageMark * 10) / 10} grows={skill.grows} />
        ))}
      </Box>
      <Box sx={styles.markWrapper}>
        <Typography variant="h6">{t(subTitle)}</Typography>
        <Typography sx={styles.mark} variant="h6">{`${averageMark}/10`}</Typography>
      </Box>
    </Box>
  );
};

SpecializationSkills.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      averageMark: PropTypes.number.isRequired,
      grows: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  averageMark: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  errorTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

export default SpecializationSkills;
