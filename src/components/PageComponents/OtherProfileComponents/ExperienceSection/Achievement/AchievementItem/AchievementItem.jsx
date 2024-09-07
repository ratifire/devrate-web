import React from 'react';
import { Box, Link, Typography, Tooltip } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import PropTypes from 'prop-types';
import { ReactComponent as Lightning } from '../../../../../../assets/icons/lightning.svg';
import styles from './AchievementItem.style';

const AchievementItem = ({ achievement }) => {
  return (
    <Box sx={styles.achievementItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        <Lightning width={46} height={38} />
        <Box sx={styles.logoTitleContainer}>

          <Box sx={styles.achievementTitleYearContainer}>
            <Typography variant='h6' sx={styles.achievementTitle}>
              {achievement.summary}
            </Typography>
          </Box>

          {achievement.link && (
            <Box sx={{ position: 'relative' }}>
              <Tooltip title={achievement.link} arrow>
                <Link href={achievement.link} target='_blank' sx={styles.link} underline="none">
                  <LinkIcon />
                </Link>
              </Tooltip>
            </Box>
          )}

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
