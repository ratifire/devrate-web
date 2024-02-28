import React from 'react';
import logo from '../../../assets/icons/logo.svg';
import PropTypes from 'prop-types';

const Logo = ({ width, height }) => {
  return <img src={logo} alt='logo' width={width} height={height} />;
};
Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Logo;
