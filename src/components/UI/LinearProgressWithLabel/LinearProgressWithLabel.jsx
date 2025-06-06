import PropTypes from 'prop-types';
import { Box, Typography, LinearProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styles } from './LinearProgressWithLabel.styles';

const LinearProgressWithLabel = ({ value, size, orientation }) => {
  const { t } = useTranslation();

  const progressStyle = size === 's' ? styles.s : styles.m;
  const orientationStyle = orientation === 'horizontal' ? styles.horizontal : styles.vertical;

  const isComplete = value >= 100;
  const progressValue = orientation === 'horizontal' ? value * 10 : value;
  const labelText =
    orientation === 'horizontal' ? `${value}/10` : `${t('profile.baseUserInfo.loading')} ${Math.round(value)}%`;

  return (
    <Box sx={[styles.wrapper, orientationStyle]}>
      {isComplete ? (
        <Box sx={styles.completeContainer}>
          <Typography sx={styles.completeText} variant='subtitle2'>
            {t('profile.baseUserInfo.complete')}
          </Typography>
          <CheckCircleOutlineIcon fontSize='medium' sx={styles.completeIcon} />
        </Box>
      ) : (
        <>
          <Typography sx={styles.text} variant='subtitle2'>
            {labelText}
          </Typography>
          <Box sx={styles.wrapperProgress}>
            <LinearProgress sx={progressStyle} value={progressValue} variant='determinate' />
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
