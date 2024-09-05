import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import PropTypes from 'prop-types';
import { ReactComponent as Star } from '../../../../../../assets/icons/star.svg';
import styles from './AchievementItem.style';

const AchievementItem = ({ achievement }) => {
  return (
    <Box sx={styles.achievementItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        <Star width={46} height={38} />
        <Box sx={styles.logoTitleContainer}>

          <Box sx={styles.achievementTitleYearContainer}>
            <Typography variant='h6' sx={styles.achievementTitle}>
              {achievement.summary}
            </Typography>
          </Box>

          <Box >
            {achievement.link && (
              <Link href={achievement.link} target='_blank' sx={styles.link} underline="none">
                <LinkIcon />
              </Link>
            )}
          </Box>

        </Box>
      </Box>
      <Typography variant='body1' sx={styles.achievementItemText}>
        {achievement.description}
      </Typography>
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
