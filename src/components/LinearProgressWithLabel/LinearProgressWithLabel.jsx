import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styles } from './LinearProgressWithLabel.styles';
import { useTranslation } from 'react-i18next';

function LinearProgressWithLabel(props) {
  const { t } = useTranslation();
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperProgress}>
        <LinearProgress sx={styles.progress} variant='determinate' {...props} />
      </Box>
      <Box sx={styles.wrapperText}>
        <Typography
          variant='body2'
          sx={styles.text}
        >{`${t('profile.baseUserInfo.loading')} ${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};
export default LinearProgressWithLabel;
