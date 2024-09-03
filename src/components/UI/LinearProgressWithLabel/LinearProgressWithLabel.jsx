import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, LinearProgress, Typography } from '@mui/material';
import { styles } from './LinearProgressWithLabel.styles';
import { useTranslation } from 'react-i18next';

const LinearProgressWithLabel = ({ value }) => {
  const { t } = useTranslation();
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperProgress}>
        <LinearProgress sx={styles.progress} variant='determinate' value={value} />
      </Box>
      <Box sx={styles.wrapperText}>
        <Typography variant='subtitle2' sx={styles.text}>
          {`${t('profile.baseUserInfo.loading')} ${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};
export default LinearProgressWithLabel;
