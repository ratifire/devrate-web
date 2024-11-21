import React from 'react';
import logoLight from '../../../assets/icons/LogoHeader/WhiteThemeIcon/logoHeader.svg';
import logo from '../../../assets/icons/LogoHeader/BlackThemeIcon/BlackLogoHeader.svg';
import PropTypes from 'prop-types';
import { CardMedia } from '@mui/material';
import { pictureData } from '../../../utils/constants/pictureData';
import { useTheme } from '@mui/material/styles';
import { DARK_THEME } from '../../../utils/constants/Theme/theme';

const Logo = ({ width, height }) => {
  const theme = useTheme();
  return (
    <CardMedia component='picture' width={width} height={height}>
      {pictureData.map((element) => (
        <source
          key={element.id}
          srcSet={
            theme.palette.mode === DARK_THEME
              ? `${element.src1xd} 1x, ${element.src2xd} 2x`
              : `${element.src1xl} 1x, ${element.src2xl} 2x`
          }
          media={`(max-width: ${element.mediaWidth}px)`}
        />
      ))}
      <img src={theme.palette.mode === DARK_THEME ? logo : logoLight} alt='logo' width={width} height={height} />
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
