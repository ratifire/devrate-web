import { useTheme } from '@mui/material/styles';

const useThemeLevelChart = () => {
  const theme = useTheme();

  const grad1 = theme.palette.specialization.levelChart.grad1;
  const grad2 = theme.palette.specialization.levelChart.grad2;
  const grad3 = theme.palette.specialization.levelChart.grad3;
  const grad4 = theme.palette.specialization.levelChart.grad4;

  return {
    grad1,
    grad2,
    grad3,
    grad4,
  };
};

export default useThemeLevelChart;
