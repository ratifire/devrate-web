import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
// import AchievementEditModal from '../../../../../../ModalsComponents/ProfileModals/AchievementModal/AchievementEditModal';
import { useDispatch } from 'react-redux';
import { useDeleteAchievementMutation } from '../../../../../../../redux/services/achievementsApiSlice.js';
import DropdownMenu from '../../DropdownMenu';
import { openModal } from '../../../../../../../redux/modal/modalSlice.js';
import styles from './AchievementItem.styles.js';

const AchievementItem = ({ achievement, icon: IconComponent }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteAchievement] = useDeleteAchievementMutation();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

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
        modalType: 'achievementEditModal',
        data: {
          id: achievement?.id,
          summary: achievement?.summary,
          description: achievement?.description,
        },
      })
    );
  };

  const handleDeleteFeature = async () => {
    try {
      await deleteAchievement(achievement.id).unwrap();
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
    <Box sx={styles.achievementItemContainer}>
      <Box key={achievement.id}>
        <Box sx={styles.itemHeaderContainer}>
          <Box sx={styles.logoTitleContainer}>
            {IconComponent ? <IconComponent height={48} width={48} /> : <Typography>No Icon</Typography>}
            <Box sx={styles.achievementTitleYearContainer}>
              <Typography sx={styles.achievementTitle} variant='h6'>
                {achievement.summary}
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
        {/*commented out <Link> in case if its need it's needed in the future*/}

        {/*{achievement.link && (*/}
        {/*  <Link href={achievement.link} target='_blank' sx={styles.link}>*/}
        {/*    <Typography variant='subtitle3'>{achievement.link}</Typography>*/}
        {/*  </Link>*/}
        {/*)}*/}
        <Box sx={styles.achievementItemText}>
          <Typography variant='body1'>{achievement.description}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

AchievementItem.propTypes = {
  achievement: PropTypes.shape({
    id: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    link: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
  icon: PropTypes.elementType,
};

export default AchievementItem;
