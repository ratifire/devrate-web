import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Link, Typography } from '@mui/material';
import { ReactComponent as Star } from '../../../../../assets/icons/star.svg';
import styles from './AchievementItem.styles.js';
import DownloadIcon from '@mui/icons-material/Download';

const AchievementItem = ({ achievement }) => {
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
          <IconButton sx={styles.icon}>
            <DownloadIcon />
          </IconButton>
        </Box>
        <Typography variant='body1' sx={styles.achievementItemText}>
          {achievement.description}
        </Typography>
        {achievement.link && (
          <Link href={achievement.link} target="_blank" sx={styles.link}>
            <Typography variant='subtitle3'>
              {achievement.link}
            </Typography>
          </Link>
        )}
      </Box>
    </Box>
  );
};

AchievementItem.propTypes = {
  achievement: PropTypes.shape({
    id: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    link: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default AchievementItem;
