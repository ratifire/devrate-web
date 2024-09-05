import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './WorkExperienceItem.style';
import { useTranslation } from 'react-i18next';
import Responsibility from '../../../../../UI/Responsibility/Responsibility';
import PropTypes from 'prop-types';

const WorkExperienceItem = ({startDate, endDate, position, companyName, description, responsibilities }) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.workExpeirenceItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        <Typography variant='h5' sx={styles.workPosition}>
          {position}
        </Typography>
        <Typography variant="caption1" sx={styles.workDate}>
          {startDate.slice(0,4)} - {new Date(endDate) > new Date() ? t('profile.experience.endYear') : endDate.slice(0,4)}
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
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  responsibilities: PropTypes.array.isRequired,
};

export default WorkExperienceItem;
