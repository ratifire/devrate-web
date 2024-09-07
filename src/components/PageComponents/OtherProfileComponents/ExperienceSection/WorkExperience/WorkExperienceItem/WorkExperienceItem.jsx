import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './WorkExperienceItem.style';
import { useTranslation } from 'react-i18next';
import Responsibility from '../../../../../UI/Responsibility/Responsibility';
import PropTypes from 'prop-types';

const WorkExperienceItem = ({startYear, endYear, position, companyName, description, responsibilities }) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.workExperienceItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        <Typography variant='h5' sx={styles.workPosition}>
          {position}
        </Typography>
        <Typography variant="caption1" sx={styles.workDate}>
          {startYear} - {endYear > new Date().getFullYear() ? t('profile.experience.endYear') : endYear}
        </Typography>
      </Box>
      <Box sx={styles.workPlaceTitleWrapper}>
      <Typography variant="caption1" sx={styles.workPlaceTitle}>
        {companyName}
      </Typography>
      </Box>
      <Typography>{description}</Typography>
      <Box sx={styles.workDutiesContainer}>
        <Box sx={styles.workDuties}>
          {responsibilities.map((responsibility, index) => (
            <Responsibility key={index} responsibility={responsibility} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

WorkExperienceItem.propTypes = {
  id: PropTypes.number.isRequired,
  startYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  endYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  position: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  responsibilities: PropTypes.array.isRequired,
};

export default WorkExperienceItem;
