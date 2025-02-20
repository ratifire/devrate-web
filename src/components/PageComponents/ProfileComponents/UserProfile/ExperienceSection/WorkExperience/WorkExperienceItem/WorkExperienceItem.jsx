import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Responsibility from '@components/UI/Responsibility/Responsibility';
import styles from './WorkExperienceItem.styles';

const WorkExperienceItem = ({ startYear, endYear, position, companyName, description, responsibilities }) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.workExperienceItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        <Typography sx={styles.workPosition} variant='h5'>
          {position}
        </Typography>
        <Typography sx={styles.workDate} variant='caption1'>
          {startYear} - {endYear > new Date().getFullYear() ? t('profile.experience.endYear') : endYear}
        </Typography>
      </Box>
      <Box sx={styles.workPlaceTitleWrapper}>
        <Typography sx={styles.workPlaceTitle} variant='caption1'>
          {companyName}
        </Typography>
      </Box>
      <Typography>{description}</Typography>
      <Box sx={styles.workDutiesContainer}>
        <Box sx={styles.workDuties}>
          {responsibilities.map((responsibility, index) => (
            // eslint-disable-next-line react/no-array-index-key
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
