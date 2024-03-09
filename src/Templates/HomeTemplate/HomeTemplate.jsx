import React from 'react';
import PropTypes from 'prop-types';

const HomeTemplate = ({ children }) => {
  return <div className='home'>{children}</div>;
};
HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default HomeTemplate;
