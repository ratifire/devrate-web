import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AchievementEditModal from '../../../../../../ModalsComponents/ProfileModals/AchievementModal/AchievementEditModal';
import { useDeleteAchievementMutation } from '../../../../../../../redux/services/achievementsApiSlice.js';
import DropdownMenu from '../../DropdownMenu';
import styles from './AchievementItem.styles.js';

const AchievementItem = ({ achievement, icon: IconComponent }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteAchievement] = useDeleteAchievementMutation();

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditFeature = () => {
    handleCloseMenu();
    setIsModalOpen(true);
  };

  const handleDeleteFeature = async () => {
    try {
      await deleteAchievement(achievement.id).unwrap();
    } catch (error) {
      console.error('Failed to delete the achievement:', error);
    }
    handleCloseMenu();
  };


  return (
    <Box sx={styles.achievementItemContainer}>
      <Box key={achievement.id}>
        <Box sx={styles.itemHeaderContainer}>
          <Box sx={styles.logoTitleContainer}>
            {IconComponent ? <IconComponent width={48} height={48} /> : <Typography>No Icon</Typography>}
            <Box sx={styles.achievementTitleYearContainer}>
              <Typography variant='h6' sx={styles.achievementTitle}>
                {achievement.summary}
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleMenuOpen} sx={styles.iconBtnModal}>
            <MoreVertIcon />
          </IconButton>
          <DropdownMenu
            anchorEl={anchorEl}
            handleCloseMenu={handleCloseMenu}
            handleEditFeature={handleEditFeature}
            handleDeleteFeature={handleDeleteFeature}
          />
        </Box>
        {/*commented out <Link> in case if its need it's needed in the future*/}

        {/*{achievement.link && (*/}
        {/*  <Link href={achievement.link} target='_blank' sx={styles.link}>*/}
        {/*    <Typography variant='subtitle3'>{achievement.link}</Typography>*/}
        {/*  </Link>*/}
        {/*)}*/}
        <Box sx={styles.achievementItemText}>
          <Typography variant='body1' >
            {achievement.description}
          </Typography>
        </Box>

      </Box>
      <AchievementEditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} achievement={achievement} />
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
