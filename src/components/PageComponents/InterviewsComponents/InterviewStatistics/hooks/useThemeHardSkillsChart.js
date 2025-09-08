import { useTheme } from '@mui/material/styles';

const useThemeHardSkillsChart = () => {
  const theme = useTheme();

  const hardSkillsGradientStartColor = theme.palette.statistics.hardSkillsGradient.grad1;
  const hardSkillsGradientMiddleColor = theme.palette.statistics.hardSkillsGradient.grad2;
  const hardSkillsGradientEndColor = theme.palette.statistics.hardSkillsGradient.grad3;

  return {
    hardSkillsGradientStartColor,
    hardSkillsGradientMiddleColor,
    hardSkillsGradientEndColor,
  };
};

export default useThemeHardSkillsChart;
