import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './Responsibility.styles';
import CloseIcon from '@mui/icons-material/Close';

const Responsibility = ({ responsibility, tobeDeleted, responsibilityDeleteHandler }) => {
  return (
    <Box sx={tobeDeleted ? styles.responsibilityContainerwithBTN : styles.responsibilityContainer}>
      <Typography variant='subtitle2' sx={styles.responsibilityText}>
        {responsibility}
      </Typography>
      {tobeDeleted &&
        <IconButton
          sx={styles.icon}
          onClick={() => responsibilityDeleteHandler(responsibility)}
        >
          <CloseIcon/>
        </IconButton>
      }
    </Box>
  );
};

Responsibility.propTypes = {
  responsibility: PropTypes.string,
  tobeDeleted: PropTypes.bool,
  responsibilityDeleteHandler: PropTypes.func,
};
export default Responsibility;
