import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './Duty.styles';
import CloseIcon from '@mui/icons-material/Close';

const Duty = ({ duty, tobeDeleted, dutyDeleteHandler }) => {
  return (
    <Box sx={tobeDeleted ? styles.dutyContainerwithBTN : styles.dutyContainer}>
      <Typography variant='subtitle2' sx={styles.dutyText}>
        {duty}
      </Typography>
      {tobeDeleted &&
        <IconButton
          sx={styles.icon}
          onClick={() => dutyDeleteHandler(duty)}
        >
          <CloseIcon/>
        </IconButton>
      }
    </Box>
  );
};

Duty.propTypes = {
  duty: PropTypes.string,
  tobeDeleted: PropTypes.bool,
  dutyDeleteHandler: PropTypes.func,
};
export default Duty;
