import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';
import { styles } from './SmallLinearProgressWithLabel.styles';

const SmallLinearProgressWithLabel = (props) => {
  const { value } = props;

  const boxStyles = value === 10 ? { width: 70, mr: 2 } : { width: 70, mr: 3 };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={boxStyles}>
        <LinearProgress sx={styles.progress} variant='determinate' value={value * 10} />
      </Box>
      <Typography variant='subtitle2' sx={styles.text}>
        {`${value}/10`}
      </Typography>
    </Box>
  );
};

SmallLinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default SmallLinearProgressWithLabel;
