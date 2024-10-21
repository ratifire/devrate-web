import React from 'react';
import { Box, Link, Typography, Tooltip, Grid } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import PropTypes from 'prop-types';
import styles from './AchievementItem.styles';

const AchievementItem = ({ achievement, icon: IconComponent }) => {
  return (
    <Grid item xs={6}>
    <Box sx={styles.achievementItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        {IconComponent && <IconComponent width={48} height={48} />}
        <Box sx={styles.logoTitleContainer}>
          <Box sx={styles.achievementTitleYearContainer}>
            <Typography variant='h6' sx={styles.achievementTitle}>
              {achievement.summary}
            </Typography>
          </Box>
          {/*{achievement.link && (*/}
            <Box sx={{ position: 'relative' }}>
              <Tooltip title={achievement.link} arrow>
                {/*commented out <Link> in case if its need it's needed in the future*/}
                <Link href={achievement.link} target='_blank' sx={styles.link} underline="none">
                {/*<Link  sx={styles.link} underline="none">*/}
                  <LinkIcon />
                </Link>
              </Tooltip>
            </Box>
          {/*// )}*/}
        </Box>
      </Box>
      <Typography variant='body1' sx={styles.achievementItemText}>
        {achievement.description}
      </Typography>
    </Box>
    </Grid>
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
