import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, LinearProgress } from '@mui/material';
import { styles } from './LinearProgressWithLabel.styles';
import { useTranslation } from 'react-i18next';

const LinearProgressWithLabel = ({ value, size, orientation }) => {
  const { t } = useTranslation();
  const style = size === 's' ? styles.s : styles.m;
  const orientationStyle = orientation === 'horizontal' ? styles.horizontal : styles.vertical;
  return (
    <Box sx={[styles.wrapper, orientationStyle]}>
      {orientation === 'horizontal' ?
        <Typography variant="subtitle2" sx={styles.text}>
          {`${value}/10`}
        </Typography>
        : <Typography variant="subtitle2" sx={styles.text}>
          {`${t('profile.baseUserInfo.loading')} ${Math.round(value)}%`}
        </Typography>
      }
      <Box sx={styles.wrapperProgress}>
        <LinearProgress sx={style} variant="determinate" value={orientation === 'horizontal' ? value * 10 : value } />
      </Box>
    </Box>
  );
};

LinearProgressWithLabel.propTypes = {
  size: PropTypes.oneOf(['s', 'm']).isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  value: PropTypes.number.isRequired,
};
export default LinearProgressWithLabel;
