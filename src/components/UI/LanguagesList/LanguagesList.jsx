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
      {data.map((lang) => (
        <LanguageLevel
          key={lang.id}
          id={lang.id}
          language={lang.name}
          level={lang.level}
          code={lang.code}
          languageDeleteHandler={languageDeleteHandler}
        />
      ))}
    </>
  );
};
LanguagesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
export default LanguagesList;
