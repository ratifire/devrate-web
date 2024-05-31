import React, { useState } from 'react';
import { Box, IconButton, Link, Typography } from '@mui/material';
import { ReactComponent as EducationalCourses } from '../../../../../assets/icons/educationalCourses.svg';
import styles from './EducationItem.styles.js';
import PropTypes from 'prop-types';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DropdownMenu from '../../DropdownMenu/DropdownMenu';
import { useDeleteEducationByIdMutation } from '../../../../../redux/services/educationApiSlice';
import { useTranslation } from 'react-i18next';

const EducationItem = ({id, type, name, description, startYear, endYear}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [deleteEducationById] = useDeleteEducationByIdMutation();
  const { t } = useTranslation();


  const [anchorEl, setAnchorEl] = useState(null);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleEditFeature = () => {
    console.log('Editing feature');
    handleCloseMenu();
  };

  const handleDeleteFeature =  async () => {
    await deleteEducationById(id).unwrap();
    handleCloseMenu();
  };

  return (
    <Box sx={styles.educationItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        <Box sx={styles.logoTitleContainer}>
          <EducationalCourses />
          <Box sx={{ marginLeft: '11px' }}>
            <Typography variant='h6' sx={styles.courseTitle}>
              {type}
            </Typography>
            <Typography variant="subtitle2" sx={styles.schoolTitle}>
              {name} <span style={{ margin: '0 4px' }}>•</span> {startYear} - {endYear}
            </Typography>
          </Box>
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
      {isCollapsed ? (
        <Typography>
          {description.slice(0, 200) + ' '}
          <Link
            component='button'
            variant='subtitle2'
            sx={styles.link}
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            {t('profile.experienceSection.readAll')}
          </Link>
        </Typography>
      ) : (
        <Typography>
          {description + ' '}
          <Link
            component='button'
            variant='subtitle2'
            sx={styles.link}
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            {t('profile.experienceSection.collapse')}
          </Link>
        </Typography>
      )}
    </Box>
  );
};

EducationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startYear: PropTypes.number.isRequired,
  endYear: PropTypes.number.isRequired,
}

export default EducationItem;
