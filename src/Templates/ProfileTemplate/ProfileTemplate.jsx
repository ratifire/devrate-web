import React from 'react';
import PropTypes from 'prop-types';

const ProfileTemplate = ({ children }) => {
  return <div className='profile'>{children}</div>;
};
ProfileTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProfileTemplate;
