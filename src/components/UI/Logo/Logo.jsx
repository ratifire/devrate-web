import React from 'react';
 //import logo from '../../../assets/icons/logo.svg';
import logoLight from '../../../assets/icons/logoLight.svg';
import logo from '../../../assets/icons/LogoHeader/BlackThemeIcon/BlackLogoHeader.svg';
import PropTypes from 'prop-types';
import { CardMedia } from '@mui/material';
import { pictureData } from '../../../utils/constants/pictureData';
import {useTheme} from "@mui/material/styles";

const Logo = ({ width, height }) => {
  const theme = useTheme()
  return (
    <CardMedia component='picture' width={width} height={height}>
      {pictureData.map((element) => (
        <source
          key={element.id}
          srcSet={`${element.src1x} 1x, ${element.src1x} 2x`}
          media={`(max-width: ${element.mediaWidth}px)`}
        />
      ))}
      <img src={theme.palette.mode==="dark"?logo:logoLight} alt='logo' width={width} height={height} />
    </CardMedia>
  );
};
Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
Logo.defaultProps = {
  width: '188',
  height: '25',
};
export default Logo;
