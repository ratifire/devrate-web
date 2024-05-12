import React from 'react';
import PropTypes from 'prop-types';
import LanguageLevel from '../LanguageLevel';

const LanguagesList = ({ data }) => {
  //Needed for Modal to return language on which user clicked
  const languageDeleteHandler = (language) => {
    console.log(language);
  };

  return (
    <>
      {data.map(({id, language, level }) => (
        <LanguageLevel key={id} language={language} level={level} languageDeleteHandler={languageDeleteHandler} />
      ))}
    </>
  );
};
LanguagesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
export default LanguagesList;
