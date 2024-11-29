import React from 'react';
import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import { bgFromString, checkContrastColor } from '../../../utils/helpers';
import { styles } from './UserAvatar.styles';

const UserAvatar = ({ userName, userFirstName, userLastName, src, size, correctStyle }) => {
  const stringAvatar = (firstName, lastName) => {
    const BG_COLOR = bgFromString(`${userFirstName} ${userLastName}`);
    return {
      sx: [
        {
          backgroundColor: src ? 'transparent' : BG_COLOR,
          borderRadius: styles[size].borderRadius,
          width: styles[size].width,
          height: styles[size].height,
          fontSize: styles[size].fontSize,
          lineHeight: styles[size].lineHeight,
          letterSpacing: styles[size].letterSpacing,
          fontWeight: styles[size].fontWeight,
          color: checkContrastColor(BG_COLOR),
        },
        correctStyle,
      ],
      children: `${firstName[0]}${lastName[0]}`,
    };
  };

  return <Avatar {...stringAvatar(userFirstName, userLastName)} alt={userName} src={src} title={userName} />;
};
UserAvatar.propTypes = {
  userName: PropTypes.string.isRequired,
  userFirstName: PropTypes.string.isRequired,
  userLastName: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'l']).isRequired,
  src: PropTypes.string,
  correctStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
UserAvatar.defaultProps = {
  src: null,
};
export default UserAvatar;
