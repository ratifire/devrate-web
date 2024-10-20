import { styled } from '@mui/system';

const CustomScrollContainer = styled('div')(({ theme }) => ({
	'& .fc-scroller-liquid-absolute': {
		scrollbarWidth: 'thin',
		scrollbarColor: `${theme.palette.neutral['600']} ${theme.palette.common.white}`,
		'&::-webkit-scrollbar': {
			width: '10px',
		},
		'&::-webkit-scrollbar-track': {
			backgroundColor: theme.palette.neutral['600'],
			borderRadius: '8px',
		},
		'&::-webkit-scrollbar-thumb': {
			borderRadius: "6px",
			backgroundColor: theme.palette.common.white,
		},
	},
}));

export default CustomScrollContainer
