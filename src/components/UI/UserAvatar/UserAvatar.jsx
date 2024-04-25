import React from 'react';
import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

const UserAvatar = ({ nameUser, src }) => {
  const stringToColor = (string) => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  const stringAvatar = (name) => {
    return {
      sx: {
        backgroundColor: stringToColor(name),
        width: '100%',
        height: '100%',
        borderRadius: '4px',
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  };

  return <Avatar {...stringAvatar(nameUser)} src={src} alt={nameUser} />;
};
UserAvatar.propTypes = {
  nameUser: PropTypes.string.isRequired,
  src: PropTypes.string,
};
UserAvatar.defaultProps = {
  src: null,
};
export default UserAvatar;
