import PropTypes from 'prop-types';
import { CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logoLight from '../../../assets/icons/LogoHeader/WhiteThemeIcon/logoHeader.svg';
import logo from '../../../assets/icons/LogoHeader/BlackThemeIcon/BlackLogoHeader.svg';
import { pictureData } from '../../../utils/constants/pictureData';
import { DARK_THEME } from '../../../utils/constants/Theme/theme';

const Logo = ({ width, height }) => {
  const theme = useTheme();
  return (
    <CardMedia component='picture' height={height} width={width}>
      {pictureData.map((element) => (
        <source
          key={element.id}
          media={`(max-width: ${element.mediaWidth}px)`}
          srcSet={
            theme.palette.mode === DARK_THEME
              ? `${element.src1xd} 1x, ${element.src2xd} 2x`
              : `${element.src1xl} 1x, ${element.src2xl} 2x`
          }
        />
      ))}
      <img alt='logo' height={height} src={theme.palette.mode === DARK_THEME ? logo : logoLight} width={width} />
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
