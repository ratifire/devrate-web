import { styled } from '@mui/material';

export const CustomCheckboxIcon = styled('span')(({ theme }) => ({
  width: 24,
  height: 24,
  border: `1px solid ${theme.palette.checkBox.border}`,
  borderRadius: 4,
  position: 'relative',
  display: 'inline-block',
  transition: 'background-color 0.2s, border-color 0.2s',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover,
  },
  '&:active': {
    backgroundColor: theme.palette.action.selected,
  },
}));


export const CustomCheckedIcon = styled('span')(({ theme }) => ({
  width: 24,
  height: 24,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 4,
  position: 'relative',
  display: 'inline-block',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '4px',
    left: '8px',
    width: '8px',
    height: '14px',
    border: 'solid white',
    borderWidth: '0 2px 2px 0',
    transform: 'rotate(45deg)',
  },
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '&:active': {
    backgroundColor: theme.palette.primary.light,
  },
}));
