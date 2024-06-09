import React from 'react';
import PropTypes from 'prop-types';

const SpecialisationTemplate = ({ children }) => {
  return (
    <div className='specialisation'>
      {children}
    </div>
  );
};

SpecialisationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecialisationTemplate;