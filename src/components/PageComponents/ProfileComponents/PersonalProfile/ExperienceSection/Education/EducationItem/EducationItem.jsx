import { useMemo, useState } from 'react';
import { Box, IconButton, Link, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import DropdownMenu from '../../DropdownMenu';
import { useDeleteEducationByIdMutation } from '../../../../../../../redux/services/educationApiSlice';
import { openModal } from '../../../../../../../redux/modal/modalSlice';
import { modalNames } from '../../../../../../../utils/constants/modalNames.js';
import styles from './EducationItem.styles.js';

const LENGTH_TO_COLLAPSE = 200;

const EducationItem = ({ id, type, name, description, startYear, endYear, icon: IconComponent }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const dispatch = useDispatch();
  const [deleteEducationById] = useDeleteEducationByIdMutation();
  const { t } = useTranslation();
  const excerpt = useMemo(() => description.slice(0, LENGTH_TO_COLLAPSE), [description]);
  const needCollapse = description.length >= LENGTH_TO_COLLAPSE;
  const { enqueueSnackbar } = useSnackbar();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditFeature = () => {
    dispatch(
      openModal({
        modalType: modalNames.educationEditModal,
        data: {
          id: id,
          type: type,
          name: name,
          description: description,
          startYear: startYear,
          endYear: endYear,
        },
      })
    );
    handleCloseMenu();
  };

  const handleDeleteFeature = async () => {
    try {
      await deleteEducationById(id).unwrap();
      enqueueSnackbar(t('modalNotifyText.achievement.delete.success'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.achievement.delete.error'), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
    }

    handleCloseMenu();
  };

  return (
    <Box sx={styles.educationItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        <Box sx={styles.logoTitleContainer}>
          {IconComponent && <IconComponent height={48} width={48} />}
          <Box sx={{ marginLeft: '11px' }}>
            <Typography sx={styles.courseTitle} variant='h6'>
              {type}
            </Typography>
            <Typography sx={styles.schoolTitle} variant='subtitle2'>
              {name} <span style={{ margin: '0 4px' }}>•</span> {startYear} - {endYear}
            </Typography>
          </Box>
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
      <Typography>
        {isCollapsed && needCollapse ? excerpt : description}
        &nbsp;
        {needCollapse && (
          <Link
            component='button'
            sx={styles.link}
            variant='subtitle2'
            onClick={() => {
              setIsCollapsed((oldVal) => !oldVal);
            }}
          >
            {isCollapsed ? t('profile.experienceSection.readAll') : t('profile.experienceSection.collapse')}
          </Link>
        )}
      </Typography>
    </Box>
  );
};

EducationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startYear: PropTypes.number.isRequired,
  endYear: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]).isRequired,
  icon: PropTypes.elementType,
};

export default EducationItem;
