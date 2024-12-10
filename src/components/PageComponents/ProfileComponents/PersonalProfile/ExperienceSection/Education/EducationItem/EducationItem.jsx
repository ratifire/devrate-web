import { useMemo, useState } from 'react';
import { Box, IconButton, Link, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import DropdownMenu from '../../DropdownMenu';
import { useDeleteEducationByIdMutation } from '../../../../../../../redux/services/educationApiSlice';
import { setEducationDataToEdit } from '../../../../../../../redux/user/education/educationSlice';
import { openModal } from '../../../../../../../redux/modal/modalSlice';
import styles from './EducationItem.styles.js';

const LENGTH_TO_COLLAPSE = 200;

const EducationItem = ({ id, type, name, description, startYear, endYear, icon: IconComponent }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const dispatch = useDispatch();
  const [deleteEducationById] = useDeleteEducationByIdMutation();
  const { t } = useTranslation();
  const excerpt = useMemo(() => description.slice(0, LENGTH_TO_COLLAPSE), [description]);
  const needCollapse = description.length >= LENGTH_TO_COLLAPSE;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditFeature = () => {
    dispatch(
      setEducationDataToEdit({
        id,
        type,
        name,
        description,
        startYear,
        endYear,
      })
    );
    dispatch(openModal({ modalName: 'education' }));
    handleCloseMenu();
  };

  const handleDeleteFeature = async () => {
    await deleteEducationById(id).unwrap();
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
