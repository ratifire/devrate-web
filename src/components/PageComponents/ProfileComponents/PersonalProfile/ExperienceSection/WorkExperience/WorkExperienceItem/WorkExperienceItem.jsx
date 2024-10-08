import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './WorkExperienceItem.styles.js';
import { useTranslation } from 'react-i18next';
import Responsibility from '../../../../../../UI/Responsibility/Responsibility';
import DropdownMenu from '../../DropdownMenu/DropdownMenu';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../../../../redux/modal/modalSlice';
import { useDeleteWorkExperienceByIdMutation } from '../../../../../../../redux/workExperience/workExperienceApiSlice';

const WorkExperienceItem = ({ id, startYear, endYear, position, companyName, description, responsibilities }) => {
  const [deleteWorkExperienceMutation] = useDeleteWorkExperienceByIdMutation();
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditFeature = () => {
    dispatch(openModal({ modalName: 'workExperience', data: { id, position, companyName, description, responsibilities, startYear, endYear } }));
    handleCloseMenu();
  };

  const handleDeleteFeature = async () => {
    await deleteWorkExperienceMutation(id).unwrap();
  };

  return (
    <Box sx={styles.workExperienceItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        <Box sx={styles.workTitleContainer}>
          <Typography variant='h5' sx={styles.workPosition}>
            {position}
          </Typography>
          <Typography variant="subtitle3" sx={styles.workPlaceTitle}>
            {companyName} <span style={{ margin: '0 4px' }}>•</span>
            {endYear === '9999' ? `${startYear} - present` : `${startYear} - ${endYear}`}
          </Typography>
        </Box>
        <Box sx={styles.menuIcon}>
          <IconButton onClick={(event) => handleMenuOpen(event)} sx={styles.iconBtnModal}>
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
  id: PropTypes.number.isRequired,
  startYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  endYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  position: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  responsibilities: PropTypes.array.isRequired,
};

export default WorkExperienceItem;
