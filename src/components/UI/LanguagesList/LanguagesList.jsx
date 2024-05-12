import React from 'react';
import PropTypes from 'prop-types';
import LanguageLevel from '../LanguageLevel';

const LanguagesList = ({ data }) => {

  return (
    <>
      {data.map(({id, language, level }) => (
        <LanguageLevel key={id} language={language} level={level} tobeDeleted />
      ))}
    </>
  );
};
LanguagesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
export default LanguagesList;
