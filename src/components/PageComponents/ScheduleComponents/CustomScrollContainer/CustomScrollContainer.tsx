import { styled } from '@mui/system';

const CustomScrollContainer = styled('div')(({ theme }) => ({
    '& .fc-scroller .fc-scroller-liquid-absolute': {
        scrollbarWidth: 'thin',
        scrollbarColor: `${theme.palette.scroll.scrollWrapp.backgroundColor} ${theme.palette.scroll.scrollEl.backgroundColor}`,
        '&::-webkit-scrollbar': {
            width: '10px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: `${theme.palette.scroll.scrollWrapp.backgroundColor}`,
            borderRadius: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: "6px",
            backgroundColor: `${theme.palette.scroll.scrollEl.backgroundColor}`,
        },
    },
}));

export default CustomScrollContainer
