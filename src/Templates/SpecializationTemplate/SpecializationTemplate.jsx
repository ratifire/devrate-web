import React from 'react';
import PropTypes from 'prop-types';

const SpecializationTemplate = ({ children }) => {
  return (
    <div className='specialisation'>
      {children}
    </div>
  );
};

SpecializationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpecializationTemplate;