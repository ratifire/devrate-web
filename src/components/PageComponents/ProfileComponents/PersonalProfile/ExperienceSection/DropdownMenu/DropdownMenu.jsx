import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import { Divider, Menu, MenuItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { styles } from './DropdownMenu.styles';

const DropdownMenu = ({ anchorEl, handleCloseMenu, handleEditFeature, handleDeleteFeature, handleMainFeature }) => {
  const { t } = useTranslation();

  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} sx={styles.menu} onClose={handleCloseMenu}>
      <MenuItem sx={styles.menuItem} onClick={handleEditFeature}>
        <EditIcon sx={styles.itemIcon} />
        <Typography variant='caption1'>{t('dropDownMenu.edit')}</Typography>
      </MenuItem>
      <Divider sx={styles.divider} />
      <MenuItem sx={styles.menuItem} onClick={handleMainFeature}>
        <StarIcon sx={styles.itemIcon} />
        <Typography variant='caption1'>{t('dropDownMenu.main')}</Typography>
      </MenuItem>
      <Divider sx={styles.divider} />
      <MenuItem sx={styles.menuItem} onClick={handleDeleteFeature}>
        <DeleteIcon sx={styles.itemIcon} />
        <Typography variant='caption1'>{t('dropDownMenu.delete')}</Typography>
      </MenuItem>
    </Menu>
  );
};
export default DropdownMenu;

DropdownMenu.propTypes = {
  anchorEl: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  setAnchorEl: PropTypes.func,
  handleCloseMenu: PropTypes.func,
  handleEditFeature: PropTypes.func,
  handleDeleteFeature: PropTypes.func,
  handleMainFeature: PropTypes.func,
};
DropdownMenu.defaultProps = {
  anchorEl: false,
  setAnchorEl: null,
  handleCloseMenu: null,
  handleEditFeature: null,
  handleDeleteFeature: null,
  handleMainFeature: null,
};
