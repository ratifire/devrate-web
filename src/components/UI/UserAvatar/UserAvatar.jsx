import React from 'react';
import { Avatar } from '@mui/material';
import { styles } from './UserAvatar.styles';
import PropTypes from 'prop-types';
import { bgFromString, checkContrastColor } from '../../../utils/helpers/index'

const UserAvatar = ({ userName, src, size }) => {
  const stringAvatar = (name) => {
    const BG_COLOR = bgFromString(name);
    return {
      sx: {
        backgroundColor: BG_COLOR,
        borderRadius: styles[size].borderRadius,
        width: styles[size].width,
        height: styles[size].height,
        fontSize: styles[size].fontSize,
        lineHeight: styles[size].lineHeight,
        letterSpacing: styles[size].letterSpacing,
        fontWeight: styles[size].fontWeight,
        color: checkContrastColor(BG_COLOR),
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
