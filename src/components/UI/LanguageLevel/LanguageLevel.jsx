import React from 'react';
import { styles } from './LanguageLevel.styles';
import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

const LanguageLevel = ({ language, level, tobeDeleted, languageDeleteHandler }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.language}>{language}</Box>
      <Typography variant='caption3' sx={styles.level}>
        {level}
      </Typography>
      {tobeDeleted &&
        <IconButton
          sx={styles.icon}
          onClick={() => languageDeleteHandler(language)}
        >
          <CloseIcon/>
        </IconButton>
      }
    </Box>
  );
};

LanguageLevel.propTypes = {
  language: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  tobeDeleted: PropTypes.bool,
  languageDeleteHandler: PropTypes.func,
};

export default LanguageLevel;