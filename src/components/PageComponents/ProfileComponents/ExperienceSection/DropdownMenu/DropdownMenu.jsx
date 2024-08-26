import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Divider, Menu, MenuItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { styles } from './DropdownMenu.styles';

const DropdownMenu = ({ anchorEl, handleCloseMenu, handleEditFeature, handleDeleteFeature }) => {
  const { t } = useTranslation();

  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} sx={styles.menu}>
      <MenuItem onClick={handleEditFeature} sx={styles.menuItem}>
        <EditIcon sx={styles.itemIcon} />
        <Typography variant='caption1'>{t('dropDownMenu.edit')}</Typography>
      </MenuItem>
      <Divider sx={styles.divider} />
      <MenuItem onClick={handleDeleteFeature} sx={styles.menuItem}>
        <DeleteIcon sx={styles.itemIcon} />
        <Typography variant='caption1'>{t('dropDownMenu.delete')}</Typography>
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
