import React from 'react';
import PropTypes from 'prop-types';
import LanguageLevel from '../LanguageLevel';

const LanguagesList = ({ data }) => {
  //Uncomment this block if you want to see how this would work in Modal
  // const languageDeleteHandler = (language) => {
  //   console.log(language);
  // };

  return (
    <>
      {data.map(({id, language, level }) => (
        <LanguageLevel key={id} language={language} level={level} />
      ))}
      {/*Uncomment to see for language component will be in modal*/}
      {/*<LanguageLevel language={data[0].language} level={data[0].level} tobeDeleted languageDeleteHandler={languageDeleteHandler} />*/}
    </>
  );
};
LanguagesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
export default LanguagesList;
