import { useTheme } from '@mui/material/styles';

const useThemeSoftSkillsChart = () => {
  const theme = useTheme();

  const softSkillsGradientStartColor = theme.palette.statistics.softSkillsGradient.grad1;
  const softSkillsGradientMiddleColor = theme.palette.statistics.softSkillsGradient.grad2;
  const softSkillsGradientEndColor = theme.palette.statistics.softSkillsGradient.grad3;

  return {
    softSkillsGradientStartColor,
    softSkillsGradientMiddleColor,
    softSkillsGradientEndColor,
  };
};

export default useThemeSoftSkillsChart;
