import { useTheme } from '@mui/material/styles';

const useTooltipColorChart = () => {
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

  const customCursor = {
    fill: theme.palette.specialization.interviewChart.cursorHover,
  };
  return {
    itemStyle,
    contentStyle,
    customCursor,
  };
};

export default useTooltipColorChart;
