import { FormControlLabel, FormGroup, styled, Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../redux/theme/themeSlice';
import { DARK_THEME } from '../../../utils/constants/Theme/theme';
import { darkIcon, lightIcon } from '../../../utils/constants/Theme/themeIcons';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);

  const backgroundImage = (string) => {
    return string === 'dark' ? darkIcon() : lightIcon();
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 53,
    height: 26,
    padding: '0 1px 0px 1px',
    margin: 0,
    transition: 'all 0.3s ease',
    '& .MuiSwitch-switchBase': {
      padding: 0,
      transform: 'translateX(3px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(28px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: backgroundImage(theme.palette.mode),
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.themeSwitcher.backgroundColor,
          borderRadius: 26 / 2,
          border: `${theme.palette.themeSwitcher.borderColor} 1px solid`,
          ...theme.applyStyles(DARK_THEME, {
            backgroundColor: theme.palette.themeSwitcher.backgroundColor,
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.themeSwitcher.switcherColor,
      width: 22,
      height: 22,
      marginTop: '2px',
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        marginTop: '1px',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: backgroundImage(theme.palette.mode),
      },
      ...theme.applyStyles('light', {
        backgroundColor: theme.palette.themeSwitcher.switcherColor,
      }),
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.themeSwitcher.backgroundColor,
      borderRadius: 26 / 2,
      border: `${theme.palette.themeSwitcher.borderColor} 1px solid`,
      ...theme.applyStyles(DARK_THEME, {
        backgroundColor: '#8796A5',
      }),
    },
  }));

  return (
    <FormGroup sx={{ display: 'flex', width: '52px' }}>
      <FormControlLabel
        control={<MaterialUISwitch checked={themeMode === DARK_THEME} onChange={() => dispatch(toggleTheme())} />}
      />
    </FormGroup>
  );
};
export default ThemeSwitch;
