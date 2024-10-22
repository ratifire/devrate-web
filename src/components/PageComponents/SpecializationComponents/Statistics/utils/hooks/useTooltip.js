import { useTheme } from '@mui/material/styles';

const useTooltip = () => {
  const theme = useTheme();

  const itemStyle = {
    color: theme.palette.modalDropdown.color,
  };

  const contentStyle = {
    fontSize: '12px',
    backgroundColor: theme.palette.modalDropdown.backgroundColor,
    color: theme.palette.modalDropdown.color,
    borderRadius: 1,
    border: 'transparent',
  };

  return {
    itemStyle,
    contentStyle
  };
};

export default useTooltip;
