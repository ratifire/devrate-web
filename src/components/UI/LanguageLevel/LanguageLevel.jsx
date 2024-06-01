import React from 'react';
import { styles } from './LanguageLevel.styles';
import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

const LanguageLevel = ({id, language, level, code, tobeDeleted, languageDeleteHandler }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.language}>{code}</Box>
      <Typography variant='caption3' sx={styles.level}>
        {language}: {level}
      </Typography>
      {tobeDeleted && (
        <IconButton sx={styles.icon} onClick={() => languageDeleteHandler(id)}>
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  );
};

LanguageLevel.propTypes = {
  language: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  tobeDeleted: PropTypes.bool,
  languageDeleteHandler: PropTypes.func,
};

export default LanguageLevel;
