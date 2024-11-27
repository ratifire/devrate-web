import { useTheme } from '@mui/material/styles';

const useArrowTheme = () => {
  const theme = useTheme();

  const iconCircle = {
    fill: theme.palette.specialization.arrow.circle,
  };

  const arrowDownIcon = {
    fill: theme.palette.specialization.arrow.down,
  };

  const arrowUpIcon = {
    fill: theme.palette.specialization.arrow.up,
  };

  return {
    iconCircle,
    arrowDownIcon,
    arrowUpIcon,
  };
};

export default useArrowTheme;
