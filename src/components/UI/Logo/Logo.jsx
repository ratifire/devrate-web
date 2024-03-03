import React from 'react';
import logo from '../../../assets/icons/logo.svg';
import PropTypes from 'prop-types';
import { CardMedia } from '@mui/material';
import { pictureData } from '../../../utils/constants/pictureData';

const Logo = ({ width, height }) => {
  return (
    <CardMedia component='picture' width={width} height={height}>
      {pictureData.map((element) => (
        <source
          key={element.id}
          srcSet={`${element.src1x} 1x, ${element.src1x} 2x`}
          media={`(max-width: ${element.mediaWidth}px)`}
        />
      ))}
      <img src={logo} alt='logo' width={width} height={height} />
    </CardMedia>
  );
};
Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Logo;
