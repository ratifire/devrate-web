import React from 'react';
import { styles } from './LanguageLevel.styles';
import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

const LanguageLevel = ({ language, level, tobeDeleted }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.language}>{language}</Box>
      <Typography variant='caption3' sx={styles.level}>
        {level}
      </Typography>
      {tobeDeleted && <IconButton sx={styles.icon}><CloseIcon/></IconButton>}
    </Box>
  );
};

LanguageLevel.propTypes = {
  language: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  tobeDeleted: PropTypes.bool,
};

export default LanguageLevel;
