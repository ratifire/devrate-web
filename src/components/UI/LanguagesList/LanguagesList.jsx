import React from 'react';
import PropTypes from 'prop-types';
import LanguageLevel from '../LanguageLevel';
// import { styles } from './LanguagesList.styles';
// import { Box, Typography } from '@mui/material';

const LanguagesList = ({ data }) => {

  return (
    <>
      {data.map(({id, language, level }) => (
        <LanguageLevel key={id} language={language} level={level} />
      ))}
    </>
  );
};
LanguagesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
export default LanguagesList;
