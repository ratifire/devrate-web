import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import Responsibility from '../../../../../../UI/Responsibility/Responsibility';
import DropdownMenu from '../../DropdownMenu/DropdownMenu';
import { useDeleteWorkExperienceByIdMutation } from '../../../../../../../redux/services/workExperienceApiSlice.js';
import { openModal } from '../../../../../../../redux/modal/modalSlice.js';
import styles from './WorkExperienceItem.styles.js';

const WorkExperienceItem = ({ id, startYear, endYear, position, companyName, description, responsibilities }) => {
  const [deleteWorkExperienceMutation] = useDeleteWorkExperienceByIdMutation();
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditFeature = () => {
    handleCloseMenu();
    dispatch(
      openModal({
        modalType: 'workExperienceEditModal',
        data: {
          id: id,
          position: position,
          companyName: companyName,
          description: description,
          responsibilities: responsibilities,
          startYear: startYear,
          endYear: endYear,
          currentDate: endYear,
        },
      })
    );
  };

  const handleDeleteFeature = async () => {
    try {
      await deleteWorkExperienceMutation(id).unwrap();
      enqueueSnackbar(t('modalNotifyText.workExperience.delete.success'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.workExperience.delete.error'), { variant: 'error' });
    }
  };

  return (
    <Box sx={styles.workExperienceItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        <Box sx={styles.workTitleContainer}>
          <Typography sx={styles.workPosition} variant='h5'>
            {position}
          </Typography>
          <Typography sx={styles.workPlaceTitle} variant='subtitle3'>
            {companyName} <span style={{ margin: '0 4px' }}>•</span>
            {endYear === '9999' ? `${startYear} - ${t('profile.experience.endYear')}` : `${startYear} - ${endYear}`}
          </Typography>
        </Box>
        <Box sx={styles.menuIcon}>
          <IconButton sx={styles.iconBtnModal} onClick={(event) => handleMenuOpen(event)}>
            <MoreVertIcon />
          </IconButton>
        </Box>{' '}
        <DropdownMenu
          anchorEl={anchorEl}
          handleCloseMenu={handleCloseMenu}
          handleDeleteFeature={handleDeleteFeature}
          handleEditFeature={handleEditFeature}
        />
      </Box>
      <Typography>{description}</Typography>
      <Box sx={styles.workDutiesContainer}>
        <Typography sx={styles.workDutiesTitle} variant='h6'>
          {t('profile.experience.duties')}
        </Typography>
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
