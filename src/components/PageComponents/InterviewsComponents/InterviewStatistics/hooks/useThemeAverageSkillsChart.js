import { useTheme } from '@mui/material/styles';

const useThemeAverageSkillsChart = () => {
  const theme = useTheme();

  const averageSkillsGradientStartColor = theme.palette.statistics.averageSkillsGradient.grad1;
  const averageSkillsGradientMiddleColor = theme.palette.statistics.averageSkillsGradient.grad2;
  const averageSkillsGradientEndColor = theme.palette.statistics.averageSkillsGradient.grad3;
  const averageSkillsGradientExtraColor = theme.palette.statistics.averageSkillsGradient.grad3;

  return {
    averageSkillsGradientStartColor,
    averageSkillsGradientMiddleColor,
    averageSkillsGradientEndColor,
    averageSkillsGradientExtraColor,
  };
};

export default useThemeAverageSkillsChart;
