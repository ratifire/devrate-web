import { useTheme } from '@mui/material/styles';

const useThemeHardSkillsChart = () => {
  const theme = useTheme();

  const gradHard1 = theme.palette.statistics.hardSkillsGradient.grad1;
  const gradHard2 = theme.palette.statistics.hardSkillsGradient.grad2;
  const gradHard3 = theme.palette.statistics.hardSkillsGradient.grad3;

  return {
    gradHard1,
    gradHard2,
    gradHard3,
  };
};

export default useThemeHardSkillsChart;
