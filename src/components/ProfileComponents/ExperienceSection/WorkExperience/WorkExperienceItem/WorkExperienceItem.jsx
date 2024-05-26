import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import styles from './WorkExperienceItem.styles.js';
import { useTranslation } from 'react-i18next';
import Responsibility from '../../../../UI/Responsibility/Responsibility';
import DropdownMenu from '../../DropdownMenu/DropdownMenu';
import PropTypes from 'prop-types';

// const mockData = [
//   'BackEnd development',
//   'Leading the design and architecture discussions',
//   'Collaboration with cross-functional teams',
//   'Ensuring code quality and maintainability',
//   'Service/database architecture design and implementation',
// ];

const WorkExperienceItem = ({ startDate, endDate, position, companyName, description, responsibilities}) => {
  const [anchorEl, setAnchorEl] = useState(false);

  const { t } = useTranslation();
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleEditFeature = () => {
    console.log('EditFeature');
  };

  const handleDeleteFeature = () => {
    console.log('DeleteFeature');
  };
  // const text =
  //   'Prosper є лідером у сфері фінтеху, пропонуючи платформу пірингового кредитування, ' +
  //   'яка поєднує передові технології з фінансовими послугами. Вони використовують ' +
  //   'алгоритми на основі даних для ефективної та справедливої обробки кредитів, що робить ' +
  //   'їх актуальними для розробників програмного забезпечення, зацікавлених у перетині технологій ' +
  //   'та фінансів.';
  return (
    <Box sx={styles.workExpeirenceItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        <Box sx={styles.workTitleContainer}>
          <Typography variant='h5' sx={styles.workPosition}>
            {position}
          </Typography>
          <Typography variant='subtitle3' sx={styles.workPlaceTitle}>
            {companyName} {startDate} - {endDate}
          </Typography>
        </Box>
        <Box sx={styles.menuIcon}>
          <IconButton onClick={(event) => handleMenuOpen(event)}>
            <MoreVertIcon />
          </IconButton>
        </Box>{' '}
        <DropdownMenu
          anchorEl={anchorEl}
          handleCloseMenu={handleCloseMenu}
          handleEditFeature={handleEditFeature}
          handleDeleteFeature={handleDeleteFeature}
        />
      </Box>
      <Typography>{description}</Typography>
      <Box sx={styles.workDutiesContainer}>
        <Typography variant='h6' sx={styles.workDutiesTitle}>
          {t('profile.experience.duties')}
        </Typography>
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
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  responsibilities: PropTypes.array.isRequired,
}

export default WorkExperienceItem;
