import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './LanguagesList.styles';
import { Box, Typography } from '@mui/material';

const LanguagesList = ({ data }) => {
  return (
    <>
      {data.map(({ level, language, id }) => (
        <Box key={id} sx={styles.wrapper}>
          <Box sx={styles.language}>{language}</Box>
          <Typography sx={styles.level}>{level}</Typography>
        </Box>
      ))}
    </>
  );
};
LanguagesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
export default LanguagesList;
