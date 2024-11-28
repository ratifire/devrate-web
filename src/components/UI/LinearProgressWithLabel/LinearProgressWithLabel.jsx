import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, LinearProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styles } from './LinearProgressWithLabel.styles';

const LinearProgressWithLabel = ({ value, size, orientation }) => {
  const { t } = useTranslation();
  const style = size === 's' ? styles.s : styles.m;
  const orientationStyle = orientation === 'horizontal' ? styles.horizontal : styles.vertical;

  const isComplete = value >= 100;

  return (
    <Box sx={[styles.wrapper, orientationStyle]}>
      {isComplete ? (
        <Box sx={styles.completeContainer}>
          <Box>
            <Typography sx={styles.completeText} variant='subtitle2'>
              {t('profile.baseUserInfo.complete')}
            </Typography>
          </Box>

          <Box>
            <CheckCircleOutlineIcon fontSize={'medium'} sx={styles.completeIcon} />
          </Box>
        </Box>
      ) : (
        <>
          <Typography sx={styles.text} variant='subtitle2'>
            {orientation === 'horizontal'
              ? `${value}/10`
              : `${t('profile.baseUserInfo.loading')} ${Math.round(value)}%`}
          </Typography>
          <Box sx={styles.wrapperProgress}>
            <LinearProgress
              sx={style}
              value={orientation === 'horizontal' ? value * 10 : value}
              variant='determinate'
            />
          </Box>
        </>
      )}
    </Box>
  );
};

LinearProgressWithLabel.propTypes = {
  size: PropTypes.oneOf(['s', 'm']).isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  value: PropTypes.number.isRequired,
};

export default LinearProgressWithLabel;
