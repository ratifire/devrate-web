import {createTheme} from '@mui/material/styles';


const theme = createTheme({
    spacing: 1,
    palette: {
        primary: {
            main: '#7D66F5E5'
        },
        secondary: {
            main: '#a1a1aa',
            light: '#F1F1F17F',
        },
        error: {
            main: '#DD3350CC'
        },
        background: {
            default: '#1D1D1D',
            gradient:'radial-gradient(61.9% 53.23% at 62.67% 50%, rgb(71, 62, 98) 0%, rgb(71, 62, 98) 100%)',
        },
    },
    typography: {
        title: {
            fontSize: 60,
            fontWeight: 700,
            background: 'linear-gradient(90deg, #7562e4 0%, #fb93a6 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            '&-webkit-background-clip': 'text',
            '&-webkit-text-fill-color': 'linear-gradient(90deg, #7562e4 0%, #fb93a6 100%)'
        },
        aboutTitle: {
            fontSize: 46,
            fontWeight: 500,
            background: 'linear-gradient(90deg, #7562e4 0%, #fb93a6 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            '&-webkit-background-clip': 'text',
            '&-webkit-text-fill-color': 'linear-gradient(90deg, #7562e4 0%, #fb93a6 100%)'
        },
        subtitle: {
            fontSize: 22,
            fontWeight: 500,
            color: '#a1a1aa',
        },
        subtitle1: {
            fontSize: 16,
            fontWeight: 500,
            color: '#f1f1f1',
        },
    }
});
export default theme;