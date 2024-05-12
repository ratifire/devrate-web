import React from 'react';
import { styles } from './LanguageLevel.styles';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const LanguageLevel = ({ language, level }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.language}>{language}</Box>
      <Typography variant='caption3' sx={styles.level}>
        {level}
      </Typography>
    </Box>
  );
};

LanguageLevel.propTypes = {
  language: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default LanguageLevel;
