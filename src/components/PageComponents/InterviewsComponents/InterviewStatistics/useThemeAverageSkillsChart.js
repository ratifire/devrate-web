import { useTheme } from '@mui/material/styles';

const useThemeAverageSkillsChart = () => {
  const theme = useTheme();

  const gradAver1 = theme.palette.statistics.averageSkillsGradient.grad1;
  const gradAver2 = theme.palette.statistics.averageSkillsGradient.grad2;
  const gradAver3 = theme.palette.statistics.averageSkillsGradient.grad3;
  const gradAver4 = theme.palette.statistics.averageSkillsGradient.grad3;

  return {
    gradAver1,
    gradAver2,
    gradAver3,
    gradAver4,
  };
};

export default useThemeAverageSkillsChart;
