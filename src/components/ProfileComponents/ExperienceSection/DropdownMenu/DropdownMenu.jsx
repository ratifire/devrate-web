import * as React from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styles } from './DropdownMenu.styles';
import PropTypes from 'prop-types';

const DropdownMenu = ({ anchorEl, handleCloseMenu, handleEditFeature, handleDeleteFeature }) => {
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} sx={styles.menu}>
      <MenuItem onClick={handleEditFeature} sx={styles.menuItem}>
        <EditIcon sx={styles.itemIcon} />
        <Typography variant='caption1'>Редагувати</Typography>
      </MenuItem>
      <MenuItem onClick={handleDeleteFeature} sx={styles.menuItem}>
        <DeleteIcon sx={styles.itemIcon} />
        <Typography variant='caption1'>Видалити</Typography>
      </MenuItem>
    </Menu>
  );
};
export default DropdownMenu;

DropdownMenu.propTypes = {
  anchorEl: PropTypes.object,
  setAnchorEl: PropTypes.func,
  handleCloseMenu: PropTypes.func,
  handleEditFeature: PropTypes.func,
  handleDeleteFeature: PropTypes.func,
};
DropdownMenu.defaultProps = {
  anchorEl: false,
  setAnchorEl: null,
  handleCloseMenu: null,
  handleEditFeature: null,
  handleDeleteFeature: null,
};
