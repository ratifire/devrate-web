import { useTheme } from '@mui/material/styles';

const useArrowTheme = () => {
  const theme = useTheme();

  const iconCircle = {
    fill: theme.palette.arrow.circle,
  };

  const arrowDownIcon = {
    fill: theme.palette.arrow.down,
  };

  const arrowUpIcon = {
    fill: theme.palette.arrow.up,
  };

  return {
    iconCircle,
    arrowDownIcon,
    arrowUpIcon,
  };
};

export default useArrowTheme;