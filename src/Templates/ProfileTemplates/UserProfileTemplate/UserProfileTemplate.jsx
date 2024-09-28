import PropTypes from 'prop-types';
import React from 'react';

const UserProfileTemplate = ({ children }) => {
  return <div className='profile'>{children}</div>;
};

UserProfileTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProfileTemplate;
