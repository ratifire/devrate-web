import React from 'react';
import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import bgFromString from '../../../utils/helpers/bgFromString';
import checkContrast from '../../../utils/helpers/checkContrastColor';

const UserAvatar = ({ userName, src, size }) => {
  const styles = {
    sm: {
      width: '44px',
      height: '44px',
      fontSize: 16,
      lineHeight: '28px',
      letterSpacing: '0.15px',
    },
    l: {
      width: '132px',
      height: '132px',
      fontSize: 48,
      lineHeight: '56px',
      letterSpacing: 0,
    },
  };

  const stringAvatar = (name) => {
    const BG_COLOR = bgFromString(name);
    return {
      sx: {
        backgroundColor: BG_COLOR,
        width: styles[size].width,
        height: styles[size].height,
        borderRadius: '4px',
        fontSize: styles[size].fontSize,
        lineHeight: styles[size].lineHeight,
        letterSpacing: styles[size].letterSpacing,
        fontWeight: 400,
        color: checkContrast(BG_COLOR),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  };

  return <Avatar {...stringAvatar(userName)} src={src} alt={userName} title={userName} />;
};
UserAvatar.propTypes = {
  userName: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'l']).isRequired,
  src: PropTypes.string,
};
UserAvatar.defaultProps = {
  src: null,
};
export default UserAvatar;
