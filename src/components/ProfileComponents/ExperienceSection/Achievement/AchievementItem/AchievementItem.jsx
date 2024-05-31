import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Link, Typography } from '@mui/material';
import { ReactComponent as Star } from '../../../../../assets/icons/star.svg';
import styles from './AchievementItem.styles.js';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DropdownMenu from '../../DropdownMenu/DropdownMenu';
import AchievementEditModal from '../../../../../components/ProfileModals/AchievementModal/AchievementEditModal.jsx';

const AchievementItem = ({ achievement }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseMenu = () => {
    console.log('Menu closed');
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    console.log('Menu opened');
    setAnchorEl(event.currentTarget);
  };

  const handleEditFeature = () => {
    console.log('Editing feature');
    handleCloseMenu();
    setIsModalOpen(true);
  };

  const handleDeleteFeature = () => {
    console.log('Deleting feature');
  };

  return (
    <Box sx={styles.achievementItemContainer}>
      <Box key={achievement.id} sx={styles.achievementContainer}>
        <Box sx={styles.itemHeaderContainer}>
          <Box sx={styles.logoTitleContainer}>
            <Star width={46} height={38} />
            <Box sx={styles.achievementTitleYearContainer}>
              <Typography variant='h6' sx={styles.achievementTitle}>
                {achievement.summary}
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={(event) => handleMenuOpen(event)}>
            <MoreVertIcon />
          </IconButton>
          <DropdownMenu
            anchorEl={anchorEl} 
            handleCloseMenu={handleCloseMenu}
            handleEditFeature={handleEditFeature}
            handleDeleteFeature={handleDeleteFeature}
          />
        </Box>
        {achievement.link && (
          <Link href={achievement.link} target="_blank" sx={styles.link}>
            <Typography variant='subtitle3'>
              {achievement.link}
            </Typography>
          </Link>
        )}
        <Typography variant='body1' sx={styles.achievementItemText}>
          {achievement.description}
        </Typography>
      </Box>
      <AchievementEditModal
        isOpen={isModalOpen}
        onClose={() => {
          console.log('Modal closed');
          setIsModalOpen(false);
        }}
        onSubmit={handleCloseMenu}
      />
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
};

export default AchievementItem;
