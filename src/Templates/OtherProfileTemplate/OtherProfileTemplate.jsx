import PropTypes from 'prop-types';
import React from 'react';

const OtherProfileTemplate = ({ children }) => {
  return <div className='profile'>{children}</div>;
};

OtherProfileTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OtherProfileTemplate;
