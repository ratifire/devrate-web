import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import { bgFromString, checkContrastColor } from '../../../utils/helpers';
import { styles } from './UserAvatar.styles';

const UserAvatar = ({ userFirstName, userLastName, src, size, correctStyle, radius }) => {
  const userName = `${userFirstName} ${userLastName}`;
  const stringAvatar = (firstName, lastName) => {
    const BG_COLOR = bgFromString(`${userFirstName} ${userLastName}`);
    return {
      sx: [
        {
          backgroundColor: src ? 'transparent' : BG_COLOR,
          borderRadius: styles[radius].borderRadius,
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
  userFirstName: PropTypes.string.isRequired,
  userLastName: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['s', 'sm', 'm', 'l']).isRequired,
  radius: PropTypes.oneOf(['square', 'circle']).isRequired,
  src: PropTypes.string,
  correctStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
UserAvatar.defaultProps = {
  src: null,
};
export default UserAvatar;
