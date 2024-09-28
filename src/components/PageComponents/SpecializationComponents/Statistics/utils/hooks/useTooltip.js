import { useTheme } from '@mui/material/styles';

const useTooltip = () => {
  const theme = useTheme();

  const tooltipContent = {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.background.level2,
    border: 'none',
    borderRadius: 1,
  };

  const tooltipLabel = {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.background.level2,
    fontSize: '14px',
  };

  return {
    tooltipContent,
    tooltipLabel,
  };
};

export default useTooltip;
